// SpeechTrainingServices.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUserMd,
  FaComments,
  FaBrain,
  FaChild,
  FaAssistiveListeningSystems,
  FaRegListAlt,
  FaArrowRight,
  FaPhoneAlt,
  FaCalendarCheck
} from "react-icons/fa";
import { GiBrain, GiStethoscope, GiTalk, GiTeacher } from "react-icons/gi";
import { Link } from "react-router-dom";

/* -------------------- Reusable Hover Card (same as your Home style) -------------------- */
const FeatureCard = ({ icon, title, description, image, index, aosDelay = 0 }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
  >
    {/* Background image shows on hover */}
    <img
      src={image}
      alt=""
      className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
    />
    {/* Dark overlay on hover */}
    <div className="pointer-events-none absolute inset-0 bg-[#0b2d56]/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    {/* Content */}
    <div className="relative z-10 p-8">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#00509d]/10 text-[#00509d] transition-all duration-500 group-hover:bg-white">
          {icon}
        </div>
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

/* -------------------- Modern InfoRow --------------------
   - Gradient "frame" + glass card
   - Image with subtle overlay + accent corner
   - Small badge and CTAs
--------------------------------------------------------- */
const InfoRow = ({ title, img, alt, text, reverse = false, aosDelay = 0 }) => (
  <div
    className={`group grid items-center gap-8 md:gap-12 md:grid-cols-2 ${
      reverse ? "md:[&>*:first-child]:order-2" : ""
    }`}
    data-aos="fade-up"
    data-aos-delay={aosDelay}
  >
    {/* Image block */}
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
        <img
          src={img}
          alt={alt}
          className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0b2d56]/40 via-transparent to-transparent" />
      </div>
      {/* Accent corner */}
      </div>

    {/* Text block with gradient frame */}
    <div className="relative">
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#1a76bc] via-[#00509d] to-[#1a76bc] opacity-30 blur group-hover:opacity-60 transition" />
      <div className="relative rounded-3xl bg-white/80 backdrop-blur p-6 md:p-8 shadow-lg ring-1 ring-slate-200">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#00509d]/10 px-3 py-1 text-xs font-semibold text-[#00509d]">
          Program Highlight
        </span>
        <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-[#00509d]">
          {title}
        </h3>
        <p className="mt-3 leading-relaxed text-slate-700">{text}</p>

        <div className="mt-6">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-[#00509d] font-medium hover:text-[#1a76bc] transition-colors"
          >
            Learn more about this program
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const SpeechTrainingServices = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  /* -------------------- Services list -------------------- */
  const services = [
    {
      title: "Diagnosis of Speech & Language Disorders in Children",
      description:
        "Early identification of speech and language challenges in children to ensure timely and effective intervention.",
      icon: <FaComments className="text-3xl" />,
    },
    {
      title: "Assessment, Counseling & Training",
      description:
        "Personalized evaluation, guidance, and therapy plans to support communication development.",
      icon: <GiStethoscope className="text-3xl" />,
    },
    {
      title: "Autism Support",
      description:
        "Specialized programs to enhance speech, social skills, and communication in children with autism.",
      icon: <GiBrain className="text-3xl" />,
    },
    {
      title: "Attention Deficit Disorders (ADHD)",
      description:
        "Strategies to improve attention and communication in children with ADHD.",
      icon: <FaBrain className="text-3xl" />,
    },
    {
      title: "Brain Development Disorders & Epilepsy",
      description:
        "Therapy for children affected by neurological conditions to enhance communication.",
      icon: <FaUserMd className="text-3xl" />,
    },
    {
      title: "Cerebral Palsy & Neurodevelopmental Disorders",
      description:
        "Therapy to improve speech and communication skills in children with CP and other disorders.",
      icon: <FaChild className="text-3xl" />,
    },
    {
      title: "Speech Therapy After Cochlear Implant",
      description:
        "Specialized language training for individuals post cochlear implant surgery.",
      icon: <FaAssistiveListeningSystems className="text-3xl" />,
    },
    {
      title: "Learning Disabilities & I.E.P.",
      description:
        "Customized educational plans and therapy for learning challenges.",
      icon: <GiTeacher className="text-3xl" />,
    },
    {
      title: "Speech Disorders",
      description:
        "Therapy for articulation, fluency, and voice issues to improve communication.",
      icon: <GiTalk className="text-3xl" />,
    },
    {
      title: "Disorganized Speech Disorders",
      description:
        "Support for individuals with incoherent or fragmented speech patterns.",
      icon: <FaRegListAlt className="text-3xl" />,
    },
    {
      title: "Voice Disorder Therapy",
      description:
        "Voice modulation and therapy for individuals with voice abnormalities.",
      icon: <GiTalk className="text-3xl" />,
    },
    {
      title: "Post-Stroke Speech Rehabilitation",
      description:
        "Speech and swallowing therapy for individuals recovering from strokes or accidents.",
      icon: <FaBrain className="text-3xl" />,
    },
  ];

  /* -------------------- Long-form content sections -------------------- */
  const speechContent = [
    {
      title:
        "Diagnosing Speech & Language disorders in children / Assessment / Counseling & Training",
      img: "/SpeechOne.jpg",
      alt: "Diagnosing Speech Disorders",
      text: `A comprehensive evaluation of a child's communication skills—assessing speech clarity, vocabulary, comprehension, and social interaction. Conducted by a speech-language pathologist (SLP) through tests, observation, and parent input. Early detection enables timely intervention for developmental delays, articulation issues, stuttering, and language disorders, improving long-term outcomes.`,
      reverse: false,
    },
    {
      title:
        "Brain Development Disorders (MR) and language impairments due to Epilepsy",
      img: "/SpeechTwo.jpg",
      alt: "Brain Development Disorders",
      text: `Disorders like intellectual disability (formerly MR) and epilepsy can disrupt a child's learning, speech, and daily functioning. Genetic factors, prenatal issues, or early seizures may impair language development by affecting key brain areas. Early intervention with therapy and medical care is critical to support communication skills and cognitive growth.`,
      reverse: true,
    },
    {
      title: "Autism Spectrum Disorder (ASD)",
      img: "/SpeechThree.jpg",
      alt: "Autism Support",
      text: `Autism is a neurodevelopmental condition affecting communication, social interaction, and behavior. Children with autism often experience speech delays, difficulty with social cues, repetitive behaviors, and sensory sensitivities. Early intervention with speech therapy, social skills training, and behavioral support can significantly improve communication, independence, and quality of life.`,
      reverse: false,
    },
    {
      title: "Attention Deficit Disorders (ADHD)",
      img: "/SpeechFour.jpg",
      alt: "ADHD",
      text: `ADHD is a neurodevelopmental disorder marked by inattention, hyperactivity, and impulsivity. Effective management includes behavioral therapy, medication, structured routines, and educational support.`,
      reverse: true,
    },
    {
      title: "Cerebral Palsy",
      img: "/SpeechFive.jpg",
      alt: "Cerebral Palsy",
      text: `Cerebral Palsy (CP) is a neurological condition affecting movement, posture, and muscle control due to early brain damage. While CP is permanent, early intervention with therapy significantly enhances independence and communication abilities.`,
      reverse: false,
    },
    {
      title: "Neurodevelopmental Disorders",
      img: "/SpeechSix.jpg",
      alt: "Neurodevelopmental Disorders",
      text: `Neurodevelopmental disorders like autism, ADHD, and cerebral palsy affect brain development. Early diagnosis and personalized therapy plans can greatly improve learning, social, and communication outcomes.`,
      reverse: true,
    },
    {
      title: "Post-Cochlear Implant Speech Therapy",
      img: "/SpeechSeven.jpg",
      alt: "Cochlear Implant Therapy",
      text: `Therapy after cochlear implants focuses on training the brain to interpret sound and build language skills. Early and consistent therapy is vital for speech improvement and social integration.`,
      reverse: false,
    },
    {
      title: "Learning Disabilities (LD) & IEP Support",
      img: "/SpeechEight.jpg",
      alt: "Learning Disabilities",
      text: `Learning disabilities affect specific academic skills. We build Individualized Education Plans (IEPs) with strategies and support tailored to each child's unique challenges and strengths.`,
      reverse: true,
    },
    {
      title: "Speech Disorders & Therapy Solutions",
      img: "/SpeechNine.jpg",
      alt: "Speech Disorders",
      text: `Speech disorders affect sound production, fluency, or voice. Our therapists create individualized plans using evidence-based methods to restore and improve speech clarity.`,
      reverse: false,
    },
    {
      title: "Disorganized Speech Disorders",
      img: "/SpeechTen.jpg",
      alt: "Disorganized Speech",
      text: `Disorganized speech impairs coherent communication and is often associated with cognitive or psychiatric conditions. Therapy focuses on sequencing, clarity, and comprehension.`,
      reverse: true,
    },
    {
      title: "Voice Disorder Therapy & Rehabilitation",
      img: "/SpeechEleven.jpg",
      alt: "Voice Disorders",
      text: `We address pitch, volume, and voice quality disorders through vocal exercises, posture correction, and medical collaboration to restore healthy voice patterns.`,
      reverse: false,
    },
  ];

  // rotate images for the service cards (uses your existing assets)
  const serviceImages = [
    "/SpeechOne.jpg",
    "/SpeechTwo.jpg",
    "/SpeechThree.jpg",
    "/SpeechFour.jpg",
    "/SpeechFive.jpg",
    "/SpeechSix.jpg",
    "/SpeechSeven.jpg",
    "/SpeechEight.jpg",
    "/SpeechNine.jpg",
    "/SpeechTen.jpg",
    "/SpeechEleven.jpg",
    "/SpeechOne.jpg",
  ];

  return (
    <div className="bg-white py-14">
      {/* -------------------- MODERN HERO -------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f8ff] to-[#e6f2ff] py-16 md:py-24">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1a76bc]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00509d]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#1a76bc]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="100">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 text-sm font-medium text-[#00509d] mb-6 border border-[#00509d]/20">
                <span className="h-2 w-2 rounded-full bg-[#00509d]"></span>
                Chandru's Speech & Language Centre
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0b2d56] leading-tight">
                Empowering <span className="text-[#00509d]">Communication</span> Through Specialized Therapy
              </h1>
              
              <p className="mt-6 text-lg text-slate-700 leading-relaxed">
                Early diagnosis, evidence-based therapy, and family-centered care. 
                We help every voice be heard—clearly and confidently.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00509d]/10 flex items-center justify-center text-[#00509d]">
                    <FaUserMd className="text-xl" />
                  </div>
                  <p className="text-slate-700">Individualized therapy plans guided by certified SLPs</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00509d]/10 flex items-center justify-center text-[#00509d]">
                    <FaBrain className="text-xl" />
                  </div>
                  <p className="text-slate-700">Specialized programs for ASD, ADHD, CP, Epilepsy & Cochlear Implants</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00509d]/10 flex items-center justify-center text-[#00509d]">
                    <GiTeacher className="text-xl" />
                  </div>
                  <p className="text-slate-700">Parent training, IEP support, and home program guidance</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00509d] px-6 py-4 text-white font-medium hover:bg-[#1a76bc] transition-all shadow-lg hover:shadow-xl"
                >
                  <FaCalendarCheck className="text-lg" />
                  Book an Assessment
                </Link>
                <a
                  href="tel:+91-0000000000"
                  className="inline-flex items-center gap-2 rounded-full border border-[#00509d] px-6 py-4 text-[#00509d] font-medium hover:bg-[#00509d] hover:text-white transition-all"
                >
                  <FaPhoneAlt className="text-lg" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Hero Image Collage */}
            <div className="relative h-[500px] lg:h-[600px]" data-aos="fade-left" data-aos-delay="200">
              <div className="absolute top-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl z-10">
                <img
                  src="/SpeechOne.jpg"
                  alt="Therapy session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d56]/70 to-transparent"></div>
              </div>
              
              <div className="absolute top-1/3 right-0 w-3/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl z-20">
                <img
                  src="/SpeechTwo.jpg"
                  alt="Child therapy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d56]/70 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-1/4 w-3/5 h-2/5 rounded-3xl overflow-hidden shadow-2xl z-30">
                <img
                  src="/SpeechThree.jpg"
                  alt="Parent guidance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d56]/70 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#1a76bc]/20 backdrop-blur-sm border border-[#1a76bc]/30 z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[#00509d]/20 backdrop-blur-sm border border-[#00509d]/30 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- QUICK SERVICES GRID (hover cards) -------------------- */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="text-[#00509d] text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b2d56] mt-2">
              Comprehensive Speech & Language Services
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto mt-4">
              Explore our evidence-based programs designed to build clear speech, rich language, and confident communication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <FeatureCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                description={s.description}
                image={serviceImages[i % serviceImages.length]}
                index={i + 1}
                aosDelay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- LONG-FORM INFO SECTIONS (modern InfoRow) -------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="text-[#00509d] text-sm font-semibold tracking-widest uppercase">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b2d56] mt-2">
              Specialized Therapy Approaches
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto mt-4">
              Discover our targeted interventions for various speech and language challenges.
            </p>
          </div>
          
          <div className="space-y-16 md:space-y-20">
            {speechContent.map((item, idx) => (
              <InfoRow key={item.title} {...item} aosDelay={idx * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- MODERN CTA -------------------- */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0b2d56] to-[#1a76bc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-4xl md:rounded-[3rem] bg-white/5 backdrop-blur-sm border border-white/10 p-10 md:p-16 shadow-2xl">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Begin Your Communication Journey Today
              </h3>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Take the first step toward clearer communication. Book an assessment and receive a personalized therapy plan tailored to your needs.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-[#00509d] font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl"
                >
                  <FaCalendarCheck className="text-lg" />
                  Schedule Assessment
                </Link>
                <a
                  href="tel:+91-0000000000"
                  className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-4 text-white font-semibold hover:bg-white hover:text-[#00509d] transition-all"
                >
                  <FaPhoneAlt className="text-lg" />
                  Call +91 00000 00000
                </a>
              </div>
              
              <p className="mt-6 text-sm text-white/70">
                We're available Monday to Saturday, 9 AM to 6 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeechTrainingServices;