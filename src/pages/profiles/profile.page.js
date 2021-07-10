import React from "react";
import { useParams } from "react-router-dom";
import { useProfile } from "queries/profiles/use-profiles";
import { PROFILE_TEMPLATE_TYPES } from "constants/profile.constants";
import {
  ProfileSimple,
  ProfileArticle,
  ProfileBook,
} from "components/profiles/templates";
import Spinner from "components/spinner/spinner.component";

import "./style.scss";

const ProfilePage = () => {
  const { id } = useParams();
  const { data: profile, isLoading, error } = useProfile(id);

  if (isLoading) return <Spinner />;
  if (error) return <h1>Щось пішло не так...</h1>

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
