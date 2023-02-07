import React from "react";
import Nav from "./Nav";

function About() {
  return (
    <div id="about" onBlur={() => setreadMore(false)} className="w-full h-screen overflow-x-hidden snap-start">
      <div className="mt-10 lg:mt-36 w-full h-auto">
        <h1 className="font-bold text-4xl lg:text-6xl text-white italic">
          Here's <br /> something about <br /> myself,
        </h1>

        <p className="my-10 w-full lg:w-3/4 text-sm lg:text-base text-white h-full text-justify">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  );
}

export default About;
