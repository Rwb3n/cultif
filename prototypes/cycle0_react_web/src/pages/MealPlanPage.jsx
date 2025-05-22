/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_mealplan_g112",
  "version_tag": "0.1.0",
  "g_created": 122,
  "g_last_modified": 122,
  "description": "Placeholder component for the Meal Planning page. This page will allow users to view their weekly meal plans, add/remove recipes to specific days/meals, and potentially generate a grocery list.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide the user interface for creating, viewing, and managing meal plans in the web prototype. References Figma Catalogue IDs: T-07 (Calendar View), T-15 (Creation Wizard).",
  "key_logic_points": [
    "Display a weekly calendar view (days of the week).",
    "Show meal slots (Breakfast, Lunch, Dinner, Snack) for each day.",
    "Allow adding recipes to meal slots (mock interaction, e.g., opening a recipe picker).",
    "Allow removing recipes from meal slots.",
    "(Future) Placeholder for grocery list generation.",
    "(Future) Placeholder for saving/loading meal plans."
  ],
  "interfaces_provided": [
    { "name": "MealPlanPage", "interface_type": "REACT_COMPONENT", "details": "Component for meal planning functionalities.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation (Link)." }
  ],
  "internal_dependencies": [
    // "cycle0_mock_data_recipes_g112" (for recipe selection)
    // "cycle0_comp_button_g112"
    // "cycle0_comp_modal_g112" (for recipe picker or plan creation wizard)
  ],
  "dependents": [
    "cycle0_router_config_g112" // This page will be a route in AppRouter
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g122. To be populated with specific UI placeholders and mock data integration based on T-07 and T-15 (Figma)."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock data for meal plan and available recipes for picking
const initialMealPlan = {
  monday: { breakfast: null, lunch: null, dinner: null, snack: null },
  tuesday: { breakfast: null, lunch: null, dinner: null, snack: null },
  wednesday: { breakfast: null, lunch: null, dinner: null, snack: null },
  thursday: { breakfast: null, lunch: null, dinner: null, snack: null },
  friday: { breakfast: null, lunch: null, dinner: null, snack: null },
  saturday: { breakfast: null, lunch: null, dinner: null, snack: null },
  sunday: { breakfast: null, lunch: null, dinner: null, snack: null },
};

const mockAvailableRecipes = [
  { id: 'r1', name: 'Spicy Chicken Pasta' },
  { id: 'r2', name: 'Vegan Buddha Bowl' },
  { id: 'r3', name: 'Berry Smoothie' },
  { id: 'r4', name: 'Avocado Toast' },
  { id: 'r5', name: 'Oatmeal with Fruits' },
];

/**
 * MealPlanPage Component (References Figma Catalogue: T-07, T-15)
 * 
 * Purpose: Allows users to create, view, and manage their weekly meal plans.
 * 
 * Structure (T-07 - Calendar View Focus for this scaffold):
 * - Main page container.
 * - Title: "My Meal Plan" or similar.
 * - Week navigation (Previous Week, Current Week, Next Week - mock interaction).
 * - Calendar grid displaying days of the week.
 *   - Each day cell contains meal slots (Breakfast, Lunch, Dinner, Snack).
 *   - Each meal slot displays the planned recipe (if any) or an "Add Recipe" button/placeholder.
 *   - Clicking a recipe in a slot might show a small popover with "Remove" option.
 *   - Clicking "Add Recipe" could open a modal (T-15 concept) to select a recipe.
 * - "Generate Grocery List" button (mock action).
 * - "Save Plan" button (mock action).
 * 
 * Placeholders & Checklist (Focus on T-07 for initial scaffold):
 * [ ] Implement state for the `currentMealPlan`.
 * [ ] Implement state for a recipe picker modal (visibility, target day/mealType).
 * [ ] Display days of the week as columns/sections.
 * [ ] For each day, display meal slots (Breakfast, Lunch, Dinner, Snack).
 *     [ ] If a recipe is planned for a slot, display its name (and a remove button).
 *     [ ] If no recipe, display an "Add (+)" button/placeholder.
 * [ ] Implement mock functionality for "Add (+)" button: 
 *     [ ] Set state to show a recipe picker (e.g., simple list for now, T-15_recipe_selector).
 *     [ ] On selecting a recipe from picker, update `currentMealPlan` state for the target day/mealType.
 * [ ] Implement mock functionality for "Remove" recipe from slot: 
 *     [ ] Update `currentMealPlan` state, setting the slot to null.
 * [ ] (Optional) Week navigation buttons (Previous/Next) - mock interaction (e.g., console log).
 * [ ] "Generate Grocery List" button - mock action (e.g., console log `currentMealPlan`).
 * [ ] Basic styling for calendar grid, meal slots, buttons.
 * 
 * Figma References:
 * - T-07: Meal Plan - Calendar View
 *     - T-07_calendar_grid: Main grid for days and meal slots.
 *     - T-07_day_column: Column for a single day.
 *     - T-07_meal_slot: Area for Breakfast/Lunch/Dinner/Snack.
 *     - T-07_recipe_card_mini: Small display of a recipe within a slot.
 *     - T-07_add_button: Button/icon to add a recipe to a slot.
 *     - T-07_week_navigation: Arrows/buttons to change the displayed week.
 * - T-15: Meal Plan - Creation Wizard (Concept for recipe picker/adder modal)
 *     - T-15_recipe_selector: UI for searching/selecting recipes to add.
 */
const MealPlanPage = () => {
  const [mealPlan, setMealPlan] = useState(initialMealPlan);
  const [showRecipePicker, setShowRecipePicker] = useState(false);
  const [pickerTarget, setPickerTarget] = useState({ day: null, mealType: null }); // To know where to add the recipe

  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const mealTypes = ['breakfast', 'lunch', 'dinner', 'snack'];

  const handleOpenRecipePicker = (day, mealType) => {
    setPickerTarget({ day, mealType });
    setShowRecipePicker(true);
  };

  const handleSelectRecipe = (recipe) => {
    if (pickerTarget.day && pickerTarget.mealType) {
      setMealPlan(prevPlan => ({
        ...prevPlan,
        [pickerTarget.day]: {
          ...prevPlan[pickerTarget.day],
          [pickerTarget.mealType]: recipe,
        }
      }));
    }
    setShowRecipePicker(false);
  };

  const handleRemoveRecipe = (day, mealType) => {
    setMealPlan(prevPlan => ({
      ...prevPlan,
      [day]: {
        ...prevPlan[day],
        [mealType]: null,
      }
    }));
  };
  
  const RecipePickerModal = () => (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <h3>Select a Recipe (T-15_recipe_selector)</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {mockAvailableRecipes.map(recipe => (
            <li key={recipe.id} style={{ padding: '8px', borderBottom: '1px solid #eee', cursor: 'pointer' }} onClick={() => handleSelectRecipe(recipe)}>
              {recipe.name}
            </li>
          ))}
        </ul>
        <button onClick={() => setShowRecipePicker(false)} style={{marginTop:'10px'}}>Close</button>
      </div>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>My Weekly Meal Plan (T-07)</h1>
      
      {/* Placeholder for Week Navigation T-07_week_navigation */}
      <div style={{ textAlign:'center', margin: '20px 0'}}>
        <button style={{marginRight:'10px'}} onClick={() => alert('Mock: Previous Week')}>&larr; Prev Week</button>
        <span>Current Week (Placeholder)</span>
        <button style={{marginLeft:'10px'}} onClick={() => alert('Mock: Next Week')}>Next Week &rarr;</button>
      </div>

      <div style={gridStyles.calendarGrid} className="T-07_calendar_grid">
        {daysOfWeek.map(day => (
          <div key={day} style={gridStyles.dayColumn} className="T-07_day_column">
            <h3 style={{textTransform: 'capitalize', textAlign:'center', borderBottom: '1px solid #ccc', paddingBottom:'5px'}}>{day}</h3>
            {mealTypes.map(mealType => (
              <div key={mealType} style={gridStyles.mealSlot} className="T-07_meal_slot">
                <strong style={{textTransform: 'capitalize'}}>{mealType}:</strong>
                {mealPlan[day][mealType] ? (
                  <div style={{border:'1px dashed #eee', padding:'5px', margin:'5px 0', borderRadius:'4px'}} className="T-07_recipe_card_mini">
                    <span>{mealPlan[day][mealType].name}</span>
                    <button onClick={() => handleRemoveRecipe(day, mealType)} style={{marginLeft:'10px', fontSize:'0.8em', cursor:'pointer', color:'red', border:'none', background:'none'}}>X</button>
                  </div>
                ) : (
                  <button onClick={() => handleOpenRecipePicker(day, mealType)} style={{fontSize:'0.9em', padding:'2px 5px', margin:'5px'}} className="T-07_add_button">Add (+)</button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {showRecipePicker && <RecipePickerModal />}

      <div style={{textAlign: 'center', marginTop: '30px'}}>
        <button style={{padding: '10px 20px', marginRight:'10px'}} onClick={() => console.log('Current Meal Plan:', mealPlan)}>Log Plan (Mock Save)</button>
        <button style={{padding: '10px 20px'}} onClick={() => alert('Grocery List Generation - Not Implemented')}>Generate Grocery List</button>
      </div>
      <p style={{marginTop: '30px', fontSize: '0.8em', textAlign:'center', color:'#aaa'}}>Figma Refs: T-07, T-15</p>
    </div>
  );
};

// Basic styles for the grid and modal (can be moved to a CSS file)
const gridStyles = {
  calendarGrid: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #ccc',
    borderRadius: '4px',
    overflowX: 'auto',
  },
  dayColumn: {
    flex: '1 1 150px', // Flex basis 150px, can grow and shrink
    minWidth: '150px',
    borderRight: '1px solid #ccc',
    padding: '10px',
  },
  mealSlot: {
    padding: '8px 0',
    borderBottom: '1px dotted #eee',
    minHeight: '50px',
  },
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  content: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    minWidth: '300px',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
};

export default MealPlanPage; 