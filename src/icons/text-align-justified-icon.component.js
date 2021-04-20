import React from "react";
import clsx from "clsx";

const TextAlignedIcon = ({ className }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 22H87.5V28H12.5V22ZM12.5 47H87.5V53H12.5V47ZM9.5 75C9.5 73.3431 10.8431 72 12.5 72H87.5C89.1569 72 90.5 73.3431 90.5 75C90.5 76.6569 89.1569 78 87.5 78H12.5C10.8431 78 9.5 76.6569 9.5 75Z"
        fill="#212121"
      />
    </svg>
  );
};

export default TextAlignedIcon;
