// import modules from library
import React, { FunctionComponent } from "react";

// import modules from local
import ProjectCard from "./ProjectCard";

type experienceProps = {
  experienceRef: any;
};

const Experience: FunctionComponent<experienceProps> = ({ experienceRef }) => {
  return (
    <div
      ref={experienceRef}
      className="w-full h-full bg-slate-50 dark:bg-neutral-800 pt-12 pb-8 xl:px-24 lg:px-20 md:px-16 sm:px-8 px-4"
    >
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-center">
          <div className="w-fit">
            <p className="pp-medium text-xl text-slate-700 dark:text-slate-300 uppercase text-center">
              working experience
            </p>
            <div className="w-full flex justify-center mt-2">
              <div style={{ width: "60%" }} className="bg-sky-400 h-1"></div>
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
        <div className="md:mt-20 sm:mt-16 mt-12 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-12 items-center justify-center">
          <div>
            <ProjectCard />
          </div>
          <div>
            <ProjectCard />
          </div>
          <div>
            <ProjectCard />
          </div>
          <div>
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
