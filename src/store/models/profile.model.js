export const profile = {
  state: {
    firstName: "",
    lastName: "",
    surName: "",
    description: "",
    descriptionAdditional: "",

    birthDate: "",
    deathDate: "",
    profileType: "", // public/privat
    epitaph: "",

    mainPhoto: null,
    coverPhoto: null,
    otherPhotos: [],
    video: [],
    audio: [],

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
  effects: (dispatch) => ({
    async saveProfile(data) {
      try {
        // const user = await signUp(data);
        // dispatch.user.setUser(user);
      } catch {
        // dispatch.user.setIsLoginError(true);
      }
    },
  }),
};
