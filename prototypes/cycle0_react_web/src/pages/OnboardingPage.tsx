/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_onboarding_g112",
  "version_tag": "0.3.0-ux-realignment-g164",
  "g_created": 117,
  "g_last_modified": 164,
  "description": "REFACTORED (TSX) for UX Realignment: Onboarding page adapted for a full-screen, animated experience using Framer Motion. Features a single content card, no global navigation/footer, and aims for no vertical scrolling. Animations include logo fade-in/out and card fade-in.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide an immersive, app-like onboarding experience as per stakeholder feedback g162. Utilizes Framer Motion for animations and ensures a focused, single-screen interaction.",
  "key_logic_points": [
    "Full-screen layout achieved using Tailwind CSS (min-h-screen, flex).",
    "Framer Motion used for sequential animations: logo fade-in, logo fade-out, then onboarding card content fade-in.",
    "State management for animation sequence (e.g., showLogo, showCard).",
    "No Header or Footer components are rendered on this page.",
    "The main content card is designed to fit screen height without causing page scroll.",
    "Uses `shadcn/ui Button` for navigation within the onboarding steps.",
    "Step indicators and multi-step logic remain from previous version."
  ],
  "interfaces_provided": [
    { "name": "OnboardingPage", "interface_type": "REACT_COMPONENT", "details": "The main component for the onboarding sequence.", "notes": "Uses mock data for steps." }
  ],
  "requisites": [
    { "description": "Framer Motion library installed and available.", "type": "LIBRARY_DEPENDENCY" },
    { "description": "Stakeholder feedback from project_review_and_feedback_analysis_g162 detailing UX requirements.", "type": "REQUIREMENT_SOURCE"}
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For navigation (useNavigate hook)." },
    { "name": "framer-motion", "version": "^12.12.1", "reason": "For UI animations."}
  ],
  "internal_dependencies": [
    "shadcn_ui_button_g160"
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g=164 to implement new UX/animation requirements from project_review_and_feedback_analysis_g162. Previous version 0.2.0-tailwind-refactor-tsx g_last_modified=160."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react'; // Placeholder for Cultif logo

interface OnboardingStepData {
  id: number;
  title: string;
  description: string;
  imagePlaceholder: string; 
  imageRef?: string; 
}

const onboardingSteps: OnboardingStepData[] = [
  { id: 1, title: 'Welcome to Cultif!', description: 'Discover amazing recipes from talented creators.', imagePlaceholder: '[Illustration: Welcome Screen]', imageRef: 'T-01a_img' },
  { id: 2, title: 'Personalize Your Experience', description: 'Tell us your preferences to get tailored content.', imagePlaceholder: '[Illustration: Preference Selection]', imageRef: 'T-01b_img' },
  { id: 3, title: 'Start Exploring', description: 'Your culinary adventure begins now.', imagePlaceholder: '[Illustration: Food Discovery]', imageRef: 'T-01c_img' },
];

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [animationState, setAnimationState] = useState('logoFadeIn'); // logoFadeIn, logoFadeOut, cardFadeIn

  useEffect(() => {
    if (animationState === 'logoFadeIn') {
      const timer = setTimeout(() => setAnimationState('logoFadeOut'), 2000); // Show logo for 2s
      return () => clearTimeout(timer);
    } else if (animationState === 'logoFadeOut') {
      const timer = setTimeout(() => setAnimationState('cardFadeIn'), 500); // Transition time after logo fades
      return () => clearTimeout(timer);
    }
  }, [animationState]);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Onboarding complete, navigating to /home');
      navigate('/home');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    console.log('Skipped onboarding, navigating to /home');
    navigate('/home');
  };

  const stepData = onboardingSteps[currentStep];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-600 dark:bg-green-800 p-0 overflow-hidden">
      <AnimatePresence mode='wait'>
        {animationState === 'logoFadeIn' && (
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-white"
          >
            <Leaf size={128} /> 
            <h1 className="text-5xl font-bold mt-4">Cultif</h1>
          </motion.div>
        )}

        {animationState === 'logoFadeOut' && (
          <motion.div
            key="logo-fading"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-white"
          >
            <Leaf size={128} />
            <h1 className="text-5xl font-bold mt-4">Cultif</h1>
          </motion.div>
        )}

        {animationState === 'cardFadeIn' && (
          <motion.div
            key="onboardingCard"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col w-full h-full max-w-md text-center bg-white dark:bg-slate-950 shadow-2xl items-center justify-center p-6 sm:p-8 space-y-6 overflow-y-auto no-scrollbar md:rounded-xl md:h-auto md:max-h-[90vh]"
          >
            {/* Image Placeholder - visually represented */}
            <div className="w-full h-48 sm:h-60 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 shrink-0">
              <p className="text-slate-500 dark:text-slate-400 text-sm">{stepData.imagePlaceholder} ({stepData.imageRef})</p>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 shrink-0">{stepData.title}</h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base grow overflow-y-auto no-scrollbar">
              {stepData.description}
            </p>
            
            {/* Step Indicators */}
            <div className="flex justify-center space-x-2 pt-2 shrink-0">
              {onboardingSteps.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentStep ? 'bg-primary w-6' : 'bg-slate-300 dark:bg-slate-600'}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="pt-6 space-y-3 w-full shrink-0">
              <Button onClick={handleNext} className="w-full py-3 text-base">
                {currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
              </Button>
              <div className="flex space-x-3">
                {currentStep > 0 && (
                  <Button onClick={handleBack} variant="outline" className="w-full py-3 text-base">Back</Button>
                )}
                {currentStep < onboardingSteps.length - 1 && (
                    <Button onClick={handleSkip} variant={currentStep === 0 ? "outline" : "ghost"} className="w-full py-3 text-base">
                      Skip
                    </Button>
                )}
              </div>
            </div>

            <p className="pt-4 text-xs text-slate-400 dark:text-slate-500 shrink-0">
              Figma Ref: T-01 (Step {currentStep + 1} of {onboardingSteps.length})
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OnboardingPage; 