import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaEye,
  FaBullseye,
  FaHandHoldingHeart,
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdPrecisionManufacturing,
} from "react-icons/md";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "10K+", label: "Patients Treated" },
    { value: "98%", label: "Patient Satisfaction" },
    { value: "24/7", label: "Emergency Care" },
  ];

  const doctors = [
    {
      name: "Dr. S.P. Thiyagu",
      degree: "M.S (Ortho)., (JIPMER)",
      expertise: "Orthopedics, Bone Fracture, Joint Surgery",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
    },
    {
      name: "C. Kiruthiga Thiyagu",
      degree: "M.Sc. (Sp & Hg)",
      expertise: "Speech and Language Rehabilitation",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    },
  ];

  const values = [
    {
      title: "Compassion",
      desc: "We treat every patient with empathy, respect, and kindness.",
      icon: <FaHandHoldingHeart className="text-3xl text-[#00509d]" />,
    },
    {
      title: "Excellence",
      desc: "We maintain the highest standards of medical care and professionalism.",
      icon: <MdHealthAndSafety className="text-3xl text-[#00509d]" />,
    },
    {
      title: "Innovation",
      desc: "We embrace advanced techniques and technologies for better outcomes.",
      icon: <MdPrecisionManufacturing className="text-3xl text-[#00509d]" />,
    },
  ];

  return (
    <div className="bg-white text-gray-700 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold text-[#00509d] mb-4"
          >
            About <span className="text-blue-400">Thiyagu Ortho & Pain Care</span>
          </motion.h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Pioneering orthopedic and rehabilitation care with compassion,
            expertise, and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 sm:px-6">
          <motion.div className="rounded-2xl shadow-lg overflow-hidden" data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg"
              className="w-full h-[400px] object-cover"
              alt="Facility"
            />
          </motion.div>

          <motion.div data-aos="fade-left">
            <h2 className="text-3xl font-semibold text-[#00509d] mb-4">
              Our <span className="text-blue-400">Story</span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p><strong className="text-[#00509d]">Dr. Thiyagu</strong> founded the hospital with a vision to transform orthopedic care in the community.</p>
              <p>We combine advanced medical technology with a deep sense of compassion to restore mobility and quality of life.</p>
              <p>What began as a small clinic has grown into a trusted center of care, while maintaining our personalized touch.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-[#00509d] mb-12">
            Our Vision & Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl"
              data-aos="fade-up"
              whileHover={{ y: -8 }}
            >
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <FaEye className="text-2xl text-[#00509d]" />
                </div>
                <h3 className="text-xl font-bold text-[#00509d] mb-2">Our Vision</h3>
                <p>
                  To be the premier center for orthopedic and speech therapy,
                  transforming lives through personalized, innovative care.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
              whileHover={{ y: -8 }}
            >
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <FaBullseye className="text-2xl text-[#00509d]" />
                </div>
                <h3 className="text-xl font-bold text-[#00509d] mb-2">Our Mission</h3>
                <p>
                  To deliver exceptional orthopedic and speech rehabilitation
                  through compassionate, technology-driven care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-[#00509d] mb-4">
            Meet Our <span className="text-blue-400">Specialists</span>
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Combining clinical excellence with patient-focused care.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                className="bg-white w-full max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all"
                data-aos="fade-up"
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img
                    src={doctor.image}
                    className="w-full h-60 object-cover"
                    alt={doctor.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-[#00509d] font-medium">{doctor.degree}</p>
                  <p className="text-sm text-gray-600 mt-2">{doctor.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-[#00509d] mb-12">
            Our Core <span className="text-blue-400">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg border border-blue-100 transition-all flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 text-center">{value.icon}</div>
                <h3 className="text-lg font-semibold text-[#00509d]">{value.title}</h3>
                <p className="text-gray-600 mt-2">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;