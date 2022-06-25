// import modules from library
import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { AnimationOnScroll } from "react-animation-on-scroll";

// import modules from local

type companyCardProps = {
  position: string;
  companyName: string;
  duration: string;
  description: string;
};

const CompanyCard: FunctionComponent<companyCardProps> = ({
  position,
  companyName,
  duration,
  description,
}) => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" duration={1.5}>
      <div className="w-full flex gap-2">
        <div className="w-8 h-auto flex justify-center items-center">
          <div className="h-4 w-4 flex justify-center items-center rounded-full border-solid border-2 border-sky-300 shadow-sky-300 shadow-2xl">
            <div className="h-2 w-2 bg-sky-400 rounded-full"></div>
          </div>
        </div>
        <div className="w-full">
          <p className="pp-medium text-md text-slate-700 dark:text-slate-200">
            {position}
          </p>
          <p className="pp-thin text-sm text-slate-500 dark:text-slate-300">
            <FontAwesomeIcon icon={faCalendar} fixedWidth /> {duration}
          </p>
          <p className="pp-thin text-sm text-sky-500 dark:text-sky-400">
            {" "}
            <FontAwesomeIcon icon={faLocationDot} fixedWidth /> {companyName}.
          </p>
          <p className="pp-thin text-sm text-slate-500 dark:text-slate-300">
            {description}.
          </p>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default CompanyCard;
