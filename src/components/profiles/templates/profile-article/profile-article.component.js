import React from "react";
import { transfromDate } from "utils/profile.utils";

import "./style.scss";

const ProfileArticle = ({ profileData }) => {
  const {
    name,
    birthDate,
    deathDate,
    mainPhoto,
    otherPhotos,
    description,
    descriptionAdditional,
  } = profileData;

  return (
    <main className="profile profile-article">
      <div className="profile-article__top-container">
        <div className="profile-article__data-container">
          <div className="profile-article__img-block">
            <img
              src={mainPhoto}
              alt=""
              className="profile-article__avatar-img"
            />
            <span className="profile-article__date">
              {transfromDate(birthDate)} &#8212; {transfromDate(deathDate)}
            </span>
          </div>
          <div className="profile-article__description-block">
            <h1 className="title profile__name profile-article__name">
              {name}
            </h1>
            <p className="profile__description profile-article__description">
              {description}
            </p>
          </div>
        </div>
        <div className="profile-article__data-container">
          <div className="quoute-block  quoute-block--inverted">
            <h2 className="quoute__title">
              «Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
              scelerisque at venenatis lorem in amet.»
            </h2>
          </div>
          {otherPhotos && (
            <div className="image-data__container image-date__container--article image-data__container--rounded">
              {otherPhotos.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={`image data`}
                  className="image-data__item"
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {descriptionAdditional && (
        <p className="profile__description profile-article__additionalDescription">
          {descriptionAdditional}
        </p>
      )}
      {/* {videoData && (
        <div className="video-data__container--article">
          {videoData.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={`${fullName} image data`}
              className="video-data__container--img"
            />
          ))}
        </div>
      )} */}
    </main>
  );
};

export default ProfileArticle;
