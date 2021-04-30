import React, { useState } from "react";
import {
  NameFormGroup,
  ProfileDoubleDescription,
  FormField,
} from "components/common";
import {
  AddOtherImages,
  AddMainImage,
  AddMedia,
  ProfileTypes,
} from "components/profiles/add-profile/steps";

const ProfileEdit = () => {
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

  return (
    <main className="profile-edit">
      <h1 className="header-s-1  profile-edit__title">Редагування</h1>

      <NameFormGroup state={state} onChange={handleChange} />

      <div className="profile-edit__row">
        <AddMainImage />

        <FormField
          className="profile-edit__epitaph"
          placeholder="Починайте тут..."
          label="Епітафія"
          type="textarea"
          tag="textarea"
          name="epitaph"
          onChange={handleChange}
          value={state.epitaph}
        />

        <div>
          <FormField
            className="profile-edit__date"
            type="date"
            name="birthDate"
            label="Дата народження"
            onChange={handleChange}
          />
          <FormField
            className="profile-edit__date"
            type="date"
            name="deathDate"
            label="Дата смерті"
            onChange={handleChange}
          />
        </div>
      </div>

      <AddOtherImages label="Фотографії" />

      <ProfileDoubleDescription state={state} onChange={handleChange} />
      <AddMedia className="profile-edit__media" label="Інші файли" />
      <ProfileTypes label="Тип профілю" />
    </main>
  );
};

export default ProfileEdit;
