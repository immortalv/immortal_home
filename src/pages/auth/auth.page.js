import React from 'react';
import AuthForm from './auth.form';

import "./style.scss";

const AuthPage = () => {
  return(
    <main className="login">
      <div className="login__description">
      <div className="login__description-title">
        <blockquote className="login__description-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquet mauris facilisis amet, dignissim fermentum venenatis ultrices
        mattis elementum. Feugiat non cursus sollicitudin etiam egestas vel in.
        Aliquet ornare a urna amet gravida.
        </blockquote>
        <span className="login__description-signature">Khtos Tam</span>
      </div>
 </div>
      <div className="login__main">
        <div className="login__entrance">
          <p className="login__entrance-title">Вхід</p>
          <AuthForm />
        </div>
      </div>

    </main>
  )

}

export default AuthPage;