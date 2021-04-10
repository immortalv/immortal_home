import React, { useState } from "react";
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
import { createProfile } from "services/api/profile.service";

import "./style.scss";

const AddProfile = () => {
  const history = useHistory();
  const { getAccessTokenSilently } = useAuth0();
  const { profile, loading } = useSelector((state) => state);
  const [activeStep, setActiveStep] = useState(ADD_PROFILE_STEPS_NAME.PHOTOS);

  const setProfileInfo = async (data) =>
    await dispatch.profile.setProfile(data);

  const callSecureApi = async (data) => {
    try {
      const token = await getAccessTokenSilently();

      const response = createProfile(data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const nextStep = () => {
    const activeIndex = ADD_PROFILE_STEPS.indexOf(activeStep);
    const nextStep = ADD_PROFILE_STEPS[activeIndex + 1];
    if (activeIndex + 1 > ADD_PROFILE_STEPS.length - 1 || !nextStep) return;
    setActiveStep(nextStep);
  };

  const handleBackClick = () => {
    const activeIndex = ADD_PROFILE_STEPS.indexOf(activeStep);
    if (activeIndex === 1) history.push(routesConstants.CABINET);
    const previousStep = ADD_PROFILE_STEPS[activeIndex - 1];
    if (!previousStep) return;
    setActiveStep(previousStep);
  };

  const handleNextStep = async (data, isFinal = false) => {
    await setProfileInfo(data);

    if (!isFinal) return nextStep();
    dispatch.profile.saveProfile(data);
  };

  const renderActiveStep = () => {
    switch (activeStep) {
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
            onSubmit={setProfileInfo}
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
