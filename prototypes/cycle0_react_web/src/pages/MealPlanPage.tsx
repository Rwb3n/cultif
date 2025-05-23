/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_mealplan_g112",
  "version_tag": "0.2.0-ux-realignment-g169",
  "g_created": 122,
  "g_last_modified": 169,
  "description": "REFACTORED (TSX) for UX Realignment: Meal Plan page implementing a three-row layout: Current Date, Selectable Week Days, and Meal Cards for the selected day. Integrates TopLogoBar and BottomStickyNav for app-like navigation.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide an interactive daily meal plan view with app-like navigation, allowing users to see their planned meals for a selected day of the week. References Figma Catalogue IDs: T-07.",
  "key_logic_points": [
    "Uses TopLogoBar and BottomStickyNav for consistent app navigation.",
    "Displays the current date.",
    "Provides a horizontally scrollable list of days for the current week, allowing selection.",
    "Shows a list of meal cards (Breakfast, Lunch, Dinner, Snack) for the selected day.",
    "Meal cards display mock data for recipe name, macros, purpose, and a link to the recipe.",
    "Styled with Tailwind CSS and uses shadcn/ui components.",
    "State management for selected date and current week's days."
  ],
  "interfaces_provided": [
    { "name": "MealPlanPage", "interface_type": "REACT_COMPONENT", "details": "Component for viewing daily meal plans.", "notes": "" }
  ],
  "requisites": [
    { "description": "TopLogoBar, BottomStickyNav components must be available.", "type": "INTERNAL_DEPENDENCY" },
    { "description": "shadcn/ui Button, Card components.", "type": "LIBRARY_DEPENDENCY" },
    { "description": "lucide-react for icons.", "type": "LIBRARY_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For navigation (Link/useNavigate)." },
    { "name": "lucide-react", "version": "latest", "reason": "For icons." },
    { "name": "date-fns", "version": "latest", "reason": "For date manipulation and formatting." }
  ],
  "internal_dependencies": [
    "cycle0_comp_toplogobar_g163",
    "cycle0_comp_bottomstickynav_g163",
    "cycle1_primitive_link_g132",
    "shadcn_ui_button_g160",
    "shadcn_ui_card_g160"
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial refactor for UX Realignment g169. Implements the three-row layout with date display, selectable weekdays, and meal cards. Uses mock data."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format, addDays, startOfWeek, eachDayOfInterval, isSameDay, parseISO } from 'date-fns';
import { ChevronLeft, ChevronRight, CalendarDays, Utensils, Info } from 'lucide-react';

import TopLogoBar from '../components/layout/TopLogoBar';
import BottomStickyNav from '../components/layout/BottomStickyNav';
import PrimitiveLink from '../components/primitives/Link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Mock data structure - In a real app, this would come from a store or API
// Keyed by ISO date string (YYYY-MM-DD)
const mockMealData = {
  '2023-10-23': [ // Example Monday
    { mealType: 'Breakfast', name: 'Oatmeal with Berries', macros: 'P:15 C:60 F:10', purpose: 'Energy boost', recipeId: 'r1' },
    { mealType: 'Lunch', name: 'Chicken Salad Sandwich', macros: 'P:40 C:40 F:20', purpose: 'Lean protein', recipeId: 'r2' },
    { mealType: 'Dinner', name: 'Salmon with Roasted Veggies', macros: 'P:45 C:30 F:25', purpose: 'Omega-3s', recipeId: 'r3' },
  ],
  '2023-10-26': [ // Example Thursday
    { mealType: 'Breakfast', name: 'Greek Yogurt & Honey', macros: 'P:20 C:30 F:15', purpose: 'Probiotics', recipeId: 'r5' },
    { mealType: 'Lunch', name: 'Lentil Soup', macros: 'P:25 C:50 F:10', purpose: 'Fiber rich', recipeId: 'r6' },
    { mealType: 'Dinner', name: 'Steak and Sweet Potato', macros: 'P:50 C:40 F:30', purpose: 'Muscle repair', recipeId: 'r7' },
    { mealType: 'Snack', name: 'Apple with Peanut Butter', macros: 'P:8 C:25 F:15', purpose: 'Quick energy', recipeId: 'r8' },
  ],
  // Add more dates and meals as needed
};

interface Meal {
  mealType: string;
  name: string;
  macros: string;
  purpose: string;
  recipeId: string;
}

const MealPlanPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date()); // For "Current Date" display
  const [selectedDate, setSelectedDate] = useState(new Date()); // For highlighting selected day and fetching its meals
  const [weekDays, setWeekDays] = useState<Date[]>([]);

  useEffect(() => {
    // Set week days based on the current or selected date, starting Monday
    const startOfSelectedWeek = startOfWeek(selectedDate, { weekStartsOn: 1 });
    const endOfSelectedWeek = addDays(startOfSelectedWeek, 6);
    setWeekDays(eachDayOfInterval({ start: startOfSelectedWeek, end: endOfSelectedWeek }));
  }, [selectedDate]);

  const handleDaySelect = (day: Date) => {
    setSelectedDate(day);
  };

  // TODO: Implement functions to change week (previous/next)
  // const handlePreviousWeek = () => { setSelectedDate(addDays(selectedDate, -7)); };
  // const handleNextWeek = () => { setSelectedDate(addDays(selectedDate, 7)); };

  const mealsForSelectedDay: Meal[] = mockMealData[format(selectedDate, 'yyyy-MM-dd') as keyof typeof mockMealData] || [];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <TopLogoBar />

      <main className="flex-grow overflow-y-auto pt-4 pb-24"> {/* pb-24 for BottomStickyNav an some margin */}
        {/* Row 1: Current Date Display */}
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
              {format(currentDate, 'MMMM d, yyyy')}
            </h1>
            {/* Placeholder for potential calendar icon/link to full calendar view TBD */}
            <Button variant="ghost" size="icon" onClick={() => alert('Full Calendar View TBD')}>
              <CalendarDays className="h-5 w-5" />
            </Button>
          </div>
      </div>

        {/* Row 2: Selectable Week Days */}
        <div className="px-1 sm:px-3 lg:px-4 mb-6">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 no-scrollbar">
            {/* TODO: Today's date auto centre on date navigator, show - & + dates on either side (infinite load & scroll) */}
            {/* Placeholder for prev/next week buttons - to be implemented fully later */}
            {/* <Button variant="outline" size="icon" onClick={handlePreviousWeek} className="shrink-0"> <ChevronLeft/> </Button> */}
            {weekDays.map((day) => (
              <Button
                key={day.toISOString()}
                variant={isSameDay(day, selectedDate) ? 'default' : 'outline'}
                onClick={() => handleDaySelect(day)}
                className="flex flex-col items-center justify-center h-20 w-16 sm:h-24 sm:w-20 shrink-0 rounded-lg shadow-sm transition-all"
              >
                <span className="text-xs sm:text-sm font-medium">{format(day, 'EEE')}</span>
                <span className="text-lg sm:text-xl font-bold">{format(day, 'd')}</span>
              </Button>
            ))}
            {/* <Button variant="outline" size="icon" onClick={handleNextWeek} className="shrink-0"> <ChevronRight/> </Button> */}
          </div>
        </div>
        
        {/* Row 3: Meal Cards for Selected Day */}
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">
            Meals for: {format(selectedDate, 'EEEE, MMM d')}
          </h2>
          {mealsForSelectedDay.length > 0 ? (
            <div className="space-y-4">
              {mealsForSelectedDay.map((meal) => (
                <Card key={meal.mealType} className="overflow-hidden shadow-md dark:bg-slate-800">
                  <CardHeader className="p-4 bg-slate-100 dark:bg-slate-700/50">
                    <CardTitle className="text-md font-semibold text-primary dark:text-primary-foreground">{meal.mealType}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-2">
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-100">{meal.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                      <Utensils className="w-3 h-3 mr-1.5" /> Macros: {meal.macros} (placeholder)
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                      <Info className="w-3 h-3 mr-1.5" /> Purpose: {meal.purpose} (placeholder)
                    </p>
                    <Button asChild size="sm" variant="link" className="p-0 h-auto text-primary hover:underline">
                      <PrimitiveLink to={`/recipe/${meal.recipeId}`}>View Recipe &rarr;</PrimitiveLink>
                    </Button>
                  </CardContent>
                </Card>
        ))}
      </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-slate-500 dark:text-slate-400">No meals planned for this day.</p>
              <Button variant="secondary" className="mt-4" onClick={() => alert('Add meal TBD')}>
                Add Meal to {format(selectedDate, 'MMM d')}
              </Button>
            </div>
          )}
      </div>
      </main>

      <BottomStickyNav />
    </div>
  );
};

export default MealPlanPage; 