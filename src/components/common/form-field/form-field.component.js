import React from "react";
import clsx from "clsx";

import "./style.scss";

const FormField = ({
  label,
  placeholder = "",
  type = "text",
  className,
  onChange,
  type: Type = "input",
}) => {
  return (
    <div className={clsx("form-field", `form-field--${type}`, className)}>
      {label && (
        <label className="form-field__label" htmlFor={label}>
          {label}
        </label>
      )}
      <Type
        className="form-field__input"
        type={type}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
