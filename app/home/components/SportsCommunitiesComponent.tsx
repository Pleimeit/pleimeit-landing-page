import Image from "next/image";

const SportsCommunitiesComponent = () => {
  return (
    <section className="section bg-white flex items-center h-127.5 ">
      <div className="section-container relative flex justify-between py-20 bg-lila rounded-3xl p-10 pb-40">
        <div className="w-105 flex flex-col gap-1">
          <h1 className="font-inter text-4xl text-textBlack  font-bold">
            Participa en comunidades deportivas
          </h1>
          <p className="text-textBlack  font-inter">
            Conecta con jugadores de tu mismo deporte, comparte tips, organiza
            nuevos partidos y mantente al día con lo que pasa en tu comunidad.
          </p>
        </div>

        <div className="absolute bottom-0 right-10 flex items-end gap-12.5">
          <div className="h-105 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(174,172,243,0.4)]">
            <Image
              src="/images/home/SportCommunities1.png"
              width={250}
              height={100}
              alt="step-1"
            />
          </div>

          <div className="h-105 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(174,172,243,0.4)]">
            <Image
              src="/images/home/SportCommunities2.png"
              width={250}
              height={100}
              alt="current-event"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsCommunitiesComponent;
