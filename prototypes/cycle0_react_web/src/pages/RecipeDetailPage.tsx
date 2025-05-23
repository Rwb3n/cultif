/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_recipedetail_g112",
  "version_tag": "0.3.0-app-nav-g173",
  "g_created": 121,
  "g_last_modified": 173,
  "description": "REFACTORED (TSX) for App Navigation Alignment: Recipe Detail page now uses TopLogoBar and BottomStickyNav for consistency with HomePage. Main content area adjusted for these nav bars.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a detailed view of a specific recipe, styled with Tailwind CSS and shadcn/ui components, presented within the application\'s app-like navigation structure (TopLogoBar, BottomStickyNav). References Figma Catalogue ID: T-09.",
  "key_logic_points": [
    "Integrates TopLogoBar and BottomStickyNav.",
    "Main layout uses flex-col and min-h-screen for app-like structure.",
    "Content area is scrollable between top/bottom navs with appropriate padding.",
    "Fetches (mocked) recipe data based on ID from route parameter.",
    "Displays recipe image, title, description, ingredients, instructions, and tags.",
    "Info bar displays Prep/Cook/Servings in one row, and Calories/Carbs/Fat/Protein in a second row (4 items).",
    "Uses Tailwind CSS for all styling and shadcn/ui components."
  ],
  "interfaces_provided": [
    { "name": "RecipeDetailPage", "interface_type": "REACT_COMPONENT", "details": "Component for displaying a single recipe\'s details.", "notes": "" }
  ],
  "requisites": [
    { "description": "TopLogoBar, BottomStickyNav components must be available.", "type": "INTERNAL_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For navigation (Link) and route parameter (useParams)." },
    { "name": "lucide-react", "version": "latest", "reason": "For icons."}
  ],
  "internal_dependencies": [
    "cycle0_comp_toplogobar_g163",
    "cycle0_comp_bottomstickynav_g163",
    "cycle1_primitive_link_g132",
    "shadcn_ui_button_g160",
    "shadcn_ui_card_g160",
    "shadcn_ui_badge_g160"
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g173 to use app-like navigation (TopLogoBar, BottomStickyNav). Previous g172: Macros row with Calories, removed Nutrition section & back link. Original v0.1.0 g121."
  }
}
ANNOTATION_BLOCK_END */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PrimitiveLink from '../components/primitives/Link';
import TopLogoBar from '../components/layout/TopLogoBar';
import BottomStickyNav from '../components/layout/BottomStickyNav';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, PlusCircle, Clock, Users, Soup, Zap, Droplets, Shell, Flame } from 'lucide-react';

// Mock data for a single recipe (replace with actual fetch logic)
const mockRecipes: Record<string, any> = {
  r1: {
    id: 'r1',
    name: 'Spicy Chicken Pasta',
    creatorName: 'Chef John',
    creatorId: 'c1',
    imageUrl: 'https://via.placeholder.com/800x400?text=Spicy+Pasta', // Placeholder - ensure asset exists or use a valid URL
    description: 'A delicious and fiery pasta dish that is quick to make and full of flavor. Perfect for a weeknight dinner.',
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4,
    ingredients: [
      { name: 'Chicken Breast', quantity: '2', unit: 'pieces' },
      { name: 'Penne Pasta', quantity: '300', unit: 'g' },
      { name: 'Spicy Arrabiata Sauce', quantity: '1', unit: 'jar' },
      { name: 'Red Pepper Flakes', quantity: '1', unit: 'tsp' },
      { name: 'Parmesan Cheese', quantity: '50', unit: 'g' },
      { name: 'Olive Oil', quantity: '2', unit: 'tbsp' },
    ],
    instructions: [
      'Cook pasta according to package directions.',
      'While pasta cooks, dice chicken and cook in olive oil until browned.',
      'Add arrabiata sauce and red pepper flakes to the chicken. Simmer for 5 minutes.',
      'Drain pasta and add to the sauce. Mix well.',
      'Serve immediately, topped with grated Parmesan cheese.'
    ],
    nutrition: {
      calories: '550 kcal',
      protein: '45g',
      carbs: '60g',
      fat: '15g'
    },
    tags: ['pasta', 'spicy', 'chicken', 'quick']
  },
  r2: { id: 'r2', name: 'Vegan Buddha Bowl', creatorName: 'Green Goddess', creatorId: 'c2', imageUrl: 'https://via.placeholder.com/800x400?text=Buddha+Bowl', description: 'A healthy and colorful bowl full of plant-based goodness.', prepTime: '20 mins', cookTime: '15 mins', servings: 2, ingredients:[], instructions:[], nutrition:{calories:'400kcal', protein: '20g', carbs: '50g', fat: '15g'}, tags:['vegan', 'healthy']},
  r3: { id: 'r3', name: 'Berry Smoothie', creatorName: 'FitFoodie', creatorId: 'c3', imageUrl: 'https://via.placeholder.com/800x400?text=Smoothie', description: 'A refreshing and nutritious smoothie.', prepTime: '5 mins', cookTime: '0 mins', servings: 1, ingredients:[], instructions:[], nutrition:{calories:'250kcal', protein: '5g', carbs: '40g', fat: '8g'}, tags:['smoothie', 'quick']},
};

const RecipeDetailPage: React.FC = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    const fetchedRecipe = recipeId ? mockRecipes[recipeId] : null;
    if (fetchedRecipe) {
      setRecipe(fetchedRecipe);
    } else {
      console.error(`Recipe with ID ${recipeId} not found.`);
    }
  }, [recipeId]);

  if (!recipe) {
    return (
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
        <TopLogoBar />
        <main className="flex-grow flex items-center justify-center p-4">
          Loading recipe details or recipe not found... (T-09)
        </main>
        <BottomStickyNav />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <TopLogoBar />
      <main className="flex-grow overflow-y-auto pt-4 pb-24 px-4 md:px-6 lg:px-8 max-w-3xl mx-auto w-full">
        {/* <PrimitiveLink to="/home" className="text-sm text-blue-600 hover:underline dark:text-blue-400 mb-6 block">
         &larr; Back to Home
        </PrimitiveLink> */}
        
        <img 
          src={recipe.imageUrl || 'https://via.placeholder.com/800x400?text=Recipe+Image'} 
          alt={recipe.name} 
          className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-lg shadow-lg mb-6"
        />
        
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{recipe.name}</h1>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
          By: <PrimitiveLink to={`/creator/${recipe.creatorId || recipe.creatorName.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-600 hover:underline dark:text-blue-400 font-medium">{recipe.creatorName}</PrimitiveLink>
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <Button variant="outline" size="sm" onClick={() => alert('Mock: Favorited!')}>
            <Heart className="mr-2 h-4 w-4" /> Favorite
          </Button>
          <Button variant="outline" size="sm" onClick={() => alert('Mock: Added to Meal Plan!')}>
            <PlusCircle className="mr-2 h-4 w-4" /> Add to Meal Plan
          </Button>
        </div>

        {/* Row 1: Time and Servings */}
        <Card className="mb-2 bg-white dark:bg-slate-800 shadow-sm">
          <CardContent className="p-3 sm:p-4 grid grid-cols-3 gap-2 text-center">
            <div className="flex flex-col items-center">
              <Clock className="h-5 w-5 mb-1 text-slate-600 dark:text-slate-400" />
              <span className="text-xs text-slate-500 dark:text-slate-400">Prep Time</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{recipe.prepTime}</span>
            </div>
            <div className="flex flex-col items-center">
              <Soup className="h-5 w-5 mb-1 text-slate-600 dark:text-slate-400" /> 
              <span className="text-xs text-slate-500 dark:text-slate-400">Cook Time</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{recipe.cookTime}</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-5 w-5 mb-1 text-slate-600 dark:text-slate-400" />
              <span className="text-xs text-slate-500 dark:text-slate-400">Servings</span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{recipe.servings}</span>
            </div>
          </CardContent>
        </Card>

        {/* Row 2: Macros including Calories */}
        {recipe.nutrition && (recipe.nutrition.calories || recipe.nutrition.carbs || recipe.nutrition.fat || recipe.nutrition.protein) && (
          <Card className="mb-6 bg-white dark:bg-slate-800 shadow-sm">
            <CardContent className="p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="flex flex-col items-center">
                <Flame className="h-5 w-5 mb-1 text-slate-600 dark:text-slate-400" /> {/* Icon for Calories */}
                <span className="text-xs text-slate-500 dark:text-slate-400">Calories</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{recipe.nutrition.calories || 'N/A'}</span>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="h-5 w-5 mb-1 text-slate-600 dark:text-slate-400" /> {/* Icon for Carbs */}
                <span className="text-xs text-slate-500 dark:text-slate-400">Carbs</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{recipe.nutrition.carbs || 'N/A'}</span>
              </div>
              <div className="flex flex-col items-center">
                <Droplets className="h-5 w-5 mb-1 text-slate-600 dark:text-slate-400" /> {/* Icon for Fat */}
                <span className="text-xs text-slate-500 dark:text-slate-400">Fat</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{recipe.nutrition.fat || 'N/A'}</span>
              </div>
              <div className="flex flex-col items-center">
                <Shell className="h-5 w-5 mb-1 text-slate-600 dark:text-slate-400" /> {/* Icon for Protein */}
                <span className="text-xs text-slate-500 dark:text-slate-400">Protein</span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{recipe.nutrition.protein || 'N/A'}</span>
              </div>
            </CardContent>
          </Card>
        )}

        <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed prose prose-sm dark:prose-invert max-w-none">{recipe.description}</p>

        <div className="space-y-6">
          <Card className="dark:bg-slate-800 shadow-sm">
            <CardHeader className="pb-3 pt-4 px-4 sm:px-6">
              <CardTitle className="text-lg sm:text-xl text-slate-800 dark:text-slate-100">Ingredients</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4">
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                {recipe.ingredients && recipe.ingredients.map((ing: any, index: number) => (
                  <li key={index}>{ing.quantity} {ing.unit} {ing.name}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="dark:bg-slate-800 shadow-sm">
            <CardHeader className="pb-3 pt-4 px-4 sm:px-6">
              <CardTitle className="text-lg sm:text-xl text-slate-800 dark:text-slate-100">Instructions</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-4">
              <ol className="list-decimal pl-5 space-y-3 text-sm text-slate-700 dark:text-slate-300 prose prose-sm dark:prose-invert max-w-none">
                {recipe.instructions && recipe.instructions.map((step: string, index: number) => (
                  <li key={index} className="leading-relaxed">{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
          
          {recipe.tags && recipe.tags.length > 0 && (
            <Card className="dark:bg-slate-800 shadow-sm">
              <CardHeader className="pb-3 pt-4 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl text-slate-800 dark:text-slate-100">Tags</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 flex flex-wrap gap-2">
                {recipe.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <p className="mt-10 text-xs text-center text-slate-400 dark:text-slate-500">Figma Ref: T-09</p>
      </main>
      <BottomStickyNav />
    </div>
  );
};

export default RecipeDetailPage; 