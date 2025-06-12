import { useState, useEffect } from "react";
import { Navbar } from "../components";
import { useDarkMode } from "usehooks-ts";

const Layout = ({ children }: any) => {
  const { isDarkMode, toggle } = useDarkMode();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return null;
  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggle={toggle} />
      {children}
    </>
  );
};

export default Layout;
