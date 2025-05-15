import { useState } from "react";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';
const Projects = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { src: "Project/Project1.png", href: "https://Kayan-agency.vercel.app" },
    { src: "Project/Project2.png", href: "https://bawabcell.vercel.app" },
    { src: "IMG_1288.jpeg", href:"https://mcnutrition.vercel.app"},
    { src: "Project/Project1.png", href: "https://example.com/project4" },
    { src: "Project/Project1.png", href: "https://example.com/project5" },
    { src: "Project/Project1.png", href: "https://example.com/project6" },
  ];
useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Trigger the animation only once
    });
  }, []);
  return (
    <div className="bg-white py-10 flex flex-col items-center gap-8">
      <h2 className="text-gray-600 text-3xl sm:text-4xl md:text-5xl overflow-hidden mt-5 text-center px-4"data-aos="fade-right">
        Projects
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 overflow-hidden w-full max-w-6xl"data-aos="zoom-in">
        {images.map((img, index) => (
          <a
            key={index}
            href={img.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs mx-auto overflow-hidden"
          >
            <img
              src={img.src}
              alt={`Project ${index + 1}`}
              className="w-full rounded shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 shadow-gray-600"
              onClick={() => setSelectedImg(img.src)}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
