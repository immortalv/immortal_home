import routesConstants from "constants/routes.constants";
import HomePage from "pages/home";
import ProfilesPage from "pages/profiles";

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
    name: "Ввійти",
    exact: true,
    path: routesConstants.LOGIN,
    component: () => "login",
  },
  //   {
  //     exact: true,
  //     path: routesConstants.DAILY_INSTRUCTION_DETAILS,
  //     component: DetailsPage,
  //   },
  {
    exact: true,
    path: "/*",
    component: () => "home",
  },
];

export default routes;
