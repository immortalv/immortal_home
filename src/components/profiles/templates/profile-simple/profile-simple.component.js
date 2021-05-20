import React from "react";

import forestImg from "assets/profile-simple-background.jpg";
import { getProfileDataFromBucket } from "utils/image.utils";
import { transfromDate } from "utils/profile.utils";

import Video from 'components/video';
import Image from "components/common/image";

import "./style.scss";

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
        <img
          src={getProfileDataFromBucket(mainPhoto.key)}
          alt="Main photo"
          className="profile-simple__avatar-img"
        />
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
            key={img}
            img={getProfileDataFromBucket(img.key)}
            alt="profile image"
            className={"image-data__item image-data__item--simple"}
          />
        ))}
      </div>
      {otherFiles.length && (
        <div className="video-data__container video-data__container--simple">
          {otherFiles.map((file) => (
            <Video url={file} key={file} className={'video-img__wrapper--simple'} />
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
