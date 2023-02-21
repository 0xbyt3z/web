import { useEffect } from "react";

const linkStyle = {
  normal: "text-white mb-2 w-fit px-3 py-2",
  selected: "text-white mb-2 w-fit px-3 py-2 bg-gray-50/10 rounded-md",
};

export default function App() {
  return (
    <>
      <div className="h-screen w-screen bg-[#111010] overflow-hidden font-serif z-40">
        {/*Hero*/}
        <div className="max-w-4xl mx-auto h-1/2 flex mt-36">
          {/*nav*/}
          <div className="w-36 h-full flex flex-col">
            <div className="w-full h-20 flex items-center mb-5">
              <span className="text-5xl font-bold text-white font-kaisei">TF</span>
            </div>
            <a href="/" className={linkStyle.normal}>
              home
            </a>
            <a href="/about" className={linkStyle.selected}>
              about
            </a>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-20 flex flex-col justify-center mb-5">
              <h1 className="name text-3xl font-bold text-white font-kaisei">About me</h1>
            </div>

            <p className="w-2/3 text-white font-kaisei mb-5">
              Internet know me as <span className="font-kaisei font-extrabold underline">0xbyt3z</span>
            </p>
            <p className="w-2/3 text-white font-kaisei mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <p className="w-2/3 text-white font-kaisei">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

            <div className="flex w-full h-auto mt-8 mb-5">
              <div className="flex items-center group mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-gray-600 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <a href="" className="text-gray-400 ml-3 hover:text-gray-300">
                  Github
                </a>
              </div>

              <div className="flex items-center group mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-gray-600 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <a href="" className="text-gray-400 ml-3 hover:text-gray-300">
                  Twitter
                </a>
              </div>

              <div className="flex items-center group mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-gray-600 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <a href="" className="text-gray-400 ml-3 hover:text-gray-300">
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
