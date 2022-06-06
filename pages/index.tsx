import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kiet Nguyen</title>
        <meta name="kiet Nguyen portfilio" content="This is My Portfilio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black text-red-600 font-semibold">my portfilio</div>
    </div>
  );
};

export default Home;
