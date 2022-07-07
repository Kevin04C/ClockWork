import { Header } from "./Header";

export const Inicio = () => {
  return (
    <div className="bg-primary-default h-screen">
      <div className="container mx-auto h-full flex flex-col  px-4 md:px-0">
        <Header color="white"/>
        <div className="flex-grow mt-32 animate__animated animate__fadeIn">
          <h1 className="text-white text-[55px] font-bold text-center mb-3">
            ClockWork
          </h1>
          <div className="bg-white bg-opacity-40 rounded-xl p-3 py-4 md:max-w-md md:mx-auto ">
            <p className="text-white font-normal text-2xl text-center md:text-[27px]">
              ¡Realiza una actividad de 25 minutos y tómate un descanso de 5
              minutos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
