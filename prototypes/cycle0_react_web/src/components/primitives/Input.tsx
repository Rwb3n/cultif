/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_input_g132",
  "version_tag": "0.1.3-deprecated-tsx",
  "g_created": 134,
  "g_last_modified": 160,
  "description": "DEPRECATED (TSX): This component is planned for deprecation. It will be replaced by the shadcn/ui Input component. Original description: A primitive UI component for text-based form inputs, providing consistent styling, states (e.g., error, disabled), and accessibility features. Now migrated to TSX.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEPRECATED",
  "purpose_statement": "DEPRECATED (TSX): This component will be replaced by the shadcn/ui Input component to align with the project's UI strategy. Original purpose: To serve as a foundational building block for various types of input fields... Now in TSX format.",
  "key_logic_points": [
    "PLANNED FOR DEPRECATION in favor of shadcn/ui Input component.",
    "Migrated to TSX format as part of plan_jsx_to_tsx_g157.",
    "Supports common input types (`text`, `password`, `email`, `search`, `number`).",
    "Manages `value` and `onChange` for controlled component behavior.",
    "Provides visual variants (`outlined`, `filled`, `standard`) - basic styling implemented.",
    "Includes `label`, `helperText`, and error state display - basic styling implemented.",
    "Allows for `leadingIcon` and `trailingIcon` (as ReactNode) - basic styling implemented."
  ],
  "interfaces_provided": [
    { 
      "name": "Input", 
      "interface_type": "REACT_COMPONENT", 
      "details": "Props: id, value, onChange, type, placeholder, label, fullWidth, disabled, error, helperText, leadingIcon, trailingIcon, variant, size, className, inputProps, style", 
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions. THIS COMPONENT IS BEING DEPRECATED."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^19.1.0", "reason": "Core React library for building user interfaces." },
    { "name": "@types/react", "version": "^19.1.5", "reason": "TypeScript definitions for React." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle1_styleguide_page_g131",
    "cycle0_page_login_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Marked for DEPRECATION and migrated to TSX at g=160 as per plan_cycle0_mobile_styling_g150. To be replaced by shadcn/ui Input."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';

interface InputProps {
  id?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email' | 'search' | 'number' | 'tel' | 'url';
  placeholder?: string;
  label?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  className?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  style?: React.CSSProperties;
  // Allow any other props to be passed through
  [key: string]: any;
}

/**
 * Input Component (Primitive - DEPRECATED)
 *
 * Purpose: Standardized base for text-based form input fields.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const {
    id,
    value,
    onChange,
    type = 'text',
    placeholder,
    label,
    fullWidth = false,
    disabled = false,
    error = false,
    helperText,
    leadingIcon,
    trailingIcon,
    variant = 'outlined',
    size = 'medium',
    className = '',
    inputProps = {},
    style,
    ...otherProps
  } = props;

  const wrapperClasses = `primitive-input-wrapper 
    input-variant-${variant} 
    input-size-${size} 
    ${disabled ? 'input-disabled' : ''} 
    ${error ? 'input-error' : ''} 
    ${fullWidth ? 'input-fullwidth' : ''} 
    ${leadingIcon ? 'input-with-leading-icon' : ''} 
    ${trailingIcon ? 'input-with-trailing-icon' : ''} 
    ${className}`.trim().replace(/\s+/g, ' ');

  const wrapperStyle: React.CSSProperties = {
    display: fullWidth ? 'block' : 'inline-block',
    position: 'relative',
    ...(variant === 'outlined' && { border: '1px solid gray', borderRadius: '4px' }),
    ...(error && variant === 'outlined' && { borderColor: 'red' }),
    ...(disabled && { opacity: 0.6, cursor: 'not-allowed' }),
    padding: size === 'small' ? '6px 8px' : '10px 12px',
    backgroundColor: variant === 'filled' ? '#f0f0f0' : 'transparent',
    ...(variant === 'standard' && { borderBottom: '1px solid gray' }),
    ...style,
  };

  const inputStyle: React.CSSProperties = {
    border: 'none',
    outline: 'none',
    width: '100%',
    padding: 0,
    font: 'inherit',
    backgroundColor: 'transparent',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '4px',
    fontSize: '0.875rem',
  };

  const helperTextStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    marginTop: '4px',
    color: error ? 'red' : 'gray',
  };
  
  const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div className={wrapperClasses} style={wrapperStyle} {...otherProps}>
      {label && <label htmlFor={id} style={labelStyle}>{label}</label>}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {leadingIcon && <span style={{ marginRight: '8px', ...iconContainerStyle }}>{leadingIcon}</span>}
        <input
          ref={ref}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          style={inputStyle}
          {...inputProps}
        />
        {trailingIcon && <span style={{ marginLeft: '8px', ...iconContainerStyle }}>{trailingIcon}</span>}
      </div>
      {helperText && <div style={helperTextStyle}>{helperText}</div>}
    </div>
  );
});

export default Input; 