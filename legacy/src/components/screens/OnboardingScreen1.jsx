import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './OnboardingScreen1.css';

const OnboardingScreen1 = () => {
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
      transition: { staggerChildren: 0.15, delayChildren: 0.3 } // Stagger children after screen animates in
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

  const StepIndicators = ({ currentStep, totalSteps }) => (
    <div className="onboarding-step-indicators">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <motion.div 
          key={index} 
          className={`step-indicator ${index + 1 === currentStep ? 'active' : ''}`}
          variants={itemVariants} // Can reuse itemVariants or define specific ones
        />
      ))}
    </div>
  );

  return (
    <MobileScreenLayout screenTitle="Discover Recipes">
      <motion.div 
        className="onboarding-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ImageMontagePlaceholder />
        
        <motion.div className="onboarding-text-content" variants={textContentVariants}>
          <motion.h2 className="onboarding-title" variants={itemVariants}>
            Get dishes from around the world
          </motion.h2>
          <motion.p className="onboarding-description" variants={itemVariants}>
            Explore a diverse collection of authentic recipes from various cultures, bringing international cuisine right to your kitchen.
          </motion.p>
        </motion.div>

        <motion.div className="onboarding-navigation" variants={itemVariants}>
          <Link to="/login" className="btn btn-text">Skip</Link>
          <StepIndicators currentStep={1} totalSteps={3} />
          <button onClick={() => navigate('/onboarding/2')} className="btn btn-primary">
            Next
          </button>
        </motion.div>
      </motion.div>
    </MobileScreenLayout>
  );
};

export default OnboardingScreen1; 