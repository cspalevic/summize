import React from "react";
import { createRoot } from "react-dom/client";
import { Popup } from "./Popup";

const domNode = document.getElementById("app") as Element;
const root = createRoot(domNode);
root.render(<Popup />);
