import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { dispatch } from "store";
import AppRouter from "router";

import "./style.scss";

function App() {
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) return;
    dispatch.user.signIn();
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
