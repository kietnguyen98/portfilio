import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>Kiet Nguyen</title>
        <meta name="kiet Nguyen portfilio" content="This is My Portfilio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
