// import modules from library
import React, { FunctionComponent } from "react";

// import modules from local
type customInputProps = {
  type: string;
  placeholder: string;
  value: any;
  onChange: any;
};

const CustomInput: FunctionComponent<customInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full h-12 border-1 border-solid border-slate-300 rounded-md p-4 bg-white focus-visible:border-sky-500 focus-visible:shadow-md focus-visible:outline-none text-slate-500 pp-thin text-sm"
    ></input>
  );
};

export default CustomInput;
