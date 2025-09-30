import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import { Toaster } from 'react-hot-toast';

function App() {
  // Scroll to top on initial load
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-200 via-white to-blue-100 text-gray-800 overflow-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificate />} />
        </Routes>

        {/* 🔥 Themed Toast Notifications */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              background: '#111827', // Dark card background
              color: '#fff',
              border: '1px solid #6d28d9', // Purple border
              borderRadius: '12px',
              padding: '12px 16px',
              fontSize: '14px',
              fontWeight: '500',
              boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            },
            success: {
              iconTheme: {
                primary: '#a855f7', // Purple success
                secondary: '#111827',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444', // Red error
                secondary: '#111827',
              },
            },
          }}
        />
      </main>
    </div>
  );
}

export default App;
