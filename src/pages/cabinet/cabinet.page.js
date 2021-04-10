import React, { useEffect, useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getProfiles } from "services/api/profile.service";
// import { getProfileImg } from "utils/image.utils";
import routesConstants from "constants/routes.constants";
import Spinner from "components/spinner/spinner.component";
import { Button } from "components/common";
import ProfileItem from "components/cabinet";
import { ProfileAccountIcon } from "icons";

import coverImg from "./cover.jpg";

import "./style.scss";

// const profiles = [
//   {
//     name: "Василевська Василина",
//     description:
//       "Тисячі любителів футболу та спорту мають причини бути вдячними моїй сестрі Василині, яка поме...",
//     type: "Публічний",
//     avatar: getProfileImg("avatar-image-1", "jpg"),
//     qrCode: getProfileImg("avatar-image-1", "jpg"),
//   },
//   {
//     name: "Василевська Василина",
//     description:
//       "Тисячі любителів футболу та спорту мають причини бути вдячними моїй сестрі Василині, яка поме...",
//     type: "Публічний",
//     avatar: getProfileImg("avatar-image-1", "jpg"),
//     qrCode: getProfileImg("avatar-image-1", "jpg"),
//   },
// ];

const CabinetPage = () => {
  const [profiles, setProfile] = useState([]);
  const { name } = useSelector((state) => state.user);

  useEffect(() => {
    async function getUserProfiles() {
      const profilesData = await getProfiles();
      setProfile(profilesData);
    }

    getUserProfiles();
  }, []);

  return (
    <main className="cabinet">
      <img src={coverImg} alt="profile cover" className="cabinet__cover-img" />
      <div className="cabinet__account">
        {/* <div className="cabinet__img-container">
            <ProfileAccountIcon className="cabinet__account-img" />
          </div> */}
        <h1 className="cabinet__account-name title">{name}</h1>
        <Link className="cabinet__link" to={routesConstants.ADD_PROFILE}>
          <Button type="secondary" className="cabinet__btn">
            Додати профіль
          </Button>
        </Link>
      </div>
      <div className="cabinet__container">
        <div className="cabinet__profile-list">
          {profiles.map((profile) => (
            <ProfileItem key={profile.name} profile={profile} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default withAuthenticationRequired(CabinetPage, {
  onRedirecting: () => <Spinner />,
});
