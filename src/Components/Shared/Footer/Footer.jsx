import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import SocialIcon from '../SocialIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();



  const navLinks = [
    { name: 'About', url: '/more-about-me' },
    { name: 'Projects', url: '/projects' },
    { name: 'resume', url: 'https://drive.google.com/file/d/1M1RfucTlKgUAMXu7klbjF237QGNIJ3C2/view?usp=sharing' },
  ];

  const yourName = "Sanjida Akter Rimi";

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Your Name */}
          <h2 className="text-2xl font-bold text-rose-500 mb-3">
            {yourName}
          </h2>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.url} 
                className="hover:text-rose-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="mb-4">
         <SocialIcon/>
          </div>

          {/* Copyright Information */}
          <div className="w-full pt-8 border-t border-gray-800">
            <p className="text-sm">
              &copy; {currentYear} {yourName}. All Rights Reserved.
            </p>
           
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;