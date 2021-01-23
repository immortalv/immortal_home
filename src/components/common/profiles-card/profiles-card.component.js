import React from "react";
// import clsx from "clsx";

import "./style.scss";

const ProfilesCard = ({ imgSrc, fullName, description }) => {
  return (
    <div className="profiles-card">
      <img src={imgSrc} alt="profile image" className="profiles-card__img" />
      <div className="profiles-card__text-content">
        {fullName && <h5 className="profiles-card__full-name">{fullName}</h5>}
        {description && (
          <p className="profiles-card__description">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ProfilesCard;
