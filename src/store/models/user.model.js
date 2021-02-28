import { signUp, signIn } from "services/api/auth.service";

export const user = {
  state: {
    name: "",
    isVerified: false,
    profiles: [],
    error: false,
    isAuthenticated: false,
  },
  reducers: {
    setUser(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },

    setIsLoginError(state, error) {
      return { ...state, error };
    },
  },
  effects: (dispatch) => ({
    async signUp(data) {
      try {
        if (!data) return;
        const { user, tokens } = await signUp(data);

        if (tokens.access) {
          localStorage.setItem("access-token", tokens.access.token);
        }

        localStorage.setItem("immortal-user-name", user.name);

        dispatch.user.setUser({ ...user, isAuthenticated: true });
      } catch (error) {
        const message = error?.response?.data?.message;
        dispatch.user.setIsLoginError(message || true);
      }
    },

    async signIn(data) {
      try {
        const accessToken = localStorage.getItem("access-token");
        const userName = localStorage.getItem("mmortal-user-name");

        if (accessToken && userName) {
          dispatch.user.setUser({ name: userName, isAuthenticated: true });
          return;
        }

        if (!data) return;
        const { user, tokens } = await signIn(data);

        if (tokens.access) {
          localStorage.setItem("access-token", tokens.access.token);
        }
        localStorage.setItem("immortal-user-name", user.name);

        dispatch.user.setUser({ ...user, isAuthenticated: true });
      } catch (error) {
        const message = error?.response?.data?.message;
        dispatch.user.setIsLoginError(message || true);
      }
    },
  }),
};
