import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaClock, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    
    const { name, email, phone, message } = formData;
    const hospitalNumber = "9361784871"; // Replace with your hospital's WhatsApp number
    const text = `New Message from TOP Care Website:
    
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}

Please respond at your earliest convenience.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${hospitalNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="pt-12 bg-white min-h-screen text-gray-800">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00509d] mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're here to help with all your orthopedic and speech therapy needs. Reach out to us anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Contact Information Card */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
            data-aos="fade-right"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-[#00509d] mb-6 pb-2 border-b border-[#00509d]/30">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Visiting Hours */}
              <div className="flex items-start">
                <div className="bg-[#00509d] p-2 rounded-lg mr-4">
                  <FaClock className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#00509d] mb-1">Visiting Hours</h4>
                  <p className="text-gray-600">Morning: 9:00 AM – 2:00 PM</p>
                  <p className="text-gray-600">Evening: 4:00 PM – 7:30 PM</p>
                  <p className="text-gray-500 text-sm mt-1">*Emergency services available 24/7</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start">
                <div className="bg-[#00509d] p-2 rounded-lg mr-4">
                  <FaPhoneAlt className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#00509d] mb-1">Contact Numbers</h4>
                  <p className="text-gray-600">04295 222435</p>
                  <p className="text-gray-600">04295 297466</p>
                  <p className="text-gray-600">Mobile: 9361784871</p>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="flex items-start">
                <div className="bg-[#00509d] p-2 rounded-lg mr-4">
                  <FaWhatsapp className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#00509d] mb-1">WhatsApp</h4>
                  <p className="text-gray-600 mb-2">Message us directly on WhatsApp</p>
                  <a 
                    href="https://wa.me/9361784871" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FaWhatsapp className="mr-2" /> Chat Now
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="bg-[#00509d] p-2 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#00509d] mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    113/21-24, SRN Street,<br />
                    Opposite to Old Bus Stand,<br />
                    Court Backside,<br />
                    Sathyamangalam - 2
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
            data-aos="fade-left"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-[#00509d] mb-6 pb-2 border-b border-[#00509d]/30">
              Send Us a Message
            </h3>
            
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">Full Name*</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00509d] focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00509d] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-600 mb-2">Phone Number*</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00509d] focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">Your Message*</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00509d] focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit"
                onClick={sendWhatsAppMessage}
                className="w-full py-3 px-6 bg-[#00509d] text-white font-semibold rounded-lg shadow-md hover:bg-[#003f75] transition-colors duration-300 flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" /> Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
          data-aos="fade-up"
          whileHover={{ scale: 1.01 }}
        >
          <h3 className="text-xl font-semibold text-white bg-[#00509d] p-4">
            <FaMapMarkerAlt className="inline mr-2" />
            Our Location on Map
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.70700280046!2d77.24612527480069!3d11.501398245403855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba92125aec3d609%3A0x1b16b4ff25e6b240!2sThiyagu%20Ortho%20and%20pain%20care%20hospital!5e1!3m2!1sen!2sin!4v1753717415667!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Thiyagu Ortho and Pain Care Hospital Location"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;