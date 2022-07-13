import { toast } from "react-hot-toast";

export const ControlButtons = ({
  handleStart,
  handlePaused,
  isRunning,
  handleResetPomodoro,
  handleAudioMuted,
  isMute,
}) => {
  const handleReset = () => {
    toast((t) => {
      return (
        <>
          <span className="text-center">
            ¿Estás seguro que deseas <b>RESTABLECER</b> el <b>ClockWork</b>?
            <div className="flex mt-2">
              <button
                className="flex-grow rounded-lg bg-red-500 shadow-2xl hover:bg-red-600 text-white font-bold py-2 px-4 mr-2"
                onClick={() => {
                  handleResetPomodoro(t.id);
                }}
              >
                Aceptar
              </button>
              <button
                className="flex-grow rounded-lg bg-green-500 hover:bg-green-600 shadow text-white font-bold py-2 px-4 mr-2"
                onClick={() => toast.dismiss(t.id)}
              >
                Cancelar
              </button>
            </div>
          </span>
        </>
      );
    });
  };

  console.log(isMute);

  return (
    <div className="flex gap-4 justify-center mt-6">
      {!isRunning && (
        <button
          className="bg-primary-default text-white font-bold py-2 px-4 rounded-lg w-16 h-12 hover:bg-primary-500 transition-colors"
          onClick={handleStart}
        >
          <i className="fa-solid fa-play text-2xl"></i>
        </button>
      )}
      {isRunning && (
        <button
          className="bg-primary-default text-white font-bold py-2 px-4 rounded-lg w-16 h-12 hover:bg-primary-500 transition-colors"
          onClick={handlePaused}
        >
          <i className="fa-solid fa-pause text-2xl"></i>
        </button>
      )}
      <button
        className="bg-primary-default text-white font-bold py-2 px-4 rounded-lg w-16 h-12 hover:bg-primary-500 transition-colors"
        onClick={handleReset}
      >
        <i className="fa-solid fa-circle-stop text-2xl"></i>
      </button>
      <button
        className="bg-primary-default text-white font-bold py-2 px-4 rounded-lg w-16 h-12 hover:bg-primary-500 transition-colors"
        onClick={handleAudioMuted}
      >
        {isMute ? (
          <i class="fa-solid fa-volume-xmark"></i>
        ) : (
          <i class="fa-solid fa-volume-high"></i>
        )}
      </button>
    </div>
  );
};
