import React from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Code, PenTool, Server, Cloud } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Web Development",
    description:
      "Full-stack applications using React, Next.js, Node.js, Express.js, and MongoDB with modern web standards.",
    points: [
      "Custom Web Apps",
      "Progressive Web Apps",
      "Single Page Applications",
      "Server-Side Rendering",
    ],
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-pink-500" />,
    title: "Responsive Design",
    description:
      "Mobile-first, adaptive layouts that work flawlessly on all devices and screen sizes.",
    points: [
      "Mobile Optimization",
      "Cross-Browser Compatibility",
      "Touch-Friendly Interfaces",
      "Adaptive Layouts",
    ],
    color: "from-pink-500/10 to-pink-500/5",
  },
  {
    icon: <Code className="w-10 h-10 text-green-500" />,
    title: "Frontend Development",
    description:
      "Interactive, high-performance UI built with modern frameworks and libraries.",
    points: [
      "React.js, Next.js, ES6+",
      "Tailwind CSS, HTML5, CSS3, TypeScript",
      "Axios & LocalStorage Integration",
      "State Management (useState, useEffect, useContext)",
    ],
    color: "from-green-500/10 to-green-500/5",
  },
  {
    icon: <PenTool className="w-10 h-10 text-orange-500" />,
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect implementation of modern designs from Figma or Pixso into React.",
    points: [
      "Figma to React",
      "Design System Creation",
      "Component Libraries",
      "Responsive Layouts & Animations",
    ],
    color: "from-orange-500/10 to-orange-500/5",
  },
  {
    icon: <Server className="w-10 h-10 text-purple-500" />,
    title: "Backend Development",
    description:
      "Scalable backend solutions with Node.js, Express.js, MongoDB & API integrations.",
    points: [
      "Express API Development",
      "MongoDB Schema Design",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
    color: "from-purple-500/10 to-purple-500/5",
  },
  {
    icon: <Cloud className="w-10 h-10 text-red-500" />,
    title: "Cloud Deployment",
    description:
      "Seamless deployment & management of full-stack apps using top cloud platforms.",
    points: [
      "Vercel, Netlify & Railway Deployment",
      "CI/CD Workflow Setup",
      "Environment Variable Management",
      "Production Optimization",
    ],
    color: "from-red-500/10 to-red-500/5",
  },
];

const Services = () => {
  return (
    <section className="py-16 overflow-hidden" aria-labelledby="services-title">
      <div className="container mx-auto px-4 lg:px-20">
        {/* Section Title */}
        <header className="flex flex-col md:flex-row md:items-end mb-10">
          <motion.h1
            id="services-title"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold"
          >
            My <span className="text-rose-600">Services</span>
          </motion.h1>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-1 ml-5"
            aria-hidden="true"
          >
            <hr className="border-1 w-16" />
            <hr className="border-1 w-10 text-rose-600" />
          </motion.div>
        </header>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 text-gray-300"
        >
          Comprehensive web development services to bring your ideas to life.
        </motion.p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${service.color} border border-rose-200`}
            >
              {/* Icon */}
              <div className="mb-4 inline-block hover:animate-spin">
                {service.icon}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>

              {/* Description */}
              <p className="mb-4 text-gray-200">{service.description}</p>

              {/* Points */}
              <ul className="space-y-1 text-sm">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex text-gray-300 items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 bg-rose-500 rounded-full"
                      aria-hidden="true"
                    ></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
