import React, { useState } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ❌ Scroll state, event listeners, and redundant AOS.init removed to eliminate the lag!

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        setFormData({ name: "", email: "", message: "" });
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
      // ✅ bg-transparent allows the global static background to show through perfectly
      className="relative w-full min-h-screen bg-transparent text-white px-4 sm:px-10 md:px-20 py-20 flex items-center justify-center overflow-hidden"
    >
      {/* ❌ Local Background blobs removed to maintain the static global background from App.jsx */}

      {/* Adjusted max-w-lg to max-w-md to make the form container slightly narrower */}
      <div className="relative z-10 max-w-md w-full">
        {/* Header Section */}
        <div data-aos="fade-up" className="text-center mb-10">
          {/* 🌟 UPGRADE 1: Gradient Typography */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            Get{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              in Touch
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-just max-w-2xl mx-auto">
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

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="150"
          /* 🌟 UPGRADE 2: Glassmorphism Form Card - Reduced padding and gaps here */
          className="relative flex flex-col gap-4 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] overflow-hidden"
        >
          {/* Subtle top glow indicator */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-70"></div>

          {/* 🌟 UPGRADE 3: Premium Input Fields - Reduced py-3.5 to py-3 */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0a0f1c]/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 text-sm sm:text-base"
            />
          </div>
          <div>
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
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0a0f1c]/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400 transition-all duration-300 resize-none text-sm sm:text-base"
            />
          </div>

          {/* 🌟 UPGRADE 4: Gradient Submit Button - Reduced padding here as well */}
          <button
            type="submit"
            disabled={loading}
            className="relative w-full mt-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100 text-sm sm:text-base tracking-wide"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
