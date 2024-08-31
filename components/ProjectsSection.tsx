// ProjectsSection.tsx
import React from "react";
import Image from "next/image";

import Link from "next/link";
import image1 from "../public/image.png"
import image2 from "../public/image2.png"
import image3 from "../public/image3.png"
import image4 from "../public/image4.png"
import image5 from "../public/image5.png"
import drag from "../public/drag.png"
import portfolio from "../public/portfolio.png"
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
    name: "eCommerceApp",
    description:
      "eCommerceApp is a modern full-stack eCommerce platform built with Node.js, Express, MongoDB, and React. It features secure user authentication, shopping cart management, and Stripe payment integration. The app uses Zustand for state management and Framer Motion for smooth animations. Users can download invoices as PDF and receive order confirmation via email",
    image: image2,
    github: "https://github.com/sujeeth/project-one",
    link: "ecommerceapp-w0u6.onrender.com",
  },
  {
    name:"Portfolio",
    description:"This is my personal portfolio website, showcasing my skills, projects, and experience. It is designed to be responsive, featuring a clean and modern interface to highlight my professional work.",
    image: portfolio,
    github:"https://github.com/Sujeethy/invoice-generator",
    link:"https://sujeeth-seller.s3.ap-south-1.amazonaws.com/invoice_generator/invoice-generator.html"
  },
  {
    name:"Digital_marketing",
    description:"A modern, responsive Digital Marketing Agency website featuring stylish hover effects on cards, vibrant images, and easy contact options, built with Bootstrap, custom CSS, and JavaScript.",
    image: image4,
    github:"https://github.com/Sujeethy/digital_marketing",
    link:"https://digital-marketing-gold.vercel.app/"
  },
  

  {
    name:"C.R.I. PUMPS Website Clone",
    description:"Simple CRI PUMPS Clone designed by using react",
    image: image5,
    github:"https://github.com/Sujeethy/NetArt-website",
    link:"https://sujeethy-netart.netlify.app/"
  },
  {
    name:"Invoice-generator",
    description:"Amazon invoice generator with pdf download option, canvas signature feature",
    image: image3,
    github:"https://github.com/Sujeethy/invoice-generator",
    link:"https://sujeeth-seller.s3.ap-south-1.amazonaws.com/invoice_generator/invoice-generator.html"
  },
  
  
  
  {
    name:"Image Draggable Layout",
    description:"customizable drag-and-drop grid layout system for web applications. It allows users to easily rearrange and resize components, supporting complex, nested layouts.",
    image: drag,
    github:"https://github.com/Sujeethy/invoice-generator",
    link:"https://sujeethy.github.io/draggable-layout/"
  }

  
  
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
            <div key={project.name} className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
             
  <a target="_blank" >
    <Image
      src={project.image}
      alt={project.name}
      width={500}
      height={500}
      className=" rounded-lg shadow-lg hover:opacity-75 transition-opacity"
      loading="eager"
    />
  </a>

               
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
