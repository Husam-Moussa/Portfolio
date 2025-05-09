import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Trigger the animation only once
    });
  }, []);
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-600 mb-4 overflow-hidden"data-aos="fade-right">Contact</h2>
        <p className="text-blue-500 text-base sm:text-lg mb-8"data-aos="fade-left">
          Feel free to reach out via email or connect with me on social media.
        </p>

        <div className="flex justify-center flex-wrap gap-8 text-3xl sm:text-4xl">
          <a
            href="mailto:husammusa864@gmail.com"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <BiLogoGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/husam-moussa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/husam_musa_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
