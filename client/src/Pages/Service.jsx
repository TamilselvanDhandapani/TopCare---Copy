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
import { Helmet } from "react-helmet";

/* ---------- Redesigned Service Card (light brand bg + subtle hover) ---------- */
const ServiceCard = ({ icon, title, description, aosDelay = 0 }) => (
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
        mb-4 grid h-14 w-14 place-items-center
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

/* ---------- Services data ---------- */
const services = [
  {
    title: "Fracture Treatments",
    icon: <FaBone className="text-2xl sm:text-3xl" />,
    description:
      "Comprehensive fracture management from diagnosis and reduction to immobilization, rehabilitation and follow-up care.",
  },
  {
    title: "Pain Relief Treatments",
    icon: <FaStethoscope className="text-2xl sm:text-3xl" />,
    description:
      "Advanced therapies to manage and relieve chronic and acute pain, including back pain, neck pain and joint pain.",
  },
  {
    title: "Spinal Cord Treatments",
    icon: <FaWheelchair className="text-2xl sm:text-3xl" />,
    description:
      "Expert care for spinal cord injuries, disc problems and neurological rehabilitation after trauma or surgery.",
  },
  {
    title: "Sports Injuries",
    icon: <FaRunning className="text-2xl sm:text-3xl" />,
    description:
      "Evaluation and treatment of ligament tears, muscle strains and sports injuries for amateur and professional athletes.",
  },
  {
    title: "Spinal Cord Surgery",
    icon: <FaProcedures className="text-2xl sm:text-3xl" />,
    description:
      "Minimally invasive and open surgical options for spinal decompression, stabilization and correction.",
  },
  {
    title: "Joint Replacement Surgery",
    icon: <GiJoint className="text-2xl sm:text-3xl" />,
    description:
      "State-of-the-art knee, hip and shoulder joint replacement procedures to restore mobility and reduce pain.",
  },
  {
    title: "Microscopic Surgery",
    icon: <FaMicroscope className="text-2xl sm:text-3xl" />,
    description:
      "Precision microscopic procedures for delicate orthopedic and neuro-related conditions to ensure optimal recovery.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // JSON-LD: Services page as a medical web page
  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Orthopedic & Spine Services - Top Care Hospital Sathyamangalam",
    url: "https://topcarehospital.com/services",
    description:
      "View the list of orthopedic, spine and trauma services offered at Top Care Hospital in Sathyamangalam, Erode district, including fracture treatment, pain relief, sports injury care and joint replacement surgery.",
    about: [
      {
        "@type": "MedicalProcedure",
        name: "Fracture treatment",
        description:
          "Non-surgical and surgical fracture management with casting, internal fixation and rehabilitation.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Joint replacement surgery",
        description:
          "Knee, hip and shoulder joint replacement to relieve pain and improve mobility.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Spinal cord surgery",
        description:
          "Surgical procedures for spinal decompression, stabilization and correction.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Sports injury treatment",
        description:
          "Treatment and rehabilitation for ligament, tendon and muscle injuries related to sports.",
      },
    ],
  };

  // JSON-LD: BreadcrumbList for this page
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
        name: "Services",
        item: "https://topcarehospital.com/services",
      },
    ],
  };

  // JSON-LD: FAQ to target “People also ask” around services
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name:
          "What orthopedic services are available at Top Care Hospital in Sathyamangalam?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Top Care Hospital in Sathyamangalam offers fracture management, pain relief treatments, spinal cord treatments and surgery, sports injury care, joint replacement surgery and microscopic surgery for complex orthopedic conditions.",
        },
      },
      {
        "@type": "Question",
        name: "Do you treat sports injuries and ligament tears?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We diagnose and treat sports injuries such as ligament tears, muscle strains and joint injuries, and provide rehabilitation plans to help you return safely to sports and daily activities.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get spine surgery and follow-up rehab at the same centre?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Our spine services include evaluation, spinal cord surgery where needed and coordinated rehabilitation so that surgery and follow-up care happen in one centre.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Orthopedic &amp; Spine Services | Top Care Hospital Sathyamangalam
        </title>
        <meta
          name="description"
          content="Explore orthopedic and spine services at Top Care Hospital in Sathyamangalam, Erode district: fracture treatment, pain relief, spinal cord surgery, sports injury care, joint replacement and microscopic surgery."
        />
        <meta
          name="keywords"
          content="orthopedic services Sathyamangalam, fracture treatment hospital erode district, spine surgery Sathyamangalam, joint replacement Sathyamangalam, sports injury treatment erode, Top Care Hospital services"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://topcarehospital.com/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Orthopedic & Spine Services | Top Care Hospital Sathyamangalam"
        />
        <meta
          property="og:description"
          content="Fracture treatment, spine surgery, joint replacement, sports injury care and microscopic surgery at Top Care Hospital, Sathyamangalam, Erode district."
        />
        <meta
          property="og:url"
          content="https://topcarehospital.com/services"
        />
        <meta property="og:site_name" content="Top Care Hospital" />
        <meta
          property="og:image"
          content="https://topcarehospital.com/og-services.jpg" // make sure to add this image
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Orthopedic & Spine Services | Top Care Hospital Sathyamangalam"
        />
        <meta
          name="twitter:description"
          content="Explore fracture care, pain relief, joint replacement and spine surgery services at Top Care Hospital in Sathyamangalam, Erode district."
        />
        <meta
          name="twitter:image"
          content="https://topcarehospital.com/og-services.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(servicesPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="pt-12 bg-gradient-to-b from-[#f3f8fd] to-white min-h-screen">
        <section className="max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <div
            className="text-center mb-14 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <span className="inline-flex items-center justify-center rounded-full bg-[#e3efff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#00509d]">
              Our Services
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-[#00509d]">
              Excellence in Orthopedic &amp; Neurological Care
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-700">
              Explore our comprehensive range of treatments designed to help you
              heal, move freely and live pain-free with confidence at Top Care
              Hospital in Sathyamangalam, Erode district.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                aosDelay={i * 80}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
