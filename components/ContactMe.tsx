// import modules from library
import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

// import modules from local
import CustomInput from "./CustomInput";

type contactMeProps = {
  contactRef: any;
};

const ContactMe: FunctionComponent<contactMeProps> = ({ contactRef }) => {
  return (
    <React.Fragment>
      <div
        ref={contactRef}
        className="shadow-card-all h-full w-full bg-slate-50 dark:bg-neutral-800 md:py-20 py-12 xl:px-52 lg:px-36 md:px-24 sm:px-16 px-8 flex items-center justify-center"
      >
        <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:gap-32 md:gap-16 gap-12">
          <div className="w-full flex justify-start items-start">
            <div className="w-full flex gap-8 flex-col">
              <div className="w-full">
                <p className="pp-medium uppercase text-2xl text-slate-700 dark:text-slate-100">
                  DROP A LINE
                </p>
                <p className="pp-thin text-sm text-slate-500 dark:text-slate-300">
                  I am open for any suggestion or just to have a chat
                </p>
              </div>
              <div className="w-full grid grid-rows-5 grid-flow-col gap-4">
                <div className="w-full">
                  <CustomInput
                    type="text"
                    placeholder="Name"
                    value="Name"
                    onChange={() => {}}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    type="email"
                    placeholder="Email"
                    value="Email"
                    onChange={() => {}}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    type="text"
                    placeholder="Subject"
                    value="Subject"
                    onChange={() => {}}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    type="text"
                    placeholder="Create your message here"
                    value="Message"
                    onChange={() => {}}
                  />
                </div>
                <div className="w-full">
                  <button
                    onClick={() => alert("hey, have a nice day !")}
                    className="w-full rounded-md bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 px-auto py-2 pp-medium text-slate-50 text-md hover:shadow-xl transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} fixedWidth /> Send
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-start">
            <div className="w-full flex gap-8 flex-col">
              <div className="w-full">
                <p className="pp-medium uppercase text-2xl text-slate-700 dark:text-slate-100">
                  contact me
                </p>
                <p className="pp-thin text-sm text-slate-500 dark:text-slate-300">
                  Hey There !, Have any works you want to done by me? contact me
                  via
                </p>
              </div>
              <div className="w-full grid grid-rows-5 grid-flow-col gap-2">
                <div className="w-full">
                  <div className="flex gap-4">
                    <div className="text-sky-500">
                      <FontAwesomeIcon icon={faHouse} fixedWidth />
                    </div>
                    <p className="pp-thin text-sm text-slate-500 dark:text-slate-300 leading-8">
                      44 1st Street, Tan Phu Ward, District 7, Ho Chi Minh City
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex gap-4">
                    <div className="text-sky-500">
                      <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                    </div>
                    <p className="pp-thin text-sm text-slate-500 dark:text-slate-300 leading-7">
                      manhkiet.nguyenhan@gmail.com
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex gap-4">
                    <div className="text-sky-500">
                      <FontAwesomeIcon icon={faPhone} fixedWidth />
                    </div>
                    <p className="pp-thin text-sm text-slate-500 dark:text-slate-300 leading-7">
                      (+84) 766653542
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <p className="pp-thin text-slate-700 dark:text-slate-100 text-md">
                    Or find me via:
                  </p>
                </div>
                <div className="w-full flex gap-4">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      window.open("https://www.facebook.com/ba.khet.946/");
                    }}
                  >
                    <p className="pp-medium text-sm uppercase text-sky-500">
                      facebook
                    </p>
                  </div>
                  <div className="cursor-pointer">
                    <p className="pp-medium text-sm uppercase text-sky-500">
                      zalo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:h-28 h-20 flex items-center justify-center bg-slate-50 dark:bg-neutral-800">
        <p className="pp-thin text-slate-600 dark:text-slate-400 text-sm text-center">
          Copyright © 2022 All rights reserved | Made by KietNguyen98
        </p>
      </div>
    </React.Fragment>
  );
};

export default ContactMe;
