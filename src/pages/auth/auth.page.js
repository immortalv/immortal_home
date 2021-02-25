import React from 'react';
import FormField from 'components/common/form-field/form-field.component';
import GoogleIcon from "icons/google-icon.component";
import FacebookIcon from "icons/facebook-icon.component";
import AppleIcon from "icons/apple-icon.component";

import "./style.scss";

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    
  }

  handleChange (e) {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
});
  }

  render () {
    const { email, password } = this.state;

    return(
      <main className="login">
        <div className="quote__block">
          <div className="quote__block-wrapper"> 
            <blockquote className="quote__block-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquet mauris facilisis amet, dignissim fermentum venenatis ultrices
            mattis elementum. Feugiat non cursus sollicitudin etiam egestas vel in.
            Aliquet ornare a urna amet gravida.
            </blockquote>
            <span className="quote__block-signature">Khtos Tam</span>
        </div>
        </div>
        <div className="login__main">
          <div className="login__entrance">
            <h2 className="login__entrance-title">Вхід</h2>
            <div className="login__form">
              <FormField
                value={email}
                onChange={(event) => {
                  this.setState({
                    email: event.target.value
                  })
                }}
                type="email"
                label="Email*"
                placeholder="Впишіть актуальну поштову адресу"
              />
              <FormField
                value={password}
                onChange={(event) => {
                  this.setState({
                    password: event.target.value
                  })
                }}
                type="password"
                label="Пароль*"
              />
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
              <button type="button" className="login__form-social">
                <GoogleIcon  className="login__icon"/>
                Вхід через Google
              </button>
              <button type="button" className="login__form-social">
                <FacebookIcon  className="login__icon-facebook"/>
                Вхід через Facebook
              </button>
              <button type="button" className="login__form-social">
                <AppleIcon  className="login__icon"/>
                Вхід через Apple
              </button>
            </div>
          </div>
        </div>
  
      </main>
    )
  }
}

export default AuthPage;