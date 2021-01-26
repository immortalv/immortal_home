import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
// import { Button } from "semantic-ui-react";
import { Button } from "components/common";
import routes from "router/routes";
import logo from "assets/logo.svg";
import logoSmall from "assets/logo-small.svg";

import "./style.scss";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Immortal logo" />
      <img className="header__logo header__logo--small" src={logoSmall} alt="Immortal logo" />
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

      <Button type="secondary" className="header__login-btn">
        Увійти
      </Button>
    </header>
  );
};

export default Header;
