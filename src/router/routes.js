import routesConstants from "constants/routes.constants";
import HomePage from "pages/home";
import LoginPage from "pages/login/login.page";

import { ProfilesPage, ProfilePage } from "pages/profiles";

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
    path: routesConstants.CABINET,
    component: HomePage,
  },
  {
    name: "Правила",
    isInNavigation: true,
    exact: true,
    path: routesConstants.RULES,
    component: HomePage,
  },
  {
    name: "Увійти",
    exact: true,
    path: routesConstants.LOGIN,
    component: LoginPage,
  },
  {
    exact: true,
    path: "/*",
    component: HomePage,
  },
];

export default routes;
