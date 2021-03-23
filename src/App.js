import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import AppRouter from "router";
import Spinner from "components/spinner/spinner.component";

import "./style.scss";

function App() {
  const { user, loading } = useSelector((state) => state);

  console.log("loading", loading);

  useEffect(() => {
    if (user.isAuthenticated) return;
    dispatch.user.signIn();
  }, []);

  if (loading.global) return <Spinner />;

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
