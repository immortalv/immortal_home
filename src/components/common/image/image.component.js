import React from "react";
import ModalImage from "react-modal-image";

import "./style.scss";

const Image = ({ img, className }) => {
  return (
    <ModalImage
      small={img.src || img}
      large={img.src || img}
      className={className}
      hideDownload={true}
      hideZoom={true}
    />
  );
};

export default Image;
