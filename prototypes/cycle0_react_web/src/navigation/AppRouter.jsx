/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_router_config_g112",
  "version_tag": "0.1.1",
  "g_created": 124,
  "g_last_modified": 136,
  "description": "Defines the main application routes using React Router DOM, mapping URL paths to their corresponding page components.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To manage client-side routing for the web prototype, enabling navigation between different scaffolded pages. References Figma Catalogue: N/A (routing logic), but relies on pages T-01 to T-15.",
  "key_logic_points": [
    "Imports all page components created in task pc0wp_task_002.",
    "Defines a <Routes> block containing individual <Route> configurations.",
    "Maps paths like '/', '/login', '/onboarding', '/recipe/:recipeId', '/meal-plan', etc., to their respective page components.",
    "Includes a fallback route for 404 Not Found scenarios, potentially redirecting to Home or a dedicated NotFoundPage.",
    "Includes a route for the StyleGuidePage."
  ],
  "interfaces_provided": [
    { "name": "AppRouter", "interface_type": "REACT_COMPONENT", "details": "A React component that sets up all the application routes.", "notes": "To be used within the main App.js or a layout component." }
  ],
  "requisites": [
    { "description": "All page components from pc0wp_task_002 must be created and exportable.", "type": "INTERNAL_DEPENDENCY" },
    { "description": "`react-router-dom` library must be installed.", "type": "EXTERNAL_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For routing functionalities (Routes, Route, Link, etc.)." }
  ],
  "internal_dependencies": [
    "cycle0_page_onboarding_g112",
    "cycle0_page_login_g112",
    "cycle0_page_signup_g112",
    "cycle0_page_home_g112",
    "cycle0_page_recipedetail_g112",
    "cycle0_page_mealplan_g112",
    "cycle0_page_userprofile_g112",
    "cycle0_page_creatorprofile_g112",
    "cycle0_page_recipeupload_g112",
    "cycle0_page_subscription_g112",
    "cycle1_styleguide_page_g131"
    // Potentially a NotFoundPage component if created
  ],
  "dependents": [
    "cycle0_prototype_app_entry_g112" // This router will be rendered by App.js
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g124. Defines routes for all created page components. Placeholder for layout integration and 404 handling. StyleGuidePage route added at g136."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import { Routes, Route, Navigate, Link as RouterDomLink } from 'react-router-dom';

// Import Page Components (ensure paths are correct based on actual file structure)
import OnboardingPage from '../pages/OnboardingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import RecipeDetailPage from '../pages/RecipeDetailPage';
import MealPlanPage from '../pages/MealPlanPage';
import UserProfilePage from '../pages/UserProfilePage';
import CreatorProfilePage from '../pages/CreatorProfilePage';
import RecipeUploadPage from '../pages/RecipeUploadPage';
import SubscriptionPage from '../pages/SubscriptionPage';
import StyleGuidePage from '../pages/StyleGuidePage';

// (Optional) A simple NotFoundPage component placeholder
const NotFoundPage = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <RouterDomLink to="/">Go to Home</RouterDomLink>
  </div>
);

/**
 * AppRouter Component
 *
 * Purpose: Defines all client-side routes for the application.
 *
 * Structure:
 * - Uses `<Routes>` to group all route definitions.
 * - Each `<Route>` maps a URL `path` to an `element` (a React component).
 * - Includes dynamic routes with parameters (e.g., `/recipe/:recipeId`).
 * - Includes a catch-all route (`*`) for handling 404 Not Found pages.
 * - Might include a redirect from `/` to a default page like `/home`.
 *
 * Checklist for future enhancement:
 * [ ] Consider adding a main Layout component that wraps around pages (e.g., to include Header and Footer).
 *     [ ] Routes would then be nested within this Layout or use `Outlet`.
 * [ ] Implement proper authentication checks for protected routes (e.g., redirect to /login if not authenticated for /profile).
 * [ ] Add more specific routes as new features/pages are added.
 * [ ] Ensure `basename` is configured in `BrowserRouter` if the app is not served from the root of the domain.
 */
const AppRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/onboarding" element={<OnboardingPage />} /> {/* T-01 */}
      <Route path="/login" element={<LoginPage />} /> {/* T-03a */}
      <Route path="/signup" element={<SignupPage />} /> {/* T-03b */}
      
      {/* Main Application Routes (potentially wrapped in a layout with Header/Footer) */}
      <Route path="/" element={<Navigate replace to="/home" />} /> {/* Default redirect to home */}
      <Route path="/home" element={<HomePage />} /> {/* T-02, T-05, T-06 */}
      
      <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} /> {/* T-09 */}
      <Route path="/meal-plan" element={<MealPlanPage />} /> {/* T-07, T-15 */}
      {/* Example for a specific meal plan: <Route path="/meal-plan/:planId" element={<MealPlanPage />} /> */}
      
      <Route path="/profile" element={<UserProfilePage />} /> {/* T-11 - Assumed to be the current user's profile */}
      {/* For viewing other users' profiles, might be /users/:userId if that feature exists */}
      
      <Route path="/creator/:creatorId" element={<CreatorProfilePage />} /> {/* T-12 */}
      <Route path="/upload-recipe" element={<RecipeUploadPage />} /> {/* T-13 */}
      
      <Route path="/subscription" element={<SubscriptionPage />} /> {/* T-04, T-08 */}

      {/* Style Guide Route */}
      <Route path="/style-guide" element={<StyleGuidePage />} />

      {/* (Optional) Example of other routes like terms, privacy if they are full pages */}
      {/* <Route path="/terms" element={<TermsPage />} /> */}
      {/* <Route path="/privacy" element={<PrivacyPolicyPage />} /> */}

      {/* Catch-all for 404 Not Found */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter; 