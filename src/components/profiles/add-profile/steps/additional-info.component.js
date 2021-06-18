import React from "react";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import compareAsc from "date-fns/compareAsc";
import { FormField, Button, LifeTimeDatePicker } from "components/common";
import { showErrorToast } from "components/toasters";

import "./style.scss";

const AddProfileAdditionalInfo = ({ onSubmit }) => {
  const { birthDate, deathDate, epitaph } = useSelector(
    (state) => state.profile
  );

  const setData = (label, data) =>
    dispatch.profile.setProfile({ [label]: data });

  const setBirthDate = (value) => setData("birthDate", value);
  const setDeathDate = (value) => setData("deathDate", value);
  const setEpitaph = ({ target }) => setData("epitaph", target.value);

  const handleSubmit = () => {
    if (!birthDate) return showErrorToast("Додайте дату народження");
    if (!deathDate) return showErrorToast("Додайте дату смерті");

    const isRightOrder = compareAsc(birthDate, deathDate);
    if (isRightOrder === 1) {
      return showErrorToast("Некоректна дата");
    }

    onSubmit();
  };

  return (
    <>
      <h1 className="title add-profile__title">Вкажіть інформацію</h1>
      <div className="add-profile__content">
        <div className="add-profile__additional-info">
          <LifeTimeDatePicker
            className="add-profile__additional-info__date"
            birthValue={birthDate}
            deathValue={deathDate}
            setBirthDate={setBirthDate}
            setDeathDate={setDeathDate}
          />

          {/* <div className="profile-type__container">
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
          </div> */}

          <FormField
            className="add-profile__epitaph"
            placeholder="Починайте тут..."
            label="Епітафія"
            type="textarea"
            tag="textarea"
            name="epitaph"
            onChange={setEpitaph}
            value={epitaph}
          />
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        type="secondary"
        className="add-profile__btn add-profile__additional-info__btn"
      >
        Згенерувати Сторінку
      </Button>
    </>
  );
};

export default AddProfileAdditionalInfo;
