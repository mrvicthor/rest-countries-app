import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./Layout";
import { useRouter } from "next/router";

interface Props {
  border: string;
}

const Border = ({ border }: Props) => {
  const router = useRouter();
  const [country, setCountry] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const { lightTheme } = useContext(ThemeContext);

  useEffect(() => {
    const getBorder = async () => {
      const res = await fetch(`https://restcountries.com/v2/alpha/${border}`);
      const data = await res.json();
      setSelected(data.alpha2Code);
      setCountry(data.name);
    };
    getBorder();
  }, [border]);
  return (
    <li
      onClick={() =>
        router.push({
          pathname: "/countries/[countrytld]",
          query: { countrytld: selected },
        })
      }
      className={` px-4 py-2 rounded opacity-70 ${
        !lightTheme ? "text-white bg-[#2b3945]" : "text-[#111517] bg-white"
      } cursor-pointer`}
    >
      {country}
    </li>
  );
};

export default Border;
