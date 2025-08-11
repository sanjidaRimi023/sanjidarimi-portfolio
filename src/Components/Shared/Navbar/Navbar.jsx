import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "../../../assets/iconswithname.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
console.log("Current Pathname:", location.pathname);

  const menuLeft = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
  ];

  const menuRight = [
    { name: "Resume", path: "/resume" },
    { name: "Project", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky pt-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 rounded-full px-6 py-2 flex items-center gap-8">
       
            <ul className="hidden md:flex items-center gap-4">
              {menuLeft.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-full transition-all ${
                      location.pathname === item.path
                        ? "bg-rose-500 text-white"
                        : "text-white hover:bg-rose-500 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mx-4">
              <img src={logo} alt="Logo" className="w-30 rounded-full" />
            </div>

     
            <ul className="hidden md:flex items-center gap-4">
              {menuRight.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-full transition-all ${
                      location.pathname === item.path
                        ? "bg-rose-500 text-white"
                        : "text-white hover:bg-rose-500 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

        
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 rounded-xl p-4 text-center">
          {[...menuLeft, ...menuRight].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg my-1 transition-all ${
                location.pathname === item.path
                  ? "bg-rose-500 text-white"
                  : "text-white hover:bg-rose-500 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
