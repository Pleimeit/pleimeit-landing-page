import Image from "next/image";

const CreateGameComponent = () => {
  return (
    <section className="section h-127.5 bg-white flex items-center">
      <div className=" section-container  relative flex flex-row items-center justify-between h-120 xl:py-20 bg-lila rounded-3xl p-10">
        <div className="w-105 flex flex-col gap-1">
          <h1 className="font-inter text-4xl font-bold text-black">
            Crea tu propio encuentro deportivo
          </h1>
          <p className="text-black font-inter">
            Organiza partidos o entrenamientos con facilidad. Define el lugar,
            fecha y tipo de juego; invita a tus amigos o deja el evento abierto
            a nuevos jugadores.
          </p>
        </div>

        <div className="absolute bottom-0 right-10 flex items-end gap-12.5">
          <div className="h-105 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(174,172,243,0.4)]">
            <Image
              src="/images/home/Step1.png"
              width={250}
              height={100}
              alt="step-1"
            />
          </div>

          <div className="h-105 overflow-hidden rounded-t-2xl shadow-[0_8px_30px_rgba(174,172,243,0.4)]">
            <Image
              src="/images/home/CurrentEvent.png"
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

export default CreateGameComponent;
