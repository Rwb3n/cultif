import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './LoginScreen.css'; // Import new CSS

const LoginScreen = () => {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const screenVariants = {
    initial: { opacity: 0, y: 50 }, // Slide in from bottom
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

  const handleLogin = () => {
    setIsLoggingIn(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoggingIn(false);
      // Navigate to home screen (assuming /home is the route)
      // TODO: Ensure /home route exists and is appropriate target
      navigate('/home'); 
    }, 1000);
  };

  return (
    <MobileScreenLayout screenTitle="Login">
      <motion.div 
        className="login-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h2 variants={itemVariants} style={{marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)'}}>Welcome Back</motion.h2>
        
        <motion.div className="login-form" variants={formContainerVariants}>
          <motion.div className="form-field" variants={itemVariants}>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoggingIn}
            />
          </motion.div>
          <motion.div className="form-field" variants={itemVariants}>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoggingIn}
            />
          </motion.div>

          <motion.div className="login-actions" variants={itemVariants}>
            <motion.button 
              className="btn btn-primary" 
              style={{width: '100%'}}
              onClick={handleLogin}
              disabled={isLoggingIn}
              whileTap={{ scale: 0.95 }}
            >
              {isLoggingIn ? 'Logging In...' : 'Log In'}
            </motion.button>
          </motion.div>
          
          <motion.div variants={itemVariants}>
             <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
          </motion.div>
        </motion.div>

        <motion.div className="social-login-placeholder" variants={itemVariants}>
          <p>Or continue with</p>
          <div className="social-buttons-container">
            <motion.div className="social-button-placeholder" variants={itemVariants} whileTap={{ scale: 0.9 }}>G</motion.div>
            <motion.div className="social-button-placeholder" variants={itemVariants} whileTap={{ scale: 0.9 }}>Fb</motion.div>
            <motion.div className="social-button-placeholder" variants={itemVariants} whileTap={{ scale: 0.9 }}>Ap</motion.div>
          </div>
        </motion.div>

        <motion.p className="signup-prompt" variants={itemVariants} style={{marginTop: 'auto', paddingTop: 'var(--spacing-lg)'}}>
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </motion.p>
        
      </motion.div>
    </MobileScreenLayout>
  );
};

export default LoginScreen; 