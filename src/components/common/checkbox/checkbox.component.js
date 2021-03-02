import React, { useState } from "react";
import clsx from "clsx";

import "./style.scss";

const Checkbox = ({ label, id, className, onChange, checked }) => {
  return (
    <>
      {label && (
        <label className={clsx("checkbox__label", className)} htmlFor={id}>
          {label}
        </label>
      )}
      <input id={id} type="checkbox" className="checkbox__input" onChange={onChange} checked={checked} />
    </>
  );
};

export default Checkbox;
