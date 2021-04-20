import React from "react";
import { SendIcon } from "icons";

import "./style.scss";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="contact-form">
      <input
        placeholder="Напишіть повідомлення тут"
        type="text"
        className="contact-form__input"
      />
      <button className="contact-form__btn">
        <SendIcon onClick={handleSubmit} />
      </button>
    </form>
  );
};

export default ContactForm;
