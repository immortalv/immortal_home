import React from "react";

const FooterBlock = ({ title, text }) => {
  return (
    <div className="footer__block">
      {title && <h5 className="footer__title">{title}</h5>}
      {text && <p className="footer__text">{text}</p>}
    </div>
  );
};

export default FooterBlock;
