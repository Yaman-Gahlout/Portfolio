import Project from "../components/Project";
import ShoppingManagementImage from "../assets/Projects-image/shopping-management-system.png";
import TodoAppImage from "../assets/Projects-image/Todo-App.png";
import CalculatorImage from "../assets/Projects-image/calculator.png";
import weatherAppImage from "../assets/Projects-image/weatherApp.png";
import passwordGeneratorImage from "../assets/Projects-image/passwordGenerator.png";
import otpGeneratorImage from "../assets/Projects-image/otpGenerator.png";
import MyntraCloneImage from "../assets/Projects-image/Myntra Clone.png";
import RazorpayCloneImage from "../assets/Projects-image/RazorpayClone.png";

export default function Projects() {
  const projectData = [
    {
      name: "Shopping Management System",
      description:
        "Shopping Mangement System is an online Shopping Platform that allows user to buy  multiple items.",
      technologies: ["ReactJS", "TailwindCSS"],
      image: ShoppingManagementImage,
    },
    {
      name: "Todo App",
      description:
        "Todo App is a web application that allows user to add their daily tasks and complete it one by one.",
      technologies: ["ReactJS", "TailwindCSS"],
      image: TodoAppImage,
    },
    {
      name: "Calculator",
      description:
        "Calculator is a web application that allows user to perform arithmetic operations such as addition, subtraction, multiplication, division etc. on thier data.",
      technologies: ["ReactJS", "TailwindCSS"],
      image: CalculatorImage,
    },
    {
      name: "Weather App",
      description:
        "Weather is a web Application that allows user to figure out weather of their location.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: weatherAppImage,
    },
    {
      name: "Random Password Generator",
      description:
        "Password Generator is a generator that allows user to create strong password.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: passwordGeneratorImage,
    },
    {
      name: "Random OTP Generator",
      description:
        "OTP Generator is a generator that allows user to create OTP.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: otpGeneratorImage,
    },
    {
      name: "Myntra Clone",
      description: "Myntra Clone is clone of Myntra Shopping web Application.",
      technologies: ["HTML", "CSS"],
      image: MyntraCloneImage,
    },
    {
      name: "Razorpay Clone",
      description:
        "Razorpay clone is a clone Razorpay Payment web Application.",
      technologies: ["HTML", "TailwindCSS"],
      image: RazorpayCloneImage,
    },
  ];
  return (
    <div className="flex flex-col  justify-center items-center mt-[30px] w-[88vw] mb-[30px]">
      <div className="flex flex-col items-center">
        <h1 className="flex flex-col gap-[5px] text-5xl text-white font-bold">
          Projects
          <div className="w-[60px] h-[5px] rounded-2xl bg-[#914bf1]"></div>
        </h1>
        <div className="mt-[10px] text-center text-xl text-[#94a3b8]">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem domains.
        </div>
      </div>
      <div className="flex flex-wrap gap-[20px] mt-[50px] items-center justify-center">
        {projectData.map((project, index) => (
          <Project key={index} project={project}></Project>
        ))}
      </div>
    </div>
  );
}
