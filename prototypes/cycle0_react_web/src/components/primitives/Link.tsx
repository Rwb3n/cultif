/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_link_g132",
  "version_tag": "0.2.0-refactored-tsx",
  "g_created": 134,
  "g_last_modified": 160,
  "description": "REFACTORED (TSX): A UI component for rendering styled navigation links, wrapping react-router-dom's Link/NavLink or standard <a> tags. Styling is now primarily managed by Tailwind CSS utility classes. This component is planned for further refactoring, potentially leveraging shadcn/ui Button with variant='link' for some use cases. Original Description: A primitive UI component for rendering styled navigation links... Now migrated to TSX and refactored for Tailwind CSS.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "REFACTORED (TSX): To provide a unified link component that handles both internal (app navigation via react-router-dom) and external links, applying consistent styling using Tailwind CSS. It aims to be flexible for various link appearances. Original Purpose: ...integrating with react-router-dom where appropriate. Now in TSX format and styled with Tailwind.",
  "key_logic_points": [
    "Refactored to use Tailwind CSS for all styling.",
    "Migrated to TSX format as part of plan_jsx_to_tsx_g157.",
    "Determines whether to render a react-router `Link`/`NavLink` (if `to` prop is present) or a standard `<a>` tag (if `href` prop is present).",
    "Supports `variant` for different visual styles (e.g., 'default', 'nav') implemented via Tailwind classes.",
    "Allows customization of `color` (via Tailwind text color classes) and `underline` behavior (via Tailwind text decoration classes, including `hover:underline`).",
    "Passes `activeClassName` (Tailwind classes) and `end` props to `NavLink` for active state styling.",
    "Considers future integration/replacement with shadcn/ui Button variant='link' where appropriate."
  ],
  "interfaces_provided": [
    {
      "name": "Link",
      "interface_type": "REACT_COMPONENT",
      "details": "Props: children, to, href, variant, color (Tailwind text color), underline, component, target, rel, activeClassName (Tailwind classes), end, className (additional Tailwind classes), style (standard style prop for overrides)",
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for original prop descriptions. Styling is now Tailwind-driven. THIS COMPONENT IS SLATED FOR REFACTORING."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" },
    { "description": "`react-router-dom` for internal navigation links.", "type": "EXTERNAL_LIBRARY" },
    { "description": "Tailwind CSS for styling.", "type": "EXTERNAL_LIBRARY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." },
    { "name": "react-router-dom", "version": "^7.6.0", "reason": "For client-side routing if `to` prop is used." },
    { "name": "@types/react-router-dom", "version": "^5.3.3", "reason": "TypeScript definitions for react-router-dom (ensure latest compatible, v5 is common for v6 router too)." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle1_styleguide_page_g131",
    "cycle0_comp_header_g112",
    "cycle0_comp_footer_g112",
    "cycle0_page_login_g112",
    "cycle0_page_home_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Migrated to TSX and refactored for Tailwind CSS at g=160 as per plan_cycle0_mobile_styling_g150. Further refactoring towards shadcn/ui patterns is planned. Original comment: Placeholder for the Link primitive... Typography dependency removed."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import { Link as RouterLink, NavLink as RouterNavLink, NavLinkProps as RouterNavLinkProps, LinkProps as RouterLinkProps } from 'react-router-dom';

interface CustomLinkProps {
  children?: React.ReactNode;
  to?: RouterLinkProps['to'];
  href?: string;
  variant?: 'default' | 'nav' | 'buttonLike' | 'subtle'; // Define your variants
  color?: string; // e.g., 'text-blue-500', 'text-red-700'. User provides full Tailwind class.
  underline?: 'none' | 'hover' | 'always';
  component?: React.ElementType;
  target?: string;
  rel?: string;
  activeClassName?: string; // Tailwind classes for active NavLink
  end?: RouterNavLinkProps['end'];
  className?: string; // Additional Tailwind classes from parent
  style?: React.CSSProperties; // For exceptional style overrides, prefer Tailwind
  // Allow any other props to be passed through
  [key: string]: any;
}

/**
 * Link Component (Primitive - Refactored for Tailwind CSS)
 *
 * Purpose: Styled wrapper for navigation links (internal and external) using Tailwind CSS.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */
const Link = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(function Link(props, ref) {
  const {
    children,
    to,
    href,
    variant = 'default',
    color,
    underline = 'hover',
    component: ComponentProp, // Renamed to avoid conflict
    target,
    rel,
    activeClassName = '', // Default to empty string
    end,
    className = '', // Default to empty string for additional classes
    style,
    ...otherProps
  } = props;

  const isExternal = typeof href === 'string';
  const isInternal = to !== undefined;

  let baseClasses = 'transition-colors duration-150 ease-in-out'; // Base for all links

  // Variant styles
  switch (variant) {
    case 'nav':
      baseClasses += ' px-3 py-2 rounded-md text-sm font-medium'; // Example nav link style
      break;
    case 'buttonLike':
      baseClasses += ' px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700'; // Example
      break;
    case 'subtle':
      // Add subtle variant classes, e.g., less prominent color or no decoration by default
      // color prop will likely be more important here
      break;
    case 'default':
    default:
      // Default link styling, often just uses color and underline props
      break;
  }

  // Color: User provides the full Tailwind text color class like 'text-blue-500'
  if (color) {
    baseClasses += ` ${color}`;
  } else if (variant !== 'buttonLike') { // Default color if not button-like and no color prop
    baseClasses += ' text-indigo-600 hover:text-indigo-500';
  }

  // Underline styles
  if (underline === 'always') {
    baseClasses += ' underline';
  } else if (underline === 'hover') {
    baseClasses += ' hover:underline';
  }
  // 'none' is default if not hover or always

  const combinedClassName = `${baseClasses} ${className}`.trim();

  const commonProps = {
    ref,
    className: combinedClassName,
    style,
    ...otherProps,
  };

  if (ComponentProp) {
    return (
      <ComponentProp {...commonProps} {...(isExternal ? { href, target, rel } : { to })}>
        {children}
      </ComponentProp>
    );
  }

  if (isExternal) {
    return (
      <a {...commonProps} href={href} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}>
        {children}
      </a>
    );
  }

  if (isInternal) {
    if (activeClassName || end !== undefined) {
      return (
        <RouterNavLink
          {...commonProps}
          to={to!}
          className={({ isActive }) => `${combinedClassName} ${isActive ? activeClassName : ''}`.trim()}
          end={end}
        >
          {children}
        </RouterNavLink>
      );
    }
    return (
      <RouterLink {...commonProps} to={to!}>
        {children}
      </RouterLink>
    );
  }

  console.warn('Link component rendered without `to` or `href` prop. Rendering a span.');
  return (
    <span {...commonProps}>
      {children}
    </span>
  );
});

export default Link; 