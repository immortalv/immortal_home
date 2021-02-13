import React from "react";
import { LogoIcon, ChevronLeftIcon } from "icons";

import "./style.scss";

const HeaderDark = () => {
  return (
    <header className="header-dark">
      <LogoIcon className="header-dark__logo" />
      <button className="btn-back header-dark__btn">
        <ChevronLeftIcon className="btn-back__icon" />
        Назад
      </button>
    </header>
  );
};

export default HeaderDark;
