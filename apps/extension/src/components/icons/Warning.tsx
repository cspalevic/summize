import React from "react";
import { IconProps } from ".";

export const Warning = ({
  width = 24,
  height = 24,
  color = "#000",
}: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={color}>
    <path
      d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#000000"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
