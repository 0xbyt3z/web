import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "../components/Header";
import Contact from "../components/Contact";
import About from "../components/About";
import Skills from "../components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hidescrollbar w-screen h-screen bg-[#040404] overflow-x-hidden snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <div className="w-full px-5 lg:px-0 lg:w-3/5 mx-auto">
          <Header />
          <About />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
