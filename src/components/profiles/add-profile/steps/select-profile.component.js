import React from "react";
import { Button } from "components/common";
import ProfileTypes from "./profile-types.component";

import "./style.scss";

const SelectProfile = ({ onSubmit }) => {
  return (
    <>
      <h1 className="header-s-1  add-profile__title">Додати профіль</h1>
      <ProfileTypes />

      <Button
        onClick={() => onSubmit()}
        type="secondary"
        className="add-profile__btn"
      >
        Реєстрація
      </Button>
    </>
  );
};

export default SelectProfile;
