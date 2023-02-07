import React from "react";

function Nav() {
  return (
    <div className="w-full h-16 flex items-center justify-start">
      <div className="w-4/5 lg:w-1/4 h-full flex justify-between text-white items-center font-bold">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Nav;
