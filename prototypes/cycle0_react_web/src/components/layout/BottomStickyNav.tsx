/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_bottomstickynav_g163",
  "version_tag": "1.0.0-g166",
  "g_created": 166,
  "g_last_modified": 166,
  "description": "A reusable React component for a bottom sticky navigation bar. It features icons for Home, Search, Publish Content (+), My Plan (Calendar), and Profile (User). Designed for primary navigation in an app-like interface.",
  "artifact_type": "UI_COMPONENT",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide consistent and easily accessible primary navigation at the bottom of the screen, mimicking common mobile application UX patterns, as per stakeholder feedback g162.",
  "key_logic_points": [
    "Displays five navigation items: Home, Search, Publish, My Plan, Profile.",
    "Each item uses a `lucide-react` icon.",
    "Uses Flexbox to distribute items evenly across the navigation bar.",
    "Styled with Tailwind CSS for a sticky bottom position, background, and border.",
    "Navigation is placeholder; `useNavigate` is imported and used to log and attempt navigation to predefined paths.",
    "Includes basic hover/focus states for visual feedback."
  ],
  "interfaces_provided": [
    { "name": "BottomStickyNav", "interface_type": "REACT_COMPONENT", "details": "Renders the bottom sticky navigation bar.", "notes": "Accepts no props. Active state determination is not yet implemented." }
  ],
  "requisites": [
    { "description": "lucide-react library for icons.", "type": "LIBRARY_DEPENDENCY" },
    { "description": "react-router-dom for navigation (useNavigate).", "type": "LIBRARY_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "lucide-react", "version": "^0.417.0", "reason": "For icons (Home, Search, PlusSquare, CalendarDays, User)." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For `useNavigate` hook." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle0_page_home_g112",
    "cycle0_page_userprofile_g112",
    "cycle0_page_mealplan_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold created at g=166 based on plan pc0uxr_task_003. Navigation functionality uses placeholder paths. Active link styling is not yet implemented."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Search, PlusSquare, CalendarDays, User } from 'lucide-react';

interface NavItem {
  label: string;
  icon: React.ElementType;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', icon: Home, path: '/home' },
  { label: 'Search', icon: Search, path: '/search' }, 
  { label: 'Publish', icon: PlusSquare, path: '/publish' }, 
  { label: 'My Plan', icon: CalendarDays, path: '/meal-plan' }, 
  { label: 'Profile', icon: User, path: '/profile' }, 
];

const BottomStickyNav: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavigation(item.path)}
            className={`flex flex-col items-center justify-center p-2 text-muted-foreground hover:text-primary focus:text-primary focus:outline-none transition-colors w-1/5 group`}
            aria-label={item.label}
          >
            <item.icon className={`h-6 w-6 mb-0.5 transition-colors group-hover:text-primary group-focus:text-primary`} />
            <span className="text-xs transition-colors group-hover:text-primary group-focus:text-primary">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomStickyNav; 