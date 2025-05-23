/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_card_g112",
  "version_tag": "0.1.4-deprecated-tsx",
  "g_created": 124,
  "g_last_modified": 160,
  "description": "DEPRECATED (TSX): This custom card component is now deprecated and has been replaced by the shadcn/ui Card component and its sub-components (CardHeader, CardTitle, CardDescription, CardContent, CardFooter). Original description: A reusable card component for displaying content in a structured, visually distinct block. Uses Box primitive for layout and Typography for title.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEPRECATED",
  "purpose_statement": "DEPRECATED (TSX): Replaced by shadcn/ui Card for consistency with the new UI library and Tailwind CSS integration. Original purpose: To provide a flexible container for various types of content such as recipe summaries, user profiles, or promotional items, ensuring consistent styling. References Figma Catalogue: C-02 (Card Variants).",
  "key_logic_points": [
    "DEPRECATED and REPLACED by `shadcn/ui Card` and its sub-components.",
    "Original dependencies on Box and Typography primitives are historical as those are also deprecated."
  ],
  "interfaces_provided": [
    { "name": "Card (Custom - DEPRECATED)", "interface_type": "REACT_COMPONENT", "details": "Props: children, title, sx (passed to Box), titleVariant (passed to Typography)", "notes": "This component is DEPRECATED. Use `shadcn/ui Card` components." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." }
  ],
  "internal_dependencies": [
    "cycle1_primitive_box_g132", // Historical dependency, Box is deprecated
    "cycle1_primitive_typography_g132" // Historical dependency, Typography is deprecated
  ],
  "dependents": [
    "cycle1_styleguide_page_g131",
    "cycle0_page_home_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Marked as DEPRECATED at g=160 as it has been replaced by shadcn/ui Card (artifact shadcn_ui_card_g160). Original comment: Initial scaffold by Hybrid_AI_OS g124. Refactored (g143) to use Box for container and Typography for title. Dependents updated at g140, g143 and g149."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import Box from '../primitives/Box'; // Box is deprecated
import Typography from '../primitives/Typography'; // Typography is deprecated

interface CardProps {
  children?: React.ReactNode;
  title?: React.ReactNode | string;
  imageUrl?: string | null;
  imageAlt?: string;
  imagePosition?: 'top' | 'left' | 'right';
  footerContent?: React.ReactNode;
  variant?: 'standard' | 'elevated' | 'flat';
  className?: string;
  onClick?: (() => void) | null;
  [key: string]: any; // For otherProps (e.g. sx for Box)
}

/**
 * Card Component (DEPRECATED - Replaced by shadcn/ui Card)
 *
 * Purpose: A flexible and reusable container for displaying content snippets in a visually organized manner.
 *          Commonly used for recipe previews, user summaries, subscription tiers, etc.
 *
 * Props:
 *   children: ReactNode, the main content of the card.
 *   title: String or ReactNode, optional title for the card.
 *   imageUrl: String, optional URL for an image to be displayed in the card (e.g., at the top).
 *   imageAlt: String, alt text for the imageUrl if provided.
 *   imagePosition: String, 'top' (default) or 'left' or 'right'. (Ref C-02_card_image_positions)
 *   footerContent: ReactNode, optional content for the card's footer (e.g., buttons, links).
 *   variant: String, e.g., 'standard', 'elevated' (with more shadow), 'flat' (no shadow/border). (Ref C-02_card_variants_style)
 *   className: String, optional additional CSS classes for custom styling.
 *   onClick: Function, optional click handler for the entire card.
 *   ...otherProps: Any other standard HTML div attributes.
 *
 * Structure:
 * - Main `<div>` container with card styling.
 * - Optional image section (`<img>`).
 * - Optional title section (`<h3>` or `<h4>`).
 * - Main content section (`<div>` for children).
 * - Optional footer section (`<div>`).
 *
 * Checklist for future implementation:
 * [ ] Implement base styling (padding, border, shadow, border-radius) based on C-02_card_base.
 * [ ] Implement `variant` prop styling ('standard', 'elevated', 'flat') - Ref C-02_card_elevation_styles.
 * [ ] Handle `imageUrl` and `imageAlt` props for displaying an image.
 *     [ ] Implement styling for different `imagePosition` ('top', 'left', 'right') - Ref C-02_card_image_layout.
 * [ ] Style the `title` section.
 * [ ] Style the `footerContent` section.
 * [ ] Ensure content overflow is handled gracefully.
 * [ ] Add interactive states (hover, focus) if applicable (Ref C-02_card_interactive_states).
 */
const Card: React.FC<CardProps> = ({
  children,
  title = null,
  imageUrl = null,
  imageAlt = '',
  imagePosition = 'top', // 'top', 'left', 'right'
  footerContent = null,
  variant = 'standard', // 'standard', 'elevated', 'flat'
  className = '',
  onClick = null,
  ...otherProps
}) => {
  console.warn(
    `Custom Card component (artifact cycle0_comp_card_g112) is deprecated. ` +
    `Use the shadcn/ui Card components (artifact shadcn_ui_card_g160) instead.`
  );

  const cardClasses = `card placeholder-card card-image-${imagePosition} ${onClick ? 'card-clickable' : ''} ${className}`.trim();

  let boxProps: any = { // Type as any for simplicity as Box is deprecated
    borderRadius: "8px",
    overflow: "hidden",
    bgcolor: "white",
    display: "flex",
    flexDirection: imagePosition === 'left' || imagePosition === 'right' ? 'row' : 'column',
    sx: { cursor: onClick ? 'pointer' : 'default' },
    ...(otherProps.sx || {}) // Spread sx from otherProps if present
  };
  // Remove sx from otherProps if it was passed, to avoid applying it twice to Box
  const { sx, ...restOtherProps } = otherProps;

  if (variant === 'elevated') {
    boxProps.boxShadow = 1;
    boxProps.border = 'none';
  } else if (variant === 'flat') {
    boxProps.boxShadow = 0;
    boxProps.border = 'none';
  } else { // standard
    boxProps.boxShadow = 0; // Or a very subtle shadow index if available
    boxProps.border = '1px solid #ddd';
  }

  const imageStyle: React.CSSProperties = {
    width: imagePosition === 'left' || imagePosition === 'right' ? '120px' : '100%',
    height: imagePosition === 'top' ? '180px' : (imagePosition === 'left' || imagePosition === 'right' ? '100%': 'auto'),
    objectFit: 'cover',
  };

  const ImageComponent = imageUrl && (
    <img src={imageUrl} alt={imageAlt} style={imageStyle} className="card-image" />
  );

  const mainContent = (
    <Box p={2} flex={1} className="card-content">
      {title && <Typography variant="h5" component="h3" gutterBottom>{title}</Typography>}
      {children}
    </Box>
  );

  return (
    <Box 
      className={cardClasses}
      {...boxProps}
      onClick={onClick} 
      // tabIndex={onClick ? 0 : -1} // Box might not need explicit tabIndex if not inherently interactive
      role={onClick ? 'button' : 'article'}
      {...restOtherProps} // Use restOtherProps here
    >
      {imagePosition === 'top' && ImageComponent}
      {imagePosition === 'left' && ImageComponent}
      {mainContent}
      {imagePosition === 'right' && ImageComponent}
      {footerContent && (
        <Box p={2} borderTop="1px solid #eee" bgcolor="#f9f9f9" className="card-footer">
          {footerContent}
        </Box>
      )}
    </Box>
  );
};

export default Card; 