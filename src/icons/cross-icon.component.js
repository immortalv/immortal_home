import React from "react";
import clsx from "clsx";

const CrossIcon = ({ className }) => {
  return (
    <svg
      fill="#212121"
      height="96"
      width="96"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("icon", className)}
    >
      <path d="M48,4C23.7,4,4,23.699,4,48s19.7,44,44,44s44-19.699,44-44S72.3,4,48,4z M48,84c-19.882,0-36-16.118-36-36s16.118-36,36-36  s36,16.118,36,36S67.882,84,48,84z" />
      <path d="M53.657,48l8.485-8.485c1.562-1.562,1.562-4.095,0-5.656c-1.562-1.562-4.096-1.562-5.658,0L48,42.343l-8.485-8.484  c-1.562-1.562-4.095-1.562-5.657,0c-1.562,1.562-1.562,4.096,0,5.656L42.343,48l-8.485,8.485c-1.562,1.562-1.562,4.095,0,5.656  c1.562,1.562,4.095,1.562,5.657,0L48,53.657l8.484,8.484c1.562,1.562,4.096,1.562,5.658,0c1.562-1.562,1.562-4.096,0-5.656  L53.657,48z" />
    </svg>
  );
};

export default CrossIcon;
