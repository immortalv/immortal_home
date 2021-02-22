import React from "react";
import clsx from "clsx";

import "./style.scss";

const FormField = ({
  label,
  placeholder = "",
  type = "text",
  name = "",
  className,
  onChange,
  attribute: Attribute = "input",
}) => {
  return (
    <div className={clsx("form-field", `form-field--${type}`, className)}>
      {label && (
        <label className="form-field__label" htmlFor={label}>
          {label}
        </label>
      )}
      <Attribute
        className="form-field__input"
        type={type}
        name={name}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
