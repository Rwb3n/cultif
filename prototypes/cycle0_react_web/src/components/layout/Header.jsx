/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_header_g112",
  "version_tag": "0.1.0",
  "g_created": 124,
  "g_last_modified": 124,
  "description": "A reusable header component for the application layout, typically containing branding, navigation, and user actions.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a consistent top navigation bar across most pages of the application. References Figma Catalogue: C-04 (Global Header/Navigation).",
  "key_logic_points": [
    "Displays the application logo or title.",
    "Contains primary navigation links.",
    "May include a search bar placeholder.",
    "May display user authentication status (e.g., login/signup buttons or user avatar with dropdown)."
  ],
  "interfaces_provided": [
    { "name": "Header", "interface_type": "REACT_COMPONENT", "details": "Props: navLinks, user, onLogout, className", "notes": "navLinks is an array of {label, path}. user object contains user info or null. Ref C-04_header_standard_layout." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation links (<Link>)." }
  ],
  "internal_dependencies": [
    "cycle0_comp_button_g112" // For login/signup/logout buttons
  ],
  "dependents": [
    "cycle0_prototype_app_entry_g112" // Typically used in the main App layout
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g124. Placeholder for a common header. Styling and full prop handling to be implemented. Based on C-04."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Button from '../common/Button'; // Assuming Button component is created and available

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
  user = null, // Example: { name: 'Test User', avatarUrl: 'https://via.placeholder.com/40'}
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
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#333',
    // Add C-04_logo_style
  };

  const navStyle = {
    display: 'flex',
    gap: '1.5rem',
    // Add C-04_primary_nav_style
  };

  const navLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#007bff' : '#555',
    fontWeight: isActive ? 'bold' : 'normal',
    // Add C-04_navlink_active_inactive_styles
  });
  
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
      {/* C-04_logo_area */}
      <Link to="/" style={logoStyle} className="header-logo">
        Cultif (Logo)
      </Link>

      {/* C-04_primary_nav */}
      <nav style={navStyle} className="header-nav">
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} style={navLinkStyle} className="header-nav-link">
            {link.label}
          </NavLink>
        ))}
      </nav>
      
      {/* (Optional) C-04_search_bar_placeholder - visual only for now */}
      {/* <div className="search-placeholder" style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px'}}>Search...</div> */}

      {/* C-04_user_actions_area */}
      <div style={userActionsStyle} className="header-user-actions">
        {user ? (
          <div onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
            <img src={user.avatarUrl || 'https://via.placeholder.com/40?text=U'} alt={user.name} style={userAvatarStyle} />
            <span style={{marginLeft:'10px', fontWeight:'500'}}>{user.name}</span>
            {/* Basic dropdown arrow - replace with an icon */}
            <span style={{marginLeft:'5px'}}>&#9662;</span> 
            {isUserMenuOpen && (
              <div style={userMenuStyle} className="user-dropdown-menu">
                <Link to="/profile" style={userMenuItemStyle} onClick={() => setIsUserMenuOpen(false)}>Profile (T-11)</Link>
                <Link to="/settings" style={userMenuItemStyle} onClick={() => setIsUserMenuOpen(false)}>Settings</Link>
                <button onClick={() => { onLogout(); setIsUserMenuOpen(false); }} style={{...userMenuItemStyle, width:'100%', textAlign:'left', background:'none', border:'none', cursor:'pointer'}}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* These should use the common Button component, e.g., <Button variant="outline" size="sm">Login</Button> */}
            <Link to="/login" style={{...authButtonStyle, textDecoration: 'none', color:'#007bff', border:'1px solid #007bff'}}>Login (T-03a)</Link>
            <Link to="/signup" style={{...authButtonStyle, textDecoration: 'none', color:'white', backgroundColor:'#007bff', border:'1px solid #007bff'}}>Sign Up (T-03b)</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 