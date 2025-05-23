/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_typography_g132",
  "version_tag": "0.1.8",
  "g_created": 134,
  "g_last_modified": 149,
  "description": "A primitive UI component for rendering text with consistent styling options across the application. It standardizes font sizes, weights, colors, and common text behaviors.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a versatile and themeable text component that ensures visual consistency and simplifies the application of typographic styles, based on the definition in cycle1_ui_primitives_definition_g131.md.",
  "key_logic_points": [
    "Accepts a `variant` prop to determine semantic and stylistic role (e.g., h1, body1, caption).",
    "Allows specifying the root HTML `component` to render as.",
    "Supports `color`, `fontWeight`, `textAlign`, and `display` props for common text styling.",
    "Handles text wrapping (`noWrap`) and truncation (`truncate`).",
    "Provides options for `gutterBottom` and `paragraph` styling for spacing."
  ],
  "interfaces_provided": [
    { 
      "name": "Typography", 
      "interface_type": "REACT_COMPONENT", 
      "details": "Props: children, variant, component, color, fontWeight, textAlign, display, noWrap, truncate, gutterBottom, paragraph, className", 
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions and suggested values."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "prop-types", "version": "^15.x.x", "reason": "For runtime prop type validation during development." }
  ],
  "internal_dependencies": [], 
  "dependents": [
    "cycle1_styleguide_page_g131",
    "cycle0_comp_button_g112",
    "cycle0_comp_card_g112",
    "cycle0_comp_modal_g112",
    "cycle0_comp_header_g112",
    "cycle0_comp_footer_g112",
    "cycle0_page_login_g112",
    "cycle0_page_home_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Typography primitive. Actual styling and theme integration to be implemented. Dependents updated at g139, g142, g143, g144, g145, g146, g148, and g149."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import PropTypes from 'prop-types';

// Placeholder: Theme object or context for styling (e.g., colors, font sizes, spacing units)
// const theme = {
//   palette: {
//     primary: { main: '#007bff' },
//     secondary: { main: '#6c757d' },
//     textPrimary: 'rgba(0, 0, 0, 0.87)',
//     textSecondary: 'rgba(0, 0, 0, 0.60)',
//     error: { main: '#dc3545' },
//   },
//   typographyVariants: {
//     h1: { fontSize: '2.5rem', fontWeight: 'bold', component: 'h1' },
//     body1: { fontSize: '1rem', fontWeight: 'normal', component: 'p' },
//     // ... other variants
//   },
//   spacing: (factor) => `${factor * 8}px`,
// };

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
  button: 'span',
  link: 'span',
};

/**
 * Typography Component (Primitive)
 *
 * Purpose: Standardized text rendering with various styling options.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 *
 * Props (refer to definition doc for full details):
 *   children: Text content.
 *   variant: Typographic style (e.g., 'h1', 'body1').
 *   component: HTML element to render as.
 *   color: Text color (e.g., 'primary', 'textSecondary').
 *   fontWeight: Font weight (e.g., 'bold', 400).
 *   textAlign: Text alignment.
 *   display: CSS display property.
 *   noWrap: Prevent text wrapping.
 *   truncate: Truncate text with ellipsis (boolean or number of lines).
 *   gutterBottom: Add bottom margin.
 *   paragraph: Treat as a paragraph with specific margins.
 *   className: Additional CSS classes.
 */
const Typography = React.forwardRef(function Typography(props, ref) {
  const {
    children,
    variant = 'body1',
    component,
    color,
    fontWeight,
    textAlign,
    display,
    noWrap = false,
    truncate = false,
    gutterBottom = false,
    paragraph = false,
    className = '',
    ...otherProps
  } = props;

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || 'span');

  // Placeholder for style generation logic
  // This would typically involve merging styles from a theme object based on props
  const styles = {
    // Basic styling based on variant (highly simplified - theme would provide these)
    ...(variant === 'h1' && { fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 0.5em 0' }),
    ...(variant === 'body1' && { fontSize: '1rem', lineHeight: '1.5' }),
    ...(variant === 'caption' && { fontSize: '0.75rem', color: 'gray' }),

    // Color (example, theme.palette.primary.main)
    ...(color === 'primary' && { color: 'blue' }), 
    ...(color === 'textSecondary' && { color: 'grey' }),
    ...(color && !['primary', 'textSecondary'].includes(color) && { color: color }), // Direct CSS color

    // Font weight
    ...(fontWeight && { fontWeight }),

    // Text align
    ...(textAlign && { textAlign }),

    // Display
    ...(display && { display }),

    // NoWrap
    ...(noWrap && { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }),

    // Truncate (basic single line)
    ...(truncate === true && { 
      overflow: 'hidden', 
      textOverflow: 'ellipsis', 
      whiteSpace: 'nowrap' 
    }),
    // Multi-line truncate (requires -webkit-line-clamp, more complex CSS or JS)
    ...(typeof truncate === 'number' && {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: truncate,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }),

    // Margins
    ...(gutterBottom && { marginBottom: '0.35em' }), // Example spacing
    ...(paragraph && { marginBottom: '1em' }),
  };

  // Combine with any explicitly passed style prop
  const combinedStyles = { ...styles, ...otherProps.style };
  
  const typographyClasses = `primitive-typography typography-variant-${variant} ${className}`.trim();

  return (
    <Component ref={ref} className={typographyClasses} style={combinedStyles} {...otherProps}>
      {children}
    </Component>
  );
});

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'subtitle1', 'subtitle2',
    'body1', 'body2',
    'caption', 'overline',
    'button', 'link',
  ]),
  component: PropTypes.elementType,
  color: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  display: PropTypes.string,
  noWrap: PropTypes.bool,
  truncate: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  gutterBottom: PropTypes.bool,
  paragraph: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Typography; 