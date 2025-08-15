import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "../../../assets/iconswithname.png";
import {
  Home,
  Info,
  Code,
  FolderGit2,
  Briefcase,
  FileText,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuLeft = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/more-about-me", icon: <Info size={18} /> },
    { name: "Skills", path: "/skill", icon: <Code size={18} /> },
  ];

  const menuRight = [
    { name: "Project", path: "/projects", icon: <FolderGit2 size={18} /> },
    { name: "Service", path: "/services", icon: <Briefcase size={18} /> },
    {
      name: "Resume",
      path: "https://drive.google.com/file/d/1M1RfucTlKgUAMXu7klbjF237QGNIJ3C2/view?usp=sharing",
      icon: <FileText size={18} />,
    },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/20">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center md:justify-between">
          <ul className="hidden md:flex items-center gap-4">
            {menuLeft.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out ${
                    location.pathname === item.path
                      ? "bg-rose-500 text-white"
                      : "text-white hover:bg-rose-500 hover:text-white"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/" className="mx-4">
            <img src={logo} alt="Logo" className="w-30 rounded-full" />
          </Link>

          <ul className="hidden md:flex items-center gap-4">
            {menuRight.map((item) =>
              item.name === "Resume" ? (
                <li key={item.name}>
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out text-white hover:bg-rose-500 hover:text-white"
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ) : (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out ${
                      location.pathname === item.path
                        ? "bg-rose-500 text-white"
                        : "text-white hover:bg-rose-500 hover:text-white"
                    }`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>

          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      <div
        className={`md:hidden mt-4 bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 rounded-xl text-center transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {[...menuLeft, ...menuRight].map((item) =>
          item.name === "Resume" ? (
            <a
              key={item.name}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center px-4 py-2 rounded-lg my-1 transition-colors duration-300 ease-in-out text-white hover:bg-rose-500 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              {item.name}
            </a>
          ) : (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 justify-center px-4 py-2 rounded-lg my-1 transition-colors duration-300 ease-in-out ${
                location.pathname === item.path
                  ? "bg-rose-500 text-white"
                  : "text-white hover:bg-rose-500 hover:text-white"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
