import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './OnboardingScreen1.css'; // Reuse CSS for now

const OnboardingScreen3 = () => {
  const navigate = useNavigate();

  const screenVariants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: '0%', opacity: 1, transition: { duration: 0.25, ease: 'easeInOut' } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } }
  };

  const textContentVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.15 } }
  };

  // TODO: Replace with actual image montage or component
  const ImageMontagePlaceholder = () => (
    <motion.div className="onboarding-image-montage-placeholder" variants={itemVariants}>
      {/* Visual placeholder for image montage */}
    </motion.div>
  );

  return (
    <MobileScreenLayout screenTitle="Create Meal Plans">
      <motion.div 
        className="onboarding-screen-content" // Reusing class from Onboarding1
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ImageMontagePlaceholder />
        
        <motion.div className="onboarding-text-content" variants={textContentVariants}>
          <motion.h2 className="onboarding-title" variants={itemVariants}>
            Create rich and exciting meal plans
          </motion.h2>
          <motion.p className="onboarding-description" variants={itemVariants}>
            Unleash your inner chef and design personalized meal plans that perfectly match your taste and nutritional goals.
          </motion.p>
        </motion.div>

        <motion.div className="onboarding-navigation" variants={itemVariants} style={{flexDirection: 'column', gap: 'var(--spacing-md)', width: '100%'}}>
            <motion.button 
              onClick={() => navigate('/login')} 
              className="btn btn-primary" 
              style={{width: '100%'}}
              variants={itemVariants} // individual item variant for button itself if needed, or rely on parent's stagger
            >
              Log In
            </motion.button>
            <motion.button 
              onClick={() => navigate('/signup')} 
              className="btn btn-secondary" 
              style={{width: '100%'}}
              variants={itemVariants} // individual item variant for button itself if needed
            >
              Sign Up
            </motion.button>
        </motion.div>
      </motion.div>
    </MobileScreenLayout>
  );
};

export default OnboardingScreen3; 