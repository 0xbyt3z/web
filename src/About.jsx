import { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

const linkStyle = {
  normal: "text-white mb-2 w-fit mr-6 lg:mr-0 lg:px-3 lg:py-2",
  selected: "text-white mb-2 w-fit mr-6 lg:mr-0 lg:px-3 lg:py-2 underline underline-offset-8 lg:no-underline lg:bg-gray-50/10 rounded-md",
};

export default function App() {
  return (
    <>
      <div className="h-screen w-screen bg-[#111010] overflow-x-hidden font-serif z-40">
        {/*Hero*/}
        <div className="max-w-4xl px-10 lg:px-0 mx-auto h-1/2 flex flex-col lg:flex-row mt-10 lg:mt-36">
          {/*nav*/}
          <aside className="w-36 h-full flex flex-col">
            <div className="w-full h-20 flex items-center mb-10">
              <div className="w-14 h-14 rounded-full">
                <img src="./logo.jpg" alt="" className="rounded-full" />
              </div>
            </div>
            <div className="w-full text-sm lg:text-base h-full flex flex-row lg:flex-col">
              <a href="/" className={linkStyle.normal}>
                home
              </a>
              <a href="/about" className={linkStyle.selected}>
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
                About
              </h1>
            </div>

            <p className="lg:w-2/3 text-sm lg:text-base text-white font-kaisei mb-5">
              Internet know me as <span className="font-kaisei font-extrabold underline">0xbyt3z</span>
            </p>
            <p className="lg:w-2/3 text-sm lg:text-base text-white font-kaisei mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <p className="lg:w-2/3 text-sm lg:text-base text-white font-kaisei">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>

            <div className="flex w-full h-auto mt-8 mb-5"></div>
            <div className="text-white text-sm lg:text-base">
              <h1 className="mb-5">Github Contribution chart</h1>
              <GitHubCalendar username="0xbyt3z" color={"#00D9C0"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
