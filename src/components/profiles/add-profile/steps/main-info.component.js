import React, { useEffect, useState } from "react";
import {
  NameFormGroup,
  Button,
  ProfileDoubleDescription,
} from "components/common";
import clsx from "clsx";
import { showErrorToast } from "components/toasters";

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

    if (!firstName) return showErrorToast("Додайте ім'я!");
    if (!lastName) return showErrorToast("Додайте прізвище!");
    if (!description) return showErrorToast("Додайте опис!");

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
          <NameFormGroup state={state} onChange={handleChange} />
          <ProfileDoubleDescription state={state} onChange={handleChange} />
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
