/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_topmealcategorynav_g163",
  "version_tag": "1.0.0-g166",
  "g_created": 166,
  "g_last_modified": 166,
  "description": "A reusable React component for displaying a horizontally scrollable navigation of meal categories (e.g., Breakfast, Dinner, Dessert, Create Meal Plan). Each category is represented by a circular icon and text. Designed for use below the TopLogoBar on pages like Home.",
  "artifact_type": "UI_COMPONENT",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide an intuitive, app-like way for users to browse and select meal categories or initiate meal plan creation, as per stakeholder feedback g162.",
  "key_logic_points": [
    "Displays a list of meal categories (mock data: Breakfast, Dinner, Dessert, Create Meal Plan).",
    "Each category is a circular element with a placeholder icon (lucide-react) and a text label below it.",
    "The list is horizontally scrollable to accommodate multiple categories without taking up excessive vertical space.",
    "Uses Flexbox and Tailwind CSS for layout and styling.",
    "Interaction (e.g., selecting a category) is placeholder and logs to console."
  ],
  "interfaces_provided": [
    { "name": "TopMealCategoryNav", "interface_type": "REACT_COMPONENT", "details": "Renders the horizontally scrollable meal category navigation.", "notes": "Accepts no props." }
  ],
  "requisites": [
    { "description": "lucide-react library for icons.", "type": "LIBRARY_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "lucide-react", "version": "^0.417.0", "reason": "For placeholder icons (Sunrise, Sunset, IceCream, PlusCircle)." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle0_page_home_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold created at g=166 based on plan pc0uxr_task_003. Category selection is placeholder only."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import { Sunrise, Sunset, IceCream, PlusCircle } from 'lucide-react';

interface MealCategory {
  name: string;
  icon: React.ElementType;
}

const categories: MealCategory[] = [
  { name: 'Breakfast', icon: Sunrise },
  { name: 'Dinner', icon: Sunset },
  { name: 'Dessert', icon: IceCream },
  { name: 'Create Plan', icon: PlusCircle },
];

const TopMealCategoryNav: React.FC = () => {
  const handleCategoryClick = (categoryName: string) => {
    console.log(`Category clicked: ${categoryName}`);
    // Placeholder for navigation or filtering logic
  };

  return (
    <nav className="bg-background border-b px-3 py-2.5">
      <div className="flex space-x-5 overflow-x-auto whitespace-nowrap no-scrollbar">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className="flex flex-col items-center space-y-1.5 group flex-shrink-0 focus:outline-none"
            aria-label={category.name}
          >
            <div className="h-14 w-14 rounded-full bg-muted group-hover:bg-primary/20 group-focus:ring-2 group-focus:ring-primary group-focus:ring-offset-2 group-focus:ring-offset-background flex items-center justify-center transition-colors">
              <category.icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TopMealCategoryNav; 