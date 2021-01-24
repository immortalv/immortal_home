import React from "react";

import "./style.scss";

const ProfileArticle = ({ profileData }) => {
  const {
    fullName,
    birthDate,
    deathDate,
    profileImg,
    imageData,
    videoData,
    description,
  } = profileData;

  return (
    <main className="profile profile-article">
      <div className="profile-article__top-container">
        <div className="profile-article__data-container">
          <img
            src={profileImg}
            alt=""
            className="profile-article__avatar-img"
          />
          <span className="profile-article__date">
            {birthDate} &#8212; {deathDate}
          </span>
        </div>
        <div className="profile-article__data-container">
          <h1 className="title profile__name profile-article__name">
            {fullName}
          </h1>
          <p className="text profile__description profile-article__description">
            {description}
          </p>
          <div className="quoute-block  quoute-block--inverted">
        <h2 className="quoute__title">
          «Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
          scelerisque at venenatis lorem in amet.»
        </h2>
      </div>
        </div>
      </div>
      <div className="image-data__container image-data__containe--rounded">
        {imageData.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={`${fullName} image data`}
            className="image-data__item"
          />
        ))}
      </div>
      <div className="video-data__container">
        {videoData.map((img) => (
          <img key={img.src} src={img.src} alt={`${fullName} image data`} />
        ))}
      </div>
    </main>
  );
};

export default ProfileArticle;
