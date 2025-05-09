import { FaLinkedin, FaInstagram, FaWhatsapp, FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAndScroll = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white overflow-hidden">
      <div className="px-6 py-4 flex items-center justify-between" data-aos="fade-in">
        {/* Logo */}
        <div>
          <h2 className="text-4xl text-blue-500 overflow-hidden">Husam</h2>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-600">
            <FaBars />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-6">
          {['home', 'certifications', 'projects', 'contact'].map((section) => (
            <h2 key={section}>
              <a
                href={`#${section}`}
                className="text-2xl text-gray-600 hover:text-blue-400 transition duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </h2>
          ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex gap-4 text-2xl text-gray-600">
          <a
            href="https://wa.me/+96181932448"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/husam_musa_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/husam-moussa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4 overflow-hidden">
          <button onClick={toggleMenu} className="text-3xl text-gray-600 overflow-hidden hover:text-blue-500">
            &times;
          </button>
        </div>
        <nav className="flex flex-col items-center gap-8 mt-6">
          {['home', 'certifications', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => closeMenuAndScroll(section)}
              className="text-2xl text-gray-600 overflow-hidden hover:text-blue-400 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <div className="flex gap-6 text-2xl text-gray-600 mt-6">
            <a
              href="https://wa.me/+96181932448"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/husam_musa_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/husam-moussa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
