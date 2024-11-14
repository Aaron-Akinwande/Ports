import React from "react";
import { Link } from "react-scroll";

const Projects = () => {
  const projects = [
    {
      title: "Weather-On-The-Go",
      description:
        "A live website for finding real-time information about the weather around you or in particular location.",
      photo: "/wotg.jpg",
      git: "https://github.com/Aaron-Akinwande/Weather-On-The-Go",
      url: "https://weather-on-the-go.netlify.app/",
    },
    {
      title: "UsePeng",
      description:
        "A company website  which allows couples to plan their dream weddings from the comfort of there devices",
      photo: "/src/assets/projects/img2.png",
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
  ];
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <a
                  href={project.git}
                  className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary"
                >
                  GitHub
                </a>
                <a
                  href={project.url}
                  className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white "
                >
                  Project Link
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
