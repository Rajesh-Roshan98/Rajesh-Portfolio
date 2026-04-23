import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiMysql, SiC } from "react-icons/si";

const Skills = () => {
  // ❌ Scroll state and listeners removed to fix lag

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <FaNodeJs className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    { name: "C", icon: <SiC className="text-red-600" /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-300" /> },
  ];

  return (
    <section
      id="skills"
      // ✅ Removed `min-h-screen` and `justify-center`. The height is now 100% dynamic based purely on the number of cards.
      className="relative py-20 px-4 sm:px-10 md:px-20 bg-transparent text-white flex flex-col items-center overflow-hidden"
    >
      {/* Container widened to w-full max-w-[1920px] to eliminate massive empty side margins on large screens */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {/* 🌟 UPGRADE 1: Gradient Typography */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 tracking-tight"
          data-aos="fade-up"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Skills
          </span>
        </h2>

        <p
          className="text-base sm:text-lg text-gray-400 leading-relaxed text-center mb-14 w-full whitespace-nowrap overflow-x-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="text-white font-medium">Technologies and tools</span>{" "}
          I use to <span className="text-purple-400 font-semibold">design</span>
          , <span className="text-green-400 font-semibold">build</span>, and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold">
            scale modern web applications
          </span>
          .
        </p>

        <div
          // Fully Dynamic Auto-Fit System specifically calibrated for smaller skill cards (minmax 150px)
          className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {skills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 120 },
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              /* 🌟 UPGRADE 2: Glassmorphism Cards (Reduced padding here from p-8 to p-4/p-5) */
              className="group relative p-4 sm:p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10
                         transition-all duration-300 ease-in-out 
                         hover:bg-white/10 hover:border-purple-500/50
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                         will-change-transform flex flex-col items-center justify-center overflow-hidden"
            >
              {/* Subtle inner top glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* 🌟 UPGRADE 3: Interactive Icon Lift (Reduced icon size here from 5xl to 4xl) */}
              <div className="text-3xl sm:text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 relative z-10 drop-shadow-md">
                {s.icon}
              </div>

              <span className="text-gray-300 font-semibold text-xs sm:text-sm text-center relative z-10 group-hover:text-white transition-colors duration-300 tracking-wide">
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
