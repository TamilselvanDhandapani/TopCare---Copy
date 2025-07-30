import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaUserMd,
  FaComments,
  FaBrain,
  FaChild,
  FaAssistiveListeningSystems,
  FaRegListAlt,
} from "react-icons/fa";
import { GiBrain, GiStethoscope, GiTalk, GiTeacher } from "react-icons/gi";

const SpeechTrainingServices = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      title: "Diagnosis of Speech & Language Disorders in Children",
      description:
        "Early identification of speech and language challenges in children to ensure timely and effective intervention.",
      icon: (
        <FaComments className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Assessment, Counseling & Training",
      description:
        "Personalized evaluation, guidance, and therapy plans to support communication development.",
      icon: (
        <GiStethoscope className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Autism Support",
      description:
        "Specialized programs to enhance speech, social skills, and communication in children with autism.",
      icon: (
        <GiBrain className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Attention Deficit Disorders (ADHD)",
      description:
        "Strategies to improve attention and communication in children with ADHD.",
      icon: (
        <FaBrain className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Brain Development Disorders & Epilepsy",
      description:
        "Therapy for children affected by neurological conditions to enhance communication.",
      icon: (
        <FaUserMd className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Cerebral Palsy & Neurodevelopmental Disorders",
      description:
        "Therapy to improve speech and communication skills in children with CP and other disorders.",
      icon: (
        <FaChild className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Speech Therapy After Cochlear Implant",
      description:
        "Specialized language training for individuals post cochlear implant surgery.",
      icon: (
        <FaAssistiveListeningSystems className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Learning Disabilities & I.E.P.",
      description:
        "Customized educational plans and therapy for learning challenges.",
      icon: (
        <GiTeacher className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Speech Disorders",
      description:
        "Therapy for articulation, fluency, and voice issues to improve communication.",
      icon: (
        <GiTalk className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Disorganized Speech Disorders",
      description:
        "Support for individuals with incoherent or fragmented speech patterns.",
      icon: (
        <FaRegListAlt className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Voice Disorder Therapy",
      description:
        "Voice modulation and therapy for individuals with voice abnormalities.",
      icon: (
        <GiTalk className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
    {
      title: "Post-Stroke Speech Rehabilitation",
      description:
        "Speech and swallowing therapy for individuals recovering from strokes or accidents.",
      icon: (
        <FaBrain className="text-4xl group-hover:scale-110 transition-transform" />
      ),
    },
  ];

  const speechContent = [
    {
      title:
        "Diagnosing Speech & Language disorders in children/Assesment / Counseling & Training",
      img: "/SpeechOne.jpg",
      alt: "Diagnosing Speech Disorders",
      text: `A comprehensive evaluation of a child's communication skills—assessing speech clarity, vocabulary, comprehension, and social interaction. Conducted by a speech-language pathologist (SLP) through tests, observation, and parent input. Early detection enables timely intervention for developmental delays, articulation issues, stuttering, and language disorders, improving long-term outcomes.`,
      reverse: false,
    },
    {
      title:
        "Brain Development Disorders (MR) and language impairments due to Epilepsy.",
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
      text: `Learning disabilities affect specific academic skills. We build Individualized Education Plans (IEPs) with strategies and support tailored to each child’s unique challenges and strengths.`,
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

  return (
    <div className="pt-12 bg-white min-h-screen  bg-cover bg-fixed bg-center">
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00509d]">
            CHANDRU'S SPEECH & LANGUAGE CENTRE
          </h2>
        </div>

        {/* Speech Sections */}
        {speechContent.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center md:flex-row ${
              item.reverse ? "md:flex-row-reverse" : ""
            } items-center gap-10 mb-20`}
            data-aos="fade-up"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="w-[300px] rounded-xl shadow-lg object-cover"
            />
            <div className="md:w-[50%] text-gray-800">
              <h3 className="text-2xl font-semibold text-[#00509d] mb-3">
                {item.title}
              </h3>
              <p className="leading-relaxed text-justify">{item.text}</p>
            </div>
          </div>
        ))}

        {/* Services */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-[#00509d] text-center mb-10">
            We Treate For
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-[#00509d] p-6 rounded-xl text-white shadow-md hover:shadow-xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {service.icon}
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                  <p className="text-white/80 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeechTrainingServices;
