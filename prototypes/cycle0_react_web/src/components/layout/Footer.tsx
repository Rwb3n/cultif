/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_footer_g112",
  "version_tag": "0.1.2",
  "g_created": 124,
  "g_last_modified": 146,
  "description": "A reusable footer component for the application layout. Uses Box for structure, Typography for text, and Link primitive for navigation.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a consistent bottom bar across most pages of the application for secondary information and links. References Figma Catalogue: C-05 (Global Footer).",
  "key_logic_points": [
    "Uses the Box primitive with `component=\"footer\"` as the main container.",
    "Displays copyright information using the Typography primitive.",
    "Contains footer navigation links and social media links using the Link primitive."
  ],
  "interfaces_provided": [
    { "name": "Footer", "interface_type": "REACT_COMPONENT", "details": "Props: footerLinks, socialLinks, className", "notes": "footerLinks and socialLinks are arrays of objects. Ref C-05_footer_standard_layout." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "Used by Link primitive for internal routing." }
  ],
  "internal_dependencies": [
    "cycle1_primitive_box_g132",
    "cycle1_primitive_link_g132",
    "cycle1_primitive_typography_g132"
  ],
  "dependents": [
    "cycle0_prototype_app_entry_g112",
    "cycle1_styleguide_page_g131"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g124. Based on C-05. Dependents g140. Refactored to use Box, Typography, and Link primitives (g146). Styling needs refinement. Social icons are text placeholders."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import Box from '../primitives/Box';
import PrimitiveLink from '../primitives/Link';
import Typography from '../primitives/Typography';

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

  const footerBoxProps = {
    p: "2rem 1rem",
    bgcolor: "#343a40",
    color: "#f8f9fa",
    sx: {
      textAlign: 'center',
      borderTop: '1px solid #495057',
    },
  };

  const linkSectionStyle = {
    margin: '1rem 0',
  };

  const footerLinkStyle = {
    // color: '#adb5bd', // Let PrimitiveLink default or Typography handle color
    textDecoration: 'none',
    margin: '0 0.75rem',
  };

  const socialIconStyle = {
    // color: '#adb5bd', // Let PrimitiveLink default or Typography handle color
    textDecoration: 'none',
    margin: '0 0.5rem',
    fontSize: '1.2rem', // Placeholder for icon size, or use Icon primitive
  };
  
  return (
    <Box component="footer" {...footerBoxProps} className={`app-footer ${className}`.trim()}>
      { (footerLinks.length > 0 || socialLinks.length > 0) && (
        <Box style={linkSectionStyle} className="footer-links-social">
          {footerLinks.map((link) => (
            <PrimitiveLink 
              key={link.path} 
              to={link.path} 
              variant="subtle" // Assuming Link primitive has a 'subtle' variant for footer
              color="#adb5bd"
              style={footerLinkStyle} 
              className="footer-nav-link"
            >
              {link.label}
            </PrimitiveLink>
          ))}
          {footerLinks.length > 0 && socialLinks.length > 0 && <Typography component="span" color="#adb5bd" style={{ margin: '0 0.5rem' }}>|</Typography>}
          {socialLinks.map((social) => (
            <PrimitiveLink 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="subtle"
              color="#adb5bd"
              style={socialIconStyle}
              aria-label={social.name}
              className="footer-social-link"
            >
              {social.icon || social.name} {/* Placeholder: Use actual icons instead of text/name */}
            </PrimitiveLink>
          ))}
        </Box>
      )}

      <Typography variant="caption" color="textSecondary" component="div" className="footer-copyright" style={{color: '#6c757d', marginTop: '1rem'}}>
        &copy; {currentYear} Cultif. All Rights Reserved. (Placeholder Text)
      </Typography>
      <Typography variant="overline" display="block" color="textSecondary" style={{marginTop: '10px', fontSize: '0.8em', color:'#6c757d'}}>
        Figma Ref: C-05
      </Typography>
    </Box>
  );
};

export default Footer;