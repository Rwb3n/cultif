import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './UploadMainScreen.css'; // To be created

// Placeholder icons (Ideally, use an icon library like react-icons)
const ChevronRightIcon = () => <span style={{ marginLeft: 'auto' }}>&gt;</span>;
const VideoIcon = () => <span style={{ fontSize: '2rem' }}>📹</span>; // Simple emoji for placeholder

const UploadMainScreen = () => {
  const navigate = useNavigate();

  const screenVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } }
  };

  const listVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  const detailItems = [
    { id: 'ingredients', label: 'Ingredients', value: 'Add ingredients', action: () => navigate('/create/upload-ingredients') }, // Screen 4.4
    { id: 'country', label: 'Country of Origin', value: 'Select country', action: () => navigate('/create/upload-country') },
    { id: 'weight_goal', label: 'Weight Goal', value: 'e.g., Weight loss, Muscle gain', action: () => navigate('/create/upload-weight-goal') },
    { id: 'time_to_prepare', label: 'Time to Prepare', value: 'e.g., 30 minutes', action: () => navigate('/create/upload-time') },
    { id: 'dietary_tags', label: 'Dietary Tags', value: 'e.g., Vegan, Gluten-free', action: () => console.log('Navigate to Dietary Tags Select') },
  ];

  return (
    <MobileScreenLayout screenTitle="Create Post">
      <motion.div
        className="upload-main-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={itemVariants} className="video-placeholder-container">
          <VideoIcon />
          <p>Add a video or photo</p>
          <button className="btn btn-outline-primary btn-small">Choose File</button>
        </motion.div>

        <motion.ul className="details-list" variants={listVariants}>
          {detailItems.map((item) => (
            <motion.li 
              key={item.id} 
              className="detail-item"
              variants={itemVariants}
              onClick={item.action}
              whileTap={{ backgroundColor: 'var(--color-neutral-200)' }}
            >
              <div className="detail-item-label">{item.label}</div>
              <div className="detail-item-value">{item.value}</div>
              <ChevronRightIcon />
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.button
          className="btn btn-primary"
          variants={itemVariants}
          style={{ marginTop: 'auto', width: '100%' }}
          onClick={() => console.log('Navigate to Schedule Send')}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Send
        </motion.button>

        <motion.button
          className="btn btn-secondary"
          variants={itemVariants}
          style={{ marginTop: 'var(--spacing-sm)', width: '100%' }}
          onClick={() => navigate('/create/upload-rules')} // Go back to Upload Rules
          whileTap={{ scale: 0.95 }}
        >
          Back
        </motion.button>

      </motion.div>
    </MobileScreenLayout>
  );
};

export default UploadMainScreen; 