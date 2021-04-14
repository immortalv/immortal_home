import { getProfiles, getProfile } from "services/api/profile.service";

export const profiles = {
  state: {
    data: [],
    chosenProfile: null,
  },
  reducers: {
    setProfiles(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    setProfile(state, payload) {
      return {
        chosenProfile: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async getProfiles(payload) {
      try {
        const { token } = payload;
        const profiles = await getProfiles(token);

        await dispatch.profiles.setProfiles({ data: [] });
      } catch (error) {
        console.log("Error-----------------", error);
        dispatch.profiles.setProfiles({ data: [] });
      }
    },

    async getProfile(payload, state) {
      const { id, token } = payload;
      const profile = await getProfile(id, token);

      dispatch.profiles.setProfile(profile);
    },
  }),
};
