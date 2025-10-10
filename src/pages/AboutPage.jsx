import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, Minus, Users, Globe, Award, Clock, MapPin, Mail, Linkedin } from 'lucide-react';

const AboutPage = () => {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({ aboutUs: true });
    }, 100);

    const timer2 = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, team: true }));
    }, 300);

    const timer3 = setTimeout(() => {
      setIsVisible(prev => ({ ...prev, faq: true }));
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Chief Immigration Officer",
      experience: "15+ Years",
      specialization: "Canadian Immigration",
      image: "/api/placeholder/300/300",
      bio: "Expert in Express Entry, Provincial Nominee Programs, and Family Class sponsorship.",
      email: "sarah.j@giantmigration.com",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      position: "Senior Visa Consultant",
      experience: "12+ Years",
      specialization: "Australian Immigration",
      image: "/api/placeholder/300/300",
      bio: "Specialist in SkillSelect, Employer Nomination Scheme, and Business Innovation visas.",
      email: "michael.c@giantmigration.com",
      linkedin: "#"
    },
    {
      name: "Emma Rodriguez",
      position: "European Immigration Expert",
      experience: "10+ Years",
      specialization: "German & EU Immigration",
      image: "/api/placeholder/300/300",
      bio: "Expert in Blue Card, Family Reunification, and EU Long-term Residence permits.",
      email: "emma.r@giantmigration.com",
      linkedin: "#"
    },
    {
      name: "David Thompson",
      position: "Business Immigration Advisor",
      experience: "13+ Years",
      specialization: "Investor & Entrepreneur Visas",
      image: "/api/placeholder/300/300",
      bio: "Specializes in Start-up Visa Program, Self-employed Persons Program, and Investor visas.",
      email: "david.t@giantmigration.com",
      linkedin: "#"
    }
  ];

  const faqs = [
    {
      question: "What immigration programs do you handle?",
      answer: "We specialize in economic immigration programs at federal and provincial levels, family reunification, work permits, study permits, and business immigration for Canada, Australia, Germany, and other countries."
    },
    {
      question: "How long does the immigration process typically take?",
      answer: "Processing times vary by program and country. Express Entry can take 6-8 months, Provincial Nominee Programs 12-18 months, and family sponsorship 12-24 months. We provide detailed timelines for each specific case."
    },
    {
      question: "Do you provide services for rejected applications?",
      answer: "Yes, we offer comprehensive appeal services and can help with reapplications. Our experts analyze rejection reasons and develop strategies to address concerns in new applications."
    },
    {
      question: "What documents do I need for immigration assessment?",
      answer: "Basic documents include passport, education credentials, language test results, work experience letters, and proof of funds. Specific requirements vary by program, and we provide detailed checklists during consultation."
    },
    {
      question: "Can you help with job search and employer matching?",
      answer: "Yes, we assist Canadian, Australian, and German employers with hiring foreign workers and help skilled professionals connect with potential employers through our network."
    },
    {
      question: "What are your consultation fees?",
      answer: "We offer free initial consultations to assess your case. Detailed service fees are provided based on your specific immigration pathway and requirements during the consultation."
    },
    {
      question: "Do you handle student visa applications?",
      answer: "Absolutely! We assist international students with study permits, college/university applications, and provide guidance on pathways from student status to permanent residence."
    },
    {
      question: "How do I know if I'm eligible for immigration?",
      answer: "Eligibility depends on factors like age, education, language skills, work experience, and program-specific criteria. Our free assessment tool and consultation help determine your best options."
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "10,000+", label: "Successful Cases" },
    { icon: <Globe className="w-8 h-8" />, number: "8", label: "Countries" },
    { icon: <Award className="w-8 h-8" />, number: "11+", label: "Years Experience" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Support Available" }
  ];

  const nextSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const customColors = {
    brandDark: '#64361e',
    brand: '#a85b33',
    brand200: '#c28c70',
    brand300: '#dcbdad',
    brand50: '#f1e6e0',
    maroonDark: '#4e140f',
    maroon: '#6e2a22',
    maroon200: '#8f584f',
    text: '#333333',
    textDark: '#222222',
    muted: '#6b6b6b',
    bg: '#ffffff',
    surface: '#faf8f7'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: customColors.bg, fontFamily: 'Inter, sans-serif' }}>
      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: customColors.surface }}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.aboutUs ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-sm uppercase tracking-wider mb-4" style={{ color: customColors.brand, fontFamily: 'Montserrat, sans-serif' }}>
              GET TO KNOW US
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: customColors.textDark, fontFamily: 'Montserrat, sans-serif' }}>
              Leading Visa & Immigration Agency
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8" style={{ color: customColors.brand }}>
              The Best in Visa & Immigration Since 2013
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed" style={{ color: customColors.text }}>
                Giant Migration is a licensed immigration company based in Dubai, UAE and in 7 other countries. Our company specializes in all immigration programs, with the main focus on economic immigration programs at the federal and provincial levels, family reunification, assistance to Canadian, Australian and German employers and foreign workers, international students and foreign entrepreneurs. We also have representatives across Europe and the USA.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: customColors.brand50, color: customColors.brand }}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: customColors.textDark, fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-sm font-medium" style={{ color: customColors.muted }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: customColors.bg }}>
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.team ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: customColors.textDark, fontFamily: 'Montserrat, sans-serif' }}>
              Meet Our Expert Team
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: customColors.text }}>
              Our experienced immigration professionals are here to guide you through every step of your journey.
            </p>
          </div>

          {/* Team Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                      <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                          <div 
                            className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center"
                            style={{ backgroundColor: customColors.brand300 }}
                          >
                            <Users className="w-24 h-24" style={{ color: customColors.brand }} />
                          </div>
                        </div>
                      </div>
                      <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                        <div className="p-8 rounded-2xl" style={{ backgroundColor: customColors.surface }}>
                          <h3 className="text-3xl font-bold mb-2" style={{ color: customColors.textDark, fontFamily: 'Montserrat, sans-serif' }}>
                            {member.name}
                          </h3>
                          <p className="text-xl font-semibold mb-4" style={{ color: customColors.brand }}>
                            {member.position}
                          </p>
                          <div className="flex items-center gap-6 mb-6">
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5" style={{ color: customColors.muted }} />
                              <span className="text-sm" style={{ color: customColors.muted }}>{member.experience}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5" style={{ color: customColors.muted }} />
                              <span className="text-sm" style={{ color: customColors.muted }}>{member.specialization}</span>
                            </div>
                          </div>
                          <p className="text-lg mb-6 leading-relaxed" style={{ color: customColors.text }}>
                            {member.bio}
                          </p>
                          <div className="flex gap-4">
                            <a 
                              href={`mailto:${member.email}`} 
                              className="flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                              style={{ backgroundColor: customColors.brand, color: customColors.bg }}
                            >
                              <Mail className="w-4 h-4" />
                              <span className="text-sm font-medium">Contact</span>
                            </a>
                            <a 
                              href={member.linkedin} 
                              className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 hover:scale-105"
                              style={{ borderColor: customColors.brand, color: customColors.brand }}
                            >
                              <Linkedin className="w-4 h-4" />
                              <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: customColors.brand, color: customColors.bg }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: customColors.brand, color: customColors.bg }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slider Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTeamSlide ? 'scale-125' : 'opacity-50'
                  }`}
                  style={{ backgroundColor: customColors.brand }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: customColors.surface }}>
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: customColors.textDark, fontFamily: 'Montserrat, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg" style={{ color: customColors.text }}>
              Get answers to the most common questions about immigration and visa services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-sm" style={{ backgroundColor: customColors.bg }}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center transition-all duration-300 hover:bg-opacity-80"
                  style={{ backgroundColor: openFAQ === index ? customColors.brand50 : customColors.bg }}
                >
                  <h3 className="text-lg font-semibold pr-8" style={{ color: customColors.textDark, fontFamily: 'Montserrat, sans-serif' }}>
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-6 h-6" style={{ color: customColors.brand }} />
                    ) : (
                      <Plus className="w-6 h-6" style={{ color: customColors.brand }} />
                    )}
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="p-6 pt-0">
                    <p className="leading-relaxed" style={{ color: customColors.text }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: customColors.brand }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: customColors.bg, fontFamily: 'Montserrat, sans-serif' }}>
            Ready to Start Your Immigration Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90" style={{ color: customColors.bg }}>
            Contact our expert team today for a free consultation and personalized immigration strategy.
          </p>
          <button 
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: customColors.bg, color: customColors.brand }}
          >
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;