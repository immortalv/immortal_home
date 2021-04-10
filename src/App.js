import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppRouter from "router";
import Spinner from "components/spinner/spinner.component";

import "./style.scss";

function App() {
  const { isLoading, user, error } = useAuth0();
  // const { user, loading } = useSelector((state) => state);

  // const { name, picture, email } = user;

  if (isLoading) return <Spinner />;

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
