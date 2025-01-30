import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3 hidden sm:block">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div className="sm:h-auto h-[380px] flex flex-col items-center sm:items-start justify-center text-center sm:text-left hidden sm:block">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
               Welcome to 
              <span
                className="sm:text-battleGray sm:text-[80px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                TechFussion
              </span>
            
            </h1>
            
            <div className='hidden sm:block'>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
            
                Innovating the Future with Cutting-Edge
                
              <span
                className="sm:text-battleGray sm:text-[30px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                Technology
              </span>
            </p>
              </div> 
            <div className="hero-points mt-4 hidden sm:block">
              <ul className="text-eerieBlack text-lg font-semibold list-none leading-relaxed">
                <li>Seamless Integration of Products and Services</li>
                <li>Innovative Solutions for Modern Challenges</li>
                <li>Expert Team with Industry Experience</li>
                <li>Committed to Sustainability and Growth</li>
              </ul>
            </div>
          </div>

          {/* Mobile Version (Shown only on mobile screens) */}
<div className="sm:hidden flex flex-col items-center justify-center text-center space-y-4 p-4">
  <h1 className="text-[45px] font-poppins font-extrabold text-eerieBlack uppercase">
    TechFusion
  </h1>
            
  <b className="text-[20px] text-gray-500">
    Innovating the future with cutting-edge technology. Join us in shaping tomorrow.
  </b>
  <a href="#about">
  <button className="mt-4 py-2 px-6 bg-battleGray text-white font-bold rounded-full">
    Learn More
  </button>
  </a>
</div>
        </div>
      </section>
    </>
  );
};




                                        //  000000000000 working fine 000000000
export default Hero;

