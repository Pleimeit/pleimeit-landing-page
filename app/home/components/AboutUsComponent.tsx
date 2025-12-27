import ButtonComponent from "@/app/components/ButtonComponent";

const AboutUsComponent = () => {
  return (
    <section
      id="about"
      className="
    relative section h-135   mt-16 xl:mt-12 flex justify-center items-center overflow-hidden scroll-mt-30 "
    >
      <div
        className="absolute inset-0 bg-cover bg-position-[center_38%]"
        style={{ backgroundImage: "url('/images/home/BackgroundImage.png')" }}
      />

      <div className="absolute inset-0 bg-purpleDarkBackground/60 backdrop-brightness-75" />

      <div className="relative section-container  flex flex-col justify-center items-center gap-4.5 text-center">
        <h1 className="text-white font-inter font-bold text-3xl">
          Somos Pleimeit, una comunidad que une el <br />
          deporte con la tecnología.
        </h1>

        <p
          className="
  text-white
  font-inter
  max-w-4xl
  leading-relaxed
  hyphens-auto
"
        >
          Nacimos con una idea simple: facilitar que más personas puedan jugar,
          conectar y disfrutar del deporte sin complicaciones. Nuestro equipo —
          Javier, Harold y Joshep — combina experiencia en tecnología, diseño y
          marketing digital para crear una app que fomente comunidades
          deportivas reales, inclusivas y activas.
        </p>

        <ButtonComponent
          text="Contáctanos"
          link="/"
          bgColor="bg-white"
          textColor="text-purpleBackground"
        />
      </div>
    </section>
  );
};

export default AboutUsComponent;
