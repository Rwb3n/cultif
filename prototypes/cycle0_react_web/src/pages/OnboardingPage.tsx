/* ANNOTATION_BLOCK_START
{
  "artifact_id": "OnboardingPage_tsx_g181",
  "version_tag": "0.7.0-index-based-animation-g197",
  "g_created": 182,
  "g_last_modified": 197,
  "description": "Completely reimplemented slide animations with a simple, reliable index-based approach that doesn't rely on tracking directional state.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide an immersive, app-like onboarding experience with consistent, natural animations that always follow user expectations for directional flow.",
  "key_logic_points": [
    "Animation approach completely rewritten to use page-based pattern with index comparison.",
    "AnimatePresence 'custom' prop now receives the current page index, removing need for separate direction state.",
    "Animation direction determined by comparing previous and current page index during render, ensuring consistency.",
    "Simpler variants for left/right page transitions: prev/next are always in expected directions.",
    "No reliance on state variables that could get out of sync between transitions.",
    "Maintains all previous layout fixes (top alignment, scroll prevention, shadow removal, etc.)."
  ],
  "interfaces_provided": [
    { "name": "OnboardingPage", "interface_type": "REACT_COMPONENT", "details": "Main onboarding component with reliable index-based slide animations.", "notes": "Uses mock data for slide content." }
  ],
  "requisites": [
    { "description": "Framer Motion library installed.", "type": "LIBRARY_DEPENDENCY" },
    { "description": "Modular onboarding components available.", "type": "INTERNAL_DEPENDENCY"},
    { "description": "Button component from shadcn/ui available.", "type": "INTERNAL_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For navigation (useNavigate hook)." },
    { "name": "framer-motion", "version": "^12.12.1", "reason": "For UI animations."}
  ],
  "internal_dependencies": [
    "OnboardingLogo_tsx_g181",
    "OnboardingSlide_tsx_g181",
    "shadcn_ui_button_g160"
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": [
    "issue_onboarding_scroll_g190", 
    "issue_slide_shadow_g191", 
    "issue_onboarding_top_align_g192", 
    "issue_figma_ref_placement_g193",
    "issue_onboarding_animation_jank_g195",
    "issue_animation_direction_fix_g196",
    "issue_animation_final_fix_g197"
  ],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "At g=197, completely rewrote animation logic using a simple index-based approach that doesn't track direction in state. Linked issue_animation_final_fix_g197. Previous swipe-direction approach at g=196 resulted in inconsistent animations."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import OnboardingLogo from '@/components/onboarding/OnboardingLogo';
import OnboardingSlide, { OnboardingSlideData } from '@/components/onboarding/OnboardingSlide';
import { Button } from "@/components/ui/button";

// Keep existing slide data structure, add imageSrc for actual images later
const onboardingSlidesData: OnboardingSlideData[] = [
  { id: 1, title: 'Welcome to Cultif!', description: 'Discover amazing recipes from talented creators.', imagePlaceholder: '[Illustration: Welcome Screen]' /* imageSrc: 'path/to/image1.jpg' */ },
  { id: 2, title: 'Personalize Your Experience', description: 'Tell us your preferences to get tailored content.', imagePlaceholder: '[Illustration: Preference Selection]' /* imageSrc: 'path/to/image2.jpg' */ },
  { id: 3, title: 'Start Exploring', description: 'Your culinary adventure begins now.', imagePlaceholder: '[Illustration: Food Discovery]' /* imageSrc: 'path/to/image3.jpg' */ },
];

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState('logoFadeIn');
  // Use a ref to remember the previous index for animation direction
  const prevIndexRef = useRef(0);

  useEffect(() => {
    if (animationState === 'logoFadeIn') {
      const timer = setTimeout(() => setAnimationState('logoFadeOut'), 2000); // Show logo for 2s
      return () => clearTimeout(timer);
    } else if (animationState === 'logoFadeOut') {
      const timer = setTimeout(() => setAnimationState('slidesVisible'), 500); // Transition time after logo fades
      return () => clearTimeout(timer);
    }
  }, [animationState]);

  // Update prevIndexRef after state has been updated
  useEffect(() => {
    prevIndexRef.current = currentIndex;
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const handleLoginClick = () => {
    console.log('Navigate to Login page');
    navigate('/auth/login');
  };

  const handleSignupClick = () => {
    console.log('Navigate to Sign Up page');
    navigate('/auth/signup');
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent, 
    info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
  ) => {
    const swipeThreshold = 50; // Min distance for a swipe
    const swipeVelocityThreshold = 200; // Min velocity for a swipe
    const { x: offsetX, y: offsetY } = info.offset;
    const { x: velocityX } = info.velocity;

    // Prioritize Y-scroll if vertical drag is significant
    if (Math.abs(offsetY) > Math.abs(offsetX)) {
        return;
    }

    if (offsetX < -swipeThreshold || velocityX < -swipeVelocityThreshold) {
      // Swipe Left (Next)
      if (currentIndex < onboardingSlidesData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (offsetX > swipeThreshold || velocityX > swipeVelocityThreshold) {
      // Swipe Right (Previous)
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const currentSlideData = onboardingSlidesData[currentIndex];

  // Simple animation variants based on direction
  const variants = {
    // Moving forward (left swipe)
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  // Determine if we're moving forward or backward based on index comparison
  const getDirection = (current: number, prev: number) => current > prev ? 1 : -1;

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
      <AnimatePresence mode='wait'>
        {(animationState === 'logoFadeIn' || animationState === 'logoFadeOut') && (
          <motion.div
            key="logoContainer"
            initial={{ opacity: animationState === 'logoFadeIn' ? 0 : 1, scale: animationState === 'logoFadeIn' ? 0.5 : 1 }}
            animate={{ opacity: animationState === 'logoFadeIn' ? 1 : 0, scale: animationState === 'logoFadeIn' ? 1 : 0.5 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <OnboardingLogo />
          </motion.div>
        )}

        {animationState === 'slidesVisible' && (
          <AnimatePresence 
            initial={false} 
            mode="wait"
            custom={getDirection(currentIndex, prevIndexRef.current)}
          >
            <motion.div
              key={currentIndex}
              custom={getDirection(currentIndex, prevIndexRef.current)}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
            >
              <div className="flex flex-col w-full h-full max-w-md text-center bg-white dark:bg-slate-950 items-center justify-center md:rounded-xl">
                <OnboardingSlide
                  slideData={currentSlideData}
                  totalSteps={onboardingSlidesData.length}
                  currentStepIndex={currentIndex}
                  onDotClick={handleDotClick}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </AnimatePresence>

      {/* Static CTA Buttons - Conditionally Rendered */}
      <AnimatePresence>
        {animationState === 'slidesVisible' && (
          <motion.div
            key="staticAuthButtons"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 pt-4 px-4 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full max-w-md">
              <Button onClick={handleLoginClick} variant="outline" className="w-full py-3 text-base">
                Log In
              </Button>
              <Button onClick={handleSignupClick} className="w-full py-3 text-base">
                Sign Up
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OnboardingPage; 