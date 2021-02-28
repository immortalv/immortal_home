import React from "react";
import clsx from "clsx";

const ChevronLeftIcon = ({ className }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="28"
      viewBox="0 0 16 28"
      className={clsx("icon", className)}
    >
      <path
        d="M15.7807 3.15999L13.4074 0.799988L0.220703 14L13.4207 27.2L15.7807 24.84L4.9407 14L15.7807 3.15999Z"
        fill="#F3F3F3"
      />
    </svg>
  );
};

export default ChevronLeftIcon;
