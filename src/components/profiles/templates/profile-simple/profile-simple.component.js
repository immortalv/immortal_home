import React from "react";
import { transfromDate } from "utils/profile.utils";
import forestImg from "assets/profile-simple-background.jpg";

import Video from '../../../common/video/video';
import Image from "components/common/image/image";

import "./style.scss";

const getImagefromBucket = (name) =>
  `https://immortal-profile-content.s3.eu-central-1.amazonaws.com/${name}`;

const ProfileSimple = ({ profileData }) => {
  const {
    name,
    birthDate,
    deathDate,
    mainPhoto,
    otherPhotos,
    otherFiles,
    description,
    descriptionAdditional,
  } = profileData;

  console.log("profileData", profileData);

  return (
    <main className="profile profile-simple">
      <div className="profile-simple__top-container">
        <img
          src={forestImg}
          alt="background"
          className="profile-simple__background-img"
        />
        <img src={mainPhoto} alt="" className="profile-simple__avatar-img" />
        <span className="profile-simple__date profile-simple__date--birth">
          {transfromDate(birthDate)}
        </span>
        <span className="profile-simple__date profile-simple__date--death">
          {transfromDate(deathDate)}
        </span>
      </div>
      <h1 className="title profile__name profile-simple__name">{name}</h1>
      <p className="profile__description profile-simple__description">
        {description}
      </p>
      <div className="image-data__container--simple">
        {otherPhotos.map((img) => (
          <Image
            key={img.src}
            img={img}
            className={"image-data__item"}
          />
        ))}
      </div>
      {otherFiles.length && (
        <div className="video-data__container">
          {otherFiles.map((img) => (
            <Video video={img} key={img.src} />
          ))}
        </div>
      )}
      {descriptionAdditional && (
        <p className="profile__description profile-simple__description">
          {descriptionAdditional}
        </p>
      )}
    </main>
  );
};

export default ProfileSimple;
