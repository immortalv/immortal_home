import { getProfiles, getProfile } from "services/api/profile.service";
import { profileDataMock } from "constants/profile-data.mock";

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
        const profiles = await getProfiles(payload);
        await dispatch.profiles.setProfiles({ data: profiles });
      } catch (error) {
        dispatch.profiles.setProfiles({ data: [] });
      }
    },
  }),
};
