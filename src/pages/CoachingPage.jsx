// pages/CoachingPage.jsx
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  Star,
  MessageCircle,
  Phone,
  Target,
  FileText,
  Lightbulb,
} from 'lucide-react';

const CoachingPage = () => {
  const location = useLocation();
  const mockInterviewsRef = useRef(null);
  const ieltsRef = useRef(null);
  const toeflRef = useRef(null);
  const pteRef = useRef(null);

  // Scroll to section based on hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const refs = {
          'mock-interviews': mockInterviewsRef,
          'ielts': ieltsRef,
          'toefl': toeflRef,
          'pte': pteRef
        };
        
        const targetRef = refs[hash];
        if (targetRef?.current) {
          targetRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    }
  }, [location]);

  // Coaching services data
  const coachingServices = {
    mockInterviews: {
      id: 'mock-interviews',
      ref: mockInterviewsRef,
      name: 'Mock Interviews',
      icon: '🎤',
      color: '#64361E',
      description: 'Practice visa interviews with our expert consultants and boost your confidence for the actual interview.',
      overview: 'Visa interview preparation is crucial for successful immigration. Our mock interview sessions simulate real visa interview scenarios, helping you practice answering questions confidently and effectively. Led by experienced immigration consultants who understand what visa officers look for.',
      sessions: [
        {
          title: 'Student Visa Interview Prep',
          duration: '45-60 minutes',
          description: 'Practice for F-1, Student Visa (subclass 500), Study Permit interviews'
        },
        {
          title: 'Work Visa Interview Prep',
          duration: '45-60 minutes',
          description: 'Prepare for H-1B, TSS (482), Work Permit interview questions'
        },
        {
          title: 'PR Interview Prep',
          duration: '60 minutes',
          description: 'Practice for permanent residency interview scenarios'
        },
        {
          title: 'Spouse/Partner Visa Prep',
          duration: '60 minutes',
          description: 'Relationship interview preparation with both partners'
        }
      ],
      features: [
        'One-on-one mock interviews with MARA/RCIC consultants',
        'Real visa officer questions and scenarios',
        'Video recording of your responses for self-review',
        'Detailed feedback on body language and communication',
        'Common mistakes and how to avoid them',
        'Country-specific interview preparation (USA, Canada, Australia)',
        'Document verification practice',
        'Post-interview improvement plan'
      ],
      benefits: [
        'Reduce interview anxiety and nervousness',
        'Learn how to answer difficult questions confidently',
        'Understand what visa officers look for',
        'Practice body language and non-verbal communication',
        'Avoid common interview mistakes',
        'Increase your chances of visa approval'
      ],
      stats: [
        { label: 'Success Rate', value: '92%' },
        { label: 'Sessions Conducted', value: '300+' },
        { label: 'Average Duration', value: '60 min' },
        { label: 'Expert Consultants', value: '4' }
      ]
    },
    ielts: {
      id: 'ielts',
      ref: ieltsRef,
      name: 'IELTS Coaching',
      fullName: 'International English Language Testing System',
      icon: '🎓',
      color: '#8B4513',
      description: 'Master the IELTS exam with our expert-led coaching program designed specifically for immigration and study abroad aspirants.',
      overview: 'IELTS is the world\'s most popular English language proficiency test for higher education and global migration. Recognized by over 11,000 organizations worldwide, IELTS is essential for Canadian Express Entry, Australian skilled migration, UK visas, and study permits.',
      modules: [
        {
          title: 'Listening',
          duration: '30 minutes',
          description: 'Four recordings of native English speakers with comprehension questions'
        },
        {
          title: 'Reading',
          duration: '60 minutes',
          description: 'Three long reading passages with varied question types'
        },
        {
          title: 'Writing',
          duration: '60 minutes',
          description: 'Task 1: Describe visual information | Task 2: Essay writing'
        },
        {
          title: 'Speaking',
          duration: '11-14 minutes',
          description: 'Face-to-face conversation with certified examiner'
        }
      ],
      features: [
        'Academic & General Training modules available',
        'Personalized study plans based on your target score',
        'Mock tests with detailed performance analysis',
        'One-on-one speaking practice sessions',
        'Grammar and vocabulary enhancement',
        'Test-taking strategies and time management',
        'Writing correction with band-wise feedback',
        'Flexible online and offline batches'
      ],
      benefits: [
        'Accepted by IRCC for Canadian immigration',
        'Required for Australian skilled migration (subclass 189/190)',
        'Mandatory for UK visa applications',
        'Essential for study permits worldwide',
        'Improves overall English communication skills',
        'Increases Express Entry CRS points'
      ],
      batchInfo: {
        duration: '6-8 weeks',
        classesPerWeek: '4-5 classes',
        batchSize: '10-15 students',
        modes: 'Online & Classroom'
      },
      stats: [
        { label: 'Average Band Score', value: '7.5+' },
        { label: 'Students Coached', value: '400+' },
        { label: 'Success Rate', value: '95%' },
        { label: 'Mock Tests', value: '15+' }
      ]
    },
    toefl: {
      id: 'toefl',
      ref: toeflRef,
      name: 'TOEFL Coaching',
      fullName: 'Test of English as a Foreign Language',
      icon: '📚',
      color: '#64361E',
      description: 'Achieve your target TOEFL score with our comprehensive preparation program for USA immigration and study.',
      overview: 'TOEFL iBT is widely accepted by universities in the United States, Canada, and other English-speaking countries. While primarily used for academic admissions, TOEFL can also be used for certain immigration pathways and professional certifications.',
      modules: [
        {
          title: 'Reading',
          duration: '54-72 minutes',
          description: '3-4 passages from academic texts with 10 questions each'
        },
        {
          title: 'Listening',
          duration: '41-57 minutes',
          description: 'Lectures, classroom discussions, and conversations'
        },
        {
          title: 'Speaking',
          duration: '17 minutes',
          description: '4 tasks: independent and integrated speaking'
        },
        {
          title: 'Writing',
          duration: '50 minutes',
          description: 'Integrated writing task and independent essay'
        }
      ],
      features: [
        'Internet-based test (iBT) preparation',
        'Academic vocabulary building',
        'Note-taking strategies for listening',
        'Integrated task practice (reading + listening)',
        'Speaking response structuring',
        'Essay organization and development',
        'Official TOEFL practice tests',
        'Score improvement guarantee'
      ],
      benefits: [
        'Required for US university admissions',
        'Accepted by Canadian universities and some immigration programs',
        'Valid for 2 years from test date',
        'Recognized by professional licensing bodies',
        'Enhances academic English skills',
        'Provides comprehensive English assessment'
      ],
      batchInfo: {
        duration: '6-8 weeks',
        classesPerWeek: '4-5 classes',
        batchSize: '10-15 students',
        modes: 'Online & Classroom'
      },
      stats: [
        { label: 'Average Score', value: '95+' },
        { label: 'Students Coached', value: '250+' },
        { label: 'Success Rate', value: '93%' },
        { label: 'Practice Tests', value: '12+' }
      ]
    },
    pte: {
      id: 'pte',
      ref: pteRef,
      name: 'PTE Coaching',
      fullName: 'Pearson Test of English',
      icon: '💻',
      color: '#8B4513',
      description: 'Excel in PTE Academic with our computer-based test preparation program, perfect for fast visa processing.',
      overview: 'PTE Academic is a computer-based English language test trusted by thousands of universities, colleges, and governments worldwide. Known for fast results (within 48 hours), PTE is increasingly popular for Australian and Canadian immigration.',
      modules: [
        {
          title: 'Speaking & Writing',
          duration: '54-67 minutes',
          description: 'Personal introduction, read aloud, repeat sentence, describe image, essay writing'
        },
        {
          title: 'Reading',
          duration: '29-30 minutes',
          description: 'Multiple-choice, re-order paragraphs, fill in the blanks'
        },
        {
          title: 'Listening',
          duration: '30-43 minutes',
          description: 'Summarize spoken text, multiple-choice, fill in the blanks, write from dictation'
        }
      ],
      features: [
        'AI-powered test with unbiased computer scoring',
        'Unlimited mock tests on official PTE platform',
        'Prediction files for reading and listening',
        'Speaking templates for high scores',
        'Pronunciation and fluency training',
        'Fast result delivery (within 48 hours)',
        'Score reporting to multiple institutions',
        'Flexible test scheduling and retake options'
      ],
      benefits: [
        'Accepted by Australian Department of Home Affairs',
        'Recognized by IRCC for Canadian immigration (PTE Core)',
        'Fast results - ideal for urgent visa applications',
        'Computer-based scoring eliminates human bias',
        'Easier for tech-savvy test takers',
        'Multiple test dates available year-round'
      ],
      batchInfo: {
        duration: '4-6 weeks',
        classesPerWeek: '5-6 classes',
        batchSize: '8-12 students',
        modes: 'Online & Computer Lab Training'
      },
      stats: [
        { label: 'Average Score', value: '75+' },
        { label: 'Students Coached', value: '350+' },
        { label: 'Success Rate', value: '96%' },
        { label: 'Mock Tests', value: '20+' }
      ]
    }
  };

  const allStats = [
    { icon: <Users className="w-8 h-8" />, value: '1000+', label: 'Students Coached' },
    { icon: <Award className="w-8 h-8" />, value: '95%', label: 'Success Rate' },
    { icon: <Clock className="w-8 h-8" />, value: '6-8', label: 'Weeks Duration' },
    { icon: <Star className="w-8 h-8" />, value: '7.5+', label: 'Average Score' }
  ];

  const ServiceSection = ({ service, index }) => (
    <motion.div
      ref={service.ref}
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="scroll-mt-24 bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-[#8B4513] transition-all duration-300 overflow-hidden"
    >
      {/* Service Header */}
      <div className="bg-gradient-to-r from-[#64361E] to-[#8B4513] p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-6xl">{service.icon}</div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">{service.name}</h2>
            {service.fullName && (
              <p className="text-white/80 text-sm">{service.fullName}</p>
            )}
          </div>
        </div>
        <p className="text-lg text-white/90">{service.description}</p>
      </div>

      {/* Service Content */}
      <div className="p-8">
        {/* Overview */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#64361E] mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6" />
            Overview
          </h3>
          <p className="text-gray-700 leading-relaxed">{service.overview}</p>
        </div>

        {/* Modules/Sessions */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-[#64361E] mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6" />
            {service.modules ? 'Test Modules' : 'Interview Sessions'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(service.modules || service.sessions).map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-[#8B4513] transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-[#64361E] text-lg">{item.title}</h4>
                  <span className="text-xs bg-[#64361E] text-white px-3 py-1 rounded-full">
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features & Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-[#64361E] mb-6 flex items-center gap-2">
              <Lightbulb className="w-6 h-6" />
              What's Included
            </h3>
            <div className="space-y-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#64361E] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-[#64361E] mb-6 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Key Benefits
            </h3>
            <div className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#8B4513] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Batch Info (if exists) */}
        {service.batchInfo && (
          <div className="mb-8 bg-gradient-to-br from-[#64361E]/5 to-[#8B4513]/5 rounded-xl p-6 border border-[#8B4513]/20">
            <h3 className="text-xl font-bold text-[#64361E] mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Batch Information
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#64361E] mb-1">
                  {service.batchInfo.duration}
                </div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#64361E] mb-1">
                  {service.batchInfo.classesPerWeek}
                </div>
                <div className="text-sm text-gray-600">Classes/Week</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#64361E] mb-1">
                  {service.batchInfo.batchSize}
                </div>
                <div className="text-sm text-gray-600">Batch Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#64361E] mb-1">
                  {service.batchInfo.modes}
                </div>
                <div className="text-sm text-gray-600">Modes</div>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {service.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#64361E] to-[#8B4513] text-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#64361E] to-[#8B4513] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Book Free Demo
          </Link>
          <a
            href="tel:+918868860022"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#64361E] text-[#64361E] font-semibold px-8 py-4 rounded-xl hover:bg-[#64361E] hover:text-white transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#64361E] to-[#8B4513] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Expert Coaching Services
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive preparation for IELTS, PTE, TOEFL exams and visa interview coaching to help you achieve your immigration dreams
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {allStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3 text-[#64361E]">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#64361E] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="text-sm text-gray-600 font-semibold">Jump to:</span>
            {Object.values(coachingServices).map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-[#64361E] hover:text-white rounded-lg transition-all text-sm font-medium"
              >
                <span>{service.icon}</span>
                <span>{service.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {Object.values(coachingServices).map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CoachingPage;
