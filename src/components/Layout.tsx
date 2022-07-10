import { useState, createContext } from "react";
import Navbar from "./Navbar";

interface ContextProps {
  lightTheme: boolean;
  setLightTheme(lightTheme: boolean): void;
}

export const ThemeContext = createContext<ContextProps>({
  lightTheme: true,
  setLightTheme: () => {},
});

const Layout = ({ children }: any) => {
  const [lightTheme, setLightTheme] = useState<boolean>(true);
  const toggleTheme = () => {
    setLightTheme((prevState) => !prevState);
  };
  return (
    <>
      <ThemeContext.Provider value={{ lightTheme, setLightTheme }}>
        <Navbar toggleTheme={toggleTheme} />
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
