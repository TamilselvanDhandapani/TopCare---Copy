// Facility.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaHospitalAlt, FaXRay, FaStethoscope, FaCapsules, FaBed } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

const facilities = [
  {
    icon: <FaHospitalAlt className="text-4xl " />,
    title: "Twin Operation Theatres",
    description:
      "State-of-the-art twin operation theatres equipped with laminar (laminar flow) systems."
  },
  {
    icon: <FaXRay className="text-4xl " />,
    title: "C-Radius X-Ray Instrument",
    description: "High precision imaging with advanced C-Radius and digital X-Ray instruments."
  },
  {
    icon: <FaBed className="text-4xl " />,
    title: "ICU Facilities",
    description: "Intensive care units equipped with centralized oxygen and emergency support systems."
  },
  {
    icon: <FaCapsules className="text-4xl " />,
    title: "In-house Pharmacy",
    description: "24x7 well-stocked pharmacy ensuring immediate access to prescribed medication."
  },
  {
    icon: <GiHealthNormal className="text-4xl " />,
    title: "Pain & Paralysis Relief Center",
    description:
      "Advanced physiotherapy center for pain management and paralysis recovery programs."
  }
];

const Facility = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="pt-12 bg-white text-white min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#00509d] text-2xl font-semibold">OUR FACILITIES</span>
            <h2 className="text-4xl font-bold text-[#00509d] mt-2 mb-4">
              Advanced Infrastructure & Services
            </h2>
            <p className="text-lg text-[#00509d] max-w-3xl mx-auto">
              Empowering our specialists with world-class facilities to deliver exceptional care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-[#00509d] p-8 rounded-xl shadow-md hover:shadow-xl text-center transition-all"
              >
                <div className="mb-4 flex justify-center">{facility.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {facility.title}
                </h3>
                <p className="text-white/70 text-sm">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facility;
