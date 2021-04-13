import React, { useEffect, useState } from "react";
import { FormField, Button } from "components/common";

import "./style.scss";

const AddProfileAdditionalInfo = ({ profile = {}, onSubmit }) => {
  const [state, setState] = useState({
    birthDate: "",
    deathDate: "",
    profileType: "public",
    epitaph: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state, true);
    setState({});
  };

  useEffect(() => {
    setState(profile);
  }, []);

  return (
    <>
      <h1 className="title add-profile__title">Вкажіть інформацію</h1>
      <div className="add-profile__content">
        <div className="add-profile__additional-info">
          <FormField
            className="add-profile__date"
            type="date"
            name="birthDate"
            label="Дата народження"
            onChange={handleChange}
          />
          <FormField
            className="add-profile__date"
            type="date"
            name="deathDate"
            label="Дата смерті"
            onChange={handleChange}
          />

          <div className="profile-type__container">
            <label className="form-field__label">Публічність профілю</label>
            <div className="form-radio-group">
              <FormField
                className="form-field__radio"
                type="radio"
                label="Публічний"
                id="public"
                value="private"
                name="profileType"
                onChange={handleChange}
              />
              <FormField
                className="form-field__radio"
                type="radio"
                label="Приватний"
                id="private"
                value="private"
                name="profileType"
                onChange={handleChange}
              />
            </div>
          </div>

          <FormField
            className="add-profile__epitaph"
            placeholder="Починайте тут..."
            label="Епітафія"
            type="textarea"
            tag="textarea"
            name="epitaph"
            onChange={handleChange}
            value={state.epitaph}
          />
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
