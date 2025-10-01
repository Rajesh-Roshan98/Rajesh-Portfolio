import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!import.meta.env.VITE_BACKEND_URL) {
      toast.error("Backend URL is not defined. Please check .env file.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contact/createcontact`,
        formData
      );

      // Safely extract message
      const message = res?.data?.message;
      if (res.status === 201 && message && typeof message === "string") {
        toast.success(message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorMsg =
          typeof res?.data?.error === "string" ? res.data.error : "❌ Failed to send message.";
        toast.error(errorMsg);
      }
    } catch (err) {
      // Safely extract error message
      const errorMsg =
        typeof err?.response?.data?.error === "string"
          ? err.response.data.error
          : typeof err?.response?.data?.message === "string"
          ? err.response.data.message
          : err?.message || "❌ Something went wrong.";
      toast.error(errorMsg);
    }
    setLoading(false);
  };

  return (
    <section
      id="Contact"
      className="relative w-full min-h-screen bg-[#0a0f1c] text-white px-4 sm:px-10 md:px-20 py-20 flex items-center justify-center"
    >
      {/* Background blobs with parallax */}
      <div
        className="absolute -top-40 -left-40 w-[60vw] sm:w-[40vw] md:w-[500px] h-[60vw] sm:h-[40vw] md:h-[500px] bg-blue-500 opacity-20 rounded-full blur-3xl z-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[60vw] sm:w-[40vw] md:w-[500px] h-[60vw] sm:h-[40vw] md:h-[500px] bg-fuchsia-500 opacity-20 rounded-full blur-3xl z-0 pointer-events-none"
        style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
      />

      <div className="relative z-10 max-w-md w-full">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get <span className="text-purple-400">in Touch</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            I’m open to <span className="font-semibold text-white">internship</span> and{" "}
            <span className="font-semibold text-white">entry-level</span> opportunities.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="150"
          className="flex flex-col gap-4 bg-[#111827] p-6 rounded-lg border border-gray-700 shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm sm:text-base"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 hover:scale-105 disabled:opacity-50 text-sm sm:text-base"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
