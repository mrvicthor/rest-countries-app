import { useContext } from "react";
import { ThemeContext } from "../../components/Layout";
import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Border } from "../../components";

const DetailsPage = ({ country }: { country: any }) => {
  const { lightTheme } = useContext(ThemeContext);

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    borders,
    nativeName,
    currencies,
    languages,
  } = country;

  let lastLang: any = languages[languages.length - 1];
  const closeBorders = borders?.slice(0, 3);

  return (
    <>
      <section
        className={`${
          !lightTheme ? "bg-[#202c37]" : "bg-[#fafafa]"
        } h-[100%] pb-12 pt-12 px-8 sm:h-screen md:px-12 `}
      >
        <Link href="/">
          <a
            className={`${
              !lightTheme
                ? "bg-[#2b3945] text-white"
                : "bg-white text-[#111517]"
            } flex items-center gap-3 px-5 py-2 w-[100px] cursor-pointer hover:opacity-60  rounded`}
          >
            <HiOutlineArrowNarrowLeft /> Back
          </a>
        </Link>

        <article className="mt-12 md:grid md:grid-cols-2 md:gap-20 lg:mx-auto ">
          <div className="">
            <img
              className="h-[18rem] w-[100%] rounded-t-md md:rounded-none md:h-[22rem]"
              src={flags.png}
            />
          </div>

          <div className="space-y-6 pt-12 sm:pt-0 md:space-y-4">
            <h2
              className={`font-semibold ${
                !lightTheme ? "text-white" : "text-[#111517]"
              } text-lg sm:mt-8`}
            >
              {name}
            </h2>
            <div className={`md:flex md:justify-between`}>
              <div className="space-y-4">
                <p
                  className={`font-normal ${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  }`}
                >
                  Native Name:{" "}
                  <span
                    className={`font-light ${
                      !lightTheme ? "text-white" : "text-[#111517]"
                    } opacity-70`}
                  >
                    {nativeName}
                  </span>
                </p>
                <p
                  className={`font-normal ${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  }`}
                >
                  Population:{" "}
                  <span
                    className={`font-light ${
                      !lightTheme ? "text-white" : "text-[#111517]"
                    } opacity-70`}
                  >
                    {population}
                  </span>
                </p>
                <p
                  className={`font-normal ${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  }`}
                >
                  Region:{" "}
                  <span
                    className={`font-light ${
                      !lightTheme ? "text-white" : "text-[#111517]"
                    } opacity-70`}
                  >
                    {region}
                  </span>
                </p>
                <p
                  className={`font-normal ${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  }`}
                >
                  Sub Region:{" "}
                  <span
                    className={`font-light ${
                      !lightTheme ? "text-white" : "text-[#111517]"
                    } opacity-70`}
                  >
                    {subregion}
                  </span>
                </p>
                <p
                  className={`font-normal ${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  }`}
                >
                  Capital:{" "}
                  <span
                    className={`font-light ${
                      !lightTheme ? "text-white" : "text-[#111517]"
                    } opacity-70`}
                  >
                    {capital}
                  </span>
                </p>
              </div>
              <div className="space-y-4 ">
                <p
                  className={`font-normal ${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  }`}
                >
                  Top Level Domain:{" "}
                  <span
                    className={`font-light ${
                      !lightTheme ? "text-white" : "text-[#111517]"
                    } opacity-70`}
                  >
                    {topLevelDomain}
                  </span>
                </p>
                <p
                  className={`font-normal ${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  }`}
                >
                  Currencies:{" "}
                  <span
                    className={`font-light ${
                      !lightTheme ? "text-white" : "text-[#111517]"
                    } opacity-70`}
                  >
                    {currencies && currencies[0].name}
                  </span>
                </p>
                <p
                  className={`font-normal ${
                    !lightTheme ? "text-white" : "text-[#111517]"
                  }`}
                >
                  Languages:{" "}
                  {languages?.map((language: any, index: number) => (
                    <span
                      key={index}
                      className={`font-light ${
                        !lightTheme ? "text-white" : "text-[#111517]"
                      } px-1 opacity-70`}
                    >
                      {lastLang.name === language.name
                        ? language.name
                        : language.name + ","}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-1">
              <h3
                className={`font-light ${
                  !lightTheme ? "text-white" : "text-[#111517]"
                } font-semibold md:pt-4`}
              >
                Border Countries:
              </h3>
              <ul className={` flex gap-3 pt-4 overflow-hidden`}>
                {closeBorders?.map((b: any, index: number) => (
                  <Border border={b} key={index} />
                ))}
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const results = await res.json();

  return {
    paths: results?.map((country: any) => {
      return { params: { id: String(country.alpha2Code) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`https://restcountries.com/v2/alpha/${params.id}`);

  const country = await res.json();

  return {
    props: { country },
  };
}
export default DetailsPage;
