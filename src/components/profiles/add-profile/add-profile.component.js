import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { dispatch } from "store";
import { ADD_PROFILE_STEPS_NAME } from "constants/profile.constants";
import routesConstants from "constants/routes.constants";
import { HeaderDark } from "components/header";
import Spinner from "components/spinner/spinner.component";
import {
  SelectProfile,
  MainInfo,
  AdditionalInfo,
  AddImages,
  ProfileCreated,
} from "./steps";

import "./style.scss";

const AddProfile = () => {
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();
  const { profile, loading } = useSelector((state) => state);

  const handleBackClick = () => {
    const backClicked = dispatch.profile.handleBackClick();
    if (backClicked?.shouldRedirect) history.push(routesConstants.CABINET);
  };

  const handleNextStep = (data) => dispatch.profile.setProfileEffect(data);
  const createProfile = async (data) => {
    const token = await getAccessTokenSilently();
    await dispatch.profile.setProfile({ token });
    await dispatch.profile.setProfileEffect(data);
    await dispatch.profile.saveProfile();
  };
  const clearProfileState = () => dispatch.profile.clearState();

  useEffect(() => {
    async function generageToken() {
      const token = await getAccessTokenSilently();
      await dispatch.profile.setProfile({ token });
    }

    clearProfileState();
    if (!profile.token) generageToken();
  }, []);

  const renderActiveStep = () => {
    switch (profile.currentStep) {
      case ADD_PROFILE_STEPS_NAME.TEMPLATE:
        return <SelectProfile onSubmit={handleNextStep} />;
      case ADD_PROFILE_STEPS_NAME.MAIN_INFORMATION:
        return <MainInfo profile={profile} onSubmit={handleNextStep} />;
      case ADD_PROFILE_STEPS_NAME.PHOTOS:
        return <AddImages onSubmit={handleNextStep} />;
      case ADD_PROFILE_STEPS_NAME.ADDITIONAL_INFORMATION:
        return <AdditionalInfo profile={profile} onSubmit={createProfile} />;
      case ADD_PROFILE_STEPS_NAME.PROFILE_CREATED:
        return (
          <ProfileCreated id={profile.id} onPageChange={clearProfileState} />
        );
      default:
        return <SelectProfile onSubmit={handleNextStep} />;
    }
  };

  if (loading.global) return <Spinner text="Профіль створюється..." />;
  return (
    <div className="add-profile">
      <HeaderDark onBackClick={handleBackClick} />
      {renderActiveStep()}
    </div>
  );
};

export default AddProfile;
