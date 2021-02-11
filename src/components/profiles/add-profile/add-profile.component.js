import React from "react";
import { Button } from "components/common";

import SelectProfile from "./steps/select-profile.component";

import "./style.scss";

const AddProfile = () => {
  return (
    <div className="add-profile">
      <header>Header</header>
      <h1 className="title add-profile__title">Додати профіль</h1>
      <SelectProfile />
      <Button type="secondary" className="add-profile__btn">
        Реєстрація
      </Button>
    </div>
  );
};

export default AddProfile;
