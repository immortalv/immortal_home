import React from "react";
import { Button } from "components/common";
import { AccountIcon, LoginIcon } from "icons";

const HeaderAccount = () => {
  const isLoggedIn = false;

  if (isLoggedIn) return <AccountIcon />;

  return (
      <Button type="secondary" className="header__login-btn">
        <span className="header__login-text">Увійти</span>
        <LoginIcon className="header__login-icon" />
      </Button>
  );
};

export default HeaderAccount;
