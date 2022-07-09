import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./Layout";

interface Props {
  border: string;
}

const Border = ({ border }: Props) => {
  const [country, setCountry] = useState<string>("");
  const { lightTheme } = useContext(ThemeContext);

  useEffect(() => {
    const getBorder = async () => {
      const res = await fetch(`https://restcountries.com/v2/alpha/${border}`);
      const data = await res.json();
      setCountry(data.name);
    };
    getBorder();
  }, [border]);
  return (
    <li
      className={` px-4 py-2 rounded opacity-70 ${
        !lightTheme ? "text-white bg-[#2b3945]" : "text-[#111517] bg-white"
      } `}
    >
      {country}
    </li>
  );
};

export default Border;
