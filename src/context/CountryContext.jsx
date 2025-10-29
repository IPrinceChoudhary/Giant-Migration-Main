// context/CountryContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const CountryContext = createContext();

export const countries = [
  {
    code: 'india',
    name: 'India',
    flag: '🇮🇳',
    phone: '+91 886 886 00 22',
    isDefault: true
  },
  {
    code: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    phone: '+61 432 756 799',
    isDefault: false
  },
  {
    code: 'qatar',
    name: 'Qatar',
    flag: '🇶🇦',
    phone: '+974 7030 8333',
    isDefault: false
  }
];

export const CountryProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Detect country from URL (only for home page routes)
  const getCountryFromPath = () => {
    const path = location.pathname;
    
    // Check if it's a home page route
    if (path === '/australia') {
      return countries.find(c => c.code === 'australia');
    } else if (path === '/qatar') {
      return countries.find(c => c.code === 'qatar');
    } else if (path === '/' || path === '/india') {
      return countries.find(c => c.isDefault);
    }
    
    // For all other pages, return default (India)
    return countries.find(c => c.isDefault);
  };

  const [currentCountry, setCurrentCountry] = useState(getCountryFromPath());

  // Update country when URL changes
  useEffect(() => {
    const detectedCountry = getCountryFromPath();
    setCurrentCountry(detectedCountry);
  }, [location.pathname]);

  // Change country and redirect to home page with that country
  const changeCountry = (countryCode) => {
    const newCountry = countries.find(c => c.code === countryCode);
    if (!newCountry) return;

    setCurrentCountry(newCountry);

    // Always redirect to home page when country changes
    if (newCountry.isDefault) {
      navigate('/'); // India home
    } else {
      navigate(`/${newCountry.code}`); // Australia or Qatar home
    }
  };

  return (
    <CountryContext.Provider value={{ currentCountry, changeCountry, countries }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry must be used within CountryProvider');
  }
  return context;
};
