import React from "react";

import Video from "components/video";
import Image from "components/common/image";

import { transformDate } from "utils/profile.utils";
import { getProfileDataFromBucket } from "utils/image.utils";
import ProfileDefaultImage from "assets/profile-default.jpg";

import "./style.scss";

const ProfileArticle = ({ profileData }) => {
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

  return (
    <main className="profile profile-article">
      <div className="profile-article__top-container">
        <div className="profile-article__data-container">
          <div className="profile-article__img-block">
            <img
              src={
                mainPhoto?.key
                  ? getProfileDataFromBucket(mainPhoto?.key)
                  : ProfileDefaultImage
              }
              alt="Main profile photo"
              className="profile-article__avatar-img"
            />
            <span className="profile-article__date">
              {transformDate(birthDate)} &#8212; {transformDate(deathDate)}
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
                <Image
                  key={img.key}
                  img={getProfileDataFromBucket(img.key)}
                  alt="profile image"
                  className={"image-data__item image-data__item--article"}
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
      {!!otherFiles?.length && (
        <div className="video-data__container--article">
          {otherFiles.map((file) => (
            <Video
              url={getProfileDataFromBucket(file.key)}
              key={file.key}
              className={"video-img__wrapper--article"}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default ProfileArticle;
