// import modules from library
import React, { FunctionComponent } from "react";

// import modules from local

type contactMeProps = {};

const ContactMe: FunctionComponent<contactMeProps> = ({}) => {
  return (
    <div className="h-full w-full bg-slate-50 dark:bg-neutral-800 py-20 xl:px-56 lg:px-36 md:px-24 sm:px-16 px-10 flex items-center justify-center shadow-2xl shadow-slate-900">
      <div className="grid grid-cols-2 gap-4"></div>
    </div>
  );
};

export default ContactMe;
