import routesConstants from "constants/routes.constants";
import { createProfile } from "services/api/profile.service";
import {
  ADD_PROFILE_STEPS_NAME,
  ADD_PROFILE_STEPS,
} from "constants/profile.constants";

const initialState = {
  currenStep: ADD_PROFILE_STEPS_NAME.TEMPLATE,

  name: "",
  description: "",
  descriptionAdditional: "",

  birthDate: "",
  deathDate: "",
  profileType: "", // public/privat
  epitaph: "",

  mainPhoto: null,
  coverPhoto: null,
  media: [],

  template: "",
};

const getNextStep = (steps, activeStep) => {
  const activeIndex = steps.indexOf(activeStep);
  const nextStep = steps[activeIndex + 1];
  const isFinal = activeIndex + 1 === steps.length;
  if (isFinal) {
    return { nextStep: steps[0], isFinal };
  }
  if (activeIndex + 1 > steps.length || !nextStep) {
    return { nextStep: steps[0], isFinal: false };
  }

  return { nextStep, isFinal: false };
};

const getPreviousStep = (steps, activeStep) => {
  const activeIndex = steps.indexOf(activeStep);
  const previousStep = steps[activeIndex - 1];

  if (activeIndex === 0 || !previousStep) {
    return { previousStep, shouldRedirect: true };
  }

  return { previousStep, shouldRedirect: false };
};

export const profile = {
  state: initialState,

  reducers: {
    setProfile(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    clearState() {
      return {
        ...initialState,
      };
    },
  },
  effects: (dispatch) => ({
    async setProfileEffect(payload, state) {
      const { nextStep, isFinal } = getNextStep(
        ADD_PROFILE_STEPS,
        state.profile.currenStep
      );

      dispatch.profile.setProfile({ ...payload, currenStep: nextStep });

      if (isFinal) {
        dispatch.profile.saveProfile(payload);
      }
    },

    handleBackClick(payload, state) {
      const { previousStep, shouldRedirect } = getPreviousStep(
        ADD_PROFILE_STEPS,
        state.profile.currenStep
      );

      if (shouldRedirect) {
        dispatch.profile.clearState();
        return { shouldRedirect };
      }

      dispatch.profile.setProfile({ currenStep: previousStep });
    },

    async saveProfile(payload, state) {
      try {
        const { profile } = state;
        const { token } = payload;
        // Check whether all data is present

        debugger;

        await createProfile(profile, token);
        window.location.pathname = routesConstants.PROFILE_CREATED;
      } catch (error) {
        window.location.pathname = routesConstants.CABINET;
      }
    },
  }),
};
