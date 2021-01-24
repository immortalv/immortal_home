import React from "react";
import clsx from "clsx";

import "./style.scss";

const IconBlock = ({ icon, title, text, wide }) => {
  return (
    <div className={clsx("icon-block", wide && "icon-block--wide")}>
      {icon && icon}
      {title && <h4 className="icon-block__title">{title}</h4>}
      {text && <p className="icon-block__text">{text}</p>}
    </div>
  );
};

export default IconBlock;
