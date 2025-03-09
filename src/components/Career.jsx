

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
