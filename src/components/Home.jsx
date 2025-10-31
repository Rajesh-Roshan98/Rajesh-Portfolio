import React, { useEffect, useRef } from "react";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import avatarimg from "../assets/IMG_20250827_122932.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const navigate = useNavigate();
  const blobTopRef = useRef(null);
  const blobBottomRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Initialize AOS
    AOS.init({
      duration: isMobile ? 600 : 800,
      once: true,
      easing: "ease-out",
    });
    AOS.refresh();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const limit = 60; // limit the parallax range

          const topShift = Math.min(scrollY * 0.1, limit);
          const bottomShift = Math.min(scrollY * 0.1, limit);
          const avatarShift = Math.min(scrollY * 0.03, 20);

          if (blobTopRef.current)
            blobTopRef.current.style.transform = `translateY(${topShift}px)`;
          if (blobBottomRef.current)
            blobBottomRef.current.style.transform = `translateY(-${bottomShift}px)`;
          if (avatarRef.current)
            avatarRef.current.style.transform = `translateY(${avatarShift}px)`;

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section
      id="Home"
      className="relative w-full min-h-screen bg-[#0a0f1c] text-white flex items-center justify-center px-4 sm:px-10 md:px-20 py-20 overflow-hidden"
    >
      {/* Background blobs (inside a wrapper to prevent scroll overflow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={blobTopRef}
          className="absolute -top-40 -left-40 w-[60vw] sm:w-[40vw] md:w-[500px] h-[60vw] sm:h-[40vw] md:h-[500px] 
                     bg-blue-500 opacity-20 rounded-full blur-3xl transition-transform duration-500"
        />
        <div
          ref={blobBottomRef}
          className="absolute -bottom-40 -right-40 w-[60vw] sm:w-[40vw] md:w-[500px] h-[60vw] sm:h-[40vw] md:h-[500px] 
                     bg-fuchsia-500 opacity-20 rounded-full blur-3xl transition-transform duration-500"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        {/* Avatar Section */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end relative order-1 md:order-2"
          data-aos={isMobile ? "fade-up" : "fade-left"}
          data-aos-delay="300"
        >
          <div ref={avatarRef} className="relative">
            {/* Glowing background */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-40 blur-3xl animate-pulse"></div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 opacity-30 blur-xl animate-pulse"></div>

            {/* Avatar Image */}
            <img
              src={avatarimg}
              alt="Raj Avatar"
              className="relative rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 object-cover 
                         shadow-2xl border-4 border-purple-400 hover:border-pink-400 duration-500 
                         transition-transform hover:scale-105"
            />
          </div>
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left order-2 md:order-1"
          data-aos={isMobile ? "fade-up" : "fade-right"}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-purple-400">Rajesh Roshan</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-purple-400 font-bold">
            <Typewriter
              words={[
                "Full-Stack Developer (MERN)",
                "Problem Solver",
                "Tech Explorer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-md sm:max-w-lg mx-auto md:mx-0">
            I'm a Full-Stack Web Developer specializing in building scalable
            applications using the <strong>MERN Stack</strong>. I love solving
            problems and exploring new technologies.
          </p>

          {/* View Resume Button */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="/Resume/Rajesh.pdf" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-purple-400 text-purple-400 rounded-lg 
                                 hover:bg-purple-900 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] 
                                 transition-all duration-300 text-sm sm:text-base md:text-lg font-semibold shadow-md">
                <Download size={20} /> View Resume
              </button>
            </a>
          </div>

          {/* Social Icons */}
          <div
            className="flex justify-center md:justify-start gap-6 text-3xl sm:text-4xl mt-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="https://github.com/Rajesh-Roshan98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rajeshroshan89/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-transform transform hover:scale-110"
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
              className="text-gray-400 hover:text-red-400 transition-transform transform hover:scale-110 cursor-pointer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
