import Stats from "./ui/Hero/Stats";
import TypewriterEffect from "./ui/Hero/TypewriterEffect";
import Features from "./ui/Hero/Features";
import Button from "./ui/Buttons";

// Main Hero Component
const HeroComponent = () => {
  const typewriterTexts = [
    "Unlock Global Opportunities with Business Visa",
    "Navigate Investment Immigration with Expert Guidance",
    "Elevate Your Expertise with Skilled Worker Visa",
    "Transform Your Future with Professional Immigration",
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 hero-bg">
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 my-15 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white lg:pr-8">
              {/* Main Heading with Typewriter */}
              <h1 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold leading-tight mb-2 sm:mb-6 h-18">
                <TypewriterEffect
                  texts={typewriterTexts}
                  speed={80}
                  deleteSpeed={40}
                  pauseTime={2500}
                />
              </h1>

              {/* Subtitle */}
              <p className="text-md sm:text-xl text-gray-200 font-body mb-8 leading-snug">
                Expert immigration and visa consulting services to help you
                achieve your global dreams. From business investments to skilled
                worker programs, we guide you every step of the way.
              </p>
              <Features />
              <div className="w-full h-35                                                                        sm:h-15 flex sm:flex-row flex-col items-center justify-around">
                <Button text="Book Free Consultation" variant="get"/>
                <Button text="Watch Success Stories" variant="borderDark"/>
              </div>
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
