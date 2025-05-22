/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle1_styleguide_page_g131",
  "version_tag": "0.1.2",
  "g_created": 134,
  "g_last_modified": 147,
  "description": "A React component page that serves as a UI visual library. It imports and renders examples of all defined primitive and common UI components, showcasing their variations and usage.",
  "artifact_type": "CODE_MODULE", 
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a centralized, interactive reference for all UI components in the Cultif application, facilitating stakeholder review, developer consistency, and a visual source of truth for the component set. This page will be accessible via a dedicated route.",
  "key_logic_points": [
    "Imports all primitive components (Typography, Icon, Input, Box, Stack, Grid, Link).",
    "Imports existing common components (e.g., Button, Card, Modal, Header, Footer).",
    "Renders sections for each component, showcasing various props and states.",
    "Designed to be easily navigable and clear for visual inspection of components."
  ],
  "interfaces_provided": [
    { 
      "name": "StyleGuidePage", 
      "interface_type": "REACT_PAGE_COMPONENT", 
      "details": "Renders a collection of UI components for demonstration purposes.", 
      "notes": "Accessible via a route defined in AppRouter.jsx."
    }
  ],
  "requisites": [
    { "description": "All primitive components from pc1uir_task_002 must be scaffolded.", "type": "INTERNAL_DEPENDENCY" },
    { "description": "Paths to existing common components need to be verified and components imported.", "type": "INTERNAL_DEPENDENCY" }
  ],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." }
  ],
  "internal_dependencies": [
    "cycle1_primitive_typography_g132",
    "cycle1_primitive_icon_g132",
    "cycle1_primitive_input_g132",
    "cycle1_primitive_box_g132",
    "cycle1_primitive_stack_g132",
    "cycle1_primitive_grid_g132",
    "cycle1_primitive_link_g132",
    "cycle0_comp_button_g112",
    "cycle0_comp_card_g112",
    "cycle0_comp_modal_g112",
    "cycle0_comp_header_g112",
    "cycle0_comp_footer_g112"
  ],
  "dependents": [
    "cycle0_router_config_g112" // AppRouter will link to this page
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g134. Common components imported at g135. Internal dependencies list updated at g147 based on visible imports; full verification pending complete file view. Assumes all listed dependencies correctly list StyleGuidePage as a dependent."
  }
}
ANNOTATION_BLOCK_END */

import React from 'react';

// Primitive Components (assuming they are in ../components/primitives/)
import Typography from '../components/primitives/Typography';
import Icon from '../components/primitives/Icon';
import Input from '../components/primitives/Input';
import Box from '../components/primitives/Box';
import Stack from '../components/primitives/Stack';
import Grid from '../components/primitives/Grid';
import Link from '../components/primitives/Link';

// Common Components
import Button from '../components/common/Button'; 
import Card from '../components/common/Card';     
import Modal from '../components/common/Modal';    

// Layout Components
import Header from '../components/layout/Header';   
import Footer from '../components/layout/Footer';   

const StyleGuidePage = () => {
  // Placeholder: Structure for showcasing components
  // Each component should have its own section with examples of different variants and props.

  const sectionStyle = {
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '8px',
  };

  const subSectionStyle = {
    marginTop: '20px',
    paddingTop: '10px',
    borderTop: '1px dashed #ddd',
  };

  return (
    <Box p={3} className="style-guide-page">
      <Typography variant="h1" component="h1" gutterBottom>
        Cultif UI Component Visual Library
      </Typography>

      <Typography variant="body1" paragraph>
        This page showcases the various UI components available in the Cultif application.
        It includes primitive components, common reusable components, and layout structures.
      </Typography>

      {/* Section for Primitive Components */}
      <Box sx={sectionStyle} className="primitives-section">
        <Typography variant="h2" component="h2" gutterBottom>Primitive Components</Typography>
        
        {/* Typography Primitive Examples */}
        <Box sx={subSectionStyle} className="typography-examples">
          <Typography variant="h3" component="h3" gutterBottom>Typography</Typography>
          <Stack spacing={2}>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="subtitle1">Subtitle 1: Lorem ipsum dolor sit amet.</Typography>
            <Typography variant="subtitle2">Subtitle 2: Consectetur adipiscing elit.</Typography>
            <Typography variant="body1">Body 1: The quick brown fox jumps over the lazy dog. This is standard paragraph text.</Typography>
            <Typography variant="body2">Body 2: A slightly different paragraph style, perhaps for less emphasis.</Typography>
            <Typography variant="button" fontWeight="bold">Button Text Style</Typography>
            <Typography variant="caption">Caption Text: Used for small print or annotations.</Typography>
            <Typography variant="overline">OVERLINE TEXT</Typography>
            <Typography variant="body1" color="primary">Primary Color Text</Typography>
            <Typography variant="body1" color="textSecondary">Secondary Text Color</Typography>
            <Typography variant="body1" truncate={true}>This is a very long line of text that will be truncated with an ellipsis if it exceeds the available width of its container.</Typography>
          </Stack>
        </Box>

        {/* Icon Primitive Examples */}
        <Box sx={subSectionStyle} className="icon-examples">
          <Typography variant="h3" component="h3" gutterBottom>Icon</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Icon iconName="search" titleAccess="Search Icon" />
            <Icon iconName="close" size="small" color="action" titleAccess="Close Icon" />
            <Icon iconName="star-filled" size="large" color="gold" titleAccess="Star Icon" />
            <Icon iconName="arrow-down" size={24} color="primary" titleAccess="Arrow Down Icon" />
            <Icon iconName="settings" size="medium" color="#757575" titleAccess="Settings Icon (custom color)"/>
          </Stack>
        </Box>

        {/* Input Primitive Examples */}
        <Box sx={subSectionStyle} className="input-examples">
          <Typography variant="h3" component="h3" gutterBottom>Input</Typography>
          <Stack spacing={3} sx={{ maxWidth: '400px'}}>
            <Input label="Email Address" type="email" placeholder="name@example.com" fullWidth />
            <Input label="Password" type="password" placeholder="Enter your password" variant="filled" fullWidth />
            <Input 
              label="Search Query"
              type="search" 
              placeholder="Search..." 
              variant="standard"
              leadingIcon={<Icon iconName="search" size="small"/>} 
              helperText="Type your query and press Enter."
              fullWidth 
            />
            <Input label="Disabled Input" placeholder="Cannot edit" disabled fullWidth />
            <Input label="Error State" placeholder="Invalid input" error helperText="This field has an error." fullWidth />
          </Stack>
        </Box>

        {/* Box Primitive Examples */}
        <Box sx={subSectionStyle} className="box-examples">
          <Typography variant="h3" component="h3" gutterBottom>Box</Typography>
          <Stack spacing={2} direction="row" wrap="wrap">
            <Box p={2} bgcolor="#e3f2fd" color="#1e88e5">Padding=2, Primary Light BG</Box>
            <Box m={1} border="1px solid red" p={1}>Margin=1, Red Border, Padding=1</Box>
            <Box width={1/2} bgcolor="#f5f5f5" p={2}>Width=50% (1/2)</Box>
            <Box height="100px" display="flex" alignItems="center" justifyContent="center" bgcolor="#fff3e0">Fixed Height, Flex Centered</Box>
            <Box boxShadow={1} p={2}>Box with Shadow (level 1)</Box>
          </Stack>
        </Box>

        {/* Stack Primitive Examples */}
        <Box sx={subSectionStyle} className="stack-examples">
          <Typography variant="h3" component="h3" gutterBottom>Stack</Typography>
          <Typography variant="body2">Vertical Stack (default):</Typography>
          <Stack spacing={1} sx={{border: '1px solid lightblue', p:1}}>
            <Box bgcolor="#ffebee" p={1}>Item 1</Box>
            <Box bgcolor="#e8f5e9" p={1}>Item 2</Box>
            <Box bgcolor="#e3f2fd" p={1}>Item 3</Box>
          </Stack>
          <Typography variant="body2" sx={{mt: 2}}>Horizontal Stack with Dividers:</Typography>
          <Stack direction="row" spacing={2} dividers sx={{border: '1px solid lightgreen', p:1}}>
            <Box bgcolor="#fffde7" p={1}>Item A</Box>
            <Box bgcolor="#fce4ec" p={1}>Item B</Box>
            <Box bgcolor="#f3e5f5" p={1}>Item C</Box>
          </Stack>
        </Box>

        {/* Grid Primitive Examples */}
        <Box sx={subSectionStyle} className="grid-examples">
          <Typography variant="h3" component="h3" gutterBottom>Grid</Typography>
          <Grid container spacing={2} sx={{border: '1px solid orange', p:1}}>
            <Grid item xs={12} sm={6} md={4}><Box bgcolor="#eceff1" p={2}>Item xs=12 sm=6 md=4</Box></Grid>
            <Grid item xs={12} sm={6} md={4}><Box bgcolor="#cfd8dc" p={2}>Item xs=12 sm=6 md=4</Box></Grid>
            <Grid item xs={12} sm={12} md={4}><Box bgcolor="#b0bec5" p={2}>Item xs=12 sm=12 md=4</Box></Grid>
          </Grid>
          <Grid container spacing={1} direction="column" sx={{border: '1px solid purple', p:1, mt:2}}>
            <Grid item><Box bgcolor="#d1c4e9" p={1}>Column Item 1</Box></Grid>
            <Grid item><Box bgcolor="#b39ddb" p={1}>Column Item 2</Box></Grid>
          </Grid>
        </Box>

        {/* Link Primitive Examples */}
        <Box sx={subSectionStyle} className="link-examples">
          <Typography variant="h3" component="h3" gutterBottom>Link</Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            <Link to="/some-internal-page">Internal Link (to)</Link>
            <Link href="https://example.com" target="_blank">External Link (href)</Link>
            <Link to="/nav-link-example" variant="nav" activeClassName="active-nav-style">NavLink Style</Link>
            <Link component="button" onClick={() => alert('Custom component link clicked!')} variant="buttonLike">
              Custom Component as Link
            </Link>
          </Stack>
          {/* To test NavLink active style, you might need a dummy route and navigation for /nav-link-example */}
        </Box>

      </Box>

      {/* Section for Common Components (TODO) */}
      <Box sx={sectionStyle} className="common-components-section">
        <Typography variant="h2" component="h2" gutterBottom>Common Components</Typography>
        
        {/* Button Examples */}
        <Box sx={subSectionStyle} className="button-examples">
          <Typography variant="h3" component="h3" gutterBottom>Button</Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            {/* Placeholder: Add Button examples once its props are known/standardized */}
            <Button>Default Button</Button>
            {/* <Button variant="contained">Contained</Button> */}
            {/* <Button variant="outlined">Outlined</Button> */}
            {/* <Button color="primary">Primary</Button> */}
          </Stack>
        </Box>

        {/* Card Examples */}
        <Box sx={subSectionStyle} className="card-examples">
          <Typography variant="h3" component="h3" gutterBottom>Card</Typography>
          {/* Placeholder: Add Card examples once its structure and props are known */}
          <Card>
            <Typography variant="h5">Sample Card Title</Typography>
            <Typography variant="body2">This is some sample content within a card.</Typography>
          </Card>
        </Box>

        {/* Modal Examples */}
        <Box sx={subSectionStyle} className="modal-examples">
          <Typography variant="h3" component="h3" gutterBottom>Modal</Typography>
          {/* Placeholder: Triggering and displaying a Modal usually requires state management */}
          {/* <Button onClick={() => setModalOpen(true)}>Open Modal</Button> */}
          {/* <Modal open={isModalOpen} onClose={() => setModalOpen(false)} title="Sample Modal">
            <Typography variant="body1">This is the content of the modal.</Typography>
          </Modal> */}
          <Typography variant="body2">Modal examples will require state management to demonstrate.</Typography>
        </Box>

      </Box>

      {/* Section for Layout Components (TODO) */}
      <Box sx={sectionStyle} className="layout-components-section">
        <Typography variant="h2" component="h2" gutterBottom>Layout Components</Typography>

        {/* Header Example */}
        <Box sx={subSectionStyle} className="header-example">
          <Typography variant="h3" component="h3" gutterBottom>Header</Typography>
          {/* Placeholder: Header might require app context or props */}
          <Header />
        </Box>

        {/* Footer Example */}
        <Box sx={subSectionStyle} className="footer-example">
          <Typography variant="h3" component="h3" gutterBottom>Footer</Typography>
          {/* Placeholder: Footer might require app context or props */}
          <Footer />
        </Box>

      </Box>

    </Box>
  );
};

export default StyleGuidePage; 