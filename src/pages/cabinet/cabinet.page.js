import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { dispatch } from "store";
import routesConstants from "constants/routes.constants";
import Spinner from "components/spinner/spinner.component";
import { Button } from "components/common";
import ProfileItem from "components/cabinet";
import DeleteAccountModal from "./delete-account-modal.component";

import "./style.scss";

const CabinetPage = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const { user, getAccessTokenSilently } = useAuth0();
  const {
    loading: { global: loading },
  } = useSelector((state) => state);

  useEffect(() => {
    async function getUserProfiles() {
      const token = await getAccessTokenSilently();
      const data = await dispatch.profiles.getProfiles(token);
      setProfiles(data);
      dispatch.profile.clearState();
    }

    getUserProfiles();
  }, []);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModal = (filtered) => {
    setIsDeleteModalOpen(false);
    if (filtered) setProfiles(filtered);
  };

  if (loading && !profiles?.length)
    return <Spinner text="Завантажуємо профілі..." />;

  if (!profiles?.length) return <h1>У вас ще не має профілів</h1>;
  
  return (
    <main className="cabinet">
      {/* <img src={coverImg} alt="profile cover" className="cabinet__cover-img" /> */}
      <div className="cabinet__account">
        {/* <div className="cabinet__img-container">
            <ProfileAccountIcon className="cabinet__account-img" />
          </div> */}
        <h1 className="cabinet__account-name title">{user.name}</h1>
        <div className="cabinet__btn-container">
          <Link className="cabinet__link" to={routesConstants.ADD_PROFILE}>
            <Button type="secondary" className="cabinet__btn">
              Додати профіль
            </Button>
          </Link>
          <Button
            className="cabinet__btn"
            type="outline"
            onClick={openDeleteModal}
          >
            Видалити профіль
          </Button>
        </div>
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
              <ProfileItem key={profile.id} profile={profile} />
            ))
          )}
        </div>
      </div>
      <DeleteAccountModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModal}
        profiles={profiles}
      />
    </main>
  );
};

export default withAuthenticationRequired(CabinetPage, {
  onRedirecting: () => <Spinner />,
});
