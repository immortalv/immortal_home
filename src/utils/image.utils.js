import { PROFILES_CONTENT } from "constants/api.constants";

export const getProfileImg = (name, format = 'png') => `${PROFILES_CONTENT}/${name}.${format}`;
