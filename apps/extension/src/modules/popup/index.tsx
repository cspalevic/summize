import React from "react";
import { createRoot } from "react-dom/client";
import { openSettings } from "@/lib/browser";
import { Popup } from "./Popup";
import { Gear } from "@/components/icons/Gear";

const domNode = document.getElementById("app") as Element;
const root = createRoot(domNode);
root.render(
  <div className="w-[300px] h-[350px] bg-slate-800 flex flex-col">
    <div className="p-2 flex justify-between items-center">
      <img src="/images/icon-32x32.png" width="32" height="32"></img>
      <button onClick={() => openSettings()} aria-label="Open Settings">
        <Gear />
      </button>
    </div>
    <div className="flex-1 overflow-y-auto">
      <Popup />
    </div>
  </div>
);
