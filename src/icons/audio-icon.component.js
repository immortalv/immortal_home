import React from "react";
import clsx from "clsx";

const AudioIcon = ({ className }) => {
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
        d="M90.625 96.8749C89.9147 96.8746 89.2257 96.6321 88.6719 96.1875L73.9062 84.3749H62.5C61.6712 84.3749 60.8763 84.0457 60.2903 83.4597C59.7042 82.8736 59.375 82.0788 59.375 81.2499V65.6249C59.375 64.7961 59.7042 64.0013 60.2903 63.4152C60.8763 62.8292 61.6712 62.4999 62.5 62.4999H73.9062L88.675 50.6874C89.1345 50.3205 89.6882 50.0907 90.2725 50.0243C90.8568 49.958 91.4479 50.0579 91.978 50.3125C92.508 50.567 92.9555 50.966 93.269 51.4635C93.5824 51.9611 93.7492 52.5369 93.75 53.1249V93.7499C93.75 94.5787 93.4208 95.3736 92.8347 95.9597C92.2487 96.5457 91.4538 96.8749 90.625 96.8749ZM65.625 78.1249H75C75.7103 78.1255 76.3991 78.368 76.9531 78.8124L87.5 87.2499V59.6249L76.95 68.0624C76.3968 68.5062 75.7092 68.7487 75 68.7499H65.625V78.1249Z"
        fill="#212121"
      />
      <path
        d="M50 87.5H25V12.5H50V31.25C50.0049 32.906 50.665 34.4929 51.836 35.6639C53.0071 36.835 54.5939 37.495 56.25 37.5H75V46.875H81.25V31.25C81.261 30.8393 81.1829 30.4311 81.0211 30.0534C80.8592 29.6758 80.6175 29.3377 80.3125 29.0625L58.4375 7.18746C58.1624 6.88229 57.8243 6.64043 57.4467 6.47858C57.069 6.31673 56.6607 6.23873 56.25 6.24996H25C23.3439 6.25491 21.7571 6.91498 20.586 8.08601C19.415 9.25704 18.7549 10.8439 18.75 12.5V87.5C18.7549 89.156 19.415 90.7429 20.586 91.9139C21.7571 93.0849 23.3439 93.745 25 93.75H50V87.5ZM56.25 13.75L73.75 31.25H56.25V13.75Z"
        fill="#212121"
      />
    </svg>
  );
};

export default AudioIcon;
