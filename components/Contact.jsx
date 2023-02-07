import React from "react";
import Nav from "./Nav";

function Contact() {
  return (
    <div id="contact" className="w-full h-screen overflow-x-hidden snap-start">
      <div className="mt-10 lg:mt-36 w-full h-auto">
        <h1 className="font-bold text-4xl lg:text-6xl text-white italic">
          Wonder <br /> where to find me. <br /> right !
        </h1>

        <div className="mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/*Link*/}
          <div className="flex flex-col py-3 px-6 lg:p-6 border border-white shadow-xl group hover:bg-white transition ease-in-out">
            <h4 className="text-white block group-hover:hidden italic text-2xl lg:text-4xl font-semibold">Twitter</h4>
            <p className="text-white block group-hover:hidden">Read my tweets and follow me.</p>
            <div className="hidden group-hover:block">
              <a href="https://twitter.com/0xbyt3z" target="_blank" className="w-full h-full flex items-center justify-between">
                <div className="">
                  <h4 className="text-black italic text-2xl lg:text-4xl font-semibold">Twitter</h4>
                  <p className="text-black">Visit</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/*Link*/}
          <div className="flex flex-col py-3 px-6 lg:p-6 border border-white shadow-xl group hover:bg-white transition ease-in-out">
            <h4 className="text-white block group-hover:hidden italic text-2xl lg:text-4xl font-semibold">Github</h4>
            <p className="text-white block group-hover:hidden">Read my tweets and follow me.</p>
            <div className="hidden group-hover:block">
              <a href="https://twitter.com/0xbyt3z" target="_blank" className="w-full h-full flex items-center justify-between">
                <div className="">
                  <h4 className="text-black italic text-2xl lg:text-4xl font-semibold">Github</h4>
                  <p className="text-black">Visit</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/*Link*/}
          <div className="flex flex-col py-3 px-6 lg:p-6 border border-white shadow-xl group hover:bg-white transition ease-in-out">
            <h4 className="text-white block group-hover:hidden italic text-2xl lg:text-4xl font-semibold">Linkedin</h4>
            <p className="text-white block group-hover:hidden">Got a Linkedin tooo.</p>
            <div className="hidden group-hover:block">
              <a href="https://twitter.com/0xbyt3z" target="_blank" className="w-full h-full flex items-center justify-between">
                <div className="">
                  <h4 className="text-black italic text-2xl lg:text-4xl font-semibold">Linkedin</h4>
                  <p className="text-black">Visit</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/*Link*/}
          <div className="flex flex-col py-3 px-6 lg:p-6 border border-white shadow-xl group hover:bg-white transition ease-in-out">
            <h4 className="text-white block group-hover:hidden italic text-2xl lg:text-4xl font-semibold">Email</h4>
            <p className="text-white block group-hover:hidden">Email me those messages.</p>
            <div className="hidden group-hover:block">
              <a href="https://twitter.com/0xbyt3z" target="_blank" className="w-full h-full flex items-center justify-between">
                <div className="">
                  <h4 className="text-black italic text-2xl lg:text-4xl font-semibold">Emails</h4>
                  <p className="text-black">Visit</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
