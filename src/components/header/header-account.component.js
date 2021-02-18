import React from "react";
import { dispatch } from "store";
import { Button } from "components/common";
import { AccountIcon, LoginIcon } from "icons";
import { Link, useLocation } from "react-router-dom";
import routesConstants from "constants/routes.constants";

const userData = {
  // name: "Some random nmae",
  email: "qsdasd@gmail.com",
  password: "asddasd121",
};

const HeaderAccount = () => {
  const isLoggedIn = false;

  if (isLoggedIn) return <AccountIcon />;

  return (
    <Link to={routesConstants.LOGIN}>
      <Button
        type="secondary"
        className="header__login-btn"
        onClick={() => dispatch.user.signIn(userData)}
      >
        <span className="header__login-text">Увійти</span>
        <LoginIcon className="header__login-icon" />
      </Button>
    </Link>
  );
};

export default HeaderAccount;
