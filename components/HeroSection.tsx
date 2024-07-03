// HeroSection.tsx
"use client"
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import useRandom from '../hooks/useRandom';

const HeroSection = () => {
  const imageUrl = useRandom();

  return (
    <section id="home" className=" py-20 min-h-screen flex flex-col justify-end items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Random Anime Image"
              width={350}
              height={350}
              className="rounded-full shadow-2xl"
            />
          )}
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I&apos;m Sujeeth!
          </h1>
          <p className="text-xl mt-4 leading-relaxed">
            I&apos;m a{" "}
            <span className="font-semibold text-teal-600">
              <Typewriter
                words={["Software Engineer", "Tech Enthusiast", "Lifelong Learner"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>{" "}
            based in India. Working towards creating software that makes life easier and more meaningful.
          </p>
          <Link
            to="projects"
            className="inline-block mt-6 px-8 py-3 bg-teal-600  font-semibold rounded-full shadow-lg hover:bg-teal-700 transition-all transform hover:scale-105"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce text-teal-600" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
