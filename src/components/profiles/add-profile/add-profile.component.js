import React from "react";
import { dispatch } from "store";
import { Button } from "components/common";
import HeaderDark from "./header/header-dark";
import { SelectProfile, AddProfileMainInfo } from "./steps";

import "./style.scss";

// const steps = [
//   {
//     component: SelectProfile,
//     onAction: 
//   },
// ]

const AddProfile = () => {
  return (
    <div className="add-profile">
      <HeaderDark />
      <h1 className="title add-profile__title">Додати профіль</h1>
      <div className="add-profile__content">
        {/* <SelectProfile /> */}
        <AddProfileMainInfo />
      </div>
      <Button type="secondary" className="add-profile__btn">
        Реєстрація
      </Button>
    </div>
  );
};

export default AddProfile;
