import { useState, createContext, useEffect } from "react";
import { Navbar } from "../components";

interface ContextProps {
  lightTheme: boolean;
  setLightTheme(lightTheme: boolean): void;
  countries: any[];
  loading: boolean;

  error: boolean;
}

export const ThemeContext = createContext<ContextProps>({
  lightTheme: true,
  setLightTheme: () => {},
  countries: [],
  error: false,

  loading: false,
});

const Layout = ({ children }: any) => {
  const [lightTheme, setLightTheme] = useState<boolean>(true);
  const toggleTheme = () => {
    setLightTheme((prevState) => !prevState);
  };
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [countries, setCountries] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v2/all");
      if (!res.ok) return setError(true);
      setLoading(true);
      const data = await res.json();
      setLoading(false);
      setError(false);

      setCountries((prevData) => [...prevData, ...data]);
    };
    fetchData();
  }, []);
  return (
    <>
      <ThemeContext.Provider
        value={{ lightTheme, setLightTheme, countries, loading, error }}
      >
        <Navbar toggleTheme={toggleTheme} />
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
