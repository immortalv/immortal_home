import React from "react";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import { AddFile } from "components/common";
import { CrossIcon } from "icons";

import "./style.scss";

const AddOtherImages = () => {
  const { otherPhotos } = useSelector((state) => state.profile);

  const setPhotos = (files) => {
    const fileNames = otherPhotos.map((file) => file.name);
    const filteredFiles = files.filter(
      (file) => !fileNames.includes(file.name)
    );

    const filesToSet = [...otherPhotos, ...filteredFiles];
    if (filesToSet.length > 15) return;

    dispatch.profile.setProfile({ otherPhotos: filesToSet });
  };

  const removePhoto = (fileName) => {
    const files = otherPhotos.filter((file) => file.name !== fileName);
    dispatch.profile.setProfile({ otherPhotos: files });
  };

  return (
    <>
      <span className="add-file__label">Інші фото</span>

      <div className="add-file-others-container">
        <AddFile
          files={otherPhotos}
          setFiles={setPhotos}
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
                onClick={() => removePhoto(file.name)}
              >
                <CrossIcon className="image-row-list__remove-icon" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddOtherImages;
