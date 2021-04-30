import React from "react";
import { FormField } from "components/common";

const NameFormGroup = ({ state, onChange }) => {
  return (
    <div className="form-field__group">
      <FormField
        required
        label="Прізвище*"
        value={state?.lastName || ""}
        name="lastName"
        onChange={onChange}
      />
      <FormField
        required
        label="Ім’я*"
        value={state?.firstName || ""}
        name="firstName"
        onChange={onChange}
      />
      <FormField
        label="По батькові"
        value={state?.surName || ""}
        name="surName"
        onChange={onChange}
      />
    </div>
  );
};

export default NameFormGroup;
