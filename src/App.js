import React from "react";
import AppRouter from "router";
import Header from "components/header";
import Footer from "components/footer";

import "./style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
