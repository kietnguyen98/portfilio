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
      <div className="w-full">
        <p className="pp-medium text-md text-slate-700">{position}</p>
        <p className="pp-thin text-sm text-slate-400">
          <FontAwesomeIcon icon={faCalendar} fixedWidth /> {duration}
        </p>
        <p className="pp-thin text-sm text-sky-500">
          {" "}
          <FontAwesomeIcon icon={faLocationDot} fixedWidth /> {companyName}.
        </p>
        <p className="pp-thin text-sm text-slate-600">{description}.</p>
      </div>
    </AnimationOnScroll>
  );
};

export default CompanyCard;
