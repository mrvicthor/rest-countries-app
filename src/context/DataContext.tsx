import { useState, createContext, useEffect, ReactNode } from "react";

interface ContextProps {
  lightTheme: boolean;
  toggleTheme: () => void;
  countries: any[];
  loading: boolean;

  error: boolean;
}

export const ThemeContext = createContext<ContextProps>({
  lightTheme: true,
  toggleTheme: () => {},
  countries: [],
  error: false,
  loading: false,
});

type Props = {
  children: ReactNode;
};
export function ThemeProvider({ children }: Props) {
  const [lightTheme, setLightTheme] = useState<boolean>(true);

  console.log(lightTheme);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [countries, setCountries] = useState<any[]>([]);
  const toggleTheme = () => {
    setLightTheme((prevTheme) => !prevTheme);
    window.localStorage.setItem("state", JSON.stringify(lightTheme));
  };
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
    <ThemeContext.Provider
      value={{
        lightTheme,
        countries,
        loading,
        error,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
