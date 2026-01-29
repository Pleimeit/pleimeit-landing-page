"use client";
import ButtonComponent from "@/app/components/ButtonComponent";
import { useInView } from "react-intersection-observer";

const AboutUsComponent = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      id="about"
      className="
        relative section lg:min-h-screen
        flex justify-center items-center
        overflow-hidden
        bg-purpleBackground lg:bg-transparent
        lg:snap-center
        py-12 md:py-20 lg:py-24
      "
    >
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-position-[center_38%]"
        style={{ backgroundImage: "url('/images/home/BackgroundImage.png')" }}
      />

      <div className="hidden lg:block absolute inset-0 bg-purpleDarkBackground/80 backdrop-brightness-55" />

      <div className="relative section-container flex flex-col justify-center items-center gap-6 lg:gap-8 text-center px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <h1
          className={`
            text-white font-inter font-bold text-2xl xs:text-3xl lg:text-4xl xl:text-[48px]
            transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
        Pleimeit es parte de Star App Peru S.A.C. expertos en soluciones digitales.
        </h1>

        <p
          className={`
    text-white font-inter max-w-4xl leading-relaxed hyphens-auto
    text-base lg:text-lg xl:text-xl
    transition-all duration-700 delay-150 ease-out
    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  `}
        >
       Nacimos con una idea simple, hacer a la gente más feliz a través del deporte y la creación
        de comunidades reales. Creemos que la tecnología debe servir para unir a las personas 
        fuera de las pantallas y chats.
          <br /> <br /> 
        "Porque los amigos no se encuentran en una pantalla, sino donde ocurre el juego".
        </p>

        <div
          className={`
            w-full max-w-xs mx-auto
            transition-all duration-700 delay-300 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
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
