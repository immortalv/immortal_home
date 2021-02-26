import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import routesConstants from "constants/routes.constants";
import { Button, FormField } from "components/common";
import {
  LogoIcon,
  ChevronLeftIcon,
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
} from "icons";

import "./style.scss";

const AuthPage = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const goBack = () => {
    if (history.length > 1) return history.goBack();
    history.push(routesConstants.HOME);
  };

  return (
    <main className="auth">
      <div className="quote__block-container">
        <LogoIcon className="header-dark__logo auth__logo" />
        {/* <div className="quote__block-wrapper"> */}
        <div>
          <blockquote className="quote__block-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
            mauris facilisis amet, dignissim fermentum venenatis ultrices mattis
            elementum. Feugiat non cursus sollicitudin etiam egestas vel in.
            Aliquet ornare a urna amet gravida.
          </blockquote>
          <figcaption className="quote__block-figcaption">Khtos Tam</figcaption>
        </div>
      </div>
      <div className="auth__main">
        <button onClick={goBack} className="auth__button-back btn-back">
          <ChevronLeftIcon className="btn-back__icon" />
          Назад
        </button>
        <div className="auth__entrance">
          <h1 className="auth__entrance-title">Вхід</h1>
          <div className="auth__form">
            <FormField
              className="auth__form-field"
              value={state.email}
              name="email"
              onChange={handleChange}
              type="email"
              label="Email*"
              placeholder="Впишіть актуальну поштову адресу"
            />
            <FormField
              className="auth__form-field"
              value={state.password}
              name="password"
              onChange={handleChange}
              type="password"
              label="Пароль*"
            />
            <Button type="secondary" className="auth__button">
              ВХІД
            </Button>
            <div className="registration__page">
              <span className="registration__page-title">
                Ще немає облікового запису?
                <a href="#" className="registration__page-text">
                  Зареєструватись
                </a>
              </span>
            </div>
            <Button className="auth__button auth__button-social">
              <GoogleIcon className="auth__button-icon auth__button-icon" />
              Вхід через Google
            </Button>
            <Button className="auth__button auth__button-social">
              <FacebookIcon className="auth__button-icon auth__button-icon-facebook" />
              Вхід через Facebook
            </Button>
            <Button className="auth__button auth__button-social">
              <AppleIcon className="auth__button-icon" />
              Вхід через Apple ID
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
  // }
};

export default AuthPage;
