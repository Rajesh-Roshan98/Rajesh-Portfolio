import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GraduationCap } from "lucide-react";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const education = [
    { title: "MCA - GIET University, Odisha", year: "(2024-2026)" },
    { title: "B.Sc. Physics Honours - Berhampur University", year: "(2023)" },
    { title: "Higher Secondary - Inspire Science Res. H.S. School, Nayagarh", year: "(2020)" },
    { title: "Secondary School - PCPHC, Lembhai", year: "(2018)" },
  ];

  return (
    <section
      id="About"
      className="relative min-h-screen py-20 px-4 sm:px-10 md:px-20 bg-[#0a0f1c] text-white overflow-hidden"
    >
      {/* Background blobs */}
      <div
        className="absolute -top-40 -left-40 w-[60vw] sm:w-[40vw] md:w-[500px] h-[60vw] sm:h-[40vw] md:h-[500px] bg-blue-500 opacity-20 rounded-full blur-3xl z-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[60vw] sm:w-[40vw] md:w-[500px] h-[60vw] sm:h-[40vw] md:h-[500px] bg-fuchsia-500 opacity-20 rounded-full blur-3xl z-0"
        style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
          data-aos="fade-up"
        >
          About <span className="text-purple-400">Me</span>
        </h2>

        <p
          className="text-base sm:text-lg text-gray-300 leading-relaxed text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I am <span className="text-purple-400 font-semibold">Rajesh Roshan</span>,
          a <span className="font-semibold">Full-Stack Web Developer</span> specializing
          in the <span className="font-semibold">MERN Stack</span>. I enjoy building
          scalable applications, solving problems, and learning new technologies.
        </p>

        <h3
          className="text-2xl font-bold mb-6 border-b-2 border-purple-500 inline-block"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Education
        </h3>

        <ul className="space-y-6" data-aos="fade-up" data-aos-delay="400">
          {education.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 p-4 bg-[#111827] rounded-lg border border-gray-700
                         hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] 
                         transition-transform duration-300 transform hover:scale-105"
            >
              <GraduationCap className="text-purple-400 w-6 h-6 flex-shrink-0" />
              <div>
                <p className="font-bold text-white">{item.title}</p>
                <p className="text-gray-400">{item.year}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About; 
