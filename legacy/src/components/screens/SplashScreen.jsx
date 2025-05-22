import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './SplashScreen.css'; // Import specific styles

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding/1');
    }, 3500); // Adjust timing: 2-3s for animations + a bit more before navigating
    return () => clearTimeout(timer);
  }, [navigate]);

  const screenVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.15 } }, // Screen fade in 150ms
    exit: { opacity: 0, transition: { duration: 0.2 } } // Screen fade out 200ms
  };

  const circleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.2, type: 'spring', stiffness: 120 } // Scale up 200ms
    },
    hover: { rotate: 360, transition: { duration: 10, repeat: Infinity, ease: 'linear' } } // Gentle rotation
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.2, delay: 0.25 } // Fade/slide in 200ms, delay 50ms (0.2s for circle + 0.05s delay)
    }
  };

  return (
    <MobileScreenLayout screenTitle="Welcome">
      <AnimatePresence mode='wait'>
        <motion.div 
          key="splash-content"
          className="splash-screen-content"
          variants={screenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div 
            className="splash-logo-container"
          >
            <motion.div 
              className="splash-logo-circle"
              variants={circleVariants}
              whileHover="hover" // For continuous animation if desired, or use `animate` with repeat
              animate={{
                scale: [1, 1.05, 1], // Gentle pulse
                rotate: [0, 360], // Slow rotation example
                transition: {
                  scale: { duration: 1.5, repeat: Infinity, repeatType: "mirror" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }
              }}
            />
            <motion.div 
              className="splash-logo-text"
              variants={textVariants}
            >
              Cultif
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </MobileScreenLayout>
  );
};

export default SplashScreen; 