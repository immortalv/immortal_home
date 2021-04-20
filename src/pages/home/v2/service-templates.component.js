import React from "react";

import firstTemplate from "../assets/first-template.jpg";
import secondTemplate from "../assets/second-template.jpg";
import thirdTemplate from "../assets/third-template.jpg";

const ServiceTemplates = () => {
  return (
    <div className="home-page__service-templates">
      <img src={firstTemplate} className="home-page__service-templates__img" />
      <img src={secondTemplate} className="home-page__service-templates__img" />
      <img src={thirdTemplate} className="home-page__service-templates__img" />
    </div>
  );
};

export default ServiceTemplates;
