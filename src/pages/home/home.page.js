import IconBlock from "components/common/icon-block";
import { PeopleGroupIcon, PhoneIcon, ScriptIcon, TouchIcon } from "icons";
import React from "react";
import { Button } from "semantic-ui-react";

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
        <Button className="home__btn btn">Залишити пам’ятку</Button>
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
        <Button className="home__btn btn">Залишити пам’ятку</Button>
      </section>
    </main>
  );
};

export default HomePage;
