// import modules from library
import React, { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";

// import modules from local
import BackgroundSwitch from "./BackgroundSwitch";
import MenuButton from "./MenuButton";

type NavbarProps = {};

const Navbar: FunctionComponent<NavbarProps> = ({}) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  const [navBackground, setNavBackground] = React.useState("bg-transparent");

  React.useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 64;
      if (show) {
        setNavBackground("backdrop-blur bg-white/5");
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
        <React.Fragment>
          <div
            className={
              `w-full fixed top-0 ${isMenuDropdown ? "h-64" : "h-16"} ` +
              (isMenuDropdown ? "backdrop-blur bg-white/5" : navBackground)
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
              <div className="w-full h-48 flex flex-col items-center justify-center">
                <div className="flex h-10 items-center justify-start underline-hover-effect">
                  <p className="qs-regular font-medium hover:font-bold text-slate-100 hover:text-slate-50 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
                    VỀ TÔI
                  </p>
                </div>
                <div className="flex h-10 items-center justify-start underline-hover-effect">
                  <p className="qs-regular font-medium hover:font-bold text-slate-100 hover:text-slate-50 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
                    KINH NGHIỆM
                  </p>
                </div>
                <div className="flex h-10 items-center justify-start underline-hover-effect">
                  <p className="qs-regular font-medium hover:font-bold text-slate-100 hover:text-slate-50 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
                    KỸ NĂNG
                  </p>
                </div>
                <div className="flex h-10 items-center justify-start underline-hover-effect">
                  <p className="qs-regular font-medium hover:font-bold text-slate-100 hover:text-slate-50 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
                    LIÊN HỆ
                  </p>
                </div>
              </div>
            )}
          </div>
        </React.Fragment>
      ) : (
        <div
          className={
            "w-full fixed top-0 h-16 flex items-center " + navBackground
          }
        >
          <div className="w-full h-16 flex xl:px-100 lg:px-60 md:px-20 sm:px-10">
            <div className="flex h-16 xl:gap:16 lg:gap-12 md:gap-6 sm:gap-4 ml-0 mr-auto">
              <div className="flex h-16 items-center justify-start underline-hover-effect">
                <p className="qs-bold font-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
                  VỀ TÔI
                </p>
              </div>
              <div className="flex h-16 items-center justify-start underline-hover-effect">
                <p className="qs-bold font-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
                  KINH NGHIỆM
                </p>
              </div>
              <div className="flex h-16 items-center justify-start underline-hover-effect">
                <p className="qs-bold font-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
                  KỸ NĂNG
                </p>
              </div>
              <div className="flex h-16 items-center justify-start underline-hover-effect">
                <p className="qs-bold font-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-100 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
                  LIÊN HỆ
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
