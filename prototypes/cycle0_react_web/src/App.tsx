/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_prototype_app_entry_g112",
  "version_tag": "0.3.1-ux-aligned-g170",
  "g_created": 116,
  "g_last_modified": 170,
  "description": "Main application entry point. Updated `exactNoMainHeaderFooterPaths` to include /login and /signup, ensuring these auth pages do not display the global Header/Footer.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To serve as the root component, managing global layout (Header/Footer visibility) and routing, adapting to different page layout needs (app-like vs. global nav vs. auth flow).",
  "key_logic_points": [
    "Integrates AppRouter for page navigation.",
    "Conditionally renders main Header and Footer.",
    "Uses `exactNoMainHeaderFooterPaths` for pages like /home, /onboarding, /login, /signup.",
    "Uses `startsWithNoMainHeaderFooterPaths` for dynamic routes like /creator/:creatorId that require app-specific navigation.",
    "Adjusts main content padding based on Header/Footer visibility."
  ],
  "interfaces_provided": [
    { "name": "App", "interface_type": "REACT_COMPONENT", "details": "The root React component.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For BrowserRouter, useLocation, and routing capabilities." }
  ],
  "internal_dependencies": [
    "cycle0_router_config_g112",
    "cycle0_comp_header_g112",
    "cycle0_comp_footer_g112"
  ],
  "dependents": [],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Corrected Header/Footer visibility logic for /login and /signup pages at g170. Previous version 0.3.0-ux-aligned-g170."
  }
}
ANNOTATION_BLOCK_END */

// import { useState } from 'react' // Default Vite import, can be removed if not used initially
// import reactLogo from './assets/react.svg' // Default Vite import
// import viteLogo from '/vite.svg' // Default Vite import
import './App.css' // Default Vite import, can be kept or replaced

// Import routing and layout components
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRouter from './navigation/AppRouter';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Mock data for Header navLinks and user (can be moved or fetched later)
const mockNavLinks = [
  { label: 'Home', path: '/home' },
  { label: 'Meal Plan', path: '/meal-plan' },
  { label: 'Upload Recipe', path: '/upload-recipe' },
  { label: 'Subscription', path: '/subscription' },
  // Add more links as needed, e.g., for specific recipe categories, etc.
];

// To simulate a logged-in user for Header display:
const mockUser = {
  name: 'Demo User',
  avatarUrl: 'https://via.placeholder.com/40?text=DU' // Placeholder avatar
};
// To simulate a logged-out state, set mockUser to null:
// const mockUser = null;

function AppContent() { // Renamed App to AppContent to use useLocation hook
  const location = useLocation();

  // Paths that should not show the main Header and Footer from App.tsx
  // because they either are part of auth flow or have their own specific app-like layout
  const exactNoMainHeaderFooterPaths = [
    '/onboarding',
    '/login',
    '/signup',
    '/home',
    '/meal-plan',
    '/profile',
    // '/search' // Add '/search' when its page and specific layout are defined
  ];

  const startsWithNoMainHeaderFooterPaths = [
    '/creator/', // For /creator/:creatorId routes
    // Add other base paths for dynamic routes here if they need app-like nav
  ];

  const showMainHeaderFooter = 
    !exactNoMainHeaderFooterPaths.includes(location.pathname) && 
    !startsWithNoMainHeaderFooterPaths.some(path => location.pathname.startsWith(path));

  // const [count, setCount] = useState(0) // Default Vite state, can be removed

  const handleLogout = () => {
    alert('Mock Logout Action from App.jsx');
    // Here you would typically clear user session/token and redirect
    // For now, we can simulate it by potentially re-rendering with mockUser = null if state managed here
  };

  return (
    <> {/* Changed from BrowserRouter to Fragment, BrowserRouter will wrap AppContent */}
      {showMainHeaderFooter && <Header navLinks={mockNavLinks} user={mockUser} onLogout={handleLogout} />}
      <main style={{ 
        paddingTop: showMainHeaderFooter ? '20px' : '0', // Adjust padding based on main header visibility
        paddingBottom: showMainHeaderFooter ? '20px' : '0', // Adjust padding based on main footer visibility
        minHeight: showMainHeaderFooter ? 'calc(100vh - 120px)' : '100vh' /* Rough estimate for main header/footer or full height */ 
      }}>
        <AppRouter />
      </main>
      {showMainHeaderFooter && <Footer 
        footerLinks={[{label: 'About', path: '/about-placeholder'}, {label: 'Contact', path: '/contact-placeholder'}] /* Example */} 
        socialLinks={[{name: 'X', url:'#', icon: 'X'}, {name:'Insta', url:'#', icon:'IG'}]} /* Example */
      />}
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