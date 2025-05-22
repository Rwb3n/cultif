/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_login_g112",
  "version_tag": "0.1.0",
  "g_created": 118,
  "g_last_modified": 118,
  "description": "Placeholder component for the Login page. This component will manage the display and interaction for user login.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide the structure for the user login experience in the web prototype. References Figma Catalogue ID: T-03a.",
  "key_logic_points": [
    "Form for email/password input.",
    "Submission handling (mocked).",
    "Links for 'Forgot Password' and 'Sign Up'."
  ],
  "interfaces_provided": [
    { "name": "LoginPage", "interface_type": "REACT_COMPONENT", "details": "The main component for the login screen.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation (Link component)." }
  ],
  "internal_dependencies": [
    // "cycle0_comp_button_g112",
    // "cycle0_comp_input_g112" (assuming a generic input component might be created)
  ],
  "dependents": [
    "cycle0_router_config_g112" // This page will be a route in AppRouter
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g118. To be populated with specific UI placeholders based on T-03a (Figma)."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    // Simulate login
    console.log('Login attempt with:', { email, password });
    // Mock successful login and navigate to home
    // In a real app, this would involve an API call and auth context update
    alert('Mock login successful! Navigating to home.');
    navigate('/home'); // Assuming '/home' is the route for HomePage
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      {/* <img src="/path/to/logo.png" alt="Cultif Logo" style={{width: '100px', marginBottom: '20px'}} /> Placeholder for T-03a_logo */}
      <h2>Login (T-03a)</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email (e.g., user@example.com)" 
            required 
            style={{width: '100%', padding: '10px', boxSizing: 'border-box'}}
          />
          {/* Figma Ref: T-03a_input_email */}
        </div>
        <div>
          {/* <label htmlFor="password">Password:</label> */}
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
            required 
            style={{width: '100%', padding: '10px', boxSizing: 'border-box'}}
          />
          {/* Figma Ref: T-03a_input_password */}
        </div>
        <div style={{textAlign: 'right', fontSize: '0.9em'}}>
          <Link to="/forgot-password">Forgot Password? (T-03a_link_forgot)</Link>
        </div>
        <button type="submit" style={{padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer'}}>
          Login (T-03a_button_login)
        </button>
      </form>
      
      <div style={{ marginTop: '20px' }}>
        {/* Placeholder for SSO options T-03a_sso_options - out of scope */}
      </div>

      <div style={{ marginTop: '20px' }}>
        Don\'t have an account? <Link to="/signup">Sign Up (T-03a_link_signup)</Link>
      </div>
      <p style={{marginTop: '20px', fontSize: '0.8em'}}>Figma Ref: T-03a</p>
    </div>
  );
};

export default LoginPage; 