// components/Footer.jsx
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
    { name: "Coaching", path: "/coaching"}
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://www.facebook.com/GiantMigrationIndia/',
      color: 'hover:bg-[#1877F2]'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: 'https://www.instagram.com/giant_migration_india/?hl=en',
      color: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45]'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/company/giant-migration/?originalSubdomain=in',
      color: 'hover:bg-[#0A66C2]'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://www.youtube.com/@GiantMigration',
      color: 'hover:bg-[#FF0000]'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: [
        { label: 'Australia', value: '+61 432 756 799' },
        { label: 'India', value: '+91 79823 56440' },
        { label: 'Qatar', value: '+974 4001 1291' }
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        { label: 'General Inquiries', value: 'info@giantmigration.com' },
        { label: 'Support', value: 'support@giantmigration.com' }
      ]
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: [
        { label: 'Australia Office', value: '49th Floor/8 Parramatta Sq, Parramatta NSW 2150, Australia' },
        { label: 'India Office', value: 'Office 408-409, pearl besti heights 1, Netaji subhash place, Delhi, India' },
        { label: 'Qatar Office', value: 'Office No. 9, Second Floor, Building 2, Financial Square C Ring Rd, Doha, Qatar'}
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#2C1810] via-[#3D2416] to-[#1A0F08] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A88C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8B4513] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#64361E] rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: `radial-gradient(circle, #DCBDAD 1px, transparent 1px)`,
             backgroundSize: '30px 30px'
           }}>
      </div>

      {/* Top Wave Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A88C]/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#DCBDAD] via-[#C9A88C] to-[#DCBDAD] bg-clip-text text-transparent font-heading">
                GIANT MIGRATION
              </h2>
              <p className="text-sm text-[#C9A88C] mt-2 font-semibold">Your Vision, Our Mission</p>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Expert immigration consultancy with 10+ years of experience helping 2,500+ clients achieve their dreams of living and working abroad.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${social.color} hover:border-transparent group`}
                >
                  <social.icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>

            {/* Certifications Badge */}
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-[#C9A88C]/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs font-semibold text-[#C9A88C]">Licensed & Certified</span>
              </div>
              <p className="text-xs text-gray-400">MARA & RCIC Registered Consultants</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-[#DCBDAD] font-heading flex items-center gap-2">
              <ArrowRight size={20} />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#C9A88C] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#C9A88C] group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-[#DCBDAD] font-heading flex items-center gap-2">
              <Phone size={20} />
              Contact Us
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#64361E] to-[#8B4513] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={18} />
                    </div>
                    <h4 className="font-semibold text-[#DCBDAD]">{info.title}</h4>
                  </div>
                  <div className="ml-13 space-y-2">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="text-sm">
                        <span className="text-gray-400">{detail.label}:</span>
                        <span className="text-gray-300 ml-2">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A88C]/30 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-evenly items-center gap-4"
        >
          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>© {currentYear} Giant Migration. All rights reserved.</p>
            <p className="text-xs mt-1">
              Licensed Immigration Consultants | MARA & RCIC Registered
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 bg-gradient-to-r from-[#64361E] to-[#8B4513] rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm group cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowRight size={16} className="rotate-[-90deg] group-hover:translate-y-[-3px] transition-transform" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
