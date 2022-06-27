// import modules from library
import React, { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";
import { AnimationOnScroll } from "react-animation-on-scroll";

// import modules from local
type findMeProps = {
  contactScroll: any;
};

const FindMe: FunctionComponent<findMeProps> = ({ contactScroll }) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <div className="w-full md:h-56 h-48 bg-blue-600/60 flex items-end sm:gap-8 gap-0">
      <div className="md:h-40 md:w-40 h-32 w-32 bg-[url('/images/icons/pepe.webp')] bg-cover bg-no-repeat"></div>
      {isMobile ? (
        <div className="flex justify-center w-full">
          <div className="w-full md:h-56 h-48 flex items-start justify-center flex-col gap-8 px-8">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce
              duration={1.2}
            >
              <p className="pp-thin text-slate-50 lg:text-3xl md:text-2xl text-lg">
                Hey, I&apos;m now <span className="pp-bold">Available</span> for
                Job !{" "}
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce
              duration={1.2}
            >
              <button
                onClick={contactScroll}
                className="md:p-4 p-2 bg-slate-50 hover:scale-125 text-blue-600/70 pp-thin animation-all duration-500 text-sm"
              >
                Contact me
              </button>
            </AnimationOnScroll>
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full">
          <div className="w-full md:h-56 h-48 flex items-center justify-center lg:gap-24 md:gap-20 px-8">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce
              duration={1.2}
            >
              <p className="pp-thin text-slate-50 lg:text-3xl md:text-2xl text-md">
                Hey, I&apos;m now <span className="pp-bold">Available</span> for
                Job !{" "}
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce
              duration={1.2}
            >
              <button
                onClick={contactScroll}
                className="md:p-4 p-2 bg-slate-50 hover:scale-125 text-blue-600/70 pp-thin animation-all duration-500 text-sm"
              >
                Contact me
              </button>
            </AnimationOnScroll>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindMe;
