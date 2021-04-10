import axios from "./axios.service";
import {
  BASE_PROFILE_URL,
  FILE_UPLOAD_GATEWAY_URL,
} from "constants/api.constants";

const CORS = "https://cors-anywhere.herokuapp.com";

// export const getProfile = (id) => axios.get(BASE_PROFILE_URL, id);
export const createProfile = (data) => axios.post(BASE_PROFILE_URL, data);
export const getProfiles = (data) =>
  axios.get(BASE_PROFILE_URL, data).then(({ data }) => data);

export const uploadFile = async (data, token) =>
  await axios
    .post(`${CORS}/${FILE_UPLOAD_GATEWAY_URL}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => data);

// export const signIn = async (values) =>
//   await axios.post(AUTH_URL.LOGIN, values).then(({ data }) => data);

// export const signUp = async (values) =>
//   axios.post(AUTH_URL.REGISTER, values).then(({ data }) => data);

// export const signOut = async () =>
//   axios
//     .post(AUTH_URL.LOGOUT)
//     .then(() => localStorage.removeItem("access-token"));

// export const validateCookieToken = async () =>
//   axios.post(AUTH_URL.VALIDATE).then(({ data }) => data);
