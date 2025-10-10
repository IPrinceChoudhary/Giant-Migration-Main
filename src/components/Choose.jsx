import { useState, useEffect } from "react";
import {
  Play,
  CheckCircle,
  Users,
  FileText,
  GraduationCap,
  Globe,
} from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import Button from "./ui/Buttons";
import { FaArrowTrendUp } from "react-icons/fa6";
import c1 from "../assets/coaching-1.jpg";
import c2 from "../assets/coaching-2.jpg";
import c3 from "../assets/coaching-3.jpg";
import c4 from "../assets/coaching-4.jpg";

const Choose = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const advantages = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Free Consultation",
      description: "No hidden cost",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "100% Transparency",
      description: "Complete profile evaluation",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Dedicated Manager",
      description: "Professional case support",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Super Visa",
      description: "Parent visa assistance",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Virtual Classes",
      description: "Online study materials",
    },
    {
      icon: <Play className="w-5 h-5" />,
      title: "Physical Classes",
      description: "On-demand training",
    },
  ];

  const visaTypes = [
    { name: "Citizenship Test", image: c1 },
    { name: "IELTS Coaching", image: c2 },
    { name: "TOEFL Coaching", image: c3 },
    { name: "PTE Coaching", image: c4 },
  ];

  return (
    <div className="bg-gradient-to-br lg:py-20 from-bg via-surface to-brand-50 overflow-hidden">
      <div className="h-full max-w-7xl mx-auto px-6 py-8 flex flex-col">
        {/* Header */}
        <div
          className={`text-center lg:mb-16 mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1
            className="text-3xl lg:text-4xl mb-4 
               bg-gradient-to-r from-maroon-dark via-brand-300 to-maroon-dark
               bg-[length:200%_200%] bg-clip-text text-transparent 
               font-heading font-bold 
               animate-gradient-x"
          >
            Why Choose Us?
          </h1>
          <p className="text-sm text-muted font-body">
            Professional services with complete transparency and dedicated
            support
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
          {/* Left Column - Video */}
          <div
            className={`lg:col-span-1 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="h-full bg-gradient-to-br from-brand-50 to-brand-200 rounded-xl p-3 hover:shadow-lg transition-all duration-500 hover:scale-105 group">
              <div className="relative h-full rounded-lg overflow-hidden bg-black">
                <iframe
                  src="https://www.youtube.com/embed/i67rbcInjrY"
                  title="Immigration Services"
                  className="w-full lg:h-2/3 lg:mt-20"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Middle Column - Advantages */}
          <div
            className={`lg:col-span-1 transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="h-full bg-bg rounded-xl p-4 shadow-lg">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-brand-dark mb-2 font-heading">
                  Client Advantages
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-brand to-brand-dark mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className={`group relative bg-gradient-to-r from-surface to-brand-50 rounded-lg p-3 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-brand to-brand-dark rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {advantage.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-text group-hover:text-brand-dark transition-colors duration-300 truncate font-heading">
                          {advantage.title}
                        </h3>
                        <p className="text-xs text-muted group-hover:text-text transition-colors duration-300 font-body">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visa Types & CTA */}
          <div
            className={`lg:col-span-1 transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="h-full flex flex-col space-y-4">
              {/* Visa Types */}
              <div className="flex-1 grid grid-cols-2 gap-2 p-2 bg-brand-50 rounded-lg">
                {visaTypes.map((visa, index) => (
                  <div                  
                    key={index}
                    style={{ backgroundImage: `url(${visa.image})` }}
                    className="
        group relative rounded-lg p-2 text-center w-35 h-35 sm:w-45 sm:h-45 transition-all duration-300
        cursor-pointer transform hover:scale-105 flex flex-col items-center justify-center
        bg-cover bg-center
      "
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 rounded-lg transition-colors duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <h3 className="font-normal sm:font-bold text-white transition-colors duration-300 text-sm sm:text-md text-center font-heading">
                        {visa.name}
                      </h3>
                      <FaArrowTrendUp className="text-white w-4 sm:w-6 h-4 sm:h-6"/>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-brand-50 to-surface rounded-xl p-4">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-brand-dark mb-2 font-heading">
                    Ready to Start?
                  </h3>
                  <p className="text-text mb-3 text-sm font-body">
                    Free consultation available
                  </p>
                  <Button
                    text="Get Started Today"
                    variant="get"
                    icon={FaArrowRight}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
