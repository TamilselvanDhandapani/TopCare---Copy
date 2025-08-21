// Services.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaBone,
  FaProcedures,
  FaRunning,
  FaWheelchair,
  FaStethoscope,
  FaMicroscope,
} from "react-icons/fa";
import { GiJoint } from "react-icons/gi";

import ImageOne from "../assets/doc1.jpg";
import ImageTwo from "../assets/doc2.jpg";

/* ---------- Reusable Feature Card (matches Home hover style) ---------- */
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

    {/* Corner accent blob */}
    <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-tl-[2rem] bg-[#1a76bc] opacity-90 transition-transform duration-500 group-hover:translate-x-10 group-hover:translate-y-10" />
  </div>
);

/* ---------- Services data ---------- */
const services = [
  {
    title: "Fracture Treatments",
    icon: <FaBone className="text-3xl" />,
    description:
      "Comprehensive fracture management from diagnosis to full recovery.",
  },
  {
    title: "Pain Relief Treatments",
    icon: <FaStethoscope className="text-3xl" />,
    description:
      "Advanced therapies to manage and relieve chronic and acute pain.",
  },
  {
    title: "Spinal Cord Treatments",
    icon: <FaWheelchair className="text-3xl" />,
    description:
      "Expert care for spinal injuries and neurological rehabilitation.",
  },
  {
    title: "Sports Injuries",
    icon: <FaRunning className="text-3xl" />,
    description:
      "Injury prevention and recovery plans for athletes of all levels.",
  },
  {
    title: "Spinal Cord Surgery",
    icon: <FaProcedures className="text-3xl" />,
    description:
      "Minimally invasive and traditional surgical options for spinal repair.",
  },
  {
    title: "Joint Replacement Surgery",
    icon: <GiJoint className="text-3xl" />,
    description:
      "State-of-the-art joint replacement procedures for better mobility.",
  },
  {
    title: "Microscopic Surgery",
    icon: <FaMicroscope className="text-3xl" />,
    description:
      "Precision microscopic procedures to ensure optimal recovery.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-12 bg-white min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-[#00509d] text-2xl font-semibold">
            OUR SERVICES
          </span>
          <h2 className="text-4xl font-bold text-[#00509d] mt-2 mb-4">
            Excellence in Orthopedic &amp; Neurological Care
          </h2>
          <p className="text-lg text-[#00509d] max-w-2xl mx-auto">
            Explore our comprehensive range of treatments designed to help you
            heal and thrive.
          </p>
        </div>

        {/* Redesigned cards (same hover style as Home) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <FeatureCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.description}
              image={i % 2 === 0 ? ImageOne : ImageTwo} // alternate images
              index={i + 1}
              aosDelay={i * 100}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
