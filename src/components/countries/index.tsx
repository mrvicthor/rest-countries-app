import { useContext } from "react";
import { Loader, NotFound } from ".././index";
import useAutocomplete from "../useAutocomplete";
import { useRouter } from "next/router";
import { ThemeContext } from "./../../context/DataContext";
import { useDarkMode } from "usehooks-ts";
import Image from "next/image";

type CountriesProp = {
  input: string;
  region: string;
};

const Countries = ({ input, region }: CountriesProp) => {
  const { isDarkMode } = useDarkMode();
  const { countries, error, loading } = useContext(ThemeContext);

  const query = useAutocomplete(input);
  const router = useRouter();

  const filteredCountries = query
    ? countries.filter((country) =>
        country.name.common.toLowerCase().startsWith(query.toLowerCase())
      )
    : countries;

  if (input != "" && filteredCountries?.length == 0) {
    return <NotFound />;
  }

  const sortedCountries = region
    ? filteredCountries.filter((country) => country.region === region)
    : filteredCountries;

  return (
    <div className="px-3 lg:px-4 lg:max-w-6xl mx-auto gap-6 grid md:grid-cols-2 md:gap-10 lg:grid-cols-4">
      <>
        {loading && (
          <div className="text-center">
            <Loader />
          </div>
        )}
        {error && (
          <p className="text-red-700 md:text-lg">
            Oops!! Country does not exist, please double check
          </p>
        )}

        {sortedCountries?.map((country, index) => (
          <div
            key={index}
            onClick={() =>
              router.push({
                pathname: "/country/[countrytld]",
                query: { countrytld: country.name.common },
              })
            }
            className={` cursor-pointer ${
              !isDarkMode ? "bg-[#2b3945]" : "bg-white"
            } rounded-md hover:scale-[1.1] duration-700 ease-in-out myShadow`}
          >
            <div className="relative">
              <Image
                alt={`${country.name.common} flag`}
                width={800}
                height={500}
                className="rounded-t-md absolute object-cover"
                src={country.flags.png}
              />
            </div>
            <div className="py-6 space-y-4 px-6">
              <h2
                className={`${
                  !isDarkMode ? "text-white" : "text-[#111517]"
                } font-extrabold`}
              >
                {country.name.common}
              </h2>
              <div className="pb-3">
                <h3
                  className={`${
                    !isDarkMode ? "text-white" : "text-[#111517]"
                  } font-semibold`}
                >
                  Population:{" "}
                  <span className="font-thin opacity-70">
                    {country.population}
                  </span>
                </h3>
                <h3
                  className={`${
                    !isDarkMode ? "text-white" : "text-[#111517]"
                  } font-semibold`}
                >
                  Region:{" "}
                  <span className="font-thin opacity-70">{country.region}</span>
                </h3>
                <h3
                  className={`${
                    !isDarkMode ? "text-white" : "text-[#111517]"
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
      </>
    </div>
  );
};

export default Countries;
