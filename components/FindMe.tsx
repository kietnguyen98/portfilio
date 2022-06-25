// import modules from library
import React, { FunctionComponent } from "react";

// import modules from local
type findMeProps = {
  contactScroll: any;
};

const FindMe: FunctionComponent<findMeProps> = ({ contactScroll }) => {
  return (
    <div className="w-full md:h-56 h-48 bg-blue-600/60 flex items-end sm:gap-8 gap-0">
      <div className="h-32 w-32 bg-[url('/images/icons/pepe.webp')] bg-cover bg-no-repeat"></div>
      <div className="w-auto h-56 flex items-start justify-center flex-col gap-4 px-8">
        <p className="pp-thin text-slate-50 lg:text-3xl md:text-2xl text-md">
          Hey, I&apos;m now <span className="pp-bold">Available</span> for Job !{" "}
        </p>
        <button
          onClick={contactScroll}
          className="md:p-4 p-2 bg-slate-50 hover:scale-125 text-blue-600/70 pp-thin animation-all duration-500 text-sm"
        >
          Contact me
        </button>
      </div>
    </div>
  );
};

export default FindMe;
