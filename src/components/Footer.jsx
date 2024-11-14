import React from "react";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2024 | Akinwande-Ajose Aaron</p>
        <p className="hidden sm:block">Front-End Web Developer</p>
        <p className="hidden sm:block">UI Designer</p>
      </div>
      {/* social media */}
      {/* <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="https://web.facebook.com/aaron.akinwande/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://www.instagram.com/aaron_akinwande/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <a
          className="ml-4"
          href="aaronakinwande@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" />
        </a>
      </div> */}
    </div>
  );
};

export default Footer;
