// Facility.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHospitalAlt,
  FaXRay,
  FaStethoscope,
  FaCapsules,
  FaBed,
} from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { Helmet } from "react-helmet";

/* -------------------- Redesigned Facility Card -------------------- */
const FacilityCard = ({ icon, title, description, aosDelay = 0 }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="
      group relative flex h-full flex-col items-center text-center
      rounded-2xl border border-[#c5d7f5]
      bg-[#f3f8fd]
      shadow-sm
      px-6 py-7
      transition-all duration-300
      hover:bg-[#dbe9fa]
      hover:-translate-y-1
      hover:shadow-xl
    "
  >
    <div
      className="
        mb-4 flex h-14 w-14 items-center justify-center
        rounded-2xl bg-white text-[#00509d]
        transition-all duration-300
        group-hover:bg-[#00509d]/10 group-hover:text-[#00509d]
      "
    >
      {icon}
    </div>
    <h3 className="text-base sm:text-lg font-bold text-[#00509d]">
      {title}
    </h3>
    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
      {description}
    </p>
  </div>
);

/* -------------------- Data -------------------- */
const facilities = [
  {
    icon: <FaHospitalAlt className="text-2xl sm:text-3xl" />,
    title: "Twin Operation Theatres",
    description:
      "State-of-the-art twin operation theatres equipped with laminar flow systems for infection control and precision surgical care.",
  },
  {
    icon: <FaXRay className="text-2xl sm:text-3xl" />,
    title: "C-Arm & Digital X-Ray",
    description:
      "High precision intra-operative imaging with advanced C-arm and digital X-ray instruments for orthopedic and trauma procedures.",
  },
  {
    icon: <FaBed className="text-2xl sm:text-3xl" />,
    title: "ICU Facilities",
    description:
      "Intensive care units with centralized oxygen, continuous monitoring and emergency support systems for critical patients.",
  },
  {
    icon: <FaCapsules className="text-2xl sm:text-3xl" />,
    title: "In-house 24×7 Pharmacy",
    description:
      "Round-the-clock well-stocked pharmacy ensuring immediate access to prescribed medication within the hospital premises.",
  },
  {
    icon: <GiHealthNormal className="text-2xl sm:text-3xl" />,
    title: "Pain & Paralysis Relief Center",
    description:
      "Advanced physiotherapy and rehabilitation center for pain management, paralysis recovery and post-surgical rehabilitation.",
  },
  {
    icon: <FaStethoscope className="text-2xl sm:text-3xl" />,
    title: "Comprehensive OPD & Diagnostics",
    description:
      "Dedicated outpatient departments and diagnostic support for orthopedics, neurology and rehabilitation services.",
  },
];

const Facility = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  /* -------------------- JSON-LD structured data (WebPage + Breadcrumbs) -------------------- */
  const facilitiesPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hospital Facilities - Top Care Hospital Sathyamangalam",
    url: "https://topcarehospital.com/facilities", // TODO: adjust to actual URL
    description:
      "Overview of hospital facilities at Top Care Hospital in Sathyamangalam, Erode district, including operation theatres, ICU, pharmacy and rehabilitation centre.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://topcarehospital.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Facilities",
        item: "https://topcarehospital.com/facilities", // TODO: adjust to actual URL
      },
    ],
  };

  return (
    <>
      {/* ---------- SEO for Facilities page ---------- */}
      <Helmet>
        <title>
          Hospital Facilities in Sathyamangalam, Erode | Top Care Orthopedic &
          Neuro Hospital
        </title>

        <meta
          name="description"
          content="Explore the hospital facilities at Top Care Hospital in Sathyamangalam, Erode district – twin operation theatres, ICU, C-arm and digital X-ray, 24x7 pharmacy, pain and paralysis relief centre and rehabilitation services."
        />
        <meta
          name="keywords"
          content="hospital facilities in sathyamangalam, orthopedic hospital facilities erode, operation theatre sathyamangalam, ICU hospital erode district, C arm x ray sathyamangalam, physiotherapy centre sathyamangalam, Top Care Hospital"
        />
        <meta name="robots" content="index,follow" />
        {/* TODO: replace with the real deployed URL for this page */}
        <link
          rel="canonical"
          href="https://topcarehospital.com/facilities"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hospital Facilities in Sathyamangalam, Erode | Top Care Hospital"
        />
        <meta
          property="og:description"
          content="Twin operation theatres, ICU, C-arm X-ray, 24x7 pharmacy and rehabilitation facilities at Top Care Hospital, Sathyamangalam, Erode district."
        />
        <meta
          property="og:url"
          content="https://topcarehospital.com/facilities"
        />
        <meta property="og:site_name" content="Top Care Hospital" />
        <meta
          property="og:image"
          content="https://topcarehospital.com/og-facilities.jpg" // TODO: set a real OG image
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hospital Facilities in Sathyamangalam, Erode | Top Care Hospital"
        />
        <meta
          name="twitter:description"
          content="View the advanced hospital infrastructure and facilities available at Top Care Hospital, Sathyamangalam, Erode district."
        />
        <meta
          name="twitter:image"
          content="https://topcarehospital.com/og-facilities.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(facilitiesPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="bg-white">
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f3f8fd] to-white">
          {/* Soft background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -left-10 h-64 w-64 bg-[#1a76bc]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 h-72 w-72 bg-[#00509d]/15 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative">
            {/* Header */}
            <div
              className="text-center mb-14 max-w-3xl mx-auto"
              data-aos="fade-up"
            >
              <span className="inline-flex items-center justify-center rounded-full bg-[#e3efff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#00509d]">
                Our Facilities
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#00509d]">
                Advanced Infrastructure &amp; Services in Sathyamangalam
              </h2>
              <p className="mt-3 text-sm md:text-base text-slate-700">
                Empowering our specialists with world-class facilities in
                Sathyamangalam, Erode district to deliver exceptional orthopedic,
                neurological and rehabilitation care.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {facilities.map((f, i) => (
                <FacilityCard
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                  aosDelay={i * 80}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Facility;
