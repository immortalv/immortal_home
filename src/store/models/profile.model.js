import routesConstants from "constants/routes.constants";
import { createProfile, uploadFile } from "services/api/profile.service";
import { getNextStep, getPreviousStep } from "utils/profile.utils";
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
        dispatch.profile.saveProfile();
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
        const {
          profile,
          user: { userId },
        } = state;
        // Check whether all data is present

        const { originalKey: mainPhoto } = await upload(
          profile.mainPhoto,
          userId
        );
        const { originalKey: coverPhoto } = await upload(
          profile.coverPhoto,
          userId
        );

        const mediaFiles = await Promise.all(
          profile.media.map(async (file) => await upload(file, userId))
        );

        const media = mediaFiles.map((file) => file.originalKey);

        await createProfile(
          {
            ...profile,
            mainPhoto,
            coverPhoto,
            media,
          },
          profile.token
        );
        window.location.pathname = routesConstants.PROFILE_CREATED;
      } catch (error) {
        dispatch.profile.clearState();
        window.location.pathname = routesConstants.CABINET;
      }
    },
  }),
};

async function upload(file, id) {
  const formData = new FormData();
  formData.append("files", file);
  const respone = await uploadFile(formData, id);

  return await respone;
}
