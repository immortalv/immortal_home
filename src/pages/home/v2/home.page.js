import React from "react";
import {
  block_one_img,
  block_two_img,
  block_three_img,
  block_five_img,
} from "./assets";
import { Button } from "components/common";
// import { PeopleGroupIcon, PhoneIcon, ScriptIcon, TouchIcon } from "icons";

import "./style.scss";
import ServiceFeatures from "./service-features.component";
import ServiceTemplates from "./service-templates.component";

const HomePage = () => {
  return (
    <main className="home-page">
      <section className="home-page__block home-page__block--white home-page__block-one">
        <div className="home-page__block-text-container">
          <h1 className="home-page__block-title home-page__block-one-title">
            Сервіс пам’яті
          </h1>
          <p className="home-page__block-subtitle">
            Оживіть спогади вашої родини, досліджуючи життя тих, хто був до вас.
          </p>
          <Button type="secondary" className="home-page__block-btn">
            Залишити спогад
          </Button>
        </div>
        <div className="home-page__block-media-container">
          <img
            src={block_one_img}
            className="home-page__block-img home-page__block-one-img"
            alt="home page image"
          />
        </div>
      </section>
      <section className="home-page__block home-page__block--black home-page__block-two">
        <div className="home-page__block-media-container">
          <img
            src={block_two_img}
            className="home-page__block-img home-page__block-two-img"
            alt="home page image"
          />
        </div>
        <div className="home-page__block-text-container home-page__block-two-text-container">
          <h2 className="home-page__block-title home-page__block-two-title">
            «Людина живе доти, поки живе пам’ять про неї»
          </h2>
        </div>
      </section>
      <section className="home-page__block home-page__block--white home-page__block-three">
        <div className="home-page__block-text-container home-page__block-three-text-container">
          <h4 className="home-page__block-title home-page__block-three-title">
            Як це працює?
          </h4>
          <p className="home-page__block-text">
            1. Користувачі зберігають пам’ять про рідних на веб-сторінці
            <br />
            2. Створюється унікальний QR –код котрий веде на створену сторінку{" "}
            <br />
            3. Код розміщується на унікальній таблиці або вибивається на
            пам’ятнику <br />
          </p>
        </div>
        <div className="home-page__block-media-container home-page__block-three-media-container">
          <img
            src={block_three_img}
            className="home-page__block-img home-page__block-three-img"
            alt="home page image"
          />
        </div>
      </section>
      <section className="home-page__block home-page__block-four">
        <div className="home-page__block-text-container home-page__block-two-text-container">
          <h4 className="home-page__block-title home-page__block-three-title">
            Сторінка містить у собі
          </h4>
          <ServiceFeatures />
        </div>
      </section>
      <section className="home-page__block home-page__block--black home-page__block-two">
        <div className="home-page__block-text-container home-page__block-two-text-container">
          <h4 className="home-page__block-title home-page__block-five-title">
            Вдячність дітей виявляється у збереженні пам&apos;яті про батьків
          </h4>
          <Button className="home-page__block-btn">Залишити спогад</Button>
          <img
            src={block_five_img}
            className="home-page__block-img home-page__block-five-img"
            alt="home page image"
          />
        </div>
      </section>
      <section className="home-page__block home-page__block-six">
        <h4 className="home-page__block-title home-page__block-five-title">
          Варіанти оформлення пам’ятної сторінки:
        </h4>
        <ServiceTemplates />
      </section>
    </main>
  );
};

export default HomePage;
