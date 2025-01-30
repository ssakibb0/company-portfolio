import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants'; // Define this in constants.js
import { fadeIn, textVariant } from '../utils/motion';

// const ProjectCard = ({
//   id,
//   name,
//   description,
//   image,
//   repo,
//   demo,
//   index,
//   active,
//   handleClick,
// }) => {
//   return (
//     <motion.div
//       variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
//       className={`relative ${
//         active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
//       } flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow`}
//       onClick={() => handleClick(id)}
//     >
//       <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"></div>

//       <img
//         src={image}
//         alt={name}
//         className="absolute w-full h-full object-cover rounded-[24px]"
//       />

//       {active !== id ? (
//         <div className="flex items-center justify-start pr-[4.5rem]">
//           <h3
//             className="font-extrabold font-beckman uppercase w-[200px] h-[30px]
//             whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
//             absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
//             leading-none z-20"
//           >
//             {name}
//           </h3>
//         </div>
//       ) : (
//         <>
//           <div
//             className="absolute bottom-0 p-8 justify-start w-full
//             flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20"
//           >
//             <div className="absolute inset-0 flex justify-end m-3">
//               <div
//                 onClick={() => window.open(repo, '_blank')}
//                 className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full
//                   flex justify-center items-center cursor-pointer
//                   sm:opacity-[0.9] opacity-[0.8]"
//               >
//                 <img
//                   src={github}
//                   alt="source code"
//                   className="w-4/5 h-4/5 object-contain"
//                 />
//               </div>
//             </div>

//             <h2
//               className="font-bold sm:text-[32px] text-[24px]
//               text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]"
//             >
//               {name}
//             </h2>
//             <p
//               className="text-silver sm:text-[14px] text-[12px]
//               max-w-3xl sm:leading-[24px] leading-[18px]
//               font-poppins tracking-[1px]"
//             >
//               {description}
//             </p>
//             <button
//               className="live-demo flex justify-between
//               sm:text-[16px] text-[14px] text-timberWolf
//               font-bold font-beckman items-center py-5 pl-2 pr-3
//               whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px]
//               w-[125px] h-[46px] rounded-[10px] glassmorphism
//               sm:mt-[22px] mt-[16px] hover:bg-battleGray
//               hover:text-eerieBlack transition duration-[0.2s]
//               ease-in-out"
//               onClick={() => window.open(demo, '_blank')}
//               onMouseOver={() => {
//                 document
//                   .querySelector('.btn-icon')
//                   .setAttribute('src', pineappleHover);
//               }}
//               onMouseOut={() => {
//                 document
//                   .querySelector('.btn-icon')
//                   .setAttribute('src', pineapple);
//               }}
//             >
//               <img
//                 src={pineapple}
//                 alt="pineapple"
//                 className="btn-icon sm:w-[34px] sm:h-[34px]
//                 w-[30px] h-[30px] object-contain"
//               />
//               LIVE DEMO
//             </button>
//           </div>
//         </>
//       )}
//     </motion.div>
//   );
// };

const Projects = () => {
  const [active, setActive] = useState('ecommerce');
  
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText}`}>Case Studies</p> */}
        <h2 className={`${styles.sectionHeadTextLight}`}>Our Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Our team has been involved in building impactful projects across multiple domains.
        From <b>Web Development</b>,<b>Personal or Company Portfolio</b>,<b> E-commerce Platforms</b> to <b>Mobile App Development</b> and <b>Digital Marketing</b>, 
        we specialize in providing end-to-end solutions that drive results and ensure long-term growth.
      </motion.p>

<div className="mt-12">
  <motion.div
    variants={fadeIn('', '', 0.2, 1)}
    className="text-center mb-10"
  >
    <h3 className="text-2xl text-timberWolf">Categories</h3>
    <div className="flex flex-wrap justify-center gap-6 mt-5">
      <button
        className="px-6 py-3 bg-gray-300 rounded-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-400"
        onClick={() => setActive('ecommerce')}
      >
        E-Commerce
      </button>
      <button
        className="px-6 py-3 bg-gray-300 rounded-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-400"
        onClick={() => setActive('appdev')}
      >
        App Development
      </button>
      <button
        className="px-6 py-3 bg-gray-300 rounded-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-400"
        onClick={() => setActive('digitalmarketing')}
      >
        Digital Marketing
      </button>
      <button
        className="px-6 py-3 bg-gray-300 rounded-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-400"
        onClick={() => setActive('webdevelopment')}
      >
        Web Development
      </button>
      <button
        className="px-6 py-3 bg-gray-300 rounded-lg text-gray-800 transition-all duration-300 ease-in-out hover:bg-gray-400"
        onClick={() => setActive('portfoliowebsite')}
      >
        Portfolio Website
      </button>
    </div>
  </motion.div>
</div>


      {/* Client Testimonials Section */}
      <div className="mt-20">
        <motion.div variants={fadeIn('', '', 0.1, 1)}>
          <p className={`${styles.sectionSubText}`}>Client Feedback</p>
          <h2 className={`${styles.sectionHeadTextLight}`}>What Our Clients Say</h2>
        </motion.div>

        <motion.div
          variants={fadeIn('', '', 0.3, 1)}
          className="flex flex-col items-center mt-10"
        >
          <div className="max-w-2xl text-center">
            <p className="text-lg text-taupe">
              "TechFussion helped us transform our digital presence. From creating a seamless
              e-commerce platform to executing targeted digital marketing campaigns, they've
              been a true partner in our growth. Their team's dedication and expertise are unmatched."
            </p>
            {/* <p className="mt-4 font-bold text-gray-800">John Doe, CEO, FashionFusion</p> */}
          </div>
        </motion.div>
      </div>

      {/* Contact/Engagement Call to Action */}
      <div className="mt-20 text-center">
        <motion.div variants={fadeIn('', '', 0.4, 1)}>
          <h2 className="text-3xl font-bold text-timberWolf">
            Ready to bring your vision to life?
          </h2>
          <p className="mt-4 text-lg text-taupe max-w-2xl mx-auto">
            Whether you're looking to build a new website, develop a mobile app, or drive traffic
            through digital marketing, TechFussion is here to help. Get in touch with us today to
            discuss how we can bring your project to life.
          </p>
          <a href="#contact">
          <button className="mt-6 py-3 px-8 bg-battleGray text-white text-xl rounded-full">
            Contact Us
          </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');

