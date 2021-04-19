import React from "react";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import { Button, AddFile } from "components/common";
import { CrossIcon } from "icons";
import AddMedia from "./add-media.component";

import "./style.scss";

const AddImages = ({ onSubmit }) => {
  const { mainPhoto, coverPhoto, otherPhotos } = useSelector(
    (state) => state.profile
  );

  const setMainPhoto = (file) =>
    dispatch.profile.setProfile({ mainPhoto: file });

  const setCoverPhoto = (file) =>
    dispatch.profile.setProfile({ coverPhoto: file });

  const setOtherPhotos = (files) =>
    dispatch.profile.setProfile({ otherPhotos: files });

  const removeOtherPhoto = (fileName) => {
    const files = otherPhotos.filter((file) => file.name !== fileName);
    dispatch.profile.setProfile({ otherPhotos: files });
  };

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
              files={otherPhotos}
              setFiles={setOtherPhotos}
              withPreview={false}
              maxFiles={15}
              className="add-file-others"
            />
            <div className="image-row-list">
              {otherPhotos.map((file) => (
                <div className="image-row-list__item" key={file.preview}>
                  <img
                    key={file.preview}
                    src={file.preview}
                    className="image-row-list__img"
                  />

                  <button
                    className="image-row-list__remove"
                    onClick={() => removeOtherPhoto(file.name)}
                  >
                    <CrossIcon className="image-row-list__remove-icon" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <span className="add-file__label">Інші</span>
        </div>
      </div>

      <AddMedia />

      <Button onClick={onSubmit} type="secondary" className="add-profile__btn">
        Далі
      </Button>
    </>
  );
};

export default AddImages;
