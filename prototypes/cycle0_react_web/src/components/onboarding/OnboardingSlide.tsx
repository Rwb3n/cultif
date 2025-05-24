/* ANNOTATION_BLOCK_START
{
  "artifact_id": "OnboardingSlide_tsx_g181",
  "version_tag": "0.1.3-figma-ref-added-g193",
  "g_created": 182,
  "g_last_modified": 193,
  "description": "Reusable component to display individual onboarding slide content. It composes SlideVisual, SlideTextContent, and SlideNavigation components. Now also displays a Figma reference paragraph.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a consistent structure for each slide in the onboarding carousel, including dev-facing reference information, ensuring modularity and separation of concerns.",
  "key_logic_points": [
    "Receives slide-specific data (title, description, image/placeholder) and dot navigation handlers as props.",
    "Renders SlideVisual, SlideTextContent, and SlideNavigation components with the appropriate data and handlers.",
    "Displays a Figma reference paragraph at the bottom of the slide's content area.",
    "Designed to be animated by its parent (e.g., Framer Motion transitions in OnboardingPage)."
  ],
  "interfaces_provided": [
    { "name": "OnboardingSlide", "interface_type": "REACT_COMPONENT", "details": "Component representing a single onboarding slide, including Figma ref text.", "notes": "Props include slide data and dot navigation callbacks." }
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
  "linked_issue_ids": ["issue_figma_ref_placement_g193"],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "At g=193, added the Figma reference paragraph. Linked issue_figma_ref_placement_g193. Previous CTA prop removal at g=189."
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
  className?: string;
}

const OnboardingSlide: React.FC<OnboardingSlideProps> = ({
  slideData,
  totalSteps,
  currentStepIndex,
  onDotClick,
  className
}) => {
  return (
    <div className={`flex flex-col w-full h-full items-center justify-between ${className}`}>
      <SlideVisual 
        imageSrc={slideData.imageSrc}
        placeholderText={slideData.imagePlaceholder} 
        className="shrink-0"
      />
      <div className="flex flex-col items-center justify-center p-6 space-y-6 bg-slate-200 dark:bg-slate-800 w-full rounded-t-3xl sm:rounded-t-none flex-grow">
        <SlideTextContent 
          title={slideData.title} 
          description={slideData.description} 
          className="text-slate-800 dark:text-slate-100"
        />
        <SlideNavigation
          totalSteps={totalSteps}
          currentStep={currentStepIndex}
          onDotClick={onDotClick}
        />
        <p className="pt-2 pb-1 text-xs text-slate-400 dark:text-slate-500 shrink-0">
          Figma Ref: T-01 (Slide {currentStepIndex + 1} of {totalSteps})
        </p>
      </div>
    </div>
  );
};

export default OnboardingSlide; 