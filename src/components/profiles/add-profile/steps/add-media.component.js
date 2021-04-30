import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import { AddFileDropzone } from "components/common";
import { CrossIconSolid } from "icons";

import "./style.scss";

const AddMedia = ({ className, title, label }) => {
  const { otherFiles } = useSelector((state) => state.profile);

  const onOtherMediaDrop = (files) => {
    const fileNames = otherFiles.map((file) => file.name);
    const filteredFiles = files.filter(
      (file) => !fileNames.includes(file.name)
    );

    const filesToSet = [...otherFiles, ...filteredFiles];
    if (filesToSet.length > 15) return;

    dispatch.profile.setProfile({ otherFiles: filesToSet });
  };

  const removeFile = (fileName) => {
    const files = otherFiles.filter((file) => file.name !== fileName);
    dispatch.profile.setProfile({ otherFiles: files });
  };

  return (
    <div className={clsx("add-media__container", className)}>
      {title && <h2 className="header-s-2 add-profile__subtitle">{title}</h2>}
      {label && <span className="add-file__label">{label}</span>}

      <div className="add-file-block add-file-media">
        <AddFileDropzone
          onDrop={onOtherMediaDrop}
          className="add-file__other-files"
        />

        <ul className="file-list">
          {otherFiles.map((file) => (
            <li key={file.name} className="file-list__item">
              {file.name}
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
