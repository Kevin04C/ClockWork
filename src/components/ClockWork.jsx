import React, { useRef } from "react";
import { Toaster } from "react-hot-toast";
import { Header } from "./Header";
import { Pomodoro } from "./Pomodoro";

export const ClockWork = () => {

  const inputColor = useRef()

  const handleChageColor = () => {
    document.body.style.background = inputColor.current.value;
  }

  return (
    <div className="h-screen">
      <div className="container mx-auto h-full flex flex-col  px-4 md:px-0 ">
        <Header color="default" />
        <Pomodoro/>
        <div>
          <label 
            className="block text-lg"
          >
            ¡Cambiar el color de Fondo!
          </label>
          <input 
            type="color" 
            ref={inputColor}
            onChange={handleChageColor}  
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};
