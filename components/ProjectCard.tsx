// import modules from library
import React, { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import modules from local

type projectCardProps = {};

const ProjectCard: FunctionComponent<projectCardProps> = ({}) => {
  const [isCardHover, setIsCardHover] = React.useState(false);
  const isMobile = useMediaQuery({ maxWidth: 900 });

  const viewWebsite = () => {
    window.open("https://vietchudep.lamviectot.edu.vn/");
  };

  return (
    <div className="flex flex-col gap-8">
      <div
        onMouseEnter={() => setIsCardHover(true)}
        onMouseLeave={() => setIsCardHover(false)}
        style={{ paddingTop: "75%" }}
        className="w-full relative bg-[url('/images/projects/vietchudep.png')] bg-cover bg-no-repeat bg-center rounded-md shadow-lg hover:shadow-2xl transition duration-500"
      >
        {isCardHover && (
          <div className="bg-transparent hover:bg-slate-800 hover:transition-all hover:duration-500 ease-in-out opacity-90 rounded-lg absolute flex items-center justify-center top-0 left-0 w-full h-full ">
            <div className="relative group">
              <p
                onClick={viewWebsite}
                className="text-sky-200 pp-thin text-md cursor-pointer"
              >
                View website <FontAwesomeIcon icon={faEye} />
              </p>
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-sky-200 group-hover:w-full group-hover:transition-all group-hover:duration-500"></span>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <p className="pp-medium text-slate-700 dark:text-slate-300 uppercase md:text-md text-sm">
          website vietchudep{" "}
          {isMobile && (
            <span>
              -{" "}
              <span
                onClick={viewWebsite}
                className="pp-medium capitalize text-sky-700 dark:text-sky-400 cursor-pointer"
              >
                View website
              </span>
            </span>
          )}
        </p>
        <p className="pp-thin text-slate-500 dark:text-slate-200 text-sm">
          Company&apos;s project <br />
          Made for IDP and HDDTW. using Technologies such as ReactJs
          (create-react-app) for Front-end and NodeJs, ExpressJs with Sequelize
          for the backend and MySql for the DB.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
