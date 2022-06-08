// import modules from library
import React, { FunctionComponent } from "react";

// import modules from local

type experienceProps = {};

const Experience: FunctionComponent<experienceProps> = ({}) => {
  return (
    <div className="w-full h-full bg-slate-50 dark:bg-neutral-800 pt-12 pb-8 xl:px-24 lg:px-20 md:px-16 sm:px-8 px-4">
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-center">
          <div className="w-fit">
            <p className="pp-bold text-xl text-slate-800 dark:text-slate-300 uppercase text-center">
              working experience
            </p>
            <div className="w-full flex justify-center mt-2">
              <div style={{ width: "60%" }} className="bg-sky-400 h-0.5"></div>
            </div>
          </div>
        </div>
        <div className="w-full xl:px-40 lg:px-32 md:px-32 sm:px-24">
          <p className="pp-medium text-sm text-slate-500 dark:text-slate-200 text-center">
            During my work, through a number of projects of the company, I have
            accumulated a lot of experience and knowledge in some programming
            languages, frameworks or other software.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
