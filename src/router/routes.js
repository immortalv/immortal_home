import routesConstants from "constants/routes.constants";
import HomePage from "pages/home";
import { ProfilesPage, ProfilePage } from "pages/profiles";
import LoginPage from "pages/login";

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
    component: () => "cabinet",
  },
  {
    name: "Правила",
    isInNavigation: true,
    exact: true,
    path: routesConstants.RULES,
    component: () => "Rules",
  },
  {
    name: "Увійти",
    exact: true,
    path: routesConstants.LOGIN,
    component: LoginPage,
  },
  //   {
  //     exact: true,
  //     path: routesConstants.DAILY_INSTRUCTION_DETAILS,
  //     component: DetailsPage,
  //   },
  {
    exact: true,
    path: "/*",
    component: HomePage,
  },
];

export default routes;
