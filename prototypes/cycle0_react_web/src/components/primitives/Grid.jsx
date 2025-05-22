/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_grid_g132",
  "version_tag": "0.1.0",
  "g_created": 134,
  "g_last_modified": 134,
  "description": "A layout primitive for creating responsive 2D layouts using a 12-column grid system. It consists of Grid containers and Grid items.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a flexible and standard way to structure page layouts and component compositions responsively, aligning with common grid system patterns. Based on the definition in cycle1_ui_primitives_definition_g131.md.",
  "key_logic_points": [
    "A `Grid` component can act as a `container` or an `item`.",
    "`container` grids manage the layout of `item` grids.",
    "Supports `spacing` between grid items.",
    "`item` grids can specify column spans for different breakpoints (`xs`, `sm`, `md`, `lg`, `xl`).",
    "Utilizes flexbox for its underlying implementation."
  ],
  "interfaces_provided": [
    { 
      "name": "Grid", 
      "interface_type": "REACT_COMPONENT", 
      "details": "Props: children, container, item, spacing, direction, alignItems, justifyContent, xs, sm, md, lg, xl, className", 
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" },
    { "description": "A theming system (for breakpoint definitions and spacing units) is highly recommended.", "type": "DESIGN_CONSIDERATION" }
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
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Grid primitive. Responsive styling based on breakpoints and theme-aware spacing to be implemented."
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
  return spacingValue;
};

// Placeholder for breakpoint definitions (e.g., from theme)
// const breakpoints = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 };

/**
 * Grid Component (Primitive)
 *
 * Purpose: Responsive 2D layout using a 12-column grid system.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */
const Grid = React.forwardRef(function Grid(props, ref) {
  const {
    children,
    container = false,
    item = false,
    spacing = 0, // Spacing for container
    direction = 'row', // For container
    alignItems,    // For container
    justifyContent,// For container
    wrap = 'wrap', // For container
    xs, sm, md, lg, xl, // For items
    className = '',
    component: Component = 'div',
    style,
    ...otherProps
  } = props;

  const gridStyles = { ...style };
  let gridItemClasses = '';

  if (container) {
    gridStyles.display = 'flex';
    gridStyles.flexDirection = direction;
    gridStyles.flexWrap = wrap;
    if (alignItems) gridStyles.alignItems = alignItems;
    if (justifyContent) gridStyles.justifyContent = justifyContent;
    
    // Apply negative margin for spacing if gap is not fully supported or for certain layouts
    // Modern approach is to use `gap` property, which is simpler.
    const gapValue = resolveSpacing(spacing);
    gridStyles.gap = gapValue;
    // gridStyles.margin = `calc(-${gapValue} / 2)`; // Traditional negative margin approach
    // React.Children.forEach(children, child => {
    //   if (child && child.props.item) {
    //      child.props.style = { ...child.props.style, padding: `calc(${gapValue} / 2)` };
    //   }
    // });
  }

  if (item) {
    gridStyles.flexGrow = 0; // Default for item, can be overridden by responsive props
    gridStyles.maxWidth = '100%'; // Default for item
    gridStyles.flexBasis = 'auto'; // Default for item
    
    // Placeholder for responsive prop handling (e.g., generating classes or styles)
    // This is a very simplified version. A real implementation would use media queries
    // or a CSS-in-JS solution that handles breakpoints.
    const createItemStyles = (size) => {
      if (size === true) { // Auto layout
        return { flexGrow: 1, flexBasis: 0, maxWidth: '100%' };
      } if (typeof size === 'number' && size > 0 && size <= 12) {
        const percentage = (size / 12) * 100;
        return { flexGrow: 0, flexBasis: `${percentage}%`, maxWidth: `${percentage}%` };
      }
      return {};
    };
    
    // For simplicity, applying only xs if present, or largest defined breakpoint.
    // A robust solution would apply styles within media queries.
    let responsiveStyles = {};
    if (xs) responsiveStyles = { ...responsiveStyles, ...createItemStyles(xs), class: 'grid-xs-' + (xs === true ? 'auto' : xs) };
    if (sm) responsiveStyles = { ...responsiveStyles, ...createItemStyles(sm), class: (responsiveStyles.class || '') + ' grid-sm-' + (sm === true ? 'auto' : sm) };
    // ... and so on for md, lg, xl
    // In a real scenario, these would be classes tied to media queries:
    // e.g., className += ` grid-xs-${xs}`
    
    Object.assign(gridStyles, responsiveStyles);
    gridItemClasses = responsiveStyles.class || '';

    // If container spacing was applied with negative margins, item needs padding
    // if (container && spacing > 0) {
    //   gridStyles.padding = `calc(${resolveSpacing(spacing)} / 2)`;
    // }
  }

  const gridClasses = `primitive-grid ${container ? 'grid-container' : ''} ${item ? 'grid-item' : ''} ${gridItemClasses} ${className}`.trim().replace(/\s+/g, ' ');

  return (
    <Component ref={ref} className={gridClasses} style={gridStyles} {...otherProps}>
      {children}
    </Component>
  );
});

Grid.propTypes = {
  children: PropTypes.node,
  container: PropTypes.bool,
  item: PropTypes.bool,
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  xs: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  sm: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  xl: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  component: PropTypes.elementType,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Grid; 