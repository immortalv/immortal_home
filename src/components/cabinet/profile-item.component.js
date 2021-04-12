import React, { useState } from "react";
import { Button, Checkbox } from "components/common";
import { getProfileImg } from "utils/image.utils";

import "./style.scss";

const getImagefromBucket = (name) =>
  `https://immortal-profile-content.s3.eu-central-1.amazonaws.com/${name}`;

const ProfileItem = ({ profile }) => {
  const { name, description, profileType } = profile;
  const [isPublic, setIsPublic] = useState(true);

  const handleChange = () => setIsPublic(!isPublic);

  return (
    <div className="profile-item">
      <img
        src={getImagefromBucket(profile.mainPhoto)}
        className="profile-item__img"
        alt=""
      />
      <div className="profile-item__info">
        <h4 className="profile-item__name">{name}</h4>
        <p className="profile-item__description">{description}</p>
        <div className="profile-item__type-container">
          <span className="profile-item__type">{profileType}</span>
          <Checkbox checked={isPublic} onChange={handleChange} />
        </div>

        <Button type="secondary" className="profile-item__btn">
          Редагувати
        </Button>
      </div>
      <div className="qr-code__container">
        <img
          src={getProfileImg("avatar-image-1", "jpg")}
          className="qr-code"
          alt="qr-code"
        />
        <span className="qr-code__label">QR код</span>
      </div>
    </div>
  );
};

export default ProfileItem;
