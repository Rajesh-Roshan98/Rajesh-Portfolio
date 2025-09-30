import React, { useEffect } from "react";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import avatarimg from "../assets/IMG_20250827_122932.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="Home"
      className="relative w-full min-h-screen bg-[#0a0f1c] text-white overflow-hidden flex items-center justify-center px-6 md:px-20 py-20"
    >
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-fuchsia-500 opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-2xl md:text-5xl font-bold text-white leading-tight">
            Hi, I'm <span className="text-purple-400">Rajesh Roshan</span>
          </h1>

          <h2 className="text-3xl md:text-4xl text-purple-400 font-bold">
            <Typewriter
              words={[
                "Full-Stack Developer (MERN)",
                "Problem Solver",
                "Tech Explorer"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-gray-300 text-lg max-w-md mx-auto md:mx-0">
            I specialize in building scalable applications using <strong>Core Java</strong> & the <strong>MERN Stack</strong>. I love solving problems and learning new technologies.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-4xl mt-4">
            <a
              href="https://github.com/Rajesh-Roshan98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 breathe"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rajeshroshan89"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-125 breathe"
            >
              <FaLinkedin />
            </a>
            <a
              onClick={() => {
                const contactSection = document.getElementById("Contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/contact");
                }
              }}
              className="text-gray-400 hover:text-red-400 transition-transform transform hover:scale-125 breathe cursor-pointer"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Resume Button */}
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a href="/public/Resume/Raj.pdf" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-6 py-3 border border-purple-400 text-purple-400 rounded-lg hover:bg-purple-900 hover:scale-105 transition-all duration-300 text-sm md:text-lg font-semibold shadow-md">
                <Download size={20} /> View Resume
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0" data-aos="fade-left">
          <div className="relative">
            {/* Gradient neon glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-40 blur-3xl animate-pulseGlow pointer-events-none"></div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-xl animate-pulseGlow pointer-events-none"></div>
            
            {/* Avatar with border */}
            <img
              src={avatarimg}
              alt="Raj Avatar"
              className="relative rounded-full w-60 h-60 md:w-80 md:h-80 object-cover shadow-2xl
                        border-4 border-purple-400 hover:border-pink-400 duration-500
                        transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
