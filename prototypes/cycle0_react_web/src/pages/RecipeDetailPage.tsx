/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_recipedetail_g112",
  "version_tag": "0.1.0",
  "g_created": 121,
  "g_last_modified": 121,
  "description": "Placeholder component for the Recipe Detail page. This page will display comprehensive information about a single recipe, including ingredients, instructions, nutritional information, and creator details.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a detailed view of a specific recipe in the web prototype. References Figma Catalogue ID: T-09.",
  "key_logic_points": [
    "Fetch (mocked) recipe data based on an ID from the route parameter.",
    "Display recipe image/video, title, description.",
    "List ingredients with quantities.",
    "List preparation steps.",
    "Display nutritional information (macros, etc.).",
    "Show creator information with a link to their profile.",
    "Placeholders for actions like like/favorite, add to meal plan, share."
  ],
  "interfaces_provided": [
    { "name": "RecipeDetailPage", "interface_type": "REACT_COMPONENT", "details": "Component for displaying a single recipe\'s details.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation (Link) and route parameter (useParams)." }
  ],
  "internal_dependencies": [
    // "cycle0_mock_data_recipes_g112" (to fetch specific recipe by ID)
    // "cycle0_comp_button_g112"
    // "cycle0_comp_nutrition_display_g112" (if a specific component is made for this)
  ],
  "dependents": [
    "cycle0_router_config_g112" // This page will be a route in AppRouter
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g121. To be populated with specific UI placeholders and mock data integration based on T-09 (Figma)."
  }
}
ANNOTATION_BLOCK_END */

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Example: Mock API service (to be created in services/api.js or similar)
// import { fetchRecipeById } from '../services/api';

// Mock data for a single recipe (replace with actual fetch logic)
const mockRecipes = {
  r1: {
    id: 'r1',
    name: 'Spicy Chicken Pasta',
    creatorName: 'Chef John',
    creatorId: 'c1',
    imageUrl: 'https://via.placeholder.com/600x400?text=Spicy+Pasta',
    description: 'A delicious and fiery pasta dish that is quick to make and full of flavor. Perfect for a weeknight dinner.',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    ingredients: [
      { name: 'Chicken Breast', quantity: '2', unit: 'pieces' },
      { name: 'Penne Pasta', quantity: '300', unit: 'g' },
      { name: 'Spicy Arrabiata Sauce', quantity: '1', unit: 'jar' },
      { name: 'Red Pepper Flakes', quantity: '1', unit: 'tsp' },
      { name: 'Parmesan Cheese', quantity: '50', unit: 'g' },
      { name: 'Olive Oil', quantity: '2', unit: 'tbsp' },
    ],
    instructions: [
      'Cook pasta according to package directions.',
      'While pasta cooks, dice chicken and cook in olive oil until browned.',
      'Add arrabiata sauce and red pepper flakes to the chicken. Simmer for 5 minutes.',
      'Drain pasta and add to the sauce. Mix well.',
      'Serve immediately, topped with grated Parmesan cheese.'
    ],
    nutrition: {
      calories: '550 kcal',
      protein: '45g',
      carbs: '60g',
      fat: '15g'
    },
    tags: ['pasta', 'spicy', 'chicken', 'quick']
  },
  // Add more mock recipes if needed
  r2: { id: 'r2', name: 'Vegan Buddha Bowl', creatorName: 'Green Goddess', creatorId: 'c2', imageUrl: 'https://via.placeholder.com/600x400?text=Buddha+Bowl', description: 'A healthy and colorful bowl full of plant-based goodness.', prepTime: '20 mins', cookTime: '15 mins', servings: 2, ingredients:[], instructions:[], nutrition:{calories:'400kcal'}, tags:['vegan', 'healthy']},
  r3: { id: 'r3', name: 'Berry Smoothie', creatorName: 'FitFoodie', creatorId: 'c3', imageUrl: 'https://via.placeholder.com/600x400?text=Smoothie', description: 'A refreshing and nutritious smoothie.', prepTime: '5 mins', cookTime: '0 mins', servings: 1, ingredients:[], instructions:[], nutrition:{calories:'250kcal'}, tags:['smoothie', 'quick']},
};

/**
 * RecipeDetailPage Component (References Figma Catalogue: T-09)
 * 
 * Purpose: Displays all details of a specific recipe.
 * 
 * Structure:
 * - Main container.
 * - Recipe Header: Image/Video (T-09_image_main), Title (T-09_title), Creator Info (T-09_creator_link), Action Buttons (Favorite, Add to Meal Plan - T-09_action_favorite, T-09_action_addplan).
 * - Recipe Info Bar: Prep Time, Cook Time, Servings, Difficulty (T-09_info_bar).
 * - Tabbed Section or Segmented Controls (T-09_tabs - e.g., Ingredients, Instructions, Nutrition).
 *   - Ingredients List (T-09_ingredients_list).
 *   - Instructions/Steps (T-09_instructions_list).
 *   - Nutritional Information (T-09_nutrition_info).
 * - Tags section (T-09_tags).
 * - (Optional) User Comments/Reviews section.
 * 
 * Placeholders & Checklist:
 * [ ] Get `recipeId` from route parameters (`useParams`).
 * [ ] (Mock) Fetch recipe data using `recipeId` (useEffect).
 * [ ] Implement state for the fetched recipe data.
 * [ ] Display main recipe image/video placeholder - Ref T-09_image_main.
 * [ ] Display recipe title - Ref T-09_title.
 * [ ] Display creator name with link to creator profile - Ref T-09_creator_link.
 * [ ] Display action buttons (Favorite, Add to Meal Plan - mock functionality) - Ref T-09_action_favorite, T-09_action_addplan.
 * [ ] Display recipe info bar (prep time, cook time, servings) - Ref T-09_info_bar.
 * [ ] Implement Ingredients section:
 *     [ ] List ingredients with quantity and unit - Ref T-09_ingredients_list.
 * [ ] Implement Instructions section:
 *     [ ] List preparation steps (numbered or bulleted) - Ref T-09_instructions_list.
 * [ ] Implement Nutrition section:
 *     [ ] Display key nutritional values (calories, protein, carbs, fat) - Ref T-09_nutrition_info.
 * [ ] Display recipe tags - Ref T-09_tags.
 * [ ] Basic styling for layout and content sections.
 * [ ] Back navigation link.
 * 
 * Figma References (T-09 Components):
 * - T-09_image_main: Large recipe image or video player area.
 * - T-09_title: Recipe title.
 * - T-09_creator_link: Link to the creator's profile (name, avatar).
 * - T-09_action_favorite: Favorite/Like button.
 * - T-09_action_addplan: "Add to Meal Plan" button.
 * - T-09_action_share: Share button (optional for scaffold).
 * - T-09_info_bar: Section displaying prep time, cook time, servings, difficulty.
 * - T-09_tabs: Tabs for Ingredients, Instructions, Nutrition.
 * - T-09_ingredients_list: Formatted list of ingredients.
 * - T-09_instructions_list: Formatted list of preparation steps.
 * - T-09_nutrition_info: Display of nutritional data.
 * - T-09_tags: List/display of recipe tags.
 */
const RecipeDetailPage = () => {
  const { recipeId } = useParams(); // Get recipeId from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulate fetching recipe by ID
    // const fetchedRecipe = await fetchRecipeById(recipeId); // Example
    const fetchedRecipe = mockRecipes[recipeId];
    if (fetchedRecipe) {
      setRecipe(fetchedRecipe);
    } else {
      // Handle recipe not found scenario, e.g., redirect to a 404 page or show message
      console.error(`Recipe with ID ${recipeId} not found.`);
    }
  }, [recipeId]);

  if (!recipe) {
    return <div style={{padding: '20px'}}>Loading recipe details or recipe not found... (T-09)</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Link to="/home" style={{display:'block', marginBottom:'15px'}}>&larr; Back to Home</Link>
      
      {/* T-09_image_main */}
      <img src={recipe.imageUrl || 'https://via.placeholder.com/800x400?text=Recipe+Image'} alt={recipe.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom:'20px' }} />
      
      {/* T-09_title */}
      <h1 style={{marginTop:0}}>{recipe.name}</h1>
      
      {/* T-09_creator_link */}
      <p>By: <Link to={`/creator/${recipe.creatorId || recipe.creatorName.toLowerCase().replace(' ', '-')}`}>{recipe.creatorName}</Link></p>

      {/* T-09_action_favorite, T-09_action_addplan - Placeholder Buttons */}
      <div style={{margin: '20px 0'}}>
        <button style={{marginRight: '10px', padding: '10px 15px'}} onClick={() => alert('Mock: Favorited!')}>❤️ Favorite (T-09_action_favorite)</button>
        <button style={{padding: '10px 15px'}} onClick={() => alert('Mock: Added to Meal Plan!')}>➕ Add to Meal Plan (T-09_action_addplan)</button>
      </div>

      {/* T-09_info_bar */}
      <div style={{ display: 'flex', justifyContent: 'space-around', background: '#f0f0f0', padding: '10px', borderRadius: '4px', margin: '20px 0' }}>
        <span>Prep: {recipe.prepTime}</span>
        <span>Cook: {recipe.cookTime}</span>
        <span>Servings: {recipe.servings}</span>
        {/* <span>Difficulty: {recipe.difficulty || 'Medium'}</span> */}
      </div>

      <p>{recipe.description}</p>

      {/* T-09_tabs (simplified to sections for now) */}
      <section style={{margin: '30px 0'}}>
        <h3 className="T-09_ingredients_list_title">Ingredients (T-09_ingredients_list)</h3>
        <ul style={{listStyleType: 'disc', paddingLeft: '20px'}}>
          {recipe.ingredients && recipe.ingredients.map((ing, index) => (
            <li key={index}>{ing.quantity} {ing.unit} {ing.name}</li>
          ))}
        </ul>
      </section>

      <section style={{margin: '30px 0'}}>
        <h3 className="T-09_instructions_list_title">Instructions (T-09_instructions_list)</h3>
        <ol style={{paddingLeft: '20px'}}>
          {recipe.instructions && recipe.instructions.map((step, index) => (
            <li key={index} style={{marginBottom:'10px'}}>{step}</li>
          ))}
        </ol>
      </section>

      <section style={{margin: '30px 0'}}>
        <h3 className="T-09_nutrition_info_title">Nutritional Information (approx. per serving) (T-09_nutrition_info)</h3>
        <p>
          Calories: {recipe.nutrition?.calories || 'N/A'}<br />
          Protein: {recipe.nutrition?.protein || 'N/A'}<br />
          Carbs: {recipe.nutrition?.carbs || 'N/A'}<br />
          Fat: {recipe.nutrition?.fat || 'N/A'}
        </p>
      </section>
      
      {/* T-09_tags */}
      {recipe.tags && recipe.tags.length > 0 && (
        <section style={{margin: '30px 0'}}>
          <h3>Tags (T-09_tags)</h3>
          <div style={{display: 'flex', flexWrap:'wrap', gap: '10px'}}>
            {recipe.tags.map(tag => <span key={tag} style={{padding: '5px 10px', background:'#e0e0e0', borderRadius:'4px'}}>{tag}</span>)}
          </div>
        </section>
      )}

      <p style={{marginTop: '30px', fontSize: '0.8em', textAlign:'center', color:'#aaa'}}>Figma Ref: T-09</p>
    </div>
  );
};

export default RecipeDetailPage; 