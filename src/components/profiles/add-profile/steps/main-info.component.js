import React, { useEffect, useState } from "react";
import { FormField, Button } from "components/common";
import clsx from "clsx";
import { ErrorHandling } from "components/toasters";

import "./style.scss";

const getFullName = (firstName, lastName, surName) =>
  `${firstName || ""} ${lastName || ""} ${surName || ""}`;

const AddProfileMainInfo = ({ profile = {}, onSubmit }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      surName,
      description,
      descriptionAdditional,
    } = state;

    if (!firstName) return ErrorHandling("Додайте ім'я!");
    if (!lastName) return ErrorHandling("Додайте прізвище!");
    if (!description) return ErrorHandling("Додайте опис!");

    onSubmit({
      name: getFullName(firstName, lastName, surName),
      description,
      descriptionAdditional,
    });
    setState({});
  };

  useEffect(() => {
    const { name, description, descriptionAdditional } = profile;
    const [firstName, lastName, surName] = name.split(" ");

    setState({
      firstName,
      lastName,
      surName,
      description,
      descriptionAdditional,
    });
  }, []);

  return (
    <form>
      <h1 className="header-s-1  add-profile__title">Розкажіть про людину</h1>
      <div className="add-profile__content">
        <div className="add-profile__main-info">
          <div className="form-field__group">
            <FormField
              required
              label="Прізвище*"
              value={state?.lastName || ""}
              name="lastName"
              onChange={handleChange}
            />
            <FormField
              required
              label="Ім’я*"
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

          <FormField
            required
            className={clsx("add-profile__description")}
            placeholder="Починайте тут..."
            label="Опис*"
            type="textarea"
            tag="textarea"
            name="description"
            onChange={handleChange}
            value={state.description || ""}
          />
          <FormField
            className={clsx("add-profile__description")}
            placeholder="Починайте тут..."
            label="( блок 2 )"
            type="textarea"
            tag="textarea"
            name="descriptionAdditional"
            onChange={handleChange}
            value={state.descriptionAdditional || ""}
          />
        </div>
      </div>
      <Button
        onClick={handleSubmit}
        type="secondary"
        className="add-profile__btn"
      >
        Далі
      </Button>
    </form>
  );
};

export default AddProfileMainInfo;
