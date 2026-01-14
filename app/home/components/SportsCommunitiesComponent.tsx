"use client";
import { useEffect, useRef, useState } from "react";

const SportsCommunitiesComponent = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        bg-white flex items-center py-12 md:py-20 lg:py-24
       lg:min-h-screen
        lg:snap-center  lg:p-0
      "
    >
      <div className="section-container max-w-360 mx-auto w-full px-6 md:px-12 lg:px-20">
        <div
          ref={contentRef}
          className={`
            relative flex flex-col lg:flex-row
            items-center justify-between
            bg-lila rounded-4xl
            pt-10 px-6 pb-0
            lg:aspect-1712/704 lg:max-h-176
            lg:pt-12 lg:pb-12 lg:px-12 xl:px-16 2xl:px-20
            overflow-hidden lg:overflow-visible
            transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0 animate-floatSoft"
                : "opacity-0 translate-y-16"
            }
          `}
        >
          <div className="order-1 w-full lg:w-105 lg:shrink-0 flex flex-col gap-4 lg:gap-6 text-center lg:text-left z-20 mb-4 lg:mb-0">
            <h1 className="font-inter text-2xl lg:text-[48px] font-bold text-textBlack lg:w-71 xl:w-96">
              Participa en comunidades deportivas
            </h1>

            <p className="text-textBlack font-inter text-[16px] lg:text-[18px] lg:w-71 xl:w-96">
              Conecta con jugadores de tu mismo deporte, comparte consejos,
              solicita recomendaciones, organiza nuevos eventos y mantente al
              día con lo que pasa en tu comunidad.
            </p>
          </div>

          <div className="order-2 mt-auto flex flex-row justify-center items-end gap-3 sm:gap-6 lg:hidden w-full -mb-12 z-10">
            <div className="h-64 sm:h-80 w-36.25 sm:w-62.5 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(174,172,243,0.3)] bg-white">
              <img
                src="/images/home/SportCommunities1.png"
                alt="community-1"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="h-64 sm:h-80 w-36.25 sm:w-62.5 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(174,172,243,0.3)] bg-white">
              <img
                src="/images/home/SportCommunities2.png"
                alt="community-2"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="hidden lg:flex absolute bottom-0 lg:right-10 xl:right-14 2xl:right-18 items-end lg:gap-5 xl:gap-6 z-10">
            <div className="w-auto min-w-50 max-w-70  h-120 overflow-hidden rounded-t-3xl shadow-[0_8px_30px_rgba(174,172,243,0.4)] bg-white relative">
              <img
                src="/images/home/SportCommunities1.png"
                alt="community-1"
                className="w-full h-[200%] object-contain object-top"
              />
            </div>

            <div className="w-auto min-w-50 max-w-70 h-120 overflow-hidden rounded-t-3xl shadow-[0_8px_30px_rgba(174,172,243,0.4)] bg-white relative">
              <img
                src="/images/home/SportCommunities2.png"
                alt="community-2"
                className="w-full h-[200%] object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsCommunitiesComponent;
