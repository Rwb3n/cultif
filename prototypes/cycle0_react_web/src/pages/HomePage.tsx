/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_home_g112",
  "version_tag": "0.2.0-tailwind-refactor-tsx",
  "g_created": 120,
  "g_last_modified": 160,
  "description": "REFACTORED (TSX): Home page refactored to use shadcn/ui components (Card, Button, Input) and Tailwind CSS for a mobile-first, single-column friendly layout. Displays featured recipes and creator spotlights. Dependencies on old primitive components (Box, Typography, custom Card, Stack) removed.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide the main landing and discovery page for users, styled with Tailwind CSS and using shadcn/ui components for a modern, responsive UI. References Figma Catalogue IDs: T-02, T-05, T-06.",
  "key_logic_points": [
    "Layout refactored using Tailwind CSS (flexbox, grid, responsive classes) for a mobile-first approach.",
    "Uses `shadcn/ui Card` for displaying recipes and creators.",
    "Uses `shadcn/ui Button` for filter chips and card actions.",
    "Uses `shadcn/ui Input` for the search bar.",
    "Dependencies on deprecated custom primitives (Box, Typography, common/Card, Stack) have been removed.",
    "Content sections (Featured Recipes, Popular Creators) are now responsive."
  ],
  "interfaces_provided": [
    { "name": "HomePage", "interface_type": "REACT_COMPONENT", "details": "The main component for the home/discovery screen.", "notes": "Uses mock data for now." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." },
    { "name": "lucide-react", "version": "latest", "reason": "For icons (e.g., Heart icon)."}
  ],
  "internal_dependencies": [
    "cycle1_primitive_link_g132", // Refactored Link primitive, used within Button asChild
    "shadcn_ui_card_g160",
    "shadcn_ui_button_g160",
    "shadcn_ui_input_g160"
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": ["issue_placeholder_img_g145"],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g=160 to use Tailwind CSS and shadcn/ui components. Original scaffold g120. Dependencies on old primitives removed. Mock data is still used."
  }
}
ANNOTATION_BLOCK_END */

import React, { useEffect, useState } from 'react';
import PrimitiveLink from '../components/primitives/Link'; // Refactored Link, Tailwind-styled
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Search } from 'lucide-react';

// Mock data types (can be expanded)
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

interface Category {
  id: string;
  name: string;
}

const HomePage: React.FC = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState<Recipe[]>([]);
  const [popularCreators, setPopularCreators] = useState<Creator[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
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
    setCategories([
      { id: 'cat1', name: 'Italian' }, { id: 'cat2', name: 'Vegan' }, { id: 'cat3', name: 'Quick & Easy' }, 
      { id: 'cat4', name: 'Desserts' }, { id: 'cat5', name: 'Breakfast' }, { id: 'cat6', name: 'Healthy' }
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

  const FilterChipComponent: React.FC<{ category: Category }> = ({ category }) => (
    <Button variant="outline" size="sm" className="flex-shrink-0" onClick={() => alert(`Filtering by ${category.name}`)}>
      {category.name}
    </Button>
  );

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <SearchBar />
      
      {/* Filter Chips */}
      <div className="mb-6 md:mb-8">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Categories (T-02_filters)</h3>
        <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map(cat => <FilterChipComponent key={cat.id} category={cat} />)}
        </div>
      </div>

      {/* Featured Recipes Section */}
      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-4 md:mb-6">Featured Recipes (T-02_section_title)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {featuredRecipes.slice(0,4).map(recipe => <RecipeCardComponent key={recipe.id} recipe={recipe} />)}
        </div>
         {/* Show more button or link if there are more than fit */}
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
        <h2 className="text-2xl font-bold tracking-tight mb-4 md:mb-6">Popular Creators (T-02_section_title)</h2>
        <div className="flex space-x-4 md:space-x-6 overflow-x-auto pb-4 no-scrollbar">
          {popularCreators.map(creator => <CreatorCardComponent key={creator.id} creator={creator} />)}
        </div>
      </section>
      
      {/* Footer with Figma Refs - Informational only */}
      <footer className="mt-12 py-4 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          Figma Refs: T-02, T-05, T-06
        </p>
      </footer>
    </div>
  );
};

export default HomePage; 