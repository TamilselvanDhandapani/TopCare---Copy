import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { GiTargetShot } from "react-icons/gi";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-16 bg-white min-h-screen overflow-x-hidden">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* About Introduction */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#00509d] mb-4"
            data-aos="fade-down"
          >
            About Us
          </h2>
          <p
            className="text-[#1a76bc] max-w-3xl mx-auto text-lg"
            data-aos="fade-up"
          >
            Thiyagu Ortho & Pain Care Hospital was founded with a deep
            commitment to excellence in orthopedic treatment, pain management,
            and rehabilitation. Under the visionary leadership of{" "}
            <strong>Dr. Thiyagu</strong>, the hospital began its journey with a
            focus on providing compassionate and specialized care for patients
            suffering from musculoskeletal conditions.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-[#00509d] p-8 rounded-xl border border-[#00509d]/20 shadow-lg hover:shadow-xl transition-all"
            data-aos="fade-right"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white ">Our Vision</h3>
              <p className="text-white leading-relaxed text-center text-lg">
                To be the premier center for orthopedic and speech therapy
                services in the region, delivering personalized, innovative care
                that transforms lives through evidence-based rehabilitation and
                cutting-edge technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#00509d] p-8 rounded-xl border border-[#00509d]/20 shadow-lg hover:shadow-xl transition-all"
            data-aos="fade-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold text-white ">
                Our Mission
              </h3>
              <p className="text-white leading-relaxed text-center text-lg">
                To provide exceptional orthopedic and speech rehabilitation
                through compassionate, technology-driven care, building lasting
                relationships founded on clinical excellence and
                patient-centered innovation for all.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Doctors Section */}
        <div className="text-center mb-12">
          <h3
            className="text-3xl font-bold text-[#00509d] mb-2"
            data-aos="fade-down"
          >
            Our Specialists
          </h3>
          <p
            className="text-[#1a76bc] max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
          >
            Meet our team of dedicated healthcare professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white p-8 rounded-xl border border-[#00509d]/20 shadow-lg hover:shadow-xl transition-all"
            data-aos="zoom-in"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg"
                alt="Dr. S.P. Thiyagu"
                className="w-60 h-60 rounded-[20px] mb-6 object-cover "
              />
              <h4 className="text-xl font-bold text-[#00509d] text-center mb-2">
                Dr. S.P. Thiyagu .S.{" "}
              </h4>
              <span className="text-md"> M.S (Ortho)., (JIPMER)</span>

              <span> Expert in Orthopedics, Bone Fracture,Joint Surgery </span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl border border-[#00509d]/20 shadow-lg hover:shadow-xl transition-all"
            data-aos="zoom-in"
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
                alt="C. Kiruthiga Thiyagu"
                className="w-60 h-60 rounded-[20px] mb-6 object-cover "
              />
              <h4 className="text-xl font-bold text-[#00509d] text-center mb-2">
                C. Kiruthiga Thiyagu
              </h4>
              <span className="text-md">M.Sc. (Sp & Hg)</span>
              <span> Speech and Language Rehabilitation Specialist.</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
