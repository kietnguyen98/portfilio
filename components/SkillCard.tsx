// import modules from library
import React, { FunctionComponent } from "react";
import Image from "next/image";

// import modules from local

type skillCardProps = {
  skilData: {
    name: string;
    point: number;
    img: string;
  };
  isCardMounted: boolean;
};

const SkillCard: FunctionComponent<skillCardProps> = ({
  skilData,
  isCardMounted,
}) => {
  const [point, setPoint] = React.useState(0);
  React.useEffect(() => {
    if (isCardMounted) {
      setInterval(() => {
        setPoint((point) =>
          point < skilData.point ? point + 1 : skilData.point
        );
      }, 150);
    } else {
      setPoint(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCardMounted]);

  return (
    <div className="h-full relative shadow-lg hover:shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/40 cursor-pointer transition-all duration-500 rounded-full overflow-hidden group">
      <div className="h-56 w-56 bg-slate-50 rounded-full flex items-center justify-center">
        <div className="h-48 w-48 bg-slate-50 rounded-full shadow-inner">
          <div className="w-48 h-48 grid grid-rows-3 grid-flow-col justify-center items-center group-hover:scale-150 transition-all duration-500">
            <div className="flex items-center justify-center">
              <p className="text-slate-600 pp-bold text-xl text-center uppercase block group-hover:hidden transition-all duration-500">
                {skilData.name}
              </p>
            </div>
            {skilData.img && (
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src={skilData.img}
                  alt="skill icon"
                  height={60}
                  width={60}
                  quality={100}
                />
              </div>
            )}
            <div className="flex items-center justify-center">
              <p className="text-slate-600 pp-bold text-xl text-center tracking-widest block group-hover:hidden transition-all duration-500">
                {point}/10
              </p>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute top-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="224px"
        height="224px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          cx="112"
          cy="112"
          r="104"
          strokeLinecap="round"
          className="skill-circle-bar"
          style={{
            strokeDasharray: (654 * skilData.point) / 10,
            strokeDashoffset: (654 * skilData.point) / 10,
            animation: isCardMounted
              ? "skillCircular 1.2s linear forwards"
              : "none",
          }}
        />
      </svg>
    </div>
  );
};

export default SkillCard;
