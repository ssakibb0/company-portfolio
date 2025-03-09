

// import { motion } from 'framer-motion';
// import { styles } from '../styles'; // Using the same styles as your project
// import { Link } from 'react-router-dom';

// // Define the textVariant function
// const textVariant = () => {
//   return {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.5 } }
//   };
// };

// const Career = () => {
//   return (
//     <div className="flex flex-col min-h-screen"> {/* Ensure the Career page takes up the full height */}
//       <section className="flex-grow bg-gray-100 py-16"> {/* Allow this section to grow and take the remaining space */}
//         {/* Header Section */}
//         <motion.div
//           variants={textVariant()}
//           initial="hidden"
//           animate="visible"
//           className="w-full text-center mb-16">
//           <p className={`${styles.sectionSubText} text-black`}> {/* Changed color to black */}
//             Your Future Starts Here
//           </p>
//           <h2 className={`${styles.sectionHeadTextLight} text-black`}> {/* Changed color to black */}
//             Join Our Team
//           </h2>
//         </motion.div>

//         {/* Vacancies Section */}
//         <motion.div className="flex flex-col items-center">
//           <p className={`${styles.sectionSubText} text-black text-[18px] max-w-3xl text-center leading-[30px]`}> {/* Changed color to black */}
//             We are looking for passionate and talented individuals to join our growing team. Here are the current openings:
//           </p>

//           <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 gap-6 px-4 sm:px-0">
//             {/* Full Stack Web Development Internship */}
//             <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"> {/* Increased box shadow */}
//               <h3 className={`${styles.sectionHeadTextLight} text-black text-[22px] font-semibold`}> {/* Changed color to black */}
//                 Full Stack Web Development Internship
//               </h3>
//               <p className="text-[16px] text-black mt-2"> {/* Changed color to black */}
//                 Gain hands-on experience building dynamic web applications using modern technologies.
//               </p>
//               <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdsoX6fgl5zcwJshA-KUYU4srZC4JGDoBlfD9mjMlxSY40USg/viewform?usp=sharing" className="mt-4 bg-black text-white font-semibold text-[16px] py-2 px-4 rounded hover:bg-gray-800 transition duration-200"> {/* Styled as button */}
//                 Apply Now
//               </Link>
//             </div>

//             {/* Mobile App Development Internship */}
//             <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"> {/* Increased box shadow */}
//               <h3 className={`${styles.sectionHeadTextLight} text-black text-[22px] font-semibold`}> {/* Changed color to black */}
//                 Mobile App Development Internship
//               </h3>
//               <p className="text-[16px] text-black mt-2"> {/* Changed color to black */}
//                 Work on cutting-edge mobile applications and enhance your skills in app development.
//               </p>
//               <Link to="https://docs.google.com/forms/d/e/1FAIpQLScRyKexzSuLgQfVnTf0fXcqOotZRC4x8FyWTJvdtYekkG1I5g/viewform?usp=sharing" className="mt-4 bg-black text-white font-semibold text-[16px] py-2 px-4 rounded hover:bg-gray-800 transition duration-200"> {/* Styled as button */}
//                 Apply Now
//               </Link>
//             </div>

//             {/* Frontend Development Internship */}
//             <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"> {/* Increased box shadow */}
//               <h3 className={`${styles.sectionHeadTextLight} text-black text-[22px] font-semibold`}> {/* Changed color to black */}
//                 Frontend Development Internship
//               </h3>
//               <p className="text-[16px] text-black mt-2"> {/* Changed color to black */}
//                 Focus on building intuitive and responsive UI for our platforms.
//               </p>
//               <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdGDyoxCQ7NeUzwq8-yzsYarx6pXSsSmKpmqqA8ep-GatkRyg/viewform?usp=sharing" className="mt-4 bg-black text-white font-semibold text-[16px] py-2 px-4 rounded hover:bg-gray-800 transition duration-200"> {/* Styled as button */}
//                 Apply Now
//               </Link>
//             </div>

//             {/* Backend Development Internship */}
//             <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"> {/* Increased box shadow */}
//               <h3 className={`${styles.sectionHeadTextLight} text-black text-[22px] font-semibold`}> {/* Changed color to black */}
//                 Backend Development Internship
//               </h3>
//               <p className="text-[16px] text-black mt-2"> {/* Changed color to black */}
//                 Work on the server-side logic and databases to enhance the functionality of our platforms.
//               </p>
//               <Link to="https://docs.google.com/forms/d/e/1FAIpQLSda_2LkgnHUJYuCE-LI6u6W1WBsV8Wjs29PqTYnJTNcLW_RUw/viewform?usp=sharing" className="mt-4 bg-black text-white font-semibold text-[16px] py-2 px-4 rounded hover:bg-gray-800 transition duration-200"> {/* Styled as button */}
//                 Apply Now
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </section>
//       {/* Ensure the Footer is placed at the bottom */}
//     </div>
//   );
// };

// export default Career;
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { styles } from "../styles"; // Ensuring font consistency with your project

// const textVariant = () => ({
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.5 } },
// });

// const Career = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
//       {/* Header Section */}
//       <section className="flex-grow py-16 px-6">
//         <motion.div
//           variants={textVariant()}
//           initial="hidden"
//           animate="visible"
//           className="text-center mb-10"
//         >
//           <p className={`${styles.sectionSubText} text-black`}>
//             Your Future Starts Here
//           </p>
//           <h2 className={`${styles.sectionHeadTextLight} text-black`}>
//             Join Our Internship Program
//           </h2>
//         </motion.div>

//         {/* Internship Information */}
//         <motion.div
//           variants={textVariant()}
//           initial="hidden"
//           animate="visible"
//           className="max-w-3xl mx-auto text-center leading-7"
//         >
//           <p
//             className={`${styles.sectionSubText} text-[18px] max-w-3xl text-center leading-[30px]`}
//           >
//             We offer exciting internship opportunities for students and recent
//             graduates. Choose your preferred technology stack and start your
//             journey in the tech industry with hands-on experience.
//           </p>

//           {/* Why Join Us */}
//           <div className="mt-10 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
//             <h3 className={`${styles.sectionHeadTextLight} text-black text-[22px] font-semibold`}>
//               Why Join Us?
//             </h3>
//             <ul className="text-black text-[16px] mt-4 space-y-2">
//               <li>🔥 Work on real-world projects with professionals.</li>
//               <li>📈 Gain practical skills and industry exposure.</li>
//               <li>🚀 Stand a chance for full-time employment.</li>
//               <li>💡 Learn cutting-edge technologies and frameworks.</li>
//               <li>🎓 Receive mentorship from Techfussion employees and professionals from top product-based companies like Microsoft, IBM, Samsung, and Wayfair.</li>
//               <li>🌍 Work in a collaborative and inclusive environment.</li>
//             </ul>
//           </div>

//           {/* Apply Section */}
//           <div className="mt-10">
//             <h3 className={`${styles.sectionHeadTextLight} text-black text-[22px] font-semibold`}>
//               Apply Now!
//             </h3>
//             <p className="text-black text-[16px] mt-4 text-center">
//               Choose your preferred role and kickstart your career with hands-on
//               experience. Our internship programs cover a wide range of
//               domains, including:
//             </p>

//             <div className="mt-6 text-black text-[16px]">
//               <ul className="space-y-2">
//                 <li>👉 Frontend Developer Internship</li>
//                 <li>👉 Backend Developer Internship</li>
//                 <li>👉 AI/ML Developer Internship</li>
//                 <li>👉 Full Stack Developer Internship</li>
//                 <li>👉 Mobile App Development Internship</li>
//               </ul>
//             </div>

//             <div className="mt-6">
//               <Link
//                 to="https://docs.google.com/forms/d/e/1FAIpQLSfZPpK1R5T5N6mP7EjMg9mtHjJ1F3JbKm6w3MNC9hvPS9eYMg/viewform"
//                 className="inline-block mt-5 bg-black text-white font-semibold text-[16px] py-2 px-6 rounded-md hover:bg-gray-800 transition duration-200"
//               >
//                 Apply Here
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Career;

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { styles } from "../styles"; // Keeping styles consistent

// const textVariant = () => ({
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.5 } },
// });

// const Career = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100 text-black">
//       {/* Header Section */}
//       <section className="flex-grow py-16 px-6">
//         <motion.div
//           variants={textVariant()}
//           initial="hidden"
//           animate="visible"
//           className="text-center mb-10"
//         >
//           <p className={`${styles.sectionSubText}`}>
//             Your Future Starts Here
//           </p>
//           <h2 className={`${styles.sectionHeadTextLight}`}>
//             Join Our Internship Program
//           </h2>
//         </motion.div>

//         {/* Internship Information */}
//         <motion.div
//           variants={textVariant()}
//           initial="hidden"
//           animate="visible"
//           className="max-w-3xl mx-auto text-center leading-7"
//         >
//           <p className={`${styles.sectionSubText} text-[18px] leading-[30px]`}>
//             We offer exciting internship opportunities for students and recent
//             graduates. Choose your preferred technology stack and start your
//             journey in the tech industry with hands-on experience.
//           </p>

//           {/* Why Join Us */}
//           <div className="mt-10 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
//             <h3 className={`${styles.sectionHeadTextLight} text-[22px] font-semibold`}>
//               Why Join Us?
//             </h3>
//             <ul className="text-[16px] mt-4 space-y-2">
//               <li>🔥 Work on real-world projects with professionals.</li>
//               <li>📈 Gain practical skills and industry exposure.</li>
//               <li>🚀 Stand a chance for full-time employment.</li>
//               <li>💡 Learn cutting-edge technologies and frameworks.</li>
//               <li>🎓 Receive mentorship from Techfussion employees and professionals from top product-based companies like Microsoft, IBM, Samsung, and Wayfair.</li>
//               <li>🌍 Work in a collaborative and inclusive environment.</li>
//             </ul>
//           </div>

//           {/* Apply Section (Now in a Box) */}
//           <div className="mt-10 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
//             <h3 className={`${styles.sectionHeadTextLight} text-[22px] font-semibold`}>
//               Apply Now!
//             </h3>
//             <p className="text-[16px] mt-4">
//               Choose your preferred role and kickstart your career with hands-on
//               experience. Our internship programs cover a wide range of
//               domains, including:
//             </p>

//             <ul className="text-[16px] mt-4 space-y-2">
//               <li>👉 Frontend Developer Internship</li>
//               <li>👉 Backend Developer Internship</li>
//               <li>👉 AI/ML Developer Internship</li>
//               <li>👉 Full Stack Developer Internship</li>
//               <li>👉 Mobile App Development Internship</li>
//             </ul>

//             <div className="mt-6">
//               <Link
//                 to="https://docs.google.com/forms/d/e/1FAIpQLSfZPpK1R5T5N6mP7EjMg9mtHjJ1F3JbKm6w3MNC9hvPS9eYMg/viewform"
//                 className="inline-block mt-5 bg-black text-white font-semibold text-[16px] py-2 px-6 rounded-md hover:bg-gray-800 transition duration-200"
//               >
//                 Apply Here
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Career;



// import React from "react";

// const Career = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto text-center px-6">
        
//         {/* Header Section */}
//         <h1 className="text-4xl font-mova font-extrabold uppercase tracking-[3px] text-black">
//           Join Our Internship Program
//         </h1>
//         <p className="text-lg text-eerieBlack mt-4">
//           We offer exciting internship opportunities for students and recent graduates.
//           Choose your preferred technology stack and start your journey in the tech industry
//           with hands-on experience.
//         </p>

//         {/* Why Join Us? Section */}
//         <div className="bg-white p-8 mt-10 rounded-lg shadow-lg max-w-3xl mx-auto">
//           <h2 className="text-3xl font-mova font-semibold uppercase tracking-[3px] text-black text-center">
//             Why Join Us?
//           </h2>
//           <ul className="text-lg text-eerieBlack space-y-3 font-bold mt-4">
//             <li>🔥 Work on real-world projects with professionals.</li>
//             <li>📑 Gain practical skills and industry exposure.</li>
//             <li>🚀 Stand a chance for full-time employment.</li>
//             <li>💡 Learn cutting-edge technologies and frameworks.</li>
//             <li>🎓 Receive mentorship from Techfussion employees and professionals from top product-based companies like Microsoft, IBM, Samsung, and Wayfair.</li>
//             <li>🤝 Network with industry experts and grow your professional connections.</li>
//           </ul>
//         </div>

//         {/* Apply Now Section (Same Box Style) */}
//         <div className="bg-white p-8 mt-10 rounded-lg shadow-lg max-w-3xl mx-auto">
//           <h2 className="text-3xl font-mova font-semibold uppercase tracking-[3px] text-black text-center">
//             Apply Now!
//           </h2>
//           <p className="text-lg text-eerieBlack font-bold text-center mt-2">
//             Select your preferred technology stack and start your internship journey with us.
//           </p>
//           <ul className="text-lg text-eerieBlack space-y-3 font-bold mt-4">
//             <li>👨‍💻 Frontend Development (React.js, Angular, Vue.js)</li>
//             <li>⚙ Backend Development (Node.js, Spring Boot, Django)</li>
//             <li>🧠 AI/ML (Python, TensorFlow, NLP, Deep Learning)</li>
//             <li>🌍 Full Stack Development (MERN, MEAN, Java + React)</li>
//             <li>📱 Mobile App Development (Flutter, React Native, Kotlin)</li>
//             <li>🔐 Cybersecurity & Ethical Hacking</li>
//             <li>🛠 DevOps & Cloud Computing (AWS, Azure, Docker, Kubernetes)</li>
//           </ul>
//           <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
//             Apply Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Career;


import React from "react";

const Career = () => {
  return (
    <section className="bg-gray-100 py-12 pt-[12vh]">  {/* Added pt-[12vh] to push below navbar */}
      <div className="container mx-auto text-center px-6">
        
        {/* Header Section */}
        <h2 className="text-4xl font-mova font-extrabold uppercase tracking-[3px] text-black">
          Join Our Internship Program
        </h2>
        <p className="text-lg text-eerieBlack mt-4">
          We offer exciting internship opportunities for students and recent graduates.
          Choose your preferred technology stack and start your journey in the tech industry
          with hands-on experience.
        </p>

        {/* Why Join Us? Section */}
        <div className="bg-white p-8 mt-10 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-3xl font-mova font-semibold uppercase tracking-[3px] text-black text-center">
            Why Join Us?
          </h3>
          <ul className="text-lg text-eerieBlack space-y-3 font-bold  mt-4">
            <li>🔥 Work on real-world projects with professionals.</li>
            <li>📑 Gain practical skills and industry exposure.</li>
            <li>🚀 Stand a chance for full-time employment.</li>
            <li>💡 Learn cutting-edge technologies and frameworks.</li>
            <li>🎓 Receive mentorship from Techfussion employees and professionals from top product-based companies like Microsoft, IBM, Samsung, and Wayfair.</li>
            <li>🤝 Network with industry experts and grow your professional connections.</li>
          </ul>
        </div>

        {/* Apply Now Section (Same Box Style) */}
        <div className="bg-white p-8 mt-10 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-3xl font-mova font-semibold uppercase tracking-[3px] text-black text-center">
            Apply Now!
          </h3>
          <p className="text-lg text-eerieBlack font-bold font-arenq text-center mt-2">
            Select your preferred technology stack and start your internship journey with us.
          </p>
          <ul className="text-lg text-eerieBlack space-y-3 font-bold mt-4">
            <li>👨‍💻 Frontend Development (React.js, Angular, Vue.js)</li>
            <li>⚙ Backend Development (Node.js, Spring Boot, Django)</li>
            <li>🧠 AI/ML (Python, TensorFlow, NLP, Deep Learning)</li>
            <li>🌍 Full Stack Development (MERN, MEAN, Java + React)</li>
            <li>📱 Mobile App Development (Flutter, React Native, Kotlin)</li>
            <li>🔐 Cybersecurity & Ethical Hacking</li>
            <li>🛠 DevOps & Cloud Computing (AWS, Azure, Docker, Kubernetes)</li>
          </ul>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScPKTeDEHeaaWiITEY0ookrFE95bmpMZBkp3EElL0cIZi0mbg/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Apply Now
              </button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Career;
