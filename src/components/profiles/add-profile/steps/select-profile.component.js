import React from "react";
import { PROFILE_TEMPLATE_TYPES } from "constants/profile.constants";
import { getProfileImg } from "utils/image.utils";

import "./style.scss";

const imgNamePattern = "profile-template";

const profileTemplates = [
  {
    type: PROFILE_TEMPLATE_TYPES.SIMPLE,
    img: getProfileImg(`${imgNamePattern}-${PROFILE_TEMPLATE_TYPES.SIMPLE}`),
  },
  {
    type: PROFILE_TEMPLATE_TYPES.BOOK,
    img: getProfileImg(`${imgNamePattern}-${PROFILE_TEMPLATE_TYPES.BOOK}`),
  },
  {
    type: PROFILE_TEMPLATE_TYPES.ARTICLE,
    img: getProfileImg(`${imgNamePattern}-${PROFILE_TEMPLATE_TYPES.ARTICLE}`),
  },
];

const SelectProfile = () => {
  return (
    <div className="select-profile">
      {profileTemplates.map((template) => (
        <img
          key={template.type}
          src={template.img}
          alt={`profile template ${template.type}`}
          className="select-profile__item"
        />
      ))}
    </div>
  );
};

export default SelectProfile;
