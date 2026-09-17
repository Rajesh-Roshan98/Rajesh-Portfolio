import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const renderSocialIcon = (iconType) => {
  switch (iconType) {
    case "github":
      return <FaGithub className="w-[clamp(1.2rem,1.4vw,1.5rem)] h-[clamp(1.2rem,1.4vw,1.5rem)]" />;
    case "linkedin":
      return <FaLinkedin className="w-[clamp(1.2rem,1.4vw,1.5rem)] h-[clamp(1.2rem,1.4vw,1.5rem)]" />;
    case "twitter":
      return <FaTwitter className="w-[clamp(1.2rem,1.4vw,1.5rem)] h-[clamp(1.2rem,1.4vw,1.5rem)]" />;
    case "leetcode":
      return <SiLeetcode className="w-[clamp(1.2rem,1.4vw,1.5rem)] h-[clamp(1.2rem,1.4vw,1.5rem)]" />;
    case "codechef":
      return <SiCodechef className="w-[clamp(1.2rem,1.4vw,1.5rem)] h-[clamp(1.2rem,1.4vw,1.5rem)]" />;
    default:
      return null;
  }
};

// Provides the exact original hover glow and colors per platform
const getSocialHoverStyles = (iconType) => {
  switch (iconType) {
    case "linkedin":
      return "hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]";
    case "twitter":
      return "hover:text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]";
    case "leetcode":
      return "hover:text-yellow-400 hover:bg-yellow-500/10 hover:border-yellow-500/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.4)]";
    case "github":
    default:
      return "hover:text-white hover:bg-white/10 hover:border-gray-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]";
  }
};

export { renderSocialIcon, getSocialHoverStyles };