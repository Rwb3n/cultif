/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_home_g112",
  "version_tag": "0.1.1",
  "g_created": 120,
  "g_last_modified": 146,
  "description": "Home page displaying featured recipes and creator spotlights. RecipeCard section refactored to use common Card and primitive components. Placeholder images updated to local versions.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide the main landing and discovery page for users. References Figma Catalogue IDs: T-02, T-05, T-06.",
  "key_logic_points": [
    "Displays sections for different content types.",
    "RecipeCard component (used in 'Featured Recipes') refactored to use common Card, Box, Typography, and Link components.",
    "CreatorCard, SearchBar, FilterChip remain as inline placeholders for now.",
    "Placeholder for search bar and filter chip integration."
  ],
  "interfaces_provided": [
    { "name": "HomePage", "interface_type": "REACT_COMPONENT", "details": "The main component for the home/discovery screen.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation (Link primitive usage)." }
  ],
  "internal_dependencies": [
    "cycle0_comp_card_g112",
    "cycle1_primitive_box_g132",
    "cycle1_primitive_typography_g132",
    "cycle1_primitive_link_g132"
    // "cycle0_comp_searchbar_g112" (if created as a common component),
    // "cycle0_comp_chip_g112" (FilterChip),
    // "cycle0_mock_data_recipes_g112",
    // "cycle0_mock_data_users_g112" (for creators)
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": ["issue_placeholder_img_g145"],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g120. Featured Recipes section (RecipeCard component) refactored at g149 to use Card, Box, Typography, and Link components. Other sections (SearchBar, Filters, CreatorCard) are still placeholders."
  }
}
ANNOTATION_BLOCK_END */

import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Replaced by PrimitiveLink where used

// Refactored Components
import Card from '../components/common/Card';
import Box from '../components/primitives/Box';
import Typography from '../components/primitives/Typography';
import PrimitiveLink from '../components/primitives/Link';
import Stack from '../components/primitives/Stack'; // Potentially useful for card content

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
      { id: 'r1', name: 'Spicy Chicken Pasta', creatorName: 'Chef John', prepTime: '30 min', calories: 500, imageUrl: '/assets/placeholders/220x120.png' },
      { id: 'r2', name: 'Vegan Buddha Bowl', creatorName: 'Green Goddess', prepTime: '20 min', calories: 400, imageUrl: '/assets/placeholders/220x120.png' },
      { id: 'r3', name: 'Berry Smoothie', creatorName: 'FitFoodie', prepTime: '5 min', calories: 250, imageUrl: '/assets/placeholders/220x120.png' },
    ]);
    setPopularCreators([
      { id: 'c1', name: 'Chef John', profilePic: '/assets/placeholders/50x50.png' },
      { id: 'c2', name: 'Green Goddess', profilePic: '/assets/placeholders/50x50.png' },
    ]);
    setCategories([
      { id: 'cat1', name: 'Italian' }, { id: 'cat2', name: 'Vegan' }, { id: 'cat3', name: 'Quick & Easy' }, { id: 'cat4', name: 'Desserts' }
    ]);
  }, []);

  // Placeholder components (can be moved to their own files later)
  const SearchBar = () => <input type="search" placeholder="Search recipes, ingredients... (T-02_search)" style={{width: 'calc(100% - 40px)', padding: '12px', margin: '20px', boxSizing: 'border-box', fontSize:'1em'}} />;
  
  // Refactored RecipeCard using common Card and primitives
  const RecipeCard = ({ recipe }) => (
    <Card sx={{ width: 220, margin: '0 10px 20px 10px' }}>
      <Box 
        component="img" 
        src={recipe.imageUrl || '/assets/placeholders/220x120.png'} 
        alt={recipe.name} 
        sx={{width: '100%', height: '120px', objectFit: 'cover', borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit'}}
      />
      <Box p={2}>
        <Typography variant="h6" component="h4" gutterBottom noWrap>
          {recipe.name} (T-05_title)
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          By: <PrimitiveLink to={`/creator/${recipe.creatorName.toLowerCase().replace(/ /g, '-')}`}>{recipe.creatorName}</PrimitiveLink> (T-05_creator)
        </Typography>
        <Typography variant="caption" display="block" color="textSecondary" gutterBottom>
          {recipe.prepTime} | {recipe.calories} cals (T-05_details)
        </Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mt:1}}>
          <PrimitiveLink to={`/recipe/${recipe.id}`}>View Recipe</PrimitiveLink>
          {/* Placeholder for T-05_action_favorite */}
          <Box component="span" sx={{cursor: 'pointer'}} title="Favorite (mock)" onClick={() => alert(`Favorited ${recipe.name}`)}>❤️</Box>
        </Stack>
      </Box>
    </Card>
  );

  // CreatorCard remains a placeholder for now
  const CreatorCard = ({ creator }) => (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', margin: '0 10px 20px 10px', width: '180px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <img src={creator.profilePic || '/assets/placeholders/50x50.png'} alt={creator.name} style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', marginBottom:'10px'}}/>
      <h5 style={{margin: '5px 0'}}><PrimitiveLink to={`/creator/${creator.name.toLowerCase().replace(/ /g, '-')}`}>{creator.name}</PrimitiveLink></h5>
      {/* More creator details if needed */}
    </div>
  );

  const FilterChip = ({ category }) => <button style={{margin: '0 5px 10px 5px', padding: '8px 15px', borderRadius:'20px', border:'1px solid #ccc', background:'#f8f8f8', cursor:'pointer'}} onClick={() => alert(`Filtering by ${category.name}`)}>{category.name} (T-06_chip)</button>;

  return (
    <Box p={{ xs: 1, sm: 2, md: 3 }}>
      <Box component="header" sx={{padding: '20px 0', borderBottom: '1px solid #eee', marginBottom:'20px'}}>
        {/* Placeholder for a more complex Header component from layout */}
        <Typography variant="h3" component="h1" align="center">Cultif Home (T-02)</Typography>
      </Box>
      
      <SearchBar />
      
      <Box sx={{ marginBottom: '20px', display: 'flex', overflowX: 'auto', paddingBottom: '10px' }} className="filter-chip-container T-02_filters T-06_chip_container">
        {categories.map(cat => <FilterChip key={cat.id} category={cat} />)}
      </Box>

      <Box component="section">
        <Typography variant="h5" component="h3" gutterBottom sx={{borderBottom:'1px solid #eee', paddingBottom:'10px'}} className="T-02_section_title">
            Featured Recipes
        </Typography>
        <Box sx={{ display: 'flex', overflowX: 'auto', padding: '20px 0' }} className="T-05_card_container">
          {featuredRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </Box>
      </Box>

      <Box component="section" sx={{mt: 4}}>
        <Typography variant="h5" component="h3" gutterBottom sx={{borderBottom:'1px solid #eee', paddingBottom:'10px'}} className="T-02_section_title">
            Popular Creators
        </Typography>
        <Box sx={{ display: 'flex', overflowX: 'auto', padding: '20px 0' }} className="T-05_card_container">
          {popularCreators.map(creator => <CreatorCard key={creator.id} creator={creator} />)}
        </Box>
      </Box>
      
      {/* Add more sections as needed */}
      <Typography variant="caption" display="block" color="textSecondary" align="center" sx={{mt: 4, mb: 2}}>
          Figma Refs: T-02, T-05, T-06
      </Typography>
    </Box>
  );
};

export default HomePage; 