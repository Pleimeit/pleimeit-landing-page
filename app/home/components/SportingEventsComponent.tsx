import Image from "next/image";
const SportingEventsComponent = () => {
  return (
    <section className=" section w-full h-200 bg-white flex justify-center items-center">
      <div className="section-container flex flex-row justify-between items-center ">
        <div className="flex items-center gap-12.5 ">
          <div className="shadow-[0_8px_30px_rgba(174,172,243,0.4)] rounded-2xl overflow-hidden">
            <Image
              src="/images/home/Event1.png"
              width={250}
              height={100}
              alt="event-1"
            />
          </div>

          <div className="shadow-[0_8px_30px_rgba(174,172,243,0.4)] rounded-2xl overflow-hidden ">
            <Image
              src="/images/home/Event2.png"
              width={250}
              height={100}
              alt="event-2"
            />
          </div>
        </div>

        <div className="w-87.5 flex flex-col gap-1  ">
          <h1 className="font-inter text-4xl text-black font-bold">
            Explora los eventos deportivos cerca
          </h1>
          <p className="text-black font-inter">
            Descubre partidos, retos y actividades según tu ubicación. Filtra
            por deporte, día o nivel de juego, y únete con un solo clic .
          </p>
        </div>
      </div>
    </section>
  );
};

export default SportingEventsComponent;
