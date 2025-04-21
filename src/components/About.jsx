import React from "react";
import Services from "./Services";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <motion.h1
        className="text-primary font-bold text-4xl mt-10 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About me:
      </motion.h1>

      <motion.p
        className="text-white text-lg md:w-2/3 leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Hi, My name is Akinwande-Ajose Aaron Olayinka, a First-class graduate of
        Computer Science at Lagos State University. I am a motivated Frontend
        Developer with more than 2 years of hands-on experience in building and
        maintaining responsive, high-performance web applications using React.js,
        Next.js, and Tailwind CSS. I have a proven track record of enhancing
        application speed and usability through strategic performance
        optimizations and collaborative UI/UX design. My major skills are listed
        below.
      </motion.p>

      <motion.div
        className="md:flex items-center gap-6 bg-[#2a2a3a] p-6 rounded-xl shadow-md mb-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="text-primary text-7xl font-extrabold mb-4 md:mb-0">
          2+
        </div>
        <p className="text-white text-xl">
          Years of experience translating complex requirements into clean,
          maintainable code with a strong focus on accessibility and user
          experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <Services />
      </motion.div>
    </div>
  );
};

export default About;
