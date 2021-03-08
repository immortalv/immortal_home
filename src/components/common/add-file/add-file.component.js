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
  multipleFiles = false,
}) => {
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept,
    maxFiles,
    onDrop: (acceptedFiles) => {
      const dataToSet = [
        ...(multipleFiles ? files : []),
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ];

      setFiles(dataToSet);
    },
  });

  const removeFiles = (file) => {
    if (!multipleFiles) return setFiles([]);

    const filteredFiles = files.filter(({ path }) => path !== file.path);
    setFiles(filteredFiles);
  };

  useEffect(() => {
    if (!files || !files.length) return;
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <>
      <section
        className={clsx(
          "add-file__container",
          className,
          isDragActive && "add-file__container--active"
        )}
      >
        {(multipleFiles || !files.length) && (
          <>
            <div className="add-file__add-field" {...getRootProps()} />
            <input {...getInputProps()} />
            <button className="add-file__add" onClick={open}>
              <PlusIcon className="add-file__icon-add" />
            </button>
          </>
        )}

        {!multipleFiles && !!files.length && (
          <>
            {files[0] && (
              <img className="add-file__file" src={files[0]?.preview} />
            )}
            <button className="add-file__remove" onClick={removeFiles}>
              <CrossIcon className="add-file__remove-icon" />
            </button>
          </>
        )}
      </section>

      {multipleFiles && (
        <div className="add-file__files-container">
          {files.map((file) => (
            <div className="add-file__item" key={file.preview}>
              <img
                key={file.preview}
                src={file.preview}
                className="add-file__file"
              />
              <button
                className="add-file__remove"
                onClick={() => removeFiles(file)}
              >
                <CrossIcon className="add-file__remove-icon" />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AddFile;
