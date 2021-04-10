import React from "react";
import { HeaderDark } from "components/header";

const DarkLayout = ({ children }) => (
  <>
    <HeaderDark />
    {children}
  </>
);

export default DarkLayout;
