import React from "react";
import { Header } from "./Header";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const ClockWork = () => {
  const percentage = 20.5;
  const text = "Faltan \n 5 minutos";

  return (
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto h-full flex flex-col  px-4 md:px-0">
        <Header/>
        <CircularProgressbar
          value={percentage}
          text={percentage}
          styles={buildStyles({
            pathColor: `#F6423E`,
            textColor: '#303030',
            trailColor: '#d6d6d6',
            backgroundColor: '#F6423E',
          })}
        />
        ;
      </div>
    </div>
  );
};
