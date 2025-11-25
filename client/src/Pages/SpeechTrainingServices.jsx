// SpeechTrainingServices.jsx
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUserMd,
  FaComments,
  FaBrain,
  FaChild,
  FaAssistiveListeningSystems,
  FaRegListAlt,
  FaPhoneAlt,
  FaCalendarCheck,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GiBrain, GiStethoscope, GiTalk, GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

/* -------------------- Count Up Component -------------------- */
const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16); // ~60fps

          const timer = setInterval(() => {
            start += increment;
            if (start > end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="text-2xl font-bold text-[#00509d]">
      {count}
      {suffix}
    </span>
  );
};

/* -------------------- Enhanced Carousel Component -------------------- */
const ProgramCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel Container */}
      <div
        className="relative overflow-hidden rounded-3xl shadow-2xl bg-white"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Image Section */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0b2d56]/40 via-transparent to-transparent" />

                    
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1a76bc]/20 rounded-full blur-xl" />
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#00509d]/20 rounded-full blur-lg" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#00509d]/10 px-4 py-2 text-sm font-semibold text-[#00509d]">
                      Featured Program
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-[#0b2d56] leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base text-slate-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav Arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white text-[#00509d] transition"
          aria-label="Previous program"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white text-[#00509d] transition"
          aria-label="Next program"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#00509d] w-8"
                : "bg-[#1a76bc]/30 w-3 hover:bg-[#1a76bc]/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
        <div
          className="bg-[#00509d] h-1 rounded-full transition-all duration-500 ease-linear"
          style={{
            width: `${((currentIndex + 1) / items.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

/* -------------------- Redesigned Service Card -------------------- */
const ServiceCard = ({ icon, title, description, aosDelay = 0 }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="
      group relative flex h-full flex-col items-center text-center
      rounded-2xl border border-[#c5d7f5]
      bg-[#f3f8fd]
      shadow-sm
      px-5 py-6
      transition-all duration-300
      hover:bg-[#dbe9fa]
      hover:-translate-y-1
      hover:shadow-xl
    "
  >
    <div
      className="
        mb-4 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center
        rounded-2xl bg-white text-[#00509d]
        transition-all duration-300
        group-hover:bg-[#00509d]/10 group-hover:text-[#00509d]
      "
    >
      {icon}
    </div>
    <h3 className="text-sm sm:text-base font-bold text-[#00509d]">
      {title}
    </h3>
    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const SpeechTrainingServices = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  /* -------------------- JSON-LD structured data -------------------- */
  const speechClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Chandru's Speech & Language Centre - Top Care Hospital",
    description:
      "Speech therapy centre in Sathyamangalam, Erode offering diagnosis, assessment and therapy for speech, language and communication disorders in children and adults.",
    url: "https://topcarehospital.com/speech-therapy",
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
    medicalSpecialty: ["SpeechPathology", "Rehabilitation"],
    parentOrganization: {
      "@type": "Hospital",
      name: "Top Care Hospital",
      url: "https://topcarehospital.com/",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When should I bring my child for speech therapy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your child is not speaking clearly, has limited words for their age, has difficulty understanding instructions or has been diagnosed with autism, ADHD or other developmental conditions, an early speech and language assessment is recommended.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer speech therapy for autism in Sathyamangalam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Chandru's Speech & Language Centre at Top Care Hospital offers specialised therapy programs for children with autism spectrum disorder, focusing on communication, social skills and functional language.",
        },
      },
      {
        "@type": "Question",
        name: "Is speech therapy available in Tamil and English?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Therapy sessions are provided in Tamil and English based on the child's home language and communication needs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide speech therapy after cochlear implant surgery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer specialised cochlear implant rehabilitation focusing on listening skills, sound discrimination and language development for children and adults.",
        },
      },
    ],
  };

  /* -------------------- Services list -------------------- */
  const services = [
    {
      title: "Diagnosis of Speech & Language Disorders in Children",
      description:
        "Early identification of speech and language challenges in children to ensure timely and effective intervention.",
      icon: <FaComments className="text-xl sm:text-2xl" />,
    },
    {
      title: "Assessment, Counseling & Training",
      description:
        "Personalized evaluation, guidance, and therapy plans to support communication development.",
      icon: <GiStethoscope className="text-xl sm:text-2xl" />,
    },
    {
      title: "Autism Support",
      description:
        "Specialized programs to enhance speech, social skills, and communication in children with autism.",
      icon: <GiBrain className="text-xl sm:text-2xl" />,
    },
    {
      title: "Attention Deficit Disorders (ADHD)",
      description:
        "Strategies to improve attention and communication in children with ADHD.",
      icon: <FaBrain className="text-xl sm:text-2xl" />,
    },
    {
      title: "Brain Development Disorders & Epilepsy",
      description:
        "Therapy for children affected by neurological conditions to enhance communication.",
      icon: <FaUserMd className="text-xl sm:text-2xl" />,
    },
    {
      title: "Cerebral Palsy & Neurodevelopmental Disorders",
      description:
        "Therapy to improve speech and communication skills in children with CP and other disorders.",
      icon: <FaChild className="text-xl sm:text-2xl" />,
    },
    {
      title: "Speech Therapy After Cochlear Implant",
      description:
        "Specialized language training for individuals post cochlear implant surgery.",
      icon: <FaAssistiveListeningSystems className="text-xl sm:text-2xl" />,
    },
    {
      title: "Learning Disabilities & I.E.P.",
      description:
        "Customized educational plans and therapy for learning challenges.",
      icon: <GiTeacher className="text-xl sm:text-2xl" />,
    },
    {
      title: "Speech Disorders",
      description:
        "Therapy for articulation, fluency, and voice issues to improve communication.",
      icon: <GiTalk className="text-xl sm:text-2xl" />,
    },
    {
      title: "Disorganized Speech Disorders",
      description:
        "Support for individuals with incoherent or fragmented speech patterns.",
      icon: <FaRegListAlt className="text-xl sm:text-2xl" />,
    },
    {
      title: "Voice Disorder Therapy",
      description:
        "Voice modulation and therapy for individuals with voice abnormalities.",
      icon: <GiTalk className="text-xl sm:text-2xl" />,
    },
    {
      title: "Post-Stroke Speech Rehabilitation",
      description:
        "Speech and swallowing therapy for individuals recovering from strokes or accidents.",
      icon: <FaBrain className="text-xl sm:text-2xl" />,
    },
  ];

  /* -------------------- Carousel Items (now covering all key services) -------------------- */
  const carouselItems = [
    {
      title: "Speech & Language Assessment & Diagnosis",
      img: "/SpeechOne.jpg",
      alt: "Child speech and language assessment in Sathyamangalam",
      text: "Detailed diagnosis of speech and language disorders in children and adults using standardized tools and observation. This forms the foundation for individualized therapy planning.",
    },
    {
      title: "Autism Spectrum Disorder (ASD) Program",
      img: "/SpeechThree.jpg",
      alt: "Autism speech therapy program in Sathyamangalam",
      text: "Comprehensive therapy designed to strengthen communication, social interaction and functional language in children with autism, with strong focus on parent training and home strategies.",
    },
    {
      title: "ADHD & Executive Function Training",
      img: "/SpeechFour.jpg",
      alt: "ADHD communication training program",
      text: "Targeted interventions to improve attention, listening skills, task completion and expressive language in children with ADHD and attention-related difficulties.",
    },
    {
      title: "Brain Development & Epilepsy Support",
      img: "/SpeechTwo.jpg",
      alt: "Speech therapy for brain development disorders and epilepsy",
      text: "Communication-focused therapy for children with brain development disorders and epilepsy, aiming to build understanding, expression and everyday functional communication.",
    },
    {
      title: "Cerebral Palsy Communication Program",
      img: "/SpeechFive.jpg",
      alt: "Cerebral palsy speech therapy in Sathyamangalam",
      text: "Multidisciplinary communication program for children with cerebral palsy and neurodevelopmental conditions, including oral-motor work, AAC support and caregiver coaching.",
    },
    {
      title: "Cochlear Implant Rehabilitation",
      img: "/SpeechSeven.jpg",
      alt: "Cochlear implant speech therapy in Erode district",
      text: "Specialized auditory-verbal therapy after cochlear implant surgery focusing on listening, sound discrimination, vocabulary building and connected speech in everyday settings.",
    },
    {
      title: "Learning Disability & I.E.P. Program",
      img: "/SpeechOne.jpg",
      alt: "Speech and language support for learning disability and IEP",
      text: "Language and communication support for children with learning disabilities, including help with classroom language, reading comprehension and individualized education programs (I.E.P.).",
    },
    {
      title: "Articulation & Speech Clarity Program",
      img: "/SpeechTwo.jpg",
      alt: "Articulation and speech clarity therapy for children",
      text: "Therapy focused on correcting mispronunciations, unclear speech and sound errors so children and adults can be understood clearly in school, work and social settings.",
    },
    {
      title: "Disorganized Speech & Fluency Therapy",
      img: "/SpeechThree.jpg",
      alt: "Therapy for disorganized and fragmented speech",
      text: "Structured sessions to help individuals with disorganized or fragmented speech develop more coherent, fluent and meaningful sentences in conversation.",
    },
    {
      title: "Voice Disorder & Voice Care Clinic",
      img: "/SpeechFive.jpg",
      alt: "Voice therapy for voice disorders",
      text: "Voice therapy for hoarseness, vocal strain and pitch issues with techniques for healthy voice production, breath support and vocal hygiene education.",
    },
    {
      title: "Post-Stroke & Neuro Speech Rehabilitation",
      img: "/SpeechSeven.jpg",
      alt: "Post-stroke speech rehabilitation at Top Care Hospital",
      text: "Comprehensive rehabilitation for adults after stroke, head injury or accidents, targeting speech, language, swallowing and cognitive-communication skills to regain independence.",
    },
  ];

  return (
    <>
      {/* ---------- SEO for Speech Therapy page ---------- */}
      <Helmet>
        <title>
          Speech Therapy Centre in Sathyamangalam, Erode | Chandru&apos;s Speech
          &amp; Language Centre
        </title>

        <meta
          name="description"
          content="Chandru's Speech & Language Centre at Top Care Hospital offers speech therapy in Sathyamangalam, Erode for children and adults with speech, language, autism, ADHD, cerebral palsy, cochlear implant and communication disorders."
        />
        <meta
          name="keywords"
          content="speech therapy centre in sathyamangalam, speech therapist for kids erode, autism speech therapy sathyamangalam, cochlear implant speech therapy erode, speech therapy for cerebral palsy, Chandru's Speech & Language Centre, Top Care Hospital"
        />
        <meta name="robots" content="index,follow" />
        <link
          rel="canonical"
          href="https://topcarehospital.com/speech-therapy"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Speech Therapy Centre in Sathyamangalam, Erode | Chandru's Speech & Language Centre"
        />
        <meta
          property="og:description"
          content="Specialised speech therapy for children and adults with speech, language and communication disorders at Chandru's Speech & Language Centre, Top Care Hospital, Sathyamangalam, Erode district."
        />
        <meta
          property="og:url"
          content="https://topcarehospital.com/speech-therapy"
        />
        <meta property="og:site_name" content="Top Care Hospital" />
        <meta
          property="og:image"
          content="https://topcarehospital.com/og-speech-therapy.jpg"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Speech Therapy Centre in Sathyamangalam, Erode | Chandru's Speech & Language Centre"
        />
        <meta
          name="twitter:description"
          content="Speech, language and communication therapy for autism, ADHD, cerebral palsy, learning disability and post-stroke rehabilitation in Sathyamangalam, Erode."
        />
        <meta
          name="twitter:image"
          content="https://topcarehospital.com/og-speech-therapy.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(speechClinicSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-white py-16">
        {/* -------------------- MODERN HERO -------------------- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f8ff] to-[#e6f2ff] py-12">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-12 -left-12 sm:-top-24 sm:-left-24 w-48 h-48 sm:w-96 sm:h-96 bg-[#1a76bc]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 sm:-bottom-24 sm:-right-24 w-48 h-48 sm:w-96 sm:h-96 bg-[#00509d]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 sm:h-72 bg-[#1a76bc]/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div data-aos="fade-right" data-aos-delay="100">
                <div className="inline-flex items-center gap-2 bg-white/90 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium text-[#00509d] mb-4 sm:mb-6 border border-[#00509d]/15">
                  Chandru&apos;s Speech &amp; Language Centre
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b2d56] leading-tight">
                  Speech Therapy Centre in{" "}
                  <span className="text-[#00509d]">
                    Sathyamangalam, Erode District
                  </span>
                </h1>

                <p className="mt-4 sm:mt-6 text-sm sm:text-base text-slate-700 leading-relaxed">
                  Early diagnosis, evidence-based therapy, and family-centered
                  care for children and adults. We help every voice be heard
                  clearly and confidently at our speech therapy centre in
                  Sathyamangalam, Erode.
                </p>
              </div>

              {/* Hero Image Collage */}
              <div
                className="relative h-[350px]"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="absolute top-0 left-0 w-3/5 h-3/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10">
                  <img
                    src="/SpeechOne.jpg"
                    alt="Child speech therapy session at Sathyamangalam speech centre"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d56]/70 to-transparent" />
                </div>

                <div className="absolute top-1/3 right-0 w-3/5 h-2/5 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-20">
                  <img
                    src="/SpeechTwo.jpg"
                    alt="Speech therapist working with child in Erode district"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d56]/70 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------- ENHANCED PROGRAM CAROUSEL SECTION -------------------- */}
        <section className="py-12 bg-gradient-to-br from-white to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="text-[#00509d] text-xs font-semibold tracking-widest uppercase">
                Featured Programs
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b2d56] mt-3">
                Our <span className="text-[#00509d]">Specialized</span> Therapy
                Programs
              </h2>
              <p className="text-base text-slate-700 max-w-3xl mx-auto mt-4">
                Discover our comprehensive therapy programs designed to address
                specific communication challenges with evidence-based
                approaches.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <ProgramCarousel items={carouselItems} />
            </div>

            {/* Stats with Count Animation */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CountUp end={500} suffix="+" duration={2500} />
                <div className="text-xs text-slate-600 mt-2">Children Helped</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CountUp end={95} suffix="%" duration={2000} />
                <div className="text-xs text-slate-600 mt-2">Success Rate</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CountUp end={12} suffix="+" duration={1500} />
                <div className="text-xs text-slate-600 mt-2">
                  Therapy Programs
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl font-bold text-[#00509d]">24/7</div>
                <div className="text-xs text-slate-600 mt-2">Parent Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------- SERVICES GRID -------------------- */}
        <section className="py-12 md:py-20 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14" data-aos="fade-up">
              <span className="text-[#00509d] text-xs font-semibold tracking-widest uppercase">
                Our Expertise
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b2d56] mt-2">
                Comprehensive Speech &amp; Language Services
              </h2>
              <p className="text-sm text-slate-700 max-w-3xl mx-auto mt-3 sm:mt-4 px-4">
                Explore our evidence-based programs designed to build clear
                speech, rich language, and confident communication for children
                and adults in Sathyamangalam and Erode district.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
          </div>
        </section>

        {/* -------------------- MODERN CTA -------------------- */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-[#0b2d56] to-[#1a76bc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[3rem] bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl">
              <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-white/5 blur-2xl" />

              <div className="relative z-10 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  Begin Your Communication Journey Today
                </h3>
                <p className="mt-3 sm:mt-4 text-sm text-white/90 max-w-2xl mx-auto">
                  Take the first step toward clearer communication. Book an
                  assessment and receive a personalized therapy plan tailored to
                  your needs at Chandru&apos;s Speech &amp; Language Centre,
                  Sathyamangalam.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 sm:px-6 sm:py-4 text-[#00509d] font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl text-sm"
                  >
                    <FaCalendarCheck className="text-base sm:text-lg" />
                    Schedule Assessment
                  </Link>
                  <a
                    href="tel:+914295222435"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-5 py-3 sm:px-6 sm:py-4 text-white font-semibold hover:bg-white hover:text-[#00509d] transition-all text-sm"
                  >
                    <FaPhoneAlt className="text-base sm:text-lg" />
                    Call 04295 222435
                  </a>
                </div>

                <p className="mt-4 sm:mt-6 text-xs text-white/70">
                  We&apos;re available Monday to Saturday, 9 AM to 6 PM
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpeechTrainingServices;
