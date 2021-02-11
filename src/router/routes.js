import routesConstants from "constants/routes.constants";
import HomePage from "pages/home";
import { ProfilesPage, ProfilePage } from "pages/profiles";
// import LoginPage from "pages/login";
import CabinetPage from "pages/cabinet";
import AddProfile from 'components/profiles/add-profile'

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
    name: "Увійти",
    exact: true,
    path: routesConstants.LOGIN,
    component: HomePage,
  },
  {
    exact: true,
    path: routesConstants.ADD_PROFILE,
    component: AddProfile,
  },
  {
    exact: true,
    path: "/*",
    component: HomePage,
  },
];

export default routes;
