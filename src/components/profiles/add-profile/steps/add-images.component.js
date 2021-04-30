import React from "react";
import { useSelector } from "react-redux";
import { Button } from "components/common";
import { showErrorToast } from "components/toasters";
import AddMedia from "./add-media.component";
import AddMainImage from "./add-main-image.component";
import AddOtherImages from "./add-other-images.component";

import "./style.scss";

const AddImages = ({ onSubmit }) => {
  const { mainPhoto } = useSelector((state) => state.profile);

  const submit = () => {
    if (!mainPhoto?.length) return showErrorToast("Додайте головне фото");
    onSubmit();
  };

  return (
    <>
      <h1 className="header-s-1 add-profile__title">Додайте фотографії</h1>

      <div className="add-profile__images-container">
        <AddMainImage />
        <AddOtherImages />
        <AddMedia title="Додайте інші файли" />
      </div>

      <Button onClick={submit} type="secondary" className="add-profile__btn">
        Далі
      </Button>
    </>
  );
};

export default AddImages;
