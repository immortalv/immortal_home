import { getProfiles } from "services/api/profile.service";

export const profiles = {
  state: {
    data: [],
  },
  reducers: {
    setProfiles(state, payload) {
      return {
        ...state,
        ...payload,
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
  }),
};
