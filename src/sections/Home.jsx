import React, { useEffect, useRef } from "react";
import { Eye } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import avatarimg from "../assets/IMG_20250827_122932.jpg";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const navigate = useNavigate();
  const avatarRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const avatarShift = Math.min(scrollY * 0.03, 20);

          if (avatarRef.current) {
            avatarRef.current.style.transform = `translateY(${avatarShift}px)`;
          }

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
      // ✅ Added consistent px-4 sm:px-10 md:px-20 to perfectly match the outer padding of all other sections
      className="relative w-full min-h-screen bg-transparent text-white flex items-center justify-center py-20 px-4 sm:px-10 md:px-20 overflow-hidden"
    >
      {/* ✅ Container: Replaced percentage widths with w-full max-w-[1920px] mx-auto to align seamlessly with Projects & Certificates */}
      {/* Reduced the max gap from 6rem to 4rem */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-[1920px] mx-auto gap-[clamp(2.5rem,5vw,4rem)]">
        {/* Avatar Section */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end relative order-1 md:order-2"
          data-aos={isMobile ? "fade-up" : "fade-left"}
          data-aos-delay="300"
        >
          <div ref={avatarRef} className="relative group">
            {/* Glowing background */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 opacity-40 blur-[clamp(1.5rem,3vw,3rem)] animate-pulse transition-opacity duration-500 group-hover:opacity-70"></div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 opacity-30 blur-[clamp(1rem,2vw,2rem)] animate-pulse"></div>

            {/* Avatar Image: Capped max size at 22rem (352px) down from 35rem so it doesn't get massive */}
            <img
              src={avatarimg}
              alt="Raj Avatar"
              className="relative rounded-full object-cover 
                         w-[clamp(11rem,20vw,22rem)] h-[clamp(11rem,20vw,22rem)] 
                         shadow-[0_0_40px_rgba(168,85,247,0.4)] border-4 border-purple-500/50 
                         hover:border-pink-400 duration-500 transition-all hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Text Section */}
        {/* ✅ REMOVED 'transition-transform duration-500 hover:-translate-y-1' from this div so the whole block stops moving */}
        <div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 space-y-[clamp(1.25rem,2vw,2rem)]"
          data-aos={isMobile ? "fade-up" : "fade-right"}
        >
          {/* Heading: Capped max text size to 4.5rem down from 6rem */}
          <h1 className="text-[clamp(2rem,4vw,4.5rem)] font-extrabold leading-tight tracking-tight">
            Hi, I'm <br className="hidden md:block" />
            {/* ✅ REMOVED 'animate-pulse' from the span below so the name stops blinking */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400">
              Rajesh Roshan
            </span>
          </h1>

          {/* Subheading: Capped max text size to 2.25rem down from 3rem */}
          <h2 className="text-[clamp(1.15rem,1.8vw,2.25rem)] text-gray-300 font-semibold h-[clamp(2rem,2.5vw,3rem)]">
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

          {/* Paragraph: Capped text size and max-width so it doesn't stretch too far */}
          <p className="text-[clamp(0.875rem,1vw,1.125rem)] text-gray-400 max-w-[clamp(25rem,30vw,35rem)] leading-relaxed">
            I'm a Full-Stack Web Developer specializing in building scalable
            applications using the{" "}
            <span className="text-purple-300 font-semibold">MERN Stack</span>. I
            love solving problems and exploring new technologies.
          </p>

          {/* View Resume Button: Capped padding and text size */}
          <div
            className="flex gap-4 pt-[clamp(0.5rem,1vw,1.5rem)]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="/Resume/Rajesh.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="group relative flex items-center justify-center gap-2 bg-transparent border border-purple-500 text-purple-300 rounded-full 
                                 px-[clamp(1.5rem,2vw,2.5rem)] py-[clamp(0.75rem,1vw,1rem)] text-[clamp(0.875rem,1vw,1rem)]
                                 hover:bg-purple-600/10 hover:text-white hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] 
                                 transition-all duration-300 font-semibold overflow-hidden"
              >
                <Eye className="w-[clamp(1.1rem,1.2vw,1.25rem)] h-[clamp(1.1rem,1.2vw,1.25rem)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-pink-400" />
                <span className="relative z-10">View Resume</span>
              </button>
            </a>
          </div>

          {/* Social Icons: Capped padding and icon size */}
          <div
            className="flex gap-[clamp(1rem,1.2vw,1.25rem)] pt-[clamp(0.2rem,0.5vw,0.5rem)]"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="https://github.com/Rajesh-Roshan98"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[clamp(0.6rem,0.8vw,0.875rem)] bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:border-gray-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaGithub className="w-[clamp(1.2rem,1.4vw,1.5rem)] h-[clamp(1.2rem,1.4vw,1.5rem)]" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajeshroshan89/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[clamp(0.6rem,0.8vw,0.875rem)] bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaLinkedin className="w-[clamp(1.2rem,1.4vw,1.5rem)] h-[clamp(1.2rem,1.4vw,1.5rem)]" />
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
              className="p-[clamp(0.6rem,0.8vw,0.875rem)] bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <FaEnvelope className="w-[clamp(1.2rem,1.4vw,1.5rem)] h-[clamp(1.2rem,1.4vw,1.5rem)]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
