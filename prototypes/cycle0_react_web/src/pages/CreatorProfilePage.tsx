/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_creatorprofile_g112",
  "version_tag": "0.2.0-ux-aligned-g170",
  "g_created": 123, 
  "g_last_modified": 170,
  "description": "REFACTORED (TSX) for UX Alignment: Creator Profile page now uses TopLogoBar and BottomStickyNav. Styling converted to Tailwind CSS, and uses shadcn/ui components (Card, Button, Avatar, Tabs, Badge).",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To showcase a content creator\'s profile within the app-like navigation structure, using Tailwind CSS and shadcn/ui components for a consistent look and feel. References Figma Catalogue ID: T-12.",
  "key_logic_points": [
    "Integrates TopLogoBar and BottomStickyNav.",
    "Uses Tailwind CSS for all styling.",
    "Displays creator\'s avatar (shadcn/ui Avatar), name, bio, stats (shadcn/ui Badge), and social links.",
    "Uses shadcn/ui Tabs for 'Recipes' and 'About' sections.",
    "Displays creator\'s recipes as a grid of shadcn/ui Cards.",
    "'Follow' button uses shadcn/ui Button.",
    "Handles loading and not-found states."
  ],
  "interfaces_provided": [
    { "name": "CreatorProfilePage", "interface_type": "REACT_COMPONENT", "details": "Component for displaying a content creator\'s profile.", "notes": "" }
  ],
  "requisites": [
    { "description": "TopLogoBar, BottomStickyNav components must be available.", "type": "INTERNAL_DEPENDENCY" },
    { "description": "shadcn/ui Avatar, Button, Card, Tabs, Badge components.", "type": "LIBRARY_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For navigation (Link, useParams, useNavigate)." },
    { "name": "lucide-react", "version": "latest", "reason": "For icons."}
  ],
  "internal_dependencies": [
    "cycle0_comp_toplogobar_g163",
    "cycle0_comp_bottomstickynav_g163",
    "cycle1_primitive_link_g132",
    "shadcn_ui_avatar_g170", // Assuming g170 as it will be added
    "shadcn_ui_button_g160",
    "shadcn_ui_card_g160",
    "shadcn_ui_tabs_g170",   // Assuming g170 as it will be added
    "shadcn_ui_badge_g160"
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g170 to use app-like navigation (TopLogoBar, BottomStickyNav), Tailwind CSS, and shadcn/ui components. Previous version 0.1.0 g_last_modified=123."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState, useEffect } from 'react';
import { Link as PrimitiveRouterLink, useParams, useNavigate } from 'react-router-dom'; // Renamed Link to avoid conflict

import TopLogoBar from '../components/layout/TopLogoBar';
import BottomStickyNav from '../components/layout/BottomStickyNav';
import PrimitiveLinkComponent from '../components/primitives/Link'; // Explicit name for PrimitiveLink
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Users, BookOpen, Link as LinkIcon, Instagram, Youtube, Globe } from 'lucide-react';

// Mock creator data (replace with actual fetch logic or context based on creatorId)
const mockCreators: Record<string, any> = {
  c1: {
    id: 'c1',
    name: 'Chef Gourmet Master',
    username: 'chefmaster',
    avatarUrl: 'https://via.placeholder.com/150?text=C1', // Placeholder, ensure valid or use fallback
    bio: 'Passionate chef sharing delicious and easy-to-make recipes from around the world. Join my culinary journey! Cooking is an art, and I love to paint with flavors.',
    followers: 12500,
    recipesCount: 75,
    socialLinks: {
      instagram: '#',
      youtube: '#',
      website: '#',
    },
    recipes: [
      { id: 'r1', name: 'Spicy Chicken Pasta', imageUrl: 'https://via.placeholder.com/300x200?text=Pasta' },
      { id: 'r6', name: 'Gourmet Beef Steak', imageUrl: 'https://via.placeholder.com/300x200?text=Steak' },
      { id: 'r7', name: 'Chocolate Lava Cake', imageUrl: 'https://via.placeholder.com/300x200?text=Cake' },
      { id: 'r8', name: 'Another Delicious Dish', imageUrl: 'https://via.placeholder.com/300x200?text=Dish4' },
    ]
  },
  c2: {
    id: 'c2',
    name: 'Healthy Bites Ella',
    username: 'healthyella',
    avatarUrl: 'https://via.placeholder.com/150?text=C2',
    bio: 'Your go-to source for nutritious and tasty meal prep ideas. Eating healthy can be fun and absolutely delicious! Discover simple recipes that fuel your body.',
    followers: 8200,
    recipesCount: 40,
    socialLinks: {
      instagram: '#',
      pinterest: '#',
    },
    recipes: [
      { id: 'r2', name: 'Vegan Buddha Bowl', imageUrl: 'https://via.placeholder.com/300x200?text=Bowl' },
      { id: 'r3', name: 'Berry Smoothie', imageUrl: 'https://via.placeholder.com/300x200?text=Smoothie' },
    ]
  }
};

const CreatorProfilePage: React.FC = () => {
  const { creatorId } = useParams<{ creatorId: string }>();
  const [creatorData, setCreatorData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const foundCreator = creatorId ? mockCreators[creatorId] : null;
    if (foundCreator) {
      setCreatorData(foundCreator);
    } else {
      setCreatorData(null);
    }
    setLoading(false);
  }, [creatorId]);

  const handleFollow = () => {
    alert(`Mock: Following ${creatorData?.name || 'creator'}!`);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <TopLogoBar />
        <main className="flex-grow flex items-center justify-center">
          Loading creator profile... (T-12)
        </main>
        <BottomStickyNav />
      </div>
    );
  }

  if (!creatorData) {
    return (
      <div className="flex flex-col min-h-screen">
        <TopLogoBar />
        <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
          <h2 className="text-2xl font-semibold mb-2">Creator Not Found (T-12)</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">The creator profile you are looking for does not exist.</p>
          <Button onClick={() => navigate('/home')}>Go to Home</Button>
        </main>
        <BottomStickyNav />
      </div>
    );
  }

        return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      <TopLogoBar />
      <main className="flex-grow overflow-y-auto pt-4 pb-24 px-4 sm:px-6 lg:px-8">
        {/* Creator Header */}
        <div className="md:flex md:items-start md:space-x-6 mb-8 p-4 bg-white dark:bg-slate-800 shadow-md rounded-lg">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 mb-4 md:mb-0 shrink-0">
            <AvatarImage src={creatorData.avatarUrl} alt={`${creatorData.name}'s avatar`} />
            <AvatarFallback className="text-3xl md:text-4xl">
              {creatorData.name?.split(' ').map((n:string) => n[0]).join('').toUpperCase() || 'C'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">{creatorData.name}</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">@{creatorData.username}</p>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <div className="text-center">
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{creatorData.recipesCount}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Recipes</p>
                    </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">{creatorData.followers}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Followers</p>
              </div>
          </div>
            <Button onClick={handleFollow} size="sm" className="w-full md:w-auto">
              <User className="mr-2 h-4 w-4" /> Follow
            </Button>
          </div>
        </div>

        {/* Social Links & Short Bio */}
        <Card className="mb-8 dark:bg-slate-800 shadow">
            <CardContent className="p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {creatorData.bio.substring(0, 200)}{creatorData.bio.length > 200 && '...'}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {creatorData.socialLinks?.instagram && 
                        <PrimitiveLinkComponent href={creatorData.socialLinks.instagram} target="_blank" className="text-sm flex items-center text-pink-600 hover:text-pink-700 dark:text-pink-500 dark:hover:text-pink-400">
                            <Instagram className="mr-1.5 h-4 w-4" /> Instagram
                        </PrimitiveLinkComponent>}
                    {creatorData.socialLinks?.youtube && 
                        <PrimitiveLinkComponent href={creatorData.socialLinks.youtube} target="_blank" className="text-sm flex items-center text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400">
                            <Youtube className="mr-1.5 h-4 w-4" /> YouTube
                        </PrimitiveLinkComponent>}
                    {creatorData.socialLinks?.website && 
                        <PrimitiveLinkComponent href={creatorData.socialLinks.website} target="_blank" className="text-sm flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400">
                            <Globe className="mr-1.5 h-4 w-4" /> Website
                        </PrimitiveLinkComponent>}
                    {creatorData.socialLinks?.pinterest && 
                        <PrimitiveLinkComponent href={creatorData.socialLinks.pinterest} target="_blank" className="text-sm flex items-center text-red-700 hover:text-red-800 dark:text-red-600 dark:hover:text-red-500">
                            <LinkIcon className="mr-1.5 h-4 w-4" /> Pinterest {/* Using generic LinkIcon as Pinterest not in lucide */} 
                        </PrimitiveLinkComponent>}
      </div>
            </CardContent>
        </Card>

        <Tabs defaultValue="recipes" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="recipes">Recipes</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="recipes">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {creatorData.recipes && creatorData.recipes.length > 0 ? (
                creatorData.recipes.map((recipe: any) => (
                  <PrimitiveRouterLink key={recipe.id} to={`/recipe/${recipe.id}`} className="group">
                    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow dark:bg-slate-800">
                      <img 
                        src={recipe.imageUrl} 
                        alt={recipe.name} 
                        className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity"
                      />
                      <CardHeader className="p-3 flex-grow">
                        <CardTitle className="text-md font-semibold leading-tight group-hover:text-primary dark:group-hover:text-primary-foreground">{recipe.name}</CardTitle>
                      </CardHeader>
                    </Card>
                  </PrimitiveRouterLink>
                ))
              ) : (
                <p className="col-span-full text-center text-slate-500 dark:text-slate-400 py-8">No recipes published by this creator yet.</p>
              )}
      </div>
          </TabsContent>
          <TabsContent value="about">
            <Card className="dark:bg-slate-800">
              <CardHeader>
                <CardTitle className="text-xl">About {creatorData.name}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                <p>{creatorData.bio}</p>
                {/* Add more detailed about information if available */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <p className="mt-8 text-xs text-center text-slate-400 dark:text-slate-500">Figma Ref: T-12</p>
      </main>
      <BottomStickyNav />
    </div>
  );
};

export default CreatorProfilePage; 