import React from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

const footLinks = [
  // ✅ Fixed case-sensitivity to exactly match the capitalized IDs in your App.jsx
  { name: "Home", to: "#Home" },
  { name: "About", to: "#About" },
  { name: "Skills", to: "#Skills" },
  { name: "Projects", to: "#Projects" },
  { name: "Certificates", to: "#Certificates" },
  { name: "Contact", to: "#Contact" },
];

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 py-10 sm:py-12 md:py-16 border-t border-white/10 relative overflow-hidden">
      {/* ✅ Updated classes to perfectly match Home.jsx margins: w-full max-w-[1920px] and px-4 sm:px-10 md:px-20 */}
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-10 md:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-8 justify-items-center">
          
          {/* Name & Description Section */}
          <div className="space-y-5 ">
            <div>
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 tracking-tight block">
                Rajesh Roshan
              </h3>
              <span className="inline-block mt-3 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium rounded-full shadow-sm">
                MERN Stack Developer
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300 max-w-sm">
              MERN Stack Developer passionate about building scalable web applications and solving real-world problems through clean, efficient, and user-focused solutions.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white tracking-widest uppercase">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {footLinks.map((link) => (
                <li key={link.name}>
                  {/* ✅ Added a programmatic smooth scroll to guarantee navigation works in React */}
                  <a 
                    href={link.to} 
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.to.substring(1); // Removes the '#'
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="group relative inline-block text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 pb-1"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white tracking-widest uppercase">Connect with Me</h4>
            <div className="flex space-x-4">
              
              <a 
                href="https://github.com/Rajesh-Roshan98" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                className="group relative flex items-center justify-center h-11 w-11 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-400 hover:bg-gradient-to-tr hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              >
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-white/10 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">GitHub</span>
                <FaGithub className="h-5 w-5" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/rajeshroshan89/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
                className="group relative flex items-center justify-center h-11 w-11 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-400 hover:bg-gradient-to-tr hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              >
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-white/10 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">LinkedIn</span>
                <FaLinkedin className="h-5 w-5" />
              </a>
              
            </div>

            <div className="text-sm text-gray-400">
              📧 <a href="mailto:rrajeshroshan89@gmail.com" className="hover:text-purple-400 transition-colors duration-300">rrajeshroshan89@gmail.com</a>
            </div>

            <div className="pt-2">
              {/* ✅ Made the download link bulletproof with target="_blank" and an explicit filename */}
              <a 
                href="/Resume/Rajesh.pdf" 
                download="Rajesh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 font-medium">
              &copy; {new Date().getFullYear()} Rajesh Roshan. All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Designed & Built by Rajesh Roshan
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            {/* Status indicator */}
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <span className="text-sm text-gray-400 font-medium tracking-wide">Open to MERN Stack Developer Roles</span>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-pink-400 transition-colors duration-300"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;