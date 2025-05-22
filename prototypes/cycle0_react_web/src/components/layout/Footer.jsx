/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_footer_g112",
  "version_tag": "0.1.0",
  "g_created": 124,
  "g_last_modified": 124,
  "description": "A reusable footer component for the application layout, typically containing copyright information, sitemap links, and social media links.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a consistent bottom bar across most pages of the application for secondary information and links. References Figma Catalogue: C-05 (Global Footer).",
  "key_logic_points": [
    "Displays copyright information with the current year.",
    "May contain links to pages like About Us, Contact, Privacy Policy, Terms of Service.",
    "May include social media icons/links."
  ],
  "interfaces_provided": [
    { "name": "Footer", "interface_type": "REACT_COMPONENT", "details": "Props: footerLinks, socialLinks, className", "notes": "footerLinks and socialLinks are arrays of objects. Ref C-05_footer_standard_layout." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation links (<Link>)." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle0_prototype_app_entry_g112" // Typically used in the main App layout
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g124. Placeholder for a common footer. Styling and full prop handling to be implemented. Based on C-05."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component (References Figma Catalogue: C-05 - Global Footer)
 *
 * Purpose: Provides a consistent footer section for the application, typically containing copyright, legal links, and social media connections.
 *
 * Props:
 *   footerLinks: Array of objects, e.g., [{ label: 'About Us', path: '/about' }, { label: 'Privacy', path: '/privacy' }]. (Ref C-05_footer_links_section)
 *   socialLinks: Array of objects, e.g., [{ name: 'Facebook', url: 'https://facebook.com', icon: <FBIcon /> }]. (Ref C-05_social_media_icons)
 *   className: String, optional additional CSS classes for custom styling.
 *
 * Structure (Based on C-05_footer_standard_layout):
 * - Main `<footer>` container.
 * - Copyright notice (dynamically generates current year) (C-05_copyright_notice).
 * - Section for footer navigation links (C-05_footer_nav_links).
 * - Section for social media icons/links (C-05_social_links_bar).
 *
 * Checklist for future implementation:
 * [ ] Implement base styling for the footer layout (padding, background color, text color).
 * [ ] Style the copyright notice.
 * [ ] Style the footer navigation links section.
 * [ ] Implement display of social media icons and links (actual icons to be sourced or created).
 * [ ] Ensure responsiveness for different screen sizes (Ref C-05_footer_responsive).
 * [ ] (Optional) Add a sitemap link or other utility links.
 */
const Footer = ({
  footerLinks = [],
  socialLinks = [], // Example: [{name: 'Twitter', url:'#', icon: 'Twt'}, {name:'Facebook', url:'#', icon:'Fb'}]
  className = '',
}) => {
  const currentYear = new Date().getFullYear();

  // Basic placeholder styles - these should be in a CSS file or module
  const footerStyle = {
    padding: '2rem 1rem',
    backgroundColor: '#343a40',
    color: '#f8f9fa',
    textAlign: 'center',
    borderTop: '1px solid #495057',
    // Add more from C-05_footer_base_style
  };

  const linkSectionStyle = {
    margin: '1rem 0',
    // Add from C-05_footer_links_layout
  };

  const footerLinkStyle = {
    color: '#adb5bd',
    textDecoration: 'none',
    margin: '0 0.75rem',
    // Add C-05_footer_link_style
  };

  const socialIconStyle = {
    color: '#adb5bd',
    textDecoration: 'none',
    margin: '0 0.5rem',
    fontSize: '1.2rem', // Placeholder for icon size
    // Add C-05_social_icon_style
  };
  
  const copyrightStyle = {
    fontSize: '0.9rem',
    color: '#6c757d',
    marginTop: '1rem',
    // Add C-05_copyright_text_style
  };

  return (
    <footer style={footerStyle} className={`app-footer ${className}`.trim()}>
      {/* C-05_footer_links_section & C-05_social_links_bar (Combined for simplicity here) */}
      { (footerLinks.length > 0 || socialLinks.length > 0) && (
        <div style={linkSectionStyle} className="footer-links-social">
          {footerLinks.map((link) => (
            <Link key={link.path} to={link.path} style={footerLinkStyle} className="footer-nav-link">
              {link.label}
            </Link>
          ))}
          {footerLinks.length > 0 && socialLinks.length > 0 && <span style={{ margin: '0 0.5rem' }}>|</span>}
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={socialIconStyle}
              aria-label={social.name}
              className="footer-social-link"
            >
              {social.icon || social.name} {/* Placeholder: Use actual icons instead of text/name */}
            </a>
          ))}
        </div>
      )}

      {/* C-05_copyright_notice */}
      <div style={copyrightStyle} className="footer-copyright">
        &copy; {currentYear} Cultif. All Rights Reserved. (Placeholder Text)
      </div>
      <p style={{marginTop: '10px', fontSize: '0.8em', color:'#6c757d'}}>Figma Ref: C-05</p>
    </footer>
  );
};

 