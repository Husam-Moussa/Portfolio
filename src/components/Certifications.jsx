import { useState } from "react";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';
const Certifications = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "Certification/Certification1.jpg",
    "Certification/Certification2.png",
    "Certification/Certification1.jpg",
    "Certification/Certification1.jpg",
    "Certification/Certification1.jpg",
    "Certification/Certification1.jpg",
  ];
useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Trigger the animation only once
    });
  }, []);
  return (
    <div className="bg-white py-1 flex flex-col items-center gap-8">
      <h2 className="text-gray-600 text-3xl sm:text-4xl md:text-5xl text-center px-4 overflow-hidden"data-aos="fade-right">
        Certificates
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full max-w-6xl overflow-hidden"data-aos="zoom-in">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Certification ${index + 1}`}
            className="w-full max-w-xs mx-auto rounded shadow-md cursor-pointer transition-transform overflow-hidden duration-300 hover:scale-105 shadow-gray-600"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-opacity-80 flex justify-center items-center z-50 px-4"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Full size"
            className="w-full max-w-4xl max-h-[90vh] rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Certifications;
