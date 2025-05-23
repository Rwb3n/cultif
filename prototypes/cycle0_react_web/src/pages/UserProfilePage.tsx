/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_userprofile_g112",
  "version_tag": "0.1.0",
  "g_created": 122,
  "g_last_modified": 122,
  "description": "Placeholder component for the User Profile page. This page will display user information, saved recipes, meal plans, and settings.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a user-specific area for managing their account, preferences, and content within the web prototype. References Figma Catalogue ID: T-11.",
  "key_logic_points": [
    "Display user avatar and basic information (name, username).",
    "Tabs for different sections: My Recipes, My Meal Plans, Settings.",
    "'My Recipes' tab: Display a list/grid of recipes created or favorited by the user (mocked).",
    "'My Meal Plans' tab: Display a list/summary of saved meal plans (mocked).",
    "'Settings' tab: Placeholders for account settings (e.g., change password, email, dietary preferences - mock interactions).",
    "Logout button."
  ],
  "interfaces_provided": [
    { "name": "UserProfilePage", "interface_type": "REACT_COMPONENT", "details": "Component for displaying and managing user profile information.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation (Link) and potentially nested routes for tabs." }
  ],
  "internal_dependencies": [
    // "cycle0_mock_data_users_g112"
    // "cycle0_mock_data_recipes_g112"
    // "cycle0_comp_button_g112"
    // "cycle0_comp_card_g112" (for recipe display)
  ],
  "dependents": [
    "cycle0_router_config_g112" // This page will be a route in AppRouter
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g122. To be populated with specific UI placeholders and mock data integration based on T-11 (Figma)."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Mock user data (replace with actual fetch logic or context)
const mockUser = {
  id: 'u1',
  name: 'Alice Wonderland',
  username: 'alicew',
  avatarUrl: 'https://via.placeholder.com/150?text=User+Avatar',
  email: 'alice@example.com',
  bio: 'Loves to cook and explore new recipes. Focused on healthy eating.',
  favoriteRecipes: [
    { id: 'r1', name: 'Spicy Chicken Pasta', imageUrl: 'https://via.placeholder.com/100x100?text=Pasta' },
    { id: 'r3', name: 'Berry Smoothie', imageUrl: 'https://via.placeholder.com/100x100?text=Smoothie' },
  ],
  myMealPlans: [
    { id: 'mp1', name: 'Current Week Plan', summary: 'A mix of quick dinners and healthy lunches.' },
    { id: 'mp2', name: 'High Protein Plan', summary: 'Focused on protein intake for workouts.' },
  ],
  settings: {
    dietaryPreferences: ['Vegetarian', 'Low-Carb'],
    notifications: true,
  }
};

/**
 * UserProfilePage Component (References Figma Catalogue: T-11)
 * 
 * Purpose: Displays the logged-in user's profile information, including their created/saved content and settings.
 * 
 * Structure (T-11 - User Profile Dashboard):
 * - Main container.
 * - Profile Header (T-11_header): User Avatar (T-11_avatar), Name (T-11_username), Edit Profile Button (T-11_edit_button).
 * - Tab Navigation (T-11_tabs): For sections like "My Recipes", "My Meal Plans", "Favorites", "Settings".
 * - Tab Content Area (T-11_tab_content):
 *   - My Recipes (T-11_my_recipes_section): Grid/list of user's recipes (T-11_recipe_card_small).
 *   - My Meal Plans (T-11_my_mealplans_section): List of user's meal plans (T-11_mealplan_summary_item).
 *   - Settings (T-11_settings_section): Form fields for profile settings, preferences (T-11_settings_form).
 * - Logout Button (T-11_logout_button).
 * 
 * Placeholders & Checklist:
 * [ ] Implement state for the current `user` data and active `tab`.
 * [ ] (Mock) Fetch user data (useEffect).
 * [ ] Display Profile Header: Avatar, Name, and an "Edit Profile" button (mock action) - Ref T-11_header, T-11_avatar, T-11_username, T-11_edit_button.
 * [ ] Implement Tab Navigation for "My Recipes", "My Meal Plans", "Settings" - Ref T-11_tabs.
 * [ ] Based on active tab, render content:
 *     [ ] My Recipes: Display list/grid of `user.favoriteRecipes` (mocked) - Ref T-11_my_recipes_section, T-11_recipe_card_small.
 *         [ ] Each recipe could link to its detail page.
 *     [ ] My Meal Plans: Display list of `user.myMealPlans` (mocked) - Ref T-11_my_mealplans_section, T-11_mealplan_summary_item.
 *         [ ] Each plan could link to the meal plan page.
 *     [ ] Settings: Display placeholders for editable fields (name, email, bio, dietary preferences) - Ref T-11_settings_section, T-11_settings_form.
 *         [ ] Mock "Save Settings" button.
 * [ ] Implement Logout Button (mock action, e.g., navigate to login) - Ref T-11_logout_button.
 * [ ] Basic styling for layout, tabs, and content sections.
 * [ ] Back navigation link if applicable (e.g., if accessed from somewhere other than main nav).
 */
const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('recipes'); // recipes, mealPlans, settings
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching user data
    setUser(mockUser);
  }, []);

  const handleLogout = () => {
    alert('Mock: Logging out...');
    // navigate('/login'); // Assuming a login route exists
  };

  if (!user) {
    return <div style={{padding: '20px'}}>Loading user profile... (T-11)</div>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'recipes':
        return (
          <div className="T-11_my_recipes_section">
            <h3 style={{borderBottom:'1px solid #eee', paddingBottom:'10px'}}>My Favorite Recipes</h3>
            {user.favoriteRecipes.length > 0 ? (
              <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap:'15px'}}>
                {user.favoriteRecipes.map(recipe => (
                  <Link key={recipe.id} to={`/recipe/${recipe.id}`} style={{textDecoration:'none', color:'inherit'}} className="T-11_recipe_card_small">
                    <div style={{border:'1px solid #ddd', borderRadius:'4px', padding:'10px', textAlign:'center'}}>
                      <img src={recipe.imageUrl} alt={recipe.name} style={{width:'100%', height:'100px', objectFit:'cover', borderRadius:'4px'}}/>
                      <p style={{margin:'5px 0 0'}}>{recipe.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : <p>No favorite recipes yet.</p>}
          </div>
        );
      case 'mealPlans':
        return (
          <div className="T-11_my_mealplans_section">
            <h3 style={{borderBottom:'1px solid #eee', paddingBottom:'10px'}}>My Meal Plans</h3>
            {user.myMealPlans.length > 0 ? (
              <ul style={{listStyle:'none', padding:0}}>
                {user.myMealPlans.map(plan => (
                  <li key={plan.id} style={{border:'1px solid #ddd', borderRadius:'4px', padding:'10px', marginBottom:'10px'}} className="T-11_mealplan_summary_item">
                    <Link to={`/meal-plan/${plan.id}`} style={{textDecoration:'none', color:'inherit', fontWeight:'bold'}}>{plan.name}</Link>
                    <p style={{fontSize:'0.9em', color:'#555'}}>{plan.summary}</p>
                  </li>
                ))}
              </ul>
            ) : <p>No saved meal plans yet.</p>}
          </div>
        );
      case 'settings':
        return (
          <div className="T-11_settings_section">
            <h3 style={{borderBottom:'1px solid #eee', paddingBottom:'10px'}}>Settings</h3>
            <form className="T-11_settings_form" onSubmit={(e) => e.preventDefault()}>
              <div style={{marginBottom:'15px'}}>
                <label htmlFor="name" style={{display:'block', marginBottom:'5px'}}>Name:</label>
                <input type="text" id="name" defaultValue={user.name} style={{width:'100%', padding:'8px', boxSizing:'border-box'}} />
              </div>
              <div style={{marginBottom:'15px'}}>
                <label htmlFor="email" style={{display:'block', marginBottom:'5px'}}>Email:</label>
                <input type="email" id="email" defaultValue={user.email} style={{width:'100%', padding:'8px', boxSizing:'border-box'}} />
              </div>
              <div style={{marginBottom:'15px'}}>
                <label htmlFor="bio" style={{display:'block', marginBottom:'5px'}}>Bio:</label>
                <textarea id="bio" defaultValue={user.bio} rows={3} style={{width:'100%', padding:'8px', boxSizing:'border-box'}} />
              </div>
              <div style={{marginBottom:'15px'}}>
                <p>Dietary Preferences (mock): {user.settings.dietaryPreferences.join(', ')}</p>
              </div>
              <button type="submit" onClick={() => alert('Mock: Settings Saved!')} style={{padding:'10px 15px'}}>Save Settings</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: 'auto' }}>
      <Link to="/home" style={{display:'block', marginBottom:'15px'}}>&larr; Back to Home</Link>

      {/* T-11_header */}
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', paddingBottom:'20px', borderBottom:'1px solid #eee' }} className="T-11_header">
        <img src={user.avatarUrl} alt={`${user.name}'s avatar`} style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }} className="T-11_avatar" />
        <div>
          <h1 style={{ margin: '0 0 5px 0' }} className="T-11_username">{user.name} (@{user.username})</h1>
          <button onClick={() => alert('Mock: Edit Profile clicked!')} style={{padding:'8px 12px'}} className="T-11_edit_button">Edit Profile</button>
        </div>
        <button onClick={handleLogout} style={{ marginLeft: 'auto', padding:'8px 12px', background:'#f44336', color:'white', border:'none', borderRadius:'4px'}} className="T-11_logout_button">Logout</button>
      </header>

      {/* T-11_tabs */}
      <nav style={{ marginBottom: '20px' }} className="T-11_tabs">
        <button onClick={() => setActiveTab('recipes')} style={tabStyle(activeTab === 'recipes')}>My Recipes</button>
        <button onClick={() => setActiveTab('mealPlans')} style={tabStyle(activeTab === 'mealPlans')}>My Meal Plans</button>
        <button onClick={() => setActiveTab('settings')} style={tabStyle(activeTab === 'settings')}>Settings</button>
      </nav>

      {/* T-11_tab_content */}
      <div className="T-11_tab_content">
        {renderTabContent()}
      </div>

      <p style={{marginTop: '30px', fontSize: '0.8em', textAlign:'center', color:'#aaa'}}>Figma Ref: T-11</p>
    </div>
  );
};

const tabStyle = (isActive) => ({
  padding: '10px 15px',
  marginRight: '10px',
  border: 'none',
  borderBottom: isActive ? '3px solid #007bff' : '3px solid transparent',
  cursor: 'pointer',
  background: 'none',
  fontSize: '1em',
  fontWeight: isActive ? 'bold' : 'normal'
});

export default UserProfilePage; 