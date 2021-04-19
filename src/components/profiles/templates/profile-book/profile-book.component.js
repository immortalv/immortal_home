import React from "react";
import forestImg from "assets/profile-simple-background.jpg";
import Image from "../../../common/image/image"

import "./style.scss";

const mockedDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu et molestie cum lectus. In ornare vulputate enim lectus cursus vulputate id quam sagittis. Posuere nisl semper placerat ut. Lectus scelerisque ullamcorper sollicitudin nullam. In euismod aliquam turpis amet. Sem porttitor integer commodo varius cursus neque. Lectus sed in arcu lectus eu curabitur tempus tempor quisque.

Porttitor risus in nunc elit, vel amet congue lacus, pellentesque. Nec dolor, adipiscing elit ut hendrerit massa, sed et. A netus non scelerisque nibh aliquam eu congue in risus. Purus, id massa odio cras feugiat massa massa. Egestas massa elit risus, condimentum tincidunt viverra fermentum leo, tincidunt. Pellentesque quam faucibus porttitor aliquam lacus pulvinar enim ultrices turpis. Neque sagittis pellentesque et sit massa.

Eget eu, vitae lectus rutrum sed id. Morbi amet amet amet sapien et mi felis. Sit vitae sed enim tortor. Tellus tortor, feugiat volutpat elementum gravida adipiscing non. Vitae at adipiscing posuere suspendisse nibh quis. Blandit egestas vulputate molestie tortor volutpat. Purus tempus eget velit porta aliquam nisl non non. Congue viverra fames tellus pulvinar purus neque amet, mi orci. Tortor vitae dignissim dictum lorem neque sem vitae, porttitor nunc.
Libero iaculis et enim a pulvinar. 

Viverra at integer in quis viverra tellus. Felis at et rhoncus dictumst. Mi egestas phasellus pellentesque venenatis aliquam arcu netus leo vehicula. Augue quis at morbi mus. Odio potenti phasellus amet euismod quam et malesuada. In ipsum sed enim amet gravida et accumsan. Facilisis leo, aliquam, eu mi enim, pharetra nisl. Diam in lectus tellus, duis malesuada suspendisse ullamcorper nam. Dui ut tincidunt odio urna volutpat orci mauris mattis. 

Libero commodo, augue mauris, arcu egestas in odio et. Dui pellentesque vel pretium sem quam. Ornare euismod sed lacus, metus. `;

const ProfileBook = ({ profileData }) => {
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
    <main className="profile profile-book">
      <section className="profile-book__page-container">
        <div className="profile-book__page profile-book__page--dark profile-book__page-main">
          <h1 className="title profile__name profile-book__name">{fullName}</h1>
          <img src={profileImg} alt="" className="profile-book__avatar-img" />
          <span className="profile-book__date">
            {birthDate} &#8212; {deathDate}
          </span>
          <div className="quoute-block  quoute-block--inverted">
            <h2 className="quoute__title">
              «Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet in
              scelerisque at venenatis lorem in amet.»
            </h2>
          </div>
        </div>
        <div className="profile-book__page profile-book__page-text">
          <p className="profile-book__description">
            {mockedDescription}
          </p>
        </div>
      </section>
      <section className="profile-book__page-container">
        <div className="profile-book__page profile-book__page-text">
          <p className="profile-book__description">
            {mockedDescription}
          </p>
        </div>
        <div className="profile-book__page">
          {imageData &&
            <div className="image-data__container--book image-data__container--rounded">
            {imageData.map((img) => (
              <Image
                key={img.src}
                img={img}
                className={"image-data__item--book"}
              />
            ))}
            </div>
          }
          {videoData &&
            <div className="video-data__container--book">
            {videoData.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={`${fullName} image data`}
                className="video-data__container--img"
              />
            ))}
            </div>
          }
        </div>
      </section>
    </main>
  );
};

export default ProfileBook;
