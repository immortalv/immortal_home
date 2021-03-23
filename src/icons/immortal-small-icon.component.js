import React from "react";
import clsx from "clsx";

const ImmortalSmallIcon = ({ className }) => {
  return (
    <svg
      width="174"
      height="176"
      viewBox="0 0 174 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M53.25 55.083L53.25 124.854H123.021V55.083H53.25Z"
          fill="black"
        />
        <path
          d="M139.646 7.34418H176.258V176.76H139.646V7.34418Z"
          fill="black"
        />
        <path d="M36.7217 1.83612H0V176.264H36.7217V1.83612Z" fill="black" />
        <path d="M0 139.543L0 176.265H174.428V139.543H0Z" fill="black" />
        <path
          d="M0 0.000270844L0 36.722L174.428 36.722V0.000270844L0 0.000270844Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="174" height="176" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ImmortalSmallIcon;
