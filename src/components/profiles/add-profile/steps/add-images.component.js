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
      <div className="add-profile__content">
        <AddFile />
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
