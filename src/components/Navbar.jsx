import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleClick = (id, title) => {
    setActive(title);
    setToggle(false);

    if (id !== 'career') {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.href = `/#${id}`;
        }
      }, 200);
    } else {
      window.location.href = `/${id}`;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setToggle(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
          <img src={logo} alt="logo" className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain" />
          <b className="hover:text-taupe text-[29px] font-mova font-extrabold uppercase tracking-[3px] cursor-pointer text-black">
            TechFussion
          </b>
        </Link>

        {/* Desktop Navbar */}
        <ul className="list-none hidden sm:flex flex-row gap-14">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? 'text-french' : 'text-eerieBlack'}
                hover:text-taupe text-[21px] font-mova font-medium uppercase tracking-[3px] cursor-pointer`}
              onClick={() => handleClick(nav.id, nav.title)}>
              {nav.title}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div className="p-6 bg-flashWhite absolute top-0 left-0 w-full h-screen z-10">
              {/* Close Button */}
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              </div>

              {/* Mobile Navbar Links */}
              <ul className="list-none flex flex-col gap-6 items-start mt-16 ml-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`text-[50px] font-arenq font-bold uppercase tracking-[1px] cursor-pointer ${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    }`}
                    onClick={() => handleClick(nav.id, nav.title)}>
                    {nav.title}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

