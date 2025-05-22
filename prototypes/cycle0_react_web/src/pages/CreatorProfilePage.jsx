/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_creatorprofile_g112",
  "version_tag": "0.1.0",
  "g_created": 123, 
  "g_last_modified": 123,
  "description": "Placeholder component for the Creator Profile page. This page will display information about a content creator, their recipes, and ways to follow/support them.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To showcase a content creator's profile, their culinary contributions, and allow users to engage with their content. References Figma Catalogue ID: T-12.",
  "key_logic_points": [
    "Display creator's avatar, name, bio, and social links.",
    "Show statistics like number of recipes, followers, etc. (mocked).",
    "Tabbed or sectioned view for 'Recipes', 'About', 'Community Posts' (mocked).",
    "'Recipes' section: Display a gallery/list of recipes published by the creator.",
    "'Follow' or 'Subscribe' button (mock interaction).",
    "(Future) Integration with creator-specific content like articles or videos."
  ],
  "interfaces_provided": [
    { "name": "CreatorProfilePage", "interface_type": "REACT_COMPONENT", "details": "Component for displaying a content creator's profile.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation (Link, useParams to get creator ID)." }
  ],
  "internal_dependencies": [
    // "cycle0_mock_data_creators_g112",
    // "cycle0_mock_data_recipes_g112",
    // "cycle0_comp_button_g112",
    // "cycle0_comp_card_g112" // For recipe display
  ],
  "dependents": [
    "cycle0_router_config_g112" // This page will be a route in AppRouter
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g123. To be populated with specific UI placeholders and mock data integration based on T-12 (Figma)."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

// Mock creator data (replace with actual fetch logic or context based on creatorId)
const mockCreators = {
  c1: {
    id: 'c1',
    name: 'Chef Gourmet Master',
    username: 'chefmaster',
    avatarUrl: 'https://via.placeholder.com/150?text=Creator+C1',
    bio: 'Passionate chef sharing delicious and easy-to-make recipes from around the world. Join my culinary journey!',
    followers: 12500,
    recipesCount: 75,
    socialLinks: {
      instagram: '#',
      youtube: '#',
      website: '#',
    },
    recipes: [
      { id: 'r1', name: 'Spicy Chicken Pasta', imageUrl: 'https://via.placeholder.com/100x100?text=Pasta' },
      { id: 'r6', name: 'Gourmet Beef Steak', imageUrl: 'https://via.placeholder.com/100x100?text=Steak' },
      { id: 'r7', name: 'Chocolate Lava Cake', imageUrl: 'https://via.placeholder.com/100x100?text=Cake' },
    ]
  },
  c2: {
    id: 'c2',
    name: 'Healthy Bites Ella',
    username: 'healthyella',
    avatarUrl: 'https://via.placeholder.com/150?text=Creator+C2',
    bio: 'Your go-to source for nutritious and tasty meal prep ideas. Eating healthy can be fun!',
    followers: 8200,
    recipesCount: 40,
    socialLinks: {
      instagram: '#',
      pinterest: '#',
    },
    recipes: [
      { id: 'r2', name: 'Vegan Buddha Bowl', imageUrl: 'https://via.placeholder.com/100x100?text=Bowl' },
      { id: 'r3', name: 'Berry Smoothie', imageUrl: 'https://via.placeholder.com/100x100?text=Smoothie' },
    ]
  }
};

/**
 * CreatorProfilePage Component (References Figma Catalogue: T-12)
 * 
 * Purpose: Displays a specific content creator's profile, including their bio, recipes, and other relevant information.
 * 
 * Structure (T-12 - Creator Profile View):
 * - Main container.
 * - Creator Header (T-12_creator_header): Avatar (T-12_creator_avatar), Name (T-12_creator_name), Follow Button (T-12_follow_button), Stats (T-12_creator_stats - followers, recipes).
 * - Creator Bio (T-12_creator_bio).
 * - Social Media Links (T-12_social_links).
 * - Tab Navigation (T-12_creator_tabs): For "Recipes", "About", "Posts" (or similar sections).
 * - Tab Content Area (T-12_creator_tab_content):
 *   - Recipes (T-12_recipes_gallery): Grid/list of creator's published recipes (T-12_recipe_card_medium).
 *   - About (T-12_about_section): More detailed information about the creator.
 *   - Posts (T-12_posts_feed): Community posts or updates from the creator (mocked).
 * 
 * Placeholders & Checklist:
 * [ ] Implement state for `creatorData` and active `tab`.
 * [ ] Use `useParams` to get `creatorId` from the route.
 * [ ] (Mock) Fetch creator data based on `creatorId` (useEffect).
 * [ ] Display Creator Header: Avatar, Name, Follow button (mock), Stats - Ref T-12_creator_header, T-12_creator_avatar, T-12_creator_name, T-12_follow_button, T-12_creator_stats.
 * [ ] Display Creator Bio - Ref T-12_creator_bio.
 * [ ] Display Social Media Links - Ref T-12_social_links.
 * [ ] Implement Tab Navigation (e.g., "Recipes", "About") - Ref T-12_creator_tabs.
 * [ ] Based on active tab, render content:
 *     [ ] Recipes: Display list/grid of `creatorData.recipes` - Ref T-12_recipes_gallery, T-12_recipe_card_medium.
 *         [ ] Each recipe links to its detail page.
 *     [ ] About: Display more detailed bio or information - Ref T-12_about_section.
 * [ ] Basic styling for layout, tabs, and content sections.
 * [ ] Handle case where creatorId is not found.
 * [ ] Back navigation link.
 */
const CreatorProfilePage = () => {
  const { creatorId } = useParams(); // Get creatorId from URL path
  const [creatorData, setCreatorData] = useState(null);
  const [activeTab, setActiveTab] = useState('recipes'); // e.g., recipes, about
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    // Simulate fetching creator data
    // In a real app, this would be an API call: fetchCreatorById(creatorId)
    const foundCreator = mockCreators[creatorId];
    if (foundCreator) {
      setCreatorData(foundCreator);
    } else {
      setCreatorData(null); // Or handle as a 404 not found
    }
    setLoading(false);
  }, [creatorId]);

  const handleFollow = () => {
    alert(`Mock: Following ${creatorData?.name || 'creator'}!`);
  };

  if (loading) {
    return <div style={{padding: '20px'}}>Loading creator profile... (T-12)</div>;
  }

  if (!creatorData) {
    return (
      <div style={{padding: '20px', textAlign: 'center'}}>
        <h2>Creator Not Found (T-12)</h2>
        <p>The creator profile you are looking for does not exist.</p>
        <Link to="/home">Go to Home</Link>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'recipes':
        return (
          <div className="T-12_recipes_gallery">
            <h3 style={{borderBottom:'1px solid #eee', paddingBottom:'10px', marginTop: '20px'}}>Recipes by {creatorData.name}</h3>
            {creatorData.recipes && creatorData.recipes.length > 0 ? (
              <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap:'20px'}}>
                {creatorData.recipes.map(recipe => (
                  <Link key={recipe.id} to={`/recipe/${recipe.id}`} style={{textDecoration:'none', color:'inherit'}} className="T-12_recipe_card_medium">
                    <div style={{border:'1px solid #ddd', borderRadius:'8px', padding:'15px', textAlign:'center'}}>
                      <img src={recipe.imageUrl} alt={recipe.name} style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'4px'}}/>
                      <h4 style={{margin:'10px 0 5px'}}>{recipe.name}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            ) : <p>No recipes published by this creator yet.</p>}
          </div>
        );
      case 'about':
        return (
          <div className="T-12_about_section">
            <h3 style={{borderBottom:'1px solid #eee', paddingBottom:'10px', marginTop: '20px'}}>About {creatorData.name}</h3>
            <p>{creatorData.bio}</p>
            {/* Placeholder for more detailed about information */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      <button onClick={() => navigate(-1)} style={{marginBottom:'15px'}}>&larr; Back</button>

      {/* T-12_creator_header */}
      <header style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px', paddingBottom:'20px', borderBottom:'1px solid #eee' }} className="T-12_creator_header">
        <img src={creatorData.avatarUrl} alt={`${creatorData.name}'s avatar`} style={{ width: '120px', height: '120px', borderRadius: '50%', marginRight: '25px' }} className="T-12_creator_avatar" />
        <div style={{flexGrow: 1}}>
          <h1 style={{ margin: '0 0 10px 0' }} className="T-12_creator_name">{creatorData.name}</h1>
          <p className="T-12_creator_username" style={{margin: '0 0 10px', color: '#555'}}>@{creatorData.username}</p>
          <div className="T-12_creator_stats" style={{display: 'flex', gap: '20px', marginBottom:'15px', fontSize:'0.9em'}}>
            <span><strong>{creatorData.recipesCount}</strong> Recipes</span>
            <span><strong>{creatorData.followers}</strong> Followers</span>
            {/* Add more stats if available */}
          </div>
          <button onClick={handleFollow} style={{padding:'10px 15px', background:'#007bff', color:'white', border:'none', borderRadius:'5px'}} className="T-12_follow_button">Follow</button>
        </div>
      </header>
      
      {/* T-12_creator_bio (short bio, full in about tab) */}
      <div className="T-12_creator_bio" style={{marginBottom: '20px'}}>
        <p>{creatorData.bio.substring(0, 150)}{creatorData.bio.length > 150 && '...'}</p>
      </div>

      {/* T-12_social_links */}
      <div className="T-12_social_links" style={{marginBottom:'20px'}}>
        {creatorData.socialLinks?.instagram && <a href={creatorData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" style={{marginRight:'10px'}}>Instagram</a>}
        {creatorData.socialLinks?.youtube && <a href={creatorData.socialLinks.youtube} target="_blank" rel="noopener noreferrer" style={{marginRight:'10px'}}>YouTube</a>}
        {creatorData.socialLinks?.website && <a href={creatorData.socialLinks.website} target="_blank" rel="noopener noreferrer" style={{marginRight:'10px'}}>Website</a>}
        {creatorData.socialLinks?.pinterest && <a href={creatorData.socialLinks.pinterest} target="_blank" rel="noopener noreferrer">Pinterest</a>}
      </div>

      {/* T-12_creator_tabs */}
      <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }} className="T-12_creator_tabs">
        <button onClick={() => setActiveTab('recipes')} style={tabStyle(activeTab === 'recipes')}>Recipes</button>
        <button onClick={() => setActiveTab('about')} style={tabStyle(activeTab === 'about')}>About</button>
        {/* Add more tabs like 'Posts' if needed */}
      </nav>

      {/* T-12_creator_tab_content */}
      <div className="T-12_creator_tab_content">
        {renderTabContent()}
      </div>

      <p style={{marginTop: '30px', fontSize: '0.8em', textAlign:'center', color:'#aaa'}}>Figma Ref: T-12</p>
    </div>
  );
};

// Reusable tab style function (can be moved to a common styles file)
const tabStyle = (isActive) => ({
  padding: '10px 15px',
  marginRight: '5px',
  border: 'none',
  borderBottom: isActive ? '3px solid #007bff' : '3px solid transparent',
  cursor: 'pointer',
  background: 'none',
  fontSize: '1em',
  fontWeight: isActive ? 'bold' : 'normal',
  color: isActive ? '#007bff' : '#333'
});

export default CreatorProfilePage; 