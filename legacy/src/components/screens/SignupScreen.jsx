import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './SignupScreen.css'; // To be created

const SignupScreen = () => {
  const navigate = useNavigate();
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

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

  const handleSignup = () => {
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setIsSigningUp(true);
    // Simulate API call
    setTimeout(() => {
      setIsSigningUp(false);
      // For now, navigate to login screen after signup.
      // User can then login with their new credentials (simulated).
      navigate('/login'); 
    }, 1500);
  };

  return (
    <MobileScreenLayout screenTitle="Create Account">
      <motion.div 
        className="signup-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h2 variants={itemVariants} style={{marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)'}}>Create Your Account</motion.h2>
        
        <motion.div className="signup-form" variants={formContainerVariants}>
          <motion.div className="form-field" variants={itemVariants}>
            <input 
              type="text" 
              placeholder="Full Name" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isSigningUp}
            />
          </motion.div>
          <motion.div className="form-field" variants={itemVariants}>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSigningUp}
            />
          </motion.div>
          <motion.div className="form-field" variants={itemVariants}>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSigningUp}
            />
          </motion.div>
          <motion.div className="form-field" variants={itemVariants}>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isSigningUp}
            />
          </motion.div>

          {error && <motion.p variants={itemVariants} className="error-message">{error}</motion.p>}

          <motion.div className="signup-actions" variants={itemVariants}>
            <motion.button 
              className="btn btn-primary" 
              style={{width: '100%'}}
              onClick={handleSignup}
              disabled={isSigningUp}
              whileTap={{ scale: 0.95 }}
            >
              {isSigningUp ? 'Creating Account...' : 'Create Account'}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.p className="login-prompt" variants={itemVariants} style={{marginTop: 'auto', paddingTop: 'var(--spacing-lg)'}}>
          Already have an account? <Link to="/login">Log In</Link>
        </motion.p>
        
      </motion.div>
    </MobileScreenLayout>
  );
};

export default SignupScreen; 