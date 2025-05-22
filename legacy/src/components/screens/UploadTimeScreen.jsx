import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './UploadTimeScreen.css'; // To be created

const commonTimes = [
  '15 minutes',
  '30 minutes',
  '45 minutes',
  '1 hour',
  '1.5 hours',
  '2 hours or more',
];

const UploadTimeScreen = () => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState('');
  const [customTime, setCustomTime] = useState('');

  const screenVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
    setCustomTime(''); // Clear custom time if a preset is chosen
    // In a real app, this value would be stored
    console.log('Selected time:', time);
    navigate('/create/upload-main'); 
  };

  const handleCustomTimeSubmit = () => {
    if (customTime.trim()) {
      setSelectedTime(customTime.trim());
      console.log('Selected custom time:', customTime.trim());
      // In a real app, this value would be stored
      navigate('/create/upload-main');
    }
  };

  return (
    <MobileScreenLayout screenTitle="Time to Prepare">
      <motion.div
        className="upload-time-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h3 variants={itemVariants} className="screen-subtitle">How long does this take to prepare?</motion.h3>
        
        <motion.ul className="time-options-list" variants={itemVariants}>
          {commonTimes.map(time => (
            <motion.li 
              key={time}
              className={`time-option-item ${selectedTime === time && !customTime ? 'selected' : ''}`}
              onClick={() => handleSelectTime(time)}
              whileTap={{ backgroundColor: 'var(--color-neutral-200)' }}
            >
              {time}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="custom-time-container" variants={itemVariants}>
          <p>Or enter a custom time:</p>
          <input 
            type="text"
            placeholder="e.g., 25 minutes, 1hr 15min"
            value={customTime}
            onChange={(e) => {
              setCustomTime(e.target.value);
              setSelectedTime(''); // Clear preset selection if typing custom
            }}
            className="custom-time-input"
          />
          <button 
            onClick={handleCustomTimeSubmit} 
            className="btn btn-outline-primary btn-small add-custom-time-btn"
            disabled={!customTime.trim()}
          >
            Set Custom Time
          </button>
        </motion.div>
        
        <motion.button
          className="btn btn-secondary back-btn"
          variants={itemVariants}
          onClick={() => navigate('/create/upload-main')} 
          whileTap={{ scale: 0.95 }}
        >
          Back to Post Details
        </motion.button>

      </motion.div>
    </MobileScreenLayout>
  );
};

export default UploadTimeScreen; 