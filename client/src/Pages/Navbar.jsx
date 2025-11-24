import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
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

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 280, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { ease: "easeInOut", duration: 0.2 },
    },
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300
        bg-white
        ${
          isScrolled || isOpen
            ? "shadow-md border-b border-slate-100"
            : "shadow-sm border-b border-slate-100/60"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex justify-between items-center h-16 sm:h-20"
          aria-label="Main navigation"
        >
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border border-[#d0e0ff]">
              <img
                src={logo}
                alt="Top Care Hospital logo"
                className="h-8 w-auto object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm sm:text-base font-bold text-[#00509d]">
                Top Care Hospital
              </span>
              <span className="text-[11px] text-[#1a76bc] font-medium">
                Orthopedic &amp; Speech Therapy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const active = isActive(item.link);
              return (
                <Link
                  key={item.link}
                  to={item.link}
                  className={`
                    relative px-3 py-2 text-sm font-medium rounded-full
                    transition-all duration-200
                    flex items-center gap-2
                    ${
                      active
                        ? "text-[#00509d]"
                        : item.highlight
                        ? "text-[#1a76bc]"
                        : "text-slate-600"
                    }
                    ${
                      active
                        ? "bg-[#e6f1ff]"
                        : "hover:bg-slate-100/80 hover:text-[#00509d]"
                    }
                  `}
                >
                  <span>{item.name}</span>
                  {active && (
                    <span className="absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-[#00509d]" />
                  )}
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-[#00509d] px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#1a76bc] hover:shadow-lg transition-all"
            >
              <FaPhoneAlt className="text-xs" />
              Contact
            </Link>
          </div>

          {/* Mobile Right Side: phone + menu */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-1 rounded-full bg-[#00509d] px-3 py-2 text-[11px] font-semibold text-white shadow-sm hover:bg-[#1a76bc] transition"
            >
              <FaPhoneAlt className="text-xs" />
              <span className="hidden xs:inline">Contact</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-[#00509d] p-1 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleMenu}
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-50 shadow-xl flex flex-col"
            >
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <Link
                  to="/"
                  className="flex items-center gap-3"
                  onClick={toggleMenu}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-[#f3f8fd] border border-[#d0e0ff]">
                    <img
                      src={logo}
                      alt="Top Care Hospital logo"
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-bold text-[#00509d]">
                      Top Care Hospital
                    </span>
                    <span className="text-[10px] text-[#1a76bc] font-medium">
                      Sathyamangalam, Erode District
                    </span>
                  </div>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-1 rounded-full text-slate-500 hover:text-[#00509d]"
                  aria-label="Close menu"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              <div className="flex-1 flex flex-col">
                <ul className="mt-4 space-y-1 px-3">
                  {navItems.map((item, index) => {
                    const active = isActive(item.link);
                    return (
                      <motion.li
                        key={item.link}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.link}
                          onClick={toggleMenu}
                          className={`
                            flex items-center justify-between
                            rounded-xl px-4 py-3
                            text-sm font-medium
                            transition-all duration-200
                            ${
                              active
                                ? "bg-[#e6f1ff] text-[#00509d]"
                                : "text-slate-700 hover:bg-slate-100"
                            }
                          `}
                        >
                          <span>{item.name}</span>
                          {item.highlight && (
                            <span className="text-[10px] uppercase tracking-wide text-[#1a76bc] font-semibold">
                              Featured
                            </span>
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="px-4 pb-6 pt-4 border-t border-slate-100">
                  <a
                    href="tel:+914295222435"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#00509d] px-2 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#1a76bc] hover:shadow-lg transition-all"
                  >
                    <FaPhoneAlt className="text-sm" />
                    04295 222435
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
