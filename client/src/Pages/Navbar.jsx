import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt, FaClinicMedical } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/TOPCare.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Speech Therapy", link: "/speech-therapy", highlight: true },
    { name: "Services", link: "/services" },
    { name: "Facilities", link: "/facilities" },
    { name: "About", link: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: { ease: "easeInOut", duration: 0.2 }
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          {/* Logo with medical icon */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full  mr-2">
             <img src={logo}/>
            </div>
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`px-4 py-2 rounded-lg text-md font-medium transition-colors flex items-center ${
                  location.pathname === item.link
                    ? item.highlight
                      ? "bg-blue-100 text-blue-700 border-b-2 border-blue-500"
                      : "bg-gray-100 text-gray-800"
                    : item.highlight
                    ? "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="ml-4 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:bg-blue-700"
            >
              <FaPhoneAlt className="text-sm" />Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow"
            >
              <FaPhoneAlt className="text-sm" />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-1 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Vertically Centered */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleMenu}
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-2/3 h-full bg-white z-50 shadow-xl flex flex-col"
            >
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Link to="/" className="flex items-center" onClick={toggleMenu}>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mr-2">
                 <img src={logo}/>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-gray-800 leading-tight">
                      TOPCare
                    </span>
                    <span className="text-xs text-blue-600 font-medium">
                      Specialty Hospital
                    </span>
                  </div>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-1 text-gray-500 hover:text-blue-600 rounded-full"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Vertically Centered Navigation Items */}
              <div className="flex flex-col items-center mt-6">
                <ul className=" flex-grow items-center justify-center">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full text-center"
                    >
                      <Link
                        to={item.link}
                        onClick={toggleMenu}
                        className={`block px-6 py-4 rounded-xl text-lg font-medium ${
                          location.pathname === item.link
                            ? item.highlight
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-800"
                            : item.highlight
                            ? "text-blue-600 hover:bg-blue-50"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                       
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

               
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;