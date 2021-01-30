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
        <div className="footer__links">
          <a href="#" className="footer__link">
            Privacy policy
          </a>
          <a href="#" className="footer__link">
            Term of service
          </a>
          <a href="#" className="footer__link">
            Language
          </a>
        </div>
        <span className="footer__copyright">&copy; 2021 Immortal</span>
      </div>
    </footer>
  );
};

export default Footer;
