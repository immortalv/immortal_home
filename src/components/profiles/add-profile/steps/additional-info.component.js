import React, { useEffect, useState } from "react";
import { FormField, Button, DateField } from "components/common";
import clsx from "clsx";

import "./style.scss";

const AddProfileAdditionalInfo = ({ profile = {}, onSubmit }) => {
  const [state, setState] = useState({
    birthDate: "",
    deathDate: "",
    profileType: "public",
    epitaph: "",
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
      <h1 className="title add-profile__title">Вкажіть інформацію</h1>
      <div className="add-profile__content">
        <div className="add-profile__main-info">
          {/* <DateField label="Дата народження" /> */}
          <FormField
            className="add-profile__date"
            type="date"
            label="Дата народження"
          />
          <FormField
            className="add-profile__date"
            type="date"
            label="Дата смерті"
          />

          <div className="profile-type__container">
            <label className="form-field__label">Публічність профілю</label>
            <div className="form-radio-group">
              <FormField
                className="form-field__radio"
                type="radio"
                label="Публічний"
                id="profile-type-public"
                name="profileType"
              />
              <FormField
                className="form-field__radio"
                type="radio"
                label="Приватний"
                id="profile-type-private"
                name="profileType"
              />
            </div>
          </div>
          {/* <FormField
            className="add-profile__epitaph"
            placeholder="Починайте тут..."
            label="Обрати епітафію"
            type="textarea"
            name={"epitaph"}
            onChange={handleChange}
            value={state.description}
          />
          <FormField
            className="add-profile__epitaph"
            placeholder="Починайте тут..."
            label="Написати власноруч"
            type="textarea"
            name={"epitaph"}
            onChange={handleChange}
            value={state.description}
          /> */}
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        type="secondary"
        className="add-profile__btn"
      >
        Згенерувати Сторінку
      </Button>
    </>
  );
};

export default AddProfileAdditionalInfo;
