import React from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import AppRouter from "router";
import Spinner from "components/spinner/spinner.component";

import "./style.scss";

function App() {
  const { isLoading } = useAuth0();
  const { loading } = useSelector((state) => state);

  if (isLoading || loading.global) return <Spinner />;
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
