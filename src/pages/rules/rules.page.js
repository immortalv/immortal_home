import React from "react";

import { rulesConstants } from "constants/rules.constants";

import "./style.scss";

const RulesPage = () => {
  return (
    <div className='rules'>
      <h1 className='rules__title'>Правила користування сайтом</h1>
      <div>
        {rulesConstants.map((item, index) =>
        (
          <div key={index} className="rules__block">
            <h3 className="rules__description">{index + 1}.{item.description}</h3>
            <p className="rules__information">{item.information}</p>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default RulesPage;