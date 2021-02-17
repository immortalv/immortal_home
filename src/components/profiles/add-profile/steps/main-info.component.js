import { FormField } from "components/common";
import React from "react";
// import clsx from "clsx";
// import { useSelector } from "react-redux";
// import { dispatch } from "store";

import "./style.scss";

const AddProfileMainInfo = () => {
  // const { profile } = useSelector((state) => state);

  return (
    <div className="add-profile__main-info">
      <div className="form-field__group">
        <FormField label="Прізвище" />
        <FormField label="Ім’я" />
        <FormField label="По батькові" />
      </div>
      <FormField
        className="add-profile__description"
        placeholder="Починайте тут..."
        label="( блок 1  )"
        type="textarea"
      />
    </div>
  );
};

export default AddProfileMainInfo;
