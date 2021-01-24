import React from "react";
import { Button } from "components/common";

import "./style.scss";

const SearchContainer = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Введіть запит"
        className="search-container__input"
      />
      <Button type="secondary" className="search-container__btn">
        Знайти
      </Button>
    </div>
  );
};

export default SearchContainer;
