import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Skills() {
  return (
    <div className="flex flex-col  justify-center items-center mt-[30px] w-[88vw] mb-[30px]">
      <div className="flex flex-col items-center">
        <h1 className="flex flex-col gap-[5px] text-5xl text-white font-bold">
          Skills
          <div className="w-[60px] h-[5px] rounded-2xl bg-[#914bf1]"></div>
        </h1>
        <div className="mt-[10px] text-xl text-center text-[#94a3b8]">
          Technologies, tools & languages I work with.
        </div>
      </div>

      <div className="flex flex-wrap w-[60%] gap-[20px] items-center justify-center mt-[40px]">
        <div className="px-[50px] py-[20px] flex flex-col transition duration-200 ease-in items-center gap-[10px] border-[1px] border-white bg-[rgb(39_40_41)] hover:border-[#914bf1] rounded-2xl text-2xl text-[#914bf1]">
          <FaHtml5 className="text-3xl" />
          <div className="text-white">HTML</div>
        </div>
        <div className="px-[50px] py-[20px] flex flex-col transition duration-200 ease-in items-center gap-[10px] border-[1px] border-white bg-[rgb(39_40_41)] hover:border-[#914bf1] rounded-2xl text-2xl text-[#914bf1]">
          <IoLogoCss3 className="text-3xl" />
          <div className="text-white">CSS</div>
        </div>
        <div className="px-[50px] py-[20px] flex flex-col transition duration-200 ease-in items-center gap-[10px] border-[1px] border-white bg-[rgb(39_40_41)] hover:border-[#914bf1] rounded-2xl text-2xl text-[#914bf1]">
          <IoLogoJavascript className="text-3xl" />
          <div className="text-white">JavaScript</div>
        </div>
        <div className="px-[50px] py-[20px] flex flex-col transition duration-200 ease-in items-center gap-[10px] border-[1px] border-white bg-[rgb(39_40_41)] hover:border-[#914bf1] rounded-2xl text-2xl text-[#914bf1]">
          <FaReact className="text-3xl" />
          <div className="text-white">ReactJS</div>
        </div>
        <div className="px-[50px] py-[20px] flex flex-col transition duration-200 ease-in items-center gap-[10px] border-[1px] border-white bg-[rgb(39_40_41)] hover:border-[#914bf1] rounded-2xl text-2xl text-[#914bf1]">
          <RiTailwindCssFill className="text-3xl" />
          <div className="text-white">TailwindCSS</div>
        </div>
        <div className="px-[50px] py-[20px] flex flex-col transition duration-200 ease-in items-center gap-[10px] border-[1px] border-white bg-[rgb(39_40_41)] hover:border-[#914bf1] rounded-2xl text-2xl text-[#914bf1]">
          <FaJava className="text-3xl" />
          <div className="text-white">Java</div>
        </div>
        <div className="px-[50px] py-[20px] flex flex-col transition duration-200 ease-in items-center gap-[10px] border-[1px] border-white bg-[rgb(39_40_41)] hover:border-[#914bf1] rounded-2xl text-2xl text-[#914bf1]">
          <IoLogoGithub className="text-3xl" />
          <div className="text-white">Github</div>
        </div>
      </div>
    </div>
  );
}
