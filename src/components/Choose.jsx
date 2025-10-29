import {
  Users,
  Target,
  DollarSign,
  Heart,
  TrendingUp,
  Award,
  Globe2,
  Headphones,
} from "lucide-react";
import { FaArrowTrendUp } from "react-icons/fa6";
import c1 from "../assets/coaching-1.jpg";
import c2 from "../assets/coaching-2.jpg";
import c3 from "../assets/coaching-3.jpg";
import c4 from "../assets/coaching-4.jpg";
import { motion } from "motion/react";
import { Link } from "react-router";

const Choose = () => {
  const advantages = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Personalised Consultation",
      description: "Tailored guidance for your unique journey",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "Global Network",
      description: "Connections across multiple countries",
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Cost-effective",
      description: "Affordable with transparent pricing",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our priority",
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Professional Team",
      description: "Licensed experts with proven track record",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "High Success Rate",
      description: "Consistent positive outcomes",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Reputation Built on Relationships",
      description: "Trust and integrity in every interaction",
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "Dedicated Support",
      description: "Continuous assistance throughout",
    },
  ];

  const visaTypes = [
    { name: "Mock Interviews", image: c1 },
    { name: "IELTS Coaching", image: c2 },
    { name: "TOEFL Coaching", image: c3 },
    { name: "PTE Coaching", image: c4 },
  ];

  const getServiceSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <section className="bg-gradient-to-br from-bg via-surface to-brand-50 py-16 lg:py-24 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-maroon-dark via-brand to-maroon-dark bg-clip-text text-transparent font-heading">
              Why Choose Us?
            </span>
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Professional services with complete transparency and dedicated
            support throughout your immigration journey
          </p>
        </div>

        {/* Main Content Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Column - Client Advantages */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center items-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-brand-100 h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-3 font-heading">
                  Why Choose Giant Migration?
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-brand to-brand-dark mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 gap-3 flex-1">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-r from-white to-brand-50/50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-200 overflow-hidden"
                  >
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/5 to-brand/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>

                    <div className="relative flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand to-brand-dark rounded-xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        {advantage.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base lg:text-lg font-semibold text-text group-hover:text-brand-dark transition-colors duration-300 font-heading">
                          {advantage.title}
                        </h3>
                        <p className="text-sm text-muted group-hover:text-text transition-colors duration-300 font-body">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Video & Coaching Services */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="h-full flex flex-col space-y-6">
              {/* Video Section with Laptop Frame */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-brand-100 flex-1">
                <div className="text-center mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-3 font-heading">
                    Watch Our Story
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-brand to-brand-dark mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                  {/* Laptop Frame */}
                  <div className="relative mx-auto max-w-full">
                    {/* Screen */}
                    <div className="relative bg-gray-800 rounded-t-2xl p-2 sm:p-3 shadow-2xl">
                      {/* Camera notch */}
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>

                      {/* Video Container */}
                      <div
                        className="relative bg-black rounded-lg overflow-hidden"
                        style={{ aspectRatio: "16/10" }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/i67rbcInjrY"
                          title="Immigration Services"
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>

                    {/* Laptop Base */}
                    <div className="relative h-2 sm:h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-2xl shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                    </div>

                    {/* Laptop Stand */}
                    <div className="relative h-1">
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coaching Services Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-brand-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-brand-dark mb-3 font-heading">
                    Our Coaching Services
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-brand to-brand-dark mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {visaTypes.map((visa, index) => (
                    <Link
                      key={index}
                      to={`/coaching#${getServiceSlug(visa.name)}`}
                      className="group relative rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                      {/* Background Image */}
                      <div
                        style={{ backgroundImage: `url(${visa.image})` }}
                        className="h-32 lg:h-36 bg-cover bg-center relative"
                      >
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-300"></div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                          <h3 className="font-bold text-white text-sm lg:text-base text-center mb-2 font-heading drop-shadow-lg">
                            {visa.name}
                          </h3>
                          <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <FaArrowTrendUp className="text-white w-5 h-5 lg:w-6 lg:h-6 drop-shadow-lg" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
