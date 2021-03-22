import React from "react";
import forestImg from "assets/profile-simple-background.jpg";

import "./style.scss";

const ProfileSimple = ({ profileData }) => {
  const {
    fullName,
    birthDate,
    deathDate,
    profileImg,
    imageData,
    videoData,
    description,
    additionalDescription,
  } = profileData;

  return (
    <main className="profile profile-simple">
      <div className="profile-simple__top-container">
        <img
          src={forestImg}
          alt="background"
          className="profile-simple__background-img"
        />
        <img src={profileImg} alt="" className="profile-simple__avatar-img" />
        <span className="profile-simple__date profile-simple__date--birth">
          {birthDate}
        </span>
        <span className="profile-simple__date profile-simple__date--death">
          {deathDate}
        </span>
      </div>
      <h1 className="title profile__name profile-simple__name">{fullName}</h1>
      <p className="profile__description profile-simple__description">{description}</p>
      <div className="image-data__container">
        {imageData.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={`${fullName} image data`}
            className="image-data__item"
          />
        ))}
      </div>
      {videoData.length && (
        <div className="video-data__container">
        {videoData.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={`${fullName} image data`}
            className="video-data__img"
          />
        ))}
      </div>
      )}
      {additionalDescription && (
        <p className="profile__description profile-simple__description">{additionalDescription}</p>
      ) }
    </main>
  );
};

export default ProfileSimple;
