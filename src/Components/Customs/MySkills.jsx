import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const MySkills = () => {
  const skills = [
    {id:1, name: "React", icon: "material-icon-theme:react" },
    {id:2, name: "JavaScript", icon: "skill-icons:javascript" },
    { id:3,name: "HTML", icon: "skill-icons:html" },
    { id:4,name: "CSS", icon: "skill-icons:css" },
    { id:5,name: "MongoDB", icon: "skill-icons:mongodb" },
    { id:6,name: "Node Js", icon: "material-icon-theme:nodejs" },
    { id:7,name: "Firebase", icon: "logos:firebase-icon" },
    {id:8, name: "ExpressJS", icon: "skill-icons:expressjs-light" },
  ];

  return (
    <section className="container mx-auto mb-20 lg:px-20">
      <div className="flex flex-col md:flex-row items-start lg:items-end mb-10 mt-7">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-4xl font-bold"
        >
          My <span className="text-rose-600">Skills</span>
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

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-2">
        {skills?.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            className="bg-gray-900/40 border border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(244,63,94,0.6)] transition-shadow duration-300"
          >
            <div className="text-6xl text-rose-500 mb-3">
              <Icon icon={skill.icon} />
            </div>
            <p className="text-lg font-semibold text-white">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
