import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './UploadWeightGoalScreen.css'; // To be created

const weightGoals = [
  'Weight Loss',
  'Muscle Gain',
  'Weight Maintenance',
  'Improved Fitness',
  'Healthy Eating Habits',
  'Not Specified',
];

const UploadWeightGoalScreen = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState('');

  const screenVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const handleSelectGoal = (goal) => {
    setSelectedGoal(goal);
    console.log('Selected weight goal:', goal);
    // Store this value appropriately in a real application
    navigate('/create/upload-main'); 
  };

  return (
    <MobileScreenLayout screenTitle="Select Weight Goal">
      <motion.div
        className="upload-weight-goal-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h3 variants={itemVariants} className="screen-subtitle">Choose a goal for this meal/plan:</motion.h3>
        
        <motion.ul className="goal-list" variants={itemVariants}>
          {weightGoals.map(goal => (
            <motion.li 
              key={goal}
              className={`goal-list-item ${selectedGoal === goal ? 'selected' : ''}`}
              onClick={() => handleSelectGoal(goal)}
              whileTap={{ backgroundColor: 'var(--color-neutral-200)' }}
            >
              {goal}
            </motion.li>
          ))}
        </motion.ul>
        
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

export default UploadWeightGoalScreen; 