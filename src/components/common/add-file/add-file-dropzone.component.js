import React, { useMemo } from "react";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 1,
  borderRadius: 6,
  borderColor: "#212121",
  borderStyle: "solid",
  backgroundColor: "#F9F9F9",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const AddFileDropzone = ({
  className,
  onDrop,
  maxFiles = 15,
  accept = "image/*",
}) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop: onDrop, maxFiles, accept });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className={clsx("add-file-dropzone", className)}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p className="add-file-dropzone__text text-subtitle">
          Перетягніть сюди інші ваші файли
        </p>
      </div>
    </div>
  );
};

export default AddFileDropzone;
