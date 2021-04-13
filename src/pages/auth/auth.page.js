import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import routesConstants from "constants/routes.constants";
// import { Button } from "components/common";
import {
  LogoIcon,
  ChevronLeftIcon,
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
} from "icons";

import AuthComponent from "./auth.component";

import "./style.scss";

const AuthPage = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const goBack = () => {
    if (isRegistration) return setIsRegistration(false);
    if (history.length > 1) return history.goBack();
    history.push(routesConstants.HOME);
  };

  const goToRegistration = () => history.push(routesConstants.REGISTER);

  useEffect(() => {
    const isRegistrationPage = location.pathname === routesConstants.REGISTER;
    setIsRegistration(isRegistrationPage);
  }, [location]);

  return (
    <main className="auth">
      <div className="quote__block-container">
        <LogoIcon className="header-dark__logo auth__logo" />
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
          <h1 className="auth__entrance-title mbs">
            {isRegistration ? "Реєстрація приватного акаунту" : "Вхід"}
          </h1>
          <div className="auth__form">
            <AuthComponent isRegistration={isRegistration} />

            {!isRegistration && (
              <span className="auth__register">
                Ще немає облікового запису?
                <button
                  onClick={goToRegistration}
                  className="auth__register-button"
                >
                  Зареєструватись
                </button>
              </span>
            )}

            {/* <Button className="auth__button auth__button-social mtm">
              <GoogleIcon className="auth__button-icon auth__button-icon" />
              {`${isRegistration ? "Реєстрація" : "Вхід"} через Google`}
            </Button>
            <Button className="auth__button auth__button-social">
              <FacebookIcon className="auth__button-icon auth__button-icon-facebook" />
              {`${isRegistration ? "Реєстрація" : "Вхід"} через Facebook`}
            </Button>
            <Button className="auth__button auth__button-social">
              <AppleIcon className="auth__button-icon" />
              {`${isRegistration ? "Реєстрація" : "Вхід"} через  Apple ID`}
            </Button> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
