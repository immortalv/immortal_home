import React from "react";
import Header from "components/header";
import Footer from "components/footer";

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
