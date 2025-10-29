import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    visaType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeMapLocation, setActiveMapLocation] = useState("sydney");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Thank you for contacting us! We'll get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        visaType: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const officeLocations = [
    {
      id: 1,
      city: "NSW",
      country: "Australia",
      address: "49th Floor/8 Parramatta Sq, Parramatta NSW 2150, Australia",
      phone: "+61 432 756 799",
      email: "info@giantmigration.com",
      hours: "Mon - Fri: 9:00 AM - 6:00 PM",
      isMain: true,
      mapsUrl:
        "https://maps.app.goo.gl/NtAmUbc1Sby9bQuv6",
      mapKey: "sydney",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.845392158343!2d151.0010306766762!3d-33.81630271634347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a3e260078bfb%3A0x5424e6a3a2b3c8a7!2s49th%20Floor%2F8%20Parramatta%20Sq%2C%20Parramatta%20NSW%202150%2C%20Australia!5e0!3m2!1sen!2sin!4v1761734352382!5m2!1sen!2sin",
    },
    {
      id: 2,
      city: "Delhi",
      country: "India",
      address:
        "Office 408-409, pearl besti heights 1, Netaji subhash place, Delhi",
      phone: "+91 79823 56440",
      email: "info@giantmigration.com",
      hours: "Mon - Sat: 10:00 AM - 7:00 PM",
      isMain: false,
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Office+408-409+pearl+besti+heights+1+Netaji+subhash+place+Delhi+India",
      mapKey: "delhi",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13998.290372829098!2d77.14589959999999!3d28.702429300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20408-409%20pearl%20besti%20heights%201%20Netaji%20subhash%20place%20Delhi%20India!5e0!3m2!1sen!2sin!4v1761723193501!5m2!1sen!2sin",
    },
    {
      id: 3,
      city: "Doha",
      country: "Qatar",
      address:
        "Office No. 9, Second Floor, Building 2, Financial Square C Ring Rd, Doha",
      phone: "+974 4001 1291",
      email: "info@giantmigration.com",
      hours: "Sun - Thu: 9:00 AM - 6:00 PM",
      isMain: false,
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Office+No+9+Second+Floor+Building+2+Financial+Square+C+Ring+Road+Doha+Qatar",
      mapKey: "doha",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7216.274694504035!2d51.536683749999995!3d25.26596475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20No%209%20Second%20Floor%20Building%202%20Financial%20Square%20C%20Ring%20Road%20Doha%20Qatar!5e0!3m2!1sen!2sin!4v1761723236589!5m2!1sen!2sin",
    },
  ];

  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: [
        { location: "Australia", number: "+61 432 756 799" },
        { location: "India", number: "+91 79823 56440" },
        { location: "Qatar", number: "+974 4001 1291" },
      ],
      subDetails: "Mon - Fri: 9AM - 6PM",
      link: "tel:+61432756799",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: "info@giantmigration.com",
      subDetails: "We'll respond within 24 hours",
      link: "mailto:info@giantmigration.com",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      details: "+91 886 886 00 22",
      subDetails: "Chat with our team",
      link: "https://wa.me/918868860022",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      details: [
        { location: "Australia", address: "49th Floor/8 Parramatta Sq, Parramatta NSW 2150, Australia" },
        {
          location: "India",
          address:
            "Office 408-409, pearl besti heights 1, Netaji subhash place, Delhi",
        },
        {
          location: "Qatar",
          address:
            "Office No. 9, Second Floor, Building 2, Financial Square C Ring Rd, Doha",
        },
      ],
      subDetails: "Multiple office locations",
      link: "#offices",
    },
  ];

  const countries = [
    "Australia",
    "Canada",
    "United Kingdom",
    "United States",
    "New Zealand",
    "UAE",
    "Europe",
    "Other",
  ];

  const visaTypes = [
    "Skilled Migration",
    "Family Migration",
    "Business Migration",
    "Student Visa",
    "Work Visa",
    "Tourist Visa",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand to-brand-dark text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Ready to start your migration journey? Our expert team is here to
              help you every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-brand group-hover:text-brand-dark transition-colors mb-4">
                {method.icon}
              </div>
              <h3 className="font-heading font-semibold text-text-dark mb-2">
                {method.title}
              </h3>

              {/* Handle array or string for details */}
              {Array.isArray(method.details) ? (
                <div className="space-y-1 mb-2">
                  {method.details.map((detail, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="font-medium text-brand">
                        {detail.location}:
                      </span>{" "}
                      <span className="text-muted">
                        {detail.number || detail.address}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-brand font-medium mb-1">{method.details}</p>
              )}

              <p className="text-sm text-muted">{method.subDetails}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-text-dark mb-2 font-heading">
              Send Us a Message
            </h2>
            <p className="text-muted mb-6">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none"
                    placeholder="+91 886 886 00 22"
                  />
                </div>
              </div>

              {/* Country & Visa Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Interested Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none bg-white"
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="visaType"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    Visa Type *
                  </label>
                  <select
                    id="visaType"
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none bg-white"
                  >
                    <option value="">Select visa type</option>
                    {visaTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your migration plans and how we can help you..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-brand to-brand-dark text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-heading"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-text-dark mb-4 font-heading">
                Why Choose Giant Migration?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-brand-50 rounded-full p-2 mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-brand"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">
                      Expert Guidance
                    </h3>
                    <p className="text-muted text-sm">
                      Over 15 years of experience in migration law and visa
                      processing
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-50 rounded-full p-2 mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-brand"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">
                      High Success Rate
                    </h3>
                    <p className="text-muted text-sm">
                      98% visa approval rate with thousands of successful cases
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-50 rounded-full p-2 mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-brand"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">
                      24/7 Support
                    </h3>
                    <p className="text-muted text-sm">
                      Round-the-clock assistance for all your queries and
                      concerns
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-50 rounded-full p-2 mr-4 mt-1">
                    <svg
                      className="w-5 h-5 text-brand"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">
                      Personalized Service
                    </h3>
                    <p className="text-muted text-sm">
                      Tailored solutions based on your unique circumstances
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-text-dark mb-4 font-heading">
                Connect With Us
              </h2>
              <p className="text-muted mb-6">
                Follow us on social media for the latest updates, tips, and
                success stories.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/GiantMigrationIndia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white transition-all duration-300"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://x.com/GiantMigration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white transition-all duration-300"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/giant-migration/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white transition-all duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/giant_migration_india/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white transition-all duration-300"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://wa.me/918868860022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-brand-50 text-brand rounded-lg hover:bg-brand hover:text-white transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div id="offices" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 font-heading">
              Our Office Locations
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Visit us at any of our offices worldwide. We're here to assist you
              with your migration needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {officeLocations.map((office) => (
              <div
                key={office.id}
                className={`relative bg-surface rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                  office.isMain ? "ring-2 ring-brand" : ""
                }`}
              >
                {office.isMain && (
                  <div className="absolute top-4 right-4 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Main Office
                  </div>
                )}
                <div className="h-2 bg-gradient-to-r from-brand to-brand-dark"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-dark mb-1 font-heading">
                    {office.city}
                  </h3>
                  <p className="text-brand font-medium mb-4">
                    {office.country}
                  </p>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-brand mt-1 mr-3 flex-shrink-0" />
                      <p className="text-muted">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <FaPhone className="text-brand mr-3 flex-shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="text-muted hover:text-brand transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-brand mr-3 flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-muted hover:text-brand transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <FaClock className="text-brand mt-1 mr-3 flex-shrink-0" />
                      <p className="text-muted">{office.hours}</p>
                    </div>
                  </div>

                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full bg-brand-50 text-brand font-semibold py-2 px-4 rounded-lg hover:bg-brand hover:text-white transition-all duration-300 block text-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="bg-surface py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 font-heading">
              Find Us on Map
            </h2>
            <p className="text-lg text-muted mb-6">
              Select a location to view on the map
            </p>

            {/* Location Selector Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {officeLocations.map((office) => (
                <button
                  key={office.mapKey}
                  onClick={() => setActiveMapLocation(office.mapKey)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                    activeMapLocation === office.mapKey
                      ? "bg-gradient-to-r from-brand to-brand-dark text-white shadow-lg"
                      : "bg-white text-brand border-2 border-brand hover:bg-brand-50"
                  }`}
                >
                  {office.city}, {office.country}
                  {office.isMain && (
                    <span className="ml-2 text-xs">(Main)</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video relative">
              {officeLocations.map((office) => (
                <iframe
                  key={office.mapKey}
                  src={office.embedUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    display:
                      activeMapLocation === office.mapKey ? "block" : "none",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${office.city} Office Location`}
                  className="absolute inset-0"
                ></iframe>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does the consultation take?",
                answer:
                  "Initial consultations typically last 30-45 minutes. We'll assess your situation and provide tailored advice for your migration journey.",
              },
              {
                question: "Do you charge for the first consultation?",
                answer:
                  "No, we offer a free initial consultation to understand your needs and explain how we can help you achieve your migration goals.",
              },
              {
                question: "What documents should I prepare?",
                answer:
                  "Bring your passport, educational certificates, work experience letters, and any previous visa documents. We'll guide you on additional requirements during the consultation.",
              },
              {
                question: "How can I track my visa application?",
                answer:
                  "We provide a dedicated client portal where you can track your application status 24/7. You'll also receive regular updates via email and phone.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-text-dark mb-2 font-heading">
                  {faq.question}
                </h3>
                <p className="text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;