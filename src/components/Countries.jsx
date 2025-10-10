import aus from "../assets/australia.png";
import can from "../assets/canada.png";
import eu from "../assets/european-union.png";
import nz from "../assets/new-zealand.png";
import us from "../assets/united-states.png";
import Button from "./ui/Buttons";

// Background images (you can replace with better images if available)
import ausBg from "../assets/aus-bg.webp";
import canBg from "../assets/canada-bg.webp";
import euBg from "../assets/europe-bg.webp";
import nzBg from "../assets/NZ-bg.webp";
import usBg from "../assets/US-bg.webp";

const Countries = () => {
  const countries = [
    {
      name: "Australia",
      flag: aus,
      bg: ausBg,
      description:
        "Experience the land down under with excellent quality of life and diverse opportunities.",
      features: ["Skilled Migration", "Business Visa", "Family Reunion"],
    },
    {
      name: "Canada",
      flag: can,
      bg: canBg,
      description:
        "Join one of the world's most welcoming countries with better healthcare and education.",
      features: ["Express Entry", "Provincial Programs", "Study Permits"],
    },
    {
      name: "Europe",
      flag: eu,
      bg: euBg,
      description:
        "Explore rich culture, history, and opportunities across multiple European nations.",
      features: ["Golden Visa", "Work Permits", "Student Visas"],
    },
    {
      name: "United States",
      flag: us,
      bg: usBg,
      description:
        "Pursue the American dream in the land of endless possibilities and innovation.",
      features: ["EB-5 Program", "Work Visas", "Family Immigration"],
    },
    {
      name: "New Zealand",
      flag: nz,
      bg: nzBg,
      description:
        "Discover breathtaking landscapes and a balanced lifestyle in Middle Earth.",
      features: ["Skilled Migrant", "Investor Visa", "Work to Residence"],
    },
  ];

  return (
    <div className="bg-surface min-h-screen flex items-center justify-center py-8 px-4">
      <div className="max-w-7xl mx-auto w-full m-15">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl lg:text-4xl mb-4 
               bg-gradient-to-r from-maroon-dark via-brand-300 to-maroon-dark
               bg-[length:200%_200%] bg-clip-text text-transparent 
               font-heading font-bold 
               animate-gradient-x"
          >
            Your Global Journey Starts Here
          </h1>

          <p className="text-muted text-lg lg:text-xl max-w-3xl mx-auto font-body">
            Discover world-class immigration opportunities across five premier
            destinations. Let us guide you to your new home.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className={`relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] [transform-style:preserve-3d] rounded-2xl text-center animate-[fadeIn_0.6s_ease-out_forwards] opacity-0 [animation-delay:${
                0.1 * (index + 1)
              }s] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(100,54,30,0.15)] hover:border-brand-200 group shadow-xl`} 
              style={{
                backgroundImage: `url(${country.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>

              {/* Content */}
              <div className="relative z-10 p-6 lg:p-8">
                {/* Flag */}
                <div className="duration-300 ease-in-out mb-4 group-hover:scale-110 flex justify-center">
                  <img
                    src={country.flag}
                    alt="country flag"
                    className="w-15 h-15 lg:w-30 lg:h-30"
                  />
                </div>

                {/* Country Name */}
                <h3 className="text-white font-bold text-xl lg:text-2xl mb-3 font-heading">
                  {country.name}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-sm lg:text-base mb-6 leading-relaxed">
                  {country.description}
                </p>

                {/* Features */}
                <div className="mb-8 flex justify-center">
                  <div className="grid grid-cols-1 gap-3">
                    {country.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="w-50 flex items-center justify-center gap-3 p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 transition-all duration-300 group-hover:bg-white/30 group-hover:border-white/50 group-hover:shadow-sm"
                        style={{
                          transitionDelay: `${idx * 75}ms`,
                        }}
                      >
                        <span className="text-white text-xs sm:text-sm font-medium leading-tight transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button text="Explore Options" variant="get" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Countries;
