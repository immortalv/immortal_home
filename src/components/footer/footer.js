import React from "react";
import FooterBlock from "./footer-block";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__block-container">
        <FooterBlock
          title="Сервіс"
          text="lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
        <FooterBlock
          title="Блог"
          text="lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
        <FooterBlock
          title="Про нас"
          text="lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
        <FooterBlock
          title="Контакти"
          text="lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
      </div>
      <div className="footer__link-container">
        <a href="#" className="footer__link">
          Privacy policy
        </a>
        <a href="#" className="footer__link">
          Term of service
        </a>
        <a href="#" className="footer__link footer__link--last">
          Language
        </a>
        <span className="footer__copyright">&copy; Immortal</span>
        <span className="align-span" />
      </div>
    </footer>
  );
};

export default Footer;
