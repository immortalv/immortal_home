import React from "react";
import clsx from 'clsx';

const FacebookIcon = ({ className }) => {
  return (
    <svg
      width="12"
      height="24"
      viewBox="0 0 12 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}>
      <path
        d="M2.97778 24V12.7385H0V8.68382H2.97778V5.2206C2.97778 2.49917 4.73676 0 8.78983 0C10.4309 0 11.6443 0.15732 11.6443 0.15732L11.5487 3.9437C11.5487 3.9437 10.3112 3.93166 8.96071 3.93166C7.49911 3.93166 7.26494 4.60522 7.26494 5.72316V8.68382H11.6649L11.4734 12.7385H7.26494V24H2.97778Z"
        fill="black"
      />
    </svg>

  )
}

export default FacebookIcon;