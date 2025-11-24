// Contact.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  FaClock,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const hospitalNumber = "9486113831"; // WhatsApp number

    const text = `New Message from Top Care Hospital Website:
    
Name: ${name}
Email: ${email || "Not provided"}
Phone: ${phone}
Message: ${message}

Please respond at your earliest convenience.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${hospitalNumber}?text=${encodedText}`, "_blank");
  };

  // JSON-LD: ContactPage
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Top Care Hospital – Thiyagu Ortho and Pain Care Hospital Sathyamangalam",
    url: "https://topcarehospital.com/contact",
    description:
      "Contact Top Care Hospital – Thiyagu Ortho and Pain Care Hospital in Sathyamangalam, Erode district for orthopedic, neurology, pain care and speech therapy appointments and emergencies.",
  };

  // JSON-LD: Hospital contact details
  const hospitalContactSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Top Care Hospital – Thiyagu Ortho and Pain Care Hospital",
    alternateName: [
      "Thiyagu Ortho & Pain Care Hospital",
      "Thiyagu Ortho & Speech Care",
    ],
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-4295-222435",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-6381603832",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.501398245403855,
      longitude: 77.24612527480069,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Top Care Hospital – Thiyagu Ortho and Pain Care Hospital | Ortho &amp; Speech Therapy Appointments
        </title>
        <meta
          name="description"
          content="Contact Top Care Hospital – Thiyagu Ortho and Pain Care Hospital in Sathyamangalam, Erode for orthopedic emergencies, fracture care, joint pain, neurology and speech therapy appointments. Call 04295 222435 / 6381603832 or send us a WhatsApp message."
        />
        <meta
          name="keywords"
          content="Top Care Hospital contact, Thiyagu Ortho and Pain Care Hospital contact, contact ortho hospital sathyamangalam, top care hospital phone number, speech therapy hospital contact Sathyamangalam, orthopedic hospital erode contact"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://topcarehospital.com/contact" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(hospitalContactSchema)}
        </script>
      </Helmet>

      <div className="pt-28 bg-gradient-to-br from-[#f0f5ff] via-white to-[#f8fbff] min-h-screen text-gray-800">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          {/* Header / Hero */}
          <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
            <h1 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00509d] mb-3">
              Contact Top Care Hospital – Sathyamangalam
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b2d56] mb-3">
              We&apos;re Here to Help You Heal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Reach out for appointments, queries, or guidance on orthopedic,
              neurology and speech therapy care in Sathyamangalam. Our team will
              get back to you as quickly as possible.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 mb-16 items-start">
            {/* Contact Information Card */}
            <motion.div
              className="bg-white/90 rounded-3xl shadow-lg p-7 md:p-8 border border-[#e0e7ff] backdrop-blur-sm"
              data-aos="fade-right"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#00509d] mb-6 flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f1ff] text-[#00509d]">
                  <FaPhoneAlt />
                </span>
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Visiting Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-2xl bg-[#00509d] text-white shadow-md">
                    <FaClock className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-[#00509d] mb-1">
                      Visiting Hours
                    </h4>
                    <p className="text-sm text-gray-700">
                      Morning:{" "}
                      <span className="font-medium">9:00 AM – 2:00 PM</span>
                    </p>
                    <p className="text-sm text-gray-700">
                      Evening:{" "}
                      <span className="font-medium">4:00 PM – 7:30 PM</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      *Emergency services available 24/7
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-2xl bg-[#00509d] text-white shadow-md">
                    <FaPhoneAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-[#00509d] mb-1">
                      Contact Numbers
                    </h4>
                    <p className="text-sm text-gray-700">
                      Landline:{" "}
                      <span className="font-medium">04295 222435</span>
                    </p>
                    <p className="text-sm text-gray-700">
                      Alternate:{" "}
                      <span className="font-medium">04295 297466</span>
                    </p>
                    <p className="text-sm text-gray-700">
                      Mobile:{" "}
                      <a
                        href="tel:+916381603832"
                        className="font-medium text-[#00509d]"
                      >
                        6381603832
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-2xl bg-[#22c55e] text-white shadow-md">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-[#00509d] mb-1">
                      WhatsApp Support
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Message us directly on WhatsApp for quick responses about
                      appointments and reports.
                    </p>
                    <a
                      href="https://wa.me/9486113831"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-full bg-[#22c55e] text-white text-xs md:text-sm font-semibold shadow-md hover:bg-[#16a34a] transition-colors"
                    >
                      <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-2xl bg-[#00509d] text-white shadow-md">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-[#00509d] mb-1">
                      Our Location
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      113/21-24, SRN Street, <br />
                      Opposite to Old Bus Stand, <br />
                      Court Backside, <br />
                      Sathyamangalam - 638402, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white/90 rounded-3xl shadow-lg p-7 md:p-8 border border-[#e0e7ff] backdrop-blur-sm"
              data-aos="fade-left"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#00509d] mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mb-5">
                Fill in your details below and your message will be sent to us
                via WhatsApp. We&apos;ll reply as soon as possible during
                working hours.
              </p>

              <form className="space-y-4" onSubmit={sendWhatsAppMessage}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs md:text-sm text-gray-600 mb-1.5"
                  >
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#f8fafc] border border-gray-300 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d] focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-sm text-gray-600 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#f8fafc] border border-gray-300 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d] focus:border-transparent"
                    placeholder="Enter your email (optional)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs md:text-sm text-gray-600 mb-1.5"
                  >
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#f8fafc] border border-gray-300 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d] focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs md:text-sm text-gray-600 mb-1.5"
                  >
                    Your Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#f8fafc] border border-gray-300 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00509d] focus:border-transparent resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#00509d] text-white text-sm md:text-base font-semibold rounded-full shadow-md hover:bg-[#003f75] transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-base" />
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            className="rounded-3xl overflow-hidden shadow-lg border border-[#e0e7ff] bg-white"
            data-aos="fade-up"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-[#00509d]">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-white" />
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Our Location on Map
                </h3>
              </div>
              <span className="hidden sm:inline text-xs text-blue-100">
                Tap to zoom &amp; navigate
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.70700280046!2d77.24612527480069!3d11.501398245403855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba92125aec3d609%3A0x1b16b4ff25e6b240!2sThiyagu%20Ortho%20and%20pain%20care%20hospital!5e1!3m2!1sen!2sin!4v1753717415667!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thiyagu Ortho and Pain Care Hospital Location - Top Care Hospital Sathyamangalam"
            ></iframe>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Contact;
