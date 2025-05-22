/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_modal_g112",
  "version_tag": "0.1.0",
  "g_created": 124,
  "g_last_modified": 124,
  "description": "A reusable modal dialog component for displaying content in an overlay.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a consistent way to present focused information or require user interaction without navigating away from the current page. References Figma Catalogue: C-03 (Modal/Dialog).",
  "key_logic_points": [
    "Controlled by an `isOpen` prop.",
    "Includes an `onClose` callback for dismissing the modal.",
    "Can display an optional title.",
    "Content is passed as children.",
    "Includes an overlay to obscure the background content.",
    "Handles accessibility concerns (e.g., focus trapping, ARIA attributes)."
  ],
  "interfaces_provided": [
    { "name": "Modal", "interface_type": "REACT_COMPONENT", "details": "Props: isOpen, onClose, title, children, size, className, disableBackdropClick, showCloseButton", "notes": "Size could be 'sm', 'md', 'lg', 'full'. Ref C-03_modal_standard, C-03_modal_large." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-dom", "version": "^18.2.0", "reason": "For creating a portal to render the modal outside the main DOM hierarchy." }
  ],
  "internal_dependencies": [
    "cycle0_comp_button_g112" // Potentially for a close button
  ],
  "dependents": [
    "cycle0_page_mealplan_g112", // For recipe picker modal
    "cycle0_page_subscription_g112" // For paywall/upsell modal
    // Potentially many other components needing modal dialogs.
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g124. Placeholder for a common modal. Styling, portal integration, and full prop/accessibility handling to be implemented. Based on C-03."
  }
}
ANNOTATION_BLOCK_END */

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// It's good practice to have a dedicated DOM element for modals
// This should ideally be in your public/index.html or created dynamically once.
const modalRoot = document.getElementById('modal-root') || document.body;

/**
 * Modal Component (References Figma Catalogue: C-03 - Modal/Dialog)
 *
 * Purpose: Displays content in a layer above the main page, typically for focused tasks, dialogs, or information.
 *
 * Props:
 *   isOpen: Boolean, controls the visibility of the modal.
 *   onClose: Function, called when the modal requests to be closed (e.g., by clicking the close button or overlay).
 *   title: String or ReactNode, optional title for the modal header.
 *   children: ReactNode, the main content of the modal.
 *   size: String, 'sm', 'md' (default), 'lg', 'full'. (Ref C-03_modal_sizing_guide)
 *   className: String, optional additional CSS class for the modal content container.
 *   disableBackdropClick: Boolean, if true, clicking the backdrop will not trigger onClose. Defaults to false.
 *   showCloseButton: Boolean, if true, displays a default close button in the header. Defaults to true.
 *   footerContent: ReactNode, optional content for the modal's footer (e.g., action buttons).
 *
 * Structure:
 * - Uses React Portal to render the modal into `modalRoot` (typically outside the main app div).
 * - Overlay `<div>` to cover the page content.
 * - Modal content `<div>` container.
 *   - Optional header with title and close button.
 *   - Main content area for children.
 *   - Optional footer area.
 *
 * Checklist for future implementation:
 * [ ] Ensure `modalRoot` element exists or is created if it doesn't (or provide clear setup instructions).
 * [ ] Implement base styling for overlay and modal container (Ref C-03_modal_base_style).
 * [ ] Implement different `size` styles ('sm', 'md', 'lg', 'full') - Ref C-03_modal_sizing.
 * [ ] Style modal header (title, close button) (Ref C-03_modal_header).
 * [ ] Style modal footer if `footerContent` is provided (Ref C-03_modal_footer).
 * [ ] Handle `disableBackdropClick` prop.
 * [ ] Implement focus trapping within the modal when open.
 * [ ] Handle Escape key press to close the modal.
 * [ ] Add ARIA attributes for accessibility (e.g., `aria-modal`, `aria-labelledby`, `aria-describedby`).
 * [ ] Add transitions/animations for opening and closing (Ref C-03_modal_transitions).
 */
const Modal = ({
  isOpen,
  onClose,
  title = null,
  children,
  size = 'md',
  className = '',
  disableBackdropClick = false,
  showCloseButton = true,
  footerContent = null,
}) => {

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent background scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset'; // Ensure body scroll is reset
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = () => {
    if (!disableBackdropClick) {
      onClose();
    }
  };

  // Placeholder for dynamic class generation
  const modalClasses = `modal-content placeholder-modal modal-${size} ${className}`.trim();

  // Basic placeholder styles - these should be in a CSS file
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000, // Ensure it's above other content
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto',
    // Width based on size prop (very basic placeholder)
    width: size === 'sm' ? '300px' : size === 'lg' ? '800px' : size === 'full' ? '95vw' : '500px',
    maxWidth: '95vw',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: title ? '1px solid #eee' : 'none',
    paddingBottom: title ? '10px' : '0',
    marginBottom: '15px',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '1.5rem',
    // Add C-03_modal_typography_title styles
  };

  const closeButtonStyle = {
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    lineHeight: '1',
  };
  
  const footerStyle = {
    borderTop: '1px solid #eee',
    paddingTop: '15px',
    marginTop: '20px',
    textAlign: 'right',
    // Add C-03_modal_footer_styles
  };

  return ReactDOM.createPortal(
    <div style={overlayStyle} onClick={handleBackdropClick} role="presentation">
      <div 
        style={contentStyle} 
        className={modalClasses} 
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click from triggering if content is clicked
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {(title || showCloseButton) && (
          <div style={headerStyle} className="modal-header">
            {title && <h2 id="modal-title" style={titleStyle}>{title}</h2>}
            {showCloseButton && (
              <button type="button" onClick={onClose} style={closeButtonStyle} aria-label="Close modal">
                &times;
              </button>
            )}
          </div>
        )}
        <div className="modal-body">
          {children}
        </div>
        {footerContent && (
          <div style={footerStyle} className="modal-footer">
            {footerContent}
          </div>
        )}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal; 