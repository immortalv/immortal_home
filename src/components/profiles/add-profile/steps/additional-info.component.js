import React, { useEffect, useState } from "react";
import { FormField, Button, DateField } from "components/common";
import clsx from "clsx";

import "./style.scss";

const AddProfileAdditionalInfo = ({ profile = {}, onSubmit }) => {
  const [state, setState] = useState({
    birthDate: "",
    deathDate: "",
    profileType: "publick",
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
      <h1 className="title add-profile__title">Розкажіть про людину</h1>
      <div className="add-profile__content">
        <div className="add-profile__main-info">
          {/* <DateField label="Дата народження" /> */}
          <FormField type="date" label="Дата народження" />
          <FormField type="date" label="Дата смерті" />
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
