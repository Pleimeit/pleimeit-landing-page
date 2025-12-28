"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const images = ["/images/home/Athletes.png", "/images/home/Running.png"];

const BannerComponent = () => {
  const [currentImageState, setCurrentImageState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageState((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-purpleBackground text-white pt-24">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 min-h-screen relative z-10">
        <div className="flex flex-col justify-center">
          <h1 className="font-bebas text-5xl lg:text-7xl mb-8">
            JUEGA, CONOCE Y FORMA <br />
            TU COMUNIDAD DEPORTIVA
          </h1>

          <p className="font-raleway text-md lg:text-lg text-textGray max-w-xl mb-8">
            PLEIMEIT UNE A JUGADORES, EQUIPOS Y ORGANIZADORES PARA CREAR
            PARTIDAS REALES CERCA DE TI. ENCUENTRA TU DEPORTE, CONFIRMA TU CUPO
            Y COMPARTE LA EXPERIENCIA CON TU COMUNIDAD.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/home/AppStore.png"
              alt="App Store"
              width={200}
              height={80}
              className="h-20 w-auto"
            />
            <Image
              src="/images/home/GooglePlay.png"
              alt="Google Play"
              width={200}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          <p className="font-bebas text-sm tracking-[0.25em] uppercase">
            PRIVADA Y SEGURA · GRATIS PARA EMPEZAR
          </p>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="absolute right-0 top-16 lg:top-8 w-full lg:w-1/2 h-[90vh] pointer-events-none">
        <Image
          key={currentImageState}
          src={images[currentImageState]}
          alt="Deportistas"
          fill
          priority
          className="object-contain transition-opacity duration-700"
        />
      </div>

      <div className="absolute -bottom-10 w-full z-20">
        <div className="font-bebas max-w-4xl mx-auto h-17.5 bg-[#1F2399] text-white rounded-xl px-6 flex items-center justify-center gap-6 text-2xl shadow-lg">
          <span>CONFIADO POR MILES DE JUGADORES Y COMUNIDADES DEPORTIVAS</span>
          <span className="flex items-center gap-2">
            ⭐ 4.8/5 EN RESEÑAS REALES
          </span>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
