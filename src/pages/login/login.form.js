import React from 'react';
import Registration from "./registration.page";


import "./style.scss";

const LoginForm = () => {
  return(
    <div className="login__form">
      <span className="login__form-text">Email*</span>
      <input
        className="login__form-input"
        type="text"
        placeholder="Впишіть актуальну поштову адресу"></input>
      <span className="login__form-text">Пароль*</span>
      <input type="password" className="login__form-input"></input>
      <button type="button" className="login__form-button">ВХІД</button>
      <Registration />
      <button type="button" className="login__form-social">Вхід через Google</button>
      <button type="button" className="login__form-social">Вхід через Facebook</button>
      <button type="button" className="login__form-social">Вхід через Apple</button>
          </div>
  )
};

export default LoginForm;