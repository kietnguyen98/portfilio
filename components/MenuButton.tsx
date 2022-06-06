// import modules from library
import React, { FunctionComponent } from "react";
// import modules from local

type menuButtonProps = {
  toggleDropdown: any;
};

const MenuButton: FunctionComponent<menuButtonProps> = ({ toggleDropdown }) => {
  return (
    <div
      onClick={toggleDropdown}
      className="flex flex-col justify-center items-center gap-1 p-2 shadow-lg cursor-pointer rounded-lg"
    >
      <div className="w-7 h-1 bg-slate-700 dark:bg-slate-500 rounded-2xl"></div>
      <div className="w-7 h-1 bg-slate-600 dark:bg-slate-400 rounded-2xl"></div>
      <div className="w-7 h-1 bg-slate-500 dark:bg-slate-300 rounded-2xl"></div>
    </div>
  );
};

export default MenuButton;
