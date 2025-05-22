/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_button_g112",
  "version_tag": "0.2.0-shadcn-planned",
  "g_created": 124,
  "g_last_modified": 152,
  "description": "PLANNED FOR REPLACEMENT: This custom button component will be replaced by the shadcn/ui Button component. Original description: A reusable button component with various styles and functionalities.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "REFACTORING_PLANNED",
  "purpose_statement": "PLANNED FOR REPLACEMENT: To be replaced by shadcn/ui Button for consistency with the new UI library and Tailwind CSS integration, supporting mobile-first design. Original purpose: To provide a consistent button element across the application, supporting different visual styles (primary, secondary, text) and actions. References Figma Catalogue: C-01 (Button Variants).",
  "key_logic_points": [
    "PLANNED REPLACEMENT with `shadcn/ui Button`.",
    "Existing props (variant, size, onClick, disabled, iconLeft, iconRight) will be mapped to `shadcn/ui Button` props or Tailwind CSS classes.",
    "`shadcn/ui Button` offers variants (default, destructive, outline, secondary, ghost, link) and sizes which will be leveraged."
  ],
  "interfaces_provided": [
    { "name": "Button (Custom - to be replaced)", "interface_type": "REACT_COMPONENT", "details": "Props: children, onClick, variant, size, disabled, iconLeft, iconRight, type", "notes": "This component is slated for replacement by `shadcn/ui Button`. Variant can be 'primary', 'secondary', 'outline', 'text', 'danger'. Size can be 'sm', 'md', 'lg'." }
  ],
  "requisites": [
    { "description": "Decision to use shadcn/ui as per plan_cycle0_mobile_styling_g150", "type": "PROJECT_DECISION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "shadcn/ui Button (target)", "version": "latest", "reason": "Target component for replacement." }
  ],
  "internal_dependencies": [
    "cycle1_primitive_typography_g132" 
  ],
  "dependents": [
    "cycle0_page_onboarding_g112",
    "cycle0_page_login_g112",
    "cycle0_page_signup_g112",
    "cycle0_page_home_g112",
    "cycle0_page_mealplan_g112",
    "cycle0_page_userprofile_g112",
    "cycle0_page_recipeupload_g112",
    "cycle0_page_subscription_g112",
    "cycle1_styleguide_page_g131",
    "cycle0_comp_modal_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g124. Uses Typography primitive (g142). Modal uses Button (g144). LoginPage uses Button (g148). Marked for replacement by shadcn/ui Button at g=152 as per plan_cycle0_mobile_styling_g150 and analysis cycle0_shadcn_analysis_g151.md."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import Typography from '../primitives/Typography';

/**
 * Button Component (References Figma Catalogue: C-01 - Button Variants)
 *
 * Purpose: A versatile and reusable button component for various actions throughout the application.
 *
 * Props:
 *   children: The content to be displayed inside the button (e.g., text, icon).
 *   onClick: Function to be called when the button is clicked.
 *   variant: String, determines the button's visual style. 
 *            Possible values: 'primary', 'secondary', 'outline', 'text', 'danger'. (Ref C-01_button_primary, C-01_button_secondary, etc.)
 *   size: String, determines the button's size.
 *         Possible values: 'sm' (small), 'md' (medium), 'lg' (large). (Ref C-01_button_size_sm, etc.)
 *   disabled: Boolean, if true, the button will be inactive and styled accordingly. (Ref C-01_button_disabled_state)
 *   iconLeft: ReactNode, an optional icon to display to the left of the children.
 *   iconRight: ReactNode, an optional icon to display to the right of the children.
 *   type: String, the native HTML button type (e.g., 'button', 'submit', 'reset'). Defaults to 'button'.
 *   className: String, optional additional CSS classes for custom styling.
 *   ...otherProps: Any other standard HTML button attributes.
 *
 * Structure:
 * - A single `<button>` HTML element.
 * - Dynamically applies CSS classes based on `variant`, `size`, and `disabled` props.
 * - Renders `iconLeft`, `children`, and `iconRight` in order.
 *
 * Checklist for future implementation:
 * [ ] Implement base styling for the button.
 * [ ] Implement styling variations for `primary`, `secondary`, `outline`, `text`, `danger` variants (Ref C-01_button_variants_style_guide).
 * [ ] Implement styling for `sm`, `md`, `lg` sizes (Ref C-01_button_size_guide).
 * [ ] Implement styling for the `disabled` state (Ref C-01_button_disabled_style).
 * [ ] Ensure proper rendering of `iconLeft` and `iconRight` with appropriate spacing.
 * [ ] Ensure accessibility (e.g., focus states, ARIA attributes if necessary).
 * [ ] (Optional) Add loading state with a spinner.
 */
const Button = ({
  children,
  onClick,
  variant = 'primary', // Default to 'primary'
  size = 'md',         // Default to 'medium'
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  className = '',
  ...otherProps
}) => {

  // Placeholder for dynamic class generation based on props
  // E.g., `btn btn-${variant} btn-${size} ${disabled ? 'btn-disabled' : ''} ${className}`
  const buttonClasses = `btn placeholder-btn btn-${variant} btn-${size} ${disabled ? 'disabled' : ''} ${className}`.trim();

  // Basic placeholder styles - to be replaced with actual CSS or styled-components
  const style = {
    padding: size === 'sm' ? '6px 12px' : size === 'lg' ? '10px 20px' : '8px 16px',
    fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1.25rem' : '1rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.65 : 1,
    border: '1px solid transparent',
    borderRadius: '4px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px', // Space between icon and text
    // Variant-specific styles (very basic placeholders)
    ...(variant === 'primary' && { backgroundColor: '#007bff', color: 'white', borderColor: '#007bff' }),
    ...(variant === 'secondary' && { backgroundColor: '#6c757d', color: 'white', borderColor: '#6c757d' }),
    ...(variant === 'outline' && { backgroundColor: 'transparent', color: '#007bff', borderColor: '#007bff' }),
    ...(variant === 'text' && { backgroundColor: 'transparent', color: '#007bff', border: 'none'}),
    ...(variant === 'danger' && { backgroundColor: '#dc3545', color: 'white', borderColor: '#dc3545' }),
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses} // Actual classes would be applied here from a CSS module or utility library
      style={style} // Inline styles are for placeholder demonstration only
      {...otherProps}
    >
      {iconLeft && <span className="btn-icon btn-icon-left">{iconLeft}</span>}
      {children && <Typography>{children}</Typography>}
      {iconRight && <span className="btn-icon btn-icon-right">{iconRight}</span>}
    </button>
  );
};

export default Button; 