"use server";
import nodemailer from "nodemailer";
import { headers } from "next/headers";

// Simple in-memory rate limiting
type RateLimitMap = Record<string, { count: number; resetTime: number }>;
const rateLimitMap: RateLimitMap = {};

const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

export async function sendContactEmail(formData: {
  fullName: string;
  email: string;
  reason: string;
  phone: string;
  message: string;
}) {
  console.log("⬇️ Datos recibidos en el servidor:", formData);
  try {
    // 1. Rate Limiting Check
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || "unknown-ip";
    const now = Date.now();

    if (!rateLimitMap[ip]) {
      rateLimitMap[ip] = { count: 1, resetTime: now + WINDOW_MS };
    } else {
      if (now > rateLimitMap[ip].resetTime) {
        rateLimitMap[ip] = { count: 1, resetTime: now + WINDOW_MS };
      } else {
        rateLimitMap[ip].count++;
        if (rateLimitMap[ip].count > MAX_REQUESTS) {
          return { error: "Has enviado demasiados mensajes. Por favor, inténtalo de nuevo más tarde." };
        }
      }
    }

    const { fullName, email, reason, phone, message } = formData;

    if (!fullName || !email || !reason || !message) {
      return { error: "Por favor completa todos los campos requeridos." };
    }

    // 2. Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.pleimeit.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER || "no-reply@pleimeit.com",
        pass: process.env.SMTP_PASSWORD || "[GqsmHk*a8RM", 
      },
    });

    // 3. Construct Email
    const mailOptions = {
      from: `"${process.env.SMTP_FROM_NAME || 'Pleimeit'}" <${process.env.SMTP_FROM_EMAIL || 'no-reply@pleimeit.com'}>`,
      to: 'pleimeit.app@gmail.com', 
      cc: process.env.SMTP_RECIPIENT_EMAIL || 'info@pleimeit.com', 
      subject: `Nuevo mensaje de contacto: ${reason}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6C5CE7;">Nuevo Mensaje desde la Landing Page</h2>
          <p><strong>Nombre:</strong> ${fullName}</p>
          <p><strong>Correo electrónico:</strong> ${email}</p>
          <p><strong>Motivo:</strong> ${reason}</p>
          <p><strong>Teléfono:</strong> ${phone || 'No especificado'}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Mensaje:</strong></p>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    // 4. Send Email
    const sendResult = await transporter.sendMail(mailOptions);
    console.log("Nodemailer send result (Server Action):", sendResult);

    return { success: true, message: "Mensaje enviado correctamente" };
  } catch (error) {
    console.error("Error sending contact email (Server Action):", error);
    return { error: "Ocurrió un error al enviar el mensaje. Inténtalo más tarde." };
  }
}
