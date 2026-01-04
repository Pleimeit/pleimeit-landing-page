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
        bg-white flex items-center py-16
        xs:h-150 lg:min-h-[calc(100vh-72px)]
        lg:snap-center lg:scroll-mt-18 lg:p-0
      "
    >
      <div className="section-container max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
        <div
          ref={contentRef}
          className={`
            relative flex flex-col lg:flex-row
            items-center justify-between
            bg-lila rounded-4xl
            pt-10 px-6 pb-0 lg:h-150
            overflow-hidden lg:overflow-visible
            transition-all duration-700 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0 animate-floatSoft"
                : "opacity-0 translate-y-16"
            }
          `}
        >
          <div className="order-1 w-full lg:w-105 flex flex-col gap-4 text-left z-20 mb-4 lg:mb-0">
            <h1 className="font-inter text-2xl lg:text-4xl font-bold text-textBlack lg:w-71 xl:w-96">
              Participa en comunidades deportivas
            </h1>

            <p className="text-textBlack font-inter text-[16px] lg:text-[18px] lg:w-71 xl:w-96">
              Conecta con jugadores de tu mismo deporte, comparte tips, organiza
              nuevos partidos y mantente al día con lo que pasa en tu comunidad.
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

          <div className="hidden lg:flex absolute bottom-0 lg:right-6 xl:right-10 items-end lg:gap-3.5 xl:gap-12.5 z-10">
            <div className="h-105 w-62.5 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(174,172,243,0.4)] bg-white">
              <img
                src="/images/home/SportCommunities1.png"
                alt="community-1"
                className="w-full h-auto"
              />
            </div>

            <div className="h-105 w-62.5 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(174,172,243,0.4)] bg-white">
              <img
                src="/images/home/SportCommunities2.png"
                alt="community-2"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsCommunitiesComponent;
