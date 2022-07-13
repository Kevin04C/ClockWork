import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { toast } from "react-hot-toast";
import { ConvertMinuteToString } from "../helpers/ConvertMinuteToString";
import { ControlButtons } from "./ControlButtons";
import "react-circular-progressbar/dist/styles.css";
import music from "../assets/music.mp3";

export const Pomodoro = () => {
  const audio = useRef(new Audio(music));
  const [time, setTime] = useState(1500);
  const [clockTime, setClockTime] = useState(time);
  const [percentage, setPercentage] = useState(100);
  const [clockText, setClockText] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMute, setIsMute] = useState(false);

  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    if (isRunning && !isPaused && clockTime >= 0) {
      const interval = setInterval(() => {
        setClockTime(clockTime - 1);
        const minutes = Math.floor(clockTime / 60);
        const seconds = clockTime - minutes * 60;
        setClockText(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
        const percentage = (clockTime * 100) / time;
        setPercentage(percentage);

        audio.current.play();
        audio.current.loop = true;
      }, 1000);
      return () => {
        clearInterval(interval);
        if (clockTime === 0 && !isBreak) {
          setIsPaused(false);
          setIsRunning(false);
          setClockTime(time);
          setClockText(ConvertMinuteToString(300));
          setPercentage(100);
          setIsBreak(true);
          audio.current.pause();
        }
        if (clockTime === 0 && isBreak) {
          setIsPaused(false);
          setIsRunning(false);
          setClockTime(time);
          setClockText(ConvertMinuteToString(1500));
          setPercentage(100);
          setIsBreak(false);
          audio.current.pause();
        }
        if (!isRunning && isPaused) {
          audio.current.pause();
        }
      };
    }
  }, [isRunning, clockTime]);

  useEffect(() => {
    setClockText(ConvertMinuteToString(time));
  }, []);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };
  const handlePaused = () => {
    setIsPaused(true);
    setIsRunning(false);
    audio.current.pause();
  };
  const handleResetPomodoro = (id) => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(1500);
    setClockTime(1500);
    setClockText(ConvertMinuteToString(1500));
    setIsBreak(false);
    setPercentage(100);
    audio.current.pause();

    toast.success("ClockWork RESTABLECIDO");
    toast.dismiss(id);
  };

  const handleAudioMuted = () => {
    if (isMute) {
      audio.current.muted = false;
      setIsMute(false);
    } else {
      audio.current.muted = true;
      setIsMute(true);
    }
  };

  return (
    <div className="flex-grow w-4/5 mx-auto mt-10 md:w-64 animate__animated animate__pulse">
      <h2 className="font-semibold text-center text-4xl text-gray-600 mb-5">
        ClockWork
      </h2>
      <CircularProgressbar
        value={percentage}
        text={clockText}
        styles={buildStyles({
          textSize: "16px",
          pathColor: `${isBreak ? "#22c55e" : "#F6423E"}`,
          textColor: "#303030",
          trailColor: "#d6d6d6",
          backgroundColor: "#F6423E",
        })}
      />
      <ControlButtons
        handleStart={handleStart}
        handlePaused={handlePaused}
        isRunning={isRunning}
        handleResetPomodoro={handleResetPomodoro}
        handleAudioMuted={handleAudioMuted}
        isMute={isMute}
      />

      {isBreak ? (
        <button
          className="bg-primary-default w-full mt-10 px-1 py-2 font-semibold text-white text-lg rounded-lg hover:bg-primary-600 transition-colors"
          onClick={() => {
            setIsBreak(false);
            setTime(1500);
            setClockTime(1500);
            setPercentage(100);
            setIsPaused(true);
            setIsRunning(false);
            setClockText(ConvertMinuteToString(1500));
            audio.current.pause();
          }}
        >
          ¡REALIZAR UNA ACTIVIDAD!
        </button>
      ) : (
        <button
          className="bg-green-500 w-full mt-10 px-1 py-2 font-semibold text-white text-lg rounded-lg hover:bg-green-600 transition-colors"
          onClick={() => {
            setIsBreak(true);
            setTime(300);
            setClockTime(300);
            setPercentage(100);
            setIsPaused(true);
            setIsRunning(false);
            setClockText(ConvertMinuteToString(300));
            audio.current.pause();
          }}
        >
          ¡TOMAR UN DESCANSO!
        </button>
      )}
    </div>
  );
};
