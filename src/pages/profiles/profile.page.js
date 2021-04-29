import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { dispatch } from "store";
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
  const { getAccessTokenSilently } = useAuth0();
  const {
    profiles: { chosenProfile },
    loading,
  } = useSelector((state) => state);

  useEffect(() => {
    async function getProfileData() {
      const token = await getAccessTokenSilently();
      dispatch.profiles.getProfile({ id, token });
    }

    getProfileData();
  }, []);

  if (!chosenProfile || loading.global) return <Spinner />;

  return <ProfileArticle profileData={chosenProfile} />

  // switch (chosenProfile.template) {
  //   case PROFILE_TEMPLATE_TYPES.SIMPLE:
  //     return <ProfileSimple profileData={chosenProfile} />;
  //   case PROFILE_TEMPLATE_TYPES.BOOK:
  //     return <ProfileBook profileData={chosenProfile} />;
  //   case PROFILE_TEMPLATE_TYPES.ARTICLE:
  //     return <ProfileArticle profileData={chosenProfile} />;
  //   default:
  //     return <ProfileSimple profileData={chosenProfile} />;
  // }
};

export default ProfilePage;
