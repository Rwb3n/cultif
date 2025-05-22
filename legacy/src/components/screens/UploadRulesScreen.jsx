import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './UploadRulesScreen.css';

const UploadRulesScreen = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(agreed);
  }, [agreed]);

  const screenVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  const rulesText = `
    1. Content must be original and owned by you.
    2. No copyrighted music or visuals unless you have explicit permission.
    3. Videos should be high quality and well-lit.
    4. Recipes must be accurate and tested.
    5. Be respectful and avoid offensive language or imagery.
    6. Ensure your content adheres to all community guidelines.
    7. Repeated violations may lead to account suspension.
  `;

  const handleProceed = () => {
    if (isButtonEnabled) {
      navigate('/create/upload-main'); // Placeholder for Screen 4.3
    }
  };

  return (
    <MobileScreenLayout screenTitle="Upload Rules">
      <motion.div
        className="upload-rules-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h2 variants={itemVariants}>Content Upload Rules</motion.h2>
        
        <motion.div className="rules-container" variants={itemVariants}>
          <pre>{rulesText}</pre>
        </motion.div>

        <motion.div className="agreement-section" variants={itemVariants}>
          <input 
            type="checkbox" 
            id="agree-checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <label htmlFor="agree-checkbox">I have read and agree to the upload rules.</label>
        </motion.div>

        <motion.button
          className={`btn ${isButtonEnabled ? 'btn-primary' : 'btn-disabled'}`}
          variants={itemVariants}
          style={{ marginTop: 'auto', width: '100%' }}
          onClick={handleProceed}
          disabled={!isButtonEnabled}
          whileTap={isButtonEnabled ? { scale: 0.95 } : {}}
        >
          Proceed to Upload
        </motion.button>

        <motion.button
          className="btn btn-secondary"
          variants={itemVariants}
          style={{ marginTop: 'var(--spacing-sm)', width: '100%' }}
          onClick={() => navigate('/create')} // Go back to Create Menu
          whileTap={{ scale: 0.95 }}
        >
          Back
        </motion.button>

      </motion.div>
    </MobileScreenLayout>
  );
};

export default UploadRulesScreen; 