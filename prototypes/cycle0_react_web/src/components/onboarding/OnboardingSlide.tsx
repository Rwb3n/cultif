/* ANNOTATION_BLOCK_START
{
  "artifact_id": "OnboardingSlide_tsx_g181",
  "version_tag": "0.1.0",
  "g_created": 182,
  "g_last_modified": 185,
  "description": "Reusable component to display individual onboarding slide content. It composes SlideVisual, SlideTextContent, and SlideNavigation components.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a consistent structure for each slide in the onboarding carousel, ensuring modularity and separation of concerns.",
  "key_logic_points": [
    "Receives slide-specific data (title, description, image/placeholder) and navigation handlers as props.",
    "Renders SlideVisual, SlideTextContent, and SlideNavigation components with the appropriate data and handlers.",
    "Designed to be animated by its parent (e.g., Framer Motion transitions in OnboardingPage)."
  ],
  "interfaces_provided": [
    { "name": "OnboardingSlide", "interface_type": "REACT_COMPONENT", "details": "Component representing a single onboarding slide.", "notes": "Props include slide data and navigation callbacks." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." }
  ],
  "internal_dependencies": [
    "SlideVisual_tsx_g181",
    "SlideTextContent_tsx_g181",
    "SlideNavigation_tsx_g181"
  ],
  "dependents": ["OnboardingPage_tsx_g181"],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial structure for the composable onboarding slide component at g=182."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import SlideVisual from './SlideVisual';
import SlideTextContent from './SlideTextContent';
import SlideNavigation from './SlideNavigation';

export interface OnboardingSlideData {
  id: number | string; // Allow string if imageRef is used as ID
  title: string;
  description: string;
  imagePlaceholder: string;
  imageSrc?: string; // Optional actual image source
}

interface OnboardingSlideProps {
  slideData: OnboardingSlideData;
  totalSteps: number;
  currentStepIndex: number; // Index of the current slide
  onDotClick: (stepIndex: number) => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
  className?: string;
}

const OnboardingSlide: React.FC<OnboardingSlideProps> = ({
  slideData,
  totalSteps,
  currentStepIndex,
  onDotClick,
  onLoginClick,
  onSignupClick,
  className
}) => {
  return (
    <div className={`flex flex-col w-full h-full items-center justify-between ${className}`}>
      <SlideVisual 
        imageSrc={slideData.imageSrc}
        placeholderText={slideData.imagePlaceholder} 
        className="shrink-0"
      />
      <div className="flex flex-col items-center justify-center p-6 space-y-6 bg-teal-500 dark:bg-teal-700 w-full rounded-t-3xl sm:rounded-t-none flex-grow">
        <SlideTextContent 
          title={slideData.title} 
          description={slideData.description} 
          className="text-white dark:text-teal-50"
        />
        <SlideNavigation
          totalSteps={totalSteps}
          currentStep={currentStepIndex}
          onDotClick={onDotClick}
          onLoginClick={onLoginClick}
          onSignupClick={onSignupClick}
        />
      </div>
    </div>
  );
};

export default OnboardingSlide; 