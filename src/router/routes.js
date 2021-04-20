import { store } from "store";
import routesConstants from "constants/routes.constants";
import HomePage from "pages/home";
// import HomePage from "pages/home/v2";
import LoginPage from "pages/auth/auth.page";

import { ProfilesPage, ProfilePage } from "pages/profiles";
// import LoginPage from "pages/login";
import CabinetPage from "pages/cabinet";
import AddProfile from "components/profiles/add-profile";

// this is main routes with main layout

const routes = [
  {
    name: "Головна",
    isInNavigation: true,
    exact: true,
    path: routesConstants.HOME,
    component: HomePage,
  },
  {
    name: "Профілі",
    isInNavigation: true,
    exact: true,
    path: routesConstants.PROFILES,
    component: ProfilesPage,
  },
  {
    name: "Профілі",
    exact: true,
    path: routesConstants.PROFILE,
    component: ProfilePage,
  },
  {
    name: "Кабінет",
    isInNavigation: true,
    exact: true,
    checkAccess: () => store.getState().user.isAuthenticated,
    path: routesConstants.CABINET,
    component: CabinetPage,
  },
  {
    name: "Правила",
    isInNavigation: true,
    exact: true,
    path: routesConstants.RULES,
    component: HomePage,
  },

  {
    exact: true,
    path: "/*",
    component: HomePage,
  },
];

export const subRoutes = [
  {
    exact: true,
    path: routesConstants.ADD_PROFILE,
    checkAccess: () => store.getState().user.isAuthenticated,
    component: AddProfile,
  },
  {
    name: "Увійти",
    exact: true,
    path: routesConstants.LOGIN,
    component: LoginPage,
  },
  {
    name: "Увійти",
    exact: true,
    path: routesConstants.REGISTER,
    component: LoginPage,
  },
];

export default routes;
