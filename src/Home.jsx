import Navbar from './components/Navbar';
import OrbitTechMap from './components/OrbitTechMap';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for animation
      once: false, // Trigger the animation only once
    });
  }, []);
  return (
    <div className='mb-40 overflow-hidden'>
      <Navbar />

      <div className='flex flex-col lg:flex-row justify-between items-center py-10 px-6 gap-10'>
        
        {/* OrbitTechMap - on top on small screens, right on large */}
        <div className='w-full lg:w-1/2 order-1 lg:order-2'>
          <OrbitTechMap />
        </div>

        {/* Main Text Content */}
        <div className='w-full lg:w-1/2 flex flex-col items-start order-2 lg:order-1'data-aos="fade-right">
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-600 leading-tight overflow-hidden'>
            Hello, I'm <span className='text-blue-500'>Husam</span>
          </h2>

          <p className='text-blue-500 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 overflow-hidden'>
            A Frontend Developer
          </p>

          <p className='text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl mt-3 leading-relaxed'>
            As a frontend developer, I transform ideas into visually captivating, user-first digital experiences using React and JavaScript.
            I blend creativity with code, turning complex challenges into elegant solutions that make the web feel intuitive and engaging.
          </p>

          <div className='w-full flex justify-center mt-6'>
            <button className='bg-blue-500 text-white px-6 py-4 rounded-2xl text-lg transition duration-300 cursor-pointer hover:bg-gray-600'>
             <a href="Husam Moussa Resume.pdf" download>
               Download CV
              </a>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
