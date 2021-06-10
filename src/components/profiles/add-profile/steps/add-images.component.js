import React from "react";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import { Button } from "components/common";
import { showErrorToast } from "components/toasters";
import AddMedia from "./add-media.component";
import AddMainPhoto from "./add-main-photo.component";
import AddOtherImages from "./add-other-images.component";

import "./style.scss";

const AddImages = ({ onSubmit }) => {
  const { mainPhoto, otherPhotos, otherFiles } = useSelector(
    (state) => state.profile
  );

  const setData = (label, data) =>
    dispatch.profile.setProfile({ [label]: data });

  const setMainPhoto = (file) => setData('mainPhoto', file);
  const setOtherPhotos = (files) => setData('otherPhotos', files);
  const setOtherFiles = (files) => setData('otherFiles', files);

  const submit = () => {
    if (!mainPhoto?.length) return showErrorToast("Додайте головне фото");
    onSubmit();
  };

  return (
    <>
      <h1 className="header-s-1 add-profile__title">Додайте фотографії</h1>

      <div className="add-profile__images-container">
        <AddMainPhoto isNecessary addFile={setMainPhoto} file={mainPhoto} />
        <AddOtherImages addFiles={setOtherPhotos} files={otherPhotos} />
        <AddMedia
          addFiles={setOtherFiles}
          files={otherFiles}
          title="Додайте відео"
        />
      </div>

      <Button onClick={submit} type="secondary" className="add-profile__btn">
        Далі
      </Button>
    </>
  );
};

export default AddImages;
