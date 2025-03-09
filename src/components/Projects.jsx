import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants'; // Define this in constants.js
import { fadeIn, textVariant } from '../utils/motion';

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

