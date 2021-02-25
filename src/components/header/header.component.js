import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import routes from "router/routes";
import logo from "assets/logo.svg";
import logoSmall from "assets/logo-small.svg";

import "./style.scss";

import HeaderAccount from "./header-account.component";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <picture className="header__logo-picture">
        <source media="(min-width: 767px)" srcSet={logo} />
        <img className="header__logo" src={logoSmall} alt="Immortal logo" />
      </picture>
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
