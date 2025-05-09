import { FaLinkedin, FaInstagram, FaWhatsapp, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';
const Navbar = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration (in ms)
        easing: 'ease-in-out', // Easing function for animation
        once: false, // Trigger the animation only once
      });
    }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenuAndScroll = (id) => {
    setIsOpen(false); // Close the menu
    // Scroll smoothly to the section with the given id
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full px-6 py-4"data-aos="fade-in">
      <div className="relative flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center">
          <h2 className="text-4xl text-blue-500">Husam</h2>
        </div>

        {/* Right - Hamburger icon for small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-600">
            <FaBars />
          </button>
        </div>

        {/* Center - Navigation (Desktop) */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-6">
          <h2>
            <a
              href="#home"
              className="text-2xl text-gray-600 duration-300 hover:text-blue-400 cursor-pointer"
            >
              Home
            </a>
          </h2>
          <h2>
            <a
              href="#certifications"
              className="text-2xl text-gray-600 duration-300 hover:text-blue-400 cursor-pointer"
            >
              Certificates
            </a>
          </h2>
          <h2>
            <a
              href="#projects"
              className="text-2xl text-gray-600 duration-300 hover:text-blue-400 cursor-pointer"
            >
              Projects
            </a>
          </h2>
          <h2>
            <a
              href="#contact"
              className="text-2xl text-gray-600 duration-300 hover:text-blue-400 cursor-pointer"
            >
              Contact
            </a>
          </h2>
        </div>

        {/* Right - Social Media Icons (Desktop) */}
        <div className="hidden lg:flex gap-4 text-2xl text-gray-600">
          <a
            href="https://wa.me/+96181932448"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/husam_musa_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/husam-moussa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

     {/* Mobile - Navigation and Social Media Icons */}
<div
  className={`lg:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 py-10 px-6 transition-transform duration-300 ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  <div className="flex flex-col items-center gap-8">
    <button
      onClick={() => closeMenuAndScroll('home')}
      className="text-2xl text-gray-600 hover:text-blue-400 transition"
    >
      Home
    </button>
    <button
      onClick={() => closeMenuAndScroll('certifications')}
      className="text-2xl text-gray-600 hover:text-blue-400 transition"
    >
      Certificates
    </button>
    <button
      onClick={() => closeMenuAndScroll('projects')}
      className="text-2xl text-gray-600 hover:text-blue-400 transition"
    >
      Projects
    </button>
    <button
      onClick={() => closeMenuAndScroll('contact')}
      className="text-2xl text-gray-600 hover:text-blue-400 transition"
    >
      Contact
    </button>

    {/* Social Media Icons */}
    <div className="flex gap-6 text-2xl text-gray-600 mt-4">
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
</div>
</div>
  );
};

export default Navbar;
