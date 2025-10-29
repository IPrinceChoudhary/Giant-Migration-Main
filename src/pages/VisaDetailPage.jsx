import { useParams, Link } from "react-router";
import { migrationData } from "../utils/MigrationData";
import { 
  FaArrowLeft, 
  FaGlobe, 
  FaCheckCircle, 
  FaClock,
  FaDollarSign,
  FaInfoCircle,
  FaFileAlt,
  FaUsers,
  FaRoute
} from "react-icons/fa";
import Button from "../components/ui/Buttons";
import { motion } from "framer-motion";

const VisaDetailPage = () => {
  const { slug } = useParams();

  // Find the visa details from migrationData (ARRAY STRUCTURE)
  const findVisaBySlug = (slug) => {
    // Iterate through countries array
    for (const countryData of migrationData) {
      // Iterate through visaTypes array
      for (const visaTypeData of countryData.visaTypes) {
        // Find visa in the visas array
        const visa = visaTypeData.visas.find((v) => v.slug === slug);
        if (visa) {
          return {
            visa,
            country: countryData.country,
            visaType: visaTypeData.type,
            countryData: countryData, // Keep full country data for related visas
            visaTypeData: visaTypeData, // Keep full visa type data
          };
        }
      }
    }
    return null;
  };

  const visaData = findVisaBySlug(slug);

  // If visa not found, show 404
  if (!visaData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Visa Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The visa you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button text="Go Back Home" variant="get" />
          </Link>
        </div>
      </div>
    );
  };

  const { visa, country, visaType, countryData, visaTypeData } = visaData;

  // Parse content to extract structured information
  const parseVisaContent = (content) => {
    const sections = {
      overview: "",
      processingTime: "",
      requirements: [],
      benefits: [],
      fees: "",
      validity: "",
      pathway: "",
      additional: ""
    };

    // Split content into paragraphs
    const paragraphs = content.split('\n').filter(p => p.trim());

    // Extract processing time
    const processingMatch = content.match(/processing time[s]?:?\s*([^.]+)/i);
    if (processingMatch) {
      sections.processingTime = processingMatch[1].trim();
    }

    // Extract fees
    const feesMatch = content.match(/(?:fee|cost|charge)[s]?:?\s*([^.]+)/i);
    if (feesMatch) {
      sections.fees = feesMatch[1].trim();
    }

    // Extract validity
    const validityMatch = content.match(/valid(?:ity)?:?\s*([^.]+)/i);
    if (validityMatch) {
      sections.validity = validityMatch[1].trim();
    }

    // Extract pathway information
    if (content.includes('pathway') || content.includes('permanent residence') || content.includes('PR')) {
      const pathwayMatch = content.match(/(?:pathway|leads? to|transition to|convert to)[^.]+[.]/i);
      if (pathwayMatch) {
        sections.pathway = pathwayMatch[0].trim();
      }
    }

    // Use first paragraph as overview
    sections.overview = paragraphs[0] || content.substring(0, 300);

    return sections;
  };

  const contentSections = parseVisaContent(visa.content);

  // Get related visas from same country and type
  const relatedVisas = visaTypeData
    ? visaTypeData.visas.filter((v) => v.slug !== slug).slice(0, 4)
    : [];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-brand hover:underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{country}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{visaType}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-medium">{visa.name}</span>
          </div>
        </div>
      </div>

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
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex items-start justify-between"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                {visa.name}
              </h1>
              <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center">
                  <FaGlobe className="mr-2" />
                  <span>{country}</span>
                </div>
                <span className="text-white/60">|</span>
                <span className="bg-white/20 px-4 py-1 rounded-full">
                  {visaType}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Overview Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="flex items-center mb-4">
                <FaInfoCircle className="text-brand text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800 font-heading">
                  Visa Overview
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {visa.content}
              </p>
            </motion.div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Processing Time Card */}
              {contentSections.processingTime && (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200"
                >
                  <div className="flex items-center mb-2">
                    <FaClock className="text-blue-600 text-xl mr-2" />
                    <h3 className="font-semibold text-gray-800">Processing Time</h3>
                  </div>
                  <p className="text-gray-700">{contentSections.processingTime}</p>
                </motion.div>
              )}

              {/* Fees Card */}
              {contentSections.fees && (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200"
                >
                  <div className="flex items-center mb-2">
                    <FaDollarSign className="text-green-600 text-xl mr-2" />
                    <h3 className="font-semibold text-gray-800">Application Fees</h3>
                  </div>
                  <p className="text-gray-700">{contentSections.fees}</p>
                </motion.div>
              )}

              {/* Validity Card */}
              {contentSections.validity && (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200"
                >
                  <div className="flex items-center mb-2">
                    <FaFileAlt className="text-purple-600 text-xl mr-2" />
                    <h3 className="font-semibold text-gray-800">Visa Validity</h3>
                  </div>
                  <p className="text-gray-700">{contentSections.validity}</p>
                </motion.div>
              )}

              {/* Pathway Card */}
              {contentSections.pathway && (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200"
                >
                  <div className="flex items-center mb-2">
                    <FaRoute className="text-orange-600 text-xl mr-2" />
                    <h3 className="font-semibold text-gray-800">PR Pathway</h3>
                  </div>
                  <p className="text-gray-700">{contentSections.pathway}</p>
                </motion.div>
              )}
            </div>

            {/* Key Benefits Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="flex items-center mb-4">
                <FaCheckCircle className="text-brand text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800 font-heading">
                  Key Benefits
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="text-brand mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Live and work in {country} with full legal authorization
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-brand mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Access to world-class facilities, healthcare, and education
                  </span>
                </li>
                {contentSections.pathway && (
                  <li className="flex items-start">
                    <FaCheckCircle className="text-brand mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Pathway to permanent residency available
                    </span>
                  </li>
                )}
                <li className="flex items-start">
                  <FaCheckCircle className="text-brand mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Bring eligible family members as dependents
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-brand mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Enjoy high quality of life and career opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-brand mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Travel freely within the country during visa validity
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Eligibility Requirements Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="flex items-center mb-4">
                <FaUsers className="text-brand text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800 font-heading">
                  Eligibility Requirements
                </h2>
              </div>
              <p className="text-gray-700 mb-4">
                To be eligible for the <span className="font-semibold">{visa.name}</span>, 
                you typically need to meet the following requirements:
              </p>
              
              {/* Dynamic requirements based on visa type */}
              <div className="space-y-4">
                {visaType.toLowerCase().includes('work') && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Work Visa Requirements:</h4>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                      <li>Valid job offer from approved sponsor/employer</li>
                      <li>Relevant qualifications and work experience</li>
                      <li>Meet minimum salary thresholds</li>
                      <li>English language proficiency (IELTS/PTE/TOEFL)</li>
                      <li>Skills assessment (where applicable)</li>
                      <li>Health and character requirements</li>
                    </ul>
                  </div>
                )}

                {visaType.toLowerCase().includes('student') && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Student Visa Requirements:</h4>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                      <li>Confirmation of Enrolment (CoE) from approved institution</li>
                      <li>English language proficiency test scores</li>
                      <li>Sufficient financial capacity to cover tuition and living costs</li>
                      <li>Overseas Student Health Cover (OSHC)</li>
                      <li>Genuine Temporary Entrant (GTE) requirement</li>
                      <li>Health examination and police clearance</li>
                    </ul>
                  </div>
                )}

                {(visaType.toLowerCase().includes('family') || visaType.toLowerCase().includes('partner')) && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Family/Partner Visa Requirements:</h4>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                      <li>Genuine and continuing relationship with sponsor</li>
                      <li>Relationship evidence (photos, joint accounts, etc.)</li>
                      <li>Sponsor must be citizen or permanent resident</li>
                      <li>Meet relationship duration requirements</li>
                      <li>Health and character checks</li>
                      <li>English language requirement (where applicable)</li>
                    </ul>
                  </div>
                )}

                {visaType.toLowerCase().includes('business') && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Business Visa Requirements:</h4>
                    <ul className="space-y-2 text-gray-700 list-disc list-inside">
                      <li>Business plan and investment proposal</li>
                      <li>Proof of business experience and success</li>
                      <li>Meet minimum investment thresholds</li>
                      <li>Net asset requirements</li>
                      <li>Age requirements (typically under 55)</li>
                      <li>Points test (where applicable)</li>
                    </ul>
                  </div>
                )}

                {/* General requirements for all visas */}
                <div className="bg-brand/5 p-4 rounded-lg border border-brand/20">
                  <h4 className="font-semibold text-gray-800 mb-2">General Requirements:</h4>
                  <ul className="space-y-2 text-gray-700 list-disc list-inside">
                    <li>Valid passport (minimum 6 months validity)</li>
                    <li>Complete and accurate application form</li>
                    <li>Payment of application fees</li>
                    <li>Police clearance certificates</li>
                    <li>Medical examination by approved panel doctors</li>
                    <li>Biometric data submission</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">⚠️ Important Note:</span> Requirements vary by 
                  visa subclass and are subject to change by immigration authorities. 
                  Contact our experts for the most up-to-date, personalized eligibility assessment.
                </p>
              </div>
            </motion.div>

            {/* Application Process */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-heading">
                Application Process
              </h2>
              <div className="space-y-4">
                {[
                  { step: 1, title: "Initial Assessment", desc: "Free consultation to assess your eligibility and options" },
                  { step: 2, title: "Documentation", desc: "Gather and prepare all required documents and evidence" },
                  { step: 3, title: "Application Lodgement", desc: "Submit complete application with all supporting documents" },
                  { step: 4, title: "Processing", desc: "Immigration authorities review your application" },
                  { step: 5, title: "Decision", desc: "Receive visa grant or request for additional information" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold mr-4">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-md p-6 sticky top-4"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-heading">
                Need Assistance?
              </h3>
              <p className="text-gray-600 mb-6">
                Our migration experts are here to help you with your{" "}
                <span className="font-semibold">{visa.name}</span> application.
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
                      {country}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Visa Category:</span>
                    <span className="ml-2 font-medium text-gray-800">
                      {visaType}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Visa Name:</span>
                    <span className="ml-2 font-medium text-gray-800">
                      {visa.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Related Visas */}
              {relatedVisas.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Related Visas
                  </h4>
                  <div className="space-y-2">
                    {relatedVisas.map((relatedVisa) => (
                      <Link
                        key={relatedVisa.slug}
                        to={`/visa/${relatedVisa.slug}`}
                        className="block p-3 text-sm text-gray-700 hover:bg-brand/5 rounded-lg transition-colors border border-gray-200 hover:border-brand"
                      >
                        <div className="font-medium text-brand">
                          {relatedVisa.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Contact Us
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>📞 Australia: +61 432 756 799</div>
                  <div>📞 India: +91 79823 56440</div>
                  <div>📞 Qatar: +974 4001 1291</div>
                  <div className="mt-3">
                    <a 
                      href="https://wa.me/918868860022" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-700"
                    >
                      💬 WhatsApp: +91 886 886 00 22
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetailPage;
