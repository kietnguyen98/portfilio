// import moduels from library
import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// import moduels from local

type goUpButtonProps = {
  isShow: Boolean;
  toTopScroll: any;
};

const GoUpButton: FunctionComponent<goUpButtonProps> = ({
  isShow,
  toTopScroll,
}) => {
  const [animation, setAnimation] = React.useState("");

  React.useEffect(() => {
    if (isShow) {
      setAnimation("opacity-100");
    } else {
      setAnimation("");
    }
  }, [isShow]);

  return (
    <button
      onClick={toTopScroll}
      className={
        "fixed sm:bottom-12 bottom-8 sm:right-8 right-6 z-50 sm:h-12 sm:w-12 h-10 w-10 rounded-full bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 shadow-lg ring-2 ring-offset-1 ring-cyan-500/30 shadow-cyan-500/50 flex items-center justify-center text-slate-50 transition-all duration-700 opacity-0 " +
        animation
      }
    >
      <FontAwesomeIcon icon={faArrowUp} fixedWidth />
    </button>
  );
};

export default GoUpButton;
