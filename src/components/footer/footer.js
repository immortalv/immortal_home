import React from "react";
import ContactForm from "components/contact-form";
import { LogoIcon, SendIcon } from "icons";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__advert">
        <LogoIcon className="footer__advert-icon" />
        <span className="footer__copyright">
          All rights reserved.
          <br className="footer__copyright-line-break" /> &copy; 2021 Immortal
          Corp.
        </span>
      </div>
      <div className="footer__contact">
        <p className="footer__text">Зворотній зв’язок</p>
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
