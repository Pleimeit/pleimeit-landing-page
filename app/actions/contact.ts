"use server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";

type RateLimitMap = Record<string, { count: number; resetTime: number }>;
const rateLimitMap: RateLimitMap = {};

const MAX_REQUESTS = 20;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export async function sendContactEmail(formData: {
  fullName: string;
  email: string;
  reason: string;
  phone: string;
  message: string;
}) {
  try {
    // 1. Validate env vars
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM_NAME, SMTP_FROM_EMAIL, SMTP_TO_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !SMTP_TO_EMAIL) {
      console.error("Missing SMTP environment variables:", { SMTP_HOST: !!SMTP_HOST, SMTP_USER: !!SMTP_USER, SMTP_PASSWORD: !!SMTP_PASSWORD, SMTP_TO_EMAIL: !!SMTP_TO_EMAIL });
      return { error: "Error de configuración del servidor. Contacta al administrador." };
    }

    // 2. Rate Limiting
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();

    if (!rateLimitMap[ip] || now > rateLimitMap[ip].resetTime) {
      rateLimitMap[ip] = { count: 1, resetTime: now + WINDOW_MS };
    } else {
      rateLimitMap[ip].count++;
      if (rateLimitMap[ip].count > MAX_REQUESTS) {
        console.warn(`Rate limit exceeded for IP: ${ip}`);
        return { error: "Has enviado demasiados mensajes. Por favor, inténtalo de nuevo más tarde." };
      }
    }

    console.log("Sending email to:", SMTP_TO_EMAIL, "from:", SMTP_FROM_EMAIL);

    // 3. Validate form data
    const { fullName, email, reason, phone, message } = formData;

    if (!fullName || !email || !reason || !message) {
      return { error: "Por favor completa todos los campos requeridos." };
    }

    // 4. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });

    // 5. Construct & send email
    const mailOptions = {
      from: `"${SMTP_FROM_NAME || "Pleimeit"}" <${SMTP_FROM_EMAIL || SMTP_USER}>`,
      to: SMTP_TO_EMAIL,
      subject: `Contacto Landing - ${reason}`,
      text: `Nombre: ${fullName}\nEmail: ${email}\nMotivo: ${reason}\nTelefono: ${phone || "No especificado"}\n\nMensaje:\n${message}`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result.response, "Accepted:", result.accepted);

    return { success: true, message: "Mensaje enviado correctamente" };
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { error: "Ocurrió un error al enviar el mensaje. Inténtalo más tarde." };
  }
}
