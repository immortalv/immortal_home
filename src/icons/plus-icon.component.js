import React from "react";
import clsx from "clsx";

const PlusIcon = ({ className }) => {
  return (
    <svg
      fill="none"
      height="24"
      stroke="#F3F3F3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("icon", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="16" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  );
};

export default PlusIcon;
