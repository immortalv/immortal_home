import React from "react";
import clsx from "clsx";

import "./style.scss";

const DateField = ({
  label,
  placeholder = "",
  name = "",
  className,
  onChange,
}) => {
  return (
    <div className={clsx("form-field date", className)}>
      {label && (
        <label className="form-field__label" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className="form-field__input date__input"
        type="date"
        name={name}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default DateField;
