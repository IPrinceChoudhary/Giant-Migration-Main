import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Skilled Visa – Canada",
      feedback:
        "Countrywide Visas made my PR process smooth and stress-free. Their transparency and support gave me full confidence throughout the journey.",
    },
    {
      name: "Ayesha Khan",
      role: "Student Visa – Germany",
      feedback:
        "I got my student visa hassle-free! Their guidance on documentation and interview prep was spot on. Highly recommended!",
    },
    {
      name: "Vikram Patel",
      role: "Business Visa – Australia",
      feedback:
        "Professional and reliable service. They understood my business needs and helped me set up everything quickly for my Australia migration.",
    },
  ];

  return (
    <div className="bg-surface relative overflow-hidden font-body py-20">
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
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
            What our Client says
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Hear from the people who trusted us with their migration journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } delay-${(index + 1) * 200}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative group bg-white rounded-2xl border border-brand-50 p-8 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-brand cursor-pointer ${
                  hoveredCard === index ? "shadow-brand-200/30" : ""
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-6 bg-gradient-to-r from-brand to-maroon text-bg p-3 rounded-full shadow-md">
                  <Quote className="w-6 h-6" />
                </div>

                {/* Feedback */}
                <p className="text-text leading-relaxed mb-6">
                  “{testimonial.feedback}”
                </p>

                {/* Author */}
                <div className="border-t border-brand-50 pt-4">
                  <h3 className="text-lg font-heading font-bold text-text-dark group-hover:text-brand transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand to-maroon opacity-5 rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
