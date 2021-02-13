import { signUp, signIn } from "services/api/auth.service";

export const user = {
  state: {
    fullName: "",
    isVerified: false,
    profiles: [],
    isLoginError: false,
    isAuthenticated: false,
  },
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },

    setIsLoginError(state, isLoginError) {
      return { ...state, isLoginError };
    },
  },
  effects: (dispatch) => ({
    async signUp(data) {
      try {
        const user = await signUp(data);
        dispatch.user.setUser(user);
      } catch {
        dispatch.user.setIsLoginError(true);
      }
    },

    async signIn(data) {
      try {
        const user = await signIn(data);
        dispatch.user.setUser(user);
      } catch {
        dispatch.user.setIsLoginError(true);
      }
    },
  }),
};
