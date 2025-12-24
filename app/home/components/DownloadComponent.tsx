"use client";
import Image from "next/image";

const DownloadComponent = () => {
  return (
    <section className="relative bg-purpleBackground text-white overflow-hidden h-140 ">
      <div
        className="container h-full mx-auto 
     gap-y-0  xl:gap-y-8  xl:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10"
      >
        <div className="flex flex-col justify-center z-10">
          <h1 className="text-4xl lg:text-4xl font-inter font-extrabold leading-tight mb-8">
            Descarga Pleimeit y únete a tu <br />
            comunidad deportiva
          </h1>

          <p className="text-md font-inter lg:text-lg text-white/90 max-w-xl mb-8">
            Organiza tus partidos, crea eventos y conoce a más jugadores que
            comparten tu pasión. Gratis, sin límites y con la mejor energía 💪
          </p>

          <div className="flex items-center gap-4">
            <Image
              src="/images/home/AppStore.png"
              alt="App Store"
              width={165}
              height={45}
            />
            <Image
              src="/images/home/GooglePlay.png"
              alt="Google Play"
              width={165}
              height={45}
            />
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="absolute bottom-[-47.5] right-0 w-full lg:w-1/2 h-[90%] pointer-events-none">
        <Image
          src="/images/home/sports.png"
          alt="App Pleimeit"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    </section>
  );
};

export default DownloadComponent;
