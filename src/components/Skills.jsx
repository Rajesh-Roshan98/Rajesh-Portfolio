import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
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

export default function Skills() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className="relative min-h-screen py-20 px-4 sm:px-10 md:px-20 bg-[#0a0f1c] text-white flex flex-col items-center justify-center overflow-hidden"
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

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          My <span className="text-purple-400">Skills</span>
        </h2>

        <p
          className="text-base sm:text-lg text-gray-300 leading-relaxed text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Technologies I use to build modern and scalable applications:
        </p>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
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
              className="p-6 bg-[#111827] rounded-lg border border-gray-700
                         transition-all duration-300 ease-in-out transform hover:scale-105
                         hover:shadow-[0_0_20px_rgba(168,85,247,0.6),0_0_40px_rgba(168,85,247,0.3)]
                         will-change-transform flex flex-col items-center justify-center"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <span className="text-gray-200 font-medium text-xs sm:text-sm text-center">
                {s.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
