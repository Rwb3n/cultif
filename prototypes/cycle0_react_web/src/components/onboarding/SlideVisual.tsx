/* ANNOTATION_BLOCK_START
{
  "artifact_id": "SlideVisual_tsx_g181",
  "version_tag": "0.1.0",
  "g_created": 182,
  "g_last_modified": 185,
  "description": "Component responsible for rendering the main visual content (e.g., image) of an onboarding slide.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To encapsulate the display of visual elements within an onboarding slide, allowing for consistent styling and future enhancements (e.g., supporting video).",
  "key_logic_points": [
    "Accepts an image source URL or a placeholder string.",
    "Renders a styled container for the visual."
  ],
  "interfaces_provided": [
    { "name": "SlideVisual", "interface_type": "REACT_COMPONENT", "details": "Component to display slide image or placeholder.", "notes": "Props will include image URL, alt text, placeholder text." }
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
    "manual_review_comment": "Initial structure for the slide visual component at g=182."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';

interface SlideVisualProps {
  imageSrc?: string;
  altText?: string;
  placeholderText: string;
  className?: string;
}

const SlideVisual: React.FC<SlideVisualProps> = ({ 
  imageSrc,
  altText = 'Onboarding visual',
  placeholderText,
  className
}) => {
  return (
    <div className={`w-full h-48 sm:h-60 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-6 shrink-0 ${className}`}>
      {imageSrc ? (
        <img src={imageSrc} alt={altText} className="w-full h-full object-cover rounded-lg" />
      ) : (
        <p className="text-slate-500 dark:text-slate-400 text-sm">{placeholderText}</p>
      )}
    </div>
  );
};

export default SlideVisual; 