import React from "react";
import { NavLink } from "react-router-dom";

export const Header = ({ color }) => {
  const letActiveStyle = {
    color: "#F6423E",
  };

  return (
    <nav className="flex justify-end py-4">
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { fontWeight: "bold" } : null
        }
        className={`text-${color} text-center text-lg font-normal mr-4`}
      >
        Inicio
      </NavLink>
      <NavLink
        to="/clockwork"
        style={({ isActive }) =>
          isActive ? { fontWeight: "bold" } : null
        }
        className={`text-${color} text-center text-lg font-normal`}
      >
        ClockWork
      </NavLink>
    </nav>
  );
};
