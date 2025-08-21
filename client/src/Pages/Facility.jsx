// Facility.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHospitalAlt, FaXRay, FaStethoscope, FaCapsules, FaBed } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";

// Reuse the same images you already have in Home.jsx
import ImageOne from "../assets/doc1.jpg";
import ImageTwo from "../assets/doc2.jpg";

/* -------------------- Reusable Facility Card (modern hover style) -------------------- */
const FacilityCard = ({ icon, title, description, image, index, aosDelay = 0 }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
  >
    {/* Background image reveals on hover */}
    {image ? (
      <img
        src={image}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
      />
    ) : (
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(26,118,188,0.25),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(0,80,157,0.25),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    )}

    {/* Dark overlay when hovered */}
    <div className="pointer-events-none absolute inset-0 bg-[#0b2d56]/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    {/* Content */}
    <div className="relative z-10 p-8">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#00509d]/10 text-[#00509d] transition-all duration-500 group-hover:bg-white">
          {icon}
        </div>
        {/* Number tag (top-right on hover) */}
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

/* -------------------- Data -------------------- */
const facilities = [
  {
    icon: <FaHospitalAlt className="text-3xl" />,
    title: "Twin Operation Theatres",
    description:
      "State-of-the-art twin operation theatres equipped with laminar (laminar flow) systems.",
    image: ImageOne,
  },
  {
    icon: <FaXRay className="text-3xl" />,
    title: "C-Radius X-Ray Instrument",
    description:
      "High precision imaging with advanced C-Radius and digital X-Ray instruments.",
    image: ImageTwo,
  },
  {
    icon: <FaBed className="text-3xl" />,
    title: "ICU Facilities",
    description:
      "Intensive care units equipped with centralized oxygen and emergency support systems.",
    image: ImageOne,
  },
  {
    icon: <FaCapsules className="text-3xl" />,
    title: "In-house Pharmacy",
    description:
      "24×7 well-stocked pharmacy ensuring immediate access to prescribed medication.",
    image: ImageTwo,
  },
  {
    icon: <GiHealthNormal className="text-3xl" />,
    title: "Pain & Paralysis Relief Center",
    description:
      "Advanced physiotherapy center for pain management and paralysis recovery programs.",
    image: ImageOne,
  },
];

const Facility = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -left-10 h-72 w-72 bg-[#1a76bc] rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-72 w-72 bg-[#00509d] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[#00509d] text-2xl font-bold">OUR FACILITIES</span>
            <h2 className="text-4xl font-bold text-[#00509d] mt-2 mb-4">
              Advanced Infrastructure &amp; Services
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              Empowering our specialists with world-class facilities to deliver exceptional care.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f, i) => (
              <FacilityCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
                image={f.image}
                index={i + 1}
                aosDelay={i * 100}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facility;
