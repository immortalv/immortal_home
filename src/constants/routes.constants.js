export const PROFILE = "/profile";
export const PROFILES = "/profiles";
export const PROFILE_EDIT = `${PROFILE}/:id/edit`;

const routesConstants = {
  HOME: "/",
  PROFILES,
  PROFILE_EDIT,
  PROFILE: `${PROFILE}/:id`,
  CABINET: "/cabinet",
  RULES: "/rules",
  LOGIN: "/login",
  REGISTER: "/register",

  ADD_PROFILE: "/add-profile",
};

export default routesConstants;
