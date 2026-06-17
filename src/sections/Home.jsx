import React, { useEffect, useRef } from "react";
import { Eye } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import avatarimg from "../assets/IMG_20250827_122932.jpg";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
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
      // ✅ Added pt-32 pb-20 instead of py-20 to push the content down and clear the navbar
      className="relative w-full min-h-screen bg-transparent text-white flex items-center justify-center pt-22 pb-12 px-4 sm:px-10 md:px-20 overflow-hidden"
    >
      {/* ✅ Container: Replaced percentage widths with w-full max-w-[1920px] mx-auto to align seamlessly with Projects & Certificates */}
      {/* Reduced the max gap from 6rem to 4rem */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-[1920px] mx-auto gap-[clamp(2.5rem,5vw,4rem)]">
        {/* Avatar Section */}
        {/* ✅ Added md:pr-8 lg:pr-12 to add extra padding from the right margin */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end relative order-1 md:order-2 md:pr-8 lg:pr-12"
          data-aos={isMobile ? "fade-up" : "fade-left"}
          data-aos-delay="300"
        >
          <div ref={avatarRef} className="relative group">
            {/* Glowing background */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 opacity-40 blur-[clamp(1.5rem,3vw,3rem)] animate-pulse transition-opacity duration-500 group-hover:opacity-70"></div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-purple-500 via-pink-400 to-blue-400 opacity-30 blur-[clamp(1rem,2vw,2rem)] animate-pulse"></div>

            {/* Avatar Image: ✅ Increased sizes via clamp() for a bigger presence optimized across all screens */}
            {/* ✅ Added eager loading and high fetch priority */}
            <img
              src={avatarimg}
              alt="Raj Avatar"
              loading="eager"
              fetchPriority="high"
              className="relative rounded-full object-cover 
                         w-[clamp(14rem,32vw,25rem)] h-[clamp(14rem,32vw,25rem)] 
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
          {/* ✅ Heading: Reduced minimum clamp size for better mobile fitting */}
          <h1 className="text-[clamp(1.75rem,5vw,4.5rem)] font-extrabold leading-tight tracking-tight">
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

          {/* ✅ Availability Badge: Scaled down text and padding for mobile screens */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-sm mt-[-0.5rem]">
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-green-500"></span>
            </span>
            Open to MERN Stack Developer Roles
          </div>

          {/* Paragraph: Updated to requested cleaner description */}
          <p className="text-[clamp(0.875rem,1vw,1.125rem)] text-gray-400 max-w-[clamp(25rem,30vw,35rem)] leading-relaxed">
            Full-Stack Developer specializing in the{" "}
            <span className="text-purple-300 font-semibold">MERN Stack</span>,
            passionate about building scalable web applications, solving
            real-world problems, and delivering clean user experiences.
          </p>

          {/* ✅ Buttons: Forced flex-row and whitespace-nowrap to guarantee side-by-side alignment on all screens */}
          <div
            className="flex flex-row gap-3 sm:gap-4 pt-[clamp(0.5rem,1vw,1.5rem)] justify-center md:justify-start w-full sm:w-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="/Resume/Rajesh.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="group relative flex items-center justify-center gap-1.5 sm:gap-2 bg-transparent border border-purple-500 text-purple-300 rounded-full 
                                 px-[clamp(1rem,2vw,2.5rem)] py-[clamp(0.6rem,1vw,1rem)] text-[clamp(0.75rem,1vw,1rem)] whitespace-nowrap
                                 hover:bg-purple-600/10 hover:text-white hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] 
                                 transition-all duration-300 font-semibold overflow-hidden cursor-pointer"
              >
                <Eye className="w-[clamp(1rem,1.2vw,1.25rem)] h-[clamp(1rem,1.2vw,1.25rem)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-pink-400" />
                <span className="relative z-10">View Resume</span>
              </button>
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("Contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full 
                                 px-[clamp(1rem,2vw,2.5rem)] py-[clamp(0.6rem,1vw,1rem)] text-[clamp(0.75rem,1vw,1rem)] whitespace-nowrap
                                 hover:from-purple-500 hover:to-pink-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] 
                                 transition-all duration-300 font-semibold overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Contact Me</span>
            </button>
          </div>

          {/* Social Icons: Staggered animation, load on visit without scrolling */}
          <div className="flex gap-[clamp(1rem,1.2vw,1.25rem)] pt-[clamp(0.2rem,0.5vw,0.5rem)]">
            <a
              href="https://github.com/Rajesh-Roshan98"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="p-[clamp(0.6rem,0.8vw,0.875rem)] bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:border-gray-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaGithub className="w-[clamp(1.2rem,1.4vw,1.5rem)] h-[clamp(1.2rem,1.4vw,1.5rem)]" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajeshroshan89/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              data-aos="fade-up"
              data-aos-delay="650"
              data-aos-offset="0"
              className="p-[clamp(0.6rem,0.8vw,0.875rem)] bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaLinkedin className="w-[clamp(1.2rem,1.4vw,1.5rem)] h-[clamp(1.2rem,1.4vw,1.5rem)]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;