import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { dispatch } from "store";
import {
  ADD_PROFILE_STEPS_NAME,
  ADD_PROFILE_STEPS,
} from "constants/profile.constants";
import routesConstants from "constants/routes.constants";
import { HeaderDark } from "components/header";
import Spinner from "components/spinner/spinner.component";
import { SelectProfile, MainInfo, AdditionalInfo, AddImages } from "./steps";

import "./style.scss";

const AddProfile = () => {
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();
  const { profile, loading } = useSelector((state) => state);

  const handleBackClick = () => {
    const { shouldRedirect } = dispatch.profile.handleBackClick();
    if (shouldRedirect) history.push(routesConstants.CABINET);
  };

  const handleNextStep = async (data) => {
    await dispatch.profile.setProfileEffect(data);
  };

  useEffect(() => {
    async function generageToken() {
      const token = await getAccessTokenSilently();
      await dispatch.profile.setProfile({ token });
    }

    if (!profile.token) generageToken();
  }, []);

  const renderActiveStep = () => {
    switch (profile.currenStep) {
      case ADD_PROFILE_STEPS_NAME.TEMPLATE:
        return <SelectProfile profile={profile} onSubmit={handleNextStep} />;
      case ADD_PROFILE_STEPS_NAME.MAIN_INFORMATION:
        return <MainInfo profile={profile} onSubmit={handleNextStep} />;
      case ADD_PROFILE_STEPS_NAME.PHOTOS:
        return <AddImages profile={profile} onSubmit={handleNextStep} />;
      case ADD_PROFILE_STEPS_NAME.ADDITIONAL_INFORMATION:
        return <AdditionalInfo profile={profile} onSubmit={handleNextStep} />;
      default:
        return (
          <SelectProfile
            storeTemplate={profile?.template || ""}
            onSubmit={handleNextStep}
          />
        );
    }
  };

  if (loading.global) return <Spinner />;

  return (
    <div className="add-profile">
      <HeaderDark onBackClick={handleBackClick} />
      {renderActiveStep()}
    </div>
  );
};

export default AddProfile;
