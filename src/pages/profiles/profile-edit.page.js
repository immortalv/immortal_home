import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import { transfromDate, getFilePreview } from "utils/profile.utils";
import {
  NameFormGroup,
  ProfileDoubleDescription,
  FormField,
} from "components/common";
import {
  AddOtherImages,
  AddMainPhoto,
  AddMedia,
  ProfileTypes,
} from "components/profiles/add-profile/steps";

import { useGetProfile } from "./hooks";

const ProfileEdit = () => {
  const { id } = useParams();
  const { profile } = useSelector((state) => state);

  useGetProfile(id);

  const [state, setState] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const setData = (label, data) =>
    dispatch.profile.setProfile({ [label]: data });

  const setMainPhoto = (file) => setData("mainPhoto", file);
  const setOtherPhotos = (files) => setData("otherPhotos", files);
  const setOtherFiles = (files) => setData("otherFiles", files);

  useEffect(() => {
    if (!profile) return;
    const { name } = profile;
    const [firstName, lastName, surName] = name.split(" ");

    setState({
      ...profile,
      firstName,
      lastName,
      surName,
    });
  }, [profile]);

  return (
    <main className="profile-edit">
      <h1 className="header-s-1  profile-edit__title">Редагування</h1>

      <NameFormGroup state={state} onChange={handleChange} />

      <div className="profile-edit__row">
        <AddMainPhoto
          isNecessary
          addFile={setMainPhoto}
          file={getFilePreview(profile.mainPhoto)}
        />

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
            value={transfromDate(state.birthDate, true)}
          />
          <FormField
            className="profile-edit__date"
            type="date"
            name="deathDate"
            label="Дата смерті"
            onChange={handleChange}
            value={transfromDate(state.deathDate, true)}
          />
        </div>
      </div>

      <AddOtherImages
        label="Фотографії"
        addFiles={setOtherPhotos}
        files={profile.otherPhotos}
      />

      <ProfileDoubleDescription state={state} onChange={handleChange} />

      <AddMedia
        className="profile-edit__media"
        addFiles={setOtherFiles}
        files={profile.otherFiles}
        label="Інші файли"
      />

      <ProfileTypes label="Тип профілю" />
    </main>
  );
};

export default ProfileEdit;
