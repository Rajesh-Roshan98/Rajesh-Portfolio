import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="Contact"
      className="relative w-full bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white px-6 py-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Contact Info */}
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-400">Contact</h1>
          <h3 className="text-md md:text-xl text-gray-300">Feel free to reach out!</h3>
        </div>

        {/* Contact Links */}
        <ul className="text-sm md:text-lg space-y-3 text-center md:text-left">
          <li className="flex items-center gap-2 justify-center md:justify-start">
            <MdOutlineEmail size={20} />
            <span>rrajeshroshan15@gmail.com</span>
          </li>
          <li className="flex items-center gap-2 justify-center md:justify-start">
            <CiLinkedin size={20} />
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300 transition"
            >
              linkedin.com/in/username
            </a>
          </li>
          <li className="flex items-center gap-2 justify-center md:justify-start">
            <FaGithub size={20} />
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300 transition"
            >
              github.com/username
            </a>
          </li>
        </ul>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 -top-5 md:top-auto md:bottom-6 md:right-10 bg-white text-gray-800 hover:bg-blue-100 p-2 rounded-full shadow-lg transition-all"
          title="Back to Top"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
