// import modules from library
import React, { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { AnimationOnScroll } from "react-animation-on-scroll";

// import modules from local

type projectCardProps = {
  data: {
    id: number;
    name: string;
    type: string;
    position: string;
    image: string;
    description: string;
    link: string;
  };
};

const ProjectCard: FunctionComponent<projectCardProps> = ({ data }) => {
  const [isCardHover, setIsCardHover] = React.useState(false);
  const isMobile = useMediaQuery({ maxWidth: 900 });

  const viewWebsite = (link: string) => {
    window.open(link);
  };

  return (
    <div className="flex flex-col gap-8">
      <AnimationOnScroll animateIn="animate__rotateInDownLeft">
        <div
          onMouseEnter={() => setIsCardHover(true)}
          onMouseLeave={() => setIsCardHover(false)}
          style={{ paddingTop: "75%", backgroundImage: `url(${data.image})` }}
          className="w-full group relative bg-cover bg-no-repeat bg-center shadow-lg hover:shadow-2xl transition-all duration-500 top-0 hover:-top-4"
        >
          <div className="bg-transparent hover:bg-sky-800 hover:transition-all hover:duration-500 ease-in-out opacity-90 absolute flex items-center justify-center top-0 left-0 w-full h-full ">
            <div className="relative">
              {isCardHover && (
                <p
                  onClick={() => viewWebsite(data.link)}
                  className="text-sky-200 pp-thin text-md cursor-pointer"
                >
                  View website <FontAwesomeIcon icon={faEye} />
                </p>
              )}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-sky-200 group-hover:w-full group-hover:transition-all group-hover:duration-700 rounded-md"></span>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__rotateInUpRight" offset={0}>
        <div className="flex flex-col gap-2">
          <p className="pp-medium text-slate-700 dark:text-slate-300 uppercase md:text-md text-sm">
            website {data.name}{" "}
            {isMobile && (
              <span>
                -{" "}
                <span
                  onClick={() => viewWebsite(data.link)}
                  className="pp-medium capitalize text-sky-700 dark:text-sky-400 cursor-pointer"
                >
                  View website <FontAwesomeIcon icon={faEye} />
                </span>
              </span>
            )}
          </p>
          <p className="pp-medium text-slate-500 dark:text-slate-200 text-sm">
            type:{" "}
            {data.type === "company"
              ? "Company's project"
              : "Personal's project"}
            , role: {data.position}
          </p>
          <p className="pp-thin text-slate-500 dark:text-slate-200 text-sm">
            {data.description}
          </p>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default ProjectCard;
