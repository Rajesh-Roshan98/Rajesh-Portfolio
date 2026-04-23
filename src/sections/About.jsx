import React from "react";
import "aos/dist/aos.css";
import { GraduationCap } from "lucide-react";

const About = () => {
  const education = [
    { title: "MCA - GIET University, Odisha", year: "(2024-2026)" },
    { title: "B.Sc. Physics Honours - Berhampur University", year: "(2023)" },
    {
      title: "Higher Secondary - Inspire Science Res. H.S. School, Nayagarh",
      year: "(2020)",
    },
    { title: "Secondary School - PCPHC, Lembhai", year: "(2018)" },
  ];

  return (
    <section
      id="About"
      // ✅ bg-transparent ensures the global fixed background from App.jsx shows through
      className="relative min-h-screen py-20 px-4 sm:px-10 md:px-20 bg-transparent text-white overflow-hidden flex items-center"
    >
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 tracking-tight"
          data-aos="fade-up"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Me
          </span>
        </h2>

        {/* 🌟 UPGRADE 1: Glassmorphism Intro Card */}
        <div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 mb-16 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-base sm:text-lg md:text-xl font text-gray-300 leading-relaxed text-justify max-w-3xl mx-auto">
            I am{" "}
            <span className="text-purple-400 font-bold">Rajesh Roshan</span>, a{" "}
            <span className="font-semibold text-white">
              Full-Stack Web Developer
            </span>{" "}
            specializing in the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold">
              MERN Stack
            </span>
            . Passionate about building scalable and efficient web applications
            that solve real-world problems, I focus on creating meaningful
            digital experiences. Constantly learning new technologies, I aim to
            improve my development skills and deliver better user experiences.
          </p>
        </div>

        {/* Education Header */}
        <div
          className="flex items-center justify-center gap-3 mb-10"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="p-2 bg-purple-500/20 rounded-full border border-purple-500/30">
            <GraduationCap className="text-pink-400 w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Education Journey
          </h3>
        </div>

        {/* 🌟 UPGRADE 2: Modern Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line - Removed AOS from here so it renders immediately as a track */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent opacity-50"></div>

          <div className="space-y-8">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-12 sm:pl-16 group"
                /* 🔥 Dynamic AOS Delay: Each item loads 150ms after the previous one */
                data-aos="fade-up"
                data-aos-delay={idx * 150 + 400}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-[11px] sm:left-[19px] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gray-600 rounded-full border-2 border-[#0a0f1c] 
                                group-hover:bg-pink-400 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-all duration-300 z-10"
                ></div>

                {/* Education Card */}
                <div
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 bg-[#111827]/80 backdrop-blur-sm rounded-xl border border-gray-700/50 
                                group-hover:border-purple-500/70 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] 
                                transition-all duration-300 transform group-hover:-translate-y-1"
                >
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-gray-100 group-hover:text-purple-300 transition-colors duration-300">
                      {item.title}
                    </p>
                  </div>

                  {/* Year Badge */}
                  <div className="mt-3 sm:mt-0 sm:ml-4 flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium rounded-full shadow-sm">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
