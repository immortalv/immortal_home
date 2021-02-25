import React from "react";
import clsx from "clsx";

const LogoIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 198 32"
      width="198"
      height="32"
      className={clsx("icon", className)}
    >
      <path
        d="M9.519 9.847V22.32h12.473V9.847H9.519zM24.966 1.313h6.545V31.6h-6.545V1.313zM43.521 11.75v3.162c.435-.32.843-.675 1.221-1.06.489-.48 1.01-.923 1.56-1.33a7.09 7.09 0 013.705-1.211 5.836 5.836 0 012.954.959c1.062.639 1.946 1.773 2.653 3.403 1.232-1.569 2.435-2.688 3.61-3.358a6.706 6.706 0 013.283-1.004c1.798 0 3.321.743 4.569 2.229a8.246 8.246 0 011.877 5.498v12.561h-5.908V20.59a4.267 4.267 0 00-.9-2.757 2.695 2.695 0 00-2.17-1.12 3.39 3.39 0 00-2.625 1.268 4.448 4.448 0 00-1.113 3.026V31.6h-5.862V20.866a4.655 4.655 0 00-.913-2.918 2.699 2.699 0 00-2.196-1.188 3.355 3.355 0 00-2.626 1.313 4.667 4.667 0 00-1.106 3.128v10.398h-5.967V11.752h5.954zM80.957 11.75v3.162c.434-.32.843-.675 1.22-1.06a14.12 14.12 0 011.56-1.33 7.068 7.068 0 013.702-1.211 5.82 5.82 0 012.954.959c1.064.639 1.95 1.773 2.656 3.403 1.232-1.569 2.435-2.688 3.61-3.358a6.727 6.727 0 013.283-1.004c1.803 0 3.326.743 4.569 2.229 1.243 1.486 1.867 3.313 1.871 5.481V31.6h-5.908V20.59a4.268 4.268 0 00-.9-2.757 2.695 2.695 0 00-2.17-1.12 3.39 3.39 0 00-2.625 1.268 4.448 4.448 0 00-1.106 3.026V31.6H87.81V20.866a4.655 4.655 0 00-.912-2.918 2.698 2.698 0 00-2.213-1.188 3.35 3.35 0 00-2.626 1.313 4.667 4.667 0 00-1.106 3.128v10.398H75V11.752h5.958zM111.628 21.72c0-3.064.977-5.564 2.931-7.5 1.954-1.937 4.462-2.907 7.523-2.909a9.618 9.618 0 017.165 2.954c1.933 1.97 2.899 4.42 2.899 7.35 0 2.987-.966 5.464-2.899 7.43-1.932 1.968-4.351 2.953-7.257 2.955-3.282 0-5.828-1.042-7.638-3.125a10.606 10.606 0 01-2.724-7.155zm14.701 0a5.148 5.148 0 00-1.313-3.506 3.964 3.964 0 00-3.069-1.5 4.147 4.147 0 00-3.124 1.408 4.754 4.754 0 00-1.313 3.368 5.365 5.365 0 001.313 3.647 3.993 3.993 0 003.101 1.5 4.006 4.006 0 003.119-1.464 5.006 5.006 0 001.286-3.453zM142.876 11.751v2.931h.091a7.912 7.912 0 012.045-2.343 3.704 3.704 0 012.157-.85 5.78 5.78 0 011.086.091v6.447a7.913 7.913 0 00-1.454-.138 3.388 3.388 0 00-2.829 1.28c-.67.856-1.005 2.053-1.005 3.591v8.84h-6V11.75h5.909zM154.394 4.943h5.908v6.808h2.833v5.422h-2.84V31.6h-5.908V17.172h-2.262v-5.422h2.262l.007-6.808zM179.849 31.6v-3.394h-.092a10.36 10.36 0 01-2.79 2.875 6.424 6.424 0 01-3.486.886c-2.324 0-4.301-1-5.931-3-1.631-2-2.446-4.434-2.446-7.303-.059-2.666.87-5.26 2.61-7.28 1.739-2.023 3.801-3.035 6.184-3.037a6.217 6.217 0 013.072.762 12.108 12.108 0 012.882 2.425v-2.737h5.908v19.802h-5.911zm-4.336-14.335a3.68 3.68 0 00-2.931 1.399 5.267 5.267 0 00-1.179 3.518 4.533 4.533 0 001.119 3.197 3.82 3.82 0 002.955 1.212 3.895 3.895 0 003.003-1.395 4.898 4.898 0 001.244-3.381 4.556 4.556 0 00-1.244-3.197 3.89 3.89 0 00-2.967-1.353zM191.898.788h5.909V31.6h-5.909V.788z"
        fill="#000"
      />
      <path
        d="M197.6 0H24.946v5.908H197.6V0zM6.565.328H0v31.183h6.565V.328z"
        fill="#000"
      />
      <path
        d="M0 24.946v6.565h31.183v-6.565H0zM0 0v6.565h31.183V0H0z"
        fill="#000"
      />
    </svg>
  );
};

export default LogoIcon;