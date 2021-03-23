import React from "react";
import clsx from "clsx";
import { ImmortalSmallIcon } from "icons";

import "./style.scss";

const Spinner = ({ className, clear }) => {
  return (
    <div
      className={clsx("spinner", clear && "spinner--no-background", className)}
    >
      <ImmortalSmallIcon className="spinner__icon" />
    </div>
  );
};

export default Spinner;
