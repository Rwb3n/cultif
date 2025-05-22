/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_prototype_readme_g112",
  "version_tag": "0.1.0",
  "g_created": 115,
  "g_last_modified": 115,
  "description": "README for the Cycle 0 React.js Web Prototype. This document provides an overview of the prototype, setup instructions, and guidance on how to run it locally. Its primary purpose is to facilitate stakeholder review of the core user flows.",
  "artifact_type": "DOCUMENTATION",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To guide users and stakeholders in understanding and running the Cycle 0 web prototype for review and feedback.",
  "key_logic_points": [
    "Provides instructions for installing dependencies (npm install).",
    "Provides instructions for running the prototype locally (npm run dev).",
    "Briefly describes the core user flows simulated in this prototype."
  ],
  "interfaces_provided": [],
  "requisites": [
    { "description": "Node.js and npm installed on the user's system.", "type": "SYSTEM_REQUIREMENT" }
  ],
  "external_dependencies": [
    { "name": "React.js", "version": "^18.2.0", "reason": "Core library for building the UI prototype." },
    { "name": "Vite", "version": "^5.0.0", "reason": "Build tool and development server." },
    { "name": "react-router-dom", "version": "^6.0.0", "reason": "For client-side routing and navigation (to be added)." }
  ],
  "internal_dependencies": [],
  "dependents": [],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial draft created by Hybrid_AI_OS g115. To be populated with more specific flow details as prototype develops."
  }
}
ANNOTATION_BLOCK_END */

# Cultif - Cycle 0 React.js Web Prototype

This project is a high-fidelity, interactive click-through web prototype for the Cultif application, developed as part of Cycle 0. Its main goal is to demonstrate the core user flows and gather feedback from stakeholders before proceeding with full mobile application development.

## Overview

This prototype simulates the following key user journeys:

*   **Onboarding:** Initial user experience.
*   **Authentication:** Login, Signup, and Forgot Password flows.
*   **Home/Discovery:** Browsing recipes and content.
*   **Recipe Details:** Viewing a single recipe.
*   **Meal Planning:** Creating and managing meal plans.
*   **User Profile:** Viewing and editing user information.
*   **Creator Profile:** Viewing creator pages.
*   **Recipe Upload:** The process for creators to add new recipes.
*   **Subscription:** Interacting with paywalls and subscription offers.

All data is mocked, and no backend integration is present in this prototype.

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (which includes npm)

## Setup and Installation

1.  **Navigate to the prototype directory:**
    ```bash
    cd prototypes/cycle0_react_web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Running the Prototype

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173` or similar).

## Project Structure

*   `public/`: Static assets.
*   `src/`: Source code for the prototype.
    *   `assets/`: Images, fonts, etc.
    *   `components/`: Reusable UI components (common, layout, feature-specific).
    *   `contexts/`: React contexts for state management (if any simple ones are used).
    *   `hooks/`: Custom React hooks.
    *   `pages/` (or `screens/`): Top-level page components.
    *   `navigation/` (or `routes/`): Routing configuration.
    *   `services/`: Mock data and API stubs.
    *   `styles/`: Global styles, theme configurations.
    *   `utils/`: Utility functions.
*   `README.md`: This file.

## Feedback

Please provide any feedback on the user flows, layout, and overall interactions to assist in refining the application design.
