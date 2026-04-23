import React from "react";

const Theme = ({ children }) => {
  return (
    <>
      {/* 🌌 COMPLETELY FROZEN BACKGROUND LAYER WITH GLOBAL BLOBS */}
      <div className="fixed inset-0 w-full h-full bg-[#0a0f1c] -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500 opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-fuchsia-500 opacity-20 rounded-full blur-3xl" />
      </div>

      {/* Renders your app content on top */}
      {children}
    </>
  );
};

export default Theme;
