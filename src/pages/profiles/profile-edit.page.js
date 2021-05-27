import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import { transfromDate, getFilePreview } from "utils/profile.utils";
import {
  NameFormGroup,
  ProfileDoubleDescription,
  FormField,
  Button,
} from "components/common";
import {
  AddOtherImages,
  AddMainPhoto,
  AddMedia,
  ProfileTypes,
} from "components/profiles/add-profile/steps";
import { ChevronLeftIcon } from "icons";

import { useGetProfile } from "./hooks";
import routesConstants from "constants/routes.constants";
import Spinner from "components/spinner/spinner.component";

const ProfileEdit = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    profile,
    loading: { global: loading },
  } = useSelector((state) => state);
  const { getAccessTokenSilently } = useAuth0();
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

  const updateProfile = async () => {
    const token = await getAccessTokenSilently();
    await dispatch.profile.setProfile({ ...state, token });
    await dispatch.profile.updateProfileData({ id });
  };

  const setMainPhoto = (file) => setData("mainPhoto", file);
  const setOtherPhotos = (files) => setData("otherPhotos", files);
  const setOtherFiles = (files) => setData("otherFiles", files);
  const goToCabinet = () => history.push(routesConstants.CABINET);

  useGetProfile(id);
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

  if (loading) return <Spinner text="Оновлюємо профіль" />;
  return (
    <main className="profile-edit">
      <h1 className="header-s-1  profile-edit__title">Редагування</h1>
      <button onClick={goToCabinet} className="btn-back profile-edit__btn-back">
        <ChevronLeftIcon className="btn-back__icon profile-edit__btn-back__icon" />
        <span className="btn-back__text">Назад</span>
      </button>

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
        label="Відео"
      />

      <ProfileTypes label="Тип профілю" />

      <Button
        type="secondary"
        className="profile-edit__btn-save"
        onClick={updateProfile}
      >
        Зберегти
      </Button>
    </main>
  );
};

export default ProfileEdit;
