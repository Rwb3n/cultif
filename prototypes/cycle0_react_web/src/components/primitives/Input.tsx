/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_primitive_input_g132",
  "version_tag": "0.1.2",
  "g_created": 134,
  "g_last_modified": 148,
  "description": "A primitive UI component for text-based form inputs, providing consistent styling, states (e.g., error, disabled), and accessibility features.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To serve as a foundational building block for various types of input fields (text, email, password, search, number) ensuring a consistent look and feel and reducing boilerplate. Based on the definition in cycle1_ui_primitives_definition_g131.md.",
  "key_logic_points": [
    "Supports common input types (`text`, `password`, `email`, `search`, `number`).",
    "Manages `value` and `onChange` for controlled component behavior.",
    "Provides visual variants (`outlined`, `filled`, `standard`).",
    "Includes `label`, `helperText`, and error state display.",
    "Allows for `leadingIcon` and `trailingIcon` (as ReactNode)."
  ],
  "interfaces_provided": [
    { 
      "name": "Input", 
      "interface_type": "REACT_COMPONENT", 
      "details": "Props: id, value, onChange, type, placeholder, label, fullWidth, disabled, error, helperText, leadingIcon, trailingIcon, variant, size, className, inputProps", 
      "notes": "Refer to cycle1_ui_primitives_definition_g131.md for detailed prop descriptions."
    }
  ],
  "requisites": [
    { "description": "Definition from cycle1_ui_primitives_definition_g131.md", "type": "DESIGN_SPECIFICATION" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "prop-types", "version": "^15.x.x", "reason": "For runtime prop type validation." }
  ],
  "internal_dependencies": [],
  "dependents": [
    "cycle1_styleguide_page_g131",
    "cycle0_page_login_g112"
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Placeholder for the Input primitive. Styling, theme integration, and full interactivity to be implemented. Dependents updated at g139 and g148. Note: leadingIcon/trailingIcon are ReactNode, not direct Icon component dependency."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';
import PropTypes from 'prop-types';
// import Icon from './Icon'; // Assuming Icon primitive is available for leading/trailing icons

/**
 * Input Component (Primitive)
 *
 * Purpose: Standardized base for text-based form input fields.
 * Based on definitions in `cycle1_ui_primitives_definition_g131.md`.
 *
 * Props (refer to definition doc for full details):
 *   id, value, onChange, type, placeholder, label, fullWidth, disabled, error,
 *   helperText, leadingIcon, trailingIcon, variant, size, className, inputProps.
 */
const Input = React.forwardRef(function Input(props, ref) {
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
    variant = 'outlined', // 'outlined', 'filled', 'standard'
    size = 'medium',      // 'small', 'medium'
    className = '',
    inputProps = {},
    style, // Extract style prop to merge it correctly
    ...otherProps // otherProps will be spread on the wrapper div
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

  // Placeholder styles - theme integration needed for actual styling
  const wrapperStyle = {
    display: fullWidth ? 'block' : 'inline-block',
    position: 'relative',
    // Add more wrapper styles based on variant, size etc.
    ...(variant === 'outlined' && { border: '1px solid gray', borderRadius: '4px' }),
    ...(error && variant === 'outlined' && { borderColor: 'red' }),
    ...(disabled && { opacity: 0.6, cursor: 'not-allowed' }),
    padding: size === 'small' ? '6px 8px' : '10px 12px',
    backgroundColor: variant === 'filled' ? '#f0f0f0' : 'transparent',
    ...(variant === 'standard' && { borderBottom: '1px solid gray' }),
    ...style, // Merge explicitly passed style prop
  };

  const inputStyle = {
    border: 'none',
    outline: 'none',
    width: '100%',
    padding: 0, // Padding is handled by wrapper for icon placement
    font: 'inherit',
    backgroundColor: 'transparent',
    // Add more input specific styles
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '4px',
    fontSize: '0.875rem',
    // Add more label styles
  };

  const helperTextStyle = {
    fontSize: '0.75rem',
    marginTop: '4px',
    color: error ? 'red' : 'gray',
    // Add more helper text styles
  };
  
  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    // Styles for icon containers if using them
  };

  return (
    <div className={wrapperClasses} style={wrapperStyle} {...otherProps}>
      {label && <label htmlFor={id} style={labelStyle}>{label}</label>}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {leadingIcon && <span style={{ marginRight: '8px', ...iconContainerStyle }}>{leadingIcon /* <Icon iconName={...} /> */}</span>}
        <input
          ref={ref}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          style={inputStyle}
          {...inputProps} // Spread inputProps onto the native input element
        />
        {trailingIcon && <span style={{ marginLeft: '8px', ...iconContainerStyle }}>{trailingIcon /* <Icon iconName={...} /> */}</span>}
      </div>
      {helperText && <div style={helperTextStyle}>{helperText}</div>}
    </div>
  );
});

Input.propTypes = {
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'email', 'search', 'number', 'tel', 'url']),
  placeholder: PropTypes.string,
  label: PropTypes.node,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.node,
  leadingIcon: PropTypes.node,
  trailingIcon: PropTypes.node,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  size: PropTypes.oneOf(['small', 'medium']),
  className: PropTypes.string,
  inputProps: PropTypes.object,
  style: PropTypes.object,
};

export default Input; 