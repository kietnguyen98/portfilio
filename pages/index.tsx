import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ProfileIntro from "../components/ProfileIntro";

const Home: NextPage = () => {
  // keep every components which rendered after mounted to match the server side render
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-800">
      <Head>
        <title>Kiet&apos;s Portfilio</title>
        <meta name="kiet Nguyen portfilio" content="This is My Portfilio" />
        <link rel="icon" href="/tiger.png" />
      </Head>
      {isMounted && (
        <React.Fragment>
          <Navbar />
          <ProfileIntro />
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
