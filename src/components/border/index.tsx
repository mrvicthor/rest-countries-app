import { useEffect, useState } from "react";

interface Props {
  border: string;
  isDarkMode: boolean;
}

const Border = ({ border, isDarkMode }: Props) => {
  const [country, setCountry] = useState<string>("");

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
        !isDarkMode ? "text-white bg-[#2b3945]" : "text-[#111517] bg-white"
      } cursor-pointer hover:scale-[1.1] duration-700 ease-in-out myShadow`}
    >
      {country}
    </li>
  );
};

export default Border;
