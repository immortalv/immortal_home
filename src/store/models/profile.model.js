import routesConstants from "constants/routes.constants";
import { createProfile } from "services/api/profile.service";

export const profile = {
  state: {
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
  },
  reducers: {
    setProfile(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: () => ({
    async saveProfile(payload, state) {
      try {
        const { profile } = state;
        // Check whether all data is present

        await createProfile(profile);
        window.location.pathname = routesConstants.PROFILE_CREATED;
      } catch (error) {
        window.location.pathname = routesConstants.CABINET;
      }
    },
  }),
};
