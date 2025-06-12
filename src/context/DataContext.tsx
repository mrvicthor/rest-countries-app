import { useState, createContext, useEffect, ReactNode } from "react";
import { useDarkMode } from "usehooks-ts";

interface ContextProps {
  countries: any[];
  loading: boolean;
  error: boolean;
}

export const ThemeContext = createContext<ContextProps>({
  countries: [],
  error: false,
  loading: false,
});

type Props = {
  children: ReactNode;
};
export function ThemeProvider({ children }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://restcountries.com/v3.1/independent?status=true"
      );
      if (!res.ok) return setError(true);
      setLoading(true);
      const data = await res.json();
      setLoading(false);
      setError(false);

      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        countries,
        loading,
        error,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
