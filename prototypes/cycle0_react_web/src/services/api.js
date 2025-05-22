/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_mock_services_g112",
  "version_tag": "0.1.0",
  "g_created": 125,
  "g_last_modified": 125,
  "description": "Provides mock API service functions for the web prototype. These functions simulate backend calls by returning mock data, often with a slight delay.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To enable front-end components to be developed and tested as if they were interacting with a real API, by providing a consistent interface for data fetching.",
  "key_logic_points": [
    "Exports functions that mimic API calls (e.g., fetchRecipes, fetchUserProfile, submitReview).",
    "Imports mock data from `../mockData/` files.",
    "Uses `setTimeout` to simulate network latency for API calls.",
    "Handles basic filtering or data manipulation if needed for specific mock API calls."
  ],
  "interfaces_provided": [
    { "name": "fetchRecipes", "interface_type": "ASYNC_FUNCTION", "details": "Returns a promise that resolves with an array of mock recipe objects.", "notes": "Simulates fetching all recipes." },
    { "name": "fetchRecipeById", "interface_type": "ASYNC_FUNCTION", "details": "Returns a promise that resolves with a single mock recipe object matching the given ID.", "notes": "Simulates fetching a specific recipe." },
    { "name": "fetchUserProfile", "interface_type": "ASYNC_FUNCTION", "details": "Returns a promise that resolves with a mock user profile object.", "notes": "Simulates fetching a user profile." },
    { "name": "fetchCreatorProfile", "interface_type": "ASYNC_FUNCTION", "details": "Returns a promise that resolves with a mock creator profile object.", "notes": "Simulates fetching a creator profile." }
  ],
  "requisites": [],
  "external_dependencies": [],
  "internal_dependencies": [
    "cycle0_mock_data_recipes_g112",
    "cycle0_mock_data_users_g112"
  ],
  "dependents": [
    "cycle0_page_home_g112",
    "cycle0_page_recipedetail_g112",
    "cycle0_page_userprofile_g112",
    "cycle0_page_creatorprofile_g112",
    "cycle0_page_mealplan_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g125. Includes basic mock API functions for recipes and users. More functions can be added for other entities or actions."
  }
}
ANNOTATION_BLOCK_END */

import { mockRecipes } from './mockData/recipes';
import { mockUsers, mockCreators, mockCurrentUser } from './mockData/users';

const SIMULATED_DELAY = 500; // ms

// --- Recipe API Stubs ---
export const fetchRecipes = (filters = {}) => {
  console.log('Mock API: fetchRecipes called with filters:', filters);
  return new Promise((resolve) => {
    setTimeout(() => {
      // Basic filtering example (can be expanded)
      let results = [...mockRecipes];
      if (filters.cuisine) {
        results = results.filter(r => r.cuisine.toLowerCase() === filters.cuisine.toLowerCase());
      }
      if (filters.difficulty) {
        results = results.filter(r => r.difficulty.toLowerCase() === filters.difficulty.toLowerCase());
      }
      if (filters.creatorId) {
        results = results.filter(r => r.creatorId === filters.creatorId);
      }
      resolve(results);
    }, SIMULATED_DELAY);
  });
};

export const fetchRecipeById = (recipeId) => {
  console.log('Mock API: fetchRecipeById called with id:', recipeId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const recipe = mockRecipes.find(r => r.id === recipeId);
      if (recipe) {
        resolve(recipe);
      } else {
        reject(new Error('Recipe not found'));
      }
    }, SIMULATED_DELAY);
  });
};

// --- User/Creator API Stubs ---
export const fetchUserProfile = (userId) => {
  console.log('Mock API: fetchUserProfile called with userId:', userId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(u => u.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    }, SIMULATED_DELAY);
  });
};

export const fetchCreatorProfile = (creatorId) => {
  console.log('Mock API: fetchCreatorProfile called with creatorId:', creatorId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const creator = mockCreators.find(c => c.id === creatorId);
      if (creator) {
        resolve(creator);
      } else {
        reject(new Error('Creator not found'));
      }
    }, SIMULATED_DELAY);
  });
};

export const fetchCurrentAuthenticatedUser = () => {
  console.log('Mock API: fetchCurrentAuthenticatedUser called');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCurrentUser); // Directly use the exported mockCurrentUser
    }, SIMULATED_DELAY / 2); // Faster for current user usually
  });
};

// --- Mock Interaction Stubs (Examples) ---
export const submitReview = (recipeId, review) => {
  console.log('Mock API: submitReview called for recipeId:', recipeId, 'Review:', review);
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would interact with a backend.
      // Here we just log and resolve.
      resolve({ success: true, message: 'Review submitted successfully (mocked).', reviewId: `rev_${Date.now()}` });
    }, SIMULATED_DELAY);
  });
};

export const saveRecipe = (userId, recipeId) => {
  console.log('Mock API: saveRecipe called for userId:', userId, 'recipeId:', recipeId);
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock logic: find user and add to their savedRecipeIds if not already there
      const user = mockUsers.find(u => u.id === userId);
      if (user && !user.savedRecipeIds.includes(recipeId)) {
        user.savedRecipeIds.push(recipeId);
        console.log(`Recipe ${recipeId} saved for user ${userId}. Current saved:`, user.savedRecipeIds);
      }
      resolve({ success: true, message: 'Recipe saved (mocked).' });
    }, SIMULATED_DELAY);
  });
};

// Add more mock API functions as needed: e.g., for meal plans, user preferences, etc. 