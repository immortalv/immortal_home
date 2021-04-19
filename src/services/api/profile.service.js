import axios from "./axios.service";
import {
  BASE_PROFILE_URL,
  FILE_UPLOAD_GATEWAY_URL,
} from "constants/api.constants";

export const createProfile = (data, token) =>
  axios.securePost(BASE_PROFILE_URL, data, token).then(({ data }) => data);
export const getProfiles = (token) =>
  axios.secureGet(BASE_PROFILE_URL, token).then(({ data }) => data);

export const getProfile = (id, token) =>
  axios.secureGet(`${BASE_PROFILE_URL}/${id}`, token).then(({ data }) => data);

export const uploadFile = async (data, userId) =>
  await axios
    .post(`${FILE_UPLOAD_GATEWAY_URL}?userId=${userId}`, data)
    .then(({ data }) => data);
