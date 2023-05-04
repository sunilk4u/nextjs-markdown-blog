"use client";
import { useState } from "react";

const NavBar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-800">
      <div className="container mx-auto">
        <button
          className="text-xl mx-2 p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          &#9776; Menu
        </button>
        <div id="navbutton" className={`${open? "": "hidden"} md:block`}>{children}</div>
      </div>
    </nav>
  );
};

export default NavBar;
