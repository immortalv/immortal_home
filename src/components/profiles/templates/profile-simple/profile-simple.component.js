import React from "react";
import forestImg from "assets/profile-simple-background.jpg";

import "./style.scss";

const getImagefromBucket = (name) =>
  `https://immortal-profile-content.s3.eu-central-1.amazonaws.com/${name}`;

const ProfileSimple = ({ profileData }) => {
  const {
    name,
    birthDate,
    deathDate,
    mainPhoto,
    media,
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
          src={getImagefromBucket(mainPhoto)}
          alt=""
          className="profile-simple__avatar-img"
        />
        <span className="profile-simple__date profile-simple__date--birth">
          {birthDate}
        </span>
        <span className="profile-simple__date profile-simple__date--death">
          {deathDate}
        </span>
      </div>
      <h1 className="title profile__name profile-simple__name">{name}</h1>
      <p className="profile__description profile-simple__description">
        {description}
      </p>
      <div className="image-data__container">
        {media.map((img) => (
          <img
            key={img}
            src={getImagefromBucket(img)}
            alt="Profile Image"
            className="image-data__item"
          />
        ))}
      </div>
      {media.length && (
        <div className="video-data__container">
          {media.map((img) => (
            <img
              key={img}
              src={getImagefromBucket(img)}
              alt="Profile Media Data"
              className="video-data__img"
            />
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
