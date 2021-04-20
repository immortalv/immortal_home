import React from "react";
import ModalImage from "react-modal-image";

import "./style.scss";

const Image = ({ img, className }) => {
  return (
    <ModalImage
      small={img.src}
      large={img.src}
      className={className}
      hideDownload={true}
      hideZoom={true}
    />
  )
}

export default Image;