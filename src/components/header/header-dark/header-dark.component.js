import React from "react";
import { Link } from "react-router-dom";
import routesConstants from "constants/routes.constants";
import { LogoIcon, ChevronLeftIcon } from "icons";

import "./style.scss";

const HeaderDark = ({ onBackClick }) => {
  return (
    <header className="header-dark">
       <Link to={routesConstants.HOME}>
      <LogoIcon className="header-dark__logo" />
      </Link>
      {onBackClick && (
        <button onClick={onBackClick} className="btn-back header-dark__btn">
          <ChevronLeftIcon className="btn-back__icon" />
          Назад
        </button>
      )}
    </header>
  );
};

export default HeaderDark;
