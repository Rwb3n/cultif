import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './CreateMenuScreen.css';

const CreateMenuScreen = () => {
  const navigate = useNavigate();

  const screenVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: 'easeIn' } }
  };

  const listVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  const menuItems = [
    { id: 'content_creator', title: 'Content Creator Options', action: () => console.log('Navigate to Content Creator Options') },
    { id: 'start_creating', title: 'Start Creating', action: () => navigate('/create/upload-rules') }, // Placeholder for Screen 4.2
    { id: 'recipe_type', title: 'Recipe Type', action: () => console.log('Filter by Recipe Type') },
    { id: 'meal_plan', title: 'Meal Plan Templates', action: () => console.log('Browse Meal Plan Templates') },
    { id: 'my_uploads', title: 'My Uploads', action: () => console.log('View My Uploads') },
  ];

  return (
    <MobileScreenLayout screenTitle="Create">
      <motion.div
        className="create-menu-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h2 variants={itemVariants}>What would you like to create?</motion.h2>
        
        <motion.ul className="create-menu-list" variants={listVariants}>
          {menuItems.map((item) => (
            <motion.li 
              key={item.id} 
              className="create-menu-item"
              variants={itemVariants}
              onClick={item.action}
              whileTap={{ scale: 0.95, backgroundColor: 'var(--color-primary-light)' }}
            >
              {item.title}
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          className="btn btn-secondary"
          variants={itemVariants}
          style={{ marginTop: 'auto', width: '100%' }}
          onClick={() => navigate('/home')} // Go back to home for now
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.button>
      </motion.div>
    </MobileScreenLayout>
  );
};

export default CreateMenuScreen; 