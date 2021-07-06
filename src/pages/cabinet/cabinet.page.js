import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useUserProfiles } from "queries/profiles/use-profiles";
import { dispatch } from "store";
import routesConstants from "constants/routes.constants";
import Spinner from "components/spinner/spinner.component";
import { Button } from "components/common";
import ProfileItem from "components/cabinet";
import DeleteAccountModal from "./delete-account-modal.component";

import "./style.scss";

const CabinetPage = () => {
  const { isLoading, data } = useUserProfiles();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { user } = useAuth0();

  useEffect(() => {
    dispatch.profile.clearState();
  }, []);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  if (isLoading && !data?.length)
    return <Spinner text="Завантажуємо профілі..." />;
 
  if (!data?.length)
    return (
      <div className="cabinet__no-profiles">
        <h1>У вас ще не має профілів</h1>
        <Link className="cabinet__link" to={routesConstants.ADD_PROFILE}>
          <Button type="secondary" className="cabinet__btn cabinet__btn-empty">
            Додати профіль
          </Button>
        </Link>
      </div>
    );

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
          !data?.length && "cabinet__container--empty"
        )}
      >
        <div className="cabinet__profile-list">
          {!data?.length ? (
            <h1 className="cabinet__no-profiles">У вас ще не має профілів</h1>
          ) : (
            data.map((profile) => (
              <ProfileItem key={profile.id} profile={profile} />
            ))
          )}
        </div>
      </div>
      <DeleteAccountModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModal}
        profiles={data}
      />
    </main>
  );
};

export default withAuthenticationRequired(CabinetPage, {
  onRedirecting: () => <Spinner />,
});
