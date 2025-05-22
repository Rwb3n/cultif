/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_link_g132",
  "version_tag": "0.1.0",
  "g_created": 134,
  "g_last_modified": 134,
  "description": "A primitive UI component for rendering styled navigation links, wrapping react-router-dom's Link/NavLink or standard <a> tags for consistent appearance and behavior.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a unified and themeable link component that handles both internal (app navigation) and external links, applying consistent styling and integrating with react-router-dom where appropriate. Based on the definition in cycle1_ui_primitives_definition_g131.md.",
  "key_logic_points": [
    "Determines whether to render a react-router `Link`/`NavLink` (if `to` prop is present) or a standard `<a>` tag (if `href` prop is present).",
    "Supports `variant` for different visual styles (e.g., 'default', 'nav', 'buttonLike').",
    "Allows customization of `color` and `underline` behavior.",
    "Integrates with `Typography` component for text styling (conceptual).",
    "Passes `activeClassName` and `end` props to `NavLink` for active state styling."
  ],
  "interfaces_provided": [
    { 
      "name": "Link", 
      "interface_type": "REACT_COMPONENT", 
      "details": "Props: children, to, href, variant, color, underline, component, target, rel, activeClassName, end, className", 
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" },
    { "description": "`react-router-dom` for internal navigation links.", "type": "EXTERNAL_LIBRARY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "prop-types", "version": "^15.x.x", "reason": "For runtime prop type validation." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For client-side routing if `to` prop is used." }
  ],
  "internal_dependencies": [
    "cycle1_primitive_typography_g132" // Conceptually, for text styling
  ],
  "dependents": [],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Link primitive. Integration with Typography, theme-aware styling, and robust NavLink handling to be implemented."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';
// import Typography from './Typography'; // Assuming Typography primitive is available

/**
 * Link Component (Primitive)
 *
 * Purpose: Styled wrapper for navigation links (internal and external).
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */
const Link = React.forwardRef(function Link(props, ref) {
  const {
    children,
    to,
    href,
    variant = 'default',
    color,
    underline = 'hover',
    component, // If a custom component needs to be rendered as a link
    target,
    rel,
    activeClassName, // For NavLink
    end,             // For NavLink
    className = '',
    style,
    ...otherProps
  } = props;

  const isExternal = typeof href === 'string';
  const isInternal = typeof to === 'string' || typeof to === 'object';

  // Placeholder styles - theme integration needed
  const linkStyles = {
    textDecoration: underline === 'always' ? 'underline' : 'none',
    // color: color || (variant === 'subtle' ? 'gray' : 'blue'), // Example color logic
    ...(color && { color }), // Direct color prop overrides variant-based color
    cursor: 'pointer',
    ...(style || {}),
  };

  if (underline === 'hover') {
    // This would typically be handled by a CSS :hover pseudo-class
    // For inline styles, it's more complex (mouse enter/leave handlers)
    // Or use a CSS-in-JS library that supports hover states
  }
  
  // Conceptual: Use Typography for text styling
  // const typographyVariant = variant === 'nav' || variant === 'buttonLike' ? 'button' : 'link';

  const linkBaseClasses = `primitive-link link-variant-${variant} link-underline-${underline}`;
  const combinedClassName = `${linkBaseClasses} ${className}`.trim();

  const commonProps = {
    ref,
    className: combinedClassName,
    style: linkStyles,
    ...otherProps,
  };

  // If a custom component is provided, render it with link-like props
  if (component) {
    const Component = component;
    return (
      <Component {...commonProps} {...(isExternal ? { href, target, rel } : { to })}>
        {/* <Typography variant={typographyVariant} color="inherit">{children}</Typography> */}
        {children}
      </Component>
    );
  }

  if (isExternal) {
    return (
      <a {...commonProps} href={href} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}>
        {/* <Typography variant={typographyVariant} color="inherit">{children}</Typography> */}
        {children}
      </a>
    );
  }

  if (isInternal) {
    if (activeClassName || end !== undefined) { // Use NavLink if activeClassName or end prop is provided
      return (
        <RouterNavLink
          {...commonProps}
          to={to}
          className={({ isActive }) => `${combinedClassName} ${isActive && activeClassName ? activeClassName : ''}`.trim()}
          end={end}
        >
          {/* <Typography variant={typographyVariant} color="inherit">{children}</Typography> */}
          {children}
        </RouterNavLink>
      );
    }
    return (
      <RouterLink {...commonProps} to={to}>
        {/* <Typography variant={typographyVariant} color="inherit">{children}</Typography> */}
        {children}
      </RouterLink>
    );
  }

  // Fallback if neither 'to' nor 'href' is provided, render a span or similar
  // Or, could throw an error in development
  console.warn('Link component rendered without `to` or `href` prop.');
  return (
    <span {...commonProps}>
      {/* <Typography variant={typographyVariant} color="inherit">{children}</Typography> */}
      {children}
    </span>
  );
});

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'nav', 'buttonLike', 'subtle']),
  color: PropTypes.string,
  underline: PropTypes.oneOf(['none', 'hover', 'always']),
  component: PropTypes.elementType,
  target: PropTypes.string,
  rel: PropTypes.string,
  activeClassName: PropTypes.string, // For NavLink
  end: PropTypes.bool,             // For NavLink
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Link; 