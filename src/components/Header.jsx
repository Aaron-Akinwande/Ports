import React, { useState } from "react";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, ScrollLink } from "react-scroll";

const Header = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About me", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full  top-0 left-0 z-50 bg-[#1a1a29]">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
       
        <div className="font-bold text-3xl cursor-pointer flex items-center gap-1">
          <span className="text-primary hover:text-white">
            Akinwande-Ajose Aaron
          </span>
        </div>
        
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
      
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 text-xl cursor-pointer font-semibold" key={link.name}>
              <Link
                to={link.link}
                activeClass="active"
                smooth={true}
                spy={true}
                className="text-white hover:text-primary duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      
      </div>
    </div>
  );
};

export default Header;
