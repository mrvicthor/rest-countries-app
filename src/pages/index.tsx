import type { NextPage } from "next";
import Head from "next/head";
import Countries from "../components/Countries";
import { useContext } from "react";
import { ThemeContext } from "./../components/Layout";

const Home: NextPage = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>REST Countries API</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${
          !lightTheme ? "bg-[#202c37]" : "bg-[#fafafa]"
        } min-h-[88.7vh] pb-12`}
      >
        <Countries />
      </main>
    </>
  );
};

export default Home;
