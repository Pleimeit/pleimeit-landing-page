"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/home/Athletes.png",
    title: "JUEGA, CONOCE Y FORMA TU COMUNIDAD DEPORTIVA",
    description:
      "PLEIMEIT UNE A JUGADORES, EQUIPOS Y ORGANIZADORES PARA CREAR PARTIDAS REALES CERCA DE TI. ENCUENTRA TU DEPORTE, CONFIRMA TU CUPO Y COMPARTE LA EXPERIENCIA CON TU COMUNIDAD.",
  },
  {
    image: "/images/home/Running.png",
    title: "LOREM IPSUM DOLOR SIT AMET",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/images/home/Athletes.png",
    title: "SED DO EIUSMOD TEMPOR",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    pt-28.25 xl:pt-24

  
    flex
    items-center

    lg:snap-start
lg:min-h-[calc(100vh-152px)]
    lg:scroll-mt-18
  "
    >
      <div className="section-container px-6 md:px-12 lg:px-20 max-w-7xl flex flex-col lg:grid lg:grid-cols-2 xs:h-145 sm:h-142 lg:h-162 xl:h-172 xxl:h-205 relative z-10">
        <div className="flex flex-col justify-center lg:mb-40">
          <div className="max-w-xl h-55  xl:h-57   overflow-hidden   xs:mb-0 lg:mb-8">
            <h1 className="font-bebas xs:text-3xl lg:text-4xl xl:text-5xl mb-6">
              {title}
            </h1>

            <p className="font-raleway text-md xl:text-lg text-textGray">
              {description}
            </p>
          </div>

          <div className="relative w-full xs:h-46 lg:h-100 lg:hidden mb-8">
            <Image
              key={currentIndex}
              src={image}
              alt="Deportistas"
              fill
              priority
              className="object-contain transition-opacity duration-700"
            />
          </div>

          <div className="flex items-center sm:justify-center lg:justify-start xs:gap-5 lg:gap-10 mb-6">
            <Image
              src="/images/home/AppStore.png"
              alt="App Store"
              width={200}
              height={80}
              className="h-14 w-40 xl:h-20 xl:w-auto cursor-pointer transition-transform hover:scale-105"
            />
            <Image
              src="/images/home/GooglePlay.png"
              alt="Google Play"
              width={200}
              height={80}
              className="h-14 w-40 xl:h-20 xl:w-auto cursor-pointer transition-transform hover:scale-105"
            />
          </div>

          <p className="font-bebas text-sm xl:text-xl tracking-[0.25em] uppercase sm:text-center lg:text-start mt-5 ">
            PRIVADA Y SEGURA · GRATIS PARA EMPEZAR
          </p>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="hidden lg:block absolute right-0 top-30 w-full lg:w-[53%] lg:right-2 h-[78vh] pointer-events-none">
        <Image
          key={currentIndex}
          src={image}
          alt="Deportistas"
          fill
          priority
          className="object-contain transition-opacity duration-700"
        />
      </div>

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
      </div>
    </section>
  );
};

export default BannerComponent;
