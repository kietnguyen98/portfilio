// import modules from library
import React, { FunctionComponent } from "react";

// import modules from local
import SkillCard from "./SkillCard";
import skillsData from "../data/skills-data.json";

type skillsProps = {
  skillsRef: any;
};

const Skills: FunctionComponent<skillsProps> = ({ skillsRef }) => {
  const [isCardMounted, setIsCardMounted] = React.useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (listCardRef?.current) {
      const elementsPosition =
        listCardRef.current?.getBoundingClientRect().top +
        window.pageYOffset -
        64;

      if (position >= elementsPosition) {
        setIsCardMounted(true);
      } else {
        setIsCardMounted(false);
      }
    }
  };

  const listCardRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={skillsRef}>
      <div
        ref={listCardRef}
        className="w-full flex justify-center items-center bg-gradient-to-r from-cyan-100 dark:from-stone-700 transition duration-300 via-sky-100 dark:via-neutral-700 to-blue-100 dark:to-zinc-700 md:pt-24 sm:pt-16 pt-16 pb-16"
      >
        <div className="w-full flex flex-col md:gap-20 sm:gap-16 gap-12">
          <div className="w-full flex justify-center">
            <div className="w-fit">
              <p className="pp-medium text-xl text-slate-700 dark:text-slate-300 uppercase text-center">
                My Skills
              </p>
              <div className="w-full flex justify-center mt-2">
                <div
                  style={{ width: "60%" }}
                  className="bg-sky-400 h-1 rounded-md"
                ></div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-16 md:gap-12 gap-8 items-center justify-center w-fit">
              {skillsData?.length > 0 &&
                skillsData.map((skillData, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center justify-center"
                  >
                    <SkillCard
                      skilData={skillData}
                      isCardMounted={isCardMounted}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-fit">
              <p className="pp-thin text-lg text-slate-700 dark:text-slate-200 text-center">
                In addition, I also have some experience in using JavaScript
                libraries like Reactjs, Jquery and other programming languages
                like C++
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;