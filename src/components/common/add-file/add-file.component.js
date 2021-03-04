import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PlusIcon, CrossIcon } from "icons";

import "./style.scss";

const AddFile = ({ accept = "image/*", maxFiles = 1 }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
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
    <section className="add-file__container">
      <div className="add-file__add-field" {...getRootProps()} />
      <input {...getInputProps()} />

      <img className="add-file__file" src={files[0]?.preview} />
      <PlusIcon className="add-file__icon-add" />
      <button className="add-file__remove" onClick={removeFile}>
        <CrossIcon className="add-file__remove-icon" />
      </button>
    </section>
  );
};

export default AddFile;
