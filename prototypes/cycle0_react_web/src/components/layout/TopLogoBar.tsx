/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_toplogobar_g163",
  "version_tag": "1.0.0-g166",
  "g_created": 166,
  "g_last_modified": 166,
  "description": "A reusable React component for the top logo bar featuring the Cultif logo (placeholder) and icons for notifications (Heart) and direct messages (Send). Designed for use in the main application layout, particularly on the Home page.",
  "artifact_type": "UI_COMPONENT",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a consistent top navigation element displaying brand identity and quick access to user engagement features like notifications and messages, as per stakeholder feedback g162.",
  "key_logic_points": [
    "Displays a placeholder Cultif logo (Leaf icon) on the left.",
    "Includes Heart (notifications) and Send (direct messages) icons from lucide-react on the right.",
    "Uses Flexbox for layout to position logo left and icons right.",
    "Styled with Tailwind CSS for basic appearance and spacing.",
    "Icons are intended as placeholders; functionality is not implemented in this component."
  ],
  "interfaces_provided": [
    { "name": "TopLogoBar", "interface_type": "REACT_COMPONENT", "details": "Renders the top logo bar structure.", "notes": "Accepts no props." }
  ],
  "requisites": [
    { "description": "lucide-react library for icons.", "type": "LIBRARY_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "lucide-react", "version": "^0.417.0", "reason": "For icons (Leaf, Heart, Send)." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle0_page_home_g112" 
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold created at g=166 based on plan pc0uxr_task_003. Icon functionality is placeholder only."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import { Leaf, Heart, Send } from 'lucide-react';

const TopLogoBar: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-3 bg-background border-b sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Leaf className="h-7 w-7 text-primary" />
        <span className="font-semibold text-xl text-foreground">Cultif</span>
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-4">
        <button aria-label="Notifications" className="text-foreground hover:text-primary transition-colors">
          <Heart className="h-6 w-6" />
        </button>
        <button aria-label="Direct Messages" className="text-foreground hover:text-primary transition-colors">
          <Send className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default TopLogoBar; 