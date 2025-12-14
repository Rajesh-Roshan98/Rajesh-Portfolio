import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt, FaServer, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase my work, skills, and contact details. Built with React and Tailwind.",
    tech: ["React", "Tailwind CSS", "AOS"],
    links: [
      {
        label: "GitHub Code",
        icon: <FaGithub />,
        url: "https://github.com/Rajesh-Roshan98/Rajesh-Portfolio",
      },
    ],
  },
  {
    title: "Authentication App",
    description:
      "A full-stack authentication system with JWT-based login/signup, encrypted passwords, protected routes, and role-based access control.",
    tech: ["React", "Node.js", "MongoDB"],
    links: [
      {
        label: "Frontend Code",
        icon: <FaCode />,
        url: "https://github.com/Rajesh-Roshan98/AuthFrontend",
      },
      {
        label: "Backend Code",
        icon: <FaServer />,
        url: "https://github.com/Rajesh-Roshan98/AuthBackend",
      },
      {
        label: "Live Demo",
        icon: <FaExternalLinkAlt />,
        url: "https://secure-auth-app.vercel.app/",
      },
    ],
  },
  {
    title: "BlogMaster App",
    description:
      "A full-stack blog app with categories, rich editor, and comments. Features authentication and routing.",
    tech: ["React", "Node.js", "MongoDB"],
    links: [
      {
        label: "Frontend Code",
        icon: <FaCode />,
        url: "https://github.com/Rajesh-Roshan98/Blog-Master-Frontend",
      },
      {
        label: "Backend Code",
        icon: <FaServer />,
        url: "https://github.com/Rajesh-Roshan98/Blog-Master-Backend",
      },
      {
        label: "Live Demo",
        icon: <FaExternalLinkAlt />,
        url: "https://blog-master-frontend-beta.vercel.app/",
      },
    ],
  },
  {
    title: "ClimaCast - Weather Website",
    description:
      "A modern weather forecasting app that shows real-time weather, 5-day forecast, and location-based updates. Built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "OpenWeather API", "Vercel"],
    links: [
      {
        label: "GitHub Code",
        icon: <FaGithub />,
        url: "https://github.com/Rajesh-Roshan98/WeatherApp",
      },
      {
        label: "Live Demo",
        icon: <FaExternalLinkAlt />,
        url: "https://weather-app-climacast.vercel.app/",
      },
    ],
  },
];

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="Projects"
      className="relative min-h-screen py-20 px-4 sm:px-10 md:px-20 bg-[#0a0f1c] text-white overflow-hidden"
    >
      {/* Background blobs with parallax */}
      <div
        className="absolute -top-40 -left-40 w-[60vw] sm:w-[40vw] md:w-[500px] h-[60vw] sm:h-[40vw] md:h-[500px] bg-blue-500 opacity-20 rounded-full blur-3xl z-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[60vw] sm:w-[40vw] md:w-[500px] h-[60vw] sm:h-[40vw] md:h-[500px] bg-fuchsia-500 opacity-20 rounded-full blur-3xl z-0"
        style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300">
            Some things I've built recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="p-6 bg-[#111827] rounded-lg border border-gray-700
                         transition-transform duration-300 ease-in-out transform hover:scale-105
                         hover:shadow-[0_0_20px_rgba(168,85,247,0.6),0_0_40px_rgba(168,85,247,0.3)]
                         will-change-transform"
            >
              <h3 className="text-xl sm:text-lg md:text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-xs md:text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 text-xs sm:text-[10px] md:text-xs mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links with Icons */}
              <div className="flex flex-wrap gap-4 text-sm sm:text-xs">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 hover:underline transition-colors"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
