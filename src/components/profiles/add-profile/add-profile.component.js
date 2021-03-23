import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import { createProfile } from "services/api/profile.service";
import {
  ADD_PROFILE_STEPS_NAME,
  ADD_PROFILE_STEPS,
} from "constants/profile.constants";
import routesConstants from "constants/routes.constants";
import HeaderDark from "./header/header-dark";
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
  const [activeStep, setActiveStep] = useState(ADD_PROFILE_STEPS_NAME.TEMPLATE);

  const { profile } = useSelector((state) => state);
  const setProfileInfo = (data) => dispatch.profile.setProfile(data);

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

  const handleNextStep = async (data, isFinal) => {
    await setProfileInfo(data);

    // Check whether all needed profile data is present
    if (isFinal) createProfile(profile);
    nextStep();
  };

  const renderActiveStep = () => {
    switch (activeStep) {
      case ADD_PROFILE_STEPS_NAME.TEMPLATE:
        return <SelectProfile profile={profile} onSubmit={handleNextStep} />;
      case ADD_PROFILE_STEPS_NAME.MAIN_INFORMATION:
        return <MainInfo profile={profile} onSubmit={handleNextStep} />;
      case ADD_PROFILE_STEPS_NAME.PHOTOS:
        return <AddImages profile={profile} onSubmit={handleNextStep} />;
      case ADD_PROFILE_STEPS_NAME.DESCRIPTION:
        return (
          <MainInfo
            isSecondary
            profile={profile}
            onSubmit={handleNextStep}
            onSkip={handleNextStep}
          />
        );
      case ADD_PROFILE_STEPS_NAME.ADDITIONAL_INFORMATION:
        return <AdditionalInfo profile={profile} onSubmit={handleNextStep} />;

      case ADD_PROFILE_STEPS_NAME.PROFILE_CREATED:
        return <ProfileCreated />;

      default:
        return (
          <SelectProfile
            storeTemplate={profile?.template || ""}
            onSubmit={setProfileInfo}
          />
        );
    }
  };

  return (
    <div className="add-profile">
      <HeaderDark onBackClick={handleBackClick} />
      {renderActiveStep()}
    </div>
  );
};

export default AddProfile;
