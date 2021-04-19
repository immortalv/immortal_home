import React, { useEffect } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import routesConstants from "constants/routes.constants";
import Spinner from "components/spinner/spinner.component";
import { Button } from "components/common";
import ProfileItem from "components/cabinet";

import coverImg from "./cover.jpg";

import "./style.scss";
import { dispatch } from "store";

const CabinetPage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const {
    loading: { global: loading },
    profiles: { data: profiles },
  } = useSelector((state) => state);

  useEffect(() => {
    async function getUserProfiles() {
      const token = await getAccessTokenSilently();
      await dispatch.profiles.getProfiles(token);
    }

    getUserProfiles();
  }, []);

  if (loading && !profiles?.length)
    return <Spinner text="Завантажуємо профілі..." />;

  // if (!profiles?.length) return <h1>У вас ще не має профілів</h1>;

  return (
    <main className="cabinet">
      {/* <img src={coverImg} alt="profile cover" className="cabinet__cover-img" /> */}
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
      <div
        className={clsx(
          "cabinet__container",
          !profiles?.length && "cabinet__container--empty"
        )}
      >
        <div className="cabinet__profile-list">
          {!profiles?.length ? (
            <h1 className="cabinet__no-profiles">У вас ще не має профілів</h1>
          ) : (
            profiles.map((profile) => (
              <ProfileItem key={profile.name} profile={profile} />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default withAuthenticationRequired(CabinetPage, {
  onRedirecting: () => <Spinner />,
});
