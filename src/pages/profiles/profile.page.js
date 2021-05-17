import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PROFILE_TEMPLATE_TYPES } from "constants/profile.constants";
import {
  ProfileSimple,
  ProfileArticle,
  ProfileBook,
} from "components/profiles/templates";
import Spinner from "components/spinner/spinner.component";
import { useGetProfile } from "./hooks";

import "./style.scss";

const ProfilePage = () => {
  const { id } = useParams();
  const { profile } = useSelector((state) => state);

  useGetProfile(id);


  switch (profile?.template) {
    case PROFILE_TEMPLATE_TYPES.SIMPLE:
      return <ProfileSimple profileData={profile} />;
    case PROFILE_TEMPLATE_TYPES.BOOK:
      return <ProfileBook profileData={profile} />;
    case PROFILE_TEMPLATE_TYPES.ARTICLE:
      return <ProfileArticle profileData={profile} />;
    default:
      return <Spinner />;
  }
};

export default ProfilePage;
