import React from "react";
import "aos/dist/aos.css";

const certificates = [
  {
    title: "Introduction To Internet Of Things",
    issuer: "NPTEL",
    date: "April 2025",
    description:
      "Successfully completed a 12-week NPTEL online certification on Introduction to Internet of Things, earning Elite status with a consolidated score of 61%. The course covered IoT fundamentals, applications, and hands-on learning.",
    link: "https://drive.google.com/file/d/1OSG9wIX3zB1_a4FhqtLnnZQQHwlIoEzm/view?usp=drive_link",
    image: "/assets/Introduction To Internet Of Things.png",
  },
  {
    title: "MEAN & React JS Internship",
    issuer: "MCA PL",
    date: "June 2025",
    type: "Internship",
    description:
      "Completed hands-on training in MEAN Stack (MongoDB, Express.js, Angular, Node.js) and React.js with Grade 'B'.",
    link: "https://drive.google.com/file/d/198hePmRc5PRCIjTxoXMC__KHBHVMjIIm/view?usp=sharing",
    image: "/assets/MEAN CERTIFICATE.png",
  },
  {
    title: "Industry Exposure Program (Python - AWS)",
    issuer: "Hebbale Academy",
    date: "July 2025",
    type: "Internship",
    description:
      "Virtual internship with exposure to Python backend, AWS services (Lambda, S3, DynamoDB), frontend (HTML, CSS, JS), Git, and Hackathon participation.",
    link: "https://drive.google.com/file/d/1Y7ErVM3ZvJWX22-EzqzrGarQE4eJsPP-/view?usp=sharing",
    image: "/assets/Rajesh Roshan.png",
  },
  {
    title: "Agentic AI Hackathon",
    issuer: "Hebbale Academy",
    date: "September 2025",
    type: "Hackathon",
    description:
      "Participated in the Agentic AI Hackathon 2025 organized by Hebbale Academy at GIET University. Demonstrated enthusiasm and problem-solving skills while contributing to AI-based project activities during the 3-day event.",
    link: "https://drive.google.com/file/d/175ywbVpU_2LtDtPTKCoe-iDGoK-bPO0P/view?usp=sharing",
    image: "/assets/Hackathon.png",
  },
];

const Certificates = () => {
  // ❌ Scroll state, event listeners, and redundant AOS.init removed to fix the lag!

  return (
    <section
      id="Certificates"
      // ✅ bg-transparent allows the global static background to show through perfectly
      className="relative py-20 px-4 sm:px-10 md:px-20 bg-transparent text-white overflow-hidden"
    >
      {/* Container max-width increased to 1920px. This ensures the same edge padding across all standard and large monitors. */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          {/* 🌟 UPGRADE 1: Gradient Typography */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Certificates
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
            A collection of{" "}
            <span className="text-purple-400 font-semibold">
              certifications
            </span>{" "}
            and{" "}
            <span className="text-yellow-400 font-semibold">achievements</span>{" "}
            demonstrating my{" "}
            <span className="text-white font-medium">learning journey</span> in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold">
              web development and programming
            </span>
            .
          </p>
        </div>

        {/* Certificates Grid - Fully Dynamic Auto-Fit System */}
        <div className="grid gap-5 lg:gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {certificates.map((cert, idx) => (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              /* 🌟 UPGRADE 2: Glassmorphism Cards & Compact Padding */
              className="group relative block bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 
                         p-4 sm:p-5
                         transition-all duration-500 ease-in-out transform hover:-translate-y-2
                         hover:bg-white/10 hover:border-purple-500/50
                         hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] overflow-hidden"
            >
              {/* Subtle inner top glow on hover */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

              {/* Image - Height slightly reduced for compactness */}
              <div className="relative z-10 w-full h-40 sm:h-44 md:h-40 lg:h-36 flex justify-center items-center bg-black/20 border border-white/5 rounded-xl overflow-hidden mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2 rounded-md transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="relative z-10 text-center sm:text-left space-y-2">
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-2 sm:gap-3 mb-1">
                  {/* Scaled down text slightly */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-100 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>

                  {/* 🌟 UPGRADE 3: Premium Badge Styling */}
                  {cert.type && (
                    <span className="flex-shrink-0 px-2.5 py-1 text-[9px] sm:text-[10px] font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full tracking-wide shadow-sm">
                      {cert.type.toUpperCase()}
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-baseline sm:justify-start gap-1 sm:gap-2">
                  <p className="text-gray-300 font-medium text-xs sm:text-sm">
                    {cert.issuer}
                  </p>
                  <span className="hidden sm:inline text-gray-600">•</span>
                  <p className="text-gray-500 text-[10px] sm:text-xs">
                    {cert.date}
                  </p>
                </div>

                {cert.description && (
                  <p className="mt-2 text-gray-400 text-xs sm:text-sm leading-relaxed text-center sm:text-left">
                    {cert.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
