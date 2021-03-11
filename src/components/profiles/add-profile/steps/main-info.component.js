import React, { useEffect, useState } from "react";
import { FormField, Button } from "components/common";
import clsx from "clsx";

import "./style.scss";

const AddProfileMainInfo = ({ profile = {}, onSubmit, onSkip, secondary }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    surName: "",
    description: "",
    descriptionAdditional: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
    setState({});
  };

  useEffect(() => {
    setState(profile);
  }, []);

  return (
    <>
      <h1 className="title add-profile__title">Розкажіть про людину</h1>
      <div className="add-profile__content">
        <div className="add-profile__main-info">
          {!secondary && (
            <div className="form-field__group">
              <FormField
                label="Прізвище"
                value={state?.lastName || ""}
                name="lastName"
                onChange={handleChange}
              />
              <FormField
                label="Ім’я"
                value={state?.firstName || ""}
                name="firstName"
                onChange={handleChange}
              />
              <FormField
                label="По батькові"
                value={state?.surName || ""}
                name="surName"
                onChange={handleChange}
              />
            </div>
          )}
          <FormField
            className={clsx(
              "add-profile__description",
              secondary && "add-profile__description--secondary"
            )}
            placeholder="Починайте тут..."
            label={`( блок ${secondary ? 2 : 1}  )`}
            type="textarea"
            tag="textarea"
            name={secondary ? "descriptionAdditional" : "description"}
            onChange={handleChange}
            value={
              (secondary ? state.descriptionAdditional : state.description) ||
              ""
            }
          />
        </div>
      </div>
      {secondary && (
        <Button onClick={onSkip} className="add-profile__btn btn--skip">
          Пропустити
        </Button>
      )}
      <Button
        onClick={handleSubmit}
        type="secondary"
        className="add-profile__btn"
      >
        Далі
      </Button>
    </>
  );
};

export default AddProfileMainInfo;
