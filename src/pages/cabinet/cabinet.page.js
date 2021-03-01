import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "components/common";

import coverImg from "./cover.jpg";

import routesConstants from "constants/routes.constants";

import "./style.scss";
import { ProfileAccountIcon } from "icons";

const profiles = [];

const CabinetPage = () => {
  const { name } = useSelector((state) => state.user);
  return (
    <main className="cabinet">
      <div className="cabinet__cover">
        <img
          src={coverImg}
          alt="profile cover"
          className="cabinet__cover-img"
        />
      </div>

      <div className="cabinet__container">
        <div className="cabinet__account">
          <div className="cabinet__img-container">
            <ProfileAccountIcon className="cabinet__account-img" />
          </div>
          <div className="cabinet__account-info">
            <span className="cabinet__account-name">{name}</span>
          </div>
          <Link className="cabinet__link" to={routesConstants.ADD_PROFILE}>
            <Button type="secondary" className="cabinet__btn">
              Додати профіль
            </Button>
          </Link>
        </div>

        <div className="cabinet__profile-list">
          {profiles.map((profile) => {
            <div>{profile}</div>;
          })}
        </div>
      </div>
    </main>
  );
};

export default CabinetPage;
