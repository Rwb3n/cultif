import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './UploadCountryScreen.css'; // To be created

// A simplified list of countries for demo purposes
const countries = [
  'United States', 'Canada', 'Mexico', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain',
  'Japan', 'China', 'India', 'Brazil', 'Australia', 'Nigeria', 'Egypt', 'South Africa', 
  // Add more or use a comprehensive list/API in a real app
];

const UploadCountryScreen = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const screenVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const filteredCountries = countries.filter(country => 
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    // In a real app, this value would be stored (e.g., in context, Redux, or passed back)
    console.log('Selected country:', country);
    // For now, just navigate back to the main upload screen
    navigate('/create/upload-main'); 
  };

  return (
    <MobileScreenLayout screenTitle="Select Country of Origin">
      <motion.div
        className="upload-country-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div className="search-bar-container" variants={itemVariants}>
          <input 
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="country-search-input"
          />
        </motion.div>

        <motion.ul className="country-list" variants={itemVariants}>
          {filteredCountries.map(country => (
            <motion.li 
              key={country}
              className={`country-list-item ${selectedCountry === country ? 'selected' : ''}`}
              onClick={() => handleSelectCountry(country)}
              whileTap={{ backgroundColor: 'var(--color-neutral-200)' }}
            >
              {country}
            </motion.li>
          ))}
          {filteredCountries.length === 0 && searchTerm && (
            <li className="no-results-message">No countries found for "{searchTerm}"</li>
          )}
        </motion.ul>
        
        <motion.button
          className="btn btn-secondary back-btn"
          variants={itemVariants}
          onClick={() => navigate('/create/upload-main')} // Go back to Upload Main screen
          whileTap={{ scale: 0.95 }}
        >
          Back to Post Details
        </motion.button>

      </motion.div>
    </MobileScreenLayout>
  );
};

export default UploadCountryScreen; 