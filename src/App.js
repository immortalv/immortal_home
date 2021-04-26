import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { dispatch } from "store";
import AppRouter from "router";
import Spinner from "components/spinner/spinner.component";
import { MessageContainer } from "components/toasters";

import "./style.scss";

function App() {
  const { isLoading, user } = useAuth0();

  useEffect(() => {
    if (user) {
      dispatch.user.setUser(user);
    }
  }, [user]);

  if (isLoading) return <Spinner />;
  return (
    <div className="App">
      <AppRouter />
      <MessageContainer />
    </div>
  );
}

export default App;
