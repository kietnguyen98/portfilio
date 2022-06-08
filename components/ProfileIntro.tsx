// import modules from library
import React, { FunctionComponent } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

// import modules from local

type profileIntroProps = {
  userDiscoverd: any;
};

const ProfileIntro: FunctionComponent<profileIntroProps> = ({
  userDiscoverd,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  return (
    <React.Fragment>
      {isMobile ? (
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-100 dark:from-stone-700 transition duration-300 via-sky-100 dark:via-neutral-700 to-blue-100 dark:to-zinc-700 md:pt-24 sm:pt-16 pt-16 pb-8">
            <div className="grid grid-rows-2 grid-flow-col md:gap-10 sm:gap-4 gap-0 items-center justify-center">
              <div className="flex justify-center h-fit">
                <div className="w-fit p-2 rounded-full bg-sky-700 border-solid border-3 border-slate-50 shadow-2xl">
                  <div className="md:h-64 sm:h-56 h-48 md:w-64 sm:w-56 w-48 bg-[url('/images/profile/Avatar.jpg')] bg-cover bg-no-repeat bg-center rounded-full border-solid border-2 border-slate-200"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start justify-center">
                  <div className="md:px-20 sm:px-10 px-5">
                    <p className="ds-bold md:text-6xl sm:text-6xl text-4xl text-sky-700 mb-4">
                      Hello !,
                    </p>
                    <p className="ds-bold md:text-4xl sm:text-4xl text-2xl text-slate-800 dark:text-slate-100 mb-2">
                      I&apos;m Kiet. My full name is Nguyen Han Manh Kiet.
                    </p>
                    <p className="ds-bold md:text-2xl sm:text-2xl text-xl text-slate-800 dark:text-slate-100 mb-2">
                      Currently I am a{" "}
                      <span className="text-orange-600">
                        Front-end developer
                      </span>
                      . My main job is to create websites with the best UI / UX
                      and user-friendly, helping users get the best experience
                      during use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-end w-full md:mt-20 sm:mt-16 mt-8">
              <button
                onClick={userDiscoverd}
                className="md:py-2 sm:py-2 py-2 md:px-4 sm:px-4 px-4 text-slate-800 dark:text-slate-50 border-solid border-1 border-slate-800 dark:border-slate-50 dark:hover:text-slate-800 hover:border-none cursor-pointer rounded-lg bg-inherit hover:bg-slate-50 duration-300"
              >
                <p className="pp-thin md:text-lg sm:text-lg text-sm">
                  DISCOVER NOW
                </p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen grid grid-cols-3 gap-10 items-center justify-center bg-gradient-to-r from-cyan-100 dark:from-stone-700 via-sky-100 dark:via-neutral-700 to-blue-100 dark:to-zinc-700 pt-32 pb-4 xl:px-40 lg:px-20 md:px-20 sm:px-10">
          <div className="flex items-start justify-end col-span-2">
            <div className="">
              <p className="ds-bold text-8xl text-sky-700 mb-4">Hello !,</p>
              <p className="ds-bold text-4xl text-slate-800 dark:text-slate-100 mb-2">
                I&apos;m Kiet. My full name is Nguyen Han Manh Kiet.
              </p>
              <p className="ds-bold text-2xl text-slate-800 dark:text-slate-100 mb-2">
                Currently I am a{" "}
                <span className="text-orange-600">Front-end developer</span>. My
                main job is to create websites with the best UI / UX and
                user-friendly, helping users get the best experience during use.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end col-span-1">
            <div className="p-2 rounded-full bg-sky-700 border-solid border-3 border-slate-50 shadow-2xl">
              <div className="xl:h-80 lg:h-64 md:h-56 xl:w-80 lg:w-64 md:w-56 bg-[url('/images/profile/Avatar.jpg')] bg-cover bg-no-repeat bg-center rounded-full border-solid border-2 border-slate-200"></div>
            </div>
          </div>
          <div className="flex justify-center items-end w-full col-span-3">
            <button
              onClick={userDiscoverd}
              className="py-2 px-4 text-slate-800 dark:text-slate-50 border-solid border-1 border-slate-800 dark:border-slate-50 dark:hover:text-slate-800 hover:border-none cursor-pointer rounded-lg bg-inherit hover:bg-slate-50 duration-300"
            >
              <p className="pp-thin text-md">DISCOVER NOW</p>
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProfileIntro;
