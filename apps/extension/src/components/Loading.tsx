import React from "react";

export const Loading = () => {
  return (
    <svg viewBox="0 0 100 100">
      <circle cx="43" cy="50" r="2" fill="#ccc">
        <animate
          attributeName="cy"
          calcMode="spline"
          keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
          repeatCount="indefinite"
          values="52.5;47.5;52.5;52.5"
          keyTimes="0;0.3;0.6;1"
          dur="1s"
          begin="-0.6s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="2" fill="#ccc">
        <animate
          attributeName="cy"
          calcMode="spline"
          keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
          repeatCount="indefinite"
          values="52.5;47.5;52.5;52.5"
          keyTimes="0;0.3;0.6;1"
          dur="1s"
          begin="-0.39999999999999997s"
        ></animate>
      </circle>
      <circle cx="57" cy="50" r="2" fill="#ccc">
        <animate
          attributeName="cy"
          calcMode="spline"
          keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
          repeatCount="indefinite"
          values="52.5;47.5;52.5;52.5"
          keyTimes="0;0.3;0.6;1"
          dur="1s"
          begin="-0.19999999999999998s"
        ></animate>
      </circle>
    </svg>
  );
};
