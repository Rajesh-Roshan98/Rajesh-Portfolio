import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const certificates = [
  {
    title: "Introduction To Internet Of Things",
    issuer: "NPTL",
    date: "August 2025",
    link: "https://drive.google.com/file/d/1lUPymyBvMl0QGOWmRV61zvKWZxh2ABXG/view?usp=drive_link",
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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="Certificates"
      className="relative min-h-screen py-20 px-6 md:px-20 bg-[#0a0f1c] text-white"
    >
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-fuchsia-500 opacity-20 rounded-full blur-3xl z-0" />

      {/* Section Header */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My <span className="text-purple-400">Certificates</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my certifications and achievements earned over time.
        </p>
      </div>

      {/* Certificate Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, idx) => (
          <a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="block p-6 bg-[#111827] rounded-lg border border-gray-700
                       transition-all duration-300 ease-in-out transform hover:scale-105
                       hover:shadow-[0_0_20px_rgba(168,85,247,0.6),0_0_40px_rgba(168,85,247,0.3)]
                       will-change-transform"
          >
            {/* Certificate Image */}
            <div className="relative w-full h-56 flex justify-center items-center bg-gray-900/30 p-3 rounded-lg overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
              />
            </div>

            {/* Certificate Info */}
            <div className="mt-4">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-purple-400">{cert.title}</h3>
                <p className="text-gray-300 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 text-xs">{cert.date}</p>
              </div>

              {cert.type === "internship" && cert.description && (
                <p className="mt-2 text-gray-300 text-sm">{cert.description}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
