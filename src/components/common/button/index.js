import React from "react";
import clsx from "clsx";

import "./style.scss";

const Button = ({ className, type = "primary", onClick, children }) => {
  return (
    <button
      className={clsx(`button button--${type}`, className && className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
