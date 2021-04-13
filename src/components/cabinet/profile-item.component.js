import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router";
import QRCodeStyling from "qr-code-styling";
import { Button, Checkbox } from "components/common";
import { getProfileImg } from "utils/image.utils";
import { PROFILE } from "constants/routes.constants";
import logoImg from "./logo.svg";

import "./style.scss";

const getImagefromBucket = (name) =>
  `https://immortal-profile-content.s3.eu-central-1.amazonaws.com/${name}`;

const getQRCodeData = (id) => `http://immortalv.com/profiles/${id}`;

const ProfileItem = ({ profile }) => {
  const history = useHistory();
  const { name, description, profileType } = profile;
  const [isPublic, setIsPublic] = useState(true);
  const qrCodeRef = useRef(null);

  const handleChange = () => setIsPublic(!isPublic);
  const goToProfilePage = () => history.push(`${PROFILE}/${profile.id}`);

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 200,
      height: 200,
      data: getQRCodeData(profile.id),
      image: logoImg,
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 2,
        imageSize: 0.5,
      },
    });

    if (qrCodeRef.current) {
      qrCode.append(qrCodeRef.current);
    }
  }, []);

  return (
    <div className="profile-item">
      <img
        onClick={goToProfilePage}
        src={getImagefromBucket(profile.mainPhoto)}
        className="profile-item__img"
        alt="profile picture"
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
        <div className="qr-code" ref={qrCodeRef}></div>
        <span className="qr-code__label">QR код</span>
      </div>
    </div>
  );
};

export default ProfileItem;
