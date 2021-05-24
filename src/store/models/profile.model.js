import routesConstants from "constants/routes.constants";
import {
  createProfile,
  uploadFile,
  getProfile,
  updateProfile,
  removeFiles,
} from "services/api/profile.service";
import { profileDataMock } from "constants/profile-data.mock";
import {
  clearUserId,
  getNextStep,
  getPreviousStep,
  filterUploadedContent,
  getUpdatedFiles,
} from "utils/profile.utils";
import { showErrorToast, showSuccessToast } from "components/toasters";
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

        dispatch.profile.setProfile({ id });
      } catch (error) {
        showErrorToast("Щось пішло не так...");
        console.error(error);
        dispatch.profile.clearState();
        window.location.pathname = routesConstants.CABINET;
        // window.history.pushState({}, '', routesConstants.CABINET)
      }
    },

    async updateProfileData({ id }, state) {
      try {
        const {
          profile,
          user: { userId },
        } = state;
        let mainPhoto = profile.mainPhoto;
        const queryParams = `userId=${clearUserId(userId)}&profileId=${id}`;

        // if new image setted, upload it
        if (mainPhoto[0]?.preview) {
          mainPhoto = await upload(profile.mainPhoto[0], queryParams);
        }

        // @TODO Check for deleted file
        const { uploaded, toUpload } = getUpdatedFiles([
          ...profile.otherPhotos,
          ...profile.otherFiles,
        ]);

        const otherData = await Promise.allSettled([
          ...toUpload.map(async (file) => await upload(file, queryParams)),
        ]);

        const { otherPhotos, otherFiles } = filterUploadedContent([
          ...uploaded,
          ...otherData,
        ]); // @TODO show message for not uploaded data

        const updatedProfile = {
          ...profile,
          mainPhoto,
          otherPhotos,
          otherFiles,
        };

        const { filesToDelete } = await updateProfile(
          id,
          updatedProfile,
          profile.token
        );

        if (filesToDelete.length) {
          await removeFiles(filesToDelete, queryParams);
        }

        dispatch.profile.getProfile({ id, token: profile.token });
        showSuccessToast("Профіль успішно оновлено");
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
