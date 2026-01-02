"use client";
import { useEffect, useRef, useState } from "react";

const DownloadComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`
        relative bg-purpleBackground text-white overflow-hidden
        h-185 xl:min-h-screen flex items-center
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-start">
          <div
            className={`
              flex flex-col pt-16 lg:pt-12 xl:pt-16
              transition-all duration-700 delay-100
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }
            `}
          >
            <h1 className="text-2xl lg:text-4xl font-extrabold leading-tight mb-4 uppercase tracking-tight">
              Descarga Pleimeit y únete a tu <br className="hidden md:block" />
              comunidad deportiva
            </h1>

            <p className="text-lg lg:text-xl text-white/90 max-w-xl mb-8 leading-relaxed">
              Organiza tus partidos, crea eventos y conoce a más jugadores que
              comparten tu pasión. Gratis, sin límites y con la mejor energía 💪
            </p>

            <div className="lg:hidden mb-2 lg:mb-8 w-full flex justify-center">
              <img
                src="/images/home/Athletes-footer-mobile.png"
                alt="Aplicación Pleimeit en móvil"
                className="w-full max-w-95"
              />
            </div>

            <div className="flex flex-row xs:justify-center lg:justify-start items-center gap-4 mb-12 lg:mb-0">
              <a
                href="#"
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <img
                  src="/images/home/AppStore.png"
                  alt="Descargar en App Store"
                  className="h-12 lg:h-14 w-auto cursor-pointer"
                />
              </a>
              <a
                href="#"
                className="transition-transform hover:scale-105 active:scale-95"
              >
                <img
                  src="/images/home/GooglePlay.png"
                  alt="Descargar en Google Play"
                  className="h-12 lg:h-14 w-auto cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <div
        className={`
          absolute bottom-0 right-0 w-full lg:w-1/2 h-full pointer-events-none
          hidden lg:flex items-end justify-end
          transition-all duration-700 delay-200
          ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }
        `}
      >
        <div className="relative w-full h-[90%] lg:h-full max-w-170.5">
          <img
            src="/images/home/Athletes-footer.png"
            alt="Atletas Pleimeit en Desktop"
            className="w-full h-full object-bottom"
            style={{ objectPosition: "center bottom" }}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadComponent;
