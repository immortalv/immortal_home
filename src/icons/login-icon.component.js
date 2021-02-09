import React from "react";
import clsx from "clsx";

const LoginIcon = ({ className }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      width="28"
      height="28"
      className={clsx("icon", className)}
    >
      <g>
        <path
          style={{ fill: "#030104" }}
          d="M21.5,0h-14c-1.656,0-3,1.344-3,3v5h2V3c0-0.552,0.449-1,1-1h14c0.551,0,1,0.448,1,1v20
        c0,0.552-0.449,1-1,1h-14c-0.551,0-1-0.448-1-1v-5h-2v5c0,1.656,1.344,3,3,3h14c1.656,0,3-1.344,3-3V3C24.5,1.344,23.156,0,21.5,0z
        "
        />
        <g>
          <path
            style={{ fill: "#030104" }}
            d="M9.5,19.5c0,0-1,0.281-1-1c0-0.29,0-1.257,0-2.5h-6c-0.552,0-1-0.449-1-1v-4c0-0.551,0.448-1,1-1h6
          c0-1.196,0-2.155,0-2.531c0-1.344,1-0.969,1-0.969L17,13L9.5,19.5z"
          />
        </g>
      </g>
    </svg>
  );
};

export default LoginIcon;
