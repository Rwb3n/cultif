/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_ui_primitives_definition_g131",
  "version_tag": "1.0.0",
  "g_created": 132,
  "g_last_modified": 132,
  "description": "Defines the specification for new primitive UI components to be created for the Cultif web application. These primitives will serve as foundational building blocks for more complex components and ensure UI consistency.",
  "artifact_type": "DOCUMENTATION",
  "status_in_lifecycle": "DESIGN",
  "purpose_statement": "To provide clear definitions, proposed props, and usage examples for each identified UI primitive, guiding their development and integration.",
  "key_logic_points": [
    "Defines Typography component for consistent text rendering.",
    "Defines Icon component for standardized icon usage.",
    "Defines Input component for basic form input fields.",
    "Defines Box, Stack, and Grid layout primitives for flexible and consistent spatial arrangements.",
    "Defines Link component for styled navigation and anchor elements."
  ],
  "interfaces_provided": [],
  "requisites": [
    { "description": "Analysis of existing Cycle 0 components and pages.", "type": "INTERNAL_INPUT" }
  ],
  "external_dependencies": [],
  "internal_dependencies": [
    "cycle0_comp_button_g112",
    "cycle0_comp_card_g112",
    "cycle0_comp_modal_g112",
    "cycle0_comp_header_g112",
    "cycle0_comp_footer_g112",
    "cycle0_page_login_g112",
    "cycle0_page_home_g112",
    "cycle0_page_recipedetail_g112"
  ],
  "dependents": [
    "plan_cycle1_ui_refinement_g131" 
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial definition of UI primitives based on review of existing components (g132)."
  }
}
ANNOTATION_BLOCK_END */

# UI Primitives Definition (Cycle 1 - g132)

This document outlines the specifications for new primitive UI components identified for development. These components aim to standardize common UI elements and patterns, promoting consistency and reusability across the Cultif web application.

## 1. Typography Component

*   **Proposed Artifact ID:** `cycle1_primitive_typography_g132`
*   **Proposed Filename:** `Typography.jsx`
*   **Purpose:** To provide a standardized way to render text elements with consistent styling options. It will wrap standard HTML text elements (p, span, h1-h6, etc.) or be usable as a general text styler.
*   **Essential Props:**
    *   `children`: `ReactNode` - The text content to render.
    *   `variant`: `string` - Defines the semantic and stylistic role of the text.
        *   Suggested values: `'h1'`, `'h2'`, `'h3'`, `'h4'`, `'h5'`, `'h6'`, `'subtitle1'`, `'subtitle2'`, `'body1'` (default), `'body2'`, `'caption'`, `'overline'`, `'button'`, `'link'`
    *   `component`: `string |ElementType` - The HTML element to use for the root node (e.g., `'p'`, `'span'`, `'div'`). Defaults based on `variant` (e.g., `variant='h1'` defaults to `component='h1'`).
    *   `color`: `string` - Text color.
        *   Suggested values: `'primary'`, `'secondary'`, `'textPrimary'`, `'textSecondary'`, `'error'`, `'inherit'`, or a direct CSS color string.
    *   `fontWeight`: `string | number` - `'light'`, `'regular'`, `'medium'`, `'bold'`, or numeric values (300, 400, 500, 700).
    *   `textAlign`: `string` - `'left'`, `'center'`, `'right'`, `'justify'`.
    *   `display`: `string` - CSS display property e.g. `'block'`, `'inline'`, `'inline-block'`.
    *   `noWrap`: `boolean` - If true, text will not wrap.
    *   `truncate`: `boolean | number` - If true, truncates with an ellipsis. If a number, specifies the number of lines before truncating (requires line-clamp CSS).
    *   `gutterBottom`: `boolean` - If true, adds a standard bottom margin.
    *   `paragraph`: `boolean` - If true, treats the text as a paragraph with appropriate margins.
    *   `className`: `string` - Additional CSS classes.
*   **Basic Variations/Examples:**
    *   `<Typography variant="h1">Page Title</Typography>`
    *   `<Typography variant="body1" color="textSecondary">This is a paragraph of secondary text.</Typography>`
    *   `<Typography variant="button" fontWeight="bold">Click Me</Typography>`
    *   `<Typography component="div" variant="caption" truncate={2}>Long caption text that might need to be truncated after two lines to save space.</Typography>`

## 2. Icon Component

*   **Proposed Artifact ID:** `cycle1_primitive_icon_g132`
*   **Proposed Filename:** `Icon.jsx`
*   **Purpose:** To provide a consistent way to display SVG icons or icons from a font library.
*   **Essential Props:**
    *   `iconName`: `string` - Identifier for the icon (e.g., `'search'`, `'close'`, `'arrow-down'`, `'star-filled'`). This will map to an actual SVG or font character.
    *   `size`: `string | number` - `'small'`, `'medium'` (default), `'large'`, or a specific pixel/rem value.
    *   `color`: `string` - Icon color.
        *   Suggested values: `'primary'`, `'secondary'`, `'action'`, `'disabled'`, `'error'`, `'inherit'`, or a direct CSS color string.
    *   `titleAccess`: `string` - Accessibility title for the icon (passed to `<title>` tag for SVGs or `aria-label`).
    *   `className`: `string` - Additional CSS classes.
*   **Basic Variations/Examples:**
    *   `<Icon iconName="search" />`
    *   `<Icon iconName="close" size="small" color="action" />`
    *   `<Icon iconName="custom-logo-svg" size={24} />`
*   **Notes:** The implementation will need to decide on an icon system (e.g., library like `react-icons`, custom SVG sprite, or individual SVG components).

## 3. Input Component (Base)

*   **Proposed Artifact ID:** `cycle1_primitive_input_g132`
*   **Proposed Filename:** `Input.jsx` (or `FormInputBase.jsx`)
*   **Purpose:** To provide a styled and accessible base for text-based form input fields.
*   **Essential Props:**
    *   `id`: `string` - For label association.
    *   `value`: `string | number` - The input value (controlled component).
    *   `onChange`: `function` - Callback for value changes.
    *   `type`: `string` - HTML input type (e.g., `'text'`, `'password'`, `'email'`, `'search'`, `'number'`). Default: `'text'`.
    *   `placeholder`: `string` - Placeholder text.
    *   `label`: `string | ReactNode` - Optional visible label.
    *   `fullWidth`: `boolean` - If true, takes up the full width of its container.
    *   `disabled`: `boolean` - If true, the input is disabled.
    *   `error`: `boolean` - If true, styles the input to indicate an error.
    *   `helperText`: `string | ReactNode` - Text displayed below the input (e.g., for error messages or hints).
    *   `leadingIcon`: `ReactNode` - An icon or element to display at the start of the input.
    *   `trailingIcon`: `ReactNode` - An icon or element to display at the end of the input (e.g., password visibility toggle, clear button).
    *   `variant`: `string` - Visual style of the input.
        *   Suggested values: `'outlined'` (default), `'filled'`, `'standard'` (underline only).
    *   `size`: `string` - `'small'`, `'medium'` (default).
    *   `className`: `string` - Additional CSS classes for the wrapper.
    *   `inputProps`: `object` - Props to spread onto the native `<input>` element itself.
*   **Basic Variations/Examples:**
    *   `<Input label="Email Address" type="email" fullWidth />`
    *   `<Input type="password" placeholder="Password" error helperText="Incorrect password." />`
    *   `<Input type="search" leadingIcon={<Icon iconName="search" />} />`

## 4. Layout Primitives

### 4.a. Box Component

*   **Proposed Artifact ID:** `cycle1_primitive_box_g132`
*   **Proposed Filename:** `Box.jsx`
*   **Purpose:** A fundamental, theme-aware layout component (typically a `div`) that provides shorthand access to common CSS utility props for spacing, sizing, colors, and more.
*   **Essential Props (examples, many more from system-props like libraries):**
    *   `children`: `ReactNode`.
    *   `component`: `string | ElementType` - HTML element to render as. Default: `'div'`.
    *   `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl`: `string | number` - Padding (overall, x-axis, y-axis, top, right, bottom, left). Values can be theme spacing keys or direct CSS values.
    *   `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml`: `string | number` - Margin.
    *   `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight`: `string | number`.
    *   `display`: `string` - (`'flex'`, `'block'`, `'inline-flex'`, etc.).
    *   `bgcolor`: `string` - Background color (theme color key or CSS value).
    *   `color`: `string` - Text color.
    *   `border`: `string | number` - E.g., `1` (for 1px solid theme border), `'1px solid red'`.
    *   `borderColor`: `string`.
    *   `borderRadius`: `string | number`.
    *   `boxShadow`: `string | number` - Theme shadow key or CSS value.
    *   `className`: `string`.
    *   `sx`: `object` - Prop for custom styles that can access theme values (common in libraries like MUI, Chakra UI).
*   **Basic Variations/Examples:**
    *   `<Box p={2} bgcolor="primary.light">Content</Box>`
    *   `<Box display="flex" justifyContent="space-between" alignItems="center" width="100%">...</Box>`

### 4.b. Stack Component

*   **Proposed Artifact ID:** `cycle1_primitive_stack_g132`
*   **Proposed Filename:** `Stack.jsx`
*   **Purpose:** A layout component for arranging items in a one-dimensional stack (either vertically or horizontally) with consistent spacing.
*   **Essential Props:**
    *   `children`: `ReactNode`.
    *   `direction`: `string` - `'row'` or `'column'` (default).
    *   `spacing`: `string | number` - Spacing between items (theme spacing key or CSS value).
    *   `alignItems`: `string` - CSS `align-items` property.
    *   `justifyContent`: `string` - CSS `justify-content` property.
    *   `dividers`: `boolean | ReactNode` - If true, adds a default divider between items. Can also be a custom ReactNode.
    *   `wrap`: `boolean | string` - Whether to wrap items (`'wrap'`, `'nowrap'`).
    *   `className`: `string`.
*   **Basic Variations/Examples:**
    *   `<Stack spacing={2}><Item1 /><Item2 /></Stack>` (vertical by default)
    *   `<Stack direction="row" spacing={1} alignItems="center"><Button /><Button /></Stack>`

### 4.c. Grid Component

*   **Proposed Artifact ID:** `cycle1_primitive_grid_g132`
*   **Proposed Filename:** `Grid.jsx`
*   **Purpose:** A layout component based on a 12-column grid system for creating responsive 2D layouts.
*   **Essential Props:**
    *   `children`: `ReactNode`.
    *   `container`: `boolean` - If true, this is a grid container.
    *   `item`: `boolean` - If true, this is a grid item.
    *   `spacing`: `string | number` - Spacing between grid items (for containers).
    *   `direction`: `string` - `'row'` (default) or `'column'` (for containers).
    *   `alignItems`: `string` (for containers).
    *   `justifyContent`: `string` (for containers).
    *   `xs`, `sm`, `md`, `lg`, `xl`: `boolean | number | 'auto'` - Responsive column sizes for grid items (e.g., `xs={12}` for full width on extra-small screens, `md={6}` for half width on medium). `true` means auto-layout.
    *   `className`: `string`.
*   **Basic Variations/Examples:**
    *   ```jsx
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}><MainContent /></Grid>
          <Grid item xs={12} md={4}><Sidebar /></Grid>
        </Grid>
        ```

## 5. Link Component

*   **Proposed Artifact ID:** `cycle1_primitive_link_g132`
*   **Proposed Filename:** `Link.jsx`
*   **Purpose:** To provide a styled wrapper around `react-router-dom`'s `Link`/`NavLink` components and standard `<a>` tags, ensuring consistent link appearance and behavior.
*   **Essential Props:**
    *   `children`: `ReactNode`.
    *   `to`: `string | object` - Path or location object for internal navigation (uses `react-router-dom/Link`).
    *   `href`: `string` - URL for external links (uses `<a>`).
    *   `variant`: `string` - Stylistic variant.
        *   Suggested values: `'default'` (inherits typography color, underlines on hover), `'nav'`, `'buttonLike'`, `'subtle'`.
    *   `color`: `string` - Link color (theme color key or CSS value). Overrides typography color if specified.
    *   `underline`: `string` - Controls underline behavior.
        *   Suggested values: `'none'`, `'hover'` (default), `'always'`.
    *   `component`: `ElementType` - If you need to wrap another component but give it link behaviors.
    *   `target`: `string` - For `<a>` tags (e.g., `'_blank'`).
    *   `rel`: `string` - For `<a>` tags.
    *   `activeClassName`: `string` - For NavLink behavior.
    *   `end`: `boolean` - For NavLink matching behavior.
    *   `className`: `string`.
*   **Basic Variations/Examples:**
    *   `<Link to="/home">Home</Link>`
    *   `<Link href="https://example.com" target="_blank" variant="subtle">External Site</Link>`
    *   `<Link to="/settings" variant="nav" activeClassName="current-nav-item">Settings</Link>` (implies NavLink usage internally)
*   **Notes:** This component would internally decide whether to render a `react-router-dom` `Link`, `NavLink`, or an `<a>` tag based on the props provided (`to` vs `href`). It might use the `Typography` component internally for text styling.

This document will be used to guide the creation of these primitive components in subsequent tasks. 