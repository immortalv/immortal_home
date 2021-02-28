import React from "react";
import { Route, Switch } from "react-router-dom";
import MainLayout from "layouts";
import HomePage from "pages/home";
import routes, { subRoutes } from "./routes";

const checkAccess = (route) => route.component
  // !route.checkAccess || route.checkAccess() ? route.component : HomePage;

const AppRouter = () => {
  return (
    <Switch>
      {subRoutes.map((route) => (
        <Route
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={checkAccess(route)}
        />
      ))}
      <>
        <MainLayout>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={route.path}
                component={checkAccess(route)}
              />
            ))}
          </Switch>
        </MainLayout>
      </>
    </Switch>
  );
};

export default AppRouter;
