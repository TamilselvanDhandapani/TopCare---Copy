// About.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaBone,
  FaUserMd,
  FaComments,
  FaChild,
  FaBullseye,
  FaHandHoldingHeart,
  FaAward,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Images from Pexels
const IMAGES = {
  hero:
    "https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=1200",
  drThiyagu:
    "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
  speechTherapist:
    "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800",
};

// Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 16, duration: 0.35 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const About = () => {
  // SEO Structured Data: Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Thiyagu Ortho & Speech Care - Top Care Hospital",
    url: "https://topcarehospital.com/about",
    description:
      "Thiyagu Ortho & Speech Care at Top Care Hospital in Sathyamangalam, Erode district, Tamil Nadu provides orthopedic surgery, trauma care, rehabilitation and speech-language therapy under one roof.",
    medicalSpecialty: ["Orthopedic", "SpeechPathology", "Rehabilitation"],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "113/21-24, SRN Street, Opp. to Old Bus Stand, Court Backside",
      addressLocality: "Sathyamangalam",
      addressRegion: "Tamil Nadu",
      postalCode: "638402",
      addressCountry: "IN",
    },
  };

  // SEO Structured Data: Doctors
  const doctorsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        name: "Dr. S.P. Thiyagu",
        jobTitle: "Orthopedic Surgeon",
        description:
          "Orthopedic surgeon specialising in fracture care, joint replacement and trauma management at Thiyagu Ortho & Speech Care, Sathyamangalam.",
        medicalSpecialty: ["Orthopedic"],
        affiliation: {
          "@type": "Hospital",
          name: "Top Care Hospital",
          url: "https://topcarehospital.com/",
        },
      },
      {
        "@type": "Person",
        name: "C. Kiruthiga Thiyagu",
        jobTitle: "Speech Language Pathologist",
        description:
          "Speech language pathologist specialising in child speech and language, autism, ADHD and post-stroke communication rehabilitation in Sathyamangalam, Erode district.",
        medicalSpecialty: ["SpeechPathology", "Rehabilitation"],
        affiliation: {
          "@type": "Hospital",
          name: "Top Care Hospital",
          url: "https://topcarehospital.com/",
        },
      },
    ],
  };

  const doctors = [
    {
      name: "Dr. S.P. Thiyagu",
      degree: "M.S (Ortho)., (JIPMER)",
      expertise: "Orthopedics, Bone Fracture, Joint Replacement, Trauma Care",
      image: IMAGES.drThiyagu,
      specialization: "Orthopedic Surgeon",
      experience: "15+ Years",
    },
    {
      name: "C. Kiruthiga Thiyagu",
      degree: "M.Sc. (Sp & Hg)",
      expertise:
        "Child Speech & Language, Autism, ADHD, Post-Stroke Communication Rehab",
      image: IMAGES.speechTherapist,
      specialization: "Speech Language Pathologist",
      experience: "12+ Years",
    },
  ];

  const values = [
    {
      title: "Compassionate Care",
      desc: "Every patient is treated like family—with empathy, respect, and enough time to feel truly heard.",
      icon: <FaHandHoldingHeart className="text-2xl text-[#00509d]" />,
    },
    {
      title: "Clinical Excellence",
      desc: "Treatment decisions are guided by experience, updated guidelines, and evidence-based protocols.",
      icon: <FaAward className="text-2xl text-[#00509d]" />,
    },
    {
      title: "Holistic Approach",
      desc: "We look beyond symptoms—focusing on mobility, communication, independence, and quality of life.",
      icon: <FaLightbulb className="text-2xl text-[#00509d]" />,
    },
  ];

  const stats = [
    { label: "Years of Expertise", value: "15+", icon: <FaUserMd /> },
    { label: "Patients Treated", value: "10k+", icon: <FaBone /> },
    { label: "Success Rate", value: "98%", icon: <FaAward /> },
    { label: "Dual Specialities", value: "Ortho + Speech", icon: <FaComments /> },
  ];

  return (
    <>
      <Helmet>
        <title>
          About Thiyagu Ortho &amp; Speech Care | Top Care Hospital Sathyamangalam
        </title>
        <meta
          name="description"
          content="Learn about Thiyagu Ortho & Speech Care at Top Care Hospital in Sathyamangalam, Erode. Integrated orthopedic surgery, trauma care, rehabilitation and speech-language therapy under one roof."
        />
        <meta
          name="keywords"
          content="orthopedic hospital in sathyamangalam, ortho doctor erode district, Thiyagu Ortho & Speech Care, speech therapy Sathyamangalam, child speech therapy Erode, autism speech therapy, ADHD therapy, post stroke rehab Sathyamangalam"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://topcarehospital.com/about" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(doctorsSchema)}
        </script>

        {/* Image performance hints */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preload" href={IMAGES.hero} as="image" />
      </Helmet>

      <div className="text-gray-800 overflow-x-hidden">
        {/* ================== HERO ================== */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <img
              src={IMAGES.hero}
              alt="Modern hospital corridor"
              className="h-full w-full object-cover"
            />
            {/* Soft overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b2d56]/90 via-[#0b2d56]/85 to-[#1a76bc]/80" />
          </div>

          {/* Light glow circles */}
          <div className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-white/12 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-[#bfe1ff]/18 blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid gap-10 lg:grid-cols-[1.3fr,1fr] items-center"
            >
              {/* Left: Main Copy */}
              <div>
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 border border-white/30 mb-5 backdrop-blur-sm"
                >
                   <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-100">
                     Ortho &amp; Speech Centre
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4"
                >
                  Healing Bones.
                  <br />
                  Restoring Voices.
                  <span className="block text-[#bfe1ff] mt-1">
                    One Centre for Complete Recovery in Erode District.
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-base sm:text-lg text-blue-100 max-w-2xl mb-5 leading-relaxed"
                >
                  Thiyagu Ortho &amp; Speech Care brings together orthopedic
                  surgery, rehabilitation and speech-language therapy—so your
                  family doesn&apos;t have to travel to multiple places for
                  complete care in and around Sathyamangalam.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  className="text-sm sm:text-base text-blue-100 max-w-2xl mb-7"
                >
                  Founded by{" "}
                  <span className="font-semibold text-white">
                    Dr. S.P. Thiyagu
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-white">
                    C. Kiruthiga Thiyagu
                  </span>
                  , our centre is built on the belief that movement and speech
                  are equally essential for living with confidence.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-3"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1a76bc] text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-lg hover:bg-[#00509d] transition-all"
                  >
                    Book an Appointment
                    <FaArrowRight className="text-xs" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center rounded-full border border-white/70 text-white px-6 py-3 text-sm sm:text-base font-semibold hover:bg-white hover:text-[#00509d] transition-all"
                  >
                    View Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================== WHO WE ARE ================== */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <span className="inline-flex items-center justify-center rounded-full bg-[#e3efff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#00509d]">
                Who We Are
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl md:text-4xl font-bold text-[#0b2d56] leading-tight">
                A Neighbourhood Centre with
                <span className="text-[#1a76bc]"> Super-Speciality Care</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
                Thiyagu Ortho &amp; Speech Care at Top Care Hospital brings
                trusted orthopedics and speech-language therapy together so
                families in Sathyamangalam and Erode district get coordinated,
                modern care close to home.
              </p>
            </motion.div>

            <motion.div
              className="relative rounded-3xl p-8 bg-gradient-to-b from-white to-slate-50 border border-slate-100 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {/* Decorative soft shapes */}
              <div className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center">
                <div className="absolute -top-12 left-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-[#bfe1ff]/30 to-transparent blur-3xl" />
                <div className="absolute -bottom-12 right-1/4 h-52 w-52 rounded-full bg-gradient-to-br from-[#ede9fe]/25 to-transparent blur-3xl" />
              </div>

              {/* Feature summary */}
              <div className="grid gap-6 md:grid-cols-3 items-stretch text-center">
                {[
                  {
                    title: "Integrated Care",
                    desc:
                      "Orthopedics and speech therapy under one roof — fewer referrals, faster recovery.",
                    icon: (
                      <FaHandHoldingHeart className="text-4xl text-[#00509d]" />
                    ),
                  },
                  {
                    title: "Personalized Plans",
                    desc:
                      "Evidence-based treatment plans tailored to mobility, communication and lifestyle goals.",
                    icon: <FaBullseye className="text-4xl text-[#1a76bc]" />,
                  },
                  {
                    title: "Family-Centred",
                    desc:
                      "We involve caregivers at every step — education, rehab strategies and long-term support.",
                    icon: <FaChild className="text-4xl text-[#6d28d9]" />,
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="flex flex-col items-center text-center gap-4 bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    <div className="h-20 w-20 rounded-xl flex items-center justify-center bg-gradient-to-br from-white to-slate-50 border border-slate-100">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0b2d56]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-xs mx-auto">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ======= What Makes Us Different ======= */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <span className="inline-flex items-center justify-center rounded-full bg-[#f3f8ff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#00509d] border border-[#dbeafe]">
                What Makes Us Different
              </span>

              <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-[#0b2d56]">
                Two Specialities.{" "}
                <span className="text-[#1a76bc]">One Care Plan.</span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
                Orthopedic and speech challenges often overlap—especially after
                accidents, strokes, or developmental conditions. We address both
                in a coordinated, patient-centred way.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 items-stretch"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {/* Ortho card */}
              <motion.div
                variants={fadeInUp}
                className="relative flex flex-col items-center text-center rounded-3xl bg-white p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="absolute -top-8 right-8 h-24 w-24 rounded-full bg-[#e0f2fe] blur-3xl opacity-70" />
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-[#e0f2fe] text-[#00509d] mb-4">
                  <FaBone className="text-xl" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0b2d56]">
                  Orthopedic &amp; Trauma Care
                </h3>
                <p className="text-sm text-slate-600 mt-3 max-w-xl">
                  From fractures to joint replacement and post-op rehab — we
                  prioritise painless mobility and durable outcomes.
                </p>

                <ul className="mt-6 grid gap-2 text-sm text-slate-700">
                  <li className="flex gap-2 justify-center">
                    Fracture &amp; trauma management
                  </li>
                  <li className="flex gap-2 justify-center">
                    Joint replacement (hip, knee, shoulder)
                  </li>
                  <li className="flex gap-2 justify-center">
                    Spine care &amp; post-surgery rehabilitation
                  </li>
                </ul>
              </motion.div>

              {/* Speech card */}
              <motion.div
                variants={fadeInUp}
                className="relative flex flex-col items-center text-center rounded-3xl bg-white p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-[#ede9fe] blur-3xl opacity-70" />
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-[#ede9fe] text-[#6d28d9] mb-4">
                  <FaComments className="text-xl" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0b2d56]">
                  Speech &amp; Language Rehabilitation
                </h3>
                <p className="text-sm text-slate-600 mt-3 max-w-xl">
                  Early intervention and focused therapy to help children and
                  adults communicate clearly and confidently.
                </p>

                <ul className="mt-6 grid gap-2 text-sm text-slate-700">
                  <li className="flex gap-2 justify-center">
                    Autism, ADHD &amp; learning support
                  </li>
                  <li className="flex gap-2 justify-center">
                    Post-stroke &amp; neuro speech therapy
                  </li>
                  <li className="flex gap-2 justify-center">
                    Cochlear implant &amp; articulation programs
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================== MEDICAL TEAM ================== */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <span className="inline-flex items-center justify-center rounded-full bg-[#f3f8fd] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#00509d]">
                Our Medical Team
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b2d56]">
                The Specialists Behind Your{" "}
                <span className="text-[#1a76bc]">Recovery</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-3xl mx-auto">
                Two specialists, one shared goal—to help you walk, move, speak
                and live with confidence again.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {doctors.map((doctor, index) => (
                <motion.div
                  key={doctor.name}
                  variants={fadeInUp}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.specialization}`}
                      className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-[#00509d] shadow">
                      {index === 0 ? "Orthopedics Lead" : "Speech Therapy Lead"}
                    </div>
                    <div className="absolute bottom-4 right-4 rounded-full bg-[#00509d] px-3 py-1 text-xs font-semibold text-white shadow">
                      {doctor.experience}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {doctor.name}
                    </h3>
                    <p className="text-[#1a76bc] font-semibold mt-1 text-sm sm:text-base">
                      {doctor.specialization}
                    </p>
                    <p className="text-slate-500 text-xs mt-1 mb-3">
                      {doctor.degree}
                    </p>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                      {doctor.expertise}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================== VALUES ================== */}
        <section className="py-16 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              <span className="inline-flex items-center justify-center rounded-full bg-blue-50 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#00509d] border border-blue-100">
                Our Values
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b2d56]">
                The Principles Behind{" "}
                <span className="text-[#1a76bc]">Every Decision</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-700 max-w-3xl mx-auto">
                Our culture is built around these values—guiding how we
                diagnose, treat, communicate and support your family.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="bg-white rounded-3xl p-7 shadow-sm border border-[#e2e8f0] hover:shadow-xl hover:-translate-y-1 transition-all text-center"
                >
                  <div className="flex items-center justify-center mb-5">
                    <div className="h-14 w-14 rounded-2xl bg-[#f3f8fd] flex items-center justify-center shadow-sm">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#0b2d56] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================== CTA ================== */}
        <section className="py-16 bg-gradient-to-br from-[#0b2d56] via-[#1a76bc] to-[#2b8adf] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              Ready to Start Your Recovery Journey?
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg mb-8 text-blue-100 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
            >
              Whether you&apos;re recovering from an injury, surgery or speech
              challenge, we&apos;re here to support every step—from your first
              diagnosis to your final follow-up.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-[#00509d] px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold shadow-xl hover:bg-slate-100 transition-all"
              >
                Book Your Appointment
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs" />
              </Link>
              <Link
                to="/speech-therapy"
                className="inline-flex items-center justify-center rounded-full border border-white/70 text-white px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold hover:bg-white/10 transition-all"
              >
                Explore Speech Programs
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
