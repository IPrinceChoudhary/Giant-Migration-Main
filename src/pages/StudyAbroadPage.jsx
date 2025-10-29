import { useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaUniversity,
  FaBriefcase,
  FaGlobe,
  FaHeart,
  FaClock,
  FaFlag,
  FaShieldAlt,
  FaDollarSign,
  FaBook,
  FaLightbulb,
  FaRocket,
  FaCheckCircle,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaStar,
  FaCalendarAlt,
  FaFileAlt,
  FaPlus,
  FaMinus,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import studyAbroadData from "../utils/StudyAbroadData";
import Button from "../components/ui/Buttons";

const StudyAbroadPage = () => {
  const { country } = useParams();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeTab, setActiveTab] = useState("undergraduate");

  // Get data for the country
  const data = studyAbroadData[country];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const getIcon = (iconName) => {
    const icons = {
      university: <FaUniversity className="w-8 h-8" />,
      briefcase: <FaBriefcase className="w-8 h-8" />,
      globe: <FaGlobe className="w-8 h-8" />,
      heart: <FaHeart className="w-8 h-8" />,
      clock: <FaClock className="w-8 h-8" />,
      flag: <FaFlag className="w-8 h-8" />,
      shield: <FaShieldAlt className="w-8 h-8" />,
      dollar: <FaDollarSign className="w-8 h-8" />,
      book: <FaBook className="w-8 h-8" />,
      lightbulb: <FaLightbulb className="w-8 h-8" />,
      rocket: <FaRocket className="w-8 h-8" />,
    };
    return icons[iconName] || <FaGraduationCap className="w-8 h-8" />;
  };

  // If country not found, show 404
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Country Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The study destination you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button text="Go Back Home" variant="get" />
          </Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand to-brand-dark text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
          <div className="flex items-start justify-between flex-wrap">
            <div>
              <div className="text-6xl mb-4">{data.flag}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                Study in {data.country}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                {data.tagline}
              </p>
              <p className="text-lg text-white/80 max-w-3xl">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Why Study Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Why Study in {data.country}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.whyStudy.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="text-brand flex-shrink-0">
                      {getIcon(reason.icon)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Top Universities */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Top Universities
              </h2>
              <div className="space-y-4">
                {data.topUniversities.map((university, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:border-brand hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <FaUniversity className="text-brand text-3xl mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {university.name}
                        </h3>
                        <div className="bg-brand-50 rounded-lg px-3 py-2 inline-block mb-3">
                          <p className="text-sm font-semibold text-brand">
                            {university.ranking}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                          <FaMapMarkerAlt className="text-gray-400" />
                          <span>{university.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {university.specializations.map((spec, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Popular Courses */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Popular Courses
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.popularCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-brand to-brand-dark rounded-lg p-4 text-center text-white shadow-md hover:shadow-lg transition-shadow"
                  >
                    <FaGraduationCap className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-semibold text-sm">{course}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Admission Requirements */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Admission Requirements
              </h2>

              {/* Tab Navigation */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab("undergraduate")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "undergraduate"
                      ? "bg-brand text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Undergraduate
                </button>
                <button
                  onClick={() => setActiveTab("postgraduate")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "postgraduate"
                      ? "bg-brand text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Postgraduate
                </button>
              </div>

              {/* Requirements List */}
              <div className="space-y-3">
                {data.admissionRequirements[activeTab].map((req, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{req}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cost Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Cost of Study & Living
              </h2>

              {/* Tuition Fees */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaGraduationCap className="text-brand" />
                  Tuition Fees
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Undergraduate</span>
                    <span className="font-bold text-brand">
                      {data.costOfLiving.tuition.undergraduate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Postgraduate</span>
                    <span className="font-bold text-brand">
                      {data.costOfLiving.tuition.postgraduate}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Doctoral</span>
                    <span className="font-bold text-brand">
                      {data.costOfLiving.tuition.doctoral}
                    </span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaHeart className="text-brand" />
                  Living Expenses
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Accommodation</span>
                    <span className="font-bold text-brand">
                      {data.costOfLiving.livingExpenses.accommodation}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Food</span>
                    <span className="font-bold text-brand">
                      {data.costOfLiving.livingExpenses.food}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Transportation</span>
                    <span className="font-bold text-brand">
                      {data.costOfLiving.livingExpenses.transportation}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Utilities</span>
                    <span className="font-bold text-brand">
                      {data.costOfLiving.livingExpenses.utilities}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-brand to-brand-dark rounded-lg text-white">
                    <span className="font-bold">Total Annual</span>
                    <span className="font-bold text-xl">
                      {data.costOfLiving.livingExpenses.total}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visa Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Student Visa Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaFileAlt className="text-brand text-xl mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Visa Type</p>
                      <p className="font-bold text-gray-800">
                        {data.visaInformation.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaClock className="text-brand text-xl mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Processing Time</p>
                      <p className="font-bold text-gray-800">
                        {data.visaInformation.processingTime}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaDollarSign className="text-brand text-xl mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Visa Cost</p>
                      <p className="font-bold text-gray-800">
                        {data.visaInformation.cost}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaBriefcase className="text-brand text-xl mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Work Rights</p>
                      <p className="font-bold text-gray-800">
                        {data.visaInformation.workRights}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">
                  Visa Requirements:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {data.visaInformation.requirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Post-Study Work */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-brand to-brand-dark rounded-lg shadow-md p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-6 font-heading">
                Post-Study Work Opportunities
              </h2>
              <div className="text-center mb-6">
                <p className="text-lg mb-2">Work Duration</p>
                <p className="text-4xl font-bold mb-2">
                  {data.postStudyWork.duration}
                </p>
                <p className="text-xl text-white/90">
                  {data.postStudyWork.visaType}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {data.postStudyWork.streams.map((stream, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                  >
                    <h4 className="text-lg font-bold mb-3">{stream.name}</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">Duration:</span>{" "}
                        {stream.duration}
                      </p>
                      <p>
                        <span className="font-semibold">Eligibility:</span>{" "}
                        {stream.eligibility}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Application Intakes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Application Intakes
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {data.intakes.map((intake, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-200 rounded-lg p-6 text-center hover:border-brand transition-colors"
                  >
                    <FaCalendarAlt className="text-3xl text-brand mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {intake.name}
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">
                          Start Months
                        </p>
                        <p className="font-semibold text-brand">
                          {intake.months}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Deadline</p>
                        <p className="font-semibold text-brand">
                          {intake.deadline}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Scholarships */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Scholarships & Financial Aid
              </h2>
              <div className="space-y-4">
                {data.scholarships.map((scholarship, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:border-brand hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-brand rounded-full p-3 flex-shrink-0">
                        <FaDollarSign className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {scholarship.name}
                        </h3>
                        <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block mb-3">
                          <p className="font-bold">{scholarship.value}</p>
                        </div>
                        <p className="text-gray-600">
                          {scholarship.eligibility}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Popular Cities */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Popular Student Cities
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {data.cities.map((city, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:border-brand hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FaMapMarkerAlt className="text-2xl text-brand" />
                      <h3 className="text-xl font-bold text-gray-800">
                        {city.name}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">{city.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Population</p>
                        <p className="font-semibold text-brand">
                          {city.population}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Climate</p>
                        <p className="font-semibold text-brand">
                          {city.climate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {data.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-bold pr-8 text-gray-800">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center">
                          {openFAQ === index ? (
                            <FaMinus className="w-4 h-4" />
                          ) : (
                            <FaPlus className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </button>
                    {openFAQ === index && (
                      <div className="p-6 pt-0 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            {data.testimonials && data.testimonials.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-md p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                  Student Success Stories
                </h2>
                <div className="space-y-6">
                  {data.testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.course}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.university}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-heading">
                Need Assistance?
              </h3>
              <p className="text-gray-600 mb-6">
                Our study abroad experts are here to help you with your
                application to {data.country}.
              </p>
              <Link to="/contact">
                <Button text="Get Free Consultation" variant="get" />
              </Link>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Quick Facts
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600">Country:</span>
                    <span className="ml-2 font-medium text-gray-800">
                      {data.country}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Universities:</span>
                    <span className="ml-2 font-medium text-gray-800">
                      {data.topUniversities.length}+ Top Institutions
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Work Rights:</span>
                    <span className="ml-2 font-medium text-gray-800">
                      {data.postStudyWork.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <div
                    className="flex items-center gap-3 text-sm text-brand hover:underline"
                  >
                    <FaPhone />
                    <div className="flex flex-col">

                    <span>+61 432 756 799</span>
                    <span>+91 79823 56440</span>
                    <span>+974 4001 1291</span>
                    </div>
                  </div>
                  <a
                    href="mailto:info@giantmigration.com"
                    className="flex items-center gap-3 text-sm text-brand hover:underline"
                  >
                    <FaEnvelope />
                    <span>info@giantmigration.com</span>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Other Destinations
                </h4>
                <div className="space-y-2">
                  {Object.keys(studyAbroadData)
                    .filter((key) => key !== country)
                    .map((countryKey) => (
                      <Link
                        key={countryKey}
                        to={`/study/${countryKey}`}
                        className="block text-sm text-brand hover:underline"
                      >
                        Study in {studyAbroadData[countryKey].country}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadPage;
