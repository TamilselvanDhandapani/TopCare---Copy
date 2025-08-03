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
import logo from "../assets/web.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-8 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Hospital Info */}
          <div className="space-y-2">
            <div className="flex items-center">
              

              <h3 className="text-xl font-bold text-[#00509d]">
                TOP Care Hospital
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Specialized orthopedic and speech-language rehabilitation center
              providing compassionate care with cutting-edge treatments.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-500 hover:text-[#00509d] transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#00509d] transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#00509d] transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#00509d] transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#00509d] mb-6 pb-2 border-b border-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Facilities", path: "/facilities" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-[#00509d] font-medium transition-colors flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visiting Hours */}
          <div>
            <h3 className="text-lg font-bold text-[#00509d] mb-6 pb-2 border-b border-gray-200">
              Visiting Hours
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaClock className="text-[#00509d] mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Morning Session</p>
                  <p className="text-gray-600">9:00 AM – 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-[#00509d] mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Evening Session</p>
                  <p className="text-gray-600">4:00 PM – 7:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-[#00509d] mb-6 pb-2 border-b border-gray-200">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaPhoneAlt className="text-[#00509d] mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Phone Numbers</p>
                  <p className="text-gray-600">04295 222435</p>
                  <p className="text-gray-600">04295 297466</p>
                  <p className="text-gray-600">63816 03832</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#00509d] mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Address</p>
                  <p className="text-gray-600">113/21-24, SRN Street</p>
                  <p className="text-gray-600">Opp. to Old Bus Stand</p>
                  <p className="text-gray-600">Court Backside</p>
                  <p className="text-gray-600">Sathyamangalam - 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TOPCare Hospital. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-[#00509d] transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#00509d] transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.nenius.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#00509d] transition-colors"
          >
            Designed by NENIUS Technologies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
