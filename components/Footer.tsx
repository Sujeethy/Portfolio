// Footer.tsx
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="  py-8">
      <div className="container mx-auto text-center">
        <hr className="w-full h-0.5 mx-auto my-8 bg-neutral-700 border-0" />
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>© 2023 Sujeeth</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/Sujeethy" target="_blank" rel="noreferrer">
              <AiOutlineGithub size={30} className="hover:text-teal-600 transition-colors" />
            </a>
            
            <a href="https://www.linkedin.com/in/sujeethchandra2" target="_blank" rel="noreferrer">
              <AiOutlineLinkedin size={30} className="hover:text-teal-600 transition-colors" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
