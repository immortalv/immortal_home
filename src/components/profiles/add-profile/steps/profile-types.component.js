import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { dispatch } from "store";
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

const ProfileTypes = ({ label }) => {
  const { template: activeTemplate } = useSelector((state) => state.profile);

  const setActiveTemplate = (type) => {
    dispatch.profile.setProfile({ template: type });
  };

  return (
    <div>
      {label && <span className="add-file__label">{label}</span>}
      <div className="add-profile__content select-profile">
        {profileTemplates.map((template) => (
          <img
            onClick={() => setActiveTemplate(template.type)}
            key={template.type}
            src={template.img}
            alt={`profile template ${template.type}`}
            className={clsx(
              "select-profile__item",
              template.type === activeTemplate && "select-profile__item--active"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileTypes;
