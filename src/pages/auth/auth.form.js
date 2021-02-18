import React from 'react';

import "./style.scss";

const AuthForm = () => {
  return(
    <form className="login__form">
      <label className="login__form-text">Email*
      <input
        id="email"
        className="login__form-input"
        type="text"
        placeholder="Впишіть актуальну поштову адресу">
      </input>
      </label>
      <label className="login__form-text">Пароль*</label>
      <input type="password" className="login__form-input"></input>
      <button type="button" className="login__form-button">ВХІД</button>
      <div className="registration__page">
        <span className="registration__page-title">
          Ще немає облікового запису?
          <a
            href="#"
            className="registration__page-text"
          >
            Зареєструватись
          </a>
        </span>
      </div>
      <button type="button" className="login__form-social">Вхід через Google</button>
      <button type="button" className="login__form-social">Вхід через Facebook</button>
      <button type="button" className="login__form-social">Вхід через Apple</button>
    </form>
  )
};

export default AuthForm;