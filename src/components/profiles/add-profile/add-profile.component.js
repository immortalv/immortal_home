import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import {
  ADD_PROFILE_STEPS_NAME,
  ADD_PROFILE_STEPS,
} from "constants/profile.constants";
import routesConstants from "constants/routes.constants";
// import ProfileBuilder from "services/profile/build-profile.service";
import { Button } from "components/common";
import HeaderDark from "./header/header-dark";
import { SelectProfile, MainInfo, AdditionalInfo, AddImages } from "./steps";

import "./style.scss";

const AddProfile = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(
    ADD_PROFILE_STEPS_NAME.PHOTOS
  );
  const { profile } = useSelector((state) => state.profile);
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

  const handleNextStep = (data) => {
    setProfileInfo(data);
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
            secondary
            profile={profile}
            onSubmit={handleNextStep}
            skip={nextStep}
          />
        );
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

  return (
    <div className="add-profile">
      <HeaderDark onBackClick={handleBackClick} />
      {renderActiveStep()}
    </div>
  );
};

export default AddProfile;
