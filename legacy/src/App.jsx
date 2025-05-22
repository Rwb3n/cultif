import { Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import './App.css';

// Screen Components
import SplashScreen from './components/screens/SplashScreen';
import OnboardingScreen1 from './components/screens/OnboardingScreen1';
import OnboardingScreen2 from './components/screens/OnboardingScreen2';
import OnboardingScreen3 from './components/screens/OnboardingScreen3';
import LoginScreen from './components/screens/LoginScreen';
import SignupScreen from './components/screens/SignupScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import HomeScreen from './components/screens/HomeScreen';
import CreateMenuScreen from './components/screens/CreateMenuScreen';
import UploadRulesScreen from './components/screens/UploadRulesScreen';
import UploadMainScreen from './components/screens/UploadMainScreen';
import UploadIngredientsScreen from './components/screens/UploadIngredientsScreen';
import UploadCountryScreen from './components/screens/UploadCountryScreen';
import UploadWeightGoalScreen from './components/screens/UploadWeightGoalScreen';
import UploadTimeScreen from './components/screens/UploadTimeScreen';
import NotFoundScreen from './components/screens/NotFoundScreen';


function App() {
  const location = useLocation();

  return (
    <>
      <nav style={{ padding: '10px', backgroundColor: 'var(--color-neutral-200)', marginBottom:'10px', display:'flex', gap:'10px', flexWrap: 'wrap'}}>
        <Link to="/">Splash</Link>
        <Link to="/onboarding/1">Onboarding1</Link>
        <Link to="/onboarding/2">Onboarding2</Link>
        <Link to="/onboarding/3">Onboarding3</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/forgot-password">Forgot Password</Link>
        <Link to="/home">Home Feed</Link>
        <Link to="/create">Create</Link>
        {/* <Link to="/create/upload-rules">Upload Rules (Debug)</Link> */}
        {/* <Link to="/create/upload-main">Upload Main (Debug)</Link> */}
        {/* <Link to="/create/upload-ingredients">Upload Ingredients (Debug)</Link> */}
        {/* <Link to="/create/upload-country">Upload Country (Debug)</Link> */}
        {/* <Link to="/create/upload-weight-goal">Upload Weight Goal (Debug)</Link> */}
        {/* <Link to="/create/upload-time">Upload Time (Debug)</Link> */}
        {/* <Link to="/plans">Plans</Link> */}
        {/* <Link to="/explore">Explore</Link> */}
      </nav>

      <div className="main-content-area" style={{paddingBottom: '80px' /* Ensure space for fixed footer */}}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/onboarding/1" element={<OnboardingScreen1 />} />
            <Route path="/onboarding/2" element={<OnboardingScreen2 />} />
            <Route path="/onboarding/3" element={<OnboardingScreen3 />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
            
            {/* Placeholder for main app routes */}
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/create" element={<CreateMenuScreen />} />
            <Route path="/create/upload-rules" element={<UploadRulesScreen />} />
            <Route path="/create/upload-main" element={<UploadMainScreen />} />
            <Route path="/create/upload-ingredients" element={<UploadIngredientsScreen />} />
            <Route path="/create/upload-country" element={<UploadCountryScreen />} />
            <Route path="/create/upload-weight-goal" element={<UploadWeightGoalScreen />} />
            <Route path="/create/upload-time" element={<UploadTimeScreen />} />
            {/* <Route path="/create" element={<CreateStartScreen />} /> ... etc. */}
            
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </AnimatePresence>
      </div>

      <footer style={{
        backgroundColor: 'var(--color-neutral-800)',
        color: 'var(--color-neutral-100)',
        padding: 'var(--spacing-md)',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000
      }}>
        <p>&copy; 2024 Cultif. All rights reserved. (g:82)</p>
      </footer>
    </>
  )
}

export default App 