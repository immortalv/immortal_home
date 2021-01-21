import routesConstants from "constants/routes.constants";

const routes = [
  {
    name: "Головна",
    isInNavigation: true,
    exact: true,
    path: routesConstants.HOME,
    component: () => "home",
  },
  {
    name: "Профілі",
    isInNavigation: true,
    exact: true,
    path: routesConstants.PROFILES,
    component: () => "profile",
  },
  {
    name: "Сервіс",
    isInNavigation: true,
    exact: true,
    path: routesConstants.SERVICE,
    component: () => "profile",
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
