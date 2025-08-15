import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import picture from "../../assets/IMG_20250811_220512.jpg";
import { Link } from "react-router";
import { ChevronsRight } from "lucide-react";

const About = () => {
  return (
    <>
      <section className="container mx-auto mb-20 mt-4 px-4 lg:px-20 overflow-hidden">
        <div className="flex flex-col md:flex-row  md:items-end mb-10">
               <motion.h1
                 initial={{ x: -50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
            viewport={{ once: false }}
                 className="text-4xl font-bold"
               >About {" "}
                         <span className="text-rose-600">Me</span>
                       
               </motion.h1>
       
               <motion.span
                 initial={{ x: 50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: false }}
                 className="flex flex-col gap-1 ml-5"
               >
                 <hr className="border-1 w-16" />
                 <hr className="border-1 w-10 text-rose-600" />
               </motion.span>
             </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full max-w-xs md:max-w-sm mx-auto md:mx-0"
          >
            <img
              src={picture}
              alt="Sanjida Akter Rimi"
              className="w-full border-l-8 border-b-8 border-rose-600 rounded-t-[40px] rounded-br-[40px] shadow-2xl hover:border-white transition-shadow duration-800 ease-in-out"
              style={{ boxShadow: "none" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px 8px rgba(244,63,94,0.7)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-xl text-center md:text-left"
          >
            <p className="mb-4">
              I'm Sanjida Akter Rimi, a passionate frontend-focused MERN Stack
              Developer dedicated to building fast, clean, and scalable web
              applications using React.js, Next.js, Node.js, Express.js,
              MongoDB, and Firebase.
            </p>
            <p className="mb-4">
              Skilled in responsive UI frameworks like Tailwind CSS, Shadcn UI,
              and Bootstrap, I create visually appealing and performance-driven
              user experiences.
            </p>
            <p className="mb-6">
              On the backend, I build secure APIs with Express.js and JWT,
              integrating tools like Firebase for authentication and TanStack
              Query for efficient data handling.
            </p>

            <Link
              to="/more-about-me"
              className="inline-flex gap-3 px-6 py-2 text-white rounded-full w-fit bg-transparent shadow-[0_0_30px_rgba(244,63,94,0.5)] hover:bg-rose-600 hover:shadow-none transition-all duration-300"
            >
              Know more <ChevronsRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
