// import modules from library
import React, { FunctionComponent } from "react";

// import modules from local
import BackgroundSwitch from "./BackgroundSwitch";

type NavbarProps = {};

const Navbar: FunctionComponent<NavbarProps> = ({}) => {
  return (
    <div className="w-screen h-16 bg-white dark:bg-neutral-800 border-solid border-b-1 border-slate-300 flex items-center">
      <div className="w-full flex xl:px-100 lg:px-60 md:px-20 sm:px-10">
        <div className="flex xl:gap:16 lg:gap-12 md:gap-6 sm:gap-4 ml-0 mr-auto">
          <div className="flex items-center justify-start">
            <p className="qs-regular font-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
              VỀ TÔI
            </p>
          </div>
          <div className="flex items-center justify-start">
            <p className="qs-regular font-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
              KINH NGHIỆM
            </p>
          </div>
          <div className="flex items-center justify-start">
            <p className="qs-regular font-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
              KỸ NĂNG
            </p>
          </div>
          <div className="flex items-center justify-start">
            <p className="qs-regular font-medium hover:font-bold text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-50 text-sm cursor-pointer w-max">
              LIÊN HỆ
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end ml-auto mr-0">
          <BackgroundSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
