import React from "react";
import AppRouter from "router";
import Header from "components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
