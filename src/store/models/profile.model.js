import routesConstants from "constants/routes.constants";
import {
  createProfile,
  uploadFile,
  getProfile,
  updateProfile,
} from "services/api/profile.service";
import { profileDataMock } from "constants/profile-data.mock";
import {
  clearUserId,
  getNextStep,
  getPreviousStep,
  filterUploadedContent,
} from "utils/profile.utils";
import { showErrorToast } from "components/toasters";
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
        if (id) {
          dispatch.profile.setProfile({ ...payload, id, currenStep: nextStep });
        }
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

        const profileData = {
          name: profile.name,
          description: profile.description,
          descriptionAdditional: profile.descriptionAdditional,
          birthDate: profile.birthDate,
          deathDate: profile.deathDate,
          profileType: profile.profileType, // public/privat
          epitaph: profile.epitaph,
          template: profile.template,
        };

        debugger;
        const { id } = await createProfile(profileData, profile.token);

        const queryParams = `userId=${clearUserId(userId)}&profileId=${id}`;

        const [mainPhoto, ...otherData] = await Promise.allSettled([
          await upload(profile.mainPhoto[0], queryParams),
          ...profile.otherPhotos.map(
            async (file) => await upload(file, queryParams)
          ),
          ...profile.otherFiles.map(
            async (file) => await upload(file, queryParams)
          ),
        ]);

        const { otherPhotos, otherFiles } = filterUploadedContent(otherData); // @TODO show message for not uploaded data
        const updatedProfile = {
          mainPhoto: mainPhoto.status === "fulfilled" ? mainPhoto.value : {},
          otherPhotos,
          otherFiles,
        };

        await updateProfile(id, updatedProfile, profile.token);

        return id;
      } catch (error) {
        showErrorToast("Щось пішло не так...");
        console.error(error);
        dispatch.profile.clearState();
        window.location.pathname = routesConstants.CABINET;
      }
    },

    async getProfile(payload) {
      try {
        const { id, token } = payload;
        const profile = await getProfile(id, token);
        dispatch.profile.setProfile(profile);
      } catch (error) {
        dispatch.profile.setProfile(profileDataMock);
      }
    },
  }),
};

async function upload(file, queryParams) {
  const formData = new FormData();
  formData.append("files", file);
  const respone = await uploadFile(formData, queryParams);

  return await respone;
}
