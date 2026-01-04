"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const RateEventComponent = () => {
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
      className="   lg:min-h-[calc(100vh-72px)] xs:h-157  sm:h-201 w-full bg-white flex justify-center items-center     lg:snap-center
    lg:scroll-mt-18 xs:py-24 lg:py-16 "
    >
      <div
        className={`
          section-container flex flex-col lg:flex-row
          items-center lg:justify-center gap-10 lg:gap-30
          transition-all duration-700 ease-out  max-w-7xl mx-auto px-6 md:px-12 lg:px-20
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
      >
        <div className="order-1 lg:order-2 w-full lg:w-87.5 xl:w-100.5 flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-inter xs:text-2xl  lg:text-4xl text-textBlack font-bold text-start">
            Califica tu último evento
          </h1>

          <p className="text-textBlack font-inter text-[16px] lg:text-[20px] max-w-xl mx-auto lg:mx-0 text-justify lg:text-left">
            Evalúa la experiencia del juego y ayuda a que la comunidad crezca
            con jugadores comprometidos. Tus opiniones son anónimas y mejoran
            los futuros encuentros.
          </p>
        </div>

        <div className="order-2 lg:order-1 flex flex-row items-center gap-8 lg:gap-12.5">
          <div className="shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
            <Image
              src="/images/home/RateEvent1.png"
              width={250}
              height={100}
              alt="rate-event-1"
              className="mx-auto"
            />
          </div>

          <div className="shadow-[0_8px_30px_rgba(0,0,0,0.15)]  rounded-2xl overflow-hidden">
            <Image
              src="/images/home/RateEvent2.png"
              width={250}
              height={100}
              alt="rate-event-2"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateEventComponent;
