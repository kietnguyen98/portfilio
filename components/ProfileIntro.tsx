// import modules from library
import React, { FunctionComponent } from "react";
import Image from "next/image";

// import modules from local

type profileIntroProps = {};

const ProfileIntro: FunctionComponent<profileIntroProps> = ({}) => {
  return (
    <div className="w-full h-screen grid grid-cols-3 gap-10 items-center justify-center bg-gradient-to-r from-cyan-200 dark:from-neutral-800 via-sky-200 dark:via-neutral-800 to-blue-200 dark:to-neutral-800 pt-32 pb-16">
      <div className="flex items-start justify-end col-span-2">
        <div className="xl:pl-40 lg:pl-20 md:pl-12">
          <p className="ds-bold text-8xl text-sky-700 mb-4">Chào bạn !,</p>
          <p className="ds-bold text-4xl text-slate-800 dark:text-slate-100 mb-2">
            Tôi là Kiệt. Tên đầy đủ của tôi là Nguyễn Hàn Mạnh Kiệt.
          </p>
          <p className="ds-bold text-2xl text-slate-800 dark:text-slate-100 mb-2">
            Hiện nay tôi đang là một{" "}
            <span className="text-orange-600">Front-end developer</span>. Công
            việc chính của tôi là tạo nên những website có phần UI/UX tốt nhất
            và thân thiện với người dùng, giúp cho người dùng có được những trải
            nghiệm tốt nhất trong quá trình sử dụng.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start col-span-1">
        <div className="p-2 rounded-full bg-sky-700 border-solid border-3 border-slate-50 shadow-2xl">
          <div className="xl:h-80 lg:h-64 md:h-56 xl:w-80 lg:w-64 md:w-56 bg-[url('/images/profile/Avatar.jpg')] bg-cover bg-no-repeat bg-center rounded-full border-solid border-2 border-slate-200"></div>
        </div>
      </div>
      <div className="flex justify-center items-end w-full col-span-3">
        <div className="py-2 px-4 text-slate-800 dark:text-slate-50 border-solid border-1 border-slate-800 dark:border-slate-50 dark:hover:text-slate-800 hover:border-none cursor-pointer rounded-lg bg-inherit hover:bg-slate-50 duration-300">
          <p className="qs-regular text-lg">Tìm hiểu thêm</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileIntro;
