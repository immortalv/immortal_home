export const PROFILE = "/profile";
export const PROFILES = "/profiles";

const routesConstants = {
  HOME: "/",
  PROFILES,
  PROFILE: `${PROFILE}/:id`,
  PROFILE_EDIT: `${PROFILE}/edit`,
  CABINET: "/cabinet",
  RULES: "/rules",
  LOGIN: "/login",
  REGISTER: "/register",

  ADD_PROFILE: "/add-profile",
};

export default routesConstants;
