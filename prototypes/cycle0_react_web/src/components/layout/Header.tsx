/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_header_g112",
  "version_tag": "0.3.0-mobile-refactored-tsx",
  "g_created": 124,
  "g_last_modified": 160,
  "description": "REFACTORED (TSX): Header component refactored for mobile-first presentation using Tailwind CSS. Mobile view features a logo and a hamburger menu icon triggering a shadcn/ui Sheet for navigation and user actions. Desktop view displays navigation and user actions inline. Uses lucide-react for icons and shadcn/ui components.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEPRECATED",
  "purpose_statement": "To provide a consistent, responsive top navigation bar. Utilizes Tailwind CSS for styling, shadcn/ui Sheet for mobile navigation, and lucide-react for icons, ensuring a mobile-first user experience.",
  "key_logic_points": [
    "Refactored with Tailwind CSS for mobile-first responsive design (flexbox, responsive prefixes like 'md:').",
    "Mobile view: Logo + Hamburger menu icon (`lucide-react/Menu`) triggers `shadcn/ui Sheet`.",
    "Navigation links and user actions (Login/Signup or User Profile/Logout) are placed within the `SheetContent` on mobile.",
    "Desktop view (`md:`): Navigation links and user actions are displayed inline in the header.",
    "Uses `shadcn/ui Button` for authentication actions and potentially for dropdown triggers.",
    "Uses refactored `Link` component (Tailwind-styled `react-router-dom` Link) for navigation."
  ],
  "interfaces_provided": [
    { "name": "Header", "interface_type": "REACT_COMPONENT", "details": "Props: navLinks, user, onLogout, className", "notes": "Navigation and user actions are responsive. `navLinks` is an array of {label, path}." }
  ],
  "requisites": [
    { "description": "Decision to use shadcn/ui and Tailwind CSS as per plan_cycle0_mobile_styling_g150", "type": "PROJECT_DECISION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For internal routing via Link component."},
    { "name": "lucide-react", "version": "latest", "reason": "For icons (e.g., Menu icon)."},
    { "name": "class-variance-authority", "version": "latest", "reason": "Dependency for shadcn/ui components."},
    { "name": "clsx", "version": "latest", "reason": "Utility for constructing className strings, often used with shadcn/ui."}
  ],
  "internal_dependencies": [
    "cycle1_primitive_link_g132", // Refactored Link primitive
    "shadcn_ui_button_g160",    // shadcn/ui Button
    "shadcn_ui_sheet_g160"     // shadcn/ui Sheet
    // Typography primitive (cycle1_primitive_typography_g132) is being phased out; direct Tailwind text utilities used instead.
  ],
  "dependents": [
    "cycle0_prototype_app_entry_g112",
    "cycle1_styleguide_page_g131"
  ],
  "linked_issue_ids": ["issue_placeholder_img_g145"],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g=160 for mobile-first design with Tailwind CSS and shadcn/ui Sheet, as per plan_cycle0_mobile_styling_g150. Original scaffold g124. Dependencies on old Button and Typography primitives removed/updated."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import { Link as RouterDomLink } from 'react-router-dom'; // For type consistency if needed, but PrimitiveLink wraps it.
import PrimitiveLink from '../primitives/Link'; // Uses Tailwind, wraps react-router-dom Link
import { Button } from '@/components/ui/button'; // shadcn/ui Button
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, LogOut, UserCircle, Settings, LogIn, UserPlus } from 'lucide-react';

// Define a type for navLink items
interface NavLinkItem {
  label: string;
  path: string;
  end?: boolean; // Optional: for NavLink's `end` prop
}

// Define a type for the user object
interface User {
  name: string;
  avatarUrl?: string;
}

interface HeaderProps {
  navLinks?: NavLinkItem[];
  user?: User | null;
  onLogout?: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  navLinks = [],
  user = null,
  onLogout = () => alert('Mock Logout Clicked'),
  className = '',
}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  // User dropdown state for desktop - kept separate for clarity
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const commonNavLinks = (isMobile: boolean) => (
    <>
        {navLinks.map((link) => (
          <PrimitiveLink 
            key={link.path} 
            to={link.path} 
          className={`text-sm font-medium ${isMobile ? 'block py-2 px-3 hover:bg-accent rounded-md' : 'hover:text-primary transition-colors'}`}
          onClick={() => isMobile && setIsSheetOpen(false)}
          end={link.end}
          >
            {link.label}
          </PrimitiveLink>
        ))}
        <PrimitiveLink 
          to="/style-guide" 
        className={`text-sm font-medium ${isMobile ? 'block py-2 px-3 hover:bg-accent rounded-md' : 'hover:text-primary transition-colors'}`}
        onClick={() => isMobile && setIsSheetOpen(false)}
        >
          (Dev) Style Guide
        </PrimitiveLink>
    </>
  );

  const userActions = (isMobile: boolean) => (
    <div className={`${isMobile ? 'pt-4 mt-4 border-t border-border' : 'relative'}`}>
        {user ? (
        <div className={`${isMobile ? 'space-y-2' : 'flex items-center gap-2'}`}>
          {isMobile ? (
            <>
              <div className="flex items-center gap-2 px-3 py-2">
                <img src={user.avatarUrl || '/assets/placeholders/40x40.png'} alt={user.name} className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium">{user.name}</span>
              </div>
              <PrimitiveLink to="/profile" onClick={() => setIsSheetOpen(false)} className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent rounded-md"><UserCircle className="w-4 h-4" /> Profile (T-11)</PrimitiveLink>
              <PrimitiveLink to="/settings" onClick={() => setIsSheetOpen(false)} className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent rounded-md"><Settings className="w-4 h-4" /> Settings</PrimitiveLink>
              <Button variant="ghost" onClick={() => { onLogout(); setIsSheetOpen(false); }} className="w-full justify-start px-3 py-2 text-sm hover:bg-accent rounded-md"><LogOut className="w-4 h-4 mr-2" /> Logout</Button>
            </>
          ) : (
            // Desktop User Dropdown/Actions
            <div className="relative">
              <Button variant="ghost" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center gap-2">
                <img src={user.avatarUrl || '/assets/placeholders/40x40.png'} alt={user.name} className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium hidden md:inline">{user.name}</span>
                {/* Simple caret, replace with lucide if desired */}
                <svg className={`w-4 h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Button>
            {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border rounded-md shadow-lg py-1 z-50">
                  <PrimitiveLink to="/profile" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-accent"><UserCircle className="w-4 h-4" /> Profile</PrimitiveLink>
                  <PrimitiveLink to="/settings" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-accent"><Settings className="w-4 h-4" /> Settings</PrimitiveLink>
                  <Button variant="ghost" onClick={() => { onLogout(); setIsUserMenuOpen(false); }} className="w-full justify-start items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-accent"><LogOut className="w-4 h-4" /> Logout</Button>
                </div>
              )}
              </div>
            )}
          </div>
        ) : (
        <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'items-center gap-2'}`}>
          <Button asChild variant={isMobile ? "default" : "outline"} className={isMobile ? 'w-full' : ''} onClick={() => isMobile && setIsSheetOpen(false)}>
            <PrimitiveLink to="/login"><LogIn className={`w-4 h-4 ${isMobile ? 'mr-2' : 'md:mr-2'}`} /> Login (T-03a)</PrimitiveLink>
          </Button>
          <Button asChild variant="default" className={isMobile ? 'w-full' : ''} onClick={() => isMobile && setIsSheetOpen(false)}>
            <PrimitiveLink to="/signup"><UserPlus className={`w-4 h-4 ${isMobile ? 'mr-2' : 'md:mr-2'}`} /> Sign Up (T-03b)</PrimitiveLink>
          </Button>
          </div>
        )}
    </div>
  );

  return (
    <header className={`bg-background border-b sticky top-0 z-40 ${className}`.trim()}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <PrimitiveLink to="/" className="text-xl font-bold text-primary hover:text-primary/90 transition-colors">
          Cultif
        </PrimitiveLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {commonNavLinks(false)}
        </nav>

        {/* Desktop User Actions */}
        <div className="hidden md:flex items-center">
          {userActions(false)}
        </div>
        
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <SheetHeader className="p-6 pb-0">
                <SheetTitle>
                  <PrimitiveLink to="/" className="text-xl font-bold text-primary" onClick={() => setIsSheetOpen(false)}>
                    Cultif
                  </PrimitiveLink>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-6 space-y-1">
                {commonNavLinks(true)}
              </nav>
              <div className="p-6">
                {userActions(true)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header; 