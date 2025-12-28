"use client";
import ButtonComponent from "@/app/components/ButtonComponent";
import Image from "next/image";
import { useState } from "react";

const ContactComponent = () => {
  const [isSubmittedState, setIsSubmittedState] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittedState(true);
  };

  return (
    <section
      id="contact"
      className="section bg-[#F7F8FE] min-h-screen scroll-mt-30 "
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-xl w-full">
            {isSubmittedState ? (
              <div className="text-center space-y-6">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-textBlack">
                  Gracias, hemos recibido tu mensaje.
                </h2>

                <div className="flex justify-center">
                  <Image
                    src="/images/home/Workingman.png"
                    alt="Mensaje recibido"
                    width={300}
                    height={300}
                  />
                </div>

                <button
                  onClick={() => setIsSubmittedState(false)}
                  className="bg-purpleBackground hover:bg-purpleBackground/90 text-white font-semibold px-8 py-3 rounded-full transition"
                >
                  Volver a enviar mensaje
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-inter text-3xl lg:text-4xl font-extrabold text-textBlack mb-4">
                  ¿Tienes dudas?
                </h2>

                <p className="text-textBlack mb-8 leading-relaxed font-inter">
                  Cuéntanos qué tienes en mente. Nos encantará escucharte y ver
                  cómo podemos ayudarte a hacer crecer tu comunidad deportiva.
                  <br />
                  Completa el formulario y te responderemos pronto ⚡
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter text-sm font-medium text-textBlack">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ejemplo: Joseph Montoya"
                        className="mt-1 w-full text-textGraySecundary rounded-lg border border-gray-200 shadow-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purpleBackground"
                      />
                    </div>

                    <div>
                      <label className="font-inter text-sm font-medium text-textBlack">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Ejemplo: joseph@email.com"
                        className="mt-1 w-full rounded-lg border text-textGraySecundary   border-gray-200 shadow-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purpleBackground"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-inter text-sm font-medium text-textBlack">
                        Motivo del mensaje
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ejemplo: Soporte técnico"
                        className="mt-1 w-full rounded-lg border text-textGraySecundary  border-gray-200 shadow-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purpleBackground"
                      />
                    </div>

                    <div>
                      <label className="font-inter text-sm font-medium text-textBlack">
                        Número
                      </label>
                      <div className="mt-1 flex gap-2">
                        <select
                          required
                          defaultValue=""
                          className="rounded-lg border border-gray-200 shadow-sm px-3 py-3 text-sm focus:outline-none"
                        >
                          <option value="" disabled>
                            País
                          </option>
                          <option value="PE">PE</option>
                        </select>

                        <input
                          type="tel"
                          required
                          placeholder="Número de teléfono"
                          className="w-full rounded-lg border text-textGraySecundary  border-gray-200 shadow-sm px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purpleBackground"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="font-inter text-sm font-medium text-textBlack">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Cuéntanos brevemente cómo podemos ayudarte."
                      className="mt-1 w-full rounded-lg border border-gray-200  text-textGraySecundary  shadow-sm px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purpleBackground"
                    />
                  </div>

                  <ButtonComponent text="Enviar mensaje" link="/" />
                </form>
              </>
            )}
          </div>

          {!isSubmittedState && (
            <div className="hidden lg:flex flex-1 justify-end">
              <Image
                src="/images/home/Workingman.png"
                alt="Contacto Pleimeit"
                width={620}
                height={620}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
