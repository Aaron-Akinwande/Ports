import React from "react";
import AaronResume from "../assets/AaronResume.pdf";
import AaronDP from "../assets/AaronDP.jpg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="md:px-10 px-7 my-14 md:h-screen bg-[#1a1a29]" id="home">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h6 className="text-3xl mt-12">Hello, I'm</h6>
            <motion.h1
              className="font-semibold md:text-5xl my-4 text-3xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Akinwande-Ajose Aaron
            </motion.h1>
            <motion.p
              className="md:w-96"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Front-End Web Developer. I create seamless web experiences for end-users.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 mt-5 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link to="about" smooth={true} spy={true}>
                <button className="btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary">
                  About Me
                </button>
              </Link>
              <Link to="projects" smooth={true} spy={true}>
                <button className="btn outline py-1.5 px-6 rounded border-none text-white">
                  Projects
                </button>
              </Link>
              <a href={AaronResume} download="Aaron Resume">
                <button className="btn transition-all duration-500 bg-primary py-2 px-4 rounded text-white hover:bg-white hover:text-primary">
                  Resume
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-first md:order-last relative w-full h-96 md:w-[500px] md:h-[500px] rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <img src={AaronDP} alt="Aaron Display"  />
          </motion.div>
        </div>
      </div>

      {/* Background bar */}
      <div className="mt-5 h-48 bg-[#181824] w-full mx-auto absolute left-0 hidden md:block"></div>
    </div>
  );
};

export default Home;
