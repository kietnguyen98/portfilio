import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ProfileIntro from "../components/ProfileIntro";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";

const Home: NextPage = () => {
  // keep every components which rendered after mounted to match the server side render
  const [isMounted, setIsMounted] = React.useState(false);
  const [isRefNow, setIsRefNow] = React.useState("");

  React.useEffect(() => {
    setIsMounted(true);

    const checkRefNow = () => {
      if (window && aboutMeRef?.current && experienceRef?.current) {
        const aboutMeOffset =
          aboutMeRef?.current?.getBoundingClientRect().top +
          window.pageYOffset +
          -64;
        const experienceOffset =
          experienceRef?.current?.getBoundingClientRect().top +
          window.pageYOffset +
          -64;
        if (
          window.pageYOffset > aboutMeOffset &&
          window.pageYOffset &&
          experienceOffset
        ) {
          setIsRefNow("aboutMe");
        }
      }
    };
    document.addEventListener("scroll", checkRefNow);
    return () => {
      document.removeEventListener("scroll", checkRefNow);
    };
  }, []);

  // scrolling to Top
  const toTopScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // scrolling about me section
  const aboutMeRef = React.useRef<HTMLInputElement>(null);
  const aboutMeScroll = () => {
    if (aboutMeRef?.current) {
      const y =
        aboutMeRef?.current?.getBoundingClientRect().top +
        window.pageYOffset +
        -64 -
        20;
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

  // scrolling skills section
  const skillsRef = React.useRef<HTMLInputElement>(null);
  const skillsScroll = () => {
    if (skillsRef?.current) {
      const y =
        skillsRef?.current?.getBoundingClientRect().top +
        window.pageYOffset +
        -64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // scrolling Contact section
  const contactRef = React.useRef<HTMLInputElement>(null);
  const contactScroll = () => {
    if (contactRef?.current) {
      const y =
        contactRef?.current?.getBoundingClientRect().top +
        window.pageYOffset +
        -64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [isDiscoverd, setIsDiscovered] = React.useState(false);

  const userDiscoverd = () => {
    if (!isDiscoverd) {
      setIsDiscovered(true);
    }
    if (isDiscoverd) {
      aboutMeScroll();
    } else {
      setTimeout(aboutMeScroll, 300);
    }
  };

  const userUnDiscoverd = () => {
    toTopScroll();
    if (isDiscoverd) {
      setTimeout(() => {
        setIsDiscovered(false);
      }, 300);
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
            isRefNow={isRefNow}
            aboutMeScroll={aboutMeScroll}
            experienceScroll={experienceScroll}
            skillsScroll={skillsScroll}
            contactScroll={contactScroll}
          />
          <ProfileIntro
            userDiscoverd={userDiscoverd}
            userUnDiscoverd={userUnDiscoverd}
            isDiscoverd={isDiscoverd}
          />
          {isDiscoverd && (
            <React.Fragment>
              <AboutMe aboutMeRef={aboutMeRef} />
              <Experience experienceRef={experienceRef} />
              <Skills skillsRef={skillsRef} />
              <ContactMe contactRef={contactRef} />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
