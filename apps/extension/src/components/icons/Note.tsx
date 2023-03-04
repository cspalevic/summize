import React from "react";
import { IconProps } from ".";

export const Note = ({
  width = 24,
  height = 24,
  color = "#ccc",
}: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
    <path
      d="M20 14V7C20 5.34315 18.6569 4 17 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H13.5M20 14L13.5 20M20 14H15.5C14.3954 14 13.5 14.8954 13.5 16V20"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 8H16"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12H12"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
