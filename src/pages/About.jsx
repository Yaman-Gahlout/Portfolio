import { MdLibraryBooks } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import AboutImage from "../assets/Yaman.jpeg";

export default function About() {
  return (
    <div className="flex flex-col  justify-center items-center mt-[30px] w-[88vw] mb-[30px]">
      <h1 className="flex flex-col gap-[5px] text-5xl text-white font-bold">
        About me
        <div className="w-[60px] h-[5px] rounded-2xl bg-[#914bf1]"></div>
      </h1>
      <div className="flex gap-[30px] w-[90%]  max-md:flex-col max-md:items-center ">
        <div className="mt-[50px]">
          <div className="flex gap-[10px]  items-center text-[#914bf1] text-2xl font-bold">
            <MdLibraryBooks /> <span className="text-white">Bio</span>
          </div>
          <p className="text-[#94a3b8] text-xl">
            I'm Yaman Gahlout, a student of BCA(Bachelor of Computer
            Applications) and a web developer. I'm currently learning web
            development and looking forward to becoming a full stack developer.
          </p>
          <div className="mt-[20px]">
            <div className="flex gap-[10px]  items-center text-[#914bf1] text-2xl ">
              <LuGraduationCap />
              <span className="text-white">Education</span>
            </div>
            <div className="flex gap-[20px] mt-[20px] ">
              <div className="border-[1px] flex flex-col gap-[10px] border-[#94a3b8] hover:border-[#914bf1] rounded-2xl p-[20px] pb-[50px]">
                <h1 className="text-lg font-bold text-white">
                  BCA - (Bachelor of Computer Application)
                </h1>
                <p className="text-md text-[#94a3b8]">
                  DIST (Disha institute of Science & Technology)
                </p>
                <div className="text-md text-[#94a3b8]">
                  July 2022 - June 2025
                </div>
                <div className="text-md text-[#94a3b8]">8.1 CGPA</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] max:md:w-[100%] flex flex-col items-center max-md:justify-center max-md:items-center">
          <div className="mt-[50px] h-[225px] w-[225px] rounded-full border-[2px] border-[#914bf1] flex items-center justify-center animate-pulse">
            <img
              src={AboutImage}
              alt=""
              className="h-[200px] w-[200px] rounded-full"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-[10px]">
            <h1 className="text-2xl text-white">Yaman Gahlout</h1>
            <p className="text-xl text-[#94a3b8] text-center">
              Computer Science Student
            </p>
            <div className="h-[2px] w-[200px] mt-[10px] bg-[#914bf1] rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
