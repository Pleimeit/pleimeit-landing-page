"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const images = ["/images/home/Sports.png", "/images/home/Sports1.jpg"];

const BannerComponent = () => {
  const [currentImageState, setCurrentImageState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageState((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex bg-purpleBackground  min-h-screen text-white overflow-hidden pt-20">
      <div
        className="
      container mx-auto 
     gap-y-0  xl:gap-y-8  xl:py-20

      grid grid-cols-1 lg:grid-cols-2
      gap-10
      items-center
    "
      >
        <div>
          <h1 className=" font-bebas  lg:text-7xl mb-8">
            JUEGA, CONOCE Y FORMA <br />
            TU COMUNIDAD DEPORTIVA
          </h1>

          <p className="font-raleway  text-md lg:text-lg text-white/90 max-w-xl mb-8">
            PLEIMEIT UNE A JUGADORES, EQUIPOS Y ORGANIZADORES PARA CREAR
            PARTIDAS REALES CERCA DE TI. ENCUENTRA TU DEPORTE, CONFIRMA TU CUPO
            Y COMPARTE LA EXPERIENCIA CON TU COMUNIDAD.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/home/AppStore.png"
              alt="App-Store"
              width={165}
              height={45}
            />
            <Image
              src="/images/home/GooglePlay.png"
              alt="Google Play"
              width={165}
              height={45}
            />
          </div>

          <p className=" font-bebas   text-md lg:text-lg ">
            PRIVADA Y SEGURA · GRATIS PARA EMPEZAR
          </p>
        </div>

        <div className="relative w-full h-95 lg:h-112.5">
          <Image
            key={currentImageState}
            src={images[currentImageState]}
            alt="Deportistas"
            fill
            className="object-contain transition-opacity duration-700"
            priority
          />
        </div>
      </div>

      {/* <div className="bg-[#1F2399] text-center py-4 text-sm font-semibold">
        CONFIADO POR MILES DE JUGADORES Y COMUNIDADES DEPORTIVAS ⭐ 4.8/5 EN
        RESEÑAS REALES
      </div> */}
    </section>
  );
};
export default BannerComponent;
