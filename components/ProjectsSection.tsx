// ProjectsSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "../public/image.png"
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "ChatApp",
    description:
      "The ChatApp is a real-time chatting website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It features secure user authentication, instant messaging, and advanced functionalities like message translation and summarization. This project highlights my skills in full-stack development, real-time web applications, and integrating NLP services.",
    image: image1,
    github: "https://github.com/sujeeth/project-one",
    link: "https://projectone.com",
  },
  {
    name: "Project Two",
    description: "Project Two is a to do list app built using the MERN stack.",
    image: "/project2.png",
    github: "https://github.com/sujeeth/project-two",
    link: "https://projecttwo.com",
  },
  {
    name: "Project Three",
    description:
      "Project Three is a photo and video digitization service.",
    image: "/project3.png",
    github: "https://github.com/sujeeth/project-three",
    link: "https://projectthree.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className=" py-20">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold">
          Projects
          <hr className="w-16 h-1 mx-auto my-4 bg-teal-600 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-16 mt-12">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <Link href={project.link} target="_blank">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg hover:opacity-75 transition-opacity"
                  />
                </Link>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
                <h2 className="text-3xl font-bold">{project.name}</h2>
                <p className="text-lg mt-4">
                  {project.description}
                </p>
                <div className="flex space-x-4 mt-6">
                  <Link href={project.github} target="_blank">
                    <BsGithub size={30} className="hover:text-teal-600 transition-colors" />
                  </Link>
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare size={30} className="hover:text-teal-600 transition-colors" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
