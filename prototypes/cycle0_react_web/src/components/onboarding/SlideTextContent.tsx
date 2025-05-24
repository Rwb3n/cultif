/* ANNOTATION_BLOCK_START
{
  "artifact_id": "SlideTextContent_tsx_g181",
  "version_tag": "0.1.0",
  "g_created": 182,
  "g_last_modified": 185,
  "description": "Component for displaying the headline and body text of an onboarding slide.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a structured and reusable way to display textual information within an onboarding slide.",
  "key_logic_points": [
    "Accepts title and description strings.",
    "Renders them in a styled layout."
  ],
  "interfaces_provided": [
    { "name": "SlideTextContent", "interface_type": "REACT_COMPONENT", "details": "Component to display slide title and description.", "notes": "Props for title and description." }
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
    "manual_review_comment": "Initial structure for the slide text content component at g=182."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';

interface SlideTextContentProps {
  title: string;
  description: string;
  className?: string;
}

const SlideTextContent: React.FC<SlideTextContentProps> = ({ title, description, className }) => {
  return (
    <div className={`text-center space-y-2 ${className}`}>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 shrink-0">{title}</h1>
      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base grow overflow-y-auto no-scrollbar">
        {description}
      </p>
    </div>
  );
};

export default SlideTextContent; 