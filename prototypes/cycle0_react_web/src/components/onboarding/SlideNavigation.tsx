/* ANNOTATION_BLOCK_START
{
  "artifact_id": "SlideNavigation_tsx_g181",
  "version_tag": "0.1.0",
  "g_created": 182,
  "g_last_modified": 185,
  "description": "Component for handling navigation elements within an onboarding slide. This includes dot indicators for slide progression and Call-to-Action buttons for Log In and Sign Up.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide clear navigation cues and primary actions (Log In/Sign Up) for the user during onboarding, replacing former Next/Skip/Back buttons.",
  "key_logic_points": [
    "Displays dot indicators based on total steps and current step.",
    "Provides 'Log In' and 'Sign Up' buttons.",
    "Click handlers for dots and CTAs will be passed as props from the parent (OnboardingPage)."
  ],
  "interfaces_provided": [
    { "name": "SlideNavigation", "interface_type": "REACT_COMPONENT", "details": "Displays navigation dots and Auth CTAs.", "notes": "Requires props for totalSteps, currentStep, onDotClick, onLoginClick, onSignupClick." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "@/components/ui/button", "version": "shadcn/ui", "reason": "For Button component." }
  ],
  "internal_dependencies": ["shadcn_ui_button_g160"],
  "dependents": ["OnboardingSlide_tsx_g181"],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial structure for the slide navigation component with dots and Auth CTAs at g=182."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import { Button } from "@/components/ui/button";

interface SlideNavigationProps {
  totalSteps: number;
  currentStep: number;
  onDotClick: (step: number) => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
  className?: string;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  totalSteps,
  currentStep,
  onDotClick,
  onLoginClick,
  onSignupClick,
  className
}) => {
  return (
    <div className={`w-full flex flex-col items-center space-y-4 ${className}`}>
      {/* Step Indicators */}
      <div className="flex justify-center space-x-2 py-2 shrink-0">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentStep ? 'bg-primary w-6' : 'bg-slate-300 dark:bg-slate-600'
            }`}
          />
        ))}
      </div>

      {/* Auth CTAs */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full pt-3">
        <Button onClick={onLoginClick} variant="outline" className="w-full py-3 text-base">
          Log In
        </Button>
        <Button onClick={onSignupClick} className="w-full py-3 text-base">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SlideNavigation; 