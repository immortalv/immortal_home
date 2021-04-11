import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { uploadFile } from "services/api/profile.service";
import Spinner from "components/spinner/spinner.component";
import { Button, AddFile } from "components/common";

import "./style.scss";

const AddImages = ({ onSubmit, profile }) => {
  const [mainPhoto, setMainPhoto] = useState([]);
  const [coverPhoto, setCoverPhoto] = useState([]);
  const [othersPhoto, setOthersPhoto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { mainPhoto, coverPhoto, othersPhoto } = profile;

    if (mainPhoto) setMainPhoto(mainPhoto);
    if (coverPhoto) setCoverPhoto(coverPhoto);
    if (othersPhoto) setOthersPhoto(othersPhoto);
  }, []);

  const setPhotos = async () => {
    setIsLoading(true);
    // try {
    //   const formData = new FormData();

    //   if (!formData.length) {
    //     formData.append("mainPhoto", mainPhoto[0]);
    //     formData.append("coverPhoto", coverPhoto[0]);
    //     formData.append("others", othersPhoto);

    //     const respone = await uploadFile(formData);

    //     onSubmit({
    //       mainPhoto: "mainPhoto[0]",
    //       coverPhoto: "coverPhoto[0]",
    //     });

    //     console.log(respone);
    //   }
    // } catch (error) {
    //   console.log(error);
    //   onSubmit();
    // }

    onSubmit({
      mainPhoto: "mainPhoto[0]",
      coverPhoto: "coverPhoto[0]",
    });

    setIsLoading(false);
  };

  if (isLoading) return <Spinner />;

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
