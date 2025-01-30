// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-jetLight text-white py-4 mt-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TechFussion. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
