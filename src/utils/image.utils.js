import {
  PROFILES_CONTENT,
  USER_PROFILE_CONTENT_BUCKET,
} from "constants/api.constants";

export const getProfileImg = (name, format = "png") =>
  `${PROFILES_CONTENT}/${name}.${format}`;

export const getProfileDataFromBucket = (key) =>
  `${USER_PROFILE_CONTENT_BUCKET}/${key}`;
