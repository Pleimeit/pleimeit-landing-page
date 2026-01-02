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
      className="section w-full bg-white h-197.5 lg:mt-0 lg:min-h-screen flex justify-center items-center py-48 lg:py-16 lg:h-200"
    >
      <div
        className={`
      section-container flex flex-col lg:flex-row mt-37.5  md:mt-70.5 lg:mt-0 
      items-center lg:justify-center gap-6.75 lg:gap-30
      transition-all duration-700 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
      >
        <div className="order-1 lg:order-2 w-full lg:w-87.5 flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-inter xs:text-2xl lg:text-4xl text-textBlack font-bold text-start lg:text-left">
            Explora los eventos deportivos cerca
          </h1>

          <p className="text-textBlack font-inter text-[16px] lg:text-[20px] text-justify lg:text-left max-w-xl mx-auto lg:mx-0">
            Descubre partidos, retos y actividades según tu ubicación. Filtra
            por deporte, día o nivel de juego, y únete con un solo clic.
          </p>
        </div>

        <div className="order-2 lg:order-1 flex flex-row items-center gap-8 lg:gap-12.5">
          <div className="shadow-[0_8px_30px_rgba(174,172,243,0.4)] rounded-2xl overflow-hidden">
            <Image
              src="/images/home/Event1.png"
              width={250}
              height={100}
              alt="event-1"
              className="mx-auto"
            />
          </div>

          <div className="shadow-[0_8px_30px_rgba(174,172,243,0.4)] rounded-2xl overflow-hidden">
            <Image
              src="/images/home/Event2.png"
              width={250}
              height={100}
              alt="event-2"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportingEventsComponent;
