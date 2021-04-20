import React from "react";
import clsx from "clsx";

const PhotoIcon = ({ className }) => {
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
        d="M3.25 6.25C3.25 4.59315 4.59315 3.25 6.25 3.25H93.75C95.4069 3.25 96.75 4.59315 96.75 6.25V93.75C96.75 95.4069 95.4069 96.75 93.75 96.75H6.25C4.59315 96.75 3.25 95.4069 3.25 93.75V6.25ZM9.25 82.4926V90.75H90.75V78H62.5C61.7043 78 60.9413 77.6839 60.3787 77.1213L37.5 54.2426L9.25 82.4926ZM54.2426 62.5L63.7426 72H90.75V69.9926L68.75 47.9926L54.2426 62.5ZM90.75 61.5074L70.8713 41.6287C69.6998 40.4571 67.8002 40.4571 66.6287 41.6287L50 58.2574L39.6213 47.8787C38.4497 46.7071 36.5503 46.7071 35.3787 47.8787L9.25 74.0074V9.25H90.75V61.5074Z"
        fill="#212121"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.25 21.75C27.7292 21.75 24.875 24.6042 24.875 28.125C24.875 31.6458 27.7292 34.5 31.25 34.5C34.7708 34.5 37.625 31.6458 37.625 28.125C37.625 24.6042 34.7708 21.75 31.25 21.75ZM18.875 28.125C18.875 21.2905 24.4155 15.75 31.25 15.75C38.0845 15.75 43.625 21.2905 43.625 28.125C43.625 34.9595 38.0845 40.5 31.25 40.5C24.4155 40.5 18.875 34.9595 18.875 28.125Z"
        fill="#212121"
      />
    </svg>
  );
};

export default PhotoIcon;
