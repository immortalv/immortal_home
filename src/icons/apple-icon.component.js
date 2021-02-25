import React from 'react';
import clsx from "clsx";

const AppleIcon = ({ className }) => {
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        d="M15.4523 11.6262C15.4417 9.82294 16.2587 8.46385 17.9087 7.46173C16.9859 6.13967 15.5898 5.41253 13.7495 5.27239C12.007 5.1349 10.1006 6.28774 9.40252 6.28774C8.66481 6.28774 6.97785 5.31999 5.6505 5.31999C2.91118 5.36229 0 7.50403 0 11.8616C0 13.1492 0.235327 14.4792 0.705982 15.8489C1.33528 17.6522 3.60395 22.0705 5.97044 21.9991C7.20789 21.9701 8.0831 21.1213 9.69337 21.1213C11.2561 21.1213 12.0652 21.9991 13.4454 21.9991C15.833 21.9648 17.8849 17.9483 18.4825 16.1398C15.2804 14.63 15.4523 11.7188 15.4523 11.6262ZM12.6733 3.56164C14.0139 1.96988 13.8922 0.520893 13.8526 0C12.668 0.0687473 11.2984 0.806459 10.5183 1.71339C9.659 2.68643 9.15397 3.88951 9.26238 5.24595C10.5421 5.34378 11.7108 4.68539 12.6733 3.56164Z"
        fill="#212121"
      />
    </svg>

  )
}

export default AppleIcon;