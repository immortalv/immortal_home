import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "components/common";
import { AccountIcon, LoginIcon } from "icons";
import routesConstants from "constants/routes.constants";

const HeaderAccount = () => {
  const { isAuthenticated, name } = useSelector((state) => state.user);

  if (isAuthenticated)
    return (
      <Link to={routesConstants.CABINET}>
        <div className="header__account">
          <span className="header__account-name">{name}</span>
          <AccountIcon className="header__account-icon" />
        </div>
      </Link>
    );

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
