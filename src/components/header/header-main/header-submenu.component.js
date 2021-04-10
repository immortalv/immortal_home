import React from "react";
import { dispatch } from "store";
import { Button } from "components/common";

const HeaderSubMenu = () => {
  const signOut = () => dispatch.user.signOut();

  return (
    <nav className="header__submenu">
      <Button onClick={signOut} className="header__submenu-item">
        Вихід
      </Button>
    </nav>
  );
};

export default HeaderSubMenu;
