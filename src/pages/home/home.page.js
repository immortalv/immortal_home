import React from "react";
import { Link } from "react-router-dom";
import routesConstants from "constants/routes.constants";
import { IconBlock, Button } from "components/common";
import { PeopleGroupIcon, PhoneIcon, ScriptIcon, TouchIcon } from "icons";
import ModalImage from "react-modal-image";

import firstTemplate from "./assets/first-template.jpg";
import firstTemplateBig from "./assets/first-template-big.jpg";
import secondTemplate from "./assets/second-template.jpg";
import secondTemplateBig from "./assets/second-template-big.jpg";
import thirdTemplate from "./assets/third-template.jpg";
import thirdTemplateBig from "./assets/third-template-big.jpg";
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
        <Link to={routesConstants.ADD_PROFILE}>
          <Button className="home__btn">Залишити пам’ятку</Button>
        </Link>
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
        <Link to={routesConstants.ADD_PROFILE}>
          <Button className="home__btn">Залишити пам’ятку</Button>
        </Link>
      </section>
      <section className="home__options">
        <h4 className="title">Варіанти оформлення пам’ятної сторінки:</h4>
        <div className="home__template">
          <div className="home__template-block">
            <ModalImage
              small={firstTemplate}
              large={firstTemplateBig}
              className={"home__template-img"}
              hideDownload={true}
              hideZoom={true}
            />
          </div>
          <div className="home__template-block">
            <ModalImage
              small={secondTemplate}
              large={secondTemplateBig}
              className={"home__template-img"}
              hideDownload={true}
              hideZoom={true}
            />
          </div>
          <div className="home__template-block">
            <ModalImage
              small={thirdTemplate}
              large={thirdTemplateBig}
              className={"home__template-img"}
              hideDownload={true}
              hideZoom={true}
            />
          </div>
        </div>
      </section>
      <section className="home__top-block home__price">
        <Link to={routesConstants.ADD_PROFILE}>
          <Button type="secondary" className="home__btn">
            Залишити пам’ятку
          </Button>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
