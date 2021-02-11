import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/common";

import routesConstants from "constants/routes.constants";

import "./style.scss";

const CabinetPage = () => {
  return (
    <main className="cabinet">
      <Link to={routesConstants.ADD_PROFILE}>
        <Button type="secondary" className="cabinet__btn">
          Додати профіль
        </Button>
      </Link>
    </main>
  );
};

export default CabinetPage;
