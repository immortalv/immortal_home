import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const AppRouter = () => {
  return (
    <>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </>
  );
};

export default AppRouter;
