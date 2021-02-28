import React from "react";
import { LogoIcon, ChevronLeftIcon } from "icons";

import "./style.scss";

const HeaderDark = ({ onBackClick }) => {
  return (
    <header className="header-dark">
      <LogoIcon className="header-dark__logo" />
      <button onClick={onBackClick} className="btn-back header-dark__btn">
        <ChevronLeftIcon className="btn-back__icon" />
        Назад
      </button>
    </header>
  );
};

export default HeaderDark;
