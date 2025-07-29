// Services.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaBone,
  FaProcedures,
  FaRunning,
  FaWheelchair,
  FaStethoscope,
  FaMicroscope,
  FaJoint,
} from "react-icons/fa";

const services = [
  {
    title: "Fracture Treatments",
    icon: <FaBone className="text-4xl " />,
    description:
      "Comprehensive fracture management from diagnosis to full recovery.",
  },
  {
    title: "Pain Relief Treatments",
    icon: <FaStethoscope className="text-4xl " />,
    description:
      "Advanced therapies to manage and relieve chronic and acute pain.",
  },
  {
    title: "Spinal Cord Treatments",
    icon: <FaWheelchair className="text-4xl " />,
    description:
      "Expert care for spinal injuries and neurological rehabilitation.",
  },
  {
    title: "Sports Injuries",
    icon: <FaRunning className="text-4xl " />,
    description:
      "Injury prevention and recovery plans for athletes of all levels.",
  },
  {
    title: "Spinal Cord Surgery",
    icon: <FaProcedures className="text-4xl " />,
    description:
      "Minimally invasive and traditional surgical options for spinal repair.",
  },
  {
    title: "Joint Replacement Surgery",
    icon: <FaJoint className="text-4xl " />,
    description:
      "State-of-the-art joint replacement procedures for better mobility.",
  },
  {
    title: "Microscopic Surgery",
    icon: <FaMicroscope className="text-4xl " />,
    description:
      "Precision microscopic procedures to ensure optimal recovery.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="pt-12 bg-white text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-[#00509d]  text-2xl font-semibold">
            OUR SERVICES
          </span>
          <h2 className="text-4xl font-bold text-[#00509d] mt-2 mb-4">
            Excellence in Orthopedic & Neurological Care
          </h2>
          <p className="text-lg text-[#00509d] max-w-2xl mx-auto">
            Explore our comprehensive range of treatments designed to help you
            heal and thrive.
          </p>
        </div>
        {/* Modified grid container with centered alignment */}

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              whileHover={{ scale: 1.05 }}
              className="bg-[#00509d] p-8 rounded-xl shadow-md hover:shadow-xl transition-all text-center w-full max-w-sm"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
