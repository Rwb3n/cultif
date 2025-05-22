/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_card_g112",
  "version_tag": "0.1.0",
  "g_created": 124,
  "g_last_modified": 124,
  "description": "A reusable card component for displaying content in a structured, visually distinct block.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a flexible container for various types of content such as recipe summaries, user profiles, or promotional items, ensuring consistent styling. References Figma Catalogue: C-02 (Card Variants).",
  "key_logic_points": [
    "Can display an optional image (e.g., at the top or side).",
    "Can have an optional title section.",
    "Main content area for children elements.",
    "Optional footer section for actions or supplementary information.",
    "Accepts props for styling variations (e.g., shadow, border, padding)."
  ],
  "interfaces_provided": [
    { "name": "Card", "interface_type": "REACT_COMPONENT", "details": "Props: children, title, imageUrl, imageAlt, footerContent, variant, className", "notes": "Variant might control shadow depth or border presence. Ref C-02_card_standard, C-02_card_elevated." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle0_page_home_g112", // For recipe cards, creator cards
    "cycle0_page_userprofile_g112", // For displaying user's recipes or meal plans
    "cycle0_page_creatorprofile_g112", // For creator's recipes
    "cycle0_page_subscription_g112" // For tier display cards
    // ... and potentially other components that need a card layout
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g124. Placeholder for a common card component. Styling and full prop handling to be implemented. Based on C-02."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';

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

  // Placeholder for dynamic class generation
  const cardClasses = `card placeholder-card card-${variant} card-image-${imagePosition} ${onClick ? 'card-clickable' : ''} ${className}`.trim();

  // Basic placeholder styles - to be replaced with actual CSS or styled-components
  // These are very simplified and don't account for imagePosition other than 'top'
  const style = {
    border: variant === 'flat' ? 'none' : '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: variant === 'elevated' ? '0 4px 8px rgba(0,0,0,0.1)' : variant === 'standard' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
    overflow: 'hidden',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: imagePosition === 'left' || imagePosition === 'right' ? 'row' : 'column',
    cursor: onClick ? 'pointer' : 'default',
    // Add more styles as needed based on C-02
  };

  const imageStyle = {
    width: imagePosition === 'left' || imagePosition === 'right' ? '120px' : '100%',
    height: imagePosition === 'top' ? '180px' : (imagePosition === 'left' || imagePosition === 'right' ? '100%': 'auto'),
    objectFit: 'cover',
    // Add more styles as needed based on C-02_card_image_treatment
  };

  const contentStyle = {
    padding: '15px',
    flex: 1, // Allows content to take remaining space if image is side-by-side
  };

  const titleStyle = {
    margin: '0 0 10px 0',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    // Add more styles from C-02_card_typography
  };

  const footerStyle = {
    padding: '10px 15px',
    borderTop: '1px solid #eee',
    backgroundColor: '#f9f9f9',
    // Add more styles from C-02_card_footer_style
  };

  const ImageComponent = imageUrl && (
    <img src={imageUrl} alt={imageAlt} style={imageStyle} className="card-image" />
  );

  const mainContent = (
    <div style={contentStyle} className="card-content">
      {title && <h3 style={titleStyle} className="card-title">{title}</h3>}
      {children}
    </div>
  );

  return (
    <div 
      className={cardClasses} 
      style={style} 
      onClick={onClick} 
      tabIndex={onClick ? 0 : -1} // Make clickable cards focusable
      role={onClick ? 'button' : 'article'}
      {...otherProps}
    >
      {imagePosition === 'top' && ImageComponent}
      {imagePosition === 'left' && ImageComponent}
      {mainContent}
      {imagePosition === 'right' && ImageComponent}
      {footerContent && (
        <div style={footerStyle} className="card-footer">
          {footerContent}
        </div>
      )}
    </div>
  );
};

export default Card; 