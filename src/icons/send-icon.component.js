import React from "react";
import clsx from "clsx";

const SendIcon = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9084 2.06274C18.8282 1.99671 18.7142 1.98139 18.6176 2.02351L1.15569 9.64706C1.06168 9.68812 1.00115 9.77625 1.00002 9.87364C0.998886 9.97102 1.05743 10.0604 1.15053 10.1033L4.6 11.5661C4.69062 11.6079 11.8 8.08753 11.8 8.08753L7.43749 12.6798C7.34922 12.7727 7.3 12.896 7.3 13.0242V16.4303C7.3 16.8781 7.84325 17.1001 8.15685 16.7806L10.441 14.4532L14.0421 16.1658C14.1125 16.1974 14.194 16.1987 14.2655 16.1695C14.337 16.1402 14.3915 16.0833 14.4148 16.0134L18.9876 2.32856C19.0196 2.23299 18.9884 2.12878 18.9084 2.06274Z"
        fill="#212121"
      />
    </svg>
  );
};

export default SendIcon;