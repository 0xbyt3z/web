import React from "react";
import Nav from "./Nav";

function Skills() {
  return (
    <div id="Skills" className="w-full h-screen overflow-x-hidden snap-start">
      <div className="mt-10 lg:mt-36 w-full h-auto">
        <h1 className="font-bold text-4xl lg:text-6xl text-white italic">
          Improving <br /> the language skills.
        </h1>

        <div className="mt-10 lg:mt-20 grid grid-cols-2 gap-5">
          {/*Card*/}
          <div className="flex flex-col py-3 px-6 lg:p-6 border border-white shadow-xl group hover:bg-white transition ease-in-out">
            <h4 className="text-white block group-hover:hidden italic text-2xl lg:text-4xl font-semibold">Python</h4>
            <p className="text-white hidden lg:block group-hover:hidden">Competitive Programming, Flask, Automation</p>
            <div className="hidden group-hover:block">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h4 className="text-black italic text-2xl lg:text-4xl font-semibold">7/10</h4>
                <p className="text-black">score</p>
              </div>
            </div>
          </div>

          {/*Card*/}
          <div className="flex flex-col py-3 px-6 lg:p-6 border border-white shadow-xl group hover:bg-white transition ease-in-out">
            <h4 className="text-white block group-hover:hidden italic text-2xl lg:text-4xl font-semibold">JavaScript</h4>
            <p className="text-white hidden lg:block group-hover:hidden">React, Nodejs</p>
            <div className="hidden group-hover:block">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h4 className="text-black italic text-2xl lg:text-4xl font-semibold">7/10</h4>
                <p className="text-black">score</p>
              </div>
            </div>
          </div>

          {/*Card*/}
          <div className="flex flex-col py-3 px-6 lg:p-6 border border-white shadow-xl group hover:bg-white transition ease-in-out">
            <h4 className="text-white block group-hover:hidden italic text-2xl lg:text-4xl font-semibold">C#</h4>
            <p className="text-white hidden lg:block group-hover:hidden">Desktop Applications, ASP.Net</p>
            <div className="hidden group-hover:block">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h4 className="text-black italic text-2xl lg:text-4xl font-semibold">7/10</h4>
                <p className="text-black">score</p>
              </div>
            </div>
          </div>

          {/*Card*/}
          <div className="flex flex-col py-3 px-6 lg:p-6 border border-white shadow-xl group hover:bg-white transition ease-in-out">
            <h4 className="text-white block group-hover:hidden italic text-2xl lg:text-4xl font-semibold">C/C++</h4>
            <p className="text-white hidden lg:block group-hover:hidden">Competitive Programming, Robotics</p>
            <div className="hidden group-hover:block">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h4 className="text-black italic text-2xl lg:text-4xl font-semibold">7/10</h4>
                <p className="text-black">score</p>
              </div>
            </div>
          </div>

          {/*Card*/}
          <div className="flex flex-col py-3 px-6 lg:p-6 border border-white shadow-xl group hover:bg-white transition ease-in-out">
            <h4 className="text-white block group-hover:hidden italic text-2xl lg:text-4xl font-semibold">Rust</h4>
            <p className="text-white hidden lg:block group-hover:hidden">Understanding the power without garbadge collectors</p>
            <div className="hidden group-hover:block">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h4 className="text-black italic text-2xl lg:text-4xl font-semibold">4/10</h4>
                <p className="text-black">score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
