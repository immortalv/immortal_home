import React from "react";
import clsx from "clsx";
import { AddFileDropzone } from "components/common";
import { CrossIconSolid } from "icons";

import "./style.scss";

const AddMedia = ({ className, title, label, files, addFiles }) => {
  const onOtherMediaDrop = (settledFiles) => {
    const fileNames = files.map((file) => file.name);
    const filteredFiles = settledFiles.filter(
      (file) => !fileNames.includes(file.name)
    );

    const filesToSet = [...files, ...filteredFiles];
    if (filesToSet.length > 15) return;

    addFiles(filesToSet);
  };

  const removeFile = (fileName) => {
    const filteredFiles = files.filter((file) => file.name !== fileName);
    addFiles(filteredFiles);
  };

  return (
    <div className={clsx("add-media__container", className)}>
      {title && <h2 className="header-s-2 add-profile__subtitle">{title}</h2>}
      {label && <span className="add-file__label">{label}</span>}

      <div className="add-file-block add-file-media">
        <AddFileDropzone
          accept="video/*"
          onDrop={onOtherMediaDrop}
          className="add-file__other-files"
        />

        <ul className="file-list">
          {files.map((file) => (
            <li key={file.name || file.fileName} className="file-list__item">
              {file.name || file.fileName}
              <button
                className="file-list__btn"
                onClick={() => removeFile(file.name)}
              >
                <CrossIconSolid className="file-list__btn-icon" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddMedia;
