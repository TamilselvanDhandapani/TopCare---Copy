import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";
import { GiStethoscope } from "react-icons/gi";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-16 bg-white min-h-screen overflow-x-hidden">
      

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* About Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00509d] mb-6" data-aos="fade-down">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-6" data-aos="fade-up">
              Founded by <strong className="text-[#00509d]">Dr. Thiyagu</strong>, Thiyagu Ortho & Pain Care Hospital began with a simple yet powerful vision: to provide exceptional orthopedic treatment, pain management, and rehabilitation services to our community.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              What started as a modest practice has grown into a trusted healthcare institution, combining cutting-edge technology with compassionate care to help patients regain their mobility and quality of life.
            </p>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
            data-aos="fade-right"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <FaEye className="text-[#00509d] text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#00509d] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the premier center for orthopedic and speech therapy services in the region, delivering personalized, innovative care that transforms lives through evidence-based rehabilitation and cutting-edge technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
            data-aos="fade-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <FaBullseye className="text-[#00509d] text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#00509d] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional orthopedic and speech rehabilitation through compassionate, technology-driven care, building lasting relationships founded on clinical excellence and patient-centered innovation for all.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Doctors Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-[#00509d] mb-4" data-aos="fade-down">
            Meet Our Specialists
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg" data-aos="fade-up">
            Our team of dedicated healthcare professionals brings expertise and compassion to every patient interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
            data-aos="zoom-in"
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
                  alt="Dr. S.P. Thiyagu"
                  className="w-48 h-48 rounded-full object-cover border-4 border-blue-50"
                />
                <div className="absolute -bottom-2 right-2 bg-[#00509d] text-white p-2 rounded-full">
                  <GiStethoscope className="text-xl" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#00509d] mb-1">
                Dr. S.P. Thiyagu
              </h4>
              <p className="text-[#00509d] font-medium mb-3">M.S (Ortho)., (JIPMER)</p>
              <p className="text-gray-600">
                Expert in Orthopedics, Bone Fracture, Joint Surgery
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all"
            data-aos="zoom-in"
            data-aos-delay="100"
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
                  alt="C. Kiruthiga Thiyagu"
                  className="w-48 h-48 rounded-full object-cover border-4 border-blue-50"
                />
                <div className="absolute -bottom-2 right-2 bg-[#00509d] text-white p-2 rounded-full">
                  <GiStethoscope className="text-xl" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#00509d] mb-1">
                C. Kiruthiga Thiyagu
              </h4>
              <p className="text-[#00509d] font-medium mb-3">M.Sc. (Sp & Hg)</p>
              <p className="text-gray-600">
                Speech and Language Rehabilitation Specialist
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-[#00509d] text-center mb-8" data-aos="fade-down">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Compassion",
                desc: "We treat every patient with empathy, respect, and kindness."
              },
              {
                title: "Excellence",
                desc: "We maintain the highest standards of medical care and professionalism."
              },
              {
                title: "Innovation",
                desc: "We embrace advanced techniques and technologies for better outcomes."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-bold text-[#00509d] mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;