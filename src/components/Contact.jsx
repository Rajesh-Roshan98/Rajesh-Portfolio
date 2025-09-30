import React, { useEffect, useState } from "react";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/v1/createcontact", formData);
      if (res.status === 201 && res.data.message) {
        toast.success(res.data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(res.data.error || "❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.error ||
        err.response?.data?.message ||
        "❌ Something went wrong. Try again later."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="Contact"
      className="relative w-full h-screen bg-[#0a0f1c] text-white overflow-hidden flex items-center justify-center px-6 md:px-20"
    >
      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-fuchsia-500 opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center justify-center h-full overflow-hidden">
        {/* Section Title */}
        <div data-aos="fade-up" className="mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get <span className="text-purple-400">in Touch</span>
          </h2>
          <p className="text-lg text-gray-300">
            I’m open to <span className="text-white font-semibold">internship</span> and{" "}
            <span className="text-white font-semibold">entry-level</span> opportunities.
            Let’s build something amazing together!
          </p>
        </div>

        {/* Contact Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="p-8 bg-[#111827] rounded-lg border border-gray-700
                     transition-transform duration-300 ease-in-out transform hover:scale-105
                     hover:shadow-[0_0_20px_rgba(168,85,247,0.6),0_0_40px_rgba(168,85,247,0.3)]
                     will-change-transform max-w-md w-full"
        >
          <p className="text-gray-300 mb-6">
            Send me a direct message below.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md 
                         text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md 
                         text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md 
                         text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700
                         text-white font-medium rounded-lg shadow-md 
                         transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
                         transform hover:scale-105 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
