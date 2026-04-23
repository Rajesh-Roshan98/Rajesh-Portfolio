import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState, useEffect, useRef } from "react";
import useIsMobile from "../hooks/useIsMobile"; // 👈 Custom hook preserved

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home"); // ✅ Replaces useLocation for active state
  const isMobile = useIsMobile();
  const ticking = useRef(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/About" },
    { name: "Skills", to: "/Skills" },
    { name: "Projects", to: "/Projects" },
    { name: "Certificates", to: "/Certificates" },
    { name: "Contact", to: "/Contact" },
  ];

  const handleToggle = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (to, name) => {
    setMenuOpen(false);
    setActiveSection(name); // Set clicked item as active

    // ✅ Unified scroll logic for both Mobile & Desktop
    const section = document.getElementById(name);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Existing scroll tracker for background transparency
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌟 NEW FIX: Intersection Observer to update active nav link during manual scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }, // Triggers when 40% of the section is visible in the viewport
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.name);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <nav
      /* 🌟 FIX: Moved backdrop-blur back to the base class and completely removed border-b to stop the Chrome rendering glitch */
      /* Layout classes (flex, px) moved to the inner container for dynamic max-width handling */
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out backdrop-blur-md ${
        isScrolled
          ? "bg-[#0a0f1c]/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* ✅ Inner container matches the 1920px max-width and edge padding of Home, Projects, etc. */}
      <div className="w-full max-w-[1920px] mx-auto flex justify-between items-center px-4 sm:px-10 md:px-20">
        {/* 🌟 UPGRADE 2: Gradient Logo */}
        <button
          className="text-2xl sm:text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
          onClick={() => handleLinkClick("/", "Home")}
        >
          RR
        </button>

        {/* Nav Links */}
        <ul
          /* 🌟 UPGRADE 4: Premium Mobile Menu Card */
          className={`${
            menuOpen ? "flex flex-col gap-6" : "hidden"
          } md:flex md:flex-row md:gap-8 font-medium text-center absolute md:static top-[76px] left-4 right-4 bg-[#0a0f1c]/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border border-white/10 md:border-transparent shadow-[0_10px_40px_rgba(0,0,0,0.6)] md:shadow-none rounded-2xl md:rounded-none p-8 md:p-0 transition-all duration-500`}
        >
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <button
                onClick={() => handleLinkClick(link.to, link.name)}
                className={`block w-full cursor-pointer transition-colors duration-300 text-sm sm:text-base tracking-wide ${
                  activeSection === link.name
                    ? "text-purple-400 font-bold"
                    : "text-gray-300 hover:text-purple-300"
                }`}
              >
                {link.name}
              </button>

              {/* 🌟 UPGRADE 3: Animated Glowing Underline (Desktop Only) */}
              <span
                className={`hidden md:block absolute -bottom-1.5 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full group-hover:left-0 left-1/2 ${
                  activeSection === link.name
                    ? "w-full !left-0 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    : ""
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Hamburger / Close Icon */}
        <div className="md:hidden">
          {menuOpen ? (
            <RiCloseLine
              size={28}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer drop-shadow-md"
              onClick={handleToggle}
            />
          ) : (
            <RiMenu2Line
              size={28}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer drop-shadow-md"
              onClick={handleToggle}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
