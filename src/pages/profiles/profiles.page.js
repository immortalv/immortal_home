import React from "react";
import ProfilesCard from "components/profiles/profiles-card";
import SearchContainer from "components/common/search-input";
import { getProfileImg } from "utils/image.utils";
import profilesData from "./profile.data";

import "./style.scss";
import { Link } from "react-router-dom";
import { PROFILE } from "constants/routes.constants";

const ProfilesPage = () => {
  return (
    <main className="profiles">
      <section className="home__top-block">
        <div className="quoute-block">
          <h2 className="quoute__title">
            Людина живе доти, поки <br /> живе пам&apos;ять про неї
          </h2>
          <p className="quoute__text">
            Оживіть спогади вашої родини, досліджуючи життя тих, хто був до вас.
          </p>
        </div>
        <SearchContainer />
        <div className="profiles__list">
          <h3 className="title">Публічні профілі</h3>
          {profilesData.map((profile, index) => (
            <Link
              key={profile.fullName}
              to={`${PROFILE}/${profile.id}`}
            >
              <ProfilesCard
                fullName={profile.fullName}
                description={profile.description}
                imgSrc={getProfileImg(`profile-image-${index + 1}`)}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProfilesPage;
