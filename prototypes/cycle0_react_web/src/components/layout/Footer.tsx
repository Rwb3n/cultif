/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_footer_g112",
  "version_tag": "0.2.0-tailwind-refactor-tsx",
  "g_created": 124,
  "g_last_modified": 160,
  "description": "REFACTORED (TSX): A reusable footer component, refactored to use Tailwind CSS for styling and layout. It provides a simple, mobile-friendly bottom bar for copyright information and optional links.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a consistent, responsive bottom navigation/information bar using Tailwind CSS for styling. Aims for simplicity and mobile-friendliness.",
  "key_logic_points": [
    "Refactored to use Tailwind CSS for all styling and layout.",
    "Uses standard HTML elements (`footer`, `div`, `p`, `a`) styled with Tailwind classes.",
    "Dependencies on Box and Typography primitives removed.",
    "Displays copyright information and optional footer/social links.",
    "Layout is mobile-first and responsive (e.g., links stack on mobile, row on larger screens)."
  ],
  "interfaces_provided": [
    { "name": "Footer", "interface_type": "REACT_COMPONENT", "details": "Props: footerLinks, socialLinks, className", "notes": "footerLinks and socialLinks are arrays of objects." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." }
    // react-router-dom is an indirect dependency via PrimitiveLink
  ],
  "internal_dependencies": [
    "cycle1_primitive_link_g132" // Refactored Link primitive
  ],
  "dependents": [
    "cycle0_prototype_app_entry_g112",
    "cycle1_styleguide_page_g131"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Refactored at g=160 to use Tailwind CSS. Original scaffold g124. Dependencies on Box and Typography primitives removed. Social icons are still text placeholders."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import PrimitiveLink from '../primitives/Link'; // Uses Tailwind CSS

interface FooterLinkItem {
  label: string;
  path: string; // For internal links via PrimitiveLink's `to` prop
}

interface SocialLinkItem {
  name: string;
  url: string; // For external links via PrimitiveLink's `href` prop
  icon?: React.ReactNode; // Placeholder for actual icon components later
}

interface FooterProps {
  footerLinks?: FooterLinkItem[];
  socialLinks?: SocialLinkItem[];
  className?: string;
}

const Footer: React.FC<FooterProps> = ({
  footerLinks = [],
  socialLinks = [],
  className = '',
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-800 text-gray-200 py-8 px-4 text-center ${className}`.trim()}>
      <div className="container mx-auto">
        {(footerLinks.length > 0 || socialLinks.length > 0) && (
          <div className="mb-6 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            {footerLinks.map((link) => (
              <PrimitiveLink
                key={link.path}
                to={link.path}
                variant="subtle" // Assumes PrimitiveLink has styling for this or use direct classes
                className="text-gray-400 hover:text-gray-200 transition-colors duration-150"
              >
                {link.label}
              </PrimitiveLink>
            ))}
            
            {footerLinks.length > 0 && socialLinks.length > 0 && (
              <span className="hidden md:inline text-gray-500">|</span>
            )}

            {socialLinks.map((social) => (
              <PrimitiveLink
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-150 flex items-center space-x-2"
                aria-label={social.name}
              >
                {/* Placeholder for icon. Later, use lucide-react or svgs */}
                {social.icon || <span className="text-sm">{social.name}</span>}
              </PrimitiveLink>
            ))}
          </div>
        )}

        <p className="text-sm text-gray-500 mb-2">
          &copy; {currentYear} Cultif. All Rights Reserved. (Placeholder Text)
        </p>
        <p className="text-xs text-gray-600">
          Figma Ref: C-05
        </p>
      </div>
    </footer>
  );
};

export default Footer;