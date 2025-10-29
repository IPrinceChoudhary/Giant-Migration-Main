const studyDestinations = {
  australia: {
    country: "Australia",
    flag: "🇦🇺",
    tagline: "World-Class Education Down Under",
    heroImage: "/api/placeholder/1200/600",
    description: "Australia offers world-renowned education with a perfect blend of academic excellence, multicultural environment, and exceptional quality of life. Home to 7 universities in the world's top 100, Australia provides cutting-edge research opportunities and globally recognized qualifications.",
    whyStudy: [
      {
        title: "Top-Ranked Universities",
        description: "7 Australian universities rank in the world's top 100, offering exceptional education quality and research opportunities.",
        icon: "university"
      },
      {
        title: "Post-Study Work Rights",
        description: "Graduate with 2-4 years post-study work visa opportunities, providing valuable international work experience.",
        icon: "briefcase"
      },
      {
        title: "Multicultural Environment",
        description: "Study alongside students from 195+ countries in one of the world's most welcoming and diverse nations.",
        icon: "globe"
      },
      {
        title: "High Quality of Life",
        description: "Six Australian cities consistently rank in the world's top 50 most liveable cities with excellent healthcare and safety.",
        icon: "heart"
      },
      {
        title: "Work While Studying",
        description: "Students can work up to 48 hours per fortnight during studies and full-time during breaks.",
        icon: "clock"
      },
      {
        title: "Pathway to PR",
        description: "Clear pathways to permanent residency for international students after graduation.",
        icon: "flag"
      }
    ],
    topUniversities: [
      {
        name: "University of Melbourne",
        ranking: "#14 QS World Rankings 2024",
        location: "Melbourne, Victoria",
        specializations: ["Business", "Engineering", "Medicine", "Arts"]
      },
      {
        name: "University of Sydney",
        ranking: "#19 QS World Rankings 2024",
        location: "Sydney, New South Wales",
        specializations: ["Law", "Medicine", "Engineering", "Business"]
      },
      {
        name: "Australian National University",
        ranking: "#34 QS World Rankings 2024",
        location: "Canberra, ACT",
        specializations: ["Public Policy", "International Relations", "Sciences"]
      },
      {
        name: "University of Queensland",
        ranking: "#43 QS World Rankings 2024",
        location: "Brisbane, Queensland",
        specializations: ["Biotechnology", "Environmental Sciences", "Mining Engineering"]
      },
      {
        name: "Monash University",
        ranking: "#42 QS World Rankings 2024",
        location: "Melbourne, Victoria",
        specializations: ["Pharmacy", "Engineering", "Business", "Education"]
      },
      {
        name: "University of New South Wales",
        ranking: "#45 QS World Rankings 2024",
        location: "Sydney, New South Wales",
        specializations: ["Engineering", "Business", "Law", "Medicine"]
      }
    ],
    popularCourses: [
      "Business & Management",
      "Engineering & Technology",
      "Health & Medicine",
      "Information Technology",
      "Accounting & Finance",
      "Nursing",
      "Architecture",
      "Hospitality & Tourism"
    ],
    admissionRequirements: {
      undergraduate: [
        "High School Diploma with 65%+ average",
        "IELTS 6.0-6.5 (or equivalent: TOEFL 60-79, PTE 50-58)",
        "Foundation/Diploma pathway available",
        "SAT scores (optional for some universities)"
      ],
      postgraduate: [
        "Bachelor's degree with 60%+ average",
        "IELTS 6.5-7.0 (or equivalent: TOEFL 79-100, PTE 58-65)",
        "Relevant work experience (for some programs)",
        "GMAT/GRE (for specific MBA/Master's programs)"
      ]
    },
    costOfLiving: {
      tuition: {
        undergraduate: "$20,000 - $45,000 AUD per year",
        postgraduate: "$22,000 - $50,000 AUD per year",
        doctoral: "$18,000 - $42,000 AUD per year"
      },
      livingExpenses: {
        accommodation: "$200 - $500 per week",
        food: "$80 - $200 per week",
        transportation: "$30 - $60 per week",
        utilities: "$35 - $50 per week",
        total: "$20,000 - $27,000 AUD per year"
      }
    },
    visaInformation: {
      type: "Subclass 500 - Student Visa",
      duration: "Course duration + 1-2 months",
      workRights: "48 hours per fortnight during term, unlimited during breaks",
      processingTime: "4-6 weeks",
      cost: "$710 AUD",
      requirements: [
        "Confirmation of Enrollment (CoE)",
        "Genuine Temporary Entrant (GTE) statement",
        "Financial proof (tuition + living expenses)",
        "English proficiency test results",
        "Health insurance (OSHC)",
        "Health examination",
        "Character requirements"
      ]
    },
    postStudyWork: {
      duration: "2-4 years depending on qualification",
      visaType: "Temporary Graduate Visa (subclass 485)",
      streams: [
        {
          name: "Graduate Work Stream",
          duration: "18 months",
          eligibility: "Completed qualification related to occupation on skilled occupation list"
        },
        {
          name: "Post-Study Work Stream",
          duration: "2-4 years",
          eligibility: "Bachelor: 2 years, Master: 3 years, PhD: 4 years"
        }
      ]
    },
    intakes: [
      {
        name: "Semester 1 (Main Intake)",
        months: "February - March",
        deadline: "October - November (previous year)"
      },
      {
        name: "Semester 2",
        months: "July - August",
        deadline: "April - May"
      },
      {
        name: "Trimester/Short Courses",
        months: "November",
        deadline: "September"
      }
    ],
    scholarships: [
      {
        name: "Australia Awards Scholarships",
        value: "Full tuition + living allowance",
        eligibility: "Outstanding international students from developing countries"
      },
      {
        name: "Destination Australia Scholarship",
        value: "$15,000 AUD per year",
        eligibility: "Students studying in regional Australia"
      },
      {
        name: "University-specific Scholarships",
        value: "10-50% tuition fee waiver",
        eligibility: "Merit-based, varies by institution"
      },
      {
        name: "Research Training Program (RTP)",
        value: "Full tuition + stipend",
        eligibility: "Research degree students"
      }
    ],
    cities: [
      {
        name: "Melbourne",
        description: "Cultural capital with vibrant arts scene and top universities",
        population: "5.2 million",
        climate: "Temperate, four distinct seasons"
      },
      {
        name: "Sydney",
        description: "Iconic harbor city with world-class beaches and institutions",
        population: "5.3 million",
        climate: "Warm temperate, mild winters"
      },
      {
        name: "Brisbane",
        description: "Sunny city with affordable living and growing education sector",
        population: "2.6 million",
        climate: "Subtropical, warm year-round"
      },
      {
        name: "Perth",
        description: "Beautiful coastal city with excellent quality of life",
        population: "2.1 million",
        climate: "Mediterranean, hot dry summers"
      }
    ],
    faqs: [
      {
        question: "Can I work while studying in Australia?",
        answer: "Yes, international students on a valid student visa can work up to 48 hours per fortnight during semester and unlimited hours during scheduled breaks. This helps cover living expenses and gain valuable work experience."
      },
      {
        question: "What is the cost of studying in Australia?",
        answer: "Tuition fees range from AUD $20,000 to $45,000 per year for undergraduate programs and AUD $22,000 to $50,000 for postgraduate programs. Living expenses are approximately AUD $20,000-27,000 per year."
      },
      {
        question: "How long does it take to get an Australian student visa?",
        answer: "The average processing time for an Australian student visa (subclass 500) is 4-6 weeks. However, it can vary based on your country of origin and completeness of documentation."
      },
      {
        question: "Can I stay in Australia after completing my studies?",
        answer: "Yes, graduates can apply for the Temporary Graduate visa (subclass 485) which allows you to stay and work in Australia for 2-4 years depending on your qualification level."
      },
      {
        question: "What are the English language requirements?",
        answer: "Most universities require IELTS 6.0-6.5 for undergraduate and 6.5-7.0 for postgraduate programs. Equivalent scores in TOEFL, PTE, or Cambridge English are also accepted."
      },
      {
        question: "Is health insurance mandatory?",
        answer: "Yes, all international students must have Overseas Student Health Cover (OSHC) for the entire duration of their stay in Australia. It costs approximately AUD $450-600 per year."
      }
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        course: "Master of Business Administration",
        university: "University of Melbourne",
        image: "/api/placeholder/100/100",
        text: "Studying in Australia was the best decision of my life. The quality of education, multicultural environment, and post-study work opportunities helped me build a successful international career.",
        rating: 5
      },
      {
        name: "Rahul Verma",
        course: "Bachelor of Engineering",
        university: "UNSW Sydney",
        image: "/api/placeholder/100/100",
        text: "The practical approach to learning and industry connections at UNSW prepared me perfectly for my career. The student support services and work opportunities made my experience truly enriching.",
        rating: 5
      }
    ]
  },
  canada: {
    country: "Canada",
    flag: "🇨🇦",
    tagline: "Study in the Land of Opportunities",
    heroImage: "/api/placeholder/1200/600",
    description: "Canada is renowned for its world-class education system, welcoming immigration policies, and exceptional quality of life. With affordable tuition fees, post-graduation work permits, and clear pathways to permanent residency, Canada is the top choice for international students seeking both education and immigration opportunities.",
    whyStudy: [
      {
        title: "Affordable Quality Education",
        description: "Lower tuition fees compared to US/UK with same high-quality education standards and globally recognized degrees.",
        icon: "dollar"
      },
      {
        title: "Post-Graduation Work Permit",
        description: "Work in Canada for up to 3 years after graduation with an open work permit, no job offer required.",
        icon: "briefcase"
      },
      {
        title: "Pathway to PR",
        description: "Clear immigration pathways through Express Entry, PNP, and Canadian Experience Class for international graduates.",
        icon: "flag"
      },
      {
        title: "Safe & Welcoming",
        description: "One of the world's safest countries with a welcoming attitude towards international students and immigrants.",
        icon: "shield"
      },
      {
        title: "Work While Studying",
        description: "Work up to 20 hours per week during studies and full-time during breaks without separate work permit.",
        icon: "clock"
      },
      {
        title: "Spouse & Family Benefits",
        description: "Spouse can obtain open work permit, and children can attend school free of charge.",
        icon: "heart"
      }
    ],
    topUniversities: [
      {
        name: "University of Toronto",
        ranking: "#21 QS World Rankings 2024",
        location: "Toronto, Ontario",
        specializations: ["Computer Science", "Engineering", "Business", "Medicine"]
      },
      {
        name: "University of British Columbia",
        ranking: "#34 QS World Rankings 2024",
        location: "Vancouver, British Columbia",
        specializations: ["Business", "Engineering", "Sciences", "Arts"]
      },
      {
        name: "McGill University",
        ranking: "#31 QS World Rankings 2024",
        location: "Montreal, Quebec",
        specializations: ["Medicine", "Law", "Engineering", "Sciences"]
      },
      {
        name: "University of Alberta",
        ranking: "#111 QS World Rankings 2024",
        location: "Edmonton, Alberta",
        specializations: ["Engineering", "Business", "Health Sciences", "AI"]
      },
      {
        name: "McMaster University",
        ranking: "#152 QS World Rankings 2024",
        location: "Hamilton, Ontario",
        specializations: ["Health Sciences", "Engineering", "Business"]
      },
      {
        name: "University of Waterloo",
        ranking: "#112 QS World Rankings 2024",
        location: "Waterloo, Ontario",
        specializations: ["Computer Science", "Engineering", "Mathematics", "Co-op Programs"]
      }
    ],
    popularCourses: [
      "Computer Science & IT",
      "Business Administration",
      "Engineering",
      "Healthcare & Nursing",
      "Data Science & AI",
      "Accounting & Finance",
      "Hospitality Management",
      "Environmental Sciences"
    ],
    admissionRequirements: {
      undergraduate: [
        "High School Diploma with 65-75%+ average",
        "IELTS 6.5 overall (no band below 6.0)",
        "TOEFL iBT 80-90 or equivalent",
        "Some programs require specific prerequisite courses"
      ],
      postgraduate: [
        "Bachelor's degree with 65-75%+ average (3.0+ GPA)",
        "IELTS 6.5-7.0 (no band below 6.0-6.5)",
        "TOEFL iBT 90-100 or equivalent",
        "GRE/GMAT (required for some programs)",
        "Letters of recommendation and SOP"
      ]
    },
    costOfLiving: {
      tuition: {
        undergraduate: "$15,000 - $35,000 CAD per year",
        postgraduate: "$18,000 - $40,000 CAD per year",
        doctoral: "$7,000 - $25,000 CAD per year"
      },
      livingExpenses: {
        accommodation: "$600 - $1,500 per month",
        food: "$250 - $400 per month",
        transportation: "$80 - $150 per month",
        utilities: "$100 - $200 per month",
        total: "$12,000 - $20,000 CAD per year"
      }
    },
    visaInformation: {
      type: "Study Permit",
      duration: "Course duration + 90 days",
      workRights: "20 hours per week during studies, full-time during breaks",
      processingTime: "4-8 weeks (varies by country)",
      cost: "$150 CAD",
      requirements: [
        "Letter of Acceptance from DLI",
        "Proof of financial support ($10,000 CAD + tuition)",
        "Statement of Purpose",
        "Language proficiency test results",
        "Police clearance certificate",
        "Medical examination (if required)",
        "Biometrics ($85 CAD)"
      ]
    },
    postStudyWork: {
      duration: "Up to 3 years depending on program length",
      visaType: "Post-Graduation Work Permit (PGWP)",
      streams: [
        {
          name: "8 months to 2 years program",
          duration: "Same as program length",
          eligibility: "Completed eligible DLI program"
        },
        {
          name: "2+ years program",
          duration: "3 years",
          eligibility: "Completed eligible DLI program of 2+ years"
        }
      ]
    },
    intakes: [
      {
        name: "Fall Intake (Main)",
        months: "September",
        deadline: "January - March"
      },
      {
        name: "Winter Intake",
        months: "January",
        deadline: "September - October (previous year)"
      },
      {
        name: "Summer Intake",
        months: "May",
        deadline: "November - December (previous year)"
      }
    ],
    scholarships: [
      {
        name: "Vanier Canada Graduate Scholarships",
        value: "$50,000 CAD per year for 3 years",
        eligibility: "PhD students with academic excellence"
      },
      {
        name: "Ontario Graduate Scholarship",
        value: "$15,000 CAD per year",
        eligibility: "Graduate students in Ontario universities"
      },
      {
        name: "University-specific Scholarships",
        value: "$5,000 - $30,000 CAD",
        eligibility: "Merit-based, varies by institution"
      },
      {
        name: "International Student Scholarships",
        value: "$1,000 - $10,000 CAD",
        eligibility: "Various criteria, check individual universities"
      }
    ],
    cities: [
      {
        name: "Toronto",
        description: "Canada's largest city and economic hub with diverse opportunities",
        population: "6.2 million",
        climate: "Four distinct seasons, humid continental"
      },
      {
        name: "Vancouver",
        description: "Beautiful coastal city with mild climate and vibrant culture",
        population: "2.6 million",
        climate: "Mild oceanic, warm summers, mild winters"
      },
      {
        name: "Montreal",
        description: "Bilingual city with European charm and affordable living",
        population: "4.3 million",
        climate: "Four seasons, cold winters, warm summers"
      },
      {
        name: "Ottawa",
        description: "Capital city with government opportunities and bilingual advantage",
        population: "1.4 million",
        climate: "Four seasons, cold winters, warm summers"
      }
    ],
    faqs: [
      {
        question: "Can I work while studying in Canada?",
        answer: "Yes, international students with a valid study permit can work up to 20 hours per week during regular academic sessions and full-time during scheduled breaks without needing a separate work permit."
      },
      {
        question: "How much does it cost to study in Canada?",
        answer: "Tuition fees range from CAD $15,000 to $35,000 per year for undergraduate programs and CAD $18,000 to $40,000 for postgraduate programs. Living expenses are approximately CAD $12,000-20,000 per year."
      },
      {
        question: "Can I get permanent residency after studying in Canada?",
        answer: "Yes, Canada offers multiple PR pathways for international graduates including Express Entry (Canadian Experience Class), Provincial Nominee Programs, and Quebec Experience Program. Having Canadian education and work experience significantly improves your chances."
      },
      {
        question: "How long is the Post-Graduation Work Permit valid?",
        answer: "The PGWP is valid for the same length as your study program, up to a maximum of 3 years. For programs less than 2 years, the PGWP matches the program length. For programs 2+ years, you get a 3-year PGWP."
      },
      {
        question: "Can my spouse work while I study in Canada?",
        answer: "Yes, if you're enrolled in a full-time program at a designated learning institution, your spouse/common-law partner can apply for an open work permit and work full-time in Canada."
      },
      {
        question: "What is a DLI?",
        answer: "A Designated Learning Institution (DLI) is a school approved by the Canadian government to host international students. You must have a letter of acceptance from a DLI to apply for a study permit."
      }
    ],
    testimonials: [
      {
        name: "Amit Patel",
        course: "Master of Computer Science",
        university: "University of Toronto",
        image: "/api/placeholder/100/100",
        text: "Canada exceeded all my expectations. The education quality is world-class, and the clear pathway to PR made my decision easy. Now I'm a permanent resident with a great tech job in Toronto.",
        rating: 5
      },
      {
        name: "Sneha Reddy",
        course: "MBA",
        university: "University of British Columbia",
        image: "/api/placeholder/100/100",
        text: "Studying at UBC was life-changing. The co-op program gave me real industry experience, and the post-graduation work permit allowed me to gain Canadian experience. Highly recommended!",
        rating: 5
      }
    ]
  },
  usa: {
    country: "United States",
    flag: "🇺🇸",
    tagline: "Home to World's Top Universities",
    heroImage: "/api/placeholder/1200/600",
    description: "The United States hosts the world's largest international student population and is home to many of the top-ranked universities globally. With cutting-edge research facilities, diverse academic programs, and unparalleled career opportunities, the USA offers an education that opens doors worldwide.",
    whyStudy: [
      {
        title: "World's Best Universities",
        description: "Home to 30+ universities in the world's top 100, offering unmatched academic excellence and research opportunities.",
        icon: "university"
      },
      {
        title: "Flexible Education System",
        description: "Choose from thousands of programs with flexibility to explore different subjects before declaring a major.",
        icon: "book"
      },
      {
        title: "Optional Practical Training",
        description: "Work in the US for 12-36 months after graduation through OPT, gaining valuable international experience.",
        icon: "briefcase"
      },
      {
        title: "Research & Innovation Hub",
        description: "Access to cutting-edge research facilities, leading professors, and opportunities to work on groundbreaking projects.",
        icon: "lightbulb"
      },
      {
        title: "Campus Life & Diversity",
        description: "Experience vibrant campus culture with students from every corner of the world and countless extracurricular activities.",
        icon: "globe"
      },
      {
        title: "Career Opportunities",
        description: "Access to world's leading companies, strong alumni networks, and excellent internship opportunities.",
        icon: "rocket"
      }
    ],
    topUniversities: [
      {
        name: "Massachusetts Institute of Technology",
        ranking: "#1 QS World Rankings 2024",
        location: "Cambridge, Massachusetts",
        specializations: ["Engineering", "Computer Science", "Physics", "Economics"]
      },
      {
        name: "Stanford University",
        ranking: "#5 QS World Rankings 2024",
        location: "Stanford, California",
        specializations: ["Computer Science", "Engineering", "Business", "Medicine"]
      },
      {
        name: "Harvard University",
        ranking: "#4 QS World Rankings 2024",
        location: "Cambridge, Massachusetts",
        specializations: ["Law", "Business", "Medicine", "Arts & Sciences"]
      },
      {
        name: "California Institute of Technology",
        ranking: "#15 QS World Rankings 2024",
        location: "Pasadena, California",
        specializations: ["Engineering", "Physics", "Chemistry", "Space Sciences"]
      },
      {
        name: "University of California, Berkeley",
        ranking: "#10 QS World Rankings 2024",
        location: "Berkeley, California",
        specializations: ["Engineering", "Computer Science", "Business", "Law"]
      },
      {
        name: "Carnegie Mellon University",
        ranking: "#52 QS World Rankings 2024",
        location: "Pittsburgh, Pennsylvania",
        specializations: ["Computer Science", "Robotics", "Engineering", "Business"]
      }
    ],
    popularCourses: [
      "Computer Science & Engineering",
      "Business Administration (MBA)",
      "Data Science & Analytics",
      "Artificial Intelligence & Machine Learning",
      "Electrical Engineering",
      "Biotechnology",
      "Finance & Economics",
      "Public Health"
    ],
    admissionRequirements: {
      undergraduate: [
        "High School Diploma with strong GPA (3.0+)",
        "SAT (1200-1500) or ACT (25-35) scores",
        "TOEFL 80-100 or IELTS 6.5-7.5",
        "Essays and personal statements",
        "Letters of recommendation",
        "Extracurricular activities and achievements"
      ],
      postgraduate: [
        "Bachelor's degree with 3.0+ GPA",
        "GRE (310-330) or GMAT (650-750) for most programs",
        "TOEFL 90-110 or IELTS 7.0-8.0",
        "Statement of Purpose",
        "Letters of recommendation (2-3)",
        "Resume/CV with relevant experience"
      ]
    },
    costOfLiving: {
      tuition: {
        undergraduate: "$25,000 - $55,000 USD per year",
        postgraduate: "$30,000 - $70,000 USD per year",
        doctoral: "$25,000 - $60,000 USD per year (often funded)"
      },
      livingExpenses: {
        accommodation: "$800 - $2,000 per month",
        food: "$300 - $600 per month",
        transportation: "$100 - $200 per month",
        utilities: "$100 - $200 per month",
        total: "$15,000 - $30,000 USD per year"
      }
    },
    visaInformation: {
      type: "F-1 Student Visa",
      duration: "Duration of studies + 60 days",
      workRights: "On-campus work allowed, off-campus through CPT during studies",
      processingTime: "2-4 weeks",
      cost: "$185 USD (SEVIS) + $160 USD (Visa fee)",
      requirements: [
        "Form I-20 from SEVP-approved school",
        "Proof of financial support",
        "Valid passport (6+ months validity)",
        "SEVIS fee payment receipt",
        "DS-160 confirmation page",
        "Visa interview appointment",
        "Academic transcripts and test scores"
      ]
    },
    postStudyWork: {
      duration: "12 months (36 months for STEM)",
      visaType: "Optional Practical Training (OPT)",
      streams: [
        {
          name: "Standard OPT",
          duration: "12 months",
          eligibility: "All F-1 students who completed degree"
        },
        {
          name: "STEM OPT Extension",
          duration: "Additional 24 months (total 36 months)",
          eligibility: "Students with STEM degree from approved list"
        }
      ]
    },
    intakes: [
      {
        name: "Fall Intake (Main)",
        months: "August - September",
        deadline: "December - February (previous year)"
      },
      {
        name: "Spring Intake",
        months: "January",
        deadline: "September - October (previous year)"
      },
      {
        name: "Summer Intake",
        months: "May - June",
        deadline: "February - March (limited programs)"
      }
    ],
    scholarships: [
      {
        name: "Fulbright Foreign Student Program",
        value: "Full tuition + living expenses",
        eligibility: "Outstanding international students from 160+ countries"
      },
      {
        name: "University Merit Scholarships",
        value: "$5,000 - $30,000 USD per year",
        eligibility: "Based on academic excellence and achievements"
      },
      {
        name: "AAUW International Fellowships",
        value: "$18,000 - $30,000 USD",
        eligibility: "Women pursuing graduate/postgraduate studies"
      },
      {
        name: "Graduate Assistantships",
        value: "Full tuition waiver + stipend",
        eligibility: "Graduate students working as teaching/research assistants"
      }
    ],
    cities: [
      {
        name: "New York City",
        description: "Global business and cultural hub with endless opportunities",
        population: "8.3 million",
        climate: "Four seasons, humid subtropical"
      },
      {
        name: "San Francisco/Bay Area",
        description: "Tech capital with proximity to Silicon Valley companies",
        population: "4.7 million (metro)",
        climate: "Mediterranean, mild year-round"
      },
      {
        name: "Boston",
        description: "Academic hub with highest concentration of universities",
        population: "4.9 million (metro)",
        climate: "Four seasons, humid continental"
      },
      {
        name: "Los Angeles",
        description: "Entertainment capital with diverse industries and culture",
        population: "13.2 million (metro)",
        climate: "Mediterranean, warm and dry"
      }
    ],
    faqs: [
      {
        question: "Can I work while studying in the USA?",
        answer: "F-1 students can work on-campus up to 20 hours per week during the academic year and full-time during breaks. Off-campus work is allowed through Curricular Practical Training (CPT) for internships related to your field of study."
      },
      {
        question: "How much does it cost to study in the USA?",
        answer: "Tuition fees range from $25,000 to $55,000 per year for undergraduate programs and $30,000 to $70,000 for graduate programs. Living expenses vary by location but average $15,000-30,000 per year."
      },
      {
        question: "What is OPT and how long can I work after graduation?",
        answer: "Optional Practical Training (OPT) allows F-1 students to work in their field of study for 12 months after graduation. STEM degree holders can extend this for an additional 24 months, totaling 36 months."
      },
      {
        question: "Do I need SAT/GRE for admission?",
        answer: "Undergraduate programs typically require SAT or ACT scores. Graduate programs often require GRE or GMAT. However, some universities have test-optional policies. Check individual university requirements."
      },
      {
        question: "How difficult is it to get a US student visa?",
        answer: "US student visas have high approval rates if you demonstrate strong academic credentials, sufficient financial support, and genuine intent to return home after studies. Proper documentation and interview preparation are key."
      },
      {
        question: "Can I apply for a green card after studying in the USA?",
        answer: "While there's no direct pathway from student visa to green card, you can transition through employment-based visas (H-1B) after OPT. Your employer can then sponsor you for permanent residency if eligible."
      }
    ],
    testimonials: [
      {
        name: "Arjun Kumar",
        course: "Master of Science in Computer Science",
        university: "Stanford University",
        image: "/api/placeholder/100/100",
        text: "Stanford provided me with world-class education and connections to Silicon Valley. The OPT allowed me to work at a top tech company, and I'm now on track for my H-1B visa. Best investment in my future!",
        rating: 5
      },
      {
        name: "Meera Nair",
        course: "MBA",
        university: "Harvard Business School",
        image: "/api/placeholder/100/100",
        text: "The MBA from Harvard opened doors I never imagined. The network, learning experience, and career opportunities are unmatched. Yes, it's expensive, but the return on investment is incredible.",
        rating: 5
      }
    ]
  }
};

// Export for use in modules (ES6)
export default studyDestinations;