import React from "react";
import { useHistory } from "react-router";
import { HeaderDark } from "components/header";
import routesConstants from "constants/routes.constants";
import { Button } from "components/common";

import "./style.scss";

const ProfileCreated = () => {
  const history = useHistory();

  const openProfile = () => {
    history.push(routesConstants.PROFILE, "id");
  };

  return (
    <>
      <HeaderDark />
      <div className="profile-created">
        <h1 className="title profile-created__title">Усе зроблено!</h1>
        <Button
          onClick={openProfile}
          type="secondary"
          className="profile-created__btn"
        >
          Переглянути Сторінку
        </Button>
        <Button
          onClick={() => history.push(routesConstants.CABINET)}
          type="secondary"
          className="profile-created__btn"
        >
          Перейти в кабінет
        </Button>
      </div>
    </>
  );
};

export default ProfileCreated;
