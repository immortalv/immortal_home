import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";
import { Button, AddFile } from "components/common";

import "./style.scss";

const AddImages = ({ onSubmit, profile }) => {
  //   const [activeTemplate, setActiveTemplate] = useState();

  //   useEffect(() => {
  //     setActiveTemplate(profile?.template || "");
  //   }, []);

  return (
    <>
      <h1 className="title add-profile__title">Додайте фотографії</h1>

      <div className="add-profile__images-container">
        <div className="add-file-block add-file-main">
          <AddFile />
          <span className="add-file__label">
            Головне фото<span className="label--necessary">*</span>
          </span>
        </div>
        <div className="add-file-block add-file-cover">
          <span className="add-file__label">Фото обкладинки</span>
          <AddFile />
        </div>
        <div className="add-file-block add-file-others-block">
          <div className="add-file-others-container">
            <AddFile className="add-file-others" />
            <AddFile className="add-file-others" />
            <AddFile className="add-file-others" />
          </div>
          <span className="add-file__label">Інші</span>
        </div>
      </div>

      <Button
        // onClick={() => onSubmit({ template: activeTemplate })}
        type="secondary"
        className="add-profile__btn"
      >
        Далі
      </Button>
    </>
  );
};

export default AddImages;
