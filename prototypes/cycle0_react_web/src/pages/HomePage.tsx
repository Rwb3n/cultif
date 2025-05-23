/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_home_g112",
  "version_tag": "0.3.0-ux-realignment-g167",
  "g_created": 120,
  "g_last_modified": 167,
  "description": "REFACTORED (TSX) for UX Realignment: Home page rebuilt with new app-like navigation (TopLogoBar, TopMealCategoryNav, BottomStickyNav). Category display changed from chips to scrollable square items with placeholder images. Search bar remains. Old footer removed.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To serve as the main discovery hub, incorporating new navigation paradigms and category display as per stakeholder feedback g162, providing an app-like experience.",
  "key_logic_points": [
    "Integrates TopLogoBar, TopMealCategoryNav, and BottomStickyNav components.",
    "Removes previous inline footer; old Header/Footer components were not in use.",
    "Category display changed from `Button` (chips) to a new `CategoryCardComponent` (scrollable square items with placeholder images).",
    "The main content area is designed to scroll vertically between the top navigation elements and the bottom sticky navigation.",
    "Retains search bar, featured recipes, and popular creators sections with existing shadcn/ui Card components.",
    "Uses mock data for all dynamic content."
  ],
  "interfaces_provided": [
    { "name": "HomePage", "interface_type": "REACT_COMPONENT", "details": "The main component for the home/discovery screen.", "notes": "" }
  ],
  "requisites": [
    { "description": "TopLogoBar, TopMealCategoryNav, BottomStickyNav components must be available.", "type": "INTERNAL_DEPENDENCY" },
    { "description": "lucide-react for icons.", "type": "LIBRARY_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions." },
    { "name": "lucide-react", "version": "^0.417.0", "reason": "For icons (Search, Heart, placeholder category images)." }
  ],
  "internal_dependencies": [
    "cycle1_primitive_link_g132",
    "shadcn_ui_card_g160",
    "shadcn_ui_button_g160",
    "shadcn_ui_input_g160",
    "cycle0_comp_toplogobar_g163",
    "cycle0_comp_topmealcategorynav_g163",
    "cycle0_comp_bottomstickynav_g163"
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": ["issue_placeholder_img_g145"],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g=167 to integrate new navigation components and category display as per plan pc0uxr_task_004. Previous version 0.2.0-tailwind-refactor-tsx g_last_modified=160."
  }
}
ANNOTATION_BLOCK_END */

import React, { useEffect, useState } from 'react';
import PrimitiveLink from '../components/primitives/Link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Search, Image as ImageIcon } from 'lucide-react'; // Added ImageIcon for category placeholders

import TopLogoBar from '../components/layout/TopLogoBar';
import TopMealCategoryNav from '../components/layout/TopMealCategoryNav';
import BottomStickyNav from '../components/layout/BottomStickyNav';

interface Recipe {
  id: string;
  name: string;
  creatorName: string;
  prepTime: string;
  calories: number;
  imageUrl?: string;
}

interface Creator {
  id: string;
  name: string;
  profilePic?: string;
}

interface CategoryUIData {
  id: string;
  name: string;
  imageUrl?: string; // For square image items
}

const HomePage: React.FC = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState<Recipe[]>([]);
  const [popularCreators, setPopularCreators] = useState<Creator[]>([]);
  const [categoriesUIData, setCategoriesUIData] = useState<CategoryUIData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFeaturedRecipes([
      { id: 'r1', name: 'Spicy Chicken Pasta', creatorName: 'Chef John', prepTime: '30 min', calories: 500, imageUrl: '/assets/placeholders/300x180.png' },
      { id: 'r2', name: 'Vegan Buddha Bowl', creatorName: 'Green Goddess', prepTime: '20 min', calories: 400, imageUrl: '/assets/placeholders/300x180.png' },
      { id: 'r3', name: 'Berry Smoothie', creatorName: 'FitFoodie', prepTime: '5 min', calories: 250, imageUrl: '/assets/placeholders/300x180.png' },
      { id: 'r4', name: 'Avocado Toast Deluxe', creatorName: 'Morning Glory', prepTime: '10 min', calories: 320, imageUrl: '/assets/placeholders/300x180.png' },
    ]);
    setPopularCreators([
      { id: 'c1', name: 'Chef John', profilePic: '/assets/placeholders/100x100.png' },
      { id: 'c2', name: 'Green Goddess', profilePic: '/assets/placeholders/100x100.png' },
      { id: 'c3', name: 'FitFoodie', profilePic: '/assets/placeholders/100x100.png' },
    ]);
    setCategoriesUIData([
      { id: 'cat1', name: 'Italian', imageUrl: '/assets/placeholders/150x150_italian.png' }, 
      { id: 'cat2', name: 'Vegan', imageUrl: '/assets/placeholders/150x150_vegan.png' }, 
      { id: 'cat3', name: 'Quick & Easy', imageUrl: '/assets/placeholders/150x150_quick.png' }, 
      { id: 'cat4', name: 'Desserts', imageUrl: '/assets/placeholders/150x150_desserts.png' }, 
      { id: 'cat5', name: 'Breakfast', imageUrl: '/assets/placeholders/150x150_breakfast.png' }, 
      { id: 'cat6', name: 'Healthy', imageUrl: '/assets/placeholders/150x150_healthy.png' }
    ]);
  }, []);

  const SearchBar = () => (
    <div className="relative w-full mb-6 md:mb-8">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input 
        type="search" 
        placeholder="Search recipes, ingredients, creators... (T-02_search)" 
        className="pl-10 w-full py-3 text-base"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
  
  const RecipeCardComponent: React.FC<{ recipe: Recipe }> = ({ recipe }) => (
    <Card className="w-full sm:w-[280px] md:w-[300px] flex-shrink-0">
      <CardHeader className="p-0">
        <img 
          src={recipe.imageUrl || '/assets/placeholders/300x180.png'} 
          alt={recipe.name} 
          className="w-full h-[150px] sm:h-[180px] object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold mb-1 leading-tight truncate">{recipe.name}</CardTitle>
        <CardDescription className="text-xs text-muted-foreground mb-2 truncate">
          By: <PrimitiveLink to={`/creator/${recipe.creatorName.toLowerCase().replace(/ /g, '-')}`} className="hover:underline">{recipe.creatorName}</PrimitiveLink>
        </CardDescription>
        <p className="text-xs text-muted-foreground mb-3">
          {recipe.prepTime} | {recipe.calories} cals
        </p>
        <div className="flex justify-between items-center">
          <Button asChild size="sm">
            <PrimitiveLink to={`/recipe/${recipe.id}`}>View Recipe</PrimitiveLink>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => alert(`Favorited ${recipe.name}`)} title="Favorite (mock)">
            <Heart className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const CreatorCardComponent: React.FC<{ creator: Creator }> = ({ creator }) => (
    <Card className="w-[150px] sm:w-[180px] flex-shrink-0 text-center">
      <CardContent className="p-4 flex flex-col items-center">
        <img 
          src={creator.profilePic || '/assets/placeholders/100x100.png'} 
          alt={creator.name} 
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-3 shadow-md"
        />
        <CardTitle className="text-md font-medium truncate">
          <PrimitiveLink to={`/creator/${creator.name.toLowerCase().replace(/ /g, '-')}`} className="hover:underline">
            {creator.name}
          </PrimitiveLink>
        </CardTitle>
      </CardContent>
    </Card>
  );

  const CategoryCardComponent: React.FC<{ category: CategoryUIData }> = ({ category }) => (
    <button 
      onClick={() => alert(`Selected category: ${category.name}`)} 
      className="flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 rounded-lg overflow-hidden relative group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
    >
      {category.imageUrl ? (
        <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      ) : (
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <ImageIcon className="w-12 h-12 text-muted-foreground" />
        </div>
      )}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
        <p className="text-white text-sm font-semibold truncate">{category.name}</p>
      </div>
    </button>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <TopLogoBar />
      <TopMealCategoryNav />
      
      <main className="flex-grow overflow-y-auto pt-4 pb-20"> {/* pb-20 to avoid overlap with BottomStickyNav (h-16 + padding) */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <SearchBar />
          
          {/* Categories - New square items with images */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Categories</h3>
            <div className="flex space-x-4 overflow-x-auto pb-3 no-scrollbar">
              {categoriesUIData.map(cat => <CategoryCardComponent key={cat.id} category={cat} />)}
            </div>
          </div>

          {/* Featured Recipes Section */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4 md:mb-6">Featured Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {featuredRecipes.slice(0,4).map(recipe => <RecipeCardComponent key={recipe.id} recipe={recipe} />)}
            </div>
            {featuredRecipes.length > 4 && (
              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <PrimitiveLink to="/recipes/featured">View All Featured</PrimitiveLink>
                </Button>
              </div>
            )}
          </section>

          {/* Popular Creators Section */}
          <section className="mb-8 md:mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-4 md:mb-6">Popular Creators</h2>
            <div className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 no-scrollbar">
              {popularCreators.map(creator => <CreatorCardComponent key={creator.id} creator={creator} />)}
            </div>
          </section>
        </div>
      </main>
      
      <BottomStickyNav />
    </div>
  );
};

export default HomePage; 