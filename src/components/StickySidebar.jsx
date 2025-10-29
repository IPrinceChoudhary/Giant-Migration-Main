import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MessageCircle, Phone, Mail, X } from 'lucide-react';

const StickySidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/GiantMigrationIndia/', 
      label: 'Facebook',
      color: '#1877F2'
    },
    { 
      icon: Twitter, 
      href: 'https://x.com/GiantMigration', 
      label: 'Twitter',
      color: '#1DA1F2'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/giant-migration/?originalSubdomain=in', 
      label: 'LinkedIn',
      color: '#0A66C2'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/giant_migration_india/?hl=en', 
      label: 'Instagram',
      color: '#E4405F'
    },
  ];

  const contactOptions = [
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/+918868860022', 
      label: 'WhatsApp',
      color: '#25D366'
    },
    { 
      icon: Phone, 
      href: 'tel:+918868860022', 
      label: 'Call Us',
      color: '#64361E'
    },
    { 
      icon: Mail, 
      href: 'mailto:info@giantmigration.com', 
      label: 'Email',
      color: '#8B4513'
    },
  ];

  return (
    <>
      {/* Desktop Sidebar - Compact Version */}
      <div className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-white shadow-lg rounded-r-xl border-l-4 border-[#64361E] overflow-hidden">
          {/* Social Media Section */}
          <div className="border-b border-gray-200">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 hover:bg-gray-50 transition-all duration-300 relative group"
                  onMouseEnter={() => setHoveredIcon(social.label)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label={social.label}
                >
                  <Icon 
                    className="w-5 h-5 transition-all duration-300"
                    style={{ 
                      color: hoveredIcon === social.label ? social.color : '#64361E'
                    }}
                  />
                  
                  {/* Tooltip */}
                  <div className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
                    hoveredIcon === social.label ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}>
                    {social.label}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Section */}
          <div>
            {contactOptions.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 hover:bg-gray-50 transition-all duration-300 relative group"
                  onMouseEnter={() => setHoveredIcon(contact.label)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  aria-label={contact.label}
                >
                  <Icon 
                    className="w-5 h-5 transition-all duration-300"
                    style={{ 
                      color: hoveredIcon === contact.label ? contact.color : '#64361E'
                    }}
                  />
                  
                  {/* Tooltip */}
                  <div className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
                    hoveredIcon === contact.label ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}>
                    {contact.label}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Floating Button - More Compact */}
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        {/* Floating Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isOpen 
              ? 'bg-red-600 hover:bg-red-700 rotate-90' 
              : 'bg-[#64361E] hover:bg-[#8B4513]'
          }`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <MessageCircle className="w-5 h-5 text-white" />
          )}
        </button>

        {/* Expandable Menu - Compact Version */}
        <div className={`absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}>
          <div className="w-48">
            {/* Social Media Links */}
            <div className="border-b border-gray-200 p-2">
              <p className="text-xs font-semibold text-[#64361E] mb-2 px-2">Follow Us</p>
              <div className="grid grid-cols-4 gap-1">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      style={{ 
                        color: social.color
                      }}
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Options */}
            <div className="p-2">
              <p className="text-xs font-semibold text-[#64361E] mb-2 px-2">Contact Us</p>
              <div className="space-y-1">
                {contactOptions.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      aria-label={contact.label}
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${contact.color}15` }}
                      >
                        <Icon 
                          className="w-4 h-4"
                          style={{ color: contact.color }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {contact.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Backdrop for mobile */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/20 -z-10"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default StickySidebar;