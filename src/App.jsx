import { useEffect } from "react";

const linkStyle = {
  normal: "text-white mb-2 w-fit px-3 py-2",
  selected: "text-white mb-2 w-fit px-3 py-2 bg-gray-50/10 rounded-md",
};

export default function App() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  useEffect(() => {
    document.querySelector(".name").addEventListener("mouseover", (event) => {
      let iteration = 0;
      clearInterval(interval);
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 w-screen h-10 flex items-center justify-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mr-24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      </div>
      <div className="h-screen w-screen bg-[#111010] overflow-hidden font-serif z-40">
        {/*Hero*/}
        <div className="max-w-4xl mx-auto h-1/2 flex mt-36">
          {/*nav*/}
          <div className="w-36 h-full flex flex-col">
            <div className="w-full h-20 flex items-center mb-5">
              <span className="text-5xl font-bold text-white font-kaisei">TF</span>
            </div>
            <a href="" className={linkStyle.selected}>
              home
            </a>
            <a href="/about" className={linkStyle.normal}>
              about
            </a>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-20 flex flex-col justify-center mb-5">
              <h1 data-value="Theekshana Fernando" className="name text-3xl font-bold text-white font-kaisei">
                Theekshana Fernando
              </h1>
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
