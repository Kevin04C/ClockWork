import React from "react";

export const ControlButtons = ({handleStart, handlePaused}) => {
  return (
    <div className="flex gap-4 justify-center mt-6">
      <button 
        className="bg-primary-default text-white font-bold py-2 px-4 rounded-lg w-16 h-12 hover:bg-primary-500 transition-colors"
        onClick={handleStart}
      >
        <i className="fa-solid fa-play text-2xl"></i>
      </button>
      <button 
        className="bg-primary-default text-white font-bold py-2 px-4 rounded-lg w-16 h-12 hover:bg-primary-500 transition-colors"
        onClick={handlePaused}
      >
        <i className="fa-solid fa-pause text-2xl"></i>
      </button>
      <button className="bg-primary-default text-white font-bold py-2 px-4 rounded-lg w-16 h-12 hover:bg-primary-500 transition-colors">
        <i className="fa-solid fa-circle-stop text-2xl"></i>
      </button>
    </div>
  );
};
