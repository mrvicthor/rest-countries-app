import { useContext } from "react";
import { Loader, NotFound } from ".././index";
import useAutocomplete from "../useAutocomplete";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ThemeContext } from "./../Layout";

type CountriesProp = {
  input: string;
  region: string;
};

const Countries = ({ input, region }: CountriesProp) => {
  const { lightTheme, countries, error, loading } = useContext(ThemeContext);
  const query = useAutocomplete(input);
  const router = useRouter();

  let allCountries = countries;
  console.log(allCountries);
  if (query) {
    allCountries = allCountries.filter((country) =>
      country.name.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  if (input != "" && allCountries?.length == 0) {
    return <NotFound />;
  }

  if (region) {
    allCountries = allCountries.filter((country) => country.region === region);
  }

  return (
    <div className="px-12 space-y-10 md:grid sm:grid-cols-2 sm:gap-10 gap-4 sm:space-y-0 lg:grid-cols-4">
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

        {allCountries?.map((country, index) => (
          <div
            key={index}
            onClick={() =>
              router.push({
                pathname: "/country/[countrytld]",
                query: { countrytld: country.alpha2Code },
              })
            }
            className={` cursor-pointer ${
              !lightTheme ? "bg-[#2b3945]" : "bg-white"
            } rounded-md hover:scale-[1.1] duration-700 ease-in-out`}
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
      </>
    </div>
  );
};

export default Countries;
