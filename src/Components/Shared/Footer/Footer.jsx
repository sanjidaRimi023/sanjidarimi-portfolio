import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Replace with your actual links and name
  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/your-username' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/your-profile' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com/your-handle' },
    { icon: <Mail size={24} />, url: 'mailto:your-email@example.com' },
  ];

  const navLinks = [
    { name: 'About', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/contact' },
  ];

  const yourName = "Sanjida Akter Rimi"; // Replace with your name

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Your Name */}
          <h2 className="text-2xl font-bold text-rose-500 mb-3">
            {yourName}
          </h2>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
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
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-500 hover:scale-110 transform transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
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