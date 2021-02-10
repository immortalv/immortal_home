export const CONTENT_BUCKET =
  "https://immortal-content.s3.us-east-2.amazonaws.com";
export const PROFILES_CONTENT = `${CONTENT_BUCKET}/profiles`;

export const BASE_API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.SERVER_URL
    : "http://localhost:8080";

const BASE_AUTH_URL = `${BASE_API_URL}/v1/auth`;
export const AUTH_URL = {
  REGISTER: `${BASE_AUTH_URL}/register`,
  LOGIN: `${BASE_AUTH_URL}/login`,
  LOGOUT: `${BASE_AUTH_URL}/logout`,
  REFRESH_TOKEN: `${BASE_AUTH_URL}/refresh-tokens`,
  FORGOT_PASSWORD: `${BASE_AUTH_URL}//forgot-password`,
};
