import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginIcon } from "icons";
import { Button } from "components/common";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      type="secondary"
      className="header__login-btn"
    >
      <span className="header__login-text">Увійти</span>
      <LoginIcon className="header__login-icon" />
    </Button>
  );
};

export default SignupButton;
