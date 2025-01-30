

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
//           <p className={`${styles.sectionSubText} text-eerieBlack`}>
//             Your Future Starts Here
//           </p>
//           <h2 className={`${styles.sectionHeadTextLight} text-eerieBlack`}>
//             Join Our Team
//           </h2>
//         </motion.div>

//         {/* Vacancies Section */}
//         <motion.div className="flex flex-col items-center">
//           <p className={`${styles.sectionSubText} text-taupe text-[18px] max-w-3xl text-center leading-[30px]`}>
//             We are looking for passionate and talented individuals to join our growing team. Here are the current openings:
//           </p>

//           <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 gap-6 px-4 sm:px-0">
//             {/* Full Stack Web Development Internship */}
//             <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-md hover:bg-hoverColor transition duration-200">
//               <h3 className={`${styles.sectionHeadTextLight} text-jetLight text-[22px] font-semibold`}>
//                 Full Stack Web Development Internship
//               </h3>
//               <p className="text-[16px] text-taupe mt-2">
//                 Gain hands-on experience building dynamic web applications using modern technologies.
//               </p>
//               <Link to="/apply/fullstack" className="mt-4 text-battleGray font-semibold text-[16px]">
//                 Apply Now
//               </Link>
//             </div>

//             {/* Mobile App Development Internship */}
//             <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-md hover:bg-hoverColor transition duration-200">
//               <h3 className={`${styles.sectionHeadTextLight} text-jetLight text-[22px] font-semibold`}>
//                 Mobile App Development Internship
//               </h3>
//               <p className="text-[16px] text-taupe mt-2">
//                 Work on cutting-edge mobile applications and enhance your skills in app development.
//               </p>
//               <Link to="/apply/mobileapp" className="mt-4 text-battleGray font-semibold text-[16px]">
//                 Apply Now
//               </Link>
//             </div>

//             {/* Frontend Development Internship */}
//             <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-md hover:bg-hoverColor transition duration-200">
//               <h3 className={`${styles.sectionHeadTextLight} text-jetLight text-[22px] font-semibold`}>
//                 Frontend Development Internship
//               </h3>
//               <p className="text-[16px] text-taupe mt-2">
//                 Focus on building intuitive and responsive UI for our platforms.
//               </p>
//               <Link to="/apply/frontend" className="mt-4 text-battleGray font-semibold text-[16px]">
//                 Apply Now
//               </Link>
//             </div>

//             {/* Backend Development Internship */}
//             <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-md hover:bg-hoverColor transition duration-200">
//               <h3 className={`${styles.sectionHeadTextLight} text-jetLight text-[22px] font-semibold`}>
//                 Backend Development Internship
//               </h3>
//               <p className="text-[16px] text-taupe mt-2">
//                 Work on the server-side logic and databases to enhance the functionality of our platforms.
//               </p>
//               <Link to="/apply/backend" className="mt-4 text-battleGray font-semibold text-[16px]">
//                 Apply Now
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </section>
   
//     </div>
//   );
// };

// export default Career;

import { motion } from 'framer-motion';
import { styles } from '../styles'; // Using the same styles as your project
import { Link } from 'react-router-dom';

// Define the textVariant function
const textVariant = () => {
  return {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };
};

const Career = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure the Career page takes up the full height */}
      <section className="flex-grow bg-gray-100 py-16"> {/* Allow this section to grow and take the remaining space */}
        {/* Header Section */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="visible"
          className="w-full text-center mb-16">
          <p className={`${styles.sectionSubText} text-black`}> {/* Changed color to black */}
            Your Future Starts Here
          </p>
          <h2 className={`${styles.sectionHeadTextLight} text-black`}> {/* Changed color to black */}
            Join Our Team
          </h2>
        </motion.div>

        {/* Vacancies Section */}
        <motion.div className="flex flex-col items-center">
          <p className={`${styles.sectionSubText} text-black text-[18px] max-w-3xl text-center leading-[30px]`}> {/* Changed color to black */}
            We are looking for passionate and talented individuals to join our growing team. Here are the current openings:
          </p>

          <div className="mt-10 grid sm:grid-cols-2 grid-cols-1 gap-6 px-4 sm:px-0">
            {/* Full Stack Web Development Internship */}
            <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"> {/* Increased box shadow */}
              <h3 className={`${styles.sectionHeadTextLight} text-black text-[22px] font-semibold`}> {/* Changed color to black */}
                Full Stack Web Development Internship
              </h3>
              <p className="text-[16px] text-black mt-2"> {/* Changed color to black */}
                Gain hands-on experience building dynamic web applications using modern technologies.
              </p>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdsoX6fgl5zcwJshA-KUYU4srZC4JGDoBlfD9mjMlxSY40USg/viewform?usp=sharing" className="mt-4 bg-black text-white font-semibold text-[16px] py-2 px-4 rounded hover:bg-gray-800 transition duration-200"> {/* Styled as button */}
                Apply Now
              </Link>
            </div>

            {/* Mobile App Development Internship */}
            <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"> {/* Increased box shadow */}
              <h3 className={`${styles.sectionHeadTextLight} text-black text-[22px] font-semibold`}> {/* Changed color to black */}
                Mobile App Development Internship
              </h3>
              <p className="text-[16px] text-black mt-2"> {/* Changed color to black */}
                Work on cutting-edge mobile applications and enhance your skills in app development.
              </p>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLScRyKexzSuLgQfVnTf0fXcqOotZRC4x8FyWTJvdtYekkG1I5g/viewform?usp=sharing" className="mt-4 bg-black text-white font-semibold text-[16px] py-2 px-4 rounded hover:bg-gray-800 transition duration-200"> {/* Styled as button */}
                Apply Now
              </Link>
            </div>

            {/* Frontend Development Internship */}
            <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"> {/* Increased box shadow */}
              <h3 className={`${styles.sectionHeadTextLight} text-black text-[22px] font-semibold`}> {/* Changed color to black */}
                Frontend Development Internship
              </h3>
              <p className="text-[16px] text-black mt-2"> {/* Changed color to black */}
                Focus on building intuitive and responsive UI for our platforms.
              </p>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdGDyoxCQ7NeUzwq8-yzsYarx6pXSsSmKpmqqA8ep-GatkRyg/viewform?usp=sharing" className="mt-4 bg-black text-white font-semibold text-[16px] py-2 px-4 rounded hover:bg-gray-800 transition duration-200"> {/* Styled as button */}
                Apply Now
              </Link>
            </div>

            {/* Backend Development Internship */}
            <div className="flex flex-col items-center bg-lightGray p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200"> {/* Increased box shadow */}
              <h3 className={`${styles.sectionHeadTextLight} text-black text-[22px] font-semibold`}> {/* Changed color to black */}
                Backend Development Internship
              </h3>
              <p className="text-[16px] text-black mt-2"> {/* Changed color to black */}
                Work on the server-side logic and databases to enhance the functionality of our platforms.
              </p>
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSda_2LkgnHUJYuCE-LI6u6W1WBsV8Wjs29PqTYnJTNcLW_RUw/viewform?usp=sharing" className="mt-4 bg-black text-white font-semibold text-[16px] py-2 px-4 rounded hover:bg-gray-800 transition duration-200"> {/* Styled as button */}
                Apply Now
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Ensure the Footer is placed at the bottom */}
    </div>
  );
};

export default Career;
