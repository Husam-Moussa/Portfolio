// components/OrbitTechMap.jsx
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGit, FaGithub,
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiFirebase,
} from "react-icons/si";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const orbitSkills = [
  { icon: <FaHtml5 className="text-orange-500" /> },
  { icon: <FaCss3Alt className="text-blue-500" /> },
  { icon: <FaJs className="text-yellow-400" /> },
  { icon: <SiTypescript className="text-blue-600" /> },
  { icon: <SiTailwindcss className="text-cyan-400" /> },
  { icon: <SiFirebase className="text-yellow-500" /> },
  { icon: <FaGithub className="text-red-500" /> },
];

const OrbitTechMap = () => {
  const [angle, setAngle] = useState(0);
  const [size, setSize] = useState(400); // container size

  const ref = useRef();

  // Update container size responsively
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 400) setSize(300);
      else if (width < 768) setSize(350);
      else if (width < 1024) setSize(400);
      else setSize(500);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const radius = size * 0.36;
  const center = size / 2;

  useAnimationFrame(() => {
    const speed = 0.01;
    setAngle((prev) => prev + speed);
  });
useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Trigger the animation only once
    });
  }, []);
  return (
    <div
      className="relative mx-auto mt-20 overflow-hidden group"
      style={{ width: size, height: size }}
    data-aos="fade-left">
      {/* Background React icon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ fontSize: size * 0.85, color: "rgba(59,130,246,0.2)" }}
      >
        <FaReact />
      </motion.div>

      {/* Center Image */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 bg-white group"
        style={{
          width: size * 0.3, // Increased size to 30% of container
          height: size * 0.3, // Increased size to 30% of container
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src="Me.jpg"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Orbiting Icons */}
      <div className="absolute left-0 top-0 w-full h-full" ref={ref}>
        {orbitSkills.map((skill, index) => {
          const total = orbitSkills.length;
          const theta = (index / total) * 2 * Math.PI + angle;
          const x = center + radius * Math.cos(theta);
          const y = center + radius * Math.sin(theta);

          return (
            <motion.div
              key={index}
              className="absolute flex justify-center items-center"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <div className="text-[clamp(2rem,5vw,3.5rem)] text-blue-400 hover:text-blue-500 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300">
                {skill.icon}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OrbitTechMap;
