import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import routesConstants from "constants/routes.constants";
import routes from "router/routes";

import HeaderAccount from "./header-account.component";

import logo from "assets/logo.svg";
import logoSmall from "assets/logo-small.svg";

import "./style.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Link to={routesConstants.HOME}>
        <picture className="header__logo-picture">
          <source media="(min-width: 767px)" srcSet={logo} />
          <img className="header__logo" src={logoSmall} alt="Immortal logo" />
        </picture>
      </Link>
      <nav className="header__navigation">
        {routes.map(
          (route) =>
            route.isInNavigation && (
              <Link
                key={route.path}
                to={route.path}
                className={clsx(
                  "header__link",
                  location.pathname === route.path && "header__link--active"
                )}
              >
                {route.name}
              </Link>
            )
        )}
      </nav>

      <HeaderAccount />
    </header>
  );
};

export default Header;
