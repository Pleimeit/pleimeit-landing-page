"use client";
import { useEffect, useRef, useState } from "react";

const CreateGameComponent = () => {
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
      className="section bg-white flex h-125 lg:min-h-screen items-center py-16 lg:h-127.5 p-6 lg:p-0"
    >
      <div
        className={`
          section-container relative flex flex-col lg:flex-row
          items-center justify-between bg-lila rounded-4xl
          pt-10 px-6 pb-0 lg:p-10 lg:h-150
          overflow-hidden lg:overflow-visible  lg:w-270 xl:w-290 xxl:w-360 mx-auto
          transition-all duration-700 ease-out
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
      >
        <div className="order-1 w-full lg:w-105 flex flex-col gap-4 text-left z-20">
          <h1 className="font-inter text-2xl lg:text-4xl font-bold text-textBlack lg:w-[320px]">
            Crea tu propio encuentro deportivo
          </h1>

          <p className="text-textBlack font-inter text-[16px] lg:text-[18px] lg:w-[320px]">
            Organiza partidos o entrenamientos con facilidad. Define el lugar,
            fecha y tipo de juego; invita a tus amigos o deja el evento abierto
            a nuevos jugadores.
          </p>
        </div>

        <div className="order-2 mt-8 flex flex-row justify-center gap-4 lg:hidden w-full -mb-12 z-10">
          <div className="h-72 w-40 sm:w-55 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(174,172,243,0.3)] bg-white relative">
            <img
              src="/images/home/Step1.png"
              alt="paso-1"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="h-72 w-40 sm:w-55 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(174,172,243,0.3)] bg-white relative">
            <img
              src="/images/home/CurrentEvent.png"
              alt="evento-actual"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-0 right-10 items-end gap-12 z-10">
          <div className="h-105 w-62.5 overflow-hidden rounded-t-3xl shadow-[0_8px_30px_rgba(174,172,243,0.4)] bg-white relative">
            <img
              src="/images/home/Step1.png"
              alt="step-1"
              className="w-full h-auto"
            />
          </div>

          <div className="h-105 w-62.5 overflow-hidden rounded-t-3xl shadow-[0_8px_30px_rgba(174,172,243,0.4)] bg-white relative">
            <img
              src="/images/home/CurrentEvent.png"
              alt="current-event"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateGameComponent;
