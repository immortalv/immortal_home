import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { dispatch } from "store";
import routesConstants from "constants/routes.constants";

const AuthComponent = ({ isRegistration }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { error, isAuthenticated } = useSelector((state) => state.user);
  const history = useHistory();

  const onSubmit = async (values, actions) => {
    const { name, email, password } = values;
    if (!email || !password) return;
    if (isRegistration && !name) return;
    if (isRegistration) return dispatch.user.signUp({ name, email, password });

    dispatch.user.signIn({ email, password });
    actions.setSubmitting(false);
  };

  const passwordElement = (type) => {
    return (
      <Field
        required
        className="form-field__input"
        type={type}
        name="password"
        id="password"
      />
    );
  };

  const changePasswordType = (e) => {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    if (isAuthenticated) history.replace(routesConstants.HOME);
  }, [isAuthenticated]);

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
            {isRegistration && (
              <>
                <label className="form-field__label" htmlFor="name">
                  Ім”я*
                </label>
                <Field
                  required
                  className="form-field__input"
                  type="name"
                  id="name"
                  name="name"
                />
                <ErrorMessage
                  className="form-field__error"
                  name="name"
                  component="div"
                />
              </>
            )}

            <label className="form-field__label" htmlFor="email">
              Email*
            </label>
            <Field
              required
              className="form-field__input"
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage
              className="form-field__error"
              name="email"
              component="div"
            />

            <label className="form-field__label" htmlFor="password">
              Пароль*
            </label>

            <div className="form-field__input-container">
              <button
                onClick={changePasswordType}
                className="form-field__password-switcher"
              >
                <span>{isPasswordVisible ? "Приховати" : "Показати"}</span>
              </button>
              {passwordElement(isPasswordVisible ? "text" : "password")}
            </div>

            <ErrorMessage
              className="form-field__error"
              name="password"
              component="div"
            />

            {error && <span className="form-field__error">{error}</span>}

            <button
              type="secondary"
              disabled={isSubmitting}
              className="button button--secondary auth__button"
            >
              {isRegistration ? "Реєстрація" : "Вхід"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthComponent;
