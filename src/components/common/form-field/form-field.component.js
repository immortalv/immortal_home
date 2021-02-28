import React, { useState } from "react";
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
  required = false,
  tag: Tag = "input",
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const tagElement = (inputType) => (
    <Tag
      required={required}
      className="form-field__input"
      type={inputType || type}
      name={name}
      id={id || name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
  return (
    <div className={clsx("form-field", `form-field--${type}`, className)}>
      {type === "password" ? (
        <div className="form-field__input-container">
          <button
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            className="form-field__password-switcher"
          >
            <span>{isPasswordVisible ? "Приховати" : "Показати"}</span>
          </button>
          {tagElement(isPasswordVisible ? "text" : "password")}
        </div>
      ) : (
        tagElement()
      )}
      {label && (
        <label className="form-field__label" htmlFor={label}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormField;
