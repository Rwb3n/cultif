/* ANNOTATION_BLOCK_START
{
  "artifact_id": "SlideNavigation_tsx_g181",
  "version_tag": "0.2.0-dots-only-g189",
  "g_created": 182,
  "g_last_modified": 189,
  "description": "Component for handling navigation dot indicators for slide progression.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide clear navigation cues (dot indicators) for the user during onboarding.",
  "key_logic_points": [
    "Displays dot indicators based on total steps and current step.",
    "Click handlers for dots will be passed as props from the parent (OnboardingPage)."
  ],
  "interfaces_provided": [
    { "name": "SlideNavigation", "interface_type": "REACT_COMPONENT", "details": "Displays navigation dots.", "notes": "Requires props for totalSteps, currentStep, and onDotClick." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." }
  ],
  "internal_dependencies": [],
  "dependents": ["OnboardingSlide_tsx_g181"],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g=189 to remove Auth CTAs; now solely handles dot navigation. Original structure at g=182."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
// Removed: import { Button } from "@/components/ui/button";

interface SlideNavigationProps {
  totalSteps: number;
  currentStep: number;
  onDotClick: (step: number) => void;
  // Removed: onLoginClick: () => void;
  // Removed: onSignupClick: () => void;
  className?: string;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  totalSteps,
  currentStep,
  onDotClick,
  // Removed: onLoginClick,
  // Removed: onSignupClick,
  className
}) => {
  return (
    <div className={`w-full flex flex-col items-center space-y-2 ${className}`}> {/* Reduced space-y from 4 to 2 as CTAs are gone */}
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

      {/* Auth CTAs - REMOVED
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full pt-3">
        <Button onClick={onLoginClick} variant="outline" className="w-full py-3 text-base">
          Log In
        </Button>
        <Button onClick={onSignupClick} className="w-full py-3 text-base">
          Sign Up
        </Button>
      </div>
      */}
    </div>
  );
};

export default SlideNavigation; 