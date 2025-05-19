import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { PortfolioContext } from "../store/PortfolioContext";

export default function Navbar() {
  const { tab, setTab } = useContext(PortfolioContext);
  return (
    <div className="w-[85vw] h-[70px] flex items-center justify-between max-sm:justify-center ">
      <NavLink to="/" onClick={() => setTab("Home")}>
        <h1 className="text-3xl text-[#914bf1] mask-b-from-neutral-900 max-sm:hidden">
          YG.
        </h1>
      </NavLink>

      <div className="bg-[rgb(39_40_41)] flex gap-[20px] px-[40px] mt-[20px] max-sm:px-[30px] py-[15px] rounded-2xl ">
        <NavLink to={"/"} onClick={() => setTab("Home")}>
          <p
            className={`${
              tab === "Home" ? "text-[#914bf1]" : "text-white"
            } text-md font-bold transition duration-100 ease-in-out`}
          >
            HOME
          </p>
        </NavLink>
        <NavLink to={"/about"} onClick={() => setTab("About")}>
          <p
            className={`${
              tab === "About" ? "text-[#914bf1]" : "text-white"
            } text-md font-bold transition duration-100 ease-in-out`}
          >
            ABOUT
          </p>
        </NavLink>
        <NavLink to={"/skills"} onClick={() => setTab("Skills")}>
          <p
            className={`${
              tab === "Skills" ? "text-[#914bf1]" : "text-white"
            } text-md font-bold transition duration-100 ease-in-out`}
          >
            SKILLS
          </p>
        </NavLink>
        <NavLink to={"/projects"} onClick={() => setTab("Projects")}>
          <p
            className={`${
              tab === "Projects" ? "text-[#914bf1]" : "text-white"
            } text-md font-bold transition duration-100 ease-in-out`}
          >
            PROJECTS
          </p>
        </NavLink>
        <NavLink to={"/contact"} onClick={() => setTab("Contact")}>
          <p
            className={`${
              tab === "Contact" ? "text-[#914bf1]" : "text-white"
            } text-md font-bold transition duration-100 ease-in-out`}
          >
            CONTACT
          </p>
        </NavLink>
      </div>

      <div className="max-sm:hidden"></div>
    </div>
  );
}
