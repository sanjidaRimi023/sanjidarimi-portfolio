import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import picture from "../../assets/IMG_20250811_220512.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";
import SocialIcon from "../Shared/SocialIcon";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Web Designer",
      "MERN Stack Developer",
      "I build clean UI",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <>
      <section className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-20 px-4 lg:px-20 my-12 lg:my-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-rose-900/80 dark:bg-white/10 border border-rose-700 dark:border-rose-600 rounded-full text-xs sm:text-sm text-rose-200 dark:text-rose-300 backdrop-blur-sm hover:bg-rose-800 dark:hover:bg-white/20 transition-all duration-300">
            Welcome to my universe
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Hi, I am
          </h1>

          <span className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-rose-500 ml-0 md:ml-10">
            Sanjida Akter Rimi
          </span>

          <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-rose-600 flex justify-center md:justify-start items-center">
            <span className="mr-2">{text}</span>
            <Cursor cursorStyle="_" />
          </h2>

          <p className="mt-3 max-w-xl text-sm sm:text-base italic text-gray-300 dark:text-gray-300">
            “Designing and developing seamless user experiences with MongoDB,
            Express, React, and Node.js. Dedicated to creating responsive,
            user-friendly, and visually engaging web applications using clean,
            scalable code — while solving real-world problems with innovative
            solutions.”
          </p>

          <div className="mt-6">
            <SocialIcon />
          </div>

          <button className="inline-flex items-center gap-2 px-5 py-2 mt-8 bg-rose-700 border border-gray-700 rounded-full text-sm sm:text-base text-white backdrop-blur-sm hover:bg-gray-800 transition-all duration-300">
            Download Resume <Download size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <img
            src={picture}
            alt="Sanjida Akter Rimi"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-4 border-rose-600"
          />
        </motion.div>
      </section>
    </>
  );
}
