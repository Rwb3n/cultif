/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_stack_g132",
  "version_tag": "0.1.3",
  "g_created": 134,
  "g_last_modified": 149,
  "description": "A layout primitive for arranging items in a one-dimensional stack (either vertically or horizontally) with consistent spacing between them.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To simplify the creation of stacked layouts (e.g., form fields, lists of items, rows of buttons) by providing props for direction, spacing, alignment, and dividers. Based on the definition in cycle1_ui_primitives_definition_g131.md.",
  "key_logic_points": [
    "Arranges children in a `direction` (`row` or `column`).",
    "Applies consistent `spacing` between children.",
    "Supports `alignItems` and `justifyContent` for flexbox alignment.",
    "Can optionally render `dividers` between children.",
    "Handles item wrapping via the `wrap` prop."
  ],
  "interfaces_provided": [
    { 
      "name": "Stack", 
      "interface_type": "REACT_COMPONENT", 
      "details": "Props: children, direction, spacing, alignItems, justifyContent, dividers, wrap, className", 
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" },
    { "description": "A theming system for consistent spacing units is highly recommended.", "type": "DESIGN_CONSIDERATION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "prop-types", "version": "^15.x.x", "reason": "For runtime prop type validation." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle1_styleguide_page_g131",
    "cycle0_page_login_g112",
    "cycle0_page_home_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Stack primitive. Actual styling, especially for spacing and dividers based on theme, to be implemented. Dependents updated at g139, g148, and g149."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import PropTypes from 'prop-types';

// Placeholder for theme access or helper functions
const resolveSpacing = (spacingValue) => {
  if (typeof spacingValue === 'number') {
    return `${spacingValue * 8}px`; // Assuming 8px grid, replace with theme.spacing(value)
  }
  return spacingValue; // Expecting a CSS unit string like '1rem', '16px'
};

/**
 * Stack Component (Primitive)
 *
 * Purpose: Arranges items in a one-dimensional stack with consistent spacing.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */
const Stack = React.forwardRef(function Stack(props, ref) {
  const {
    children,
    direction = 'column',
    spacing = 0,
    alignItems,
    justifyContent,
    dividers = false,
    wrap = 'nowrap', // Changed from boolean to string to match CSS flex-wrap property
    className = '',
    style,
    ...otherProps
  } = props;

  const stackStyles = {
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap,
    ...(alignItems && { alignItems }),
    ...(justifyContent && { justifyContent }),
    gap: resolveSpacing(spacing), // Using CSS gap for spacing
    ...style,
  };

  const stackClasses = `primitive-stack stack-direction-${direction} ${className}`.trim();

  // Filter out null/undefined children to correctly apply dividers
  const validChildren = React.Children.toArray(children).filter(child => child != null);

  return (
    <div ref={ref} className={stackClasses} style={stackStyles} {...otherProps}>
      {validChildren.map((child, index) => (
        <React.Fragment key={child.key || index}>
          {child}
          {dividers && index < validChildren.length - 1 && (
            // Basic divider placeholder - theme integration needed
            <div 
              style={{
                ...(direction === 'column' 
                  ? { height: '1px', width: '100%', margin: `${resolveSpacing(spacing)} 0` } 
                  : { width: '1px', height: '100%', margin: `0 ${resolveSpacing(spacing)}` }),
                backgroundColor: 'rgba(0, 0, 0, 0.12)', // Example color
              }}
              className="primitive-stack-divider"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
});

Stack.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  dividers: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Stack; 