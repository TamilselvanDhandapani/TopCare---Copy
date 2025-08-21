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

/* ---------- Reusable Feature Card (hover like your screenshot) ---------- */
const FeatureCard = ({ icon, title, description, image, index, aosDelay = 0 }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
  >
    {/* Background image that fades in on hover */}
    <img
      src={image}
      alt=""
      className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
    />
    {/* Dark overlay on hover */}
    <div className="pointer-events-none absolute inset-0 bg-[#0b2d56]/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    {/* Card Content */}
    <div className="relative z-10 p-8">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#00509d]/10 text-[#00509d] transition-all duration-500 group-hover:bg-white group-hover:text-[#00509d]">
          {icon}
        </div>

        {/* Number tag (top-right; visible on hover) */}
        <span className="ml-auto text-xl font-extrabold tracking-widest text-white/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#00509d] transition-colors duration-500 group-hover:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 transition-colors duration-500 group-hover:text-white/80">
        {description}
      </p>
    </div>

    {/* Corner accent blob like the reference */}
    <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-tl-[2rem] bg-[#1a76bc] opacity-90 transition-transform duration-500 group-hover:translate-x-10 group-hover:translate-y-10" />
  </div>
);

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  /* ---------- Stats for Achievements ---------- */
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

  /* ---------- Card content arrays ---------- */
  const orthoServices = [
    {
      icon: <GiKneeBandage className="text-3xl" />,
      title: "Knee Replacement",
      description: "Robotic precision for mobility restoration.",
      image: ImageOne,
    },
    {
      icon: <GiBrain className="text-3xl" />,
      title: "Paralysis Care",
      description: "Neuro-rehabilitation techniques for full recovery.",
      image: ImageTwo,
    },
    {
      icon: <GiJoint className="text-3xl" />,
      title: "Joint Surgery",
      description: "Expertise in hip, elbow and shoulder repair.",
      image: ImageOne,
    },
    {
      icon: <FaMicroscope className="text-3xl" />,
      title: "Microscopic Surgery",
      description: "Precision microscopic procedures for optimal recovery.",
      image: ImageTwo,
    },
  ];

  const speechServices = [
    {
      title: "Diagnosis of Speech & Language Disorders in Children",
      description:
        "Early identification of challenges to enable timely intervention.",
      icon: <FaComments className="text-3xl" />,
      image: ImageTwo,
    },
    {
      title: "Assessment, Counseling & Training",
      description:
        "Personalized evaluation, guidance, and therapy plans.",
      icon: <GiStethoscope className="text-3xl" />,
      image: ImageOne,
    },
    {
      title: "Autism Spectrum Disorder",
      description:
        "Programs to enhance speech, social skills, and communication.",
      icon: <GiBrain className="text-3xl" />,
      image: ImageTwo,
    },
    {
      title: "Attention Deficit Disorders (ADHD)",
      description:
        "Strategies to improve attention and expressive/receptive skills.",
      icon: <FaBrain className="text-3xl" />,
      image: ImageOne,
    },
  ];

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-4">
            <p className="uppercase tracking-widest text-sm text-[#00509d]">
              We Take Care Of Your Health
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#00509d] leading-tight">
              We Are Providing <br /> Best &amp; Affordable <br /> Health Care.
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
            <div className="absolute left-20 hidden lg:block w-80 h-100 bg-[radial-gradient(circle,#00509d_2px,transparent_1px)] [background-size:16px_16px] opacity-50 z-0"></div>

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
      <section className="py-16 bg-white mt-2 relative">
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

          {/* Updated cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orthoServices.map((s, i) => (
              <FeatureCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                image={s.image}
                index={i + 1}
                aosDelay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Speech Services Section */}
      <section className="py-10 bg-white mt-2 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00509d] mt-2 mb-4">
              Specialized Speech Care Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our Speech Training Centre specializes in diagnosing and treating a
              wide range of speech, language, and neurological communication
              disorders across children and adults.
            </p>
          </div>

          {/* Updated cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speechServices.map((s, i) => (
              <FeatureCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                image={s.image}
                index={i + 1}
                aosDelay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
                  <CountUp end={stat.value} start={0} duration={5} separator="," />
                  {stat.suffix}
                </h3>
                <p className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600 text-center text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
