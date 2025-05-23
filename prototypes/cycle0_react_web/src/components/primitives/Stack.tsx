/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_stack_g132",
  "version_tag": "0.1.4-deprecated-tsx",
  "g_created": 134,
  "g_last_modified": 160,
  "description": "DEPRECATED (TSX): This component is planned for deprecation. Its functionality (arranging items in a one-dimensional stack with spacing) will be replaced by direct usage of Tailwind CSS flexbox utilities. Original description: A layout primitive for arranging items in a one-dimensional stack (either vertically or horizontally) with consistent spacing between them. Now migrated to TSX.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEPRECATED",
  "purpose_statement": "DEPRECATED (TSX): This component will be replaced by direct Tailwind CSS flexbox usage to align with the shadcn/ui and Tailwind-first styling approach. Original purpose: To simplify the creation of stacked layouts (e.g., form fields, lists of items, rows of buttons) by providing props for direction, spacing, alignment, and dividers. Based on the definition in cycle1_ui_primitives_definition_g131.md. Now in TSX format.",
  "key_logic_points": [
    "PLANNED FOR DEPRECATION in favor of Tailwind CSS flexbox utilities.",
    "Migrated to TSX format as part of plan_jsx_to_tsx_g157.",
    "Arranges children in a `direction` (`row` or `column`).",
    "Applies consistent `spacing` between children using CSS gap.",
    "Supports `alignItems` and `justifyContent` for flexbox alignment.",
    "Can optionally render `dividers` between children (basic implementation).",
    "Handles item wrapping via the `wrap` prop (`nowrap`, `wrap`, `wrap-reverse`)."
  ],
  "interfaces_provided": [
    {
      "name": "Stack",
      "interface_type": "REACT_COMPONENT",
      "details": "Props: children, direction, spacing, alignItems, justifyContent, dividers, wrap, className, style",
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions. THIS COMPONENT IS BEING DEPRECATED."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" },
    { "description": "A theming system for consistent spacing units is highly recommended (current implementation uses basic pixel multiplication).", "type": "DESIGN_CONSIDERATION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." }
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
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Stack primitive. Actual styling, especially for spacing and dividers based on theme, to be implemented. Dependents updated at g139, g148, and g149. Marked for DEPRECATION and migrated to TSX at g=160 as per plan_cycle0_mobile_styling_g150."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';

// Placeholder for theme access or helper functions
const resolveSpacing = (spacingValue: string | number | undefined): string | undefined => {
  if (typeof spacingValue === 'number') {
    return `${spacingValue * 8}px`; // Assuming 8px grid, replace with theme.spacing(value)
  }
  return spacingValue as string | undefined; // Expecting a CSS unit string like '1rem', '16px'
};

/**
 * Stack Component (Primitive)
 *
 * Purpose: Arranges items in a one-dimensional stack with consistent spacing.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */

interface StackProps {
  children?: React.ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  spacing?: string | number;
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  dividers?: boolean | React.ReactNode;
  wrap?: React.CSSProperties['flexWrap'];
  className?: string;
  style?: React.CSSProperties;
  // Allow any other props to be passed through
  [key: string]: any;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(function Stack(props, ref) {
  const {
    children,
    direction = 'column',
    spacing = 0,
    alignItems,
    justifyContent,
    dividers = false,
    wrap = 'nowrap',
    className = '',
    style,
    ...otherProps
  } = props;

  const stackStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap,
    ...(alignItems && { alignItems }),
    ...(justifyContent && { justifyContent }),
    gap: resolveSpacing(spacing),
    ...style,
  };

  const stackClasses = `primitive-stack stack-direction-${direction} ${className}`.trim();

  // Filter out null/undefined children to correctly apply dividers
  const validChildren = React.Children.toArray(children).filter(child => child != null && React.isValidElement(child));

  return (
    <div ref={ref} className={stackClasses} style={stackStyles} {...otherProps}>
      {validChildren.map((child, index) => (
        <React.Fragment key={(child as React.ReactElement).key || index}>
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

export default Stack; 