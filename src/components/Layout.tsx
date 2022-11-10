// import { useState, createContext, useEffect } from "react";
import { Navbar } from "../components";
import { useDarkMode } from "usehooks-ts";

const Layout = ({ children }: any) => {
  const { isDarkMode, toggle } = useDarkMode();
  console.log(isDarkMode);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggle={toggle} />
      {children}
    </>
  );
};

export default Layout;
