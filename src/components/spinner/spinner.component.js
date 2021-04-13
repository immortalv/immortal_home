import React from "react";
import clsx from "clsx";
import { ImmortalSmallIcon } from "icons";

import "./style.scss";

const Spinner = ({ className, text, clear }) => {
  return (
    <div
      className={clsx("spinner", clear && "spinner--no-background", className)}
    >
      <ImmortalSmallIcon className="spinner__icon" />
      {text && <h1 className="spinner__text">{text}</h1>}
    </div>
  );
};

export default Spinner;
