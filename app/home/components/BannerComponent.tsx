"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/home/Running.png",
    title: "Haz nuevos amigos practicando tu deporte favorito",
    description:
      "Pleimeit es la app social que conecta personas a través del deporte. Organiza tus propios eventos o únete a los que ya existen.Conoce gente nueva y crea amistades, ¡usar Pleimeit es súper fácil!",
  },

  {
    image: "/images/home/Athletes.png",
    title: "JUEGA, CONOCE Y FORMA TU COMUNIDAD DEPORTIVA",
    description:
      "PLEIMEIT UNE A JUGADORES, EQUIPOS Y ORGANIZADORES PARA CREAR PARTIDAS REALES CERCA DE TI. ENCUENTRA TU DEPORTE, CONFIRMA TU CUPO Y COMPARTE LA EXPERIENCIA CON TU COMUNIDAD.",
  },
];

const BannerComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { image, title, description } = slides[currentIndex];

  return (
    <section
      id="home"
      className="
    relative bg-purpleBackground text-white
   pt-10 xl:pt-24
  
    flex
    items-center

    lg:snap-start
    lg:min-h-[calc(100vh-152px)]
    lg:scroll-mt-18
  "
    >
      <div className="section-container px-6 md:px-12 lg:px-20 max-w-7xl flex flex-col lg:grid lg:grid-cols-2 xs:h-145 sm:h-142 lg:h-162 xl:h-172 xxl:h-205 relative z-10">
        <div className="flex flex-col justify-center lg:mb-7 xl:mb-40">
          <div className="max-w-xl  xs:h-62 sm:h-41  lg:h-59 xl:h-79   overflow-hidden   xs:mb-0 lg:mb-8">
            <h1 className="font-bebas text-4xl xs:text-4xl lg:text-4xl xl:text-6xl mb-2 text-center lg:text-left">
              {title}
            </h1>

            <p className="font-raleway text-md xl:text-xl text-textGray text-center lg:text-left">
              {description}
            </p>
          </div>

          <div className="relative w-full h-56 sm:h-64 md:h-72 lg:hidden  lg:mb-8  md:mb-6">
            <Image
              src={image}
              alt="Deportistas"
              fill
              priority
              quality={90}
              className="object-contain transition-opacity duration-700"
            />
          </div>

          <div className="flex items-center xs:justify-center lg:justify-start gap-5 xs:gap-5 lg:gap-10 md:mb-0 lg:mb-6">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src="/images/home/AppStore.png"
                alt="App Store"
                width={200}
                height={80}
                quality={90}
                className="h-12 w-34 lg:h-13 lg:w-44 cursor-pointer transition-transform hover:scale-105"
              />
            </Link>

            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src="/images/home/GooglePlay.png"
                alt="Google Play"
                width={200}
                height={80}
                quality={90}
                className="h-12 w-34 lg:h-13 lg:w-44 cursor-pointer transition-transform hover:scale-105"
              />
            </Link>
          </div>

          <p className="font-bebas text-sm xl:text-2xl tracking-[0.25em] uppercase text-center sm:text-center lg:text-start lg:mt-10  xs:mt-4 md:mt-4 ">
            DESCARGA LA APP - GRATIS PARA EMPEZAR
          </p>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="hidden lg:block absolute right-0  lg:top-0 xl:top-30 w-full lg:w-[53%] lg:right-2 h-[78vh] pointer-events-none">
        <Image
          key={currentIndex}
          src={image}
          alt="Deportistas"
          fill
          priority
          quality={90}
          className="object-contain transition-opacity duration-700"
        />
      </div>
      {/* 
      <div className="hidden lg:block absolute -bottom-40 xs:-bottom-50 lg:-bottom-10 w-full z-30 px-0 lg:px-4">
        <div className="font-bebas lg:max-w-4xl mx-auto bg-[#1F2399] text-white rounded-none lg:rounded-xl px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4 text-xl lg:text-2xl shadow-lg">
          <span className="block md:hidden">
            CONFIADO POR MILES DE JUGADORES Y COMUNIDADES DEPORTIVAS ⭐ 4.8/5 EN
            RESEÑAS REALES
          </span>

          <span className="hidden md:block">
            CONFIADO POR MILES DE JUGADORES Y COMUNIDADES DEPORTIVAS
          </span>

          <span className="hidden md:flex items-center gap-2">
            ⭐ 4.8/5 EN RESEÑAS REALES
          </span>
        </div>
      </div> */}
    </section>
  );
};

export default BannerComponent;
