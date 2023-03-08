import { useEffect } from "react";

const linkStyle = {
  normal: "text-white mb-2 w-fit mr-6 lg:mr-0 lg:px-3 lg:py-2",
  selected: "text-white mb-2 w-fit mr-6 lg:mr-0 lg:px-3 lg:py-2 underline underline-offset-8 lg:no-underline lg:bg-gray-50/10 rounded-md",
};

export default function App() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  useEffect(() => {
    document.getElementById("video").playbackRate = 0.7;

    const blob = document.getElementById("blob");

    window.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

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
      <div className="h-screen w-screen bg-[#111010] flex overflow-x-hidden font-serif z-40">
        {/*Hero*/}
        <div className="z-40 max-w-4xl px-10 lg:px-0 mx-auto h-1/2 flex flex-col lg:flex-row mt-10 lg:mt-36">
          {/*nav*/}
          <aside className="w-36 h-full flex flex-col">
            <div className="w-full h-20 flex items-center mb-10">
              <div className="w-14 h-14 rounded-full">
                <img src="./logo.jpg" alt="" className="rounded-full" />
              </div>
            </div>
            <div className="w-full text-sm lg:text-base h-full flex flex-row lg:flex-col">
              <a href="" className={linkStyle.selected}>
                home
              </a>
              <a href="/about" className={linkStyle.normal}>
                about
              </a>
              <a href="https://blogsample.vercel.app/blog" className={linkStyle.normal}>
                blog
              </a>
            </div>
          </aside>
          <div className="w-full h-full">
            <div className="w-full h-10 lg:h-20 flex flex-col justify-center mb-5">
              <h1 data-value="Theekshana Fernando" className="name text-2xl lg:text-3xl font-bold text-white font-kaisei">
                Theekshana Fernando
              </h1>
            </div>

            <p className="lg:w-2/3 text-sm lg:text-base text-white font-kaisei mb-5">
              Internet know me as <span className="font-kaisei font-extrabold underline">0xbyt3z</span>
            </p>
            <p className="lg:w-2/3 text-sm lg:text-base text-white font-kaisei mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <p className="lg:w-2/3 text-sm lg:text-base text-white font-kaisei">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

            <div className="flex w-full h-auto mt-8 mb-5">
              <div className="flex items-center group mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-gray-600 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <a href="https://github.com/0xbyt3z" className="text-gray-400 text-sm lg:text-base ml-3 hover:text-gray-300">
                  Github
                </a>
              </div>

              <div className="flex items-center group mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-gray-600 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <a href="" className="text-gray-400 text-sm lg:text-base ml-3 hover:text-gray-300">
                  Twitter
                </a>
              </div>

              <div className="flex items-center group mr-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-gray-600 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                <a href="" className="text-gray-400 text-sm lg:text-base ml-3 hover:text-gray-300">
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 absolute w-full h-full overflow-hidden">
          <video id="video" src="./back.mp4" controls="false" autoPlay muted loop></video>
        </div>
      </div>
    </>
  );
}
