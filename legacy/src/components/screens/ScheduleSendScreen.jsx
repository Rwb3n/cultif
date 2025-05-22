import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './ScheduleSendScreen.css'; // To be created

const ScheduleSendScreen = () => {
  const navigate = useNavigate();
  const [scheduleOption, setScheduleOption] = useState('now'); // 'now' or 'later'
  const [scheduledDate, setScheduledDate] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const screenVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const handleSubmit = () => {
    if (scheduleOption === 'now') {
      console.log('Posting now...');
      // Navigate to a confirmation or home screen
      navigate('/home'); 
    } else {
      if (scheduledDate && scheduledTime) {
        console.log(`Scheduled for: ${scheduledDate} at ${scheduledTime}`);
        // Navigate to a confirmation or home screen
        navigate('/home');
      } else {
        alert('Please select a date and time to schedule.');
      }
    }
  };

  return (
    <MobileScreenLayout screenTitle="Schedule Post">
      <motion.div
        className="schedule-send-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={itemVariants} className="schedule-options">
          <motion.div 
            className={`schedule-option ${scheduleOption === 'now' ? 'selected' : ''}`}
            onClick={() => setScheduleOption('now')}
            whileTap={{ backgroundColor: 'var(--color-neutral-200)' }}
          >
            Post Now
          </motion.div>
          <motion.div 
            className={`schedule-option ${scheduleOption === 'later' ? 'selected' : ''}`}
            onClick={() => setScheduleOption('later')}
            whileTap={{ backgroundColor: 'var(--color-neutral-200)' }}
          >
            Schedule for Later
          </motion.div>
        </motion.div>

        {scheduleOption === 'later' && (
          <motion.div className="schedule-later-inputs" variants={itemVariants}>
            <input 
              type="date" 
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="schedule-input"
            />
            <input 
              type="time" 
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              className="schedule-input"
            />
          </motion.div>
        )}
        
        <motion.button
          className="btn btn-primary confirm-schedule-btn"
          variants={itemVariants}
          onClick={handleSubmit}
          whileTap={{ scale: 0.95 }}
        >
          {scheduleOption === 'now' ? 'Post Now' : 'Confirm Schedule'}
        </motion.button>

        <motion.button
          className="btn btn-secondary back-btn"
          variants={itemVariants}
          onClick={() => navigate('/create/upload-main')} // Back to main upload details
          whileTap={{ scale: 0.95 }}
        >
          Back to Post Details
        </motion.button>

      </motion.div>
    </MobileScreenLayout>
  );
};

export default ScheduleSendScreen; 