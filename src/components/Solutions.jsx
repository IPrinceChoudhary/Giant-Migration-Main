import { useState, useEffect } from "react";
import {
  ChevronRight,
  Globe,
  GraduationCap,
  Heart,
  Briefcase,
  Camera,
  Users,
} from "lucide-react";
import family from  "../assets/family-VISA.png"
import business from  "../assets/Business-VISA.png"
import student from  "../assets/student-VISA.png"
import tourist from  "../assets/Tourist-VISA.png"
import visitor from  "../assets/Visitor-VISA.png"
import work from  "../assets/work-VISA.png"

const Solutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const visaTypes = [
    {
      title: "Business Visa",
      icon: <Briefcase className="w-8 h-8" />,
      description:
        "Launch your entrepreneurial dreams with comprehensive business visa solutions for global markets.",
      color: "from-brand to-brand-200",
      delay: "delay-100",
      img: business
    },
    {
      title: "Student Visa",
      icon: <GraduationCap className="w-8 h-8" />,
      description:
        "Unlock world-class education opportunities with our expert student visa guidance and support.",
      color: "from-brand-dark to-brand",
      delay: "delay-200",
      img: student
    },
    {
      title: "Family Visa",
      icon: <Heart className="w-8 h-8" />,
      description:
        "Reunite with loved ones through our dedicated family visa services and personalized assistance.",
      color: "from-maroon to-maroon-200",
      delay: "delay-300",
      img: family
    },
    {
      title: "Working Visa",
      icon: <Globe className="w-8 h-8" />,
      description:
        "Advance your career globally with our comprehensive work permit and employment visa solutions.",
      color: "from-brand-dark to-maroon",
      delay: "delay-400",
      img: work
    },
    {
      title: "Tourist Visa",
      icon: <Camera className="w-8 h-8" />,
      description:
        "Explore the world hassle-free with our efficient tourist visa processing and travel guidance.",
      color: "from-brand-200 to-brand-300",
      delay: "delay-500",
      img: tourist
    },
    {
      title: "Visitor Visa",
      icon: <Users className="w-8 h-8" />,
      description:
        "Connect across borders with our specialized visitor visa services for temporary stays.",
      color: "from-maroon-dark to-maroon",
      delay: "delay-600",
      img: visitor
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-maroon-dark to-maroon relative overflow-hidden font-body">
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1
            className="text-3xl lg:text-4xl mb-4 
               bg-gradient-to-r from-brand-50 via-maroon to-brand-50
               bg-[length:200%_200%] bg-clip-text text-transparent 
               font-heading font-bold 
               animate-gradient-x"
          >
            End-to-End Visa Solutions Tailored for You
          </h1>

          <div
            className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-lg text-brand-50 leading-relaxed">
              At Countrywide Visas, we provide comprehensive immigration
              services designed to meet the evolving needs of Indian citizens
              looking to build a brighter future abroad. Whether you're aiming
              for Permanent Residency (PR), seeking a work permit in Canada,
              pursuing higher education in Germany, or exploring business
              migration opportunities, our team of experts ensures that every
              step of your journey is seamless, transparent, and successful.
            </p>
          </div>
        </div>

        {/* Visa Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaTypes.map((visa, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              } ${visa.delay}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative group h-100 bg-surface backdrop-blur-sm rounded-2xl border border-brand-50 overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-brand-50 cursor-pointer ${
                  hoveredCard === index
                    ? "shadow-2xl shadow-brand-200/25"
                    : "shadow-lg"
                }`}
              >
                {/* Image Placeholder */}
                <div
                  className={`h-50 bg-gradient-to-r ${visa.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <img src={visa.img} alt="visa image" className="w-full h-full" />
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-700 skew-x-12"></div>
                </div>

                <div className="p-6 h-48 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-text-dark mb-3 group-hover:text-brand transition-colors duration-300">
                      {visa.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed group-hover:text-text transition-colors duration-300">
                      {visa.description}
                    </p>
                  </div>

                  <div className="flex items-center text-brand group-hover:text-brand-200 transition-all duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ChevronRight
                      className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                        hoveredCard === index ? "translate-x-2" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${visa.color} opacity-10`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
