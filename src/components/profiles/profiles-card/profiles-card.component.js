import React from "react";
import { getProfileDataFromBucket } from "utils/image.utils";
import ProfileDefaultImage from "assets/profile-default.jpg";

// import clsx from "clsx";

import "./style.scss";

const ProfilesCard = ({ profile }) => {
  const { fullName, description, mainPhoto } = profile;
  return (
    <div className="profiles-card">
      <img
        src={
          mainPhoto?.key
            ? getProfileDataFromBucket(mainPhoto?.key)
            : ProfileDefaultImage
        }
        alt="profile image"
        className="profiles-card__img"
      />
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
