import React, { useEffect } from "react";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import { PlusIcon, CrossIcon } from "icons";

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
    files.forEach((file) => URL.revokeObjectURL(file));
  }, [files]);

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
        {(!withPreview || !files.length) && (
          <>
            <div className="add-file__add-field" {...getRootProps()} />
            <input {...getInputProps()} />
            <button className="add-file__add" onClick={open}>
              <PlusIcon className="add-file__icon-add" />
            </button>
          </>
        )}

        {withPreview && !!files.length && (
          <>
            <img className="add-file__file" src={files[0]?.preview} />
            <button className="add-file__remove" onClick={removeFiles}>
              <CrossIcon className="add-file__remove-icon" />
            </button>
          </>
        )}
      </section>
    </>
  );
};

export default AddFile;
