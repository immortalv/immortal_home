import React from "react";
import { transfromDate } from "utils/profile.utils";
import { getProfileDataFromBucket } from "utils/image.utils";
import Image from "../../../common/image/image";

import "./style.scss";

const ProfileBook = ({ profileData }) => {
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
    <main className="profile profile-book">
      <section className="profile-book__page-container">
        <div className="profile-book__page profile-book__page--dark profile-book__page-main">
          <h1 className="title profile__name profile-book__name">{name}</h1>
          <img
            src={mainPhoto}
            alt="Main profile photo"
            className="profile-book__avatar-img"
          />
          <span className="profile-book__date">
            {transfromDate(birthDate)} &#8212; {transfromDate(deathDate)}
          </span>
          <div className="quoute-block  quoute-block--inverted">
            <h2 className="quoute__title">
              «Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
              scelerisque at venenatis lorem in amet.»
            </h2>
          </div>
        </div>
        <div className="profile-book__page profile-book__page-text">
          <p className="profile__description profile-book__description">
            {description}
          </p>
        </div>
      </section>
      <section className="profile-book__page-container">
        {descriptionAdditional && (
          <div className="profile-book__page profile-book__page-text">
            <p className="profile__description profile-book__description">
              {descriptionAdditional}
            </p>
          </div>
        )}
        <div className="profile-book__page">
          <div className="image-data__container image-data__containe--rounded">
            {otherPhotos.map((img) => (
              <Image
                key={img}
                img={img}
                alt="profile image"
                className={"image-data__item--book"}
              />
            ))}
          </div>

          <div className="video-data__container">
            {otherFiles.map((img) => (
              <img
                key={img}
                src={img}
                alt={`Video data`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfileBook;
