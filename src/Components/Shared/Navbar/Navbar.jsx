/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import icon from "../../../assets/iconswithname.png";
import { motion } from "framer-motion"; 
import { Home, Settings, Bell, User } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Home",
      href: "/",
      gradient:
        "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      label: "Projects",
      href: "#",
      gradient:
        "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Skills",
      href: "/about",
      gradient:
        "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "group-hover:text-green-500 dark:group-hover:text-green-400",
    },
    {
      icon: <User className="h-5 w-5" />,
      label: "About",
      href: "/about",
      gradient:
        "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
      iconColor: "group-hover:text-red-500 dark:group-hover:text-red-400",
    },
  ];

  const itemVariants = {
    initial: { rotateX: 0, opacity: 1 },
    hover: { rotateX: -90, opacity: 0 },
  };

  const backVariants = {
    initial: { rotateX: 90, opacity: 0 },
    hover: { rotateX: 0, opacity: 1 },
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 2,
      transition: {
        opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        scale: {
          duration: 0.5,
          type: "spring",
          stiffness: 300,
          damping: 25,
        },
      },
    },
  };

  const navGlowVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const sharedTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    duration: 0.5,
  };

  return (
    <div className="container mx-auto flex justify-between items-center mt-4">

      <div>
        <img className="w-40" src={icon} alt="logo" />
      </div>

  
      <div>
        <motion.nav
          className="p-2 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-lg border border-gray-200/80 dark:border-gray-800/80 shadow-lg dark:shadow-gray-900/20 relative overflow-hidden"
          initial="initial"
        
        >
       
          <motion.div
            className="absolute -inset-2 rounded-3xl z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(239,68,68,0.1) 100%)",
            }}
            variants={navGlowVariants}
          />

          <ul className="flex items-center gap-2 relative z-10">
            {menuItems.map((item) => (
              <motion.li key={item.label} className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                 
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                    variants={glowVariants}
                    style={{ background: item.gradient, opacity: 0 }}
                  />

              
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors rounded-xl"
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom",
                    }}
                  >
                    <span
                      className={`transition-colors duration-300 ${item.iconColor}`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </motion.a>

                  {/* Back side */}
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors rounded-xl"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center top",
                      transform: "rotateX(90deg)",
                    }}
                  >
                    <span
                      className={`transition-colors duration-300 ${item.iconColor}`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>

      {/* Resume Button */}
      <div>Resume</div>
    </div>
  );
};

export default Navbar;
