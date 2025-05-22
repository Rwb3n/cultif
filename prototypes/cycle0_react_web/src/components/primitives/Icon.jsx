/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_icon_g132",
  "version_tag": "0.1.0",
  "g_created": 134,
  "g_last_modified": 134,
  "description": "A primitive UI component for rendering icons consistently. It can support SVG icons, icon fonts, or image-based icons through a unified interface.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a standardized way to display icons across the application, abstracting the underlying icon implementation and ensuring consistent styling (size, color). Based on the definition in cycle1_ui_primitives_definition_g131.md.",
  "key_logic_points": [
    "Accepts an `iconName` prop to specify which icon to display.",
    "Supports `size` and `color` props for styling.",
    "Includes `titleAccess` for accessibility.",
    "The actual icon rendering (SVG, font, etc.) is an internal implementation detail that can be evolved (e.g., using a library like react-icons or a custom sprite)."
  ],
  "interfaces_provided": [
    { 
      "name": "Icon", 
      "interface_type": "REACT_COMPONENT", 
      "details": "Props: iconName, size, color, titleAccess, className", 
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" },
    { "description": "An icon set (SVG, font, or library) needs to be chosen and integrated.", "type": "IMPLEMENTATION_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "prop-types", "version": "^15.x.x", "reason": "For runtime prop type validation." }
    // Potentially: { "name": "react-icons", "version": "^x.x.x", "reason": "If chosen as the icon library." }
  ],
  "internal_dependencies": [],
  "dependents": [],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Icon primitive. Actual icon rendering logic and integration with an icon set to be implemented."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import PropTypes from 'prop-types';

// Placeholder: Icon mapping or library integration
// This is where you would map iconName to actual SVGs or font characters.
// Example with a hypothetical icon library:
// import { FaBeer, FaSearch, FaTimes, FaStar, FaArrowDown } from 'react-icons/fa';
// const iconMap = {
//   beer: FaBeer,
//   search: FaSearch,
//   close: FaTimes,
//   'star-filled': FaStar,
//   'arrow-down': FaArrowDown,
//   // ... add more icons as needed
// };

/**
 * Icon Component (Primitive)
 *
 * Purpose: Standardized icon rendering.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 *
 * Props:
 *   iconName: String identifier for the icon.
 *   size: Size of the icon ('small', 'medium', 'large', or number).
 *   color: Icon color ('primary', 'secondary', 'action', etc., or CSS color).
 *   titleAccess: Accessibility title.
 *   className: Additional CSS classes.
 */
const Icon = React.forwardRef(function Icon(props, ref) {
  const {
    iconName,
    size = 'medium',
    color,
    titleAccess,
    className = '',
    ...otherProps
  } = props;

  // const SpecificIconComponent = iconMap[iconName];

  // Placeholder for style generation logic
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    // Size mapping (simplified)
    ...(size === 'small' && { fontSize: '1rem', width: '1rem', height: '1rem' }),
    ...(size === 'medium' && { fontSize: '1.5rem', width: '1.5rem', height: '1.5rem' }),
    ...(size === 'large' && { fontSize: '2rem', width: '2rem', height: '2rem' }),
    ...(typeof size === 'number' && { fontSize: `${size}px`, width: `${size}px`, height: `${size}px` }),
    
    // Color mapping (simplified - theme integration needed)
    ...(color === 'primary' && { color: 'blue' }),
    ...(color === 'secondary' && { color: 'grey' }),
    ...(color === 'action' && { color: '#333' }),
    ...(color && !['primary', 'secondary', 'action'].includes(color) && { color: color }), // Direct CSS color
  };

  // Combine with any explicitly passed style prop
  const combinedStyles = { ...styles, ...otherProps.style };
  const iconClasses = `primitive-icon icon-${iconName} ${className}`.trim();

  // if (!SpecificIconComponent) {
  //   // Fallback for unknown icons, or render a placeholder
  //   console.warn(`Icon: iconName "${iconName}" not found.`);
  //   return <span ref={ref} className={iconClasses} style={combinedStyles} title={titleAccess || iconName} {...otherProps}>[?]</span>;
  // }

  // Render the specific icon component from the library or SVG
  // return (
  //   <SpecificIconComponent 
  //     ref={ref} 
  //     className={iconClasses} 
  //     style={combinedStyles} 
  //     title={titleAccess} // Some icon libraries might take title directly, others need a <title> child for SVGs
  //     aria-hidden={titleAccess ? undefined : true} // Hide from screen readers if title is not provided
  //     {...otherProps} 
  //   />
  // );

  // Basic placeholder rendering if no icon system is integrated yet:
  return (
    <span 
      ref={ref} 
      className={iconClasses} 
      style={combinedStyles} 
      title={titleAccess || iconName}
      aria-label={titleAccess || iconName}
      role="img"
      {...otherProps}
    >
      {/* Placeholder visual representation - replace with actual icon rendering */}
      {`[${iconName || 'icon'}]`}
    </span>
  );
});

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.number]),
  color: PropTypes.string,
  titleAccess: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Icon; 