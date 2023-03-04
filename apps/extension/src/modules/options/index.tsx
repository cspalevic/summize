import React from "react";
import { createRoot } from "react-dom/client";
import { Settings } from "./Settings";

const domNode = document.getElementById("app") as Element;
const root = createRoot(domNode);
root.render(
  <div className="w-screen h-screen bg-slate-800 flex flex-col">
    <div className="w-full flex flex-col items-center">
      <div className="w-full p-2 flex justify-between items-center lg:w-[72rem]">
        <div className="flex items-center gap-2">
          <img src="/images/icon-48x48.png" width="48" height="48"></img>
          <h3 className="text-slate-200 text-xl hidden sm:block">Summize</h3>
        </div>
        <div className="flex items-center gap-2">
          <a
            className="text-slate-200 text-base transition duration-75 border-b-[1px] border-blue-400 hover:border-b-2"
            href="https://github.com/cspalevic/summize"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>

          <a
            className="text-slate-200 text-base transition duration-75 border-b-[1px] border-blue-400 hover:border-b-2"
            href="https://github.com/cspalevic/summize/issues"
            target="_blank"
            rel="noreferrer"
          >
            Report an issue
          </a>
        </div>
      </div>
    </div>
    <main className="flex-1 flex justify-center">
      <Settings />
    </main>
  </div>
);
