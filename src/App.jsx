import { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme"; 
import { Toaster } from "react-hot-toast";

// 🌟 UPGRADE: Lazy load section components for bundle splitting and faster initial load
const Home = lazy(() => import("./sections/Home"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Certificate = lazy(() => import("./sections/Certificate"));
const Skills = lazy(() => import("./sections/Skills"));

function App() {
  // Scroll to top on initial load and initialize AOS globally
  useEffect(() => {
    // Globally initialize AOS ONCE here, instead of in every child component
    AOS.init({
      duration: 800, // Unified duration for all screen sizes
      once: true,
      easing: "ease-out",
    });
    AOS.refresh();

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []); // ❌ Removed isMobile dependency

  return (
    <Theme>
      {/* 📜 SCROLLING CONTENT LAYER */}
      <div className="relative min-h-screen w-full text-white overflow-x-hidden">
        <Navbar />

        <main className="relative z-0">
          {/* 🌟 UPGRADE: Suspense boundary handles the loading state gracefully */}
          <Suspense 
            fallback={
              <div className="flex items-center justify-center min-h-screen w-full">
                {/* Premium glowing spinner */}
                <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
              </div>
            }
          >
            {/* Unified Single Page Layout with Smooth Scrolling */}
            <div className="flex flex-col gap-0 scroll-smooth">
              {/* ❌ Removed the conflicting Reveal wrappers so your native AOS handles the animations */}
              <section id="Home">
                <Home />
              </section>
              <section id="About">
                <About />
              </section>
              <section id="Skills">
                <Skills />
              </section>
              <section id="Projects">
                <Projects />
              </section>
              <section id="Certificates">
                <Certificate />
              </section>
              <section id="Contact">
                <Contact />
              </section>
            </div>
          </Suspense>

          {/* 🔥 Toast Notifications */}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: "#111827",
                color: "#fff",
                border: "1px solid #6d28d9",
                borderRadius: "12px",
                padding: "12px 16px",
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              },
              success: {
                iconTheme: {
                  primary: "#a855f7",
                  secondary: "#111827",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#111827",
                },
              },
            }}
          />
        </main>
      </div>
    </Theme>
  );
}

export default App;