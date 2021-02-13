import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { dispatch } from "store";
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
  const { template: activeTemplate } = useSelector((state) => state.profile);

  return (
    <div className="select-profile">
      {profileTemplates.map((template) => (
        <img
          onClick={() =>
            dispatch.profile.setProfile({ template: template.type })
          }
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
  );
};

export default SelectProfile;
