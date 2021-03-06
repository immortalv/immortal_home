import routesConstants from "constants/routes.constants";
import {
  createProfile,
  uploadFile,
  getProfile,
  updateProfile,
  removeFiles,
  getUploadSignedUrl,
} from "services/api/profile.service";
import { profileDataMock } from "constants/profile-data.mock";
import {
  clearUserId,
  getNextStep,
  getPreviousStep,
  filterUploadedContent,
  getUpdatedFiles,
  getFullName,
} from "utils/profile.utils";
import {
  showErrorToast,
  showSuccessToast,
  showWarningToast,
} from "components/toasters";
import {
  ADD_PROFILE_STEPS_NAME,
  ADD_PROFILE_STEPS,
  PROFILE_TEMPLATE_TYPES,
} from "constants/profile.constants";
import { filterFalsy } from "utils/object.utils";
import axios from "axios";
import { isProduction } from "constants/api.constants";
import { readDataAsBinary, readFileAsync, toBinary } from "utils/general.utils";

const initialState = isProduction
  ? {
      currentStep: ADD_PROFILE_STEPS_NAME.TEMPLATE,

      name: "",
      description: "",
      descriptionAdditional: "",

      birthDate: null,
      deathDate: null,
      epitaph: "",

      mainPhoto: {},
      otherPhotos: [],
      otherFiles: [],

      template: PROFILE_TEMPLATE_TYPES.SIMPLE,
    }
  : {
      currentStep: ADD_PROFILE_STEPS_NAME.TEMPLATE,

      name: "John Doe",
      description: "Description of John Doe",
      descriptionAdditional: "",

      birthDate: new Date(1231231231),
      deathDate: new Date(2231312311),
      epitaph: "",

      mainPhoto: {},
      otherPhotos: [],
      otherFiles: [],

      template: PROFILE_TEMPLATE_TYPES.SIMPLE,
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
      const nextStep = getNextStep(
        ADD_PROFILE_STEPS,
        state.profile.currentStep
      );
      dispatch.profile.setProfile({ ...payload, currentStep: nextStep });
    },

    handleBackClick(payload, state) {
      const { previousStep, shouldRedirect } = getPreviousStep(
        ADD_PROFILE_STEPS,
        state.profile.currentStep
      );

      if (shouldRedirect) {
        dispatch.profile.clearState();
        return { shouldRedirect };
      }

      dispatch.profile.setProfile({ currentStep: previousStep });
    },

    async saveProfile(payload, state) {
      try {
        const {
          profile,
          user: { userId },
        } = state;
        //@TODO Check whether all data is present

        const profileData = {
          name: getFullName(profile),
          description: profile.description,
          descriptionAdditional: profile.descriptionAdditional,
          birthDate: profile.birthDate,
          deathDate: profile.deathDate,
          profileType: profile.profileType, // public/private
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
        ]);

        const videos = await Promise.allSettled([
          ...profile.otherFiles.map(
            async (file) => await putS3file(file, queryParams)
          ),
        ]);

        const { otherPhotos } = filterUploadedContent(otherData); // @TODO show message for not uploaded data
        const otherFiles = videos.reduce((acc, cur) => {
          if (cur.status === "fulfilled") {
            acc.push(cur.value.item);
          }
          return acc;
        }, []);

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
        const updatedProfile = filterFalsy(profile, { acceptEmpty: true });
        updatedProfile.name = getFullName(profile);
        const queryParams = `userId=${clearUserId(userId)}&profileId=${id}`;

        // if new image settled, upload it
        if (profile.mainPhoto[0]?.preview) {
          const mainPhoto = await upload(profile.mainPhoto[0], queryParams);
          updatedProfile.mainPhoto = mainPhoto;
        }

        // @TODO Check for deleted file
        const { uploaded: photosUploaded, toUpload: photosToUpload } =
          getUpdatedFiles(profile.otherPhotos);

        const { uploaded: videosUploaded, toUpload: videosToUpload } =
          getUpdatedFiles(profile.otherFiles);

        const videos = await Promise.allSettled([
          ...videosToUpload.map(
            async (file) => await putS3file(file, queryParams)
          ),
        ]);

        const otherFiles = videos.reduce(
          (acc, cur) => {
            if (cur.status === "fulfilled") {
              acc.push(cur.value.item);
            }
            return acc;
          },
          [...videosUploaded]
        );

        const otherPhotosUploaded = await Promise.allSettled([
          ...photosToUpload.map(
            async (file) => await upload(file, queryParams)
          ),
        ]);

        const { otherPhotos, rejected } = filterUploadedContent([
          ...photosUploaded,
          ...otherPhotosUploaded,
        ]); // @TODO show message for not uploaded data

        if (otherPhotos.length) updatedProfile.otherPhotos = otherPhotos;
        if (otherFiles.length) updatedProfile.otherFiles = otherFiles;

        const { filesToDelete } = await updateProfile(
          id,
          updatedProfile,
          profile.token
        );

        if (filesToDelete.length) {
          removeFiles(filesToDelete, queryParams).catch((error) => {
            console.error(error);
            showWarningToast("Щось пішло не так");
          });
        }

        dispatch.profile.getProfile({ id, token: profile.token });

        if (rejected.length) {
          showWarningToast(
            "Щось пішло не так, можливо не всі зміни збережені!"
          );
        } else {
          showSuccessToast("Профіль успішно оновлено!");
        }
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
  const response = await uploadFile(formData, queryParams);

  return response;
}

async function putS3file(file, queryParams) {
  const signedUrlParams = `${queryParams}&fileName=${file.name}`;

  const [binaryFile, signedUrl] = await Promise.all([
    await readDataAsBinary(file),
    await getUploadSignedUrl(signedUrlParams),
  ]);

  const params = {
    headers: {
      "Content-Type": file.type,
    },
  };

  const response = await axios.put(signedUrl.presignedUrl, binaryFile, params);

  const item = {
    id: signedUrl.id,
    key: signedUrl.key,
    fileName: signedUrl.fileName,
    mimeType: file.type,
  };

  return { response, item };
}
