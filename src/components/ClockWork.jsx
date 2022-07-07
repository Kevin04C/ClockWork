import React, { useState } from "react";
import { Header } from "./Header";
import { Pomodoro } from "./Pomodoro";
export const ClockWork = () => {  

  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto h-full flex flex-col  px-4 md:px-0">
        <Header color="default"/>
        <Pomodoro />
      </div>
    </div>
  );
};
