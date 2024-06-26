// Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import NextLink from "next/link"; // Import NextLink from next/link

const NAV_ITEMS = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Work", page: "experience" },
  { label: "Projects", page: "projects" },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full shadow-md ${
        currentTheme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <NextLink href="#home" passHref> {/* Use NextLink for internal navigation */}
          <a className="text-2xl font-bold cursor-pointer">
            Sujeeth
          </a>
        </NextLink>
        <div className="md:hidden">
          <button onClick={() => setNavbar(!navbar)}>
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>
        <nav className={`md:flex items-center space-x-6 ${navbar ? "block" : "hidden"} md:block`}>
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className="hover:text-teal-600 transition-colors cursor-pointer"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(false)}
            >
              {item.label}
            </Link>
          ))}
          <button onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")} className="p-2 rounded-xl">
            {currentTheme === "dark" ? <RiSunLine size={25} color="white" /> : <RiMoonFill size={25} color="black" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
