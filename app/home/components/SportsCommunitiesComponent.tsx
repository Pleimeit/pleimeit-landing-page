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
      { threshold: 0.3 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        bg-white flex items-center py-12 md:py-20 lg:py-24 
        lg:min-h-[calc(100vh-72px)]
        lg:snap-center lg:scroll-mt-18
      "
    >
      <div className=" section-container max-w-360 mx-auto w-full px-6 md:px-12 lg:px-10 xl:px-20">
        <div
          ref={contentRef}
          className={`
            relative flex flex-col lg:flex-row 
            items-center justify-between
            bg-lila rounded-[40px]
            
              
            pt-10 px-6 pb-0
            lg:pt-16 lg:pb-16 lg:px-12 xl:px-16 2xl:px-20
            

            xl:aspect-[1712/704] 
         
            
            overflow-hidden 
            transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
          `}
        >

          <div className="order-1 w-full lg:w-[38%] flex flex-col gap-4 lg:gap-6 text-center lg:text-left z-20 mb-10 lg:mb-0">
            <h1 className="font-inter text-3xl lg:text-[40px] xl:text-[48px] font-bold text-textBlack leading-tight">
              Participa en comunidades deportivas
            </h1>
            <p className="text-textBlack font-inter text-base lg:text-lg opacity-90 max-w-md mx-auto lg:mx-0">
              Conecta con jugadores de tu mismo deporte, comparte consejos, solicita recomendaciones, organiza nuevos eventos y mantente al día con lo que pasa en tu comunidad.
            </p>
          </div>


          <div className="order-2 mt-auto flex lg:hidden flex-row justify-center items-end gap-3 w-full -mb-1">
            <div className="h-64 w-32 overflow-hidden rounded-t-2xl shadow-xl bg-white">
              <img src="/images/home/SportCommunities1.png" alt="c1" className="w-full h-full object-cover object-top" />
            </div>
            <div className="h-64 w-32 overflow-hidden rounded-t-2xl shadow-xl bg-white">
              <img src="/images/home/SportCommunities2.png" alt="c2" className="w-full h-full object-cover object-top" />
            </div>
          </div>

        
          <div className="hidden lg:flex absolute bottom-0 lg:right-4 xl:right-14 2xl:right-18 items-end lg:gap-4 xl:gap-6 z-10">
                  <div className="w-auto min-w-40 lg:max-w-60 xl:min-w-50   xl:max-w-70 h-100 lg:h-98 xl:h-105  2xl:h-115  overflow-hidden rounded-t-3xl shadow-[0_8px_30px_rgba(174,172,243,0.4)] bg-white relative">
              <img
                src="/images/home/SportCommunities1.png"
                alt="community-1"
                className="w-full h-[200%] object-contain object-top"
              />
            </div>

        <div className="w-auto min-w-40 lg:max-w-60 xl:min-w-50 xl:max-w-70 h-100 lg:h-98 xl:h-105  2xl:h-115  overflow-hidden rounded-t-3xl shadow-[0_8px_30px_rgba(174,172,243,0.4)] bg-white relative">
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