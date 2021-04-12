import React, { useEffect, useState } from "react";
import { Button, AddFile } from "components/common";

import "./style.scss";

const AddImages = ({ onSubmit, profile }) => {
  const [mainPhoto, setMainPhoto] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState([]);
  const [othersPhoto, setOthersPhoto] = useState([]);

  useEffect(() => {
    const { mainPhoto, coverPhoto, othersPhoto } = profile;

    if (mainPhoto) setMainPhoto(mainPhoto);
    if (coverPhoto) setCoverPhoto(coverPhoto);
    if (othersPhoto) setOthersPhoto(othersPhoto);
  }, []);

  const setPhotos = async () => {
    if (!mainPhoto[0]) return;

    onSubmit({
      mainPhoto: mainPhoto[0],
      coverPhoto: coverPhoto[0],
      media: othersPhoto,
    });
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
              files={othersPhoto}
              setFiles={setOthersPhoto}
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

      <Button onClick={setPhotos} type="secondary" className="add-profile__btn">
        Далі
      </Button>
    </>
  );
};

export default AddImages;
