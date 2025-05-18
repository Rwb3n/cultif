/* ANNOTATION_BLOCK_START
{
  "artifact_id": "pres_storyboard_g15",
  "version_tag": "0.1.0",
  "g_created": 16,
  "g_last_modified": 16,
  "description": "Comprehensive storyboard for the Vercel-hosted interactive animated presentation. Details screen sequences, animations, interactive elements, and content for each screen, derived from Figma inputs.",
  "artifact_type": "DOCUMENTATION",
  "status_in_lifecycle": "DESIGN",
  "purpose_statement": "To serve as the definitive blueprint for the development of the interactive animated presentation, ensuring shared understanding of visual flow, animations, and user interactions.",
  "key_logic_points": [
    "Defines visual narrative for the app showcase.",
    "Maps Figma screens to interactive sequences.",
    "Specifies animations and transitions for each visual element and screen flow."
  ],
  "interfaces_provided": [],
  "requisites": [
    { "description": "Provided Figma screen designs and user flow indications.", "type": "VISUAL_ASSET_COLLECTION" }
  ],
  "external_dependencies": [],
  "internal_dependencies": [],
  "dependents": ["animated_screens_src_g16"],
  "linked_issue_ids": [],
  "quality_notes": {
    "linting": "N/A",
    "unit_tests": "N/A",
    "manual_review_comment": "Initial AI-generated draft based on Figma overview (g:16). Requires detailed human review and elaboration for specific animation timings, easing, and intricate interaction details.",
    "last_security_review_g": null
  }
}
ANNOTATION_BLOCK_END */

# Interactive Presentation Storyboard (v0.1.0)

This document outlines the animated sequences and interactive elements for the Cultif application presentation, to be hosted on Vercel. It is based on the provided Figma screen designs.

## General Animation Principles:
*   **Transitions:** Smooth and quick (e.g., 200-300ms). Primarily use slide-ins, fade-ins/outs.
*   **Element Animations:** Subtle and engaging. Avoid overly complex or lengthy animations.
*   **Interactivity:** Clear visual feedback for interactive elements (e.g., button press state).

---

## 1. App Entry & Onboarding Sequence
(Based on images like `01_splash_onboarding_login_signup.png`)

### Screen 1.1: Splash Screen
*   **Referenced Figma Image:** `01_splash_onboarding_login_signup.png` (Leftmost "Cultif" splash screen).
*   **Elements Present:** Cultif Logo (animated gradient circle with "Cultif" text).
*   **Entry Animation:** Screen fades in (150ms). Logo elements animate in sequence: gradient circle scales up (200ms), "Cultif" text fades/slides in (200ms, delay 50ms).
*   **Internal Animations:** Logo's gradient circle has a subtle, slow rotational animation or a gentle pulse.
*   **Interactive Hotspots & Navigation:** None. Auto-transitions to Screen 1.2 (Onboarding 1) after 2-3 seconds.
*   **Exit Transition:** Fade out (200ms) or quick slide left as Screen 1.2 slides in.

### Screen 1.2: Onboarding - Step 1 ("Get dishes from around the world")
*   **Referenced Figma Image:** `01_splash_onboarding_login_signup.png` (Second screen, "Onboarding 1").
*   **Elements Present:** Background image montage, Title text, Descriptive text, "Next" button, Step indicators (if any).
*   **Entry Animation:** Slides in from the right (250ms). Title, description, and button fade/slide in from bottom, staggered (150ms each, 50ms delay between them).
*   **Internal Animations:** Background images might have a very slow parallax effect on screen appearance or a subtle Ken Burns effect.
*   **Interactive Hotspots & Navigation:**
    *   "Next" button: Glows slightly on hover. On click, transitions to Screen 1.3.
*   **Exit Transition:** Slides out to the left (250ms) as Screen 1.3 slides in.

### Screen 1.3: Onboarding - Step 2 ("Follow meal plans")
*   **Referenced Figma Image:** `01_splash_onboarding_login_signup.png` (Third screen, "Onboarding 2").
*   **Elements Present:** Similar to 1.2, with new title, description, and imagery.
*   **Entry Animation:** Slides in from the right. Text elements animate similarly.
*   **Internal Animations:** As above.
*   **Interactive Hotspots & Navigation:**
    *   "Next" button: Transitions to Screen 1.4.
*   **Exit Transition:** Slides out to the left.

### Screen 1.4: Onboarding - Step 3 ("Create rich and exciting meal plans")
*   **Referenced Figma Image:** `01_splash_onboarding_login_signup.png` (Fourth screen, "Onboarding 3").
*   **Elements Present:** Similar to 1.3, with new content. "Log in" and "Sign up" buttons appear.
*   **Entry Animation:** Slides in from the right. Text and buttons animate similarly.
*   **Internal Animations:** As above.
*   **Interactive Hotspots & Navigation:**
    *   "Log in" button: Transitions to Screen 2.1 (Login Screen).
    *   "Sign up" button: Transitions to Screen 2.2 (Sign Up Screen).
*   **Exit Transition:** Dependent on button clicked (e.g., fades out, or slides to reveal login/signup).

---

## 2. Login & Sign Up
(Based on images like `01_splash_onboarding_login_signup.png`)

### Screen 2.1: Login Screen
*   **Referenced Figma Image:** `01_splash_onboarding_login_signup.png` (Fifth screen, "Log in").
*   **Elements Present:** Title ("Welcome Back"), Email field, Password field, "Login" button, "Forgot password?", Social login options, "Don't have an account? Sign Up".
*   **Entry Animation:** Slides in from bottom or fades in. Form fields appear sequentially.
*   **Internal Animations:** Input fields highlight on focus. Button shows press state.
*   **Interactive Hotspots & Navigation:**
    *   Input fields: Allow dummy text input for presentation.
    *   "Login" button: Simulates login attempt (e.g., spinner for 1s) then transitions to Home Screen (Screen 3.1).
    *   "Sign Up" link: Transitions to Screen 2.2 (Sign Up Screen).
*   **Exit Transition:** Fades or slides out to reveal Home Screen.

### Screen 2.2: Sign Up Screen
*   **Referenced Figma Image:** `01_splash_onboarding_login_signup.png` (Sixth screen, "Sign up").
*   **Elements Present:** Title ("Sign up"), Full Name, Username, Email, Password fields, "Sign up" button, Social options, "Already have an account? Log In".
*   **Entry Animation:** Similar to Login screen.
*   **Internal Animations:** Similar to Login screen.
*   **Interactive Hotspots & Navigation:**
    *   Input fields: Allow dummy text input.
    *   "Sign up" button: Simulates sign-up (spinner) then transitions to Home Screen (Screen 3.1).
    *   "Log In" link: Transitions to Screen 2.1 (Login Screen).
*   **Exit Transition:** Fades or slides out.

---

## 3. Home & Main Navigation
(Covers the main tab bar: Home, Explore, Plan, You. Based on `02_home_favourites_plans_videos.png` and others)

### Screen 3.1: Home Screen (Chat/Feed Interface)
*   **Referenced Figma Image:** `02_home_favourites_plans_videos.png` (Leftmost "Home/favourites/...").
*   **Elements Present:** Top bar (Hamburger, Title, Search/Filter icon), Chat bubbles, Message input field, Bottom Tab Bar (Home, Explore, Plan, You).
*   **Entry Animation:** Main content area fades/slides in. Bottom Tab Bar is persistent or slides up once.
*   **Internal Animations:**
    *   New chat bubbles can animate in from bottom or side.
    *   Tapping message input field can expand it or show keyboard (simulated).
    *   Active tab on Bottom Tab Bar is highlighted.
*   **Interactive Hotspots & Navigation:**
    *   Chat bubbles: Not interactive for this presentation, purely visual.
    *   Bottom Tab Bar:
        *   "Explore" tab: Transitions to Explore Screen (Screen 6.1).
        *   "Plan" tab: Transitions to Plans Screen (Screen 5.1).
        *   "You" tab: Transitions to Profile Screen (Screen 7.1).
    *   Hamburger menu icon: (Define if it opens a side drawer, and what its animation would be - e.g., side drawer slides in from left).
    *   Search/Filter icon: (Define if it transitions to a search view or presents filter options).
*   **Exit Transition:** Content area fades/slides out when navigating via Tab Bar.

*(Storyboard would continue to detail animations for My Plans, My Videos/Custom Foods within this section or link to their respective main sections if they are more complex.)*

---

## 4. Create Flow (Content Upload)
(Based on `03_create_upload_ingredients_time_country_weight_dietary.png` and `00_upload_rules_tooltip.png`)

### Screen 4.1: Create Entry Point / Menu
*   **Referenced Figma Image:** `03_create_upload_ingredients_time_country_weight_dietary.png` (Leftmost dark blue "Create" menu).
*   **Elements Present:** Title ("Create"), Options like "Content Creator options", "Start creating", "Recipe type", etc.
*   **Entry Animation:** (If this screen is navigated to, e.g. from a '+' button on tab bar). Slides in, or modal appears.
*   **Internal Animations:** Menu items highlight on hover/simulated tap.
*   **Interactive Hotspots & Navigation:**
    *   "Start creating" (or equivalent): Transitions to Upload Rules (Screen 4.2).
*   **Exit Transition:** Slides out or modal dismisses.

### Screen 4.2: Upload Rules
*   **Referenced Figma Image:** `00_upload_rules_tooltip.png`.
*   **Elements Present:** Title ("Upload/Rules"), Rules text, Checkbox ("I have read and agree..."), "Upload" button (initially disabled).
*   **Entry Animation:** Slides in from right.
*   **Internal Animations:**
    *   Checkbox: Animates checkmark when tapped.
    *   "Upload" button: Becomes active (e.g., color change) once checkbox is checked.
*   **Interactive Hotspots & Navigation:**
    *   Checkbox: Toggles button state.
    *   "Upload" button (when active): Transitions to Screen 4.3 (Upload Main).
*   **Exit Transition:** Slides left.

### Screen 4.3: Upload Main Screen ("Make a video?" / Add Video)
*   **Referenced Figma Image:** `03_create_upload_ingredients_time_country_weight_dietary.png` (Second screen, "Upload video").
*   **Elements Present:** Back arrow, Title ("Upload video"), "Add a video" placeholder, fields for "Ingredients", "Country", "Weight goal", "Time to prepare", "Dietary", "Schedule send" button.
*   **Entry Animation:** Slides in from right.
*   **Internal Animations:**
    *   Tapping "Add a video": Simulates file picker (e.g., a brief visual change, no actual picking).
    *   Tapping field (e.g., "Ingredients"): Transitions to the specific input screen (e.g., Screen 4.4).
*   **Interactive Hotspots & Navigation:**
    *   "Ingredients" row: Transitions to Screen 4.4 (Upload Ingredients).
    *   "Country" row: Transitions to Screen 4.6 (Upload Country).
    *   ... (similar for other rows leading to specific screens in `03_...png`)
    *   "Schedule send" button: Transitions to Upload/Schedule screen (seen in `00_upload_schedule_tooltip.png` - will be Screen 4.X).
*   **Exit Transition:** Slides left when navigating to a sub-screen.

### Screen 4.4: Upload Ingredients
*   **Referenced Figma Image:** `03_create_upload_ingredients_time_country_weight_dietary.png` (Third and fourth screens).
*   **Elements Present:** Title, Ingredient input fields (Name, Custom value, Unit), Search, Add ingredient button, "View X more from Y", "Done Meal" button.
*   **Entry Animation:** Slides in. Input fields can stagger-appear.
*   **Internal Animations:** Adding an ingredient could show it appearing in a list. "Done Meal" button might become active after at least one ingredient is added.
*   **Interactive Hotspots & Navigation:**
    *   Input fields: Simulate typing.
    *   "Add ingredient": Adds a new (dummy) ingredient row.
    *   "Done Meal" button: Transitions back to Upload Main (Screen 4.3), possibly with an indicator that ingredients are added.
*   **Exit Transition:** Slides back to Screen 4.3.

*(This section would continue for Time to Prepare, Country, Weight, Dietary, and Schedule Send based on the Figma screens, detailing entry/exit animations, interactions, and transitions for each.)*

---

## 5. Plans Feature
(Based on `04_plans_createplan_explorefilter.png`, `05_plans_yourplans_createplan.png`)

### Screen 5.1: Plans Overview
*   **Referenced Figma Image:** `04_plans_createplan_explorefilter.png` (Second screen, "Plans" with date filter and meal cards).
*   **Elements Present:** Date selector, Meal cards (Breakfast, Lunch, Dinner, Snack) with images, titles, calorie info, "Explore plans" button, "Create new plan" button.
*   **Entry Animation:** Content fades/slides in. Cards can animate in a staggered list.
*   **Internal Animations:**
    *   Date selector: Clicking dates highlights them.
    *   Meal cards: Slight lift/shadow on hover (simulated).
*   **Interactive Hotspots & Navigation:**
    *   "Explore plans" button: Transitions to Explore Plans Screen (Screen 6.1 variant or specific plan explore).
    *   "Create new plan" button / '+' icon: Transitions to Plan Creation flow (Screen 5.2).
    *   Meal cards: Could transition to a detailed view of that meal within the plan (not explicitly shown in these Figma, define if needed).
*   **Exit Transition:** Screen slides/fades based on navigation.

### Screen 5.2: Create Plan - Step 1 ("Choose how to create your custom plan")
*   **Referenced Figma Image:** `04_plans_createplan_explorefilter.png` (Third screen) or `05_plans_yourplans_createplan.png` (similar screen).
*   **Elements Present:** Title, AI suggestion, "+" Create your plan button.
*   **Entry Animation:** Slides in.
*   **Internal Animations:** AI icon might have subtle animation. Button press state.
*   **Interactive Hotspots & Navigation:**
    *   "+" Create your plan: Transitions to Screen 5.3.
*   **Exit Transition:** Slides left.

### Screen 5.3: Create Plan - Step 2 ("What's your dietary goal?")
*   **Referenced Figma Image:** `04_plans_createplan_explorefilter.png` (Fourth screen).
*   **Elements Present:** Title, Goal options (Build muscle, Lose weight, etc.) with checkboxes/radio buttons, "Skip for now"/"Next" button.
*   **Entry Animation:** Slides in.
*   **Internal Animations:** Selecting an option highlights it.
*   **Interactive Hotspots & Navigation:**
    *   Goal options: Selectable.
    *   "Next" button: Transitions to Screen 5.4.
*   **Exit Transition:** Slides left.

*(Continue for "How many times do you eat a day?", "Get started" (Choose breakfast, lunch, dinner, snack), and "Your Plan" summary screens from `04_...png` and `05_...png`.)*

---

## 6. Explore Feature
(Based on `08_exploreplans_filter_yourplan.png`, `09_explore_overlay.png`)

### Screen 6.1: Explore Main Screen
*   **Referenced Figma Image:** `08_exploreplans_filter_yourplan.png` (Second screen, "Explore plans" with search and categories like "Bulking island diet").
*   **Elements Present:** Search bar, Filter icons (e.g., Diet, Plans), Category carousels or lists of plans/dishes with images and titles.
*   **Entry Animation:** Content fades/slides in. Image cards can animate in.
*   **Internal Animations:** Search bar expands on tap. Filters might animate when selected.
*   **Interactive Hotspots & Navigation:**
    *   Search bar: Simulates typing, might show dummy results animating in below.
    *   Filter icons/buttons: Transitions to Filter Screen (Screen 6.2).
    *   Plan/Dish cards: Transition to a Detail Screen (e.g., Screen 6.3 or a specific dish detail like Screen 8.1).
*   **Exit Transition:** Slides/fades based on navigation.

### Screen 6.2: Explore Filters
*   **Referenced Figma Image:** `08_exploreplans_filter_yourplan.png` (Third screen, "Explore plans/filter").
*   **Elements Present:** Title ("Select nutritional filters"), Filter categories (By time of day, By weight goal, By Country), "Search X filters" button.
*   **Entry Animation:** Slides in as an overlay or new screen.
*   **Internal Animations:** Selecting filters highlights them. Count on "Search X filters" button updates.
*   **Interactive Hotspots & Navigation:**
    *   Filter options: Toggle selection.
    *   "Search X filters" button: Transitions back to Screen 6.1, applying (simulated) filters, causing content to refresh with animation.
*   **Exit Transition:** Slides out.

### Screen 6.3: Explored Item Detail (e.g., Proteus Pancakes)
*   **Referenced Figma Image:** `09_explore_overlay.png` (Rightmost screens showing "Proteus pancakes" and overlay).
*   **Elements Present:** Large image, Title, Creator info, Stats (Protein, Fat, etc.), Description, Action buttons (e.g. Add to favourites, Add to meal plan).
*   **Entry Animation:** Could be a shared element transition from the card on Screen 6.1, or slides in.
*   **Internal Animations:** Image might zoom slightly. "Add" overlay animates in from bottom.
*   **Interactive Hotspots & Navigation:**
    *   "Add to favourites" / "Add to meal plan" in overlay: Shows confirmation (e.g., checkmark animation, overlay changes to "Added to Favourites"). No actual data change.
    *   Back navigation.
*   **Exit Transition:** Slides out or reverse shared element transition.

---

## 7. Profile & Settings (You Tab)
(Based on `06_profile_you_savedcountry_homefav_messages_myvideos.png`, `10_profile_yourchanges_wallet_premium_privacy_settings_help.png`)

### Screen 7.1: Profile Main View
*   **Referenced Figma Image:** `06_profile_you_savedcountry_homefav_messages_myvideos.png` (Second screen, "You" with profile pic and tabs like Posts, Saved, Media).
*   **Elements Present:** Profile picture, Username, Follower/Following counts, Edit Profile button, Tab navigation (Posts, Saved, Media), Content grid for selected tab.
*   **Entry Animation:** Content fades/slides in.
*   **Internal Animations:** Switching tabs animates content change in the grid below (e.g., crossfade or slide).
*   **Interactive Hotspots & Navigation:**
    *   "Edit Profile" button: Transitions to Screen 7.2 (Edit Profile).
    *   Tabs: Switch content view.
    *   Items in grid: (If interactive) transition to their detail view.
*   **Exit Transition:** Based on navigation.

### Screen 7.2: Edit Profile / Your Changes
*   **Referenced Figma Image:** `10_profile_yourchanges_wallet_premium_privacy_settings_help.png` (First screen, "Your chan...").
*   **Elements Present:** Profile picture, Description field, Your preferences, Your channel preferences, Username, etc.
*   **Entry Animation:** Slides in.
*   **Internal Animations:** Fields highlight on focus.
*   **Interactive Hotspots & Navigation:**
    *   Input fields: Simulate typing.
    *   Save button (if any, not clearly visible): Simulates save, transitions back to Screen 7.1.
*   **Exit Transition:** Slides back.

*(Continue for Wallet, Premium Subscription, Privacy Policy, Settings, Help & Feedback screens from `10_...png`, detailing their specific animations and interactions.)*

---

## 8. Dish / Recipe / Nutrition Details
(Based on `07_dishnutrition_ingredients_homefilter_chefpage.png`, `11_uploadingredients_dish_home_chefpage_dishplay_complete.png`)

### Screen 8.1: Dish Details (e.g., Jollof Rice)
*   **Referenced Figma Image:** `07_dishnutrition_ingredients_homefilter_chefpage.png` (First screen, "Jollof Rice" with nutrition rings).
*   **Elements Present:** Dish image, Title, Chef name, Nutrition rings (Protein, Fat, Carbs), Detailed nutrition values (Sodium, Sugar etc.).
*   **Entry Animation:** Slides in. Nutrition rings can animate drawing in.
*   **Internal Animations:** Values might count up quickly. Rings can pulse slightly.
*   **Interactive Hotspots & Navigation:**
    *   Chef name: Could link to Chef Page (Screen 8.2).
*   **Exit Transition:** Slides out.

### Screen 8.2: Chef Page
*   **Referenced Figma Image:** `07_dishnutrition_ingredients_homefilter_chefpage.png` (Fifth screen, "ChefSankay").
*   **Elements Present:** Chef banner, Profile pic, Name, Subscribe button, Follower count, Bio, Tabs/Grid of chef's dishes.
*   **Entry Animation:** Slides in.
*   **Internal Animations:** Subscribe button shows active state. Dish grid animates in.
*   **Interactive Hotspots & Navigation:**
    *   "Subscribe" button: Simulates subscription.
    *   Dish cards: Link to their respective Dish Detail Screen (Screen 8.1 variant).
*   **Exit Transition:** Slides out.

### Screen 8.3: Dish Play / Cooking Steps (e.g., Fries)
*   **Referenced Figma Image:** `11_uploadingredients_dish_home_chefpage_dishplay_complete.png` (Series of screens showing steps for cooking fries).
*   **Elements Present:** Step image/video placeholder, Step number/title, Step description, Progress bar, Next/Prev step buttons.
*   **Entry Animation:** Initial step slides in.
*   **Internal Animations:** Progress bar animates as steps are navigated.
*   **Interactive Hotspots & Navigation:**
    *   "Next step": Current step slides out left, next step slides in from right.
    *   "Previous step": Current step slides out right, previous step slides in from left.
    *   On last step, "Next" might become "Finish".
*   **Exit Transition:** When finished, transitions to Dish Complete screen (Screen 8.4).

### Screen 8.4: Dish Complete / Congratulations
*   **Referenced Figma Image:** `11_uploadingredients_dish_home_chefpage_dishplay_complete.png` (Rightmost screen, "Congratulations on finishing the dish!").
*   **Elements Present:** Congratulatory message, Dish image placeholder, Share/Rate options.
*   **Entry Animation:** Fades/zooms in with celebratory animation (e.g., confetti particles).
*   **Internal Animations:** Buttons might pulse.
*   **Interactive Hotspots & Navigation:**
    *   Share/Rate buttons: Simulate action (e.g., show a temporary confirmation message).
    *   Done/Back to Home button: Transitions to Home Screen (Screen 3.1).
*   **Exit Transition:** Fades out.

---

## 9. Tooltips & Overlays
(Based on `00_upload_rules_tooltip.png`, `09_explore_overlay.png`)

### Tooltip Example (e.g., on Upload Rules - "Please be kind to other users")
*   **Referenced Context:** Seen on `00_upload_rules_tooltip.png` (left image, dark tooltip).
*   **Trigger:** Simulated hover or tap on an info icon next to a rule.
*   **Animation:** Tooltip fades/scales in next to the trigger element. Arrow points to trigger.
*   **Content:** Text as shown in Figma.
*   **Dismissal:** Fades/scales out on tap outside or after a short delay.

### Overlay Example (e.g., Add to Favourites/Meal Plan)
*   **Referenced Context:** `09_explore_overlay.png` (bottom pop-up).
*   **Trigger:** Tapping an "Add" button on a dish detail screen.
*   **Animation:** Overlay slides up from the bottom of the screen (200ms).
*   **Content:** Options like "Add to favourites", "Add to meal plan", "Add" button.
*   **Interaction:**
    *   Tapping an option (e.g. "Add to favourites"): Option highlights, overlay might show a quick success message (e.g., "Added to Favourites" with a checkmark) and then auto-dismiss by sliding down after 1-1.5s.
*   **Dismissal:** Slides down (200ms) on selecting an action or tapping outside (if applicable).

---

This storyboard provides a foundational outline. Each screen and interaction will require further refinement regarding precise animation timings, easing functions, and asset preparations during the development phase (Task: `plan_interactive_pres_g14_task_002`). 