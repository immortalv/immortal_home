import React from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "components/auth/protected-route.container";
import MainLayout from "layouts";
// import HomePage from "pages/home";
import routes, { subRoutes } from "./routes";

// const checkAccess = (route) =>
//   !route.checkAccess || route.checkAccess() ? route.component : HomePage;

const AppRouter = () => {
  return (
    <Switch>
      {subRoutes.map((route) => (
        <ProtectedRoute
          key={route.path}
          protect={route.checkAccess}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
      <>
        <MainLayout>
          <Switch>
            {routes.map((route) => (
              <ProtectedRoute
                key={route.path}
                protect={route.checkAccess}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </MainLayout>
      </>
    </Switch>
  );
};

export default AppRouter;
