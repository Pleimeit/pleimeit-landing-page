const DownloadComponent = () => {
  return (
    <section className="relative bg-purpleBackground text-white overflow-hidden  lg:h-102 xl:h-120  flex items-center">
      <div className="container mx-auto px-6 xl:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full relative z-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Descarga Pleimeit y únete a tu <br className="hidden md:block" />
            comunidad deportiva
          </h1>

          <p className="text-md lg:text-lg text-white/90 max-w-xl mb-8">
            Organiza tus partidos, crea eventos y conoce a más jugadores que
            comparten tu pasión. Gratis, sin límites y con la mejor energía 💪
          </p>

          <div className="flex items-center gap-4">
            <img
              src="/images/home/AppStore.png"
              alt="App Store"
              className="h-12 w-auto cursor-pointer"
            />
            <img
              src="/images/home/GooglePlay.png"
              alt="Google Play"
              className="h-12 w-auto cursor-pointer"
            />
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="absolute bottom-0 right-0 w-full lg:w-1/2 xl:max-w-[580px]h-full pointer-events-none flex items-end">
        <div className="relative w-full h-[120%] lg:h-[110%]">
          <img
            src="/images/home/Athletes-footer.png"
            alt="App Pleimeit"
            className="w-full h-full object-contain object-bottom"
            style={{
              objectPosition: "center 20%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadComponent;
