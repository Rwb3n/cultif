/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_recipeupload_g112",
  "version_tag": "0.1.0",
  "g_created": 123,
  "g_last_modified": 123,
  "description": "Placeholder component for the Recipe Upload page. This page will guide users through a multi-step process to upload their recipes.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To provide a user-friendly interface for content creators to add new recipes to the platform. References Figma Catalogue ID: T-13.",
  "key_logic_points": [
    "Multi-step form/wizard for recipe creation (e.g., Basic Info, Ingredients, Instructions, Media, Review).",
    "Step 1 (Basic Info - T-13_step1_basic_info): Recipe title, description, cuisine type, difficulty, prep time, cook time, servings.",
    "Step 2 (Ingredients - T-13_step2_ingredients): Dynamically add/remove ingredient fields (name, quantity, unit, notes).",
    "Step 3 (Instructions - T-13_step3_instructions): Dynamically add/remove instruction steps, with rich text capability placeholder.",
    "Step 4 (Media - T-13_step4_media): Placeholders for image/video upload (mock UI).",
    "Step 5 (Review & Submit - T-13_step5_review): Display summary of entered recipe details for review before submission (mock submission).",
    "Navigation between steps (Next, Previous, Save Draft - mock)."
  ],
  "interfaces_provided": [
    { "name": "RecipeUploadPage", "interface_type": "REACT_COMPONENT", "details": "Component for the multi-step recipe upload process.", "notes": "" }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation if needed, or internal state management for steps." }
  ],
  "internal_dependencies": [
    // "cycle0_comp_button_g112",
    // "cycle0_comp_input_g112", 
    // "cycle0_comp_modal_g112" // Potentially for confirmation dialogs
  ],
  "dependents": [
    "cycle0_router_config_g112" // This page will be a route in AppRouter
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g123. To be populated with specific UI placeholders and mock data integration based on T-13 (Figma)."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const initialRecipeData = {
  title: '',
  description: '',
  cuisine: '',
  difficulty: 'Medium',
  prepTime: '',
  cookTime: '',
  servings: '',
  ingredients: [{ name: '', quantity: '', unit: '' }],
  instructions: [{ step: '' }],
  images: [], // Placeholder for image file objects or URLs
  videos: [], // Placeholder for video URLs
};

/**
 * RecipeUploadPage Component (References Figma Catalogue: T-13 - Recipe Creation Wizard)
 * 
 * Purpose: Guides the user through a multi-step process to upload a new recipe.
 * 
 * Structure (T-13 - Multi-Step Wizard):
 * - Main page container.
 * - Wizard Title (e.g., "Upload Your Recipe").
 * - Step Indicator (T-13_step_indicator): Shows current step and progress (e.g., 1 of 5).
 * - Step Content Area (dynamically changes based on currentStep):
 *   - Step 1: Basic Information (T-13_step1_basic_info)
 *     - Fields: Title, Description, Cuisine, Difficulty, Prep Time, Cook Time, Servings.
 *   - Step 2: Ingredients (T-13_step2_ingredients)
 *     - Dynamic list of ingredient inputs (name, quantity, unit, notes).
 *     - Add/Remove ingredient buttons.
 *   - Step 3: Instructions (T-13_step3_instructions)
 *     - Dynamic list of instruction steps (rich text editor placeholder).
 *     - Add/Remove step buttons.
 *   - Step 4: Media (T-13_step4_media)
 *     - Placeholders for image uploader (T-13_image_uploader).
 *     - Placeholder for video link input (T-13_video_input).
 *   - Step 5: Review & Submit (T-13_step5_review)
 *     - Summary of all entered recipe information.
 *     - Submit button (T-13_submit_button), Save Draft button (T-13_save_draft_button).
 * - Navigation Buttons (T-13_navigation_buttons): Previous, Next.
 * 
 * Placeholders & Checklist:
 * [ ] Implement state for `currentStep` and `recipeData`.
 * [ ] Render step indicator.
 * [ ] Render content for each step based on `currentStep`:
 *     [ ] Step 1 (Basic Info): Form fields for title, description, etc. (T-13_step1_basic_info).
 *     [ ] Step 2 (Ingredients): UI for adding/editing ingredients (T-13_step2_ingredients).
 *         [ ] Handle dynamic adding/removing of ingredient inputs.
 *     [ ] Step 3 (Instructions): UI for adding/editing instructions (T-13_step3_instructions).
 *         [ ] Handle dynamic adding/removing of instruction inputs.
 *     [ ] Step 4 (Media): Placeholders for image/video uploads (T-13_step4_media).
 *     [ ] Step 5 (Review): Display all `recipeData` for review (T-13_step5_review).
 * [ ] Implement navigation logic (Next, Previous buttons) - T-13_navigation_buttons.
 * [ ] Handle form input changes and update `recipeData` state.
 * [ ] Mock "Submit Recipe" and "Save Draft" functionality - T-13_submit_button, T-13_save_draft_button.
 * [ ] Basic styling for steps and form elements.
 */
const RecipeUploadPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [recipeData, setRecipeData] = useState(initialRecipeData);
  const navigate = useNavigate();
  const totalSteps = 5;

  const handleChange = (e, section = null, index = null) => {
    const { name, value } = e.target;
    if (section) {
      const sectionData = [...recipeData[section]];
      sectionData[index] = { ...sectionData[index], [name]: value };
      setRecipeData(prevData => ({ ...prevData, [section]: sectionData }));
    } else {
      setRecipeData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const addIngredient = () => {
    setRecipeData(prevData => ({ 
      ...prevData, 
      ingredients: [...prevData.ingredients, { name: '', quantity: '', unit: '' }] 
    }));
  };

  const removeIngredient = (index) => {
    setRecipeData(prevData => ({
      ...prevData,
      ingredients: prevData.ingredients.filter((_, i) => i !== index)
    }));
  };

  const addInstruction = () => {
    setRecipeData(prevData => ({ 
      ...prevData, 
      instructions: [...prevData.instructions, { step: '' }] 
    }));
  };

  const removeInstruction = (index) => {
    setRecipeData(prevData => ({
      ...prevData,
      instructions: prevData.instructions.filter((_, i) => i !== index)
    }));
  };

  const handleImageUpload = (e) => {
    // Mock image upload handling
    alert('Mock: Image selected - ' + e.target.files[0]?.name);
    // In a real app, you'd handle the file object: setRecipeData(prev => ({...prev, images: [...prev.images, file]}))
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = () => {
    // Mock submission
    console.log('Submitting Recipe:', recipeData);
    alert('Mock: Recipe Submitted! Redirecting to Home...');
    navigate('/home'); // Or to the user's profile/my recipes page
  };
  
  const handleSaveDraft = () => {
    console.log('Saving Draft:', recipeData);
    alert('Mock: Recipe Draft Saved!');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: // Basic Information (T-13_step1_basic_info)
        return (
          <div className="T-13_step1_basic_info">
            <h3 style={styles.stepTitle}>Step 1: Basic Information</h3>
            <FormField label="Recipe Title:" name="title" value={recipeData.title} onChange={handleChange} />
            <FormField label="Description:" name="description" value={recipeData.description} onChange={handleChange} type="textarea" />
            <FormField label="Cuisine Type:" name="cuisine" value={recipeData.cuisine} onChange={handleChange} />
            <FormField label="Difficulty:" name="difficulty" value={recipeData.difficulty} onChange={handleChange} type="select">
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </FormField>
            <FormField label="Prep Time (e.g., 30 mins):" name="prepTime" value={recipeData.prepTime} onChange={handleChange} />
            <FormField label="Cook Time (e.g., 1 hour):" name="cookTime" value={recipeData.cookTime} onChange={handleChange} />
            <FormField label="Servings (e.g., 4):" name="servings" value={recipeData.servings} onChange={handleChange} type="number" />
          </div>
        );
      case 2: // Ingredients (T-13_step2_ingredients)
        return (
          <div className="T-13_step2_ingredients">
            <h3 style={styles.stepTitle}>Step 2: Ingredients</h3>
            {recipeData.ingredients.map((ing, index) => (
              <div key={index} style={styles.dynamicListItem}>
                <FormField placeholder="Name (e.g., Flour)" name="name" value={ing.name} onChange={e => handleChange(e, 'ingredients', index)} style={{flex:3, marginRight:'5px'}} />
                <FormField placeholder="Qty (e.g., 2)" name="quantity" value={ing.quantity} onChange={e => handleChange(e, 'ingredients', index)} style={{flex:1, marginRight:'5px'}} />
                <FormField placeholder="Unit (e.g., cups)" name="unit" value={ing.unit} onChange={e => handleChange(e, 'ingredients', index)} style={{flex:1, marginRight:'5px'}}/>
                <button type="button" onClick={() => removeIngredient(index)} style={styles.removeButton}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={addIngredient} style={styles.addButton}>+ Add Ingredient</button>
          </div>
        );
      case 3: // Instructions (T-13_step3_instructions)
        return (
          <div className="T-13_step3_instructions">
            <h3 style={styles.stepTitle}>Step 3: Instructions</h3>
            {recipeData.instructions.map((instr, index) => (
              <div key={index} style={styles.dynamicListItem}>
                <FormField 
                  placeholder={`Step ${index + 1}`}
                  name="step" 
                  value={instr.step} 
                  onChange={e => handleChange(e, 'instructions', index)} 
                  type="textarea" 
                  rows={3}
                  style={{flex:1, marginRight:'5px'}}
                />
                <button type="button" onClick={() => removeInstruction(index)} style={styles.removeButton}>Remove</button>
              </div>
            ))}
            <button type="button" onClick={addInstruction} style={styles.addButton}>+ Add Step</button>
          </div>
        );
      case 4: // Media (T-13_step4_media)
        return (
          <div className="T-13_step4_media">
            <h3 style={styles.stepTitle}>Step 4: Add Media (Images/Videos)</h3>
            <div className="T-13_image_uploader" style={{marginBottom: '20px'}}>
              <label htmlFor="recipeImages" style={styles.label}>Upload Images:</label>
              <input type="file" id="recipeImages" multiple accept="image/*" onChange={handleImageUpload} style={styles.input} />
              <p style={{fontSize: '0.8em', color: '#666'}}>Mock uploader. Selected images will be logged.</p>
            </div>
            <div className="T-13_video_input">
              <FormField label="Add Video Link (e.g., YouTube URL):" name="videoUrl" placeholder="https://youtube.com/watch?v=..." onChange={e => {/* mock */}} />
              <p style={{fontSize: '0.8em', color: '#666'}}>Mock video link input.</p>
            </div>
          </div>
        );
      case 5: // Review & Submit (T-13_step5_review)
        return (
          <div className="T-13_step5_review">
            <h3 style={styles.stepTitle}>Step 5: Review & Submit</h3>
            <h4>{recipeData.title || "Recipe Title"}</h4>
            <p><strong>Description:</strong> {recipeData.description || "N/A"}</p>
            <p><strong>Cuisine:</strong> {recipeData.cuisine || "N/A"} | <strong>Difficulty:</strong> {recipeData.difficulty || "N/A"}</p>
            <p><strong>Prep:</strong> {recipeData.prepTime || "N/A"} | <strong>Cook:</strong> {recipeData.cookTime || "N/A"} | <strong>Servings:</strong> {recipeData.servings || "N/A"}</p>
            
            <h5>Ingredients:</h5>
            {recipeData.ingredients.length > 0 && recipeData.ingredients[0].name ? (
                <ul style={{listStylePosition: 'inside'}}>{recipeData.ingredients.map((ing, i) => ing.name && <li key={i}>{ing.quantity} {ing.unit} {ing.name}</li>)}</ul>
            ) : <p>No ingredients added.</p>}
            
            <h5>Instructions:</h5>
            {recipeData.instructions.length > 0 && recipeData.instructions[0].step ? (
                <ol style={{listStylePosition: 'inside'}}>{recipeData.instructions.map((instr, i) => instr.step && <li key={i}>{instr.step}</li>)}</ol>
            ) : <p>No instructions added.</p>}
            <p><i>Media uploads are mocked and not displayed here.</i></p>
            <button type="button" onClick={handleSaveDraft} style={{...styles.navButton, backgroundColor: '#ffc107', color:'black'}} className="T-13_save_draft_button">Save Draft</button>
            <button type="button" onClick={handleSubmit} style={{...styles.navButton, ...styles.submitButton}} className="T-13_submit_button">Submit Recipe</button>
          </div>
        );
      default:
        return <p>Unknown step.</p>;
    }
  };

  return (
    <div style={styles.pageContainer}>
      <Link to="/home" style={styles.backLink}>&larr; Cancel Upload & Back to Home</Link>
      <h2 style={styles.pageTitle}>Upload Your Recipe (T-13)</h2>
      
      {/* T-13_step_indicator */}
      <div style={styles.stepIndicator} className="T-13_step_indicator">
        Step {currentStep} of {totalSteps}
        <div style={styles.progressBarContainer}>
            <div style={{...styles.progressBar, width: `${(currentStep / totalSteps) * 100}%`}}></div>
        </div>
      </div>

      <form onSubmit={e => e.preventDefault()} style={styles.formContainer}>
        {renderStepContent()}
        
        {/* T-13_navigation_buttons */} 
        <div style={styles.navigationButtons} className="T-13_navigation_buttons">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} style={styles.navButton}>Previous</button>
          )}
          {currentStep < totalSteps && (
            <button type="button" onClick={nextStep} style={{...styles.navButton, marginLeft: 'auto'}}>Next</button>
          )}
        </div>
      </form>
      <p style={{marginTop: '30px', fontSize: '0.8em', textAlign:'center', color:'#aaa'}}>Figma Ref: T-13 (Recipe Creation Wizard)</p>
    </div>
  );
};

// Helper component for form fields to reduce repetition
const FormField = ({ label, name, value, onChange, type = 'text', children, placeholder, rows, style = {} }) => (
  <div style={{ marginBottom: '15px', ...style }}>
    {label && <label htmlFor={name} style={styles.label}>{label}</label>}
    {type === 'textarea' ? (
      <textarea id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} rows={rows || 3} style={styles.input} />
    ) : type === 'select' ? (
      <select id={name} name={name} value={value} onChange={onChange} style={styles.input}>{children}</select>
    ) : (
      <input type={type} id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} style={styles.input} />
    )}
  </div>
);

// Basic styles (can be moved to a CSS file or styled-components)
const styles = {
  pageContainer: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif'
  },
  backLink: {
    display: 'inline-block',
    marginBottom: '15px',
    color: '#007bff',
    textDecoration: 'none'
  },
  pageTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333'
  },
  stepIndicator: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '1.1em',
    color: '#555'
  },
  progressBarContainer: {
    height: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    marginTop: '8px',
    overflow: 'hidden' 
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    transition: 'width 0.3s ease-in-out'
  },
  formContainer: {
    border: '1px solid #ddd',
    padding: '25px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  },
  stepTitle: {
    marginTop: '0',
    marginBottom: '20px',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
    color: '#333'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#444'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '1em'
  },
  dynamicListItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    gap: '10px'
  },
  addButton: {
    padding: '8px 12px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  removeButton: {
    padding: '6px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9em',
    height:'fit-content'
  },
  navigationButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #eee'
  },
  navButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1em',
    backgroundColor: '#007bff',
    color: 'white'
  },
  submitButton: {
    backgroundColor: '#5cb85c'
  }
};

export default RecipeUploadPage; 