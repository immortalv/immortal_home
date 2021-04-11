import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "components/common";
import { PROFILE_TEMPLATE_TYPES } from "constants/profile.constants";

import profileSimple from "../assets/profile-template-simple.png";
import profileBook from "../assets/profile-template-book.png";
import profileArticle from "../assets/profile-template-article.png";

import "./style.scss";

const profileTemplates = [
  {
    type: PROFILE_TEMPLATE_TYPES.SIMPLE,
    img: profileSimple,
  },
  {
    type: PROFILE_TEMPLATE_TYPES.BOOK,
    img: profileBook,
  },
  {
    type: PROFILE_TEMPLATE_TYPES.ARTICLE,
    img: profileArticle,
  },
];

const SelectProfile = ({ onSubmit, profile }) => {
  const [activeTemplate, setActiveTemplate] = useState();

  useEffect(() => {
    setActiveTemplate(profile?.template || "");
  }, []);

  return (
    <>
      <h1 className="title add-profile__title">Додати профіль</h1>
      <div className="add-profile__content">
        <div className="select-profile">
          {profileTemplates.map((template) => (
            <img
              onClick={() => setActiveTemplate(template.type)}
              key={template.type}
              src={template.img}
              alt={`profile template ${template.type}`}
              className={clsx(
                "select-profile__item",
                template.type === activeTemplate &&
                  "select-profile__item--active"
              )}
            />
          ))}
        </div>
      </div>
      <Button
        onClick={() => onSubmit({ template: activeTemplate })}
        type="secondary"
        className="add-profile__btn"
      >
        Реєстрація
      </Button>
    </>
  );
};

export default SelectProfile;
