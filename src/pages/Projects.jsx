import Project from "../components/Project";

export default function Projects() {
  const projectData = [
    {
      name: "Shopping Management System",
      description:
        "Shopping Mangement System is an online Shopping Platform that allows user to buy  multiple items.",
      technologies: ["ReactJS", "TailwindCSS"],
      image: "shopping-management-system.png",
    },
    {
      name: "Todo App",
      description:
        "Todo App is a web application that allows user to add their daily tasks and complete it one by one.",
      technologies: ["ReactJS", "TailwindCSS"],
      image: "Todo-App.png",
    },
    {
      name: "Calculator",
      description:
        "Calculator is a web application that allows user to perform arithmetic operations such as addition, subtraction, multiplication, division etc. on thier data.",
      technologies: ["ReactJS", "TailwindCSS"],
      image: "calculator.png",
    },
    {
      name: "Weather App",
      description:
        "Weather is a web Application that allows user to figure out weather of their location.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "weatherApp.png",
    },
    {
      name: "Random Password Generator",
      description:
        "Password Generator is a generator that allows user to create strong password.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "passwordGenerator.png",
    },
    {
      name: "Random OTP Generator",
      description:
        "OTP Generator is a generator that allows user to create OTP.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "otpGenerator.png",
    },
    {
      name: "Myntra Clone",
      description: "Myntra Clone is clone of Myntra Shopping web Application.",
      technologies: ["HTML", "CSS"],
      image: "Myntra Clone.png",
    },
    {
      name: "Razorpay Clone",
      description:
        "Razorpay clone is a clone Razorpay Payment web Application.",
      technologies: ["HTML", "TailwindCSS"],
      image: "RazorpayClone.png",
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
