import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import logo from "../assets/TOPCare.png";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Facilities", path: "/facilities" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="mt-6 bg-gradient-to-b from-[#f3f6ff] via-white to-white text-gray-800 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-[#e6f1ff] flex items-center justify-center overflow-hidden">
                <img
                  src={logo}
                  alt="TOP Care Hospital Logo"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#00509d]">
                  TOP Care Hospital
                </h3>
                <p className="text-xs text-slate-500">
                  Ortho &amp; Speech Rehabilitation Centre
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Specialized orthopedic and speech-language rehabilitation center
              in Sathyamangalam, providing compassionate care with modern,
              evidence-based treatment.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f1ff] text-slate-600 text-base hover:bg-[#00509d] hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#0b2d56] uppercase tracking-[0.15em] mb-4">
              Quick Links
            </h3>
            <div className="h-0.5 w-10 bg-[#1a76bc] mb-4 rounded-full" />
            <ul className="space-y-2.5">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="group text-sm text-gray-600 hover:text-[#00509d] font-medium transition-colors flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-[#00509d]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visiting Hours */}
          <div>
            <h3 className="text-sm font-semibold text-[#0b2d56] uppercase tracking-[0.15em] mb-4">
              Visiting Hours
            </h3>
            <div className="h-0.5 w-10 bg-[#1a76bc] mb-4 rounded-full" />
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-[#e6f1ff] text-[#00509d]">
                  <FaClock />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Morning Session</p>
                  <p className="text-gray-600">9:00 AM – 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-[#e6f1ff] text-[#00509d]">
                  <FaClock />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Evening Session</p>
                  <p className="text-gray-600">4:00 PM – 7:30 PM</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                *Emergency services available 24/7
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-[#0b2d56] uppercase tracking-[0.15em] mb-4">
              Contact Us
            </h3>
            <div className="h-0.5 w-10 bg-[#1a76bc] mb-4 rounded-full" />
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-[#e6f1ff] text-[#00509d]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone Numbers</p>
                  <p className="text-gray-600">
                    <a href="tel:+914295222435" className="hover:text-[#00509d]">
                      04295 222435
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+914295297466" className="hover:text-[#00509d]">
                      04295 297466
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+916381603832" className="hover:text-[#00509d]">
                      63816 03832
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-[#e6f1ff] text-[#00509d]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-600">113/21-24, SRN Street</p>
                  <p className="text-gray-600">Opp. to Old Bus Stand</p>
                  <p className="text-gray-600">Court Backside</p>
                  <p className="text-gray-600">Sathyamangalam - 638402</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-4 border-t border-slate-200/70">
          <div className=" gap-3">
            <p className="text-gray-500 text-xs sm:text-sm text-center ">
              &copy; {year} TOP Care Hospital. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
