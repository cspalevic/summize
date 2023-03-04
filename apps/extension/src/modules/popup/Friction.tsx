import React from "react";
import { openSettings } from "@/lib/browser";

export const Friction = () => (
  <div className="h-full flex items-center justify-center">
    <div className="flex flex-col p-4">
      <p className="text-slate-200 text-base pb-2">
        Please add your API Key in the{" "}
        <button
          className="text-slate-200 text-base transition duration-75 border-b-[1px] border-blue-400 hover:border-b-2"
          onClick={() => openSettings()}
        >
          Settings page.
        </button>
      </p>
    </div>
  </div>
);
