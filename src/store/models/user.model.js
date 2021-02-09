// import AppLogin from "services/auth/";

export const user = {
  state: {
    fullName: "",
    isVerified: false,
    profiles: [],
    isLoginError: false,
  },
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        fullName: payload.fullName,
        isVerified: payload.isVerified,
        profiles: payload.profiles,
      };
    },

    setIsLoginError(state, isLoginError) {
      return { ...state, isLoginError };
    },
  },
  effects: (dispatch) => ({
    async login() {
      try {
          console.log('login-----')
        // const {
        //   fullName,
        //   isVerified,
        //   profiles,
        // } = await AppLogin.performLogin();

        // dispatch.user.setUser({
        //   fullName,
        //   isVerified,
        //   profiles,
        // });
      } catch {
        dispatch.user.setIsLoginError(true);
      }
    },
  }),
};
