import React, { useEffect, useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { getProfiles } from "services/api/profile.service";
// import { getProfileImg } from "utils/image.utils";
import routesConstants from "constants/routes.constants";
import Spinner from "components/spinner/spinner.component";
import { Button } from "components/common";
import ProfileItem from "components/cabinet";

import coverImg from "./cover.jpg";

import "./style.scss";

const CabinetPage = () => {
  // const { loading, profiles } = useSelector((state) => state);
  const [profiles, setProfile] = useState([]);
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function getUserProfiles() {
      const token = await getAccessTokenSilently();
      const profilesData = await getProfiles(token);

      setProfile(profilesData);
    }

    getUserProfiles();
  }, []);

  const renderProfiles = (data) =>
    data.length ? (
      profiles.map((profile) => (
        <ProfileItem key={profile.name} profile={profile} />
      ))
    ) : (
      <h1>У вас ще не має профілів</h1>
    );

  return (
    <main className="cabinet">
      <img src={coverImg} alt="profile cover" className="cabinet__cover-img" />
      <div className="cabinet__account">
        {/* <div className="cabinet__img-container">
            <ProfileAccountIcon className="cabinet__account-img" />
          </div> */}
        <h1 className="cabinet__account-name title">{user.name}</h1>
        <Link className="cabinet__link" to={routesConstants.ADD_PROFILE}>
          <Button type="secondary" className="cabinet__btn">
            Додати профіль
          </Button>
        </Link>
      </div>
      <div className="cabinet__container">
        <div className="cabinet__profile-list">{renderProfiles(profiles)}</div>
      </div>
    </main>
  );
};

// export default CabinetPage;

export default withAuthenticationRequired(CabinetPage, {
  onRedirecting: () => <Spinner />,
});
