/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_signup_g112",
  "version_tag": "0.1.0",
  "g_created": 119,
  "g_last_modified": 119,
  "description": "Placeholder component for the User Signup page. This component will manage the display and interaction for new user registration.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide the structure for the new user registration experience in the web prototype. References Figma Catalogue ID: T-03b.",
  "key_logic_points": [
    "Form for full name, email, password, and confirm password input.",
    "Submission handling (mocked).",
    "Link to 'Login' page if user already has an account.",
    "Checkbox for agreeing to Terms & Conditions."
  ],
  "interfaces_provided": [
    { "name": "SignupPage", "interface_type": "REACT_COMPONENT", "details": "The main component for the user signup screen.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation (Link component)." }
  ],
  "internal_dependencies": [
    // "cycle0_comp_button_g112",
    // "cycle0_comp_input_g112"
  ],
  "dependents": [
    "cycle0_router_config_g112" // This page will be a route in AppRouter
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g119. To be populated with specific UI placeholders based on T-03b (Figma)."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
const SignupPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions to continue.");
      return;
    }
    // Simulate signup
    console.log('Signup attempt with:', { fullName, email, password, termsAccepted });
    alert('Mock signup successful! Navigating to home.');
    navigate('/home'); // Or to a profile setup, email verification placeholder etc.
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      {/* <img src="/path/to/logo.png" alt="Cultif Logo" style={{width: '100px', marginBottom: '20px'}} /> Placeholder for T-03b_logo */}
      <h2>Create Account (T-03b)</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <input 
            type="text" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            placeholder="Full Name (e.g., John Doe)" 
            required 
            style={{width: '100%', padding: '10px', boxSizing: 'border-box'}}
          />
          {/* Figma Ref: T-03b_input_fullname */}
        </div>
        <div>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email (e.g., user@example.com)" 
            required 
            style={{width: '100%', padding: '10px', boxSizing: 'border-box'}}
          />
          {/* Figma Ref: T-03b_input_email */}
        </div>
        <div>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
            style={{width: '100%', padding: '10px', boxSizing: 'border-box'}}
          />
          {/* Figma Ref: T-03b_input_password */}
        </div>
        <div>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            placeholder="Confirm Password" 
            required 
            style={{width: '100%', padding: '10px', boxSizing: 'border-box'}}
          />
          {/* Figma Ref: T-03b_input_confirmpassword */}
        </div>
        <div style={{textAlign: 'left', fontSize: '0.9em'}}>
          <input 
            type="checkbox" 
            id="terms" 
            checked={termsAccepted} 
            onChange={(e) => setTermsAccepted(e.target.checked)} 
            required
          />
          <label htmlFor="terms" style={{marginLeft: '5px'}}>I agree to the <Link to="/terms" target="_blank">Terms & Conditions</Link> (T-03b_checkbox_terms)</label>
        </div>
        <button type="submit" style={{padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer'}}>
          Create Account (T-03b_button_signup)
        </button>
      </form>

      <div style={{ marginTop: '20px' }}>
        {/* Placeholder for SSO options T-03b_sso_options - out of scope */}
      </div>

      <div style={{ marginTop: '20px' }}>
        Already have an account? <Link to="/login">Login (T-03b_link_login)</Link>
      </div>
      <p style={{marginTop: '20px', fontSize: '0.8em'}}>Figma Ref: T-03b</p>
    </div>
  );
};

export default SignupPage; 