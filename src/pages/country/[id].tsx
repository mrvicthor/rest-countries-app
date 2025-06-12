import Link from "next/link";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Border } from "../../components";
import { useDarkMode } from "usehooks-ts";
import Image from "next/image";

const DetailsPage = ({ country }: { country: any }) => {
  const { isDarkMode } = useDarkMode();

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    borders,
    nativeName,
    currencies,
    languages,
  } = country[0];

  const closeBorders = borders?.slice(0, 3);

  return (
    <section className={`${!isDarkMode ? "bg-[#202c37]" : "bg-[#fafafa]"}`}>
      <div className={`selected pb-12 pt-12 lg:px-4 lg:max-w-6xl mx-auto `}>
        <Link href="/">
          <a
            className={`${
              !isDarkMode
                ? "bg-[#2b3945] text-white"
                : "bg-white text-[#111517]"
            } flex items-center gap-3 px-5 py-2 w-[100px] cursor-pointer hover:opacity-60 hover:scale-[1.1] duration-700 ease-in-out rounded`}
          >
            <HiOutlineArrowNarrowLeft /> Back
          </a>
        </Link>

        <article
          className={`${
            !isDarkMode ? " text-white" : " text-[#111517]"
          } mt-12 md:grid md:grid-cols-2 md:gap-20 lg:mx-auto `}
        >
          <div className="country">
            <Image
              alt={` flag`}
              width={500}
              height={380}
              className="h-[18rem] w-[100%] rounded-t-md md:rounded-none md:h-[22rem]"
              src={flags[0]}
            />
          </div>

          <div className="space-y-6 pt-12 sm:pt-0 md:space-y-4">
            <h2 className={`font-semibold  text-lg sm:mt-8`}>{name.common}</h2>
            <div className={`md:flex md:justify-between`}>
              <div className="space-y-4">
                <p className={`font-normal `}>
                  Native Name:{" "}
                  <span className={`font-light opacity-70`}>{nativeName}</span>
                </p>
                <p className={`font-normal `}>
                  Population:{" "}
                  <span className={`font-light  opacity-70`}>{population}</span>
                </p>
                <p className={`font-normal `}>
                  Region:{" "}
                  <span className={`font-light  opacity-70`}>{region}</span>
                </p>
                <p className={`font-normal `}>
                  Sub Region:{" "}
                  <span className={`font-light  opacity-70`}>{subregion}</span>
                </p>
                <p className={`font-normal `}>
                  Capital:{" "}
                  <span className={`font-light  opacity-70`}>{capital}</span>
                </p>
              </div>
              <div className="space-y-4 ">
                <p className={`font-normal`}>
                  Top Level Domain:{" "}
                  <span className={`font-light opacity-70`}>{tld}</span>
                </p>
                <p className={`font-normal `}>
                  Currencies:{" "}
                  <span className={`font-light  opacity-70`}>
                    {currencies && Object.keys(currencies)[0]}
                  </span>
                </p>
                <p className={`font-normal`}>
                  Languages:{" "}
                  <span className={`font-light px-1 opacity-70`}>
                    {Object.values(languages)[0] + ","}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-1">
              <h3 className={`font-light  md:pt-4`}>Border Countries:</h3>
              <ul className={` flex gap-3 pt-4 overflow-hidden`}>
                {closeBorders?.map((b: any, index: number) => (
                  <Border border={b} key={index} isDarkMode={isDarkMode} />
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    `https://restcountries.com/v3.1/independent?status=true`
  );
  const results = await res.json();

  return {
    paths: results?.map((country: any) => {
      return { params: { id: String(country.name.common) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(`https://restcountries.com/v3/name/${params.id}`);

  const country = await res.json();

  return {
    props: { country },
  };
}
export default DetailsPage;
