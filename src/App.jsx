

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Footer,
  Career,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<CareerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-about bg-cover bg-center bg-no-repeat">
        <About />
      </div>
      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <Tech />
      </div>
      <Projects />
      <div className="bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]">
        <div className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
          <Experience />
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

const CareerPage = () => {
  return (
    <>
      <Navbar />
      <Career />
      <Footer />
    </>
  );
};

export default App;
