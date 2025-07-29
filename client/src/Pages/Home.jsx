// Home.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaUserInjured,
  FaProcedures,
  FaClinicMedical,
  FaHandsHelping,
  FaMicroscope,
  FaComments,
  FaBrain,
} from "react-icons/fa";
import { GiKneeBandage, GiBrain, GiJoint, GiStethoscope } from "react-icons/gi";

import { Link } from "react-router-dom";

import CountUp from "react-countup";

import ImageOne from "../assets/doc1.jpg";
import ImageTwo from "../assets/doc2.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    {
      icon: <FaUserInjured className="text-3xl" />,
      value: 10000,
      suffix: "+",
      label: "Patients Treated",
      description: "Compassionate care for every individual",
    },
    {
      icon: <FaProcedures className="text-3xl" />,
      value: 5200,
      suffix: "+",
      label: "Successful Surgeries",
      description: "Precision procedures with outstanding outcomes",
    },
    {
      icon: <FaClinicMedical className="text-3xl" />,
      value: 25,
      suffix: "+",
      label: "Specialized Facilities",
      description: "State-of-the-art treatment centers",
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      value: 50,
      suffix: "+",
      label: "Healthcare Services",
      description: "Comprehensive treatment options",
    },
  ];

  return (
    <div className="pt-12">
      {/* Hero Section */}
      <section className="bg-white text-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-4 ">
            <p className="uppercase tracking-widest text-sm text-white/70">
              We Take Care Of Your Health
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#00509d] leading-tight">
              We Are Providing <br /> Best & Affordable <br /> Health Care.
            </h1>
            <p className="text-gray-700 text-lg">
              Our mission is to deliver the highest quality healthcare services.
              We believe that everyone deserves access to excellent medical care
              without compromising on quality.
            </p>
            <div className="flex gap-6 items-center mt-6">
              <button className="bg-transparent border border-[#00509d] text-[#00509d] hover:bg-[#1a76bc] hover:text-white transition px-6 py-3 rounded-full font-medium">
                <Link to="/about">Read More →</Link>
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative lg:w-1/2 flex justify-center items-center">
            {/* Decorative Dot Grid */}
            <div className="absolute  left-20 hidden lg:block w-80 h-100 bg-[radial-gradient(circle,#00509d_2px,transparent_1px)] [background-size:16px_16px] opacity-50 z-0"></div>

            {/* Image 1 */}
            <div className="relative z-10">
              <img
                src={ImageOne}
                alt="Doctor"
                className="w-64 h-80 object-cover rounded-[100px] shadow-lg border-4 border-white"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute right-0 top-0 z-20">
              <img
                src={ImageTwo}
                alt="Doctors walking"
                className="w-64 h-80 object-cover rounded-[100px] shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ortho Services Section */}

      <section className="py-16 bg-white text-white mt-2 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#00509d] text-2xl font-bold">OUR SERVICES</span>
            <h2 className="text-4xl font-bold text-[#00509d] mt-2 mb-4">
              Specialized Ortho Care Solutions
            </h2>
            <p className="text-lg max-w-3xl text-gray-700 mx-auto">
              We combine expertise with advanced technology to deliver
              personalized treatment plans for optimal recovery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <GiKneeBandage className="text-4xl" />,
                title: "Knee Replacement",
                description: "Robotic precision for mobility restoration.",
              },
              {
                icon: <GiBrain className="text-4xl" />,
                title: "Paralysis Care",
                description:
                  "Neuro-rehabilitation techniques for full recovery.",
              },
              {
                icon: <GiJoint className="text-4xl" />,
                title: "Joint Surgery",
                description: "Expertise in hip, elbow and shoulder repair.",
              },
              {
                title: "Microscopic Surgery",
                icon: <FaMicroscope className="text-4xl" />,
                description:
                  "Precision microscopic procedures to ensure optimal recovery.",
              },
            ].map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-[#00509d] hover:bg-[#1a76bc] p-8 rounded-xl transition-all duration-300 text-center shadow-md hover:shadow-xl flex flex-col items-center"
              >
                <div className="text-white mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Speech Services Section */}
      <section className="py-10 bg-white text-white mt-2 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
           
            <h2 className="text-4xl font-bold text-[#00509d] mt-2 mb-4">
              Specialized Speech Care Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
             Our Speech Training Centre specializes in diagnosing and treating a wide range of speech, language, and neurological communication disorders across children and adults.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Diagnosis of Speech & Language Disorders in Children",
                description:
                  "Early identification of speech and language challenges in children to ensure timely and effective intervention.",
                icon: (
                  <FaComments className="text-3xl  transition-transform duration-300 group-hover:scale-110" />
                ),
              },
              {
                title: "Assessment, Counseling & Training",
                description:
                  "Personalized evaluation, guidance, and therapy plans to support communication development.",
                icon: (
                  <GiStethoscope className="text-3xl  transition-transform duration-300 group-hover:scale-110" />
                ),
              },
              {
                title: "Autism Spectrum Disorder",
                description:
                  "Specialized programs to enhance speech, social skills, and communication in children with autism.",
                icon: (
                  <GiBrain className="text-3xl  transition-transform duration-300 group-hover:scale-110" />
                ),
              },
              {
                title: "Attention Deficit Disorders (ADHD)",
                description:
                  "Supportive strategies and therapies to improve attention and expressive/receptive communication skills.",
                icon: (
                  <FaBrain className="text-3xl  transition-transform duration-300 group-hover:scale-110" />
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-[#00509d] hover:bg-[#1a76bc] p-8 rounded-xl transition-all duration-300 text-center shadow-md hover:shadow-xl flex flex-col items-center"
              >
                <div className="text-white mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#00509d] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#fca38e] rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-2xl text-[#00509d] font-bold tracking-wider">
              OUR IMPACT
            </span>
            <h2 className="text-4xl font-bold text-[#00509d] mt-3 mb-4">
              Transforming Lives Through Excellence
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Quantifying our commitment to exceptional patient care and medical
              innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#00509d] hover:border-[#1a76bc]"
              >
                <div className="w-20 h-20 bg-[#00509d] group-hover:bg-[#1a76bc] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl transition-all duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-bold text-[#00509d] mb-2 text-center">
                  <CountUp
                    end={stat.value}
                    start={0}
                    duration={5}
                    separator=","
                  />
                  {stat.suffix}
                </h3>
                <p className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600 text-center text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
