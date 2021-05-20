import React from "react";
import { useLocation } from "react-router-dom";
import Header from "components/header";
import Footer from "components/footer";
import { routesWithFooter } from "router/routes";

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  const isWithFooter = routesWithFooter.includes(pathname);

  return (
    <>
      <Header />
      {children}
      {isWithFooter && <Footer />}
    </>
  );
};

export default MainLayout;
