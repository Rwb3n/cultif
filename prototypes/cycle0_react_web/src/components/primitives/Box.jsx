/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_box_g132",
  "version_tag": "0.1.0",
  "g_created": 134,
  "g_last_modified": 134,
  "description": "A fundamental layout primitive component, typically rendering a div, that provides shorthand access to common CSS utility props for spacing, sizing, colors, and more. It facilitates quick and consistent styling for layout purposes.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To offer a versatile and theme-aware container for applying common styling properties directly as props, reducing the need for custom CSS for simple layout adjustments. Based on the definition in cycle1_ui_primitives_definition_g131.md.",
  "key_logic_points": [
    "Renders as a `div` by default, but can be changed via the `component` prop.",
    "Accepts props for padding (p, px, py, pt, etc.) and margin (m, mx, my, mt, etc.).",
    "Supports props for width, height, min/maxWidth, min/maxHeight.",
    "Allows setting display, bgcolor (background color), color, border, borderRadius, and boxShadow.",
    "Intended to work with a theming system for consistent spacing and color values (placeholder for now)."
  ],
  "interfaces_provided": [
    { 
      "name": "Box", 
      "interface_type": "REACT_COMPONENT", 
      "details": "Props: children, component, p, px, py, pt, pr, pb, pl, m, mx, my, mt, mr, mb, ml, width, height, display, bgcolor, color, border, borderRadius, boxShadow, className, sx (for custom styles)", 
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" },
    { "description": "A theming system for consistent spacing/color units is highly recommended for full utility.", "type": "DESIGN_CONSIDERATION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "prop-types", "version": "^15.x.x", "reason": "For runtime prop type validation." }
  ],
  "internal_dependencies": [],
  "dependents": [],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Box primitive. Actual style transformation from props (especially theme-aware spacing/colors) to be implemented."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import PropTypes from 'prop-types';

// Placeholder for a theme object or theme context
// const theme = {
//   spacing: (value) => `${value * 8}px`, // Example: theme.spacing(2) -> '16px'
//   palette: {
//     primary: { main: '#007bff', light: '#66b2ff' },
//     background: { paper: '#fff' }
//   },
//   shape: { borderRadius: '4px' },
//   shadows: ['none', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', /* ...more */ ],
// };

// Helper function to resolve theme values (simplified)
// In a real system, this would access the theme context.
const resolveThemeValue = (value, type) => {
  if (typeof value === 'number' && type === 'spacing') {
    // return theme.spacing(value);
    return `${value * 8}px`; // Basic fallback if no theme
  }
  if (type === 'color' && value === 'primary.light') {
    // return theme.palette.primary.light;
    return '#66b2ff'; // Basic fallback
  }
  if (type === 'borderRadius') {
    // return theme.shape.borderRadius;
    return '4px';
  }
  if (type === 'boxShadow' && typeof value === 'number' && value >= 0 && value <=1) { // Assuming value is an index
    // return theme.shadows[value];
    return value === 1 ? '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' : 'none';
  }
  return value; // Return as is if not a special theme key or number for spacing
};

/**
 * Box Component (Primitive)
 *
 * Purpose: A fundamental layout component for applying common CSS utility props directly.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */
const Box = React.forwardRef(function Box(props, ref) {
  const {
    children,
    component: Component = 'div',
    p, px, py, pt, pr, pb, pl,
    m, mx, my, mt, mr, mb, ml,
    width, height, minWidth, minHeight, maxWidth, maxHeight,
    display,
    bgcolor,
    color,
    border,
    borderColor,
    borderRadius,
    boxShadow,
    className = '',
    sx, // For more complex custom styles, potentially theme-aware
    style, // Standard style prop
    ...otherProps
  } = props;

  const boxStyles = { ...style }; // Start with explicitly passed style prop

  // Spacing props (padding)
  if (p) { boxStyles.padding = resolveThemeValue(p, 'spacing'); }
  if (px) { boxStyles.paddingLeft = resolveThemeValue(px, 'spacing'); boxStyles.paddingRight = resolveThemeValue(px, 'spacing'); }
  if (py) { boxStyles.paddingTop = resolveThemeValue(py, 'spacing'); boxStyles.paddingBottom = resolveThemeValue(py, 'spacing'); }
  if (pt) { boxStyles.paddingTop = resolveThemeValue(pt, 'spacing'); }
  if (pr) { boxStyles.paddingRight = resolveThemeValue(pr, 'spacing'); }
  if (pb) { boxStyles.paddingBottom = resolveThemeValue(pb, 'spacing'); }
  if (pl) { boxStyles.paddingLeft = resolveThemeValue(pl, 'spacing'); }

  // Spacing props (margin)
  if (m) { boxStyles.margin = resolveThemeValue(m, 'spacing'); }
  if (mx) { boxStyles.marginLeft = resolveThemeValue(mx, 'spacing'); boxStyles.marginRight = resolveThemeValue(mx, 'spacing'); }
  if (my) { boxStyles.marginTop = resolveThemeValue(my, 'spacing'); boxStyles.marginBottom = resolveThemeValue(my, 'spacing'); }
  if (mt) { boxStyles.marginTop = resolveThemeValue(mt, 'spacing'); }
  if (mr) { boxStyles.marginRight = resolveThemeValue(mr, 'spacing'); }
  if (mb) { boxStyles.marginBottom = resolveThemeValue(mb, 'spacing'); }
  if (ml) { boxStyles.marginLeft = resolveThemeValue(ml, 'spacing'); }

  // Sizing props
  if (width) { boxStyles.width = width; }
  if (height) { boxStyles.height = height; }
  if (minWidth) { boxStyles.minWidth = minWidth; }
  if (minHeight) { boxStyles.minHeight = minHeight; }
  if (maxWidth) { boxStyles.maxWidth = maxWidth; }
  if (maxHeight) { boxStyles.maxHeight = maxHeight; }

  // Display prop
  if (display) { boxStyles.display = display; }

  // Color props
  if (bgcolor) { boxStyles.backgroundColor = resolveThemeValue(bgcolor, 'color'); }
  if (color) { boxStyles.color = resolveThemeValue(color, 'color'); }

  // Border props
  if (border) { boxStyles.border = typeof border === 'number' ? `${border}px solid` : border; }
  if (borderColor) { boxStyles.borderColor = resolveThemeValue(borderColor, 'color'); }
  if (borderRadius) { boxStyles.borderRadius = resolveThemeValue(borderRadius, 'borderRadius'); }

  // Shadow prop
  if (boxShadow !== undefined) { boxStyles.boxShadow = resolveThemeValue(boxShadow, 'boxShadow'); }
  
  // sx prop - for complex styles, potentially theme-aware (simplified here)
  if (sx) {
    Object.assign(boxStyles, sx);
  }

  const boxClasses = `primitive-box ${className}`.trim();

  return (
    <Component ref={ref} className={boxClasses} style={boxStyles} {...otherProps}>
      {children}
    </Component>
  );
});

Box.propTypes = {
  children: PropTypes.node,
  component: PropTypes.elementType,
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  display: PropTypes.string,
  bgcolor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  boxShadow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  sx: PropTypes.object, // For complex styles, could be theme-aware
  style: PropTypes.object,
};

export default Box; 