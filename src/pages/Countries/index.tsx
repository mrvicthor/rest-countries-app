import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import { Country } from "./../../model";
import useAutocomplete from "./../../components/useAutocomplete";

interface Props {
  toggleTheme: boolean;
  // data: Country[];
}

const Countries = ({ toggleTheme }: Props) => {
  const [countries, setCountries] = useState<any[]>();
  const [input, setInput] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const query = useAutocomplete(input);

  useEffect(() => {
    if (!input) {
      const fetchData = async () => {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
        console.log(data);
      };
      fetchData();
    } else {
      const getCountry = async () => {
        const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
        const data = await res.json();
        setCountries(data);
        console.log(data);
      };
      getCountry();
    }
  }, [query]);

  // useEffect(() => {}, []);

  return (
    <>
      <Header toggleTheme={toggleTheme} input={input} setInput={setInput} />
      <div className="px-12 space-y-10 md:grid sm:grid-cols-2 sm:gap-10 sm:space-y-0 lg:grid-cols-4">
        {countries?.map((country) => (
          <div
            key={country.tId}
            className={`${
              toggleTheme ? "bg-[#2b3945]" : "bg-white"
            } rounded-md`}
          >
            <img
              className="h-[12rem] w-[100%] rounded-t-md"
              src={country.flags.png}
            />
            <div className="py-6 space-y-4 px-6">
              <h2
                className={`${
                  toggleTheme ? "text-white" : "text-[#111517]"
                } font-extrabold`}
              >
                {country.name.common}
              </h2>
              <div className="pb-3">
                <h3
                  className={`${
                    toggleTheme ? "text-white" : "text-[#111517]"
                  } font-semibold`}
                >
                  Population:{" "}
                  <span className="font-thin">{country.population}</span>
                </h3>
                <h3
                  className={`${
                    toggleTheme ? "text-white" : "text-[#111517]"
                  } font-semibold`}
                >
                  Region: <span className="font-thin">{country.region}</span>
                </h3>
                <h3
                  className={`${
                    toggleTheme ? "text-white" : "text-[#111517]"
                  } font-semibold`}
                >
                  Capital: <span className="font-thin">{country.capital}</span>
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: {
//       data,
//     },
//   };
// };
