/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_onboarding_g112",
  "version_tag": "0.2.0-tailwind-refactor-tsx",
  "g_created": 117,
  "g_last_modified": 160,
  "description": "REFACTORED (TSX): Component for the Onboarding flow (multi-step), refactored to use Tailwind CSS for styling and layout, and shadcn/ui Button for navigation. Manages the display of individual onboarding screens or steps.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a responsive and consistently styled user onboarding experience using Tailwind CSS and shadcn/ui components. References Figma Catalogue ID: T-01.",
  "key_logic_points": [
    "Layout refactored using Tailwind CSS for a mobile-first, centered presentation of onboarding steps.",
    "Uses `shadcn/ui Button` for 'Next', 'Back', 'Skip', and 'Get Started' actions.",
    "Manages state for the current onboarding step.",
    "Renders different content (title, description, image placeholder) based on the current step.",
    "Includes simple dot indicators for steps, styled with Tailwind."
  ],
  "interfaces_provided": [
    { "name": "OnboardingPage", "interface_type": "REACT_COMPONENT", "details": "The main component for the onboarding sequence.", "notes": "Uses mock data for steps." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For navigation (useNavigate hook)." }
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
    "manual_review_comment": "Refactored at g=160 to use Tailwind CSS and shadcn/ui Button. Original scaffold g117. Image placeholders are still text."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface OnboardingStepData {
  id: number;
  title: string;
  description: string;
  imagePlaceholder: string; // Placeholder text for image, e.g., 'Illustration of friendly robot'
  imageRef?: string; // Figma image ref like T-01a_img
}

const onboardingSteps: OnboardingStepData[] = [
  { id: 1, title: 'Welcome to Cultif!', description: 'Discover amazing recipes from talented creators.', imagePlaceholder: '[Illustration: Welcome Screen]', imageRef: 'T-01a_img' },
  { id: 2, title: 'Personalize Your Experience', description: 'Tell us your preferences to get tailored content.', imagePlaceholder: '[Illustration: Preference Selection]', imageRef: 'T-01b_img' },
  { id: 3, title: 'Start Exploring', description: 'Your culinary adventure begins now.', imagePlaceholder: '[Illustration: Food Discovery]', imageRef: 'T-01c_img' },
];

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 dark:from-slate-900 dark:to-stone-800 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md text-center space-y-6 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-xl shadow-2xl">
        {/* Image Placeholder - visually represented */}
        <div className="w-full h-48 sm:h-60 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm">{stepData.imagePlaceholder} ({stepData.imageRef})</p>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">{stepData.title}</h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
          {stepData.description}
        </p>
        
        {/* Step Indicators */}
        <div className="flex justify-center space-x-2 pt-2">
          {onboardingSteps.map((_, index) => (
            <div 
              key={index} 
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentStep ? 'bg-primary w-6' : 'bg-slate-300 dark:bg-slate-600'}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="pt-6 space-y-3">
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

        <p className="pt-4 text-xs text-slate-400 dark:text-slate-500">
          Figma Ref: T-01 (Step {currentStep + 1} of {onboardingSteps.length})
        </p>
      </div>
    </div>
  );
};

export default OnboardingPage; 