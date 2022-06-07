// import modules from library
import React, { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";

// import moduels from local

type aboutMeProps = {
  aboutMeRef: any;
};

const AboutMe: FunctionComponent<aboutMeProps> = ({ aboutMeRef }) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <React.Fragment>
      {isMobile ? (
        <div
          ref={aboutMeRef}
          className="h-full w-full bg-slate-50 dark:bg-neutral-800 py-10 md:px-20 sm:px-12 px-8 flex items-center justify-center"
        >
          <div className="flex flex-col gap-4">
            <div className="w-fit">
              <p className="qs-bold text-slate-600 dark:text-slate-200 text-md">
                VỀ TÔI
              </p>
            </div>
            <div className="w-fit">
              <p className="qs-bold text-slate-500 dark:text-slate-300 md:text-2xl sm:text-xl text-lg">
                MỘT VÀI THÔNG TIN CÁ NHÂN NHÉ
              </p>
            </div>
            <div className="w-full">
              <div className="flex justify-center xl:px-10 lg:px-8 md:px-6 sm:px-4 px-4 py-8">
                <div
                  style={{
                    width: "100%",
                    paddingTop: `${100}%`,
                  }}
                  className="bg-[url('/images/profile/graduation.png')] bg-cover bg-no-repeat bg-center rounded-2xl border-solid border-6 border-white shadow-xl"
                ></div>
              </div>
            </div>
            <div className="w-fit">
              <p className="qs-regular text-slate-600 dark:text-slate-200 text-md">
                Tôi bắt đầu theo học tại trường Đại học Bách Khoa Thành phố Hồ
                Chí Minh từ năm 2017 đến năm 2022, chuyên ngành của tôi là Khoa
                học và Kỹ thuật máy tính. Sau khi tốt nghiệp, tôi làm việc
                full-time tại công ty TNHH MLTechSoft dưới vai trò Front-end
                Developer, đảm nhận vai trò triển khai phần Front-end chính
                trong các dự án của công ty.
              </p>
            </div>
            <div className="w-fit">
              <p className="qs-regular text-slate-600 dark:text-slate-200 text-md">
                Hiện nay tôi đang tìm kiếm những thử thách mới ở những công ty
                mới với mong muốn rèn giũa bản thân trong một môi trường năng
                động, sáng tạo.
              </p>
            </div>
            <div className="w-fit">
              <button className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-500 hover:via-sky-500 hover:to-blue-500 transition duration-500 px-6 py-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl">
                <p className="qs-regular text-slate-100 text-md">
                  Liên lạc với tôi
                </p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={aboutMeRef}
          className="h-full w-full bg-slate-50 dark:bg-neutral-800 py-20 xl:px-56 lg:px-36 md:px-24 sm:px-16 px-10 flex items-center justify-center"
        >
          <div className="grid grid-cols-2 xl:gap-20 lg:gap-12 md:gap-10 sm:gap-8 gap-6">
            <div className="flex justify-center xl:px-10 lg:px-8 md:px-6 sm:px-4 px-4">
              <div
                style={{
                  width: "100%",
                  paddingTop: `${100}%`,
                }}
                className="bg-[url('/images/profile/graduation.png')] bg-cover bg-no-repeat bg-center rounded-2xl border-solid border-6 border-white shadow-2xl"
              ></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-fit">
                <p className="qs-bold text-slate-600 dark:text-slate-200 text-md">
                  VỀ TÔI
                </p>
              </div>
              <div className="w-fit">
                <p className="qs-bold text-slate-500 dark:text-slate-300 text-2xl">
                  MỘT VÀI THÔNG TIN CÁ NHÂN NHÉ
                </p>
              </div>
              <div className="w-fit">
                <p className="qs-regular text-slate-600 dark:text-slate-200 text-md">
                  Tôi bắt đầu theo học tại trường Đại học Bách Khoa Thành phố Hồ
                  Chí Minh từ năm 2017 đến năm 2022, chuyên ngành của tôi là
                  Khoa học và Kỹ thuật máy tính. Sau khi tốt nghiệp, tôi làm
                  việc full-time tại công ty TNHH MLTechSoft dưới vai trò
                  Front-end Developer, đảm nhận vai trò triển khai phần
                  Front-end chính trong các dự án của công ty.
                </p>
              </div>
              <div className="w-fit">
                <p className="qs-regular text-slate-600 dark:text-slate-200 text-md">
                  Hiện nay tôi đang tìm kiếm những thử thách mới ở những công ty
                  mới với mong muốn rèn giũa bản thân trong một môi trường năng
                  động, sáng tạo.
                </p>
              </div>
              <div className="w-fit">
                <button className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-500 hover:via-sky-500 hover:to-blue-500 transition duration-500 px-6 py-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl">
                  <p className="qs-regular text-slate-100 text-md">
                    Liên lạc với tôi
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AboutMe;
