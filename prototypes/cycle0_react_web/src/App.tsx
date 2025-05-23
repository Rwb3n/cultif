/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_prototype_app_entry_g112",
  "version_tag": "0.2.1-ts",
  "g_created": 116,
  "g_last_modified": 158,
  "description": "Main application entry point for the Cycle 0 Web Prototype, now migrated to TypeScript (.tsx). This component sets up the main layout and integrates the application router.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To serve as the root component for the web prototype, housing global layout and routing capabilities, using TypeScript.",
  "key_logic_points": [
    "Initial React component structure in TSX.",
    "Integrates AppRouter for page navigation.",
    "Includes Header and Footer as common layout components.",
    "Uses BrowserRouter to enable routing.",
    "Migrated from JSX to TSX as part of plan_jsx_to_tsx_g157."
  ],
  "interfaces_provided": [
    { "name": "App", "interface_type": "REACT_COMPONENT", "details": "The root React component.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For BrowserRouter and routing capabilities." }
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
    "manual_review_comment": "Integrated AppRouter, Header, and Footer. Basic layout structure established. g124."
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
  const noMainHeaderFooterPaths = [
    '/onboarding',
    '/home',
    '/meal-plan',
    '/profile',
    // '/search' // Add '/search' when its page and specific layout are defined
  ];

  const showMainHeaderFooter = !noMainHeaderFooterPaths.includes(location.pathname);

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