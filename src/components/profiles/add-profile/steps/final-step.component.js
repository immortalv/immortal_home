import React from "react";
import { useHistory } from "react-router";
import routesConstants from "constants/routes.constants";
import { Button } from "components/common";

import "./style.scss";

const FinalStep = () => {
  const history = useHistory();

  const openProfile = () => {
    history.push(routesConstants.PROFILE, "id");
  };

  return (
    <div className="add-profile--final">
      <h1 className="title add-profile__title">Усе зроблено!</h1>
      <Button
        onClick={openProfile}
        type="secondary"
        className="add-profile__btn"
      >
        Переглянути Сторінку
      </Button>
      <Button
        onClick={() => history.push(routesConstants.CABINET)}
        type="secondary"
        className="add-profile__btn"
      >
        Перейти в кабінет
      </Button>
    </div>
  );
};

export default FinalStep;
