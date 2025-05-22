/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_header_g112",
  "version_tag": "0.2.0-shadcn-planned",
  "g_created": 124,
  "g_last_modified": 152,
  "description": "PLANNED FOR REFACTORING: This header component will be refactored extensively using Tailwind CSS for mobile-first styling. For mobile, it will likely feature a logo and a hamburger menu icon triggering a shadcn/ui Sheet or Drawer for navigation. Desktop navigation might use shadcn/ui NavigationMenu if a distinct desktop view is prioritized later. Original description: A reusable header component for the application layout. Uses Typography for logo, Link primitive for navigation, and Button for auth actions. Placeholder images updated to local versions.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "REFACTORING_PLANNED",
  "purpose_statement": "PLANNED FOR REFACTORING: To provide a consistent, mobile-first top navigation bar. Will be refactored using Tailwind CSS and potentially shadcn/ui components (Sheet/Drawer for mobile menu, NavigationMenu for desktop). Original purpose: To provide a consistent top navigation bar across most pages of the application. References Figma Catalogue: C-04 (Global Header/Navigation).",
  "key_logic_points": [
    "PLANNED REFACTORING with Tailwind CSS for mobile-first responsive design.",
    "Mobile view: Logo + Hamburger menu icon (triggering `shadcn/ui Sheet` or `Drawer`).",
    "Navigation links will be moved into the Sheet/Drawer for mobile.",
    "User authentication actions (Login/Signup/Logout) will use `shadcn/ui Button` and be styled for mobile, possibly within the Sheet/Drawer or as primary actions if space allows.",
    "Desktop view (secondary focus): May use `shadcn/ui NavigationMenu` or a simpler flex layout."
  ],
  "interfaces_provided": [
    { "name": "Header (to be refactored)", "interface_type": "REACT_COMPONENT", "details": "Props: navLinks, user, onLogout, className", "notes": "This component is slated for significant refactoring for mobile-first presentation using Tailwind CSS and shadcn/ui. NavLinks will likely be managed differently for mobile (e.g., inside a drawer). User object contains user info or null. Ref C-04_header_standard_layout." }
  ],
  "requisites": [
    { "description": "Decision to use shadcn/ui and Tailwind CSS as per plan_cycle0_mobile_styling_g150", "type": "PROJECT_DECISION" },
    { "description": "Analysis for mobile header structure from cycle0_shadcn_analysis_g151.md", "type": "ANALYSIS_INPUT" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "Still used by the Link primitive for internal routing. Link functionality will be preserved using react-router-dom Link, styled with Tailwind."}, 
    { "name": "Tailwind CSS (target)", "version": "latest", "reason": "Primary styling library for refactoring."}, 
    { "name": "shadcn/ui Sheet/Drawer (potential)", "version": "latest", "reason": "For mobile navigation menu."},
    { "name": "lucide-react (potential)", "version": "latest", "reason": "For icons like hamburger menu."}
  ],
  "internal_dependencies": [
    "cycle0_comp_button_g112",
    "cycle1_primitive_link_g132",
    "cycle1_primitive_typography_g132"
  ],
  "dependents": [
    "cycle0_prototype_app_entry_g112",
    "cycle1_styleguide_page_g131"
  ],
  "linked_issue_ids": ["issue_placeholder_img_g145"],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g124. Based on C-04. Temp Style Guide link g137. Dependents g140. Refactored to use Typography and Link primitives (g145). Button component is used for logout. Login/Signup are Link primitives styled as buttons. Styling needs refinement. Marked for major refactoring with Tailwind CSS and shadcn/ui components at g=152 as per plan_cycle0_mobile_styling_g150 and analysis cycle0_shadcn_analysis_g151.md."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
// Link and NavLink from react-router-dom are now primarily used by the PrimitiveLink component
import PrimitiveLink from '../primitives/Link';
import Typography from '../primitives/Typography';
import Button from '../common/Button'; // Retained for logout button for now

/**
 * Header Component (References Figma Catalogue: C-04 - Global Header/Navigation)
 *
 * Purpose: Provides the main navigation and branding at the top of the application.
 *
 * Props:
 *   navLinks: Array of objects, e.g., [{ label: 'Home', path: '/' }, { label: 'Recipes', path: '/recipes' }]. (Ref C-04_navigation_links)
 *   user: Object, represents the currently logged-in user (e.g., { name: 'Alice', avatarUrl: '...' }) or null/undefined if not logged in.
 *   onLogout: Function, callback to handle user logout.
 *   className: String, optional additional CSS classes for custom styling.
 *
 * Structure (Based on C-04_header_standard_layout):
 * - Main `<header>` container.
 * - Logo/Site Title area (C-04_logo_area).
 * - Primary Navigation Links area (C-04_primary_nav).
 * - (Optional) Search bar placeholder (C-04_search_bar_placeholder).
 * - User actions area (C-04_user_actions_area):
 *   - If user is logged in: Display user avatar/name, dropdown with profile/logout links.
 *   - If user is not logged in: Display Login and Signup buttons.
 *
 * Checklist for future implementation:
 * [ ] Implement base styling for the header layout (flexbox/grid for alignment).
 * [ ] Style the logo/site title.
 * [ ] Style navigation links (active state using NavLink, hover states) - Ref C-04_navlink_styles.
 * [ ] Implement the search bar placeholder (visual only for now).
 * [ ] Implement user actions area:
 *     [ ] Conditional rendering based on `user` prop.
 *     [ ] Styling for Login/Signup buttons (using the Button component).
 *     [ ] Styling for user avatar and name display.
 *     [ ] (Optional) Dropdown menu for logged-in user (profile, settings, logout) - Ref C-04_user_dropdown.
 * [ ] Ensure responsiveness for different screen sizes (e.g., hamburger menu for mobile) - Ref C-04_header_responsive_states.
 */
const Header = ({
  navLinks = [],
  user = null, // Example: { name: 'Test User', avatarUrl: '/assets/placeholders/40x40.png'}
  onLogout = () => alert('Mock Logout'),
  className = '',
}) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Basic placeholder styles - these should be in a CSS file or module
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #e7e7e7',
    // Add more styles from C-04_header_base
  };

  const logoStyle = {
    // fontSize: '1.5rem', // Typography will handle this via variant
    // fontWeight: 'bold', // Typography will handle this
    textDecoration: 'none',
    color: '#333',
  };

  const navStyle = {
    display: 'flex',
    gap: '1.5rem',
  };

  // PrimitiveLink handles active state styling internally if using NavLink mode
  // We can pass a function to className prop of PrimitiveLink if it supports it for NavLink active state
  const navPrimitiveLinkActiveStyle = "header-nav-link-active"; // Example class for active NavLink

  const userActionsStyle = {
    position: 'relative',
    // Add C-04_user_actions_area_style
  };

  const userAvatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    objectFit: 'cover',
    border: '2px solid #ddd'
  };
  
  const userMenuStyle = {
    position: 'absolute',
    top: '50px',
    right: 0,
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    padding: '0.5rem 0',
    zIndex: 10,
    minWidth: '150px',
    // Add C-04_user_dropdown_style
  };

  const userMenuItemStyle = {
    display: 'block',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    color: '#333',
    // hover effect to be added via CSS
  };

  const authButtonStyle = {
    marginLeft: '0.5rem',
    padding: '0.5rem 1rem',
    // These would ideally use the common Button component with variants
    // Button variant='outline' or variant='primary'
  };

  return (
    <header style={headerStyle} className={`app-header ${className}`.trim()}>
      <PrimitiveLink to="/" style={logoStyle} className="header-logo" component={Typography} variant="h5" color="inherit">
        Cultif
      </PrimitiveLink>

      <nav style={navStyle} className="header-nav">
        {navLinks.map((link) => (
          <PrimitiveLink 
            key={link.path} 
            to={link.path} 
            variant="nav" // Assuming Link primitive has a 'nav' variant
            className={({ isActive }) => 
              `header-nav-link ${isActive ? navPrimitiveLinkActiveStyle : ''}`
            }
            // end // Pass `end` prop if necessary for exact matching
          >
            {link.label}
          </PrimitiveLink>
        ))}
        <PrimitiveLink 
          to="/style-guide" 
          variant="nav" 
          className={({ isActive }) => 
            `header-nav-link ${isActive ? navPrimitiveLinkActiveStyle : ''}`
          }
        >
          (Dev) Style Guide
        </PrimitiveLink>
      </nav>
      
      {/* (Optional) C-04_search_bar_placeholder - visual only for now */}
      {/* <div className="search-placeholder" style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px'}}>Search...</div> */}

      {/* C-04_user_actions_area */}
      <div style={userActionsStyle} className="header-user-actions">
        {user ? (
          <div onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
            <img src={user.avatarUrl || '/assets/placeholders/40x40.png'} alt={user.name} style={userAvatarStyle} />
            <Typography variant="body2" style={{marginLeft:'10px', fontWeight:'500'}}>{user.name}</Typography>
            <Typography variant="caption" style={{marginLeft:'5px'}}>&#9662;</Typography> 
            {isUserMenuOpen && (
              <div style={userMenuStyle} className="user-dropdown-menu">
                <PrimitiveLink to="/profile" variant="subtle" style={userMenuItemStyle} onClick={() => setIsUserMenuOpen(false)}>Profile (T-11)</PrimitiveLink>
                <PrimitiveLink to="/settings" variant="subtle" style={userMenuItemStyle} onClick={() => setIsUserMenuOpen(false)}>Settings</PrimitiveLink>
                <Button variant="text" onClick={() => { onLogout(); setIsUserMenuOpen(false); }} style={{...userMenuItemStyle, width:'100%', textAlign:'left', padding: '0.5rem 1rem', justifyContent: 'flex-start'}}>Logout</Button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <PrimitiveLink to="/login" variant="buttonLike" style={{...authButtonStyle, textDecoration: 'none', color:'#007bff', border:'1px solid #007bff'}}>Login (T-03a)</PrimitiveLink>
            <PrimitiveLink to="/signup" variant="buttonLike" style={{...authButtonStyle, textDecoration: 'none', color:'white', backgroundColor:'#007bff', border:'1px solid #007bff'}}>Sign Up (T-03b)</PrimitiveLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 