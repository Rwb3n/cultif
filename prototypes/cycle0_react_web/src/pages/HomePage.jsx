/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_home_g112",
  "version_tag": "0.1.0",
  "g_created": 120,
  "g_last_modified": 120,
  "description": "Placeholder component for the Home page. This page will display various sections like featured recipes, creator spotlights, and potentially category carousels.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide the main landing and discovery page for users after login in the web prototype. References Figma Catalogue IDs: T-02 (Main Layout), T-05 (Content Cards), T-06 (Category/Filter Chips).",
  "key_logic_points": [
    "Display sections for different content types (e.g., featured, popular, new).",
    "Utilize reusable card components for displaying recipes/creators.",
    "Placeholder for search bar integration.",
    "Placeholder for filter chip integration."
  ],
  "interfaces_provided": [
    { "name": "HomePage", "interface_type": "REACT_COMPONENT", "details": "The main component for the home/discovery screen.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation (e.g., Link to recipe details)." }
  ],
  "internal_dependencies": [
    // "cycle0_comp_card_g112" (RecipeCard, CreatorCard),
    // "cycle0_comp_searchbar_g112" (if created as a common component),
    // "cycle0_comp_chip_g112" (FilterChip),
    // "cycle0_mock_data_recipes_g112",
    // "cycle0_mock_data_users_g112" (for creators)
  ],
  "dependents": [
    "cycle0_router_config_g112" // This page will be a route in AppRouter
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g120. To be populated with specific UI placeholders and mock data integration based on T-02, T-05, T-06 (Figma)."
  }
}
ANNOTATION_BLOCK_END */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Example: Mock API service (to be created in services/api.js or similar)
// import { fetchFeaturedRecipes, fetchPopularCreators, fetchCategories } from '../services/api'; 

// Placeholder for reusable components
// const SearchBar = () => <input type="search" placeholder="Search recipes, ingredients, creators... (T-02_search)" style={{width: '100%', padding: '10px', marginBottom: '20px'}} />;
// const RecipeCard = ({ recipe }) => (
//   <div style={{ border: '1px solid #eee', padding: '10px', margin: '10px', width: '200px', textAlign: 'left' }}>
//     {/* <img src={recipe.imageUrl || 'https://via.placeholder.com/200x100?text=Recipe+Image'} alt={recipe.name} style={{width: '100%', height: '100px', objectFit: 'cover'}}/> Placeholder for T-05_image */}
//     <h4>{recipe.name} (T-05_title)</h4>
//     <p style={{fontSize: '0.8em'}}>By: {recipe.creatorName} (T-05_creator)</p>
//     <p style={{fontSize: '0.8em'}}>{recipe.prepTime} | {recipe.calories} cals (T-05_details)</p>
//     <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
//   </div>
// );
// const FilterChip = ({ category }) => <button style={{margin: '5px', padding: '5px 10px'}}>{category.name} (T-06_chip)</button>;

/**
 * HomePage Component (References Figma Catalogue: T-02, T-05, T-06)
 * 
 * Purpose: Main discovery page, displaying various recipe and creator collections.
 * 
 * Structure:
 * - Overall page container.
 * - Search bar area (T-02_search).
 * - Filter chip area for categories/cuisines (T-02_filters, T-06_chip_container).
 * - Sections for content (e.g., "Featured Recipes", "Popular Creators", "New This Week").
 *   - Each section may be a horizontal scroll or grid of cards (T-05_card_container).
 *   - Recipe Cards (T-05) with image, title, creator, basic info, link to detail.
 *   - Creator Cards (similar to T-05, but for creators).
 * 
 * Placeholders & Checklist:
 * [ ] Implement state for fetched/mocked data (recipes, creators, categories).
 * [ ] (Mock) Fetch data on component mount (useEffect).
 * [ ] Implement SearchBar placeholder component - Ref T-02_search.
 * [ ] Implement FilterChip placeholder components and container - Ref T-06_chip_container, T-06_chip.
 *     [ ] Map through mock categories to display chips.
 * [ ] Implement sections for content display:
 *     [ ] "Featured Recipes" section.
 *         [ ] Map through mock featured recipes to display RecipeCard placeholders (T-05).
 *     [ ] "Popular Creators" section.
 *         [ ] Map through mock popular creators to display CreatorCard (or adapted RecipeCard) placeholders.
 *     [ ] (Optional) Other sections like "Newest Recipes", "Quick Meals", etc.
 * [ ] Basic styling for layout, sections, cards, and chips.
 * 
 * Figma References:
 * - T-02: Home Screen - Main Layout (Search, Filters, Content Sections)
 *     - T-02_search: Search bar input field.
 *     - T-02_filters: Horizontal scroll container for filter chips.
 *     - T-02_section_title: Title for a content section (e.g., "Featured Recipes").
 * - T-05: Content Card - Recipe (Image, Title, Creator, Details, FavIcon)
 *     - T-05_image: Recipe image.
 *     - T-05_title: Recipe title.
 *     - T-05_creator: Creator's name/avatar.
 *     - T-05_details: Short details (e.g., prep time, calories).
 *     - T-05_action_favorite: Favorite icon/button (mock interaction).
 * - T-06: Filter Chip (Category, Cuisine, Diet)
 *     - T-06_chip: Individual filter chip button.
 *     - T-06_chip_container: Container for multiple chips.
 */
const HomePage = () => {
  // Mock data state - in a real app, this would come from a service/context
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  const [popularCreators, setPopularCreators] = useState([]);
  const [categories, setCategories] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    // const data = await fetchFeaturedRecipes(); // example
    setFeaturedRecipes([
      { id: 'r1', name: 'Spicy Chicken Pasta', creatorName: 'Chef John', prepTime: '30 min', calories: 500, imageUrl: 'https://via.placeholder.com/200x100?text=Pasta' },
      { id: 'r2', name: 'Vegan Buddha Bowl', creatorName: 'Green Goddess', prepTime: '20 min', calories: 400, imageUrl: 'https://via.placeholder.com/200x100?text=Bowl' },
      { id: 'r3', name: 'Berry Smoothie', creatorName: 'FitFoodie', prepTime: '5 min', calories: 250, imageUrl: 'https://via.placeholder.com/200x100?text=Smoothie' },
    ]);
    setPopularCreators([
      { id: 'c1', name: 'Chef John', profilePic: 'https://via.placeholder.com/50?text=CJ' },
      { id: 'c2', name: 'Green Goddess', profilePic: 'https://via.placeholder.com/50?text=GG' },
    ]);
    setCategories([
      { id: 'cat1', name: 'Italian' }, { id: 'cat2', name: 'Vegan' }, { id: 'cat3', name: 'Quick & Easy' }, { id: 'cat4', name: 'Desserts' }
    ]);
  }, []);

  // Placeholder components (can be moved to their own files later)
  const SearchBar = () => <input type="search" placeholder="Search recipes, ingredients... (T-02_search)" style={{width: 'calc(100% - 40px)', padding: '12px', margin: '20px', boxSizing: 'border-box', fontSize:'1em'}} />;
  
  const RecipeCard = ({ recipe }) => (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', margin: '0 10px 20px 10px', width: '220px', textAlign: 'left', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <img src={recipe.imageUrl || 'https://via.placeholder.com/220x120?text=Recipe+Image'} alt={recipe.name} style={{width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px'}}/>
      <h4 style={{margin: '10px 0 5px 0'}}>{recipe.name} (T-05_title)</h4>
      <p style={{fontSize: '0.9em', color: '#555', margin: '0 0 5px 0'}}>By: <Link to={`/creator/${recipe.creatorName.toLowerCase().replace(' ', '-')}`}>{recipe.creatorName}</Link> (T-05_creator)</p>
      <p style={{fontSize: '0.8em', color: '#777', margin: '0 0 10px 0'}}>{recipe.prepTime} | {recipe.calories} cals (T-05_details)</p>
      <Link to={`/recipe/${recipe.id}`} style={{textDecoration:'none', color:'blue'}}>View Recipe</Link>
      {/* Placeholder for T-05_action_favorite */}
      <span style={{float: 'right', cursor: 'pointer'}} title="Favorite (mock)">❤️</span>
    </div>
  );

  const CreatorCard = ({ creator }) => (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', margin: '0 10px 20px 10px', width: '180px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <img src={creator.profilePic || 'https://via.placeholder.com/80?text=Creator'} alt={creator.name} style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', marginBottom:'10px'}}/>
      <h5 style={{margin: '5px 0'}}><Link to={`/creator/${creator.name.toLowerCase().replace(' ', '-')}`}>{creator.name}</Link></h5>
      {/* More creator details if needed */}
    </div>
  );

  const FilterChip = ({ category }) => <button style={{margin: '0 5px 10px 5px', padding: '8px 15px', borderRadius:'20px', border:'1px solid #ccc', background:'#f8f8f8', cursor:'pointer'}} onClick={() => alert(`Filtering by ${category.name}`)}>{category.name} (T-06_chip)</button>;

  return (
    <div style={{ padding: '0 20px' }}>
      <header style={{padding: '20px 0', borderBottom: '1px solid #eee', marginBottom:'20px'}}>
        {/* Placeholder for a more complex Header component from layout */}
        <h1 style={{textAlign:'center'}}>Cultif Home (T-02)</h1>
      </header>
      
      <SearchBar />
      
      <div style={{ marginBottom: '20px', display: 'flex', overflowX: 'auto', paddingBottom: '10px' }} className="filter-chip-container T-02_filters T-06_chip_container">
        {categories.map(cat => <FilterChip key={cat.id} category={cat} />)}
      </div>

      <section>
        <h3 style={{borderBottom:'1px solid #eee', paddingBottom:'10px'}} className="T-02_section_title">Featured Recipes</h3>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '20px 0' }} className="T-05_card_container">
          {featuredRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      </section>

      <section>
        <h3 style={{borderBottom:'1px solid #eee', paddingBottom:'10px'}} className="T-02_section_title">Popular Creators</h3>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '20px 0' }} className="T-05_card_container">
          {popularCreators.map(creator => <CreatorCard key={creator.id} creator={creator} />)}
        </div>
      </section>
      
      {/* Add more sections as needed */}
      <p style={{marginTop: '30px', fontSize: '0.8em', textAlign:'center', color:'#aaa'}}>Figma Refs: T-02, T-05, T-06</p>
    </div>
  );
};

export default HomePage; 