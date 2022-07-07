import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ConvertMinuteToString } from "../helpers/ConvertMinuteToString";
import { ControlButtons } from "./ControlButtons";
import "react-circular-progressbar/dist/styles.css";
import "./PomodoroCustom.css";

export const Pomodoro = () => {
  const time = useRef(10);
  const [clockTime, setClockTime] = useState(time.current);
  const [percentage, setPercentage] = useState(100);
  const [clockText, setClockText] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isRunning && !isPaused && clockTime >= 0) {
      const interval = setInterval(() => {
        setClockTime(clockTime - 1);
        const minututes = Math.floor(clockTime / 60);
        const seconds = clockTime - minututes * 60;
        setClockText(`${minututes}:${seconds < 10 ? "0" : ""}${seconds}`);

        const percentage = (clockTime * 100) / time.current;
        setPercentage(percentage);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning, clockTime]);

  useEffect(() => {
    setClockText(ConvertMinuteToString(time.current));
  }, []);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };
  const handlePaused = () => {
    setIsPaused(true);
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setClockTime(1500);
    setClockText("25:00");
  };

  return (
    <div className="flex-grow w-4/5 mx-auto mt-14 md:w-64 animate__animated animate__pulse">
      <h2 className="font-semibold text-center text-4xl text-gray-600 mb-5">
        ClockWork
      </h2>
      <CircularProgressbar
        value={percentage}
        text={clockText}
        styles={buildStyles({
          textSize: "16px",
          pathColor: `#F6423E`,
          textColor: "#303030",
          trailColor: "#d6d6d6",
          backgroundColor: "#F6423E",
        })}
      />
      <ControlButtons handleStart={handleStart} handlePaused={handlePaused} />
    </div>
  );
};
