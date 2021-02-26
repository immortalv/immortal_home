import React from "react";
import clsx from "clsx";

import "./style.scss";

const FormField = ({
  id,
  label,
  placeholder = "",
  type = "text",
  name,
  className,
  value,
  onChange,
  tag: Tag = "input",
}) => {
  return (
    <div className={clsx("form-field", `form-field--${type}`, className)}>
      <Tag
        className="form-field__input"
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {label && (
        <label className="form-field__label" htmlFor={label}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormField;
