import React from "react";
import { motion } from "framer-motion";
import picture from "../../assets/IMG_20250811_220512.jpg";
import { Coffee, Code, Snowflake, Zap, Sparkle } from "lucide-react";

const MoreAboutMe = () => {
  return (
    <section className="container mx-auto mb-20 mt-4 px-4 lg:px-20 text-white">
      {/* Title */}
      <header className="flex flex-col md:flex-row items-start md:items-end mb-10">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-4xl font-bold"
        >
          More <span className="text-rose-500">About Me</span>
        </motion.h1>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex flex-col gap-1 ml-5"
          aria-hidden="true"
        >
          <hr className="border-rose-500 w-16" />
          <hr className="border-rose-500 w-10" />
        </motion.div>
      </header>

      {/* Image + Intro */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        <motion.figure
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full max-w-xs mx-auto md:mx-0"
        >
          <img
            src={picture}
            alt="Sanjida Akter Rimi"
            className="w-full border-l-8 border-b-8 border-rose-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl hover:border-rose-300 transition-shadow duration-800 ease-in-out"
            style={{ boxShadow: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 0 20px 8px rgba(244,63,94,0.7)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          />
          <figcaption className="sr-only">Photo of Sanjida Akter Rimi</figcaption>
        </motion.figure>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-xl text-center md:text-left text-gray-200"
        >
          <p className="mb-4">
            I'm <strong>Sanjida Akter Rimi</strong>, a frontend-focused{" "}
            <span className="text-primary">MERN Stack Developer</span> passionate
            about crafting clean, fast, and scalable web applications that leave
            a lasting impression.
          </p>

          <p className="mb-4">
            I specialize in modern tools like{" "}
            <span className="text-rose-400">React.js</span>,{" "}
            <span className="text-rose-400">Next.js</span>, and backend
            technologies such as <span className="text-rose-400">Node.js</span>,{" "}
            <span className="text-rose-400">Express.js</span>, and{" "}
            <span className="text-rose-400">MongoDB</span>, always aiming for
            performance and accessibility.
          </p>

          <p className="mb-4">
            My design approach blends pixel-perfect precision with smooth
            animations, ensuring every interface feels alive and intuitive.
          </p>

          <p className="mb-4">
            Beyond coding, I enjoy learning new tech stacks, exploring creative
            UI/UX trends, and pushing boundaries with interactive web
            experiences.
          </p>

          <p>
            When I'm not coding, you'll probably find me experimenting with
            design tools, contributing to open-source, or binging tech podcasts.
          </p>
        </motion.div>
      </div>

      {/* Funny Facts */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-14"
        aria-labelledby="funny-facts-title"
      >
        <header className="flex flex-col md:flex-row items-start md:items-end mb-10">
          <motion.h2
            id="funny-facts-title"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl font-bold"
          >
            Funny Facts <span className="text-rose-500">About Me</span>
          </motion.h2>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="flex flex-col gap-1 ml-5"
            aria-hidden="true"
          >
            <hr className="border-rose-500 w-16" />
            <hr className="border-rose-500 w-10" />
          </motion.div>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Snowflake aria-label="Snowflake Icon" />, text: "I love winter more than summer ❄️" },
            {
              icon: <Sparkle aria-label="Sparkle Icon" />,
              text: "My work philosophy? Code like it's art, debug like a detective",
            },
            {
              icon: <Code aria-label="Code Icon" />,
              text: "50% of my life is 'Why isn't this code working?'",
            },
            {
              icon: <Code aria-label="Code Icon" />,
              text: "I write clean, well-structured, and maintainable code.",
            },
            {
              icon: <Zap aria-label="Zap Icon" />,
              text: "I adapt quickly to new technologies and workflows.",
            },
            {
              icon: <Coffee aria-label="Coffee Icon" />,
              text: "I drink tea like it's liquid motivation..",
            },
            {
              icon: <Snowflake aria-label="Snowflake Icon" />,
              text: "I design with accessibility and user comfort in mind.",
            },
          ].map((fact, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl hover:bg-rose-500/20 transition"
            >
              <span className="text-rose-500 w-6 h-6">{fact.icon}</span>
              <p className="text-gray-200">{fact.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Languages */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-14"
        aria-labelledby="languages-title"
      >
        <header className="flex flex-col md:flex-row items-start md:items-end mb-10">
          <motion.h2
            id="languages-title"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl font-bold"
          >
            <span className="text-rose-500">Languages</span> I Know
          </motion.h2>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="flex flex-col gap-1 ml-5"
            aria-hidden="true"
          >
            <hr className="border-rose-500 w-16" />
            <hr className="border-rose-500 w-10" />
          </motion.div>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "English", level: "Professional Working Proficiency" },
            { name: "Bangla", level: "Native & Excellent" },
            { name: "Hindi", level: "Fluent" },
          ].map((lang, i) => (
            <div
              key={i}
              className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-center hover:bg-rose-500/20 transition"
            >
              <h3 className="font-bold text-white">{lang.name}</h3>
              <p className="text-gray-300">{lang.level}</p>
            </div>
          ))}
        </div>
      </motion.section>

    
    </section>
  );
};

export default MoreAboutMe;
