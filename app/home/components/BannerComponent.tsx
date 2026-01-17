"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [


  {
    image: "/images/home/Running.png",
    title: "¿ De viaje y sin conocer a nadie ?",
    description:
      "Usa Pleimeit en otros países de Latinoamérica, y conecta con otras personas , practica el deporte que te gusta, y agranda tu círculo y conexiones sociales en el mundo.",
  },
    {
    
    image: "/images/home/Athletes.png",
    title: "Haz nuevos amigos practicando tu deporte favorito",
    description:
      "Pleimeit es la app social que conecta personas a través del deporte. Organiza tus propios eventos o únete a los que ya existen. Conoce gente nueva y crea amistades, ¡usar Pleimeit es súper fácil!",
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
        py-12 md:py-16 lg:py-20 xl:py-24
        flex items-center
        lg:snap-start
        lg:min-h-screen
        lg:scroll-mt-18
      "
    >
      <div className="section-container px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20 relative z-10">
 
        <div className="flex flex-col justify-center items-center lg:items-start xl:items-start  w-full lg:flex-1">
          <div className="max-w-xl mb-6 lg:mb-8">
            <h1 className="font-bebas text-3xl xs:text-4xl lg:text-5xl xl:text-6xl mb-3 lg:mb-4 text-center lg:text-left">
              {title}
            </h1>

            <p className="font-raleway text-base lg:text-lg xl:text-xl text-textGray text-center lg:text-left">
              {description}
            </p>
          </div>


          <div className="relative w-full h-56 sm:h-64 md:h-72 lg:hidden mb-6">
            <Image
              src={image}
              alt="Deportistas"
              fill
              priority
              quality={90}
              className="object-contain transition-opacity duration-700"
            />
          </div>

 
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
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
                className="h-12 w-auto lg:h-13 cursor-pointer transition-transform hover:scale-105"
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
                className="h-12 w-auto lg:h-13 cursor-pointer transition-transform hover:scale-105"
              />
            </Link>
          </div>

          <p className="font-bebas text-sm lg:text-xl xl:text-2xl tracking-[0.25em] uppercase text-center lg:text-left whitespace-nowrap">
            DESCARGA LA APP - GRATIS PARA EMPEZAR
          </p>
        </div>

       
        <div className="hidden lg:block lg:flex-1" />
      </div>

    
      <div className="hidden lg:block absolute right-0 top-0 w-full lg:w-[55%] max-h-[90vh] h-full pointer-events-none">
        <Image
          key={currentIndex}
          src={image}
          alt="Deportistas"
          fill
          priority
          quality={90}
          className="object-contain object-center transition-opacity duration-700"
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
