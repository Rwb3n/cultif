/* ANNOTATION_BLOCK_START
{
  "artifact_id": "OnboardingPage_tsx_g181",
  "version_tag": "0.4.0-refactor-modular-g182",
  "g_created": 182,
  "g_last_modified": 185,
  "description": "Refactored OnboardingPage to use modular components (OnboardingLogo, OnboardingSlide) and updated navigation (swipe, dots, Auth CTAs only, no Next/Skip/Back). Manages overall onboarding state and animations.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide an immersive, app-like onboarding experience by orchestrating modular slide components and animations, aligning with plan_cycle0_onboarding_g181.",
  "key_logic_points": [
    "Full-screen layout achieved using Tailwind CSS (min-h-screen, flex).",
    "Framer Motion used for sequential animations: logo fade-in, logo fade-out, then onboarding slide content fade-in/transitions.",
    "State management for animation sequence (showLogo, showSlides) and current slide index.",
    "Uses new modular components: OnboardingLogo and OnboardingSlide.",
    "OnboardingSlide internally uses SlideVisual, SlideTextContent, and SlideNavigation.",
    "SlideNavigation provides dot indicators and Log In/Sign Up buttons.",
    "Navigation primarily by swipe (to be implemented in next task) and dot clicks.",
    "Removed old Next, Skip, Back button logic and UI elements."
  ],
  "interfaces_provided": [
    { "name": "OnboardingPage", "interface_type": "REACT_COMPONENT", "details": "The main component for the onboarding sequence.", "notes": "Uses mock data for slide content." }
  ],
  "requisites": [
    { "description": "Framer Motion library installed.", "type": "LIBRARY_DEPENDENCY" },
    { "description": "Modular onboarding components (OnboardingLogo, OnboardingSlide, etc.) available.", "type": "INTERNAL_DEPENDENCY"}
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For navigation (useNavigate hook)." },
    { "name": "framer-motion", "version": "^12.12.1", "reason": "For UI animations."}
  ],
  "internal_dependencies": [
    "OnboardingLogo_tsx_g181",
    "OnboardingSlide_tsx_g181"
  ],
  "dependents": [
    "cycle0_router_config_g112" 
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g=182 to implement modular structure and new navigation model as per plan_cycle0_onboarding_g181_task_001. Previous artifact_id cycle0_page_onboarding_g112."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import OnboardingLogo from '@/components/onboarding/OnboardingLogo';
import OnboardingSlide, { OnboardingSlideData } from '@/components/onboarding/OnboardingSlide';

// Keep existing slide data structure, add imageSrc for actual images later
const onboardingSlidesData: OnboardingSlideData[] = [
  { id: 1, title: 'Welcome to Cultif!', description: 'Discover amazing recipes from talented creators.', imagePlaceholder: '[Illustration: Welcome Screen]' /* imageSrc: 'path/to/image1.jpg' */ },
  { id: 2, title: 'Personalize Your Experience', description: 'Tell us your preferences to get tailored content.', imagePlaceholder: '[Illustration: Preference Selection]' /* imageSrc: 'path/to/image2.jpg' */ },
  { id: 3, title: 'Start Exploring', description: 'Your culinary adventure begins now.', imagePlaceholder: '[Illustration: Food Discovery]' /* imageSrc: 'path/to/image3.jpg' */ },
];

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [animationState, setAnimationState] = useState('logoFadeIn'); 
  const [slideDirection, setSlideDirection] = useState(1); // 1 for next, -1 for prev

  useEffect(() => {
    if (animationState === 'logoFadeIn') {
      const timer = setTimeout(() => setAnimationState('logoFadeOut'), 2000); // Show logo for 2s
      return () => clearTimeout(timer);
    } else if (animationState === 'logoFadeOut') {
      const timer = setTimeout(() => setAnimationState('slidesVisible'), 500); // Transition time after logo fades
      return () => clearTimeout(timer);
    }
  }, [animationState]);

  const handleDotClick = (index: number) => {
    if (index === currentStepIndex) return;
    setSlideDirection(index > currentStepIndex ? 1 : -1);
    setCurrentStepIndex(index);
  };

  const handleLoginClick = () => {
    console.log('Navigate to Login page');
    navigate('/auth/login'); // Assuming /auth/login is the route for T-11 placeholder
  };

  const handleSignupClick = () => {
    console.log('Navigate to Sign Up page');
    navigate('/auth/signup'); // Assuming /auth/signup is the route for T-11 placeholder
  };

  const changeSlide = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= onboardingSlidesData.length) return;
    setSlideDirection(newIndex > currentStepIndex ? 1 : -1);
    setCurrentStepIndex(newIndex);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent, 
    info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
  ) => {
    const swipeThreshold = 50; // Min distance for a swipe
    const swipeVelocityThreshold = 200; // Min velocity for a swipe
    const { x: offsetX, y: offsetY } = info.offset;
    const { x: velocityX } = info.velocity;

    // Prioritize Y-scroll if vertical drag is significant (optional, good for scrollable content within slide)
    if (Math.abs(offsetY) > Math.abs(offsetX)) {
        return;
    }

    if (offsetX < -swipeThreshold || velocityX < -swipeVelocityThreshold) {
      // Swipe Left (Next)
      changeSlide(currentStepIndex + 1);
    } else if (offsetX > swipeThreshold || velocityX > swipeVelocityThreshold) {
      // Swipe Right (Previous)
      changeSlide(currentStepIndex - 1);
    }
  };

  const currentSlideData = onboardingSlidesData[currentStepIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-600 dark:bg-green-800 p-0 overflow-hidden relative">
      <AnimatePresence mode='wait'>
        {(animationState === 'logoFadeIn' || animationState === 'logoFadeOut') && (
          <motion.div
            key="logoContainer"
            initial={{ opacity: animationState === 'logoFadeIn' ? 0 : 1, scale: animationState === 'logoFadeIn' ? 0.5 : 1 }}
            animate={{ opacity: animationState === 'logoFadeIn' ? 1 : 0, scale: animationState === 'logoFadeIn' ? 1 : 0.5 }}
            exit={{ opacity: 0, scale: 0.5 }} // Should not be needed with mode='wait' but good for explicit control
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <OnboardingLogo />
          </motion.div>
        )}

        {animationState === 'slidesVisible' && (
          <motion.div // This div will handle swipe and animations for slides
            key={`slide-${currentSlideData.id}`}
            initial={{ opacity: 0, x: slideDirection * 300 }} // Slide in from right (300) or left (-300)
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -slideDirection * 300 }} // Slide out to left (-300) or right (300)
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full h-full flex items-center justify-center"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            <div className="flex flex-col w-full h-full max-w-md text-center bg-white dark:bg-slate-950 shadow-2xl items-center justify-center md:rounded-xl md:h-auto md:max-h-[95vh]">
              <OnboardingSlide
                slideData={currentSlideData}
                totalSteps={onboardingSlidesData.length}
                currentStepIndex={currentStepIndex}
                onDotClick={handleDotClick}
                onLoginClick={handleLoginClick}
                onSignupClick={handleSignupClick}
              />
               <p className="pb-4 text-xs text-slate-400 dark:text-slate-500 shrink-0">
                 Figma Ref: T-01 (Slide {currentStepIndex + 1} of {onboardingSlidesData.length})
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OnboardingPage; 