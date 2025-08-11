import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import picture from "../../assets/IMG_20250811_220512.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";
export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Web Designer","MERN Stack Developer", "I build clean UI",],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });
  return (
    <>
      <section className="container mx-auto flex items-center my-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 my-8 bg-rose-900/80 dark:bg-white/10 border border-rose-700 dark:border-rose-600 rounded-full text-xs sm:text-sm text-rose-200 dark:text-rose-300 backdrop-blur-sm hover:bg-rose-800 dark:hover:bg-white/20 transition-all duration-300">
            Welcome to my universe
          </div>
         
             <h1 className="">Hi, I am</h1>
         

          <span className="text-3xl md:text-4xl font-bold ml-10 text-rose-500">Sanjida Akter Rimi</span>
      

          <h2 className="mt-4 text-xl md:text-2xl font-medium text-rose-00">
            <span className="mr-2">{text}</span>
            <Cursor cursorStyle="|" />
          </h2>
          <p className="mt-3 text-sm italic">
            “Designing and developing seamless user experiences with MongoDB, Express, React, and Node.js. Dedicated to creating responsive, user-friendly, and visually engaging web applications using clean, scalable code — while solving real-world problems with innovative solutions.”
          </p>
          <button className="inline-flex items-center gap-2 px-3 py-2 my-8 bg-rose-700 border border-gray-700 rounded-full text-xs sm:text-sm backdrop-blur-sm hover:bg-gray-800 transition-all duration-300">
            Download Resume <Download size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-end"
        >
          <img
            src={picture}
            alt="Sanjida Akter Rimi"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg border-5 border-rose-600"
          />
        </motion.div>
      </section>
    </>
  );
}
