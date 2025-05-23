/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_icon_g132",
  "version_tag": "0.1.2-deprecated-tsx",
  "g_created": 134,
  "g_last_modified": 160,
  "description": "DEPRECATED (TSX): This component is planned for deprecation. `lucide-react` icons should be used directly with Tailwind CSS for styling. Original description: A primitive UI component for rendering icons consistently. Now migrated to TSX.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEPRECATED",
  "purpose_statement": "DEPRECATED (TSX): This component will be replaced by direct usage of `lucide-react` icons. Original purpose: To provide a standardized way to display icons across the application... Now in TSX format.",
  "key_logic_points": [
    "PLANNED FOR DEPRECATION in favor of direct `lucide-react` usage.",
    "Migrated to TSX format as part of plan_jsx_to_tsx_g157.",
    "Original intent was to accept `iconName`, `size`, `color` props.",
    "This wrapper is now considered redundant."
  ],
  "interfaces_provided": [
    { 
      "name": "Icon", 
      "interface_type": "REACT_COMPONENT", 
      "details": "Props: iconName, size, color, titleAccess, className, style", 
      "notes": "THIS COMPONENT IS BEING DEPRECATED. Use `lucide-react` icons directly."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md (now historical)", "type": "DESIGN_SPECIFICATION" },
    { "description": "`lucide-react` should be used directly.", "type": "REPLACEMENT_STRATEGY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle1_styleguide_page_g131" 
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Marked for DEPRECATION and migrated to TSX at g=160 as per plan_cycle0_mobile_styling_g150. To be replaced by direct lucide-react usage."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';

interface IconProps {
  iconName?: string; // Kept for basic structure, but usage is deprecated
  size?: 'small' | 'medium' | 'large' | number;
  color?: string;
  titleAccess?: string;
  className?: string;
  style?: React.CSSProperties;
  // Allow any other props to be passed through
  [key: string]: any;
}

/**
 * Icon Component (Primitive - DEPRECATED)
 *
 * Purpose: Standardized icon rendering. THIS COMPONENT IS DEPRECATED.
 * Use `lucide-react` icons directly with Tailwind CSS for styling.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(function Icon(props, ref) {
  const {
    iconName,
    size = 'medium',
    color,
    titleAccess,
    className = '',
    style: styleProp, // Renamed to avoid conflict
    ...otherProps
  } = props;

  const styles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...(size === 'small' && { fontSize: '1rem', width: '1rem', height: '1rem' }),
    ...(size === 'medium' && { fontSize: '1.5rem', width: '1.5rem', height: '1.5rem' }),
    ...(size === 'large' && { fontSize: '2rem', width: '2rem', height: '2rem' }),
    ...(typeof size === 'number' && { fontSize: `${size}px`, width: `${size}px`, height: `${size}px` }),
    ...(color && { color: color }), // Simplified, actual color would come from Tailwind or direct CSS
  };

  const combinedStyles = { ...styles, ...styleProp };
  const iconClasses = `primitive-icon icon-${iconName || 'deprecated'} ${className}`.trim();

  console.warn(
    `Icon component (primitive-icon icon-${iconName || 'deprecated'}) is deprecated. ` +
    `Use lucide-react icons directly with Tailwind CSS.`
  );

  return (
    <span 
      ref={ref} 
      className={iconClasses} 
      style={combinedStyles} 
      title={titleAccess || iconName}
      aria-label={titleAccess || iconName || 'deprecated icon'}
      role="img"
      {...otherProps}
    >
      {`[${iconName || 'DEPRECATED'}]`}
    </span>
  );
});

export default Icon; 