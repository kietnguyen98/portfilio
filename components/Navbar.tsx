// import modules from library
import React, { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";

// import modules from local
import BackgroundSwitch from "./BackgroundSwitch";
import MenuButton from "./MenuButton";

type NavbarProps = {
  isRefNow: string;
  aboutMeScroll: any;
  experienceScroll: any;
  skillsScroll: any;
  contactScroll: any;
};

const Navbar: FunctionComponent<NavbarProps> = ({
  isRefNow,
  aboutMeScroll,
  experienceScroll,
  skillsScroll,
  contactScroll,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const [navBackground, setNavBackground] = React.useState("bg-transparent");

  React.useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0;
      if (show) {
        setNavBackground("backdrop-blur bg-white/5 shadow-xl");
      } else {
        setNavBackground("bg-transparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuDropdown, setIsMenuDropdown] = React.useState(false);

  return (
    <React.Fragment>
      {isMobile ? (
        <div
          className={
            `w-full fixed z-50 top-0 transition duration-300 ${
              isMenuDropdown ? "h-64" : "h-16"
            } ` + (isMenuDropdown ? "backdrop-blur bg-white/5" : navBackground)
          }
        >
          <div className="w-full h-16 flex md:px-20 sm:px-10 px-5">
            <div className="flex items-center justify-start mr-auto ml-0">
              <MenuButton
                toggleDropdown={() => setIsMenuDropdown(!isMenuDropdown)}
              />
            </div>
            <div className="flex items-center justify-end ml-auto mr-0">
              <BackgroundSwitch />
            </div>
          </div>
          {isMenuDropdown && (
            <div className="w-full h-48 flex flex-col items-center justify-center shadow-xl">
              <div className="flex h-10 items-center justify-start underline-hover-effect">
                <p
                  onClick={() => {
                    setIsMenuDropdown(false);
                    aboutMeScroll();
                  }}
                  className="pp-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max"
                >
                  ABOUT ME
                </p>
              </div>
              <div className="flex h-10 items-center justify-start underline-hover-effect">
                <p
                  onClick={() => {
                    setIsMenuDropdown(false);
                    experienceScroll();
                  }}
                  className="pp-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max"
                >
                  EXPERIENCE
                </p>
              </div>
              <div className="flex h-10 items-center justify-start underline-hover-effect">
                <p
                  onClick={() => {
                    setIsMenuDropdown(false);
                    skillsScroll();
                  }}
                  className="pp-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max"
                >
                  SKILLS
                </p>
              </div>
              <div className="flex h-10 items-center justify-start underline-hover-effect">
                <p
                  onClick={() => {
                    setIsMenuDropdown(false);
                    contactScroll();
                  }}
                  className="pp-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max"
                >
                  CONTACT
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className={
            "w-full fixed z-50 top-0 h-16 flex transition duration-300 items-center " +
            navBackground
          }
        >
          <div className="w-full h-16 flex xl:px-40 lg:px-20 md:px-20 sm:px-10">
            <div className="flex h-16 xl:gap:16 lg:gap-12 md:gap-6 sm:gap-4 ml-0 mr-auto">
              <div className="flex h-16 items-center justify-start underline-hover-effect">
                <p
                  onClick={aboutMeScroll}
                  className="pp-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max"
                >
                  ABOUT ME
                </p>
              </div>
              <div className="flex h-16 items-center justify-start underline-hover-effect">
                <p
                  onClick={experienceScroll}
                  className="pp-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max"
                >
                  EXPERIENCE
                </p>
              </div>
              <div className="flex h-16 items-center justify-start underline-hover-effect">
                <p
                  onClick={skillsScroll}
                  className="pp-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max"
                >
                  SKILLS
                </p>
              </div>
              <div className="flex h-16 items-center justify-start underline-hover-effect">
                <p
                  onClick={contactScroll}
                  className="pp-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max"
                >
                  CONTACT
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end ml-auto mr-0">
              <BackgroundSwitch />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
