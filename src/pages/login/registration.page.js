import React from 'react';

import "./style.scss";

const Registration = () => {
  return(
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
  )
}

export default Registration;