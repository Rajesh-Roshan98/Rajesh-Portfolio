
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleItemClick = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const sections = ["Home", "About", "Skills", "Projects", "Contact"];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skills", to: "/skills" },
    { name: "Projects", to: "/projects" },
    { name: "Certificates", to: "/certificates" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 md:px-20 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#Home" className="text-2xl font-extrabold text-blue-600 tracking-wide">
        RR
      </a>

      {/* Navigation Links */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex gap-6 font-medium md:font-semibold text-center md:static absolute top-[70px] left-6 right-6 bg-white md:bg-transparent shadow-md md:shadow-none rounded-xl md:rounded-none p-6 md:p-0`}
      >
        {navLinks.map((link) => (
          <li key={link.name} onClick={handleItemClick}>
            <Link
              to={link.to}
              className={`cursor-pointer transition-colors duration-300 hover:text-blue-500 ${
                location.pathname === link.to ? "text-blue-600 font-bold" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine size={28} className="text-gray-700 cursor-pointer" onClick={handleToggle} />
        ) : (
          <RiMenu2Line size={28} className="text-gray-700 cursor-pointer" onClick={handleToggle} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
