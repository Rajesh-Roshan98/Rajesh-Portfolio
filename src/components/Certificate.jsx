import React, { useEffect, useState } from "react";
import AOS from "aos";
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
    type: "internship",
    description:
      "Completed hands-on training in MEAN Stack (MongoDB, Express.js, Angular, Node.js) and React.js with Grade 'B'.",
    link: "https://drive.google.com/file/d/198hePmRc5PRCIjTxoXMC__KHBHVMjIIm/view?usp=sharing",
    image: "/assets/MEAN CERTIFICATE.png",
  },
  {
    title: "Industry Exposure Program (Python - AWS)",
    issuer: "Hebbale Academy",
    date: "July 2025",
    type: "internship",
    description:
      "Virtual internship with exposure to Python backend, AWS services (Lambda, S3, DynamoDB), frontend (HTML, CSS, JS), Git, and Hackathon participation.",
    link: "https://drive.google.com/file/d/1Y7ErVM3ZvJWX22-EzqzrGarQE4eJsPP-/view?usp=sharing",
    image: "/assets/Rajesh Roshan.png",
  },
];

export default function Certificate() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="Certificates"
      className="relative min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#0a0f1c] text-white overflow-hidden"
    >
      {/* Background blobs */}
      <div
        className="absolute -top-40 -left-40 w-[70vw] sm:w-[50vw] md:w-[400px] h-[70vw] sm:h-[50vw] md:h-[400px] bg-blue-500 opacity-20 rounded-full blur-3xl z-0 animate-blob1"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[70vw] sm:w-[50vw] md:w-[400px] h-[70vw] sm:h-[50vw] md:h-[400px] bg-fuchsia-500 opacity-20 rounded-full blur-3xl z-0 animate-blob2"
        style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
      />

      {/* Header */}
      <div
        className="relative z-10 max-w-5xl mx-auto text-center mb-10 sm:mb-14"
        data-aos="fade-up"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          My <span className="text-purple-400">Certificates</span>
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          A showcase of my certifications and achievements earned over time.
        </p>
      </div>

      {/* Certificates Grid */}
      <div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
      >
        {certificates.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="group block bg-[#111827] rounded-xl border border-gray-700 
                       p-4 sm:p-5 md:p-4 lg:p-3
                       transition-transform duration-300 hover:scale-[1.03]
                       hover:shadow-[0_0_15px_rgba(168,85,247,0.5),0_0_25px_rgba(168,85,247,0.3)]"
          >
            {/* Image */}
            <div className="relative w-full h-44 sm:h-48 md:h-44 lg:h-40 flex justify-center items-center bg-gray-900/30 rounded-lg overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain rounded-md transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="mt-3 text-center sm:text-left space-y-1">
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
                <h3 className="text-base sm:text-lg md:text-lg lg:text-base font-semibold text-purple-400 leading-tight">
                  {cert.title}
                </h3>
                {cert.type && (
                  <span className="px-2 py-[2px] text-[10px] sm:text-xs font-medium text-white bg-purple-600 rounded-full">
                    {cert.type.toUpperCase()}
                  </span>
                )}
              </div>

              <p className="text-gray-300 text-xs sm:text-sm">{cert.issuer}</p>
              <p className="text-gray-500 text-[10px] sm:text-xs">{cert.date}</p>

              {cert.description && (
                <p className="mt-1 text-gray-400 text-xs sm:text-sm leading-relaxed text-justify sm:text-left">
                  {cert.description}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 
