import React from "react";
import { AddFile } from "components/common";

import "./style.scss";

const AddMainImage = ({
  label = "Головне фото",
  addFile,
  file,
  isNecessary,
}) => {
  return (
    <div className="add-main-image__container">
      <span className="add-file__label">
        {label}
        {isNecessary && <span className="label--necessary">*</span>}
      </span>
      <AddFile className="add-image__main" files={file} setFiles={addFile} />
    </div>
  );
};

export default AddMainImage;
