import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import routes from "router/routes";
import logo from "assets/logo.svg";

import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Immortal logo" />
      <nav className="header__navigation">
        {routes.map(
          (route) =>
            route.isInNavigation && (
              <Link key={route.path} to={route.path} className="header__link">
                {route.name}
              </Link>
            )
        )}
      </nav>

      <Button secondary className="header__login">
        Увійти
      </Button>
    </header>
  );
};

export default Header;
