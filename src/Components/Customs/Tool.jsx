import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Icon } from "@iconify/react"; 

const Tool = () => {
  const tools = [
    { name: "Figma", icon: "skill-icons:figma-dark" },
    { name: "shadcn/ui", icon: "simple-icons:shadcnui" },
    { name: "Git & GitHub", icon: "skill-icons:git" },
    { name: "VS Code", icon: "skill-icons:vscode-light" },
    { name: "Tailwind CSS", icon: "skill-icons:tailwindcss-dark" },
    { name: "Canva", icon: "devicon:canva" },
    { name: "Vercel", icon: "skill-icons:vercel-light" },
    { name: "Netlify", icon: "vscode-icons:file-type-netlify" },
    { name: "Postman", icon: "skill-icons:postman" },
  ];

  return (
    <section className="container mx-auto mb-20 lg:px-20">
      <div className="flex flex-col md:flex-row  item-start md:items-end mb-10">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-4xl font-bold"
        >
                  <span className="text-rose-600">Tool</span>
                 {" "} I Use
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            className="bg-gray-900/40 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(244,63,94,0.6)] transition-shadow duration-300"
          >
            <div className="text-6xl text-rose-500 mb-3">
              <Icon icon={tool.icon} />
            </div>
            <p className="text-lg font-semibold text-white">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tool;
