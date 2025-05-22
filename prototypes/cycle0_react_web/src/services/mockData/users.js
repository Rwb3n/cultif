/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_mock_data_users_g112",
  "version_tag": "0.1.0",
  "g_created": 125,
  "g_last_modified": 125,
  "description": "Provides mock data for user profiles to be used in the web prototype. Essential for simulating user-specific views and interactions.",
  "artifact_type": "JSON_DATA_FILE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To supply a standardized set of user data for populating components like user profiles, headers, and other user-aware elements in the prototype.",
  "key_logic_points": [
    "Contains an array or object map of user profiles.",
    "Each user object includes fields like id, name, email, avatarUrl, bio, preferences, created recipes, saved recipes, meal plans, etc.",
    "Includes data for both general users and creators to test different profile views."
  ],
  "interfaces_provided": [
    { "name": "mockUsers", "interface_type": "JAVASCRIPT_ARRAY", "details": "An array of JavaScript objects, where each object represents a user.", "notes": "Exported as a const." },
    { "name": "mockCreators", "interface_type": "JAVASCRIPT_ARRAY", "details": "An array of JavaScript objects, where each object represents a content creator (a type of user).", "notes": "Exported as a const." }
  ],
  "requisites": [],
  "external_dependencies": [],
  "internal_dependencies": [],
  "dependents": [
    "cycle0_prototype_app_entry_g112", // For mockUser in Header
    "cycle0_page_userprofile_g112",
    "cycle0_page_creatorprofile_g112",
    "cycle0_comp_header_g112",
    "cycle0_mock_services_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g125. Contains sample user and creator data. Profiles can be expanded with more fields."
  }
}
ANNOTATION_BLOCK_END */

export const mockUsers = [
  {
    id: 'u1',
    name: 'Alice Wonderland',
    email: 'alice@example.com',
    avatarUrl: 'https://via.placeholder.com/150/AACCFF/000000?Text=Alice',
    bio: 'Food enthusiast exploring new recipes every day. Loves baking and trying out spicy dishes.',
    joinedDate: '2023-05-10',
    preferences: {
      dietary: ['vegetarian', 'gluten-free'],
      allergies: ['peanuts'],
      favoriteCuisines: ['Italian', 'Mexican', 'Thai']
    },
    createdRecipeIds: [],
    savedRecipeIds: ['r1', 'r3'],
    followedCreatorIds: ['c1', 'c2'],
    mealPlanIds: ['mp1']
  },
  {
    id: 'u2',
    name: 'Bob The Builder',
    email: 'bob@example.com',
    avatarUrl: 'https://via.placeholder.com/150/FFAA00/FFFFFF?Text=Bob',
    bio: 'Loves simple, hearty meals. Always looking for quick and easy recipes for busy weekdays.',
    joinedDate: '2023-08-22',
    preferences: {
      dietary: [],
      allergies: [],
      favoriteCuisines: ['American', 'BBQ']
    },
    createdRecipeIds: [],
    savedRecipeIds: ['r2'],
    followedCreatorIds: ['c1'],
    mealPlanIds: []
  }
];

export const mockCreators = [
  {
    id: 'c1',
    name: 'Chef Gourmet Master',
    email: 'gourmet.master@example.com',
    avatarUrl: 'https://via.placeholder.com/150/00AA77/FFFFFF?Text=ChefGM',
    bio: 'Professional chef with 15 years of experience in fine dining. Specializing in fusion cuisine and innovative cooking techniques. Sharing my passion for food with the world.',
    joinedDate: '2023-01-15',
    website: 'www.gourmetmaster.com',
    socialMedia: {
      instagram: '@gourmetmaster',
      youtube: 'ChefGourmetMasterChannel'
    },
    specialties: ['Fusion Cuisine', 'Pastry', 'Molecular Gastronomy'],
    createdRecipeIds: ['r1'],
    followerCount: 12500,
    rating: 4.9,
    isVerified: true,
    earnings: {
      total: 15000,
      lastMonth: 1200
    }
  },
  {
    id: 'c2',
    name: 'Healthy Bites Ella',
    email: 'ella.healthy@example.com',
    avatarUrl: 'https://via.placeholder.com/150/FF69B4/FFFFFF?Text=EllaH',
    bio: 'Nutritionist and food blogger focused on wholesome, delicious, and easy-to-make healthy meals. Let me help you on your journey to a healthier lifestyle!',
    joinedDate: '2023-03-01',
    website: 'www.healthybitesella.com',
    socialMedia: {
      instagram: '@healthybitesella',
      pinterest: 'HealthyEllaFinds'
    },
    specialties: ['Vegan', 'Gluten-Free Baking', 'Meal Prep'],
    createdRecipeIds: ['r2', 'r3'],
    followerCount: 7800,
    rating: 4.7,
    isVerified: true,
    earnings: {
      total: 8500,
      lastMonth: 750
    }
  }
];

// Example of a current user that might be used by the app, could be one from mockUsers or mockCreators
export const mockCurrentUser = mockUsers[0]; // Alice Wonderland
// export const mockCurrentUser = mockCreators[0]; // Chef Gourmet Master (if testing creator view)
// export const mockCurrentUser = null; // To simulate logged out state 