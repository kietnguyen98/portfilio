import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import ProfileIntro from "../components/ProfileIntro";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import FindMe from "../components/FindMe";
import GoUpButton from "../components/GoUpButton";

const Home: NextPage = () => {
  // keep every components which rendered after mounted to match the server side render
  const [isMounted, setIsMounted] = React.useState(false);
  const [isRefNow, setIsRefNow] = React.useState("");
  const [isGoUp, setIsGoUp] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);

    const checkGoUp = () => {
      const viewHeight = window.pageYOffset - 64;
      if (viewHeight > 100) {
        setIsGoUp(true);
      } else {
        setIsGoUp(false);
      }
    };
    document.addEventListener("scroll", checkGoUp);

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
      document.removeEventListener("scroll", checkGoUp);
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
    <div className="min-h-screen">
      <Head>
        <title>Kiet&apos;s Portfilio</title>
        <meta name="kiet Nguyen portfilio" content="This is My Portfilio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tiger.png" />
      </Head>
      {isMounted && (
        <div className="block ml-auto mr-auto max-w-screen-2xl relative">
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
              <AboutMe aboutMeRef={aboutMeRef} contactScroll={contactScroll} />
              <Experience experienceRef={experienceRef} />
              <FindMe contactScroll={contactScroll} />
              <Skills skillsRef={skillsRef} />
              <ContactMe contactRef={contactRef} />
              <GoUpButton isShow={isGoUp} toTopScroll={toTopScroll} />
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
