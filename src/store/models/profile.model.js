import routesConstants from "constants/routes.constants";
import {
  createProfile,
  uploadFile,
  getProfile,
} from "services/api/profile.service";
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

  mainPhoto: [],
  coverPhoto: [],
  otherPhotos: [],
  otherFiles: [],

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
      const nextStep = getNextStep(ADD_PROFILE_STEPS, state.profile.currenStep);

      if (nextStep === ADD_PROFILE_STEPS_NAME.PROFILE_CREATED) {
        dispatch.profile.setProfile({ ...payload });
        const id = await dispatch.profile.saveProfile();
        dispatch.profile.setProfile({ ...payload, id, currenStep: nextStep });
        return;
      }

      dispatch.profile.setProfile({ ...payload, currenStep: nextStep });
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
        //@TODO Check whether all data is present

        const { originalKey: mainPhoto } = await upload(
          profile.mainPhoto[0],
          userId
        );
        const { originalKey: coverPhoto } = await upload(
          profile.coverPhoto[0],
          userId
        );

        const otherPhotosData = await Promise.all(
          profile.otherPhotos.map(async (file) => await upload(file, userId))
        );
        const otherPhotos = otherPhotosData.map((file) => file.originalKey);

        const otherFilesData = await Promise.all(
          profile.otherFiles.map(async (file) => await upload(file, userId))
        );
        const otherFiles = otherFilesData.map((file) => file.originalKey);

        const { id } = await createProfile(
          {
            ...profile,
            mainPhoto,
            coverPhoto,
            otherPhotos,
            otherFiles,
          },
          profile.token
        );

        return id;
      } catch (error) {
        dispatch.profile.clearState();
        window.location.pathname = routesConstants.CABINET;
      }
    },

    async getProfile(payload, state) {
      const { id, token } = payload;
      const profile = await getProfile(id, token);

      dispatch.profiles.setProfile(profile);
    },
  }),
};

const clearUserId = (id) => id.split("|")?.[1] || "";

async function upload(file, id) {
  const formData = new FormData();
  formData.append("files", file);
  const respone = await uploadFile(formData, clearUserId(id));

  return await respone;
}
