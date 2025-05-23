/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_login_g112",
  "version_tag": "0.4.0-ux-realignment-g165",
  "g_created": 118,
  "g_last_modified": 165,
  "description": "REFACTORED (TSX) for UX Realignment: Login page adapted for a full-screen experience with no vertical scrolling. The form content is centered and designed to fit within the viewport. No global navigation or footer is used.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a focused, full-screen user login experience, minimizing distractions and ensuring content fits the screen height without scrolling, as per stakeholder feedback g162. Continues to use shadcn/ui and Tailwind CSS.",
  "key_logic_points": [
    "Full-screen layout achieved using Tailwind CSS (min-h-screen, flex, items-center, justify-center).",
    "Content container (max-w-md) ensures the form is presented in a centered, constrained width area.",
    "The page is designed so that the primary content (form) should fit typical screen heights without needing page scroll.",
    "No Header or Footer components are rendered on this page.",
    "Uses `shadcn/ui Input`, `Button`, `Label` for form elements.",
    "Uses `PrimitiveLink` for navigation links (e.g., to Signup, Forgot Password)."
  ],
  "interfaces_provided": [
    { "name": "LoginPage", "interface_type": "REACT_COMPONENT", "details": "The main component for the login screen.", "notes": "" }
  ],
  "requisites": [
    { "description": "Stakeholder feedback from project_review_and_feedback_analysis_g162 detailing UX requirements for auth pages.", "type": "REQUIREMENT_SOURCE"}
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For navigation (useNavigate hook and PrimitiveLink)." }
  ],
  "internal_dependencies": [
    "cycle1_primitive_link_g132",
    "shadcn_ui_input_g160",
    "shadcn_ui_button_g160",
    "shadcn_ui_label_g160"
  ],
  "dependents": [
    "cycle0_router_config_g112" 
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g=165 for full-screen, no-scroll layout as per project_review_and_feedback_analysis_g162. Previous version 0.3.0-shadcn-tailwind-refactor-tsx g_last_modified=160."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PrimitiveLink from '../components/primitives/Link';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Login attempt with:', { email, password });
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    alert('Mock login successful! Navigating to home.');
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md space-y-6">
        <div>
          {/* <img className="mx-auto h-12 w-auto" src="/path/to/logo.png" alt="Cultif Logo" /> Placeholder for T-03a_logo */}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Login (T-03a)
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{' '}
            <PrimitiveLink to="/signup" variant="subtle" className="font-medium text-primary hover:text-primary/90">
              create an account (T-03a_link_signup)
            </PrimitiveLink>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md">
            <div>
              <Label htmlFor="email-address" className="sr-only">Email address</Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Email address (user@example.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-end text-sm">
            <PrimitiveLink to="/forgot-password" variant="subtle" className="font-medium text-primary hover:text-primary/90">
              Forgot your password? (T-03a_link_forgot)
            </PrimitiveLink>
          </div>

          <div>
            <Button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800">
              Login (T-03a_button_login)
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Figma Ref: T-03a
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 