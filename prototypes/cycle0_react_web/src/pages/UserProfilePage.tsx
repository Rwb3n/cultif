/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_userprofile_g112",
  "version_tag": "0.2.0-ux-realignment-g168",
  "g_created": 122,
  "g_last_modified": 168,
  "description": "REFACTORED (TSX) for UX Realignment: User Profile page adapted to display user content (recipes/meal plans) in a 3-column grid. Integrates BottomStickyNav. Removes previous placeholder header, tabs, and settings. Focuses on grid layout for user-generated/saved content.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a visually organized display of the user's recipes and meal plans in a grid format, accessible via the new app navigation structure, as per stakeholder feedback g162.",
  "key_logic_points": [
    "Displays mock user recipes in a responsive 3-column grid (sm:grid-cols-2 md:grid-cols-3).",
    "Uses `shadcn/ui Card` for recipe item display (placeholder).",
    "Integrates the `BottomStickyNav` component for app navigation.",
    "Removes previous placeholder profile header, tab navigation, and settings section to simplify focus on content grid.",
    "Page content is scrollable above the `BottomStickyNav`.",
    "Uses Tailwind CSS for styling."
  ],
  "interfaces_provided": [
    { "name": "UserProfilePage", "interface_type": "REACT_COMPONENT", "details": "Displays user's content in a grid.", "notes": "Mock data used. Infinite scroll not implemented." }
  ],
  "requisites": [
    { "description": "BottomStickyNav component must be available.", "type": "INTERNAL_DEPENDENCY" },
    { "description": "shadcn/ui Card component for item display.", "type": "COMPONENT_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For <Link> component." },
    { "name": "lucide-react", "version": "^0.417.0", "reason": "For placeholder image icon."}
  ],
  "internal_dependencies": [
    "cycle0_comp_bottomstickynav_g163",
    "shadcn_ui_card_g160"
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g=168 to implement 3xN grid and BottomStickyNav as per plan pc0uxr_task_005. Simplified from previous placeholder. Previous version 0.1.0 g_last_modified=122."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BottomStickyNav from '../components/layout/BottomStickyNav';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image as ImageIcon } from 'lucide-react';

interface UserContentItem {
  id: string;
  name: string;
  imageUrl?: string;
  type: 'recipe' | 'mealPlan'; // To distinguish content type if needed later
}

// Mock user data - simplified for grid display
const mockUserContent: UserContentItem[] = [
  { id: 'r1', name: 'Spicy Chicken Pasta', imageUrl: '/assets/placeholders/200x200.png', type: 'recipe' },
  { id: 'mp1', name: 'Current Week Plan', imageUrl: '/assets/placeholders/200x200.png', type: 'mealPlan' },
  { id: 'r2', name: 'Vegan Buddha Bowl', imageUrl: '/assets/placeholders/200x200.png', type: 'recipe' },
  { id: 'r3', name: 'Berry Smoothie', type: 'recipe' }, // No image example
  { id: 'mp2', name: 'High Protein Plan', imageUrl: '/assets/placeholders/200x200.png', type: 'mealPlan' },
  { id: 'r4', name: 'Avocado Toast Deluxe', imageUrl: '/assets/placeholders/200x200.png', type: 'recipe' },
  { id: 'r5', name: 'Quick Salad Lunch', imageUrl: '/assets/placeholders/200x200.png', type: 'recipe' },
  { id: 'mp3', name: 'Weekend Feast Plan', type: 'mealPlan' },
  { id: 'r6', name: 'Morning Oats', imageUrl: '/assets/placeholders/200x200.png', type: 'recipe' },
];

const UserProfilePage: React.FC = () => {
  const [userContent, setUserContent] = useState<UserContentItem[]>([]);

  useEffect(() => {
    // Simulate fetching user data
    setUserContent(mockUserContent);
  }, []);

  if (userContent.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center p-4">
          <p>Loading profile content...</p>
        </main>
        <BottomStickyNav />
      </div>
    );
  }

  const ContentCard: React.FC<{ item: UserContentItem }> = ({ item }) => (
    <Link to={item.type === 'recipe' ? `/recipe/${item.id}` : `/meal-plan/${item.id}`} className="block group">
      <Card className="overflow-hidden h-full flex flex-col">
        <CardHeader className="p-0 aspect-square flex items-center justify-center bg-muted">
          {item.imageUrl ? (
            <img 
              src={item.imageUrl} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <ImageIcon className="w-1/2 h-1/2 text-muted-foreground" />
          )}
        </CardHeader>
        <CardContent className="p-3 flex-grow">
          <CardTitle className="text-sm font-medium leading-tight truncate group-hover:text-primary transition-colors">
            {item.name}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="p-4 border-b sticky top-0 bg-background z-40"> 
        <h1 className="text-xl font-semibold text-center">My Profile</h1>
      </header>

      <main className="flex-grow overflow-y-auto p-4 pb-20"> {/* pb-20 for BottomStickyNav */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {userContent.map(item => (
            <ContentCard key={`${item.type}-${item.id}`} item={item} />
          ))}
        </div>
        {/* Placeholder for infinite scroll trigger or pagination */}
        {userContent.length >= 9 && (
           <p className="text-center text-muted-foreground mt-8 text-sm">Scroll for more (visual only)</p>
        )}
      </main>

      <BottomStickyNav />
    </div>
  );
};

export default UserProfilePage; 