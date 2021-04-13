import React from "react";
import { useHistory } from "react-router";
import routesConstants, { PROFILE } from "constants/routes.constants";
import { Button } from "components/common";

import "./style.scss";

const ProfileCreated = ({ id, onPageChange }) => {
  const history = useHistory();

  const openProfile = () => {
    onPageChange();
    history.push(`${PROFILE}/${id}`);
  };

  const openCabinet = () => {
    onPageChange();
    history.push(routesConstants.CABINET);
  };

  return (
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
        onClick={openCabinet}
        type="secondary"
        className="profile-created__btn"
      >
        Перейти в кабінет
      </Button>
    </div>
  );
};

export default ProfileCreated;
