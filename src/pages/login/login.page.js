import React from 'react';
import LoginForm from './login.form';

import "./style.scss";

const LoginPage = () => {
  return(
    <main className="login">
      <div className="login__description">
      <div className="login__description-title">
        <h3 className="login__description-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquet mauris facilisis amet, dignissim fermentum venenatis ultrices
        mattis elementum. Feugiat non cursus sollicitudin etiam egestas vel in.
        Aliquet ornare a urna amet gravida.
        </h3>
        <span className="login__description-signature">Khtos Tam</span>
      </div>
      </div>

      <div className="login__main">
        <div className="login__entrance">
          <p className="login__entrance-title">Вхід</p>
          <LoginForm />
        </div>
      </div>

    </main>
  )

}

export default LoginPage;