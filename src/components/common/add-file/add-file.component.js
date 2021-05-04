import React, { useEffect } from "react";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import { PlusIcon, CrossIconSolid } from "icons";

import "./style.scss";

const AddFile = ({
  setFiles,
  files = [],
  className,
  accept = "image/*",
  maxFiles = 1,
  withPreview = true,
}) => {
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept,
    maxFiles,
    onDrop: (acceptedFiles) => {
      const dataToSet = [
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ];

      setFiles(dataToSet);
    },
  });

  const removeFiles = () => setFiles([]);

  useEffect(() => {
    if (!files || !files.length) return;
    if (Array.isArray(files)) {
      files.forEach((file) => URL.revokeObjectURL(file));
    }
  }, [files]);

  const showFile = withPreview && !!files.length

  return (
    <>
      <section
        className={clsx(
          "add-file__container",
          className,
          !!files.length && "add-file__container--full",
          isDragActive && "add-file__container--active"
        )}
      >
        {!showFile && (
          <>
            <div className="add-file__add-field" {...getRootProps()} />
            <input {...getInputProps()} />
            <button className="add-file__add" onClick={open}>
              <PlusIcon className="add-file__icon-add" />
            </button>
          </>
        )}

        {showFile && (
          <>
            <img
              className="add-file__file"
              src={files[0]?.preview || files[0]}
            />
            <button className="add-file__remove" onClick={removeFiles}>
              <CrossIconSolid className="add-file__remove-icon" />
            </button>
          </>
        )}
      </section>
    </>
  );
};

export default AddFile;
