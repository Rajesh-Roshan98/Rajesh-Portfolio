import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile"; // 👈 Add this custom hook

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile(); // ✅ Detect mobile
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

    if (isMobile) {
      // 📱 On mobile → scroll to section
      const section = document.getElementById(name);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // 🖥 On desktop → navigate to route
      navigate(to);
    }
  };

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-20 py-4 transition-colors duration-500 ease-in-out backdrop-blur-md ${
        isScrolled ? "bg-[#0a0f1c]/40" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <button
        className="text-2xl font-extrabold text-purple-400 tracking-wide"
        onClick={() => handleLinkClick("/", "Home")}
      >
        RR
      </button>

      {/* Nav Links */}
      <ul
        className={`${
          menuOpen ? "flex flex-col gap-4" : "hidden"
        } md:flex md:flex-row md:gap-6 font-medium text-center absolute md:static top-[70px] left-4 right-4 bg-[#0a0f1c]/80 md:bg-transparent shadow-md md:shadow-none rounded-xl md:rounded-none p-6 md:p-0 transition-all duration-500`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => handleLinkClick(link.to, link.name)}
              className={`block cursor-pointer transition-all duration-300 hover:text-purple-400 ${
                location.pathname === link.to && !isMobile
                  ? "text-purple-400 font-bold"
                  : "text-gray-300"
              }`}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger / Close Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine
            size={28}
            className="text-purple-400 cursor-pointer"
            onClick={handleToggle}
          />
        ) : (
          <RiMenu2Line
            size={28}
            className="text-purple-400 cursor-pointer"
            onClick={handleToggle}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
