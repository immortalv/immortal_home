import React from "react";
import { dispatch } from "store";
import { Button } from "components/common";
import { AccountIcon, LoginIcon } from "icons";

const userData = {
  // name: "Some random nmae",
  email: "qsdasd@gmail.com",
  password: "asddasd121",
};

const HeaderAccount = () => {
  const isLoggedIn = false;

  if (isLoggedIn) return <AccountIcon />;

  return (
    <>
      <Button
        type="secondary"
        className="header__login-btn"
        onClick={() => dispatch.user.signIn(userData)}
      >
        <span className="header__login-text">Увійти</span>
        <LoginIcon className="header__login-icon" />
      </Button>
    </>
  );
};

export default HeaderAccount;
