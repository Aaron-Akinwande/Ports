import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Weather-On-The-Go",
      description:
        "A live website for finding real-time information about the weather around you or in a particular location.",
      photo: "/wotg.jpg",
      git: "https://github.com/Aaron-Akinwande/Weather-On-The-Go",
      url: "https://weather-on-the-go.netlify.app/",
    },
    {
      title: "UsePeng",
      description:
        "A company website that allows couples to plan their dream weddings from the comfort of their devices.",
      photo: "/peng.png",
      git: "https://usepeng.com/",
      url: "https://github.com/Community-With-No-Name/peng",
    },
    {
      title: "EasySCH",
      description:
        "A school management website that allows administrators and teachers to perform their duties effectively.",
      photo: "/sms-dash.jpg",
      git: "https://github.com/Community-With-No-Name/sms",
      url: "https://www.easysch.com/best-college/login",
    },
      {
      title: "Pub App",
      description:
        "A pub meal and drink app built with Next.js allows users to browse and order food and drinks from a local pub. The app features a responsive menu interface, real-time updates on item availability, and a smooth ordering process. ",
      photo: "/pub.jpg",
      git: "https://github.com/Aaron-Akinwande/pub-meal-and-drinks-app",
      url: "https://pub-meal-and-drinks-app.vercel.app/",
    },
  ];

  return (
    <div className="md:px-10 px-6 my-16" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-primary font-bold text-3xl mb-4"
      >
        Featured Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-white text-base md:w-2/3 leading-relaxed mb-8"
      >
        I have worked on many projects over the course of being a Web Developer.
        Here are a few of my live, real-world projects:
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#31313F] rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href={project.url} target="_blank" rel="noreferrer">
              <img
                src={project.photo}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            </a>
            <h3 className="text-primary font-semibold text-lg mb-1">{project.title}</h3>
            <p className="text-white text-sm mb-4">{project.description}</p>
            <div className="flex gap-3">
              <a
                href={project.git}
                target="_blank"
                rel="noreferrer"
                className="bg-primary hover:bg-white hover:text-primary text-white text-sm px-4 py-2 rounded transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="border border-white text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-primary transition-all duration-300"
              >
                Visit Site
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
