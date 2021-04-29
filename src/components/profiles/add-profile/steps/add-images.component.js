import React from "react";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import { Button, AddFile } from "components/common";
import { showErrorToast } from "components/toasters";
import AddMedia from "./add-media.component";

import "./style.scss";
import AddOtherImages from "./add-other-images.component";

const AddImages = ({ onSubmit }) => {
  const { mainPhoto } = useSelector((state) => state.profile);

  const setMainPhoto = (file) =>
    dispatch.profile.setProfile({ mainPhoto: file });

  const submit = () => {
    if (!mainPhoto?.length) return showErrorToast("Додайте головне фото");
    onSubmit();
  };

  return (
    <>
      <h1 className="header-s-1 add-profile__title">Додайте фотографії</h1>

      <div className="add-profile__images-container">
        <span className="add-file__label">
          Головне фото<span className="label--necessary">*</span>
        </span>
        <AddFile
          className="add-image__main"
          files={mainPhoto}
          setFiles={setMainPhoto}
        />

        <AddOtherImages />
        <AddMedia />
      </div>

      <Button onClick={submit} type="secondary" className="add-profile__btn">
        Далі
      </Button>
    </>
  );
};

export default AddImages;
