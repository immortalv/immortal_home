import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Spinner from "components/spinner/spinner.component";

const ProtectedRoute = ({ component, protect, ...args }) => {
  if (protect) {
    return (
      <Route
        component={withAuthenticationRequired(component, {
          onRedirecting: () => <Spinner />,
        })}
        {...args}
      />
    );
  }

  return <Route component={component} {...args} />;
};

export default ProtectedRoute;
