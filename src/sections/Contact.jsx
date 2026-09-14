import React, { useState } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import toast from "react-hot-toast";
import { FaCheckCircle, FaRegCopy, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false); // ✅ Added state for form success animation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rrajeshroshan89@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const rawBackend =
        import.meta.env.VITE_BACKEND_URL || import.meta.env.VITE_API_URL || "";
      const backendBase = rawBackend
        ? String(rawBackend).replace(/\/+$/, "")
        : "";
      const endpoint = backendBase
        ? `${backendBase}/api/v1/createcontact`
        : "/api/v1/createcontact";
      const res = await axios.post(endpoint, formData);
      if (res.status === 201 && res.data.message) {
        toast.success(res.data.message);
        setFormData({ name: "", email: "", subject: "", message: "" }); 
        setIsSent(true); // ✅ Trigger success animation
        setTimeout(() => setIsSent(false), 5000); // Automatically reset form after 5 seconds
      } else {
        toast.error(res.data.error || "❌ Failed to send message.");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "❌ Something went wrong.",
      );
    }
    setLoading(false);
  };

  return (
    <section
      id="Contact"
      className="relative w-full min-h-fit md:min-h-screen bg-transparent text-white px-4 sm:px-10 md:px-20 py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-hidden"
    >
      {/* ✅ Widened the container to 5xl to allow room for the side-by-side layout */}
      <div className="relative z-10 max-w-5xl w-full">
        
        {/* Header Section */}
        <div data-aos="fade-up" className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              in Touch
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            I’m open to{" "}
            <span className="text-purple-400 font-semibold">internship</span>{" "}
            and{" "}
            <span className="text-pink-400 font-semibold">
              entry-level opportunities
            </span>{" "}
            where I can{" "}
            <span className="text-white font-medium">contribute</span>,{" "}
            <span className="text-green-400 font-medium">learn</span>, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold">
              grow as a Full-Stack Web Developer
            </span>
            .
          </p>
        </div>

        {/* ✅ Grid container: Responsive gap scaling from mobile to desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center w-full">
          
          {/* Left Side: Contact Form OR Success Message */}
          <div
            data-aos="fade-right"
            data-aos-delay="150"
            className="relative flex flex-col gap-4 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden h-full"
          >
            {/* Subtle top glow indicator */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-70"></div>

            {isSent ? (
              /* ✅ Success Animation View */
              <div className="flex flex-col items-center justify-center h-full py-10 text-center animate-pulse">
                <FaCheckCircle className="w-16 h-16 text-green-400 mb-4 shadow-[0_0_20px_rgba(34,197,94,0.4)] rounded-full" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-400 text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
                <button 
                  type="button" 
                  onClick={() => setIsSent(false)} 
                  className="mt-6 text-sm text-purple-400 hover:text-pink-400 transition-colors duration-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Standard Form View */
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0f1c]/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 text-sm sm:text-base"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0f1c]/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0f1c]/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="4"
                    maxLength="500" // ✅ Added maxLength limit
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0f1c]/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 resize-none text-sm sm:text-base"
                  />
                  {/* ✅ Added Character Counter */}
                  <div className="text-right text-xs text-gray-500 mt-1.5 font-medium">
                    {formData.message.length} / 500 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full mt-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 text-sm sm:text-base tracking-wide"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Segmented Contact Enhancements Section */}
          <div className="flex flex-col gap-4 h-full justify-center w-full">
            
            {/* 1. Direct Email Box */}
            <div 
              data-aos="fade-left" 
              data-aos-delay="200"
              className="relative flex flex-col w-full p-4 sm:p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-60"></div>
              <h3 className="text-base font-semibold text-white mb-2 text-center md:text-left">Direct Email</h3>
              
              {/* ✅ UPDATED BUTTON LAYOUT: Ensures icon, text, and copy button stay inline properly */}
              <button 
                onClick={handleCopyEmail} 
                type="button" 
                className="group flex flex-row items-center justify-between w-full gap-3 px-3 py-2 text-sm bg-[#0a0f1c]/40 border border-gray-700/50 rounded-xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 text-white shadow-sm"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="flex-shrink-0">📧</span>
                  <span className="truncate font-medium">rrajeshroshan89@gmail.com</span>
                </div>
                <span className="flex-shrink-0 flex items-center gap-1.5 text-xs px-2 py-1.5 bg-gray-800 rounded-md text-gray-300 group-hover:text-white group-hover:bg-purple-600 transition-colors">
                  <FaRegCopy /> Copy
                </span>
              </button>
            </div>

            {/* 2. Location Box */}
            <div 
              data-aos="fade-left" 
              data-aos-delay="250"
              className="relative flex flex-col items-center md:items-start p-4 sm:p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-60"></div>
              <h3 className="text-base font-semibold text-white mb-1">Location</h3>
              <p className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-purple-400" size={16} />
                Odisha, India | Open to Relocation & On-site Opportunities
              </p>
            </div>

            {/* 3. Response Time Box */}
            <div 
              data-aos="fade-left" 
              data-aos-delay="300"
              className="relative flex flex-col items-center md:items-start p-4 sm:p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-60"></div>
              <h3 className="text-base font-semibold text-white mb-1">Response Time</h3>
              <p className="text-gray-300 font-medium tracking-wide text-sm text-center md:text-left">
                ⏳ Typically responds within 24 hours.
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;