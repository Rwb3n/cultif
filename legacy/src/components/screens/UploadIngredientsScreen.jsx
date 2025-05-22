import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './UploadIngredientsScreen.css'; // To be created

const UploadIngredientsScreen = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('g'); // Default unit

  const screenVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.3, ease: 'easeIn' } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };
  
  const listContainerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const unitOptions = ['g', 'kg', 'ml', 'l', 'tsp', 'tbsp', 'cup', 'oz', 'lb', 'pcs'];

  const handleAddIngredient = () => {
    if (itemName && quantity) {
      setIngredients([...ingredients, { id: Date.now(), name: itemName, quantity, unit }]);
      setItemName('');
      setQuantity('');
      // setUnit('g'); // Optionally reset unit
    }
  };

  const handleRemoveIngredient = (id) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  return (
    <MobileScreenLayout screenTitle="Add Ingredients">
      <motion.div
        className="upload-ingredients-screen-content"
        variants={screenVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div className="ingredient-form" variants={itemVariants}>
          <div className="form-row">
            <input 
              type="text" 
              placeholder="Ingredient Name (e.g., Flour)" 
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="ingredient-name-input"
            />
          </div>
          <div className="form-row">
            <input 
              type="number" 
              placeholder="Quantity" 
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="ingredient-quantity-input"
            />
            <select 
              value={unit} 
              onChange={(e) => setUnit(e.target.value)}
              className="ingredient-unit-select"
            >
              {unitOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <button onClick={handleAddIngredient} className="btn btn-outline-primary add-btn">Add</button>
          </div>
        </motion.div>

        <motion.div className="ingredients-list-container" variants={itemVariants}>
          <AnimatePresence>
            {ingredients.length === 0 && (
              <motion.p className="empty-list-message" variants={itemVariants} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                No ingredients added yet.
              </motion.p>
            )}
          </AnimatePresence>
          <motion.ul className="ingredients-list" variants={listContainerVariants}>
            <AnimatePresence>
              {ingredients.map(ing => (
                <motion.li key={ing.id} className="ingredient-item" variants={itemVariants} initial="initial" animate="animate" exit="exit">
                  <span>{ing.name} - {ing.quantity} {ing.unit}</span>
                  <button onClick={() => handleRemoveIngredient(ing.id)} className="remove-btn">&times;</button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </motion.div>
        
        <motion.button
          className="btn btn-primary done-btn"
          variants={itemVariants}
          onClick={() => navigate('/create/upload-main')} // Navigate back to main upload screen
          whileTap={{ scale: 0.95 }}
        >
          Done Adding Ingredients
        </motion.button>

         <motion.button
          className="btn btn-secondary back-btn"
          variants={itemVariants}
          onClick={() => navigate('/create/upload-main')} // Go back to Upload Main screen
          whileTap={{ scale: 0.95 }}
        >
          Back to Post Details
        </motion.button>

      </motion.div>
    </MobileScreenLayout>
  );
};

export default UploadIngredientsScreen; 