import React from "react";
import { useSelector } from "react-redux";
import { Button, AddFile } from "components/common";

import "./style.scss";
import { dispatch } from "store";

const AddImages = ({ onSubmit }) => {
  const { mainPhoto, coverPhoto, media } = useSelector(
    (state) => state.profile
  );

  const setMainPhoto = (file) =>
    dispatch.profile.setProfile({ mainPhoto: file });

  const setCoverPhoto = (file) =>
    dispatch.profile.setProfile({ coverPhoto: file });

  const setMedia = (file) => dispatch.profile.setProfile({ media: file });

  console.log("mainPhoto", mainPhoto);

  return (
    <>
      <h1 className="header-s-1 add-profile__title">Додайте фотографії</h1>

      <div className="add-profile__images-container">
        <div className="add-file-block add-file-main">
          <AddFile files={mainPhoto} setFiles={setMainPhoto} />
          <span className="add-file__label">
            Головне фото<span className="label--necessary">*</span>
          </span>
        </div>
        <div className="add-file-block add-file-cover">
          <span className="add-file__label">Фото обкладинки</span>
          <AddFile files={coverPhoto} setFiles={setCoverPhoto} />
        </div>
        <div className="add-file-block add-file-others-block">
          <div className="add-file-others-container">
            <AddFile
              files={media}
              setFiles={setMedia}
              multipleFiles={true}
              maxFiles={15}
              className="add-file-others"
            />
          </div>
          <span className="add-file__label">Інші</span>
        </div>
      </div>

      {/* <div className="add-profile__other-files">
        <h2 className="add-profile__subtitle header-s-2">Додайте інші файли</h2>
      </div> */}

      <Button onClick={onSubmit} type="secondary" className="add-profile__btn">
        Далі
      </Button>
    </>
  );
};

export default AddImages;
