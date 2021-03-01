import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { Button } from "components/common";
// import clsx from "clsx";

// import routes from "router/routes";

import "./style.scss";

const ProfileItem = ({ name, description, type, avatar, qrCode }) => {
  return (
    <div className="profile-item">
      <img src={avatar} className="profile-item__img" alt="" />
      <div className="profile-item__info">
        <h4 className="profile-item__name">{name}</h4>
        <p className="profile-item__description">{description}</p>
        <span>{type}</span>

        <Button>Редагувати</Button>
      </div>
      <img src={qrCode} className="profile-item__qr-code" alt="" />
    </div>
  );
};

export default ProfileItem;
