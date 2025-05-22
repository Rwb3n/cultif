/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_login_g112",
  "version_tag": "0.2.0",
  "g_created": 118,
  "g_last_modified": 148,
  "description": "Component for the Login page. Manages user login form and interactions. Uses UI primitives and common components for layout and elements.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide the structure for the user login experience in the web prototype, utilizing the refined UI component library. References Figma Catalogue ID: T-03a.",
  "key_logic_points": [
    "Uses Box primitive for overall page layout and form structure.",
    "Uses Stack primitive for vertical layout of form elements.",
    "Uses Typography for page title.",
    "Uses Input primitive for email and password fields.",
    "Uses Button common component for the login action.",
    "Uses Link primitive for 'Forgot Password' and 'Sign Up' navigation.",
    "Form submission handling (mocked) with navigation."
  ],
  "interfaces_provided": [
    { "name": "LoginPage", "interface_type": "REACT_COMPONENT", "details": "The main component for the login screen.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation (useNavigate hook and used by Link primitive)." }
  ],
  "internal_dependencies": [
    "cycle1_primitive_box_g132",
    "cycle1_primitive_typography_g132",
    "cycle1_primitive_input_g132",
    "cycle0_comp_button_g112",
    "cycle1_primitive_link_g132",
    "cycle1_primitive_stack_g132"
  ],
  "dependents": [
    "cycle0_router_config_g112" 
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g118. Refactored at g148 to use Box, Typography, Input, Button, Link, and Stack components. Based on T-03a (Figma)."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../components/primitives/Box';
import Typography from '../components/primitives/Typography';
import Input from '../components/primitives/Input';
import Button from '../components/common/Button';
import PrimitiveLink from '../components/primitives/Link';
import Stack from '../components/primitives/Stack';

/**
 * LoginPage Component (References Figma Catalogue: T-03a)
 * 
 * Purpose: Handles user login.
 * 
 * Structure:
 * - Login form (`<form>` element).
 * - Email input field.
 * - Password input field.
 * - Submit button.
 * - Link to Forgot Password page.
 * - Link to Signup page.
 * 
 * Placeholders & Checklist:
 * [ ] Implement state for email and password fields.
 * [ ] Implement basic form with email and password inputs (controlled components).
 *     [ ] Email input (type="email", placeholder, value, onChange) - Ref T-03a_input_email
 *     [ ] Password input (type="password", placeholder, value, onChange) - Ref T-03a_input_password
 * [ ] Implement 'Login' button.
 *     [ ] Button element (type="submit") - Ref T-03a_button_login
 *     [ ] On click/submit: simulate login (console.log), then navigate to Home page.
 * [ ] Implement 'Forgot Password?' link.
 *     [ ] Link element (e.g., using React Router's Link) to a placeholder path like `/forgot-password` - Ref T-03a_link_forgot
 * [ ] Implement 'Don\'t have an account? Sign Up' link.
 *     [ ] Link element to `/signup` - Ref T-03a_link_signup
 * [ ] Basic styling for layout and form elements.
 * 
 * Figma References (T-03a Components):
 * - T-03a_logo: App Logo
 * - T-03a_title: "Login" or "Welcome Back"
 * - T-03a_input_email: Email input field
 * - T-03a_input_password: Password input field
 * - T-03a_link_forgot: "Forgot Password?" link
 * - T-03a_button_login: "Login" button
 * - T-03a_sso_options: (Optional) Social login buttons (e.g., Google, Apple) - Out of scope for initial scaffold
 * - T-03a_link_signup: "Don\'t have an account? Sign Up" link
 */
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempt with:', { email, password });
    alert('Mock login successful! Navigating to home.');
    navigate('/home');
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      p={3} 
      minHeight="80vh" // Ensure it takes substantial height
    >
      <Box sx={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        {/* <img src="/path/to/logo.png" alt="Cultif Logo" style={{width: '100px', marginBottom: '20px'}} /> Placeholder for T-03a_logo */}
        <Typography variant="h4" component="h1" gutterBottom>
          Login (T-03a)
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Stack spacing={2}>
            <Input 
              type="email" 
              id="email" 
              label="Email Address"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="user@example.com" 
              required 
              fullWidth
              // Figma Ref: T-03a_input_email
            />
            <Input 
              type="password" 
              id="password" 
              label="Password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              required 
              fullWidth
              // Figma Ref: T-03a_input_password
            />
            <Box textAlign="right">
              <PrimitiveLink to="/forgot-password" variant="body2">
                Forgot Password? (T-03a_link_forgot)
              </PrimitiveLink>
            </Box>
            <Button type="submit" variant="primary" size="lg" fullWidth>
              Login (T-03a_button_login)
            </Button>
          </Stack>
        </Box>
        
        <Box mt={2} mb={1}>
          {/* Placeholder for SSO options T-03a_sso_options - out of scope */}
        </Box>

        <Typography variant="body2">
          Don\'t have an account?{' '}
          <PrimitiveLink to="/signup" variant="body2" color="primary">
            Sign Up (T-03a_link_signup)
          </PrimitiveLink>
        </Typography>
        <Typography variant="caption" display="block" color="textSecondary" sx={{mt: 3}}>
          Figma Ref: T-03a
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage; 