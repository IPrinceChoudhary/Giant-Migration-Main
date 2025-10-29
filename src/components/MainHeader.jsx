// components/MainHeader.jsx
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import Button from "./ui/Buttons";
import { migrationData } from "../utils/MigrationData";
import { useCountry } from "../context/CountryContext";

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCountry, setActiveCountry] = useState(null);
  const [activeVisaType, setActiveVisaType] = useState(null);
  const [activeStudyAbroad, setActiveStudyAbroad] = useState(false);
  const [isCountrySelectorOpen, setIsCountrySelectorOpen] = useState(false);

  const { currentCountry, changeCountry, countries } = useCountry();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCountryChange = (countryCode) => {
    changeCountry(countryCode); // This will redirect to home page
    setIsCountrySelectorOpen(false);
    setIsMobileMenuOpen(false);
  };

  const studyAbroadCountries = [
    { name: "Study in Australia", href: "/study/australia" },
    { name: "Study in Canada", href: "/study/canada" },
    { name: "Study in USA", href: "/study/usa" },
  ];

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Migrate To", href: "/migrate", hasDropdown: true },
    { name: "Study Abroad", href: "/study", hasDropdown: true },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-lg transition-all duration-300 z-50 sticky top-0">
      <div className="container mx-auto px-4 py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <Link to="/">
              <img
                src={logo}
                alt="Giant Migration Logo"
                className="h-20 w-auto transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 relative">
            {navigationItems.map((item) => {
              // Migrate To Dropdown
              if (item.name === "Migrate To") {
                return (
                  <div key={item.name} className="relative group">
                    <button className="text-text font-medium hover:text-brand transition-colors duration-300 relative group font-heading flex items-center gap-1">
                      {item.name}
                      <FaChevronDown className="text-sm mt-[2px] transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Dropdown: Countries */}
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-64 p-2 z-50 animate-fadeIn">
                      {migrationData.map((country) => (
                        <div
                          key={country.country}
                          className="relative group/item"
                        >
                          <div className="flex items-center justify-between px-4 py-2 hover:bg-brand-50 rounded cursor-pointer transition-colors duration-200">
                            {country.country}
                            <FaChevronRight className="text-xs" />
                          </div>

                          {/* Submenu: Visa Types */}
                          <div className="absolute left-full top-0 hidden group-hover/item:block bg-white shadow-lg rounded-md w-64 p-2 z-50 animate-fadeIn">
                            {country.visaTypes.map((visaType) => (
                              <div
                                key={visaType.type}
                                className="relative group/type"
                              >
                                <div className="flex items-center justify-between px-4 py-2 hover:bg-brand-50 rounded cursor-pointer transition-colors duration-200">
                                  {visaType.type}
                                  {visaType.visas.length > 0 && (
                                    <FaChevronRight className="text-xs" />
                                  )}
                                </div>

                                {/* Submenu: Individual Visas */}
                                {visaType.visas.length > 0 && (
                                  <div className="absolute left-full top-0 hidden group-hover/type:block bg-white shadow-lg rounded-md w-72 p-2 z-50 animate-fadeIn">
                                    {visaType.visas.map((visa) => (
                                      <Link
                                        key={visa.slug}
                                        to={`/visa/${visa.slug}`}
                                        className="block px-4 py-2 hover:bg-brand-50 rounded text-sm transition-colors duration-200"
                                      >
                                        {visa.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // Study Abroad Dropdown
              if (item.name === "Study Abroad") {
                return (
                  <div key={item.name} className="relative group">
                    <button className="text-text font-medium hover:text-brand transition-colors duration-300 relative group font-heading flex items-center gap-1">
                      {item.name}
                      <FaChevronDown className="text-sm mt-[2px] transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Study Abroad Dropdown */}
                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-56 p-2 z-50 animate-fadeIn">
                      {studyAbroadCountries.map((country) => (
                        <Link
                          key={country.href}
                          to={country.href}
                          className="block px-4 py-3 hover:bg-brand-50 rounded text-text hover:text-brand transition-colors duration-200 font-medium"
                        >
                          {country.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              // Regular Navigation Items
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-text font-medium hover:text-brand transition-colors duration-300 relative group font-heading"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </nav>

          {/* Country Selector + CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Country Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCountrySelectorOpen(!isCountrySelectorOpen)}
                className="flex items-center gap-2 px-4 py-2 border-2 border-brand-200 rounded-lg cursor-pointer hover:border-brand hover:bg-brand-50 transition-all duration-300 group"
              >
                <span className="text-2xl">{currentCountry.flag}</span>
                <span className="text-text font-medium group-hover:text-brand transition-colors">
                  {currentCountry.name}
                </span>
                <FaChevronDown
                  className={`text-sm text-text group-hover:text-brand transition-all duration-300 ${
                    isCountrySelectorOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Country Dropdown Menu */}
              {isCountrySelectorOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white shadow-xl rounded-lg w-56 p-2 z-50 border border-brand-100 animate-fadeIn">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => handleCountryChange(country.code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                        currentCountry.code === country.code
                          ? "bg-brand text-white"
                          : "hover:bg-brand-50 text-text hover:text-brand"
                      }`}
                    >
                      <span className="text-2xl">{country.flag}</span>
                      <div className="flex-1 text-left">
                        <div className="font-semibold">{country.name}</div>
                        <div
                          className={`text-xs ${
                            currentCountry.code === country.code
                              ? "text-white/80"
                              : "text-gray-500"
                          }`}
                        >
                          {country.phone}
                        </div>
                      </div>
                      {currentCountry.code === country.code && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                     </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link to="/contact">
              <Button text="Get Free Consultation" variant="get" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-text hover:text-brand transition-colors duration-300 p-2 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pt-4 pb-2 border-t border-brand-50 m-4">
            {/* Mobile Country Selector */}
            <div className="mb-4 p-3 bg-brand-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2 font-semibold">
                Select Country
              </div>
              <div className="grid grid-cols-3 gap-2">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => handleCountryChange(country.code)}
                    className={`flex flex-col items-center gap-1 px-2 py-3 rounded-lg transition-all duration-200 ${
                      currentCountry.code === country.code
                        ? "bg-brand text-white shadow-md"
                        : "bg-white text-text hover:bg-brand-100"
                    }`}
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <span className="text-xs font-medium">{country.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {navigationItems.map((item) => {
              // Mobile Migrate To
              if (item.name === "Migrate To") {
                return (
                  <div key={item.name} className="mb-4">
                    <button
                      onClick={() =>
                        setActiveCountry(activeCountry ? null : item.name)
                      }
                      className="w-full flex justify-between items-center py-3 text-text hover:text-brand hover:bg-brand-50 px-2 rounded transition-all duration-300 font-heading"
                    >
                      {item.name}
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          activeCountry ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Expand countries */}
                    {activeCountry && (
                      <div className="pl-4 mt-2 space-y-2">
                        {migrationData.map((country) => (
                          <div key={country.country}>
                            <button
                              onClick={() =>
                                setActiveVisaType(
                                  activeVisaType === country.country
                                    ? null
                                    : country.country
                                )
                              }
                              className="w-full flex justify-between items-center py-2 text-sm text-gray-700 hover:text-brand hover:bg-brand-50 px-2 rounded transition-colors duration-200"
                            >
                              {country.country}
                              <FaChevronDown
                                className={`transition-transform duration-300 ${
                                  activeVisaType === country.country
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            {/* Expand visa types */}
                            {activeVisaType === country.country && (
                              <div className="pl-4 space-y-2 mt-2">
                                {country.visaTypes.map((visaType) => (
                                  <div key={visaType.type}>
                                    <p className="text-sm font-medium text-gray-600 mt-2 px-2">
                                      {visaType.type}
                                    </p>
                                    <ul className="pl-3 space-y-1 mt-1">
                                      {visaType.visas.map((visa) => (
                                        <li key={visa.slug} className="text-xs">
                                          <Link
                                            to={`/visa/${visa.slug}`}
                                            onClick={() =>
                                              setIsMobileMenuOpen(false)
                                            }
                                            className="block py-1 px-2 text-gray-500 hover:text-brand hover:bg-brand-50 rounded transition-colors duration-200"
                                          >
                                            {visa.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Mobile Study Abroad
              if (item.name === "Study Abroad") {
                return (
                  <div key={item.name} className="mb-4">
                    <button
                      onClick={() => setActiveStudyAbroad(!activeStudyAbroad)}
                      className="w-full flex justify-between items-center py-3 text-text hover:text-brand hover:bg-brand-50 px-2 rounded transition-all duration-300 font-heading"
                    >
                      {item.name}
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          activeStudyAbroad ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Study Abroad Submenu */}
                    {activeStudyAbroad && (
                      <div className="pl-4 mt-2 space-y-2">
                        {studyAbroadCountries.map((country) => (
                          <Link
                            key={country.href}
                            to={country.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 px-2 text-sm text-gray-700 hover:text-brand hover:bg-brand-50 rounded transition-colors duration-200"
                          >
                            {country.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Regular Mobile Items
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-3 text-text hover:text-brand hover:bg-brand-50 px-2 rounded transition-all duration-300 font-heading text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="mt-4 flex justify-center">
            <Link to="/contact">
              <Button text="Get Free Consultation" variant="get" />
            </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Close country selector when clicking outside */}
      {isCountrySelectorOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsCountrySelectorOpen(false)}
        ></div>
      )}

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default MainHeader;
