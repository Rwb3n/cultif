/* ANNOTATION_BLOCK_START
{
  "artifact_id": "c0_mobile_readme",
  "version_tag": "0.1.0-c0",
  "g_created": 4,
  "g_last_modified": 4,
  "description": "README file for the Cycle 0 React Native (Expo) shell application for the WorldChef/Cultif project. This document outlines the setup, structure, and basic operational guidance for the initial mobile prototype created during Cycle 0.",
  "artifact_type": "DOCUMENTATION",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide developers and stakeholders with essential information about the Cycle 0 mobile shell application, including how to run it and understand its basic architecture as a foundation for subsequent development cycles.",
  "key_logic_points": [
    "Outlines project setup for the React Native (Expo) shell.",
    "Describes basic navigation structure implemented in Cycle 0.",
    "Details how static mock data is used for UI population.",
    "Confirms Tailwind CSS integration and foundational design token setup."
  ],
  "interfaces_provided": [],
  "requisites": [
    { "description": "Completion of Cycle 0 objectives related to the mobile shell app.", "type": "FUNCTIONAL" }
  ],
  "external_dependencies": [
    { "name": "React Native (Expo)", "version": "SDK 51 (as per TRD)", "reason": "Core framework for mobile application development." },
    { "name": "Tailwind CSS (tailwind-react-native-classnames)", "version": "As per TRD", "reason": "Styling utility framework." }
  ],
  "internal_dependencies": [],
  "dependents": ["c1_rn_app_src"],
  "linked_issue_ids": [],
  "quality_notes": {
    "linting": "N/A",
    "unit_tests": "N/A",
    "manual_review_comment": "Initial draft for Cycle 0. To be expanded as development progresses.",
    "last_security_review_g": null
  }
}
ANNOTATION_BLOCK_END */

# WorldChef/Cultif - Cycle 0 Mobile Shell Application README

Version: 0.1.0-c0
Last Updated (g): 4

## 1. Overview

This document provides information about the React Native (Expo) shell application created as part of Cycle 0: Proto Frame for the WorldChef/Cultif project. The primary goal of this shell application is to establish a basic, navigable mobile application structure with Tailwind CSS integration, serving as a foundation for subsequent development cycles.

This shell application uses static mock data and does not involve any backend integration or live data fetching.

## 2. Project Setup & Prerequisites

- Node.js (LTS version recommended)
- Expo CLI (`npm install -g expo-cli`)
- Git
- Access to the project repository.

## 3. Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <project_directory>/mobile
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the application:**
    ```bash
    expo start
    ```
    This will open the Expo Developer Tools in your web browser. You can then choose to run the app on:
    - An iOS simulator (macOS only)
    - An Android emulator
    - Your physical device using the Expo Go app.

## 4. Key Features (Cycle 0)

- **Basic Project Structure:** Standard Expo project layout.
- **Tailwind CSS Integration:** `tailwind-react-native-classnames` is configured, and foundational design tokens (colors, basic typography) from Figma (01 Foundations) are stubbed in `tailwind.config.js`.
- **Core Navigation Structure:**
    - Bottom Tab Navigator: Home, Explore, Plan (stub), You (stub).
    - Stack Navigators for drill-downs as defined by the Figma prototype (e.g., Onboarding, Auth Stubs, Home -> Recipe Detail stub).
- **Placeholder Screen Components:** Basic screen components for all main navigation targets, populated with static mock data (JSON).
- **Static Mock Data:** UI elements are populated using static data. No API calls are made.
- **Basic UI Components:** Implementation of a few key Atoms/Molecules from the Figma library to verify Tailwind CSS setup and styling.

## 5. Folder Structure (Illustrative - within `mobile` directory)

```
/mobile
  ├── assets/         # Static assets (images, fonts)
  ├── components/     # Reusable UI components (Atoms, Molecules)
  │   ├── atoms/
  │   └── molecules/
  ├── navigation/     # Navigators and route configurations
  ├── screens/        # Screen components
  ├── services/       # (Stubbed for C0, for API interactions later)
  ├── store/          # (Stubbed for C0, for Zustand state management later)
  ├── styles/         # Global styles, theme, Tailwind config
  ├── utils/          # Utility functions
  ├── App.js          # Main application entry point
  ├── babel.config.js
  ├── package.json
  └── tailwind.config.js
```

## 6. Known Limitations / Out of Scope for Cycle 0

- No backend integration (Supabase, Fastify).
- No live data fetching or API calls.
- No user authentication logic (Login/Signup screens are visual stubs).
- No complex state management beyond basic navigation state.
- Full dark/light mode implementation (only tokens defined).
- No video/image handling beyond static display.
- No advanced animations.

## 7. Next Steps (Post-Cycle 0)

This shell application will be incrementally built upon in subsequent cycles, starting with Cycle 1 (Lean Content Pipeline), which will introduce backend connectivity, live data, and user authentication.

## 8. Reporting Issues

Please report any issues or suggestions via the project's designated issue tracker, referencing this document or specific Cycle 0 deliverables if applicable. 