// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-black text-white py-6">
      <div className="container mx-auto text-center">
        {/* Footer Title */}
        <p className="text-2xl font-semibold mb-4">Astrology Website</p>

        {/* Social Media Icons */}
        <div className="mb-4">
          <a href="#" className="text-white hover:text-blue-500 mx-3 text-3xl">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-pink-500 mx-3 text-3xl">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-400 mx-3 text-3xl">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; 2024 Astrology Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
