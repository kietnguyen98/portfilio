// import modules from library
import React, { FunctionComponent } from "react";

// import modules from local
import ProjectCard from "./ProjectCard";
import projectData from "../data/project-data.json";
import CompanyCard from "./CompanyCard";

type experienceProps = {
  experienceRef: any;
};

const Experience: FunctionComponent<experienceProps> = ({ experienceRef }) => {
  return (
    <div
      ref={experienceRef}
      className="w-full h-full bg-slate-50 dark:bg-neutral-800 pt-16 pb-16 xl:px-24 lg:px-20 md:px-16 sm:px-8 px-4"
    >
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-center">
          <div className="w-fit">
            <p className="pp-medium text-xl text-slate-700 dark:text-slate-300 uppercase text-center">
              working experience
            </p>
            <div className="w-full flex justify-center mt-2">
              <div
                style={{ width: "60%" }}
                className="bg-sky-400 h-1 rounded-md"
              ></div>
            </div>
          </div>
        </div>
        <div className="w-full xl:px-40 lg:px-32 md:px-32 sm:px-24">
          <p className="pp-thin text-sm text-slate-500 dark:text-slate-200 text-center">
            During my work, through a number of projects of the company, I have
            accumulated a lot of experience and knowledge in some programming
            languages, frameworks or other software.
          </p>
        </div>
        <div className="w-full mt-8 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8">
          <CompanyCard
            position="Front-end Developer"
            companyName="MLTechSoft Co"
            duration="May 2021 - May 2022"
            description="The company is a startup in the information technology industry that provides a digital transformation platform for manufacturing businesses"
          />
        </div>
        <div className="md:mt-16 sm:mt-12 mt-8 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-16 items-start justify-center">
          {projectData?.length > 0 &&
            projectData.map((data, index) => (
              <div key={index + 1}>
                <ProjectCard data={data} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
