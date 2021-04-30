import React from "react";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import { AddFile } from "components/common";

import "./style.scss";

const AddMainImage = ({ label = "Головне фото" }) => {
  const { mainPhoto } = useSelector((state) => state.profile);

  const setMainImage = (file) =>
    dispatch.profile.setProfile({ mainPhoto: file[0] });

  return (
    <div className="add-main-image__container">
      <span className="add-file__label">
        {label}
        <span className="label--necessary">*</span>
      </span>
      <AddFile
        className="add-image__main"
        files={[mainPhoto]}
        setFiles={setMainImage}
      />
    </div>
  );
};

export default AddMainImage;
