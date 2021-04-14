import React from "react";
import forestImg from "assets/profile-simple-background.jpg";

import "./style.scss";

const getImagefromBucket = (name) =>
  `https://immortal-profile-content.s3.eu-central-1.amazonaws.com/${name}`;

const transfromData = (date) => {
  const dateObject = new Date(date);
  let day = dateObject.getDate();
  let month = dateObject.getMonth();
  const year = dateObject.getFullYear();

  if (String(month).length === 1) month = `0${month}`;
  if (String(day).length === 1) day = `0${day}`;

  console.log("month", month.length);

  return `${day}.${month}.${year}`;
};

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
          {transfromData(birthDate)}
        </span>
        <span className="profile-simple__date profile-simple__date--death">
          {transfromData(deathDate)}
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
              className="video-data__item"
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
