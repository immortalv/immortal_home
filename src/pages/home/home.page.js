import React from "react";
import { IconBlock, Button } from "components/common";
import { PeopleGroupIcon, PhoneIcon, ScriptIcon, TouchIcon } from "icons";

import firstTemplate from "./assets/FirstTemplate.jpg";
import secondTemplate from "./assets/SecondTemplate.jpg";
import thirdTemplate from "./assets/ThirdTemplate.jpg";
import "./style.scss";


const HomePage = () => {
  return (
    <main className="home">
      <section className="home__top-block">
        <div className="quoute-block">
          <h2 className="quoute__title">
            Людина живе доти, поки <br /> живе пам&apos;ять про неї
          </h2>
          <p className="quoute__text">
            Оживіть спогади вашої родини, досліджуючи життя тих, хто був до вас.
          </p>
        </div>
        <Button className="home__btn">Залишити пам’ятку</Button>
        <div className="block-group">
          <IconBlock
            icon={<ScriptIcon />}
            text="Ви зберігаєте пам'ять за веб-сторінці"
          />
          <IconBlock
            icon={<PhoneIcon />}
            text="Створюється унікальний QR –код котрий веде на створену сторінку"
          />
          <IconBlock
            icon={<TouchIcon />}
            text="Код розміщується на унікальній таблиці або вибивається на пам’ятнику"
          />
        </div>
        <IconBlock
          wide
          icon={<PeopleGroupIcon />}
          title="Пам'ять про людину живе:"
          text="її зовнішність у її фотографіях та 3D моделях, її голос у відео та аудіо записах"
        />
        <div className="quoute-block  quoute-block--inverted">
          <h2 className="quoute__title">
            Вдячність дітей виявляється у <br /> збереженні пам&apos;яті про
            батьків
          </h2>
        </div>
        <Button className="home__btn">Залишити пам’ятку</Button>
      </section>
      <section className="home__options">
        <h4 className="title">Варіанти оформлення пам’ятної сторінки:</h4>
        <div className="home__template">
          <div className="home__template-block">
            <img src={firstTemplate} className="home__template-img" />
          </div>
          <div className="home__template-block">
            <img src={secondTemplate} className="home__template-img" />
          </div>
          <div className="home__template-block">
            <img src={thirdTemplate} className="home__template-img" />
          </div>

        </div>
      </section>
      <section className="home__top-block home__price">
        <div className="quoute-block quoute-block--price">
          <h2 className="quoute__title">
            Ціна: <br /> 300 гривень
          </h2>
          <Button type="secondary" className="home__btn">
            Залишити пам’ятку
          </Button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
