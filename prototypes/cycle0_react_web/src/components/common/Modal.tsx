/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_comp_modal_g112",
  "version_tag": "0.1.3-deprecated-tsx",
  "g_created": 124,
  "g_last_modified": 160,
  "description": "DEPRECATED (TSX): This custom modal component is now deprecated. It will be replaced by shadcn/ui Dialog or Drawer components. Original description: A reusable modal dialog component for displaying content in an overlay. Uses Typography for title and Button for close action.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEPRECATED",
  "purpose_statement": "DEPRECATED (TSX): Replaced by shadcn/ui Dialog or Drawer for consistency with the new UI library and Tailwind CSS integration, supporting mobile-first UX. Original purpose: To provide a consistent way to present focused information or require user interaction without navigating away from the current page. References Figma Catalogue: C-03 (Modal/Dialog).",
  "key_logic_points": [
    "DEPRECATED and REPLACED by `shadcn/ui Dialog` or `shadcn/ui Drawer`.",
    "Original dependencies on Typography and custom Button are historical as those are also deprecated."
  ],
  "interfaces_provided": [
    { "name": "Modal (Custom - DEPRECATED)", "interface_type": "REACT_COMPONENT", "details": "Props: isOpen, onClose, title, children, size, className, disableBackdropClick, showCloseButton, footerContent", "notes": "This component is DEPRECATED. Use `shadcn/ui Dialog` or `Drawer`." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." },
    { "name": "react-dom", "version": "^18.2.0", "reason": "For creating a portal (historical)." },
    { "name": "@types/react-dom", "version": "^18.3.0", "reason": "TypeScript definitions for react-dom." }
  ],
  "internal_dependencies": [
    "cycle0_comp_button_g112", // Historical dependency, Button is deprecated
    "cycle1_primitive_typography_g132" // Historical dependency, Typography is deprecated
  ],
  "dependents": [
    "cycle0_page_mealplan_g112", 
    "cycle0_page_subscription_g112", 
    "cycle1_styleguide_page_g131"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Marked as DEPRECATED at g=160. To be replaced by shadcn/ui Dialog (artifact shadcn_ui_dialog_g160) or Drawer (artifact shadcn_ui_drawer_g160). Original comment: Initial scaffold by Hybrid_AI_OS g124. Based on C-03. Dependents updated at g140. Title now uses Typography primitive, and close button uses common Button component (g144). Full prop/accessibility handling and styling to be implemented."
  }
}
ANNOTATION_BLOCK_END */

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Typography from '../primitives/Typography'; // Typography is deprecated
import Button from './Button'; // Custom Button is deprecated

// It's good practice to have a dedicated DOM element for modals
// This should ideally be in your public/index.html or created dynamically once.
const modalRoot = document.getElementById('modal-root') || document.body;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode | string | null;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  disableBackdropClick?: boolean;
  showCloseButton?: boolean;
  footerContent?: React.ReactNode | null;
}

/**
 * Modal Component (DEPRECATED - Replaced by shadcn/ui Dialog/Drawer)
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
const Modal: React.FC<ModalProps> = ({
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
  console.warn(
    `Custom Modal component (artifact cycle0_comp_modal_g112) is deprecated. ` +
    `Use shadcn/ui Dialog (artifact shadcn_ui_dialog_g160) or Drawer (artifact shadcn_ui_drawer_g160) instead.`
  );

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc as EventListener);
      // Prevent background scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc as EventListener);
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
  const overlayStyle: React.CSSProperties = {
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

  const contentStyle: React.CSSProperties = {
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

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: title ? '1px solid #eee' : 'none',
    paddingBottom: title ? '10px' : '0',
    marginBottom: '15px',
  };

  const footerStyle: React.CSSProperties = {
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
            {title && <Typography variant="h5" component="h2" id="modal-title">{title}</Typography>}
            {showCloseButton && (
              <Button 
                variant="text" 
                onClick={onClose} 
                aria-label="Close modal" 
                style={{ padding: '0.25rem', fontSize: '1.5rem', minWidth: 'auto', lineHeight: '1' }} // Minimal style for text button
              >
                &times;
              </Button>
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