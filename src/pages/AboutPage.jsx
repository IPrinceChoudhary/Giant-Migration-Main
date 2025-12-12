import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaUsers,
  FaGlobe,
  FaClock,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaShieldAlt,
  FaHandshake,
  FaLightbulb,
  FaChartLine,
  FaUserGraduate,
  FaBriefcase,
  FaPassport,
  FaGraduationCap,
  FaBuilding,
  FaUserTie,
  FaLinkedin
} from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";
import Divya from "../assets/Divya.png";
import Nirbhay from "../assets/Nirbhay.png";
import Shivani from "../assets/Shivani.png";
import Harjinder from "../assets/Harjinder.png"
import aboutVideo from "../assets/about.mp4"

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Reusable Animated Section Component
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AboutPage = () => {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [countUp, setCountUp] = useState({
    clients: 0,
    countries: 0,
    students: 0,
    universities: 0,
  });

  // Counter animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      clients: 2500,
      countries: 10,
      students: 200,
      universities: 180,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCountUp({
        clients: Math.floor(targets.clients * progress),
        countries: Math.floor(targets.countries * progress),
        students: Math.floor(targets.students * progress),
        universities: Math.floor(targets.universities * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCountUp(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      number: `${countUp.clients}+`,
      label: "Happy Clients",
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      number: `${countUp.countries}+`,
      label: "Countries Presence",
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      number: "10+",
      label: "Years Experience",
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      number: `${countUp.students}+`,
      label: "Students Assisted",
    },
  ];

  const whyChooseUs = [
    {
      number: "01",
      icon: <FaUserTie className="w-8 h-8" />,
      title: "Personalised Consultation",
      description:
        "Tailored immigration strategies designed specifically for your unique situation and goals.",
    },
    {
      number: "02",
      icon: <GiOnTarget className="w-8 h-8" />,
      title: "Customer-Centric Approach",
      description:
        "Your dreams are our priority. We provide dedicated support throughout your immigration journey.",
    },
    {
      number: "03",
      icon: <FaChartLine className="w-8 h-8" />,
      title: "High Success Rate",
      description:
        "Proven track record with 100% satisfaction and thousands of successful visa applications.",
    },
    {
      number: "04",
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Professional Team",
      description:
        "Licensed RCIC and MARA consultants with decades of combined experience.",
    },
    {
      number: "05",
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Reputation Built on Relationships",
      description:
        "Long-term relationships built on trust, transparency, and successful outcomes.",
    },
    {
      number: "06",
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Dedicated Support",
      description:
        "24/7 assistance and continuous monitoring throughout the application process.",
    },
    {
      number: "07",
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Network",
      description:
        "Presence in 10+ countries with local expertise and international connections.",
    },
    {
      number: "08",
      icon: <FaDollarSign className="w-8 h-8" />,
      title: "Cost-Effective",
      description:
        "Transparent pricing with no hidden fees. Quality service at competitive rates.",
    },
  ];

  const processSteps = [
    {
      step: "Step 1",
      title: "Sign Up With Us",
      description:
        "Begin your journey by registering and scheduling your initial consultation with our experts.",
      icon: <FaUserPlus className="w-12 h-12" />,
    },
    {
      step: "Step 2",
      title: "Submit Your Documents",
      description:
        "Follow our comprehensive checklist and submit all required documents for your application.",
      icon: <FaFileUpload className="w-12 h-12" />,
    },
    {
      step: "Step 3",
      title: "Application Monitoring",
      description:
        "We monitor and manage your documents for the online application, ensuring everything is perfect.",
      icon: <FaClipboardCheck className="w-12 h-12" />,
    },
    {
      step: "Step 4",
      title: "Receive Your Visa",
      description:
        "Celebrate your success! We'll guide you through the final steps and post-visa support.",
      icon: <FaPassport className="w-12 h-12" />,
    },
  ];

  const services = [
    {
      icon: <FaUserGraduate className="w-10 h-10" />,
      title: "Student Visas",
      description:
        "Comprehensive support for international students, from university selection to study permit approval.",
      features: [
        "200+ students successfully assisted",
        "Admission to 180+ universities worldwide",
        "Scholarship guidance and applications",
        "Post-study work permit assistance",
      ],
    },
    {
      icon: <FaBriefcase className="w-10 h-10" />,
      title: "Skilled Worker Programs",
      description:
        "Expert guidance for skilled professionals seeking permanent residence through Express Entry and PNP.",
      features: [
        "Express Entry application management",
        "Provincial Nominee Programs",
        "Job offer assistance and LMIA support",
        "Profile optimization and CRS improvement",
      ],
    },
    {
      icon: <GiOnTarget className="w-10 h-10" />,
      title: "Family Sponsorship",
      description:
        "Reunite with your loved ones through family class sponsorship and relationship-based immigration.",
      features: [
        "Spouse and partner sponsorship",
        "Parent and grandparent programs",
        "Dependent children applications",
        "Complete documentation support",
      ],
    },
    {
      icon: <FaBuilding className="w-10 h-10" />,
      title: "Business Immigration",
      description:
        "Specialized services for entrepreneurs, investors, and business owners looking to expand globally.",
      features: [
        "Start-up Visa Program",
        "Investor and Entrepreneur streams",
        "Business establishment support",
        "Provincial business programs",
      ],
    },
  ];

  const teamMembers = [
  {
    name: "Nirbhay Kataria",
    position: "CEO & Founder",
    experience: "10+ Years",
    specialization: "Immigration Expert",
    credentials: "Immigration Industry Expert",
    image: Nirbhay,
    linkedin: "https://www.linkedin.com/in/nirbhay-kataria-125939122/",
    bio: "Nirbhay Kataria brings over 10 years of experience in the immigration industry and has successfully guided thousands of aspirants through the complexities of global immigration processes. He fosters a culture of collaboration, innovation, and integrity, with a mission focused on helping clients achieve their dreams of building a life abroad.",
    quote:
      "Your vision, our mission - together we make immigration dreams a reality.",
  },
  {
    name: "Divya Kataria",
    position: "Vice President",
    experience: "9+ Years",
    specialization: "Immigration Expert",
    credentials: "Immigration Industry Expert",
    image: Divya,
    linkedin: "https://www.linkedin.com/in/divyaa-kataria-1933361b5/",
    bio: "Divya Kataria specializes in industrial psychology and applies her expertise to redefine what makes a workplace successful. With her certifications and professional experience, she implements effective solutions that enhance organizational performance and employee well-being.",
    quote:
      "Building workplaces where people and purpose thrive together.",
  },
  {
    name: "Shivani Hitkari",
    position: "Regulated Canadian Immigration Consultant",
    experience: "8+ Years",
    specialization: "Canadian Immigration Expert",
    credentials: "RCIC (R706882)",
    image: Shivani,
    linkedin: "https://www.linkedin.com/in/shivani-hitkari-6b4103219/",
    bio: "Shivani Hitkari is a Licensed Regulated Canadian Immigration Consultant with extensive experience in Express Entry, Provincial Nominee Programs, and Family Class sponsorship. She is dedicated to providing personalized, accurate, and professional immigration services to clients pursuing Canadian permanent residency.",
    quote:
      "Every successful application represents a dream fulfilled and a new beginning.",
  },
  {
    name: "Harjinder Singh Chouhan",
    position: "Regulated Australian Immigration Consultant",
    experience: "9+ Years",
    specialization: "Australian Immigration Expert",
    credentials: "MARA (0956110)",
    image: Harjinder,
    linkedin: "https://www.linkedin.com/in/harjinder-chouhan",
    bio: "Harjinder Singh Chouhan is a Registered Migration Agent with the Migration Agents Registration Authority (MARA). He specializes in skilled visas, employer-sponsored programs, and business immigration to Australia, offering clients professional guidance with integrity and expertise.",
    quote:
      "Expertise, integrity, and dedication - the foundation of successful migration.",
  },
];



  const destinations = [
    { name: "CANADA", flag: "🇨🇦" },
    { name: "AUSTRALIA", flag: "🇦🇺" },
    { name: "UK", flag: "🇬🇧" },
    { name: "USA", flag: "🇺🇸" },
    { name: "EUROPE", flag: "🇪🇺" },
    { name: "NEW ZEALAND", flag: "🇳🇿" },
  ];

  const nextSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentTeamSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative text-white py-20 md:py-32 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={aboutVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#64361E]/85 via-[#8B4513]/80 to-[#64361E]/85"></div>
      
      {/* Additional subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Your Trusted Partner in Global Migration
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            With 10+ years of excellence, we've helped 2,500+ clients achieve their dreams
            across 10+ countries. Expert guidance from licensed professionals.
          </motion.p>

          {/* Destination Chips */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              '🇨🇦 Canada',
              '🇦🇺 Australia',
              '🇬🇧 UK',
              '🇺🇸 USA',
              '🇳🇿 New Zealand',
              '🇩🇪 Europe',
            ].map((destination, index) => (
              <motion.span
                key={destination}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 shadow-lg"
              >
                {destination}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>

      {/* Stats Section with Counter Animation */}
      <div className="container mx-auto px-4 -mt-10 md:-mt-16 relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-center cursor-pointer"
            >
              <motion.div
                className="flex justify-center mb-4 text-[#64361E]"
                whileHover={{ rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#64361E]">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-medium text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* About Us Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <AnimatedSection className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-[#64361E] mb-6">
                About Giant Migration
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-[#64361E] to-[#8B4513] mx-auto mb-8"
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Giant Migration specializes in transforming your aspirations
                into achievements. As a premier immigration consultancy, we are
                committed to providing top-tier services across various
                immigration avenues. Whether you're pursuing academic
                excellence, professional growth, or a new chapter in life, we
                ensure your transition is smooth and successful.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                With 10+ years of experience, presence in 10+ countries, and a
                proven track record of 2,500+ happy clients, we have built our
                reputation on trust, expertise, and continuous dedication to our
                clients' success. Our team of licensed RCIC and MARA consultants
                brings decades of combined experience to guide you through every
                step of your immigration journey.
              </p>
            </motion.div>

            {/* Vision & Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <motion.div
                variants={slideInLeft}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#64361E] to-[#8B4513] rounded-3xl p-8 md:p-10 text-white shadow-2xl cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <FaLightbulb className="w-12 h-12 mr-4" />
                  <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed text-white/95">
                  To be the leading facilitator of seamless and successful
                  immigration experiences, ensuring a smooth transition for our
                  clients into their chosen destinations.
                </p>
              </motion.div>

              <motion.div
                variants={slideInRight}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#8B4513] to-[#64361E] rounded-3xl p-8 md:p-10 text-white shadow-2xl cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <GiOnTarget className="w-12 h-12 mr-4" />
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg leading-relaxed text-white/95">
                  Your vision, our mission - together we make immigration dreams
                  a reality through personalized consultation, expert guidance,
                  and support.
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#64361E] mb-6">
              Why Choose Giant Migration?
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-[#64361E] to-[#8B4513] mx-auto mb-6"
            />
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Eight compelling reasons to trust us with your immigration journey
            </p>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-t-4 border-[#64361E] group cursor-pointer"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-[#DCBDAD] mb-4 group-hover:text-[#64361E] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {reason.number}
                </motion.div>
                <motion.div
                  className="text-[#64361E] mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {reason.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-[#64361E] mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Simple Process */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#64361E] mb-6">
              Our Simple Process
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-[#64361E] to-[#8B4513] mx-auto mb-6"
            />
            <p className="text-lg md:text-xl text-gray-600">
              Securing your visa has never been easier
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  {/* Connection Line (Desktop) */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      className="hidden lg:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-[#64361E] to-[#8B4513] z-0 origin-left"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#8B4513]"></div>
                    </motion.div>
                  )}

                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 relative z-10 h-full"
                  >
                    <motion.div
                      className="bg-gradient-to-br from-[#64361E] to-[#8B4513] rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-white mb-6 mx-auto"
                      whileHover={{ rotate: 12 }}
                    >
                      {step.icon}
                    </motion.div>
                    <div className="text-[#8B4513] font-bold text-sm mb-2 text-center">
                      {step.step}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#64361E] mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#64361E] mb-6">
              Our Services
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-[#64361E] to-[#8B4513] mx-auto mb-6"
            />
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive immigration solutions tailored to your unique needs
            </p>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-xl cursor-pointer"
              >
                <motion.div
                  className="bg-gradient-to-br from-[#64361E] to-[#8B4513] rounded-2xl w-20 h-20 flex items-center justify-center text-white mb-6"
                  whileHover={{ rotate: 12 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#64361E] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fIndex * 0.1 }}
                    >
                      <FaCheckCircle className="w-5 h-5 text-maroon-200 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
  <div className="container mx-auto">
    <AnimatedSection className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-[#64361E] mb-6">
        Meet Our Leadership Team
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-gradient-to-r from-[#64361E] to-[#8B4513] mx-auto mb-6"
      />
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Experienced immigration professionals dedicated to your success
      </p>
    </AnimatedSection>

    {/* Team Slider */}
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-3xl">
        <motion.div
          className="flex"
          animate={{ x: `-${currentTeamSlide * 100}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4 md:px-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative bg-gradient-to-br from-[#64361E] to-[#8B4513] p-12 flex items-center justify-center">
                    <div className="relative">
                      <motion.div
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <FaUserTie className="w-32 h-32 md:w-40 md:h-40 text-white/80" />
                        )}
                      </motion.div>
                      
                      {/* LinkedIn Button - Positioned at bottom of circle */}
                      {member.linkedin && (
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -4 }}
                          whileTap={{ scale: 0.95 }}
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white hover:bg-[#0077B5] text-[#0077B5] hover:text-white p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 z-20 group"
                          aria-label={`View ${member.name}'s LinkedIn profile`}
                        >
                          <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
                        </motion.a>
                      )}
                      
                      {/* Decorative elements */}
                      <motion.div
                        className="absolute -top-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-6"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#64361E]">
                          {member.name}
                        </h3>
                        {/* LinkedIn Button - Alternative position (top right) */}
                        {/* Uncomment this and remove the bottom one if you prefer top-right placement
                        {member.linkedin && (
                          <motion.a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#0077B5] hover:bg-[#005885] text-white p-2.5 rounded-lg transition-colors duration-300"
                            aria-label={`View ${member.name}'s LinkedIn profile`}
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </motion.a>
                        )}
                        */}
                      </div>
                      <p className="text-xl md:text-2xl font-semibold text-[#8B4513] mb-3">
                        {member.position}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-[#64361E]/10 text-[#64361E] px-4 py-2 rounded-full text-sm font-semibold">
                          {member.experience}
                        </span>
                        <span className="bg-[#8B4513]/10 text-[#8B4513] px-4 py-2 rounded-full text-sm font-semibold">
                          {member.credentials}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-6">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                        <span>{member.specialization}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white rounded-2xl p-6 mb-6 border-l-4 border-[#64361E] shadow-md"
                    >
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <p className="text-[#64361E] italic font-medium">
                          "{member.quote}"
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Slider Controls */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-[#64361E] text-white rounded-full shadow-2xl hover:bg-[#8B4513] transition-colors duration-300 z-10 cursor-pointer"
        aria-label="Previous team member"
      >
        <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 p-3 md:p-4 bg-[#64361E] text-white rounded-full shadow-2xl hover:bg-[#8B4513] transition-colors duration-300 z-10 cursor-pointer"
        aria-label="Next team member"
      >
        <FaChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>

      {/* Slider Dots */}
      <div className="flex justify-center mt-8 gap-2">
        {teamMembers.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentTeamSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="h-3 rounded-full transition-all duration-300"
            animate={{
              width: index === currentTeamSlide ? 48 : 12,
              backgroundColor:
                index === currentTeamSlide ? "#64361E" : "#D1D5DB",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

// Missing icon components (add these if not imported)
const FaHeadset = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
  </svg>
);

const FaDollarSign = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
  </svg>
);

const FaUserPlus = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const FaFileUpload = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z" />
  </svg>
);

const FaClipboardCheck = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>
);

export default AboutPage;
