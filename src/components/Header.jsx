import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = ({ color="primary" }) => {
  return (
    <nav className="flex justify-end gap-5 py-4">
      <Link
        to="/"
        className={`text-xl text-${color}
        font-medium cursor-pointer hover:underline`}
      >
        Inicio
      </Link>
      <Link
        to="/clockwork"
        className={`text-xl text-${color}
         font-medium cursor-pointer hover:underlin`}
      >
        ClockWork
      </Link>
    </nav>
  );
};
