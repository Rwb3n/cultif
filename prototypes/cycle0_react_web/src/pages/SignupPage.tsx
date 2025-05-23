/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_signup_g112",
  "version_tag": "0.2.0-shadcn-tailwind-refactor-tsx",
  "g_created": 119,
  "g_last_modified": 160,
  "description": "REFACTORED (TSX): Component for the User Signup page, refactored to use shadcn/ui components (Input, Button, Label, Checkbox) and Tailwind CSS for a mobile-friendly form layout. Manages new user registration form and interactions.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide the structure for the new user registration experience, styled with Tailwind CSS and using shadcn/ui components. References Figma Catalogue ID: T-03b.",
  "key_logic_points": [
    "Layout refactored using Tailwind CSS for a mobile-first, centered form.",
    "Uses `shadcn/ui Input` for name, email, and password fields.",
    "Uses `shadcn/ui Label` for form field labels.",
    "Uses `shadcn/ui Button` for the signup action.",
    "Uses `shadcn/ui Checkbox` for Terms & Conditions agreement.",
    "Uses refactored `PrimitiveLink` (Tailwind-styled) for navigation to Login and Terms pages.",
    "Form submission handling (mocked) with validation and navigation."
  ],
  "interfaces_provided": [
    { "name": "SignupPage", "interface_type": "REACT_COMPONENT", "details": "The main component for the user signup screen.", "notes": "" }
  ],
  "requisites": [
    {"description": "shadcn/ui Checkbox component needs to be installed if not already present (`pnpm dlx shadcn@latest add checkbox`).", "type":"COMPONENT_DEPENDENCY"}
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For navigation (useNavigate hook and PrimitiveLink)." }
  ],
  "internal_dependencies": [
    "cycle1_primitive_link_g132", // Refactored Link primitive
    "shadcn_ui_input_g160",
    "shadcn_ui_button_g160",
    "shadcn_ui_label_g160",
    "shadcn_ui_checkbox_g160" // Assuming Checkbox will be added with this ID
  ],
  "dependents": [
    "cycle0_router_config_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g=160 to use shadcn/ui components and Tailwind CSS. Original scaffold g119. Assumes shadcn/ui Checkbox is available or will be added."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"; // Assumes checkbox is added
import PrimitiveLink from '../components/primitives/Link'; // Refactored Link, Tailwind-styled

/**
 * SignupPage Component (References Figma Catalogue: T-03b)
 * 
 * Purpose: Handles new user registration.
 * 
 * Structure:
 * - Signup form (`<form>` element).
 * - Full Name input field.
 * - Email input field.
 * - Password input field.
 * - Confirm Password input field.
 * - Terms & Conditions checkbox.
 * - Submit button ('Create Account').
 * - Link to Login page ('Already have an account? Login').
 * 
 * Placeholders & Checklist:
 * [ ] Implement state for form fields (fullName, email, password, confirmPassword, termsAccepted).
 * [ ] Implement basic form with all input fields (controlled components).
 *     [ ] Full Name input (type="text") - Ref T-03b_input_fullname
 *     [ ] Email input (type="email") - Ref T-03b_input_email
 *     [ ] Password input (type="password") - Ref T-03b_input_password
 *     [ ] Confirm Password input (type="password") - Ref T-03b_input_confirmpassword
 * [ ] Implement Terms & Conditions checkbox - Ref T-03b_checkbox_terms
 *     [ ] Ensure it must be checked to submit.
 * [ ] Implement 'Create Account' button.
 *     [ ] Button element (type="submit") - Ref T-03b_button_signup
 *     [ ] On click/submit: validate passwords match, simulate signup (console.log), then navigate to Home page (or a confirmation/email verification page placeholder).
 * [ ] Implement 'Already have an account? Login' link.
 *     [ ] Link element to `/login` - Ref T-03b_link_login
 * [ ] Basic styling for layout and form elements.
 * 
 * Figma References (T-03b Components):
 * - T-03b_logo: App Logo
 * - T-03b_title: "Create Account" or "Sign Up"
 * - T-03b_input_fullname: Full Name input field
 * - T-03b_input_email: Email input field
 * - T-03b_input_password: Password input field
 * - T-03b_input_confirmpassword: Confirm Password input field
 * - T-03b_checkbox_terms: "I agree to the Terms & Conditions" checkbox
 * - T-03b_button_signup: "Create Account" button
 * - T-03b_sso_options: (Optional) Social login buttons - Out of scope
 * - T-03b_link_login: "Already have an account? Login" link
 */
const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions to continue.");
      return;
    }
    console.log('Signup attempt with:', { fullName, email, password, termsAccepted });
    alert('Mock signup successful! Navigating to home.');
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Create Account (T-03b)
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{' '}
            <PrimitiveLink to="/login" variant="subtle" className="font-medium text-primary hover:text-primary/90">
              login to your account (T-03b_link_login)
            </PrimitiveLink>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className="mt-1"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email-address">Email address</Label>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={termsAccepted} 
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)} 
            />
            <Label htmlFor="terms" className="text-sm font-normal text-gray-700 dark:text-gray-300">
              I agree to the <PrimitiveLink to="/terms" target="_blank" variant="subtle" className="underline hover:text-primary">Terms & Conditions</PrimitiveLink> (T-03b_checkbox_terms)
            </Label>
          </div>

          <div>
            <Button type="submit" className="group relative flex w-full justify-center">
              Create Account (T-03b_button_signup)
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Figma Ref: T-03b
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage; 