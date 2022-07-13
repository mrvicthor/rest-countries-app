import { useEffect, useState } from "react";
import Header from "./Header";
import useAutocomplete from "./useAutocomplete";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ThemeContext } from "./Layout";

const Countries = () => {
  const { lightTheme } = useContext(ThemeContext);
  const [countries, setCountries] = useState<any[]>();
  const [input, setInput] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const query = useAutocomplete(input);
  const router = useRouter();

  useEffect(() => {
    if (!input) {
      const fetchData = async () => {
        const res = await fetch("https://restcountries.com/v2/all");
        const data = await res.json();
        setCountries(data);
      };
      fetchData();
    } else {
      const getCountry = async () => {
        const res = await fetch(`https://restcountries.com/v2/name/${query}`);
        const data = await res.json();
        setCountries(data);
      };
      getCountry();
    }
  }, [query]);

  const handleSelect = (item: string) => {
    setSelectedRegion(() => item);
  };

  let regions: any = [
    { id: 1, value: "Africa" },
    { id: 2, value: "America" },
    { id: 3, value: "Asia" },
    { id: 4, value: "Europe" },
    { id: 5, value: "Oceania" },
  ];

  let filtered =
    selectedRegion === "Africa"
      ? countries?.filter((country) => country.region === "Africa")
      : selectedRegion === "America"
      ? countries?.filter((country) => country.region === "Americas")
      : selectedRegion === "Asia"
      ? countries?.filter((country) => country.region === "Asia")
      : selectedRegion === "Europe"
      ? countries?.filter((country) => country.region === "Europe")
      : selectedRegion === "Oceania"
      ? countries?.filter((country) => country.region === "Oceania")
      : countries;
  return (
    <>
      <Header
        toggleTheme={lightTheme}
        input={input}
        setInput={setInput}
        regions={regions}
        onSelect={handleSelect}
      />
      <div className="px-12 space-y-10 md:grid sm:grid-cols-2 sm:gap-10 sm:space-y-0 lg:grid-cols-4">
        {filtered?.map((country, index) => (
          <div
            key={index}
            onClick={() =>
              router.push({
                pathname: "/countries/[countrytld]",
                query: { countrytld: country.alpha2Code },
              })
            }
            className={` cursor-pointer ${
              !lightTheme ? "bg-[#2b3945]" : "bg-white"
            } rounded-md`}
          >
            <img
              className="h-[12rem] w-[100%] rounded-t-md"
              src={country.flags.png}
            />
            <div className="py-6 space-y-4 px-6">
              <h2
                className={`${
                  !lightTheme ? "text-white" : "text-[#111517]"
                } font-extrabold`}
              >
                {country.name}
              </h2>
              <div className="pb-3">
                <h3
                  className={`${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  } font-semibold`}
                >
                  Population:{" "}
                  <span className="font-thin opacity-70">
                    {country.population}
                  </span>
                </h3>
                <h3
                  className={`${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  } font-semibold`}
                >
                  Region:{" "}
                  <span className="font-thin opacity-70">{country.region}</span>
                </h3>
                <h3
                  className={`${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  } font-semibold`}
                >
                  Capital:{" "}
                  <span className="font-thin opacity-70">
                    {country.capital}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Countries;
