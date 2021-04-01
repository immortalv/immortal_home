export const FILE_UPLOAD_GATEWAY_URL =
  "https://81srnuryr6.execute-api.eu-central-1.amazonaws.com/Prod/data";
export const CONTENT_BUCKET =
  "https://immortal-content.s3.us-east-2.amazonaws.com";
export const PROFILES_CONTENT = `${CONTENT_BUCKET}/profiles`;

export const BASE_API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://localhost:8080";

const BASE_AUTH_URL = `${BASE_API_URL}/v1/auth`;
export const AUTH_URL = {
  REGISTER: `${BASE_AUTH_URL}/register`,
  LOGIN: `${BASE_AUTH_URL}/login`,
  LOGOUT: `${BASE_AUTH_URL}/logout`,
  VALIDATE: `${BASE_AUTH_URL}/validate`,
  REFRESH_TOKEN: `${BASE_AUTH_URL}/refresh-tokens`,
  FORGOT_PASSWORD: `${BASE_AUTH_URL}//forgot-password`,
};

export const BASE_PROFILE_URL = `${BASE_API_URL}/v1/profile`;

export const PROFILE_URL = {};
