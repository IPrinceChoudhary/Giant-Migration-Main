import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-brand-dark text-white py-4 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        {/* Contact Info */}
        <div className="flex items-center gap-2 hover:text-brand-200 transition-colors duration-300 cursor-pointer mb-1 md:mb-0 font-heading"> 
          <FaPhone className="text-xs" />
          <span>+974 7765 1191</span>
        </div>
        <div className="flex items-center gap-2 hover:text-brand-200 transition-colors duration-300 cursor-pointer mb-2 md:mb-0 font-heading">
          <FaEnvelope className="text-xs" />
          <span>info@giantmigration.com</span>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/GiantMigrationQatar"
            className="p-2 bg-brand hover:bg-brand-200 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Facebook"
            target="_blank"
          >
            <FaFacebookF className="text-xs" />
          </a>
          <a
            href="https://www.instagram.com/giant_migration_qatar?igsh=MWM0eHo3NnVsbGttdA%3D%3D"
            className="p-2 bg-brand hover:bg-brand-200 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Instagram"
            target="_blank"
          >
            <FaInstagram className="text-xs" />
          </a>
          <a
            href="https://www.linkedin.com/company/giant-migration/?originalSubdomain=qa"
            className="p-2 bg-brand hover:bg-brand-200 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
            target="_blank"
          >
            <FaLinkedinIn className="text-xs" />
          </a>
          <a
            href="https://www.youtube.com/@giantmigration"
            className="p-2 bg-brand hover:bg-brand-200 rounded-full transition-all duration-300 transform hover:scale-110"
            aria-label="Youtube"
            target="_blank"
          >
            <FaYoutube className="text-xs" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
