import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { Button, Checkbox } from "components/common";
// import clsx from "clsx";

// import routes from "router/routes";

import "./style.scss";

const ProfileItem = ({ profile }) => {
  const { name, description, type, avatar, qrCode } = profile;
  const [isPublic, setIsPublic] = useState(true);

  const handleChange = () => setIsPublic(!isPublic);

  return (
    <div className="profile-item">
      <img src={avatar} className="profile-item__img" alt="" />
      <div className="profile-item__info">
        <h4 className="profile-item__name">{name}</h4>
        <p className="profile-item__description">{description}</p>
        <div className="profile-item__type-container">
          <span className="profile-item__type">{type}</span>
          <Checkbox checked={isPublic} onChange={handleChange} />
        </div>

        <Button type="secondary" className="profile-item__btn">
          Редагувати
        </Button>
      </div>
      <div className="qr-code__container">
        <img src={qrCode} className="qr-code" alt="qr-code" />
        <span className="qr-code__label">QR код</span>
      </div>
    </div>
  );
};

export default ProfileItem;
