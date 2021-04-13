import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginIcon } from "icons";
import { Button } from "components/common";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
      type="secondary"
      className="header__login-btn"
    >
      <span className="header__login-text">Вихід</span>
      <LoginIcon className="header__login-icon" />
    </Button>
  );
};

export default LogoutButton;
