import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase my work, skills, and contact details. Built with React and Tailwind.",
    tech: ["React", "Tailwind CSS", "AOS"],
    frontendLink: "#",
    demoLink: "#",
  },
  {
    title: "BlogMaster App",
    description:
      "A full-stack blog app with categories, rich editor, and comments. Features authentication and routing.",
    tech: ["React", "Node.js", "MongoDB"],
    backendLink: "https://github.com/Rajesh-Roshan98/Blog-Master-Backend",
    frontendLink: "https://github.com/Rajesh-Roshan98/Blog-Master-Frontend",
    demoLink: "https://blog-master-frontend-beta.vercel.app/",
  },
  // {
  //   title: "Courses Filter UI",
  //   description:
  //     "A filterable UI that lists course cards by category, built with React and deployed on Vercel.",
  //   tech: ["React", "Tailwind", "Vercel"],
  //   backendLink: "#",
  //   frontendLink: "#",
  //   demoLink: "#",
  // },
  {
  title: "ClimaCast - Weather Website",
  description:
    "A modern weather forecasting app that shows real-time weather, 5-day forecast, and location-based updates. Built with React and Tailwind CSS.",
  tech: ["React", "Tailwind", "OpenWeather API", "Vercel"],
  backendLink: "#", // if you don’t have backend, keep "#"
  frontendLink: "https://github.com/your-username/climacast", // replace with your repo link
  demoLink: "https://climacast.vercel.app", // replace with your live deployed link
},
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="Projects"
      className="relative min-h-screen py-20 px-6 md:px-20 bg-[#0a0f1c] text-white"
    >
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-fuchsia-500 opacity-20 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-300">Some things I've built recently</p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="p-6 bg-[#111827] rounded-lg border border-gray-700
                         transition-all duration-300 ease-in-out transform hover:scale-105
                         hover:shadow-[0_0_20px_rgba(168,85,247,0.6),0_0_40px_rgba(168,85,247,0.3)]
                         will-change-transform"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 text-sm">
                {project.backendLink && (
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Backend Code
                  </a>
                )}
                {project.frontendLink && (
                  <a
                    href={project.frontendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Frontend Code
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
