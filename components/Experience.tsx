// import modules from library
import React, { FunctionComponent } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

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
      className="w-full h-full transition-all duration-300 bg-gradient-to-r from-cyan-100 dark:from-stone-700 via-sky-100 dark:via-neutral-700 to-indigo-100 dark:to-zinc-700 pt-16 pb-16 xl:px-24 lg:px-20 md:px-16 sm:px-8 px-4"
    >
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-center">
          <div className="w-fit">
            <p className="pp-medium text-xl text-slate-700 dark:text-slate-100 uppercase text-center tracking-wider">
              education & working experience
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
          <p className="pp-thin text-sm text-slate-500 dark:text-slate-300 text-center">
            Through studying at university and a number of projects of the
            company, I have accumulated a lot of experience and knowledge in
            some programming languages, frameworks or other software.
          </p>
        </div>
        <div className="w-full mt-8 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8">
          <div className="h-full flex gap-2">
            <AnimationOnScroll animateIn="animate__fadeInLeftBig" offset={0}>
              <div className="h-full border-solid border-l-4 border-sky-400 flex flex-col">
                <p className="mt-0 mb-auto ml-2 pp-thin text-sm upppercase text-sky-500 dark:text-sky-300">
                  2017
                </p>
                <p className="mt-auto mb-0 ml-2 pp-thin text-sm upppercase text-sky-500 dark:text-sky-300">
                  Now
                </p>
              </div>
            </AnimationOnScroll>
            <div className="py-8 flex flex-col gap-8">
              <CompanyCard
                position="College Student"
                companyName="Ho Chi Minh University Of Technology (BKU)"
                duration="August 2017 - November 2021"
                description="My main subject is Computer Science"
              />
              <CompanyCard
                position="Front-end Developer"
                companyName="MLTechSoft Co"
                duration="May 2021 - May 2022"
                description="The company is a startup in the information technology industry that provides a digital transformation platform for manufacturing businesses"
              />
              <CompanyCard
                position="Freelancer"
                companyName="My Home"
                duration="May 2022 - now"
                description="finding a new job"
              />
            </div>
          </div>
        </div>
        <div className="md:mt-8 sm:mt-4 mt-4 xl:px-24 lg:px-20 md:px-16 sm:px-12 px-8 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-16 items-start justify-center">
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
