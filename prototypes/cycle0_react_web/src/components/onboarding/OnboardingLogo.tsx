/* ANNOTATION_BLOCK_START
{
  "artifact_id": "OnboardingLogo_tsx_g181",
  "version_tag": "0.1.0",
  "g_created": 182,
  "g_last_modified": 185,
  "description": "Component for displaying the application logo, primarily for the onboarding sequence. Designed to be used for the initial welcome animation and potentially on individual slides.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a consistent and reusable logo component for the onboarding experience.",
  "key_logic_points": [
    "Displays a placeholder (Lucide Leaf icon) and the text 'Cultif'.",
    "Intended to be styled and animated by its parent component (e.g., OnboardingPage.tsx for the initial fade-in/out)."
  ],
  "interfaces_provided": [
    { "name": "OnboardingLogo", "interface_type": "REACT_COMPONENT", "details": "Stateless component to render the logo.", "notes": "Styling and animation are handled externally or via props." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "lucide-react", "version": "^0.400.0", "reason": "For placeholder Leaf icon." }
  ],
  "internal_dependencies": [],
  "dependents": ["OnboardingPage_tsx_g181"],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial structure for the logo component at g=182."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import { Leaf } from 'lucide-react'; // Placeholder for Cultif logo

interface OnboardingLogoProps {
  size?: number;
  className?: string;
}

const OnboardingLogo: React.FC<OnboardingLogoProps> = ({ size = 128, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-white ${className}`}>
      <Leaf size={size} />
      <h1 className="text-5xl font-bold mt-4">Cultif</h1>
    </div>
  );
};

export default OnboardingLogo; 