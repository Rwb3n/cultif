import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './ForgotPasswordScreen.css'; // To be created

const ForgotPasswordScreen = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const screenVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  const formContainerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  const handleSubmit = () => {
    setMessage('');
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage(`If an account exists for ${email}, a password reset link has been sent.`);
      // Optionally, navigate away or clear form
      // navigate('/login'); 
    }, 1500);
  };

  return (
    <MobileScreenLayout screenTitle="Reset Password">
      <motion.div 
        className="forgot-password-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h2 variants={itemVariants} style={{marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)'}}>Forgot Your Password?</motion.h2>
        <motion.p variants={itemVariants} style={{marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-secondary)'}}>Enter your email address and we&apos;ll send you a link to reset your password.</motion.p>
        
        <motion.div className="forgot-password-form" variants={formContainerVariants}>
          <motion.div className="form-field" variants={itemVariants}>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
          </motion.div>

          {message && <motion.p variants={itemVariants} className={`message ${message.startsWith('If an') ? 'message-success' : 'message-error'}`}>{message}</motion.p>}

          <motion.div className="forgot-password-actions" variants={itemVariants}>
            <motion.button 
              className="btn btn-primary" 
              style={{width: '100%'}}
              onClick={handleSubmit}
              disabled={isSubmitting}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending Link...' : 'Send Reset Link'}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} style={{marginTop: 'auto', paddingTop: 'var(--spacing-lg)'}}>
          <Link to="/login" className="back-to-login-link">Back to Log In</Link>
        </motion.div>
        
      </motion.div>
    </MobileScreenLayout>
  );
};

export default ForgotPasswordScreen; 