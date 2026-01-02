"use client";
import ButtonComponent from "@/app/components/ButtonComponent";
import { useInView } from "react-intersection-observer";

const AboutUsComponent = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      id="about"
      className={`
        relative section min-h-screen
        flex justify-center items-center
        overflow-hidden
        bg-purpleBackground lg:bg-transparent
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
    >
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-position-[center_38%]"
        style={{ backgroundImage: "url('/images/home/BackgroundImage.png')" }}
      />

      <div className="hidden lg:block absolute inset-0 bg-purpleDarkBackground/60 backdrop-brightness-75" />

      <div className="relative section-container flex flex-col justify-center items-center gap-4.5 text-center px-5">
        <h1 className="text-white font-inter font-bold text-3xl lg:text-4xl">
          Somos Pleimeit, una comunidad que une el <br />
          deporte con la tecnología.
        </h1>

        <p className="text-white font-inter max-w-4xl leading-relaxed hyphens-auto">
          Nacimos con una idea simple: facilitar que más personas puedan jugar,
          conectar y disfrutar del deporte sin complicaciones. Nuestro equipo —
          Javier, Harold y Joshep — combina experiencia en tecnología, diseño y
          marketing digital para crear una app que fomente comunidades
          deportivas reales, inclusivas y activas.
        </p>

        <div className="w-full max-w-xs mx-auto">
          <ButtonComponent
            text="Contáctanos"
            link="/"
            bgColor="bg-white"
            textColor="text-purpleBackground"
            hoverBgColor="hover:bg-white/90"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
