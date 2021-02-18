import axios from "./axios.service";
import { AUTH_URL } from "constants/api.constants";

export const signIn = async (values) => {
  const response = await axios.post(AUTH_URL.LOGIN, values);
  const { access } = response.data.tokens;
  localStorage.setItem("access-token", access.token);

  return response.data.user;
};

export const signUp = async (values) => {
  const response = await axios.post(AUTH_URL.REGISTER, values);
  const { access } = response.data.tokens;
  localStorage.setItem("access-token", access.token);

  return response.data.user;
};

export const signOut = async () => {
  await axios.post(AUTH_URL.LOGOUT);
  localStorage.removeItem("access-token");
};
