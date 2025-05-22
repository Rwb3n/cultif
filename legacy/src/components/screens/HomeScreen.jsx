import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './HomeScreen.css'; // To be created

const HomeScreen = () => {
  const navigate = useNavigate();

  const screenVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } }
  };

  const handleLogout = () => {
    // Simulate logout process
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <MobileScreenLayout screenTitle="Home">
      <motion.div 
        className="home-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h2 variants={itemVariants}>Welcome Home!</motion.h2>
        <motion.p variants={itemVariants} style={{ margin: 'var(--spacing-md) 0 var(--spacing-xl) 0', color: 'var(--color-text-secondary)' }}>
          This is a placeholder for the main application content after login.
        </motion.p>
        
        {/* Placeholder for future content sections */}
        <motion.div variants={itemVariants} className="placeholder-section">
          <p>Your Dashboard / Feed</p>
        </motion.div>
        <motion.div variants={itemVariants} className="placeholder-section">
          <p>Quick Actions</p>
        </motion.div>

        <motion.button 
          variants={itemVariants} 
          className="btn btn-secondary" 
          style={{ marginTop: 'auto', width: '100%' }} 
          onClick={handleLogout}
          whileTap={{ scale: 0.95 }}
        >
          Log Out
        </motion.button>
      </motion.div>
    </MobileScreenLayout>
  );
};

export default HomeScreen; 