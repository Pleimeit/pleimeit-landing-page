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
      className="
        bg-white
        py-12 md:py-20 lg:py-24
        lg:snap-center
        lg:min-h-screen
        lg:flex
        lg:items-center
      "
    >
      <div className="section-container max-w-360 mx-auto w-full px-6 md:px-12 lg:px-10 xl:px-20">
        <div
          className={`
            relative flex flex-col lg:flex-row
            items-center justify-between
            bg-lila rounded-4xl
            pt-10 px-6 pb-0
            lg:aspect-1712/704 lg:max-h-176
            lg:pt-12 lg:pb-12 lg:pl-10 lg:pr-6 xl:px-20
            overflow-hidden lg:overflow-visible
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="order-1 w-full lg:w-[45%] xl:w-105 lg:shrink-0 flex flex-col gap-4 lg:gap-6 text-center lg:text-left z-20">
            <h1 className="font-inter text-2xl lg:text-[40px] xl:text-[48px] font-bold text-textBlack lg:w-full xl:w-95.25 leading-tight">
              Crea tu propio encuentro deportivo
            </h1>

            <p className="text-textBlack font-inter text-[16px] lg:text-[16px] xl:text-[18px] lg:w-full xl:w-89.25">
              Organiza partidos o entrenamientos en segundos. Define lugar,
              fecha y modalidad; crea eventos privados para tus amigos o abre la
              convocatoria para conocer a nuevos jugadores.
            </p>
          </div>

          <div className="order-2 mt-8 flex flex-row justify-center gap-4 lg:hidden w-full -mb-12 z-10">
            <div className="h-[80%] w-40 sm:w-55 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] bg-white relative">
              <img
                src="/images/home/Step1.png"
                alt="paso-1"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="h-[80%] w-40 sm:w-55 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] bg-white relative">
              <img
                src="/images/home/CurrentEvent.png"
                alt="evento-actual"
                className="w-full h-full object-contain object-top"
              />
            </div>
          </div>

          <div className="hidden lg:flex absolute bottom-0 lg:right-4 xl:right-14 2xl:right-18 items-end lg:gap-4 xl:gap-6 z-10">
            <div className="w-auto min-w-40 lg:max-w-60 xl:min-w-50   xl:max-w-70 h-100 lg:h-91 xl:h-112 overflow-hidden rounded-t-3xl shadow-[0_8px_30px_rgba(174,172,243,0.4)] bg-white relative">
              <img
                src="/images/home/Step1.png"
                alt="step-1"
                className="w-full h-[200%] object-contain object-top"
              />
            </div>

            <div className="w-auto min-w-40 lg:max-w-60 xl:min-w-50 xl:max-w-70 h-100 lg:h-91 xl:h-112 overflow-hidden rounded-t-3xl shadow-[0_8px_30px_rgba(174,172,243,0.4)] bg-white relative">
              <img
                src="/images/home/CurrentEvent.png"
                alt="current-event"
                className="w-full h-[200%] object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateGameComponent;
