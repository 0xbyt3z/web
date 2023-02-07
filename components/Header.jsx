import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div className="w-full h-screen snap-start">
      <Nav />

      <div className="mt-36 w-full h-auto">
        <h1 className="font-bold text-5xl lg:text-6xl text-white italic">
          Hi, I'm <br /> Theekshana Fernando
        </h1>
        <h6 className="mt-5 text-white">Software enthusiast and a Security Researcher</h6>
      </div>
    </div>
  );
}

export default Header;
