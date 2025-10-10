// AboutUs.jsx
import { useState, useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Button from "./ui/Buttons";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 bg-[#FAF8F7] overflow-hidden"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading section  */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl lg:text-4xl mb-4 
               bg-gradient-to-r from-brand via-brand-300 to-brand
               bg-[length:200%_200%] bg-clip-text text-transparent 
               font-heading font-bold 
               animate-gradient-x"
          >
            The best immigration consultants based in Qatar
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#DCBDAD] to-[#C28C70] rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[#64361E] bg-opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-[#64361E]">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 opacity-60"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-lg font-medium font-montserrat">
                      Image Placeholder
                    </p>
                    <p className="text-sm opacity-75 font-inter">
                      Replace with your image
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#A85B33] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#6E2A22] rounded-full opacity-15 blur-2xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Text Content */}
            <div className="mb-8">
              <div
                className="space-y-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--color-text)" }}
                >
                  Giant Migration, top immigration consultants in Doha, Qatar
                  carefully helps each client to go this way from the very first
                  steps to full adaptation in a new country. Giant Migration was
                  established over a decade ago in Qatar, and during this time,
                  we have accumulated rich experience that helps our customers
                  to make their move comfortable without hassle.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 group">
                    <div
                      className="w-2 h-2 rounded-full mt-3 transition-all duration-300 group-hover:scale-150"
                      style={{ background: "var(--color-brand)" }}
                    ></div>
                    <p
                      className="text-base leading-relaxed transition-all duration-300 group-hover:translate-x-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      While for some, it might be a career shaping step.
                      Whatever may be your reason for immigrating to a new
                      country, you will need a trusted Immigration consultant in
                      Qatar who can help you make the big shift. Giant Migration
                      is a licensed immigration consultant in Qatar, and 7 other
                      countries with strong immigration programs to help our
                      clients based in Qatar.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 group">
                    <div
                      className="w-2 h-2 rounded-full mt-3 transition-all duration-300 group-hover:scale-150"
                      style={{ background: "var(--color-brand)" }}
                    ></div>
                    <p
                      className="text-base leading-relaxed transition-all duration-300 group-hover:translate-x-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      We have a dedicated team of professionals who are
                      well-versed with their skills and help clients uphold
                      their commitment and consistently extend a very highly
                      specialized service basis to the specific needs of the
                      client. We offer our assistance to help clients migrate to
                      the best Canada immigration consultants in Qatar,
                      Australia, and New Zealand also for all kind of visa
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons Section */}
            <div className="flex flex-col lg:flex-row justify-center sm:flex-row gap-4">
              <Button
                text="Know More"
                variant="know"
                icon={FaArrowRight}
                iconPosition="right"
              />
              <Button
                text="Call Us: +974 7765 1191"
                variant="borderLight"
                icon={FaPhoneAlt}
                iconPosition="left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
