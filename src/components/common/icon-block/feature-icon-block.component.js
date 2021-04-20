import React from "react";
import clsx from "clsx";

import "./style.scss";

const FeatureIconBlock = ({ className, icon, text }) => {
  return (
    <div className={clsx("feature-icon-block", className)}>
      <div className="feature-icon-block__back" />
      <div className="feature-icon-block__main">
        {icon && icon}
        {text && <p className="feature-icon-block__text">{text}</p>}
      </div>
    </div>
  );
};

export default FeatureIconBlock;
