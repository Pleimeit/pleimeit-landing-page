"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const DownloadComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
       py-12 md:py-20 lg:py-24  lg:min-h-screen flex items-center
        transition-all duration-700 ease-out     lg:snap-center
   
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
      `}
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-start">
          <div
            className={`
    flex flex-col pt-16 lg:pt-12 xl:pt-16
    transition-all duration-700 delay-100
    items-center md:items-center lg:items-start
    text-center md:text-center lg:text-left
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}
  `}
          >
            <h1 className="text-2xl lg:text-[48px] font-extrabold leading-tight mb-4  tracking-tight">
              Descarga Pleimeit y únete a tu <br className="hidden md:block" />
              comunidad deportiva
            </h1>

            <p className="text-lg lg:text-xl text-white/90 max-w-xl mb-8 leading-relaxed">
              Crea eventos, participa y conoce a personas que comparten tu
              pasión.No importa si eres principiante o experto. En Pleimeit
              puedes filtrar los eventos por nivel de juego para que siempre te
              sientas cómodo y disfrutes del partido al máximo.
            </p>

            <div className="lg:hidden mb-2 lg:mb-8 w-full flex justify-center">
              <img
                src="/images/home/Athletes-footer-mobile.png"
                alt="Aplicación Pleimeit en móvil"
                className="w-full max-w-95"
              />
            </div>

            <div className="flex flex-row xs:justify-center lg:justify-start items-center gap-4 mb-12 lg:mb-0">
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
                  className="h-12 w-34 lg:h-13 lg:w-44   cursor-pointer transition-transform hover:scale-105"
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
                  className="h-12 w-34 lg:h-13 lg:w-44   cursor-pointer transition-transform hover:scale-105"
                />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
      <div
        className={`
    hidden lg:block
    absolute right-0 bottom-0
    w-full lg:w-[53%]
    h-[78vh]
    pointer-events-none
    transition-all duration-700 delay-200
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
  `}
      >
        <Image
          src="/images/home/Athletes-footer.png"
          alt="Atletas Pleimeit"
          fill
          quality={90}
          className="object-contain object-bottom"
        />
      </div>
    </section>
  );
};

export default DownloadComponent;
