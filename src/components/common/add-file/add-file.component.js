import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import { PlusIcon, CrossIcon } from "icons";

import "./style.scss";

const AddFile = ({ className, accept = "image/*", maxFiles = 1 }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxFiles,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const removeFile = () => {
    setFiles([]);
  };

  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  console.log("files", files);

  return (
    <section
      className={clsx(
        "add-file__container",
        className,
        isDragActive && "add-file__container--active"
      )}
    >
      {!files.length && (
        <>
          <div className="add-file__add-field" {...getRootProps()} />
          <input {...getInputProps()} />
          <PlusIcon className="add-file__icon-add" />
        </>
      )}

      {!!files.length && (
        <>
          <img className="add-file__file" src={files[0]?.preview} />
          <button className="add-file__remove" onClick={removeFile}>
            <CrossIcon className="add-file__remove-icon" />
          </button>
        </>
      )}
    </section>
  );
};

export default AddFile;
