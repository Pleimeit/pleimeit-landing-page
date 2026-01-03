"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SportingEventsComponent = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="  w-full bg-white snap-start xs:h-187.5 sm:h-175.5 lg:min-h-screen scroll-mt-18 flex flex-col"
    >
      <div className="lg:hidden w-full  mt-4">
        <div
          className="
            font-bebas w-full bg-[#1F2399] text-white h-30
            px-6 py-6 flex flex-col
            items-center justify-center gap-2
            xs:text-xl md:text-2xl shadow-lg text-center
          "
        >
          <span>CONFIADO POR MILES DE JUGADORES Y COMUNIDADES DEPORTIVAS</span>

          <span className="flex items-center gap-2">
            ⭐ 4.8/5 EN RESEÑAS REALES
          </span>
        </div>
      </div>

      <div
        className={`
          section-container flex flex-col lg:flex-row
          flex-1
          items-center lg:justify-center gap-6.75 lg:gap-30
          transition-all duration-700 ease-out xs:mt-6 md:mt-5 px-6 md:px-12 lg:px-20 max-w-7xl
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
      >
        <div className="order-1 lg:order-2 w-full lg:w-87.5  xl:w-90 flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-inter xs:text-2xl lg:text-4xl text-textBlack font-bold">
            Explora los eventos deportivos cerca
          </h1>

          <p className="text-textBlack font-inter text-[16px] lg:text-[20px] max-w-xl mx-auto lg:mx-0">
            Descubre partidos, retos y actividades según tu ubicación. Filtra
            por deporte, día o nivel de juego, y únete con un solo clic.
          </p>
        </div>

        <div className="order-2 lg:order-1 flex gap-8 lg:gap-12.5">
          <div className="shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
            <Image
              src="/images/home/Event1.png"
              width={250}
              height={100}
              alt="event-1"
            />
          </div>

          <div className="shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
            <Image
              src="/images/home/Event2.png"
              width={250}
              height={100}
              alt="event-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportingEventsComponent;
