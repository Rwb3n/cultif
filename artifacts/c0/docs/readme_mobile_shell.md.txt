/* ANNOTATION_BLOCK_START
{
  "artifact_id": "c0_mobile_readme",
  "version_tag": "0.1.1-c0",
  "g_created": 4,
  "g_last_modified": 10,
  "description": "README file for the Cycle 0 React Native (Expo) shell application for the WorldChef/Cultif project. This document outlines the setup, structure, and basic operational guidance for the initial mobile prototype created during Cycle 0, now using React Native Paper (Material Design 3).",
  "artifact_type": "DOCUMENTATION",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide developers and stakeholders with essential information about the Cycle 0 mobile shell application, including how to run it and understand its basic architecture using React Native Paper, as a foundation for subsequent development cycles.",
  "key_logic_points": [
    "Outlines project setup for the React Native (Expo) shell with React Native Paper.",
    "Describes basic navigation structure implemented in Cycle 0.",
    "Details how static mock data is used for UI population.",
    "Confirms React Native Paper integration and foundational Material Design 3 theming."
  ],
  "interfaces_provided": [],
  "requisites": [
    { "description": "Completion of Cycle 0 objectives related to the mobile shell app using React Native Paper.", "type": "FUNCTIONAL" }
  ],
  "external_dependencies": [
    { "name": "React Native (Expo)", "version": "SDK 51 (as per TRD)", "reason": "Core framework for mobile application development." },
    { "name": "React Native Paper", "version": "^5.x (or as per project setup)", "reason": "Material Design 3 component library for React Native." }
  ],
  "internal_dependencies": [],
  "dependents": ["c1_rn_app_src"],
  "linked_issue_ids": ["issue_g5_visual_tech_strategy_update"],
  "quality_notes": {
    "linting": "N/A",
    "unit_tests": "N/A",
    "manual_review_comment": "Updated to reflect use of React Native Paper (Material Design 3) at g=10.",
    "last_security_review_g": null
  }
}
ANNOTATION_BLOCK_END */

# WorldChef/Cultif - Cycle 0 Mobile Shell Application README

Version: 0.1.1-c0
Last Updated (g): 10

## 1. Overview

This document provides information about the React Native (Expo) shell application created as part of Cycle 0: Proto Frame for the WorldChef/Cultif project. The primary goal of this shell application is to establish a basic, navigable mobile application structure with **React Native Paper (Material Design 3)** integration, serving as a foundation for subsequent development cycles.

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
2.  **Install dependencies (including React Native Paper):**
    ```bash
    npm install
    # or
    yarn install
    # Ensure React Native Paper and its dependencies (like react-native-vector-icons) are installed.
    # npm install react-native-paper react-native-vector-icons
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
- **React Native Paper Integration:** `react-native-paper` is configured, and foundational Material Design 3 theming (colors, basic typography from Figma, adapted to Material Design principles) is stubbed in the theme configuration.
- **Core Navigation Structure:**
    - Bottom Tab Navigator: Home, Explore, Plan (stub), You (stub) using React Navigation, styled with Material Design principles.
    - Stack Navigators for drill-downs as defined by the Figma prototype.
- **Placeholder Screen Components:** Basic screen components for all main navigation targets, populated with static mock data (JSON), using React Native Paper components.
- **Static Mock Data:** UI elements are populated using static data. No API calls are made.
- **Basic UI Components:** Implementation of a few key Material Design components from React Native Paper (e.g., Button, Card) to verify setup and styling.

## 5. Folder Structure (Illustrative - within `mobile` directory)

```
/mobile
  ├── assets/         # Static assets (images, fonts)
  ├── components/     # Reusable UI components (Material Design components)
  │   ├── atoms/
  │   └── molecules/
  ├── navigation/     # Navigators and route configurations
  ├── screens/        # Screen components
  ├── services/       # (Stubbed for C0, for API interactions later)
  ├── store/          # (Stubbed for C0, for Zustand state management later)
  ├── styles/         # Global styles, theme (React Native Paper Theme config)
  ├── utils/          # Utility functions
  ├── App.js          # Main application entry point
  ├── babel.config.js
  └── package.json
  # tailwind.config.js would be removed or replaced by theme configuration for React Native Paper
```

## 6. Known Limitations / Out of Scope for Cycle 0

- No backend integration (Supabase, Fastify).
- No live data fetching or API calls.
- No user authentication logic (Login/Signup screens are visual stubs).
- No complex state management beyond basic navigation state.
- Full dark/light mode implementation (only tokens defined and basic theme structure).
- No video/image handling beyond static display.
- No advanced animations.

## 7. Next Steps (Post-Cycle 0)

This shell application will be incrementally built upon in subsequent cycles, starting with Cycle 1 (Lean Content Pipeline), which will introduce backend connectivity, live data, and user authentication.

## 8. Reporting Issues

Please report any issues or suggestions via the project's designated issue tracker (see issue `issue_g5_visual_tech_strategy_update` for tracking the UI framework change), referencing this document or specific Cycle 0 deliverables if applicable. 