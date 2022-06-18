// import modules from library
import React, { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";
import { AnimationOnScroll } from "react-animation-on-scroll";

// import moduels from local

type aboutMeProps = {
  aboutMeRef: any;
};

const AboutMe: FunctionComponent<aboutMeProps> = ({ aboutMeRef }) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <React.Fragment>
      {isMobile ? (
        <div
          ref={aboutMeRef}
          className="h-full w-full bg-slate-50 dark:bg-neutral-800 py-10 md:px-20 sm:px-12 px-8 flex items-center justify-center shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <div className="w-fit">
              <p className="pp-medium text-slate-600 dark:text-slate-200 text-md uppercase">
                about me
              </p>
              <div
                style={{ width: "60%" }}
                className="bg-sky-400 h-1 mt-2"
              ></div>
            </div>
            <div className="w-fit">
              <p className="pp-medium text-slate-700 dark:text-slate-300 text-lg uppercase">
                Here is some of my personal details
              </p>
            </div>
            <div className="w-full">
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                duration={1.5}
                animateOnce={true}
              >
                <div className="flex justify-center xl:px-10 lg:px-8 md:px-6 sm:px-4 px-4 pt-2 pb-8">
                  <div
                    style={{
                      width: "100%",
                      paddingTop: `${100}%`,
                    }}
                    className="bg-[url('/images/profile/graduation.png')] bg-cover bg-no-repeat bg-center rounded-2xl border-solid border-6 border-white shadow-xl"
                  ></div>
                </div>
              </AnimationOnScroll>
            </div>
            <div className="w-fit">
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOutOut"
                animateOnce={true}
                offset={50}
                duration={1.5}
              >
                <p className="pp-thin text-slate-500 dark:text-slate-200 text-sm">
                  I started studying at Ho Chi Minh City University of
                  Technology from 2017 to 2022, my major is Computer Science and
                  Engineering. After graduation, I work full-time job at
                  MLTechSoft Co., Ltd Front-end Developer, taking on the role of
                  main developer in the front-end section in many projects of my
                  company.
                </p>
              </AnimationOnScroll>
            </div>
            <div className="w-fit">
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOutOut"
                animateOnce={true}
                offset={50}
                duration={1.5}
              >
                <p className="pp-thin text-slate-500 dark:text-slate-200 text-sm">
                  Currently I am looking for new challenges in new companies
                  with the desire to forge myself in a dynamic and creative
                  environment.
                </p>
              </AnimationOnScroll>
            </div>
            <div className="w-fit">
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOutOut"
                animateOnce={true}
                offset={50}
                duration={1.5}
              >
                <button className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-500 hover:via-sky-500 hover:to-blue-500 transition duration-300 px-6 py-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl">
                  <p className="pp-thin text-slate-100 text-sm">Contact me</p>
                </button>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={aboutMeRef}
          className="h-full w-full bg-slate-50 dark:bg-neutral-800 py-20 xl:px-56 lg:px-36 md:px-24 sm:px-16 px-10 flex items-center justify-center shadow-2xl shadow-slate-900"
        >
          <div className="grid grid-cols-2 xl:gap-20 lg:gap-12 md:gap-10 sm:gap-8 gap-6">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              duration={1.5}
              animateOnce={true}
            >
              <div className="flex justify-center xl:px-10 lg:px-8 md:px-6 sm:px-4 px-4">
                <div
                  style={{
                    width: "100%",
                    paddingTop: `${100}%`,
                  }}
                  className="bg-[url('/images/profile/graduation.png')] bg-cover bg-no-repeat bg-center rounded-2xl border-solid border-6 border-white shadow-2xl"
                ></div>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOutOut"
              animateOnce={true}
              duration={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="flex flex-col gap-4 items-start justify-center h-fit">
                <div className="w-fit">
                  <p className="pp-medium text-slate-600 dark:text-slate-200 text-md uppercase">
                    about me
                  </p>
                  <div
                    style={{ width: "60%" }}
                    className="bg-sky-400 h-1 mt-2"
                  ></div>
                </div>
                <div className="w-fit">
                  <p className="pp-medium text-slate-700 dark:text-slate-300 text-lg uppercase">
                    Here is some of my personal details
                  </p>
                </div>
                <div className="w-fit">
                  <p className="pp-thin text-slate-500 dark:text-slate-200 text-sm">
                    I started studying at Ho Chi Minh City University of
                    Technology from 2017 to 2022, my major is Computer Science
                    and Engineering. After graduation, I work full-time job at
                    MLTechSoft Co., Ltd Front-end Developer, taking on the role
                    of main developer in the front-end section in many projects
                    of my company.
                  </p>
                </div>
                <div className="w-fit">
                  <p className="pp-thin text-slate-500 dark:text-slate-200 text-sm">
                    Currently I am looking for new challenges in new companies
                    with the desire to forge myself in a dynamic and creative
                    environment.
                  </p>
                </div>
                <div className="w-fit">
                  <button className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-500 hover:via-sky-500 hover:to-blue-500 transition duration-300 px-6 py-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl">
                    <p className="pp-thin text-slate-100 text-sm">Contact me</p>
                  </button>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AboutMe;
