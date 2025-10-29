import { motion } from "motion/react";
import Stats from "./ui/Hero/Stats";
import TypewriterEffect from "./ui/Hero/TypewriterEffect";
import Features from "./ui/Hero/Features";
import Button from "./ui/Buttons";
import { Link } from "react-router-dom";

// Main Hero Component
const HeroComponent = () => {
  const typewriterTexts = [
    "Unlock Global Opportunities with Business Visa",
    "Navigate Investment Immigration with Expert Guidance",
    "Elevate Your Expertise with Skilled Worker Visa",
    "Transform Your Future with Professional Immigration",
  ];

  return (
    <div className="relative overflow-hidden lg:h-[60vw]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 h-full bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center bg-no-repeat">
        <div className="absolute bg-black inset-0 opacity-40"></div>
      </div>

      {/* Content with Framer Motion Animation */}
      <motion.div
        className="relative z-10 my-15 lg:my-0 lg:w-3/4 mx-auto lg:h-full lg:flex lg:items-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="m-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid gap-12 items-center">
            <div className="text-white">
              {/* Main Heading with Typewriter */}
              <h1 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold leading-tight mb-2 sm:mb-6 h-18 lg:text-center">
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

              <div className="w-full h-35 sm:h-15 flex sm:flex-row sm:justify-evenly flex-col items-center justify-around">
              <Link to='/contact'>
                <Button text="Book Free Consultation" variant="get" />
              </Link>
              <Link to='/testimonials'>
                <Button text="Watch Success Stories" variant="borderDark" />
              </Link>
              </div>

              <Stats />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroComponent;
