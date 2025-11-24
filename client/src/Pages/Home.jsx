// Home.jsx
import { useEffect } from "react";
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
import { Helmet } from "react-helmet";

import ImageOne from "../assets/doc1.jpg";
import ImageTwo from "../assets/doc2.jpg";

/* ---------- Reusable Feature Card ---------- */
const FeatureCard = ({ icon, title, description, aosDelay = 0 }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="
      group relative h-full overflow-hidden rounded-2xl
      border border-[#c5d7f5]
      bg-[#00509d]
      text-white
      shadow-sm
      transition-all duration-300
      hover:bg-[#f3f8fd]
      hover:text-[#00509d]
      hover:border-[#00509d]
      hover:-translate-y-1
      hover:shadow-xl
    "
  >
    <div className="relative z-10 flex h-full flex-col items-center p-6 md:p-8 text-center">
      <div
        className="
          mb-4 grid h-14 w-14 place-items-center rounded-2xl
          bg-white text-[#00509d]
          transition-all duration-300
          group-hover:bg-[#00509d]/10 group-hover:text-[#00509d]
        "
      >
        {icon}
      </div>

      <h3
        className="
          text-xl font-bold
          text-white
          transition-colors duration-300
          group-hover:text-[#00509d]
        "
      >
        {title}
      </h3>
      <p
        className="
          mt-2 text-sm
          text-white/80
          transition-colors duration-300
          group-hover:text-slate-600
        "
      >
        {description}
      </p>
    </div>

    {/* Corner accent blob */}
    <div
      className="
        pointer-events-none absolute -bottom-10 -right-10
        h-22 w-24 rounded-tl-[2rem]
        bg-[#1a76bc] opacity-90
        translate-x-6 translate-y-6
        transition-transform duration-500
        group-hover:translate-x-0 group-hover:translate-y-0
      "
    />
  </div>
);

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  /* ---------- JSON-LD structured data ---------- */
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Top Care Hospital – Thiyagu Ortho and Pain Care Hospital",
    alternateName: "Thiyagu Ortho and Pain Care Hospital",
    description:
      "Top Care Hospital – Thiyagu Ortho and Pain Care Hospital is a specialised orthopedic, neurology and speech therapy hospital in Sathyamangalam, Erode district, Tamil Nadu.",
    url: "https://topcarehospital.com/",
    telephone: "+91-4295-222435",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "113/21-24, SRN Street, Opp. to Old Bus Stand, Court Backside",
      addressLocality: "Sathyamangalam",
      addressRegion: "Tamil Nadu",
      postalCode: "638402",
      addressCountry: "IN",
    },
    image: "https://topcarehospital.com/og-image.jpg", // replace with real hosted image
    medicalSpecialty: [
      "Orthopedic",
      "Neurology",
      "SpeechPathology",
      "Rehabilitation",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Top Care Hospital – Thiyagu Ortho and Pain Care Hospital",
    url: "https://topcarehospital.com/",
  };

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
      description: "Precision knee replacement for mobility restoration.",
      image: ImageOne,
    },
    {
      icon: <GiBrain className="text-3xl" />,
      title: "Paralysis Care",
      description: "Neuro-rehabilitation to maximise functional recovery.",
      image: ImageTwo,
    },
    {
      icon: <GiJoint className="text-3xl" />,
      title: "Joint Surgery",
      description: "Expert hip, elbow and shoulder joint repair.",
      image: ImageOne,
    },
    {
      icon: <FaMicroscope className="text-3xl" />,
      title: "Microscopic Surgery",
      description:
        "Microscopic spine and nerve procedures for faster recovery.",
      image: ImageTwo,
    },
  ];

  const speechServices = [
    {
      title: "Diagnosis of Speech & Language Disorders in Children",
      description:
        "Early identification of speech and language challenges to enable timely intervention.",
      icon: <FaComments className="text-3xl" />,
      image: ImageTwo,
    },
    {
      title: "Assessment, Counseling & Training",
      description:
        "Personalized evaluation, parent counseling and structured therapy plans.",
      icon: <GiStethoscope className="text-3xl" />,
      image: ImageOne,
    },
    {
      title: "Autism Spectrum Disorder",
      description:
        "Individual programs to enhance speech, social skills and communication.",
      icon: <GiBrain className="text-3xl" />,
      image: ImageTwo,
    },
    {
      title: "Attention Deficit Disorders (ADHD)",
      description:
        "Strategies to improve attention, listening and expressive/receptive skills.",
      icon: <FaBrain className="text-3xl" />,
      image: ImageOne,
    },
  ];

  return (
    <>
      {/* ---------- SEO for Home page ---------- */}
      <Helmet>
        {/* Basic SEO */}
        <title>
          Top Care Hospital – Thiyagu Ortho and Pain Care Hospital | Orthopedic
          &amp; Speech Therapy in Sathyamangalam, Erode
        </title>

        <meta
          name="description"
          content="Top Care Hospital – Thiyagu Ortho and Pain Care Hospital is a specialised orthopedic, neurology and speech therapy hospital in Sathyamangalam, Erode district, Tamil Nadu. 24/7 orthopedic emergency care, fracture treatment, joint replacement surgery, sports injury management and child speech therapy."
        />
        <meta
          name="keywords"
          content="Thiyagu Ortho and Pain Care Hospital, Top Care Hospital Sathyamangalam, ortho hospital in sathyamangalam, orthopedic hospital in erode district, orthopedic doctor sathyamangalam, speech therapy centre in sathyamangalam, speech therapist for kids erode"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://topcarehospital.com/" />

        {/* Open Graph (Facebook / WhatsApp etc.) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Top Care Hospital – Thiyagu Ortho and Pain Care Hospital | Orthopedic & Speech Therapy in Sathyamangalam, Erode"
        />
        <meta
          property="og:description"
          content="24/7 orthopedic emergency, joint replacement, sports injury care and child speech therapy at Top Care Hospital – Thiyagu Ortho and Pain Care Hospital in Sathyamangalam, Erode district, Tamil Nadu."
        />
        <meta property="og:url" content="https://topcarehospital.com/" />
        <meta
          property="og:site_name"
          content="Top Care Hospital – Thiyagu Ortho and Pain Care Hospital"
        />
        <meta
          property="og:image"
          content="https://topcarehospital.com/og-image.jpg"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Care Hospital – Thiyagu Ortho and Pain Care Hospital | Orthopedic & Speech Therapy in Sathyamangalam, Erode"
        />
        <meta
          name="twitter:description"
          content="24/7 orthopedic emergency, joint replacement, sports injury care and child speech therapy at Top Care Hospital – Thiyagu Ortho and Pain Care Hospital in Sathyamangalam, Erode district, Tamil Nadu."
        />
        <meta
          name="twitter:image"
          content="https://topcarehospital.com/og-image.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(hospitalSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webSiteSchema)}
        </script>
      </Helmet>

      {/* ---------- Page content ---------- */}
      <div className="pt-10">
        {/* Hero Section with Background Image */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          {/* Background hospital image */}
          <div className="absolute inset-0 -z-20">
            <img
              src="https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg"
              alt="Top Care Hospital – Thiyagu Ortho and Pain Care Hospital in Sathyamangalam, Erode - modern hospital background"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 -z-10 bg-[#0b2d56]/80" />

          <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-14">
            {/* Left Content */}
            <div className="w-3/4 space-y-5 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f3f8fd] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#00509d]">
                Trusted Ortho & Speech Care
              </span>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Orthopedic &amp; Speech Therapy Hospital in{" "}
                <span className="text-[#bfe1ff]">
                  Sathyamangalam, Erode District
                </span>
              </h1>

              <p className="text-sm md:text-base text-white/90 max-w-xl">
                Top Care Hospital – Thiyagu Ortho and Pain Care Hospital offers
                advanced orthopedic, neurology and speech therapy services in
                Sathyamangalam, Tamil Nadu. From fracture care and joint
                replacement to specialised child speech and language therapy, we
                provide 24/7 patient-centred care.
              </p>

              <div className="flex flex-wrap gap-4 items-center mt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#1a76bc] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md transition hover:bg-[#00509d]"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border border-[#bfdff6] px-6 py-3 text-sm md:text-base font-semibold text-white/90 transition hover:bg-white hover:text-[#00509d]"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Ortho Services Section */}
        <section className="py-16 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00509d]">
                Ortho Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00509d] mt-2">
                Specialized Orthopedic Care in Sathyamangalam
              </h2>
              <p className="mt-3 text-gray-700 text-sm md:text-base">
                From minimally invasive procedures to complex joint
                replacements, we provide complete orthopedic care for every
                stage of life for patients from Sathyamangalam, Erode and
                nearby areas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
              {orthoServices.map((s, i) => (
                <FeatureCard
                  key={s.title}
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  aosDelay={i * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Speech Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00509d]">
                Speech &amp; Neuro Rehab
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#00509d] mt-2">
                Comprehensive Speech Therapy in Sathyamangalam
              </h2>
              <p className="mt-3 text-gray-700 text-sm md:text-base">
                Dedicated programs for children and adults to improve speech,
                language, cognition and communication abilities at Chandru&apos;s
                Speech &amp; Language Centre, Top Care Hospital, Sathyamangalam.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
              {speechServices.map((s, i) => (
                <FeatureCard
                  key={s.title}
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  aosDelay={i * 100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#00152f] via-[#003a7a] to-[#1a76bc]" />
          {/* Soft blobs */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#fca38e]/30 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
            <div className="grid gap-12 lg:grid-cols-[1.1fr,1.2fr] items-center">
              {/* Left copy block */}
              <div data-aos="fade-right">
                <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  Our Impact
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                  Transforming Lives
                  <span className="block text-[#bfe1ff]">
                    Through Clinical Excellence
                  </span>
                </h2>
                <p className="mt-4 text-sm md:text-base text-slate-100/90">
                  Behind every statistic is a real story of mobility regained,
                  speech rediscovered and independence restored. Our team
                  combines compassion with advanced techniques to deliver
                  measurable results for patients across Sathyamangalam, Erode
                  district and nearby regions.
                </p>

                <ul className="mt-6 space-y-3 text-sm md:text-base text-slate-100/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#bfe1ff]" />
                    <span>
                      Multi-disciplinary approach bringing together orthopedics,
                      neurology, rehabilitation and speech therapy.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#bfe1ff]" />
                    <span>
                      Evidence-based protocols and continuous outcome tracking
                      for every patient.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-100/80">
                  <div className="rounded-full border border-white/30 bg-white/5 px-4 py-2">
                    NABH Inspired Quality Standards
                  </div>
                  <div className="rounded-full border border-white/30 bg-white/5 px-4 py-2">
                    Patient-centric Care Pathways
                  </div>
                </div>
              </div>

              {/* Right stats grid */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                data-aos="fade-left"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="
                      relative overflow-hidden rounded-2xl
                      bg-white/10
                      border border-white/20
                      backdrop-blur-xl
                      p-6
                      shadow-[0_18px_45px_rgba(0,0,0,0.35)]
                      flex flex-col items-center text-center
                    "
                  >
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
                    </div>

                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00509d] text-white mb-4">
                      {stat.icon}
                    </div>

                    <h3 className="relative z-10 text-3xl md:text-4xl font-extrabold tracking-tight">
                      <CountUp
                        end={stat.value}
                        start={0}
                        duration={4}
                        separator=","
                      />
                      {stat.suffix}
                    </h3>
                    <p className="relative z-10 mt-1 text-sm md:text-base font-semibold">
                      {stat.label}
                    </p>
                    <p className="relative z-10 mt-2 text-xs md:text-sm text-slate-100/80">
                      {stat.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
