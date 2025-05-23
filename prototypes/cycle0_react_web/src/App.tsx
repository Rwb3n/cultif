/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_prototype_app_entry_g112",
  "version_tag": "0.4.0-app-nav-only-g173",
  "g_created": 116,
  "g_last_modified": 173,
  "description": "Main application entry point. Removed global Header and Footer components and related conditional rendering logic. Application now relies on page-specific navigation components like TopLogoBar and BottomStickyNav.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To serve as the root component, managing routing. Page-specific components are now responsible for their own navigation elements (e.g., TopLogoBar, BottomStickyNav).",
  "key_logic_points": [
    "Integrates AppRouter for page navigation.",
    "No longer renders a global Header or Footer.",
    "Main content area styling is simplified as global Header/Footer are removed."
  ],
  "interfaces_provided": [
    { "name": "App", "interface_type": "REACT_COMPONENT", "details": "The root React component.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For BrowserRouter and routing capabilities." }
  ],
  "internal_dependencies": [
    "cycle0_router_config_g112"
  ],
  "dependents": [],
  "linked_issue_ids": ["issue_ux_cleanup_g173"],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "g173: Removed global Header/Footer, associated logic and mock data. App now expects pages to implement their own navigation like TopLogoBar/BottomStickyNav. Previous g173 refers to an earlier, separate change on RecipeDetailPage: Added /recipe/ to startsWithNoMainHeaderFooterPaths for consistent app-like nav on recipe detail."
  }
}
ANNOTATION_BLOCK_END */

// import { useState } from 'react' // Default Vite import, can be removed if not used initially
// import reactLogo from './assets/react.svg' // Default Vite import
// import viteLogo from '/vite.svg' // Default Vite import
import './App.css' // Default Vite import, can be kept or replaced

// Import routing components
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './navigation/AppRouter';
// Header and Footer components are no longer used globally.
// Mock data for Header navLinks and user are no longer needed.
// const mockNavLinks = [
//   { label: 'Home', path: '/home' },
//   { label: 'Meal Plan', path: '/meal-plan' },
//   { label: 'Upload Recipe', path: '/upload-recipe' },
//   { label: 'Subscription', path: '/subscription' },
//   // Add more links as needed, e.g., for specific recipe categories, etc.
// ];

// // To simulate a logged-in user for Header display:
// const mockUser = {
//   name: 'Demo User',
//   avatarUrl: 'https://via.placeholder.com/40?text=DU' // Placeholder avatar
// };
// // To simulate a logged-out state, set mockUser to null:
// // const mockUser = null;

function AppContent() { // Renamed App to AppContent to use useLocation hook, but useLocation and related logic are removed.
  // const location = useLocation(); // No longer needed

  // Paths that should not show the main Header and Footer are no longer relevant.
  // const exactNoMainHeaderFooterPaths = [
  //   '/onboarding',
  //   '/login',
  //   '/signup',
  //   '/home',
  //   '/meal-plan',
  //   '/profile',
  //   // '/search' // Add '/search' when its page and specific layout are defined
  // ];

  // const startsWithNoMainHeaderFooterPaths = [
  //   '/creator/', // For /creator/:creatorId routes
  //   '/recipe/',   // For /recipe/:recipeId routes
  //   // Add other base paths for dynamic routes here if they need app-like nav
  // ];

  // const showMainHeaderFooter = // Logic no longer needed
  //   !exactNoMainHeaderFooterPaths.includes(location.pathname) && 
  //   !startsWithNoMainHeaderFooterPaths.some(path => location.pathname.startsWith(path));

  // const [count, setCount] = useState(0) // Default Vite state, can be removed

  // const handleLogout = () => { // No longer needed as Header is removed
  //   alert('Mock Logout Action from App.jsx');
  //   // Here you would typically clear user session/token and redirect
  //   // For now, we can simulate it by potentially re-rendering with mockUser = null if state managed here
  // };

  return (
    <> {/* Changed from BrowserRouter to Fragment, BrowserRouter will wrap AppContent */}
      {/* Header component and its related logic are removed */}
      <main style={{ 
        paddingTop: '0', // Main Header no longer exists
        paddingBottom: '0', // Main Footer no longer exists
        minHeight: '100vh' // Ensure main content can fill the viewport height
      }}>
        <AppRouter />
      </main>
      {/* Footer component and its related logic are removed 
      // Example of what was here:
      // <Footer 
      //   footerLinks={[{label: 'About', path: '/about-placeholder'}, {label: 'Contact', path: '/contact-placeholder'}]} 
      //   socialLinks={[{name: 'X', url:'#', icon: 'X'}, {name:'Insta', url:'#', icon:'IG'}]} 
      // />
      */}
    </>
  )
}

function App() { // New App component to wrap AppContent with BrowserRouter
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App 