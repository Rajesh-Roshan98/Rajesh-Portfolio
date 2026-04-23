import React from "react";
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
  // ❌ Scroll state, event listeners, and redundant AOS.init removed to fix the lag!

  return (
    <section
      id="Projects"
      // ✅ Replaced bg-[#0a0f1c] with bg-transparent
      className="relative py-20 px-4 sm:px-10 md:px-20 bg-transparent text-white overflow-hidden"
    >
      {/* ❌ Local Background blobs removed to maintain the static global background from App.jsx */}

      {/* Container max-width increased to 1920px. This ensures the same edge padding across all standard and large monitors. */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            A collection of{" "}
            <span className="text-purple-400 font-semibold">
              full-stack projects
            </span>{" "}
            I’ve built using the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold">
              MERN stack
            </span>
            , focusing on{" "}
            <span className="text-white font-medium">performance</span>,{" "}
            <span className="text-pink-400 font-medium">usability</span>, and{" "}
            <span className="text-purple-300 font-medium">
              real-world problem solving
            </span>
            .
          </p>
        </div>

        {/* Projects Grid - Fully Dynamic Auto-Fit System */}
        <div className="grid gap-5 lg:gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              /* 🌟 UPGRADE 1: Glassmorphism Cards & Compact Padding (p-5 sm:p-6 instead of p-6 sm:p-8) */
              className="group relative flex flex-col p-5 sm:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10
                         transition-all duration-500 ease-in-out transform hover:-translate-y-2
                         hover:bg-white/10 hover:border-purple-500/50
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                         overflow-hidden"
            >
              {/* Subtle inner top glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Smaller Title */}
              <h3 className="relative z-10 text-lg sm:text-xl font-bold mb-2 text-gray-100 group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Compact Description */}
              <p className="relative z-10 text-gray-400 text-sm mb-5 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* 🌟 UPGRADE 2: Premium Tech Stack Badges */}
              <div className="relative z-10 flex flex-wrap gap-2 text-[10px] sm:text-xs mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-2.5 py-1 rounded-full font-medium tracking-wide shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 🌟 UPGRADE 3: Interactive Link Icons */}
              <div className="relative z-10 flex flex-wrap gap-4 text-xs font-medium mt-auto border-t border-gray-700/50 pt-3">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-1.5 text-gray-300 hover:text-pink-400 transition-colors duration-300"
                  >
                    <span className="transform transition-transform duration-300 group-hover/link:-translate-y-1">
                      {link.icon}
                    </span>
                    <span className="tracking-wide">{link.label}</span>
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
