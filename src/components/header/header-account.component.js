import React from "react";
import { Button } from "components/common";
import { AccountIcon, LoginIcon } from "icons";
import { Link, useLocation } from "react-router-dom";
import routesConstants from "constants/routes.constants";

const HeaderAccount = () => {
  const isLoggedIn = false;

  if (isLoggedIn) return <AccountIcon />;

  return (
    <Link to={routesConstants.LOGIN}>
      <Button type="secondary" className="header__login-btn">
        <span className="header__login-text">Увійти</span>
        <LoginIcon className="header__login-icon" />
      </Button>
    </Link>
  );
};

export default HeaderAccount;
