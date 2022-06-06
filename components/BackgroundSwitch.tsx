// import modules from library
import React, { FunctionComponent } from "react";
import Image from "next/image";
// import modules from local

type backgroundSwitchProps = {};

const BackgroundSwitch: FunctionComponent<backgroundSwitchProps> = ({}) => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.backgroundMode === "dark") {
        setIsDark(true);
      } else {
        setIsDark(false);
      }

      if (
        localStorage.backgroundMode === "dark" ||
        (!("backgroundMode" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const setDarkMode = () => {
    setIsDark(true);
    if (typeof window !== "undefined") {
      localStorage.setItem("backgroundMode", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  const setLightMode = () => {
    setIsDark(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("backgroundMode", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  const switchMode = () => {
    if (isDark) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };
  return (
    <div
      onClick={switchMode}
      className="flex items-center justify-start gap-2 px-2 py-1 rounded-xl border-solid border-2 border-sky-500 cursor-pointer bg-sky-50 dark:bg-sky-900"
    >
      <Image
        width={24}
        height={24}
        src={isDark ? "/images/icons/full-moon.png" : "/images/icons/sun.png"}
        alt="sun icon"
        quality={100}
      />{" "}
      <p className="w-max qs-regular text-slate-900 dark:text-gray-100">
        {isDark ? "dark mode" : "light mode"}
      </p>
    </div>
  );
};

export default BackgroundSwitch;
