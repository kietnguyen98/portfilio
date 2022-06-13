import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ProfileIntro from "../components/ProfileIntro";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";

const Home: NextPage = () => {
  // keep every components which rendered after mounted to match the server side render
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // scrolling about me section
  const aboutMeRef = React.useRef<HTMLInputElement>(null);
  const aboutMeScroll = () => {
    if (aboutMeRef?.current) {
      const y =
        aboutMeRef?.current?.getBoundingClientRect().top +
        window.pageYOffset +
        -64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // scrolling experience section
  const experienceRef = React.useRef<HTMLInputElement>(null);
  const experienceScroll = () => {
    if (experienceRef?.current) {
      const y =
        experienceRef?.current?.getBoundingClientRect().top +
        window.pageYOffset +
        -64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [isDiscoverd, setIsDiscovered] = React.useState(false);

  const userDiscoverd = () => {
    setIsDiscovered(true);
    if (isDiscoverd) {
      aboutMeScroll();
    } else {
      setTimeout(aboutMeScroll, 300);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-800">
      <Head>
        <title>Kiet&apos;s Portfilio</title>
        <meta name="kiet Nguyen portfilio" content="This is My Portfilio" />
        <link rel="icon" href="/tiger.png" />
      </Head>
      {isMounted && (
        <React.Fragment>
          <Navbar
            aboutMeScroll={aboutMeScroll}
            experienceScroll={experienceScroll}
          />
          <ProfileIntro userDiscoverd={userDiscoverd} />
          {isDiscoverd && (
            <React.Fragment>
              <AboutMe aboutMeRef={aboutMeRef} />
              <Experience experienceRef={experienceRef} />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
