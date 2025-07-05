import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const header = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" }
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll highlighting logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    header.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0F172A] shadow-md text-white">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1200px] mx-auto">
        {/* Logo */}
        <img src="/Images/logo.png" width={50} alt="Logo" className="z-50" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[17px] font-bold">
          {header.map((item) => (
            <li
              key={item.id}
              className={`transition-colors duration-300 cursor-pointer ${
                activeSection === item.id ? 'text-[#38BDF8]' : 'text-[#F1F5F9]'
              }`}
            >
              <a href={`#${item.id}`}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] px-6 py-4">
          <ul className="flex flex-col gap-4 text-[17px] font-bold">
            {header.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition-colors duration-300 ${
                    activeSection === item.id ? 'text-[#38BDF8]' : 'text-[#F1F5F9]'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
