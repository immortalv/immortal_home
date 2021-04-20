import React from "react";
import { block_one_img, block_two_img, block_three_img } from "./assets";
import { FeatureIconBlock } from "components/common";
import { PhotoIcon, VideoIcon, AudioIcon, TextAlignIcon } from "icons";

import "./style.scss";

const featuresData = [
  {
    icon: <PhotoIcon />,
    text: "Фото",
  },
  {
    icon: <VideoIcon />,
    text: "Відео",
  },
  {
    icon: <TextAlignIcon />,
    text: "Текст",
  },
  {
    icon: <AudioIcon />,
    text: "Аудіо",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="home-page__service-features">
      {featuresData.map((feature) => (
        <FeatureIconBlock
          className="home-page__service-features__item"
          key={feature.text}
          text={feature.text}
          icon={feature.icon}
        />
      ))}
    </section>
  );
};

export default ServiceFeatures;
