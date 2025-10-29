// components/About/Content.jsx
import { FaArrowRight } from "react-icons/fa";
import Button from "../../ui/Buttons";
import { motion } from "framer-motion";
import { useCountry } from "../../../context/CountryContext";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Content = () => {
  const { currentCountry } = useCountry();
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Dynamically import country-specific content
    const loadContent = async () => {
      try {
        const contentModule = await import(
          `../../../utils/countryContent/${currentCountry.code}Content.json`
        );
        setContent(contentModule.default.about);
      } catch (error) {
        console.error("Error loading country content:", error);
      }
    };

    loadContent();
  }, [currentCountry]);

  if (!content) return <div>Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mb-8">
        <div className="space-y-6" style={{ fontFamily: "var(--font-body)" }}>
          <p
            className="text-lg leading-relaxed font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            {content.mainText}
          </p>

          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text)" }}
          >
            {content.founderText}
          </p>

          <div className="space-y-4">
            {content.points.map((point, index) => (
              <div key={index} className="flex items-start space-x-3 group">
                <div
                  className="w-2 h-2 rounded-full mt-3 transition-all duration-300 group-hover:scale-150"
                  style={{ background: "var(--color-brand)" }}
                ></div>
                <p
                  className="text-base leading-relaxed transition-all duration-300 group-hover:translate-x-2"
                  style={{ color: "var(--color-text)" }}
                >
                  <strong>{point.title}:</strong> {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Buttons Section */}
      <div className="flex flex-col lg:flex-row justify-center sm:flex-row gap-4">
        <Link to='/about'>
          <Button
            text="Know More"
            variant="know"
            icon={FaArrowRight}
            iconPosition="right"
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default Content;
