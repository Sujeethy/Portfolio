// AboutSection.tsx
import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJupyter } from "react-icons/si";

const skills = [
  { skill: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { skill: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { skill: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { skill: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { skill: "Python", icon: <FaPython className="text-yellow-500" /> },
  { skill: "React", icon: <FaReact className="text-blue-400" /> },
  { skill: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
  { skill: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { skill: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { skill: "GitHub", icon: <FaGithub className="text-gray-500" /> },
  { skill: "Jupyter Notebooks", icon: <SiJupyter className="text-orange-400" /> },
];

const AboutSection = () => {
  return (
    <section id="about" className="  py-20">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold">
          About Me
          <hr className="w-16 h-1 mx-auto my-4 bg-teal-600 border-0 rounded" />
        </h1>

        <div className="flex flex-col md:flex-row items-center mt-12">
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-6">Get to know me!</h2>
            <p className="text-lg">
              Hi, my name is Sujeeth and I am a{" "}
              <span className="font-bold">highly ambitious</span>,
              <span className="font-bold"> self-motivated</span>, and
              <span className="font-bold"> driven</span> software engineer
              based in India.
            </p>
            <br />
            <p className="text-lg">
              I graduated with a degree in Computer Science and have been working in the
              field ever since.
            </p>
            <br />
            <p className="text-lg">
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p className="text-lg">
              I believe that you should{" "}
              <span className="font-bold text-teal-600">never stop growing</span>{" "}
              and that's what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 😊
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-left mt-8 md:mt-0">
            <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
            <div className="flex flex-wrap text-white justify-center md:justify-start">
              {skills.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800  px-4 py-2 m-2 rounded-full font-semibold flex items-center space-x-2 transform transition-transform duration-300 hover:scale-110"
                >
                  {item.icon}
                  <span>{item.skill}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
