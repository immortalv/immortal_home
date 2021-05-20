import React from "react";
import clsx from "clsx";
import { FormField } from "components/common";

import "./style.scss";

const ProfileDoubleDescription = ({ className, state, onChange }) => {
  return (
    <>
      <FormField
        required
        className={clsx("form-field__description", className)}
        placeholder="Починайте тут..."
        label="Опис*"
        type="textarea"
        tag="textarea"
        name="description"
        onChange={onChange}
        value={state.description || ""}
      />
      <FormField
        className={clsx("form-field__description", className)}
        placeholder="Починайте тут..."
        label="( блок 2 )"
        type="textarea"
        tag="textarea"
        name="descriptionAdditional"
        onChange={onChange}
        value={state.descriptionAdditional || ""}
      />
    </>
  );
};

export default ProfileDoubleDescription;
