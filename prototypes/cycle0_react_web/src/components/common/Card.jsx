/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_card_g112",
  "version_tag": "0.1.3",
  "g_created": 124,
  "g_last_modified": 149,
  "description": "A reusable card component for displaying content in a structured, visually distinct block. Uses Box primitive for layout and Typography for title.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a flexible container for various types of content such as recipe summaries, user profiles, or promotional items, ensuring consistent styling. References Figma Catalogue: C-02 (Card Variants).",
  "key_logic_points": [
    "Utilizes the Box primitive for its main container and structure.",
    "Can optionally display a title using the Typography primitive.",
    "Content area is flexible to accommodate diverse children elements."
  ],
  "interfaces_provided": [
    { "name": "Card", "interface_type": "REACT_COMPONENT", "details": "Props: children, title, sx (passed to Box), titleVariant (passed to Typography)", "notes": "Content is passed as children. Title is optional." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." }
  ],
  "internal_dependencies": [
    "cycle1_primitive_box_g132",
    "cycle1_primitive_typography_g132"
  ],
  "dependents": [
    "cycle1_styleguide_page_g131",
    "cycle0_page_home_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g124. Refactored (g143) to use Box for container and Typography for title. Dependents updated at g140, g143 and g149."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import Box from '../primitives/Box';
import Typography from '../primitives/Typography';

/**
 * Card Component (References Figma Catalogue: C-02 - Card Variants)
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
const Card = ({
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

  const cardClasses = `card placeholder-card card-image-${imagePosition} ${onClick ? 'card-clickable' : ''} ${className}`.trim();

  // Mapping Card variant to Box props
  let boxProps = {
    borderRadius: "8px",
    overflow: "hidden",
    bgcolor: "white",
    display: "flex",
    flexDirection: imagePosition === 'left' || imagePosition === 'right' ? 'row' : 'column',
    sx: { cursor: onClick ? 'pointer' : 'default' }
  };

  if (variant === 'elevated') {
    boxProps.boxShadow = 1; // Assuming Box primitive maps 1 to a standard elevation shadow
    boxProps.border = 'none';
  } else if (variant === 'flat') {
    boxProps.boxShadow = 0;
    boxProps.border = 'none';
  } else { // standard
    boxProps.boxShadow = 0; // Or a very subtle shadow index if available
    boxProps.border = '1px solid #ddd';
  }

  const imageStyle = {
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
      {...otherProps}
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