import React, { useEffect, useState } from "react";
import { Gear } from "@/components/icons/Gear";
import { openSettings } from "@/lib/browser";
import { App } from "./App";
import { getApiKey } from "./utils";
import { Friction } from "./Friction";

type PopupState = "friction" | "ready";

export const Popup = () => {
  const [popupState, setPopupState] = useState<PopupState | null>(null);

  useEffect(() => {
    const determineState = async () => {
      const apiKey = await getApiKey();
      setPopupState(!apiKey ? "friction" : "ready");
    };
    determineState();
  }, []);

  return (
    <div className="w-[300px] h-[350px] bg-slate-800 flex flex-col">
      <div className="p-2 flex justify-between items-center">
        <img src="/images/icon-32x32.png" width="32" height="32"></img>
        <button onClick={() => openSettings()} aria-label="Open Settings">
          <Gear />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {popupState === "friction" && <Friction />}
        {popupState === "ready" && <App />}
      </div>
    </div>
  );
};
