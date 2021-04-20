import React from "react";
import clsx from "clsx";

const VideoIcon = ({ className }) => {
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
        d="M95.2043 22.3761C96.1582 22.9048 96.75 23.9094 96.75 25V75C96.75 76.0906 96.1582 77.0952 95.2043 77.6239C94.2504 78.1526 93.0848 78.122 92.16 77.544L71.75 64.7877V75C71.75 76.6569 70.4069 78 68.75 78H6.25C4.59315 78 3.25 76.6569 3.25 75V25C3.25 23.3431 4.59315 22 6.25 22H68.75C70.4069 22 71.75 23.3431 71.75 25V35.2123L92.16 22.456C93.0848 21.878 94.2504 21.8474 95.2043 22.3761ZM71.75 42.2877V57.7123L90.75 69.5873V30.4127L71.75 42.2877ZM65.75 28H9.25V72H65.75V28Z"
        fill="#212121"
      />
    </svg>
  );
};

export default VideoIcon;
