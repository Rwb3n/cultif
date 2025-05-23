/* ANNOTATION_BLOCK_START
{
  "artifact_id": "cycle0_page_subscription_g112",
  "version_tag": "0.1.0",
  "g_created": 123,
  "g_last_modified": 123,
  "description": "Placeholder component for the Subscription Page or Modals. This will display subscription tiers, benefits, and payment options.",
  "artifact_type": "CODE_MODULE",
  "status_in_lifecycle": "DEVELOPMENT",
  "purpose_statement": "To present users with subscription options and allow them to subscribe to premium features or content. References Figma Catalogue IDs: T-04 (Paywall/Upsell), T-08 (Subscription Management).",
  "key_logic_points": [
    "Display different subscription tiers (e.g., Free, Premium, Pro Creator - T-04_tier_options).",
    "Clearly list features and benefits for each tier (T-04_feature_list).",
    "Call to action buttons for selecting a tier (T-04_select_tier_button).",
    "(Mock) Placeholder for payment processing integration.",
    "If used as a modal, it should be triggerable from various points (e.g., accessing a premium feature).",
    "If a full page, it might also include current subscription status and management options (T-08_current_plan, T-08_manage_subscription_options)."
  ],
  "interfaces_provided": [
    { "name": "SubscriptionPage", "interface_type": "REACT_COMPONENT", "details": "Component for displaying subscription options and handling selection.", "notes": "Could also be adapted as a modal component." }
  ],
  "requisites": [],
  "external_dependencies": [
    { "name": "React", "version": "^18.2.0", "reason": "Core React library." },
    { "name": "react-router-dom", "version": "^6.x.x", "reason": "For navigation (Link)." }
  ],
  "internal_dependencies": [
    // "cycle0_comp_button_g112",
    // "cycle0_comp_card_g112" // For displaying subscription tiers
    // "cycle0_comp_modal_g112" // If implemented as a modal overlay
  ],
  "dependents": [
    "cycle0_router_config_g112" // This page will be a route in AppRouter, or modals triggered from other pages
  ],
  "linked_issue_ids": [],
  "quality_notes": {
    "unit_tests": "N/A",
    "manual_review_comment": "Initial scaffold by Hybrid_AI_OS g123. To be populated with specific UI placeholders and mock data integration based on T-04 and T-08 (Figma)."
  }
}
ANNOTATION_BLOCK_END */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Mock subscription tiers data
const mockSubscriptionTiers = [
  {
    id: 'free',
    name: 'Basic Access',
    price: 'Free',
    features: [
      'Access to 100+ public recipes',
      'Create and save up to 1 meal plan',
      'Basic community access'
    ],
    cta: 'Continue with Basic'
  },
  {
    id: 'premium_user',
    name: 'Premium User',
    price: '$9.99/month',
    features: [
      'Access to all 2,000+ exclusive recipes',
      'Unlimited meal plans',
      'Advanced nutritional information',
      'Offline access to saved content',
      'Ad-free experience'
    ],
    cta: 'Go Premium'
  },
  {
    id: 'pro_creator',
    name: 'Pro Creator',
    price: '$29.99/month',
    features: [
      'All Premium User benefits',
      'Publish and monetize your recipes',
      'Creator tools and analytics',
      'Priority support',
      'Feature your profile'
    ],
    cta: 'Become a Creator'
  }
];

/**
 * SubscriptionPage Component (References Figma Catalogue: T-04, T-08)
 * 
 * Purpose: Displays subscription options to users, allowing them to choose a plan.
 *          Can be a full page or adapted for use in a modal (T-04_paywall_modal).
 * 
 * Structure (T-04 - Paywall/Upsell Focus for this scaffold):
 * - Main container.
 * - Page Title (e.g., "Unlock More with Cultif Premium").
 * - Tier Display Area (T-04_tier_options): Usually a row or grid of cards.
 *   - Each Tier Card (T-04_tier_card):
 *     - Tier Name (T-04_tier_name).
 *     - Price (T-04_tier_price).
 *     - List of Features/Benefits (T-04_feature_list).
 *     - Call to Action Button (T-04_select_tier_button).
 * - (Optional) Comparison table link/toggle.
 * - (Optional) FAQs section.
 * 
 * Structure (T-08 - Subscription Management - elements can be conditionally shown if user is subscribed):
 * - Current Plan Display (T-08_current_plan_details): Name, price, renewal date.
 * - Management Options (T-08_manage_subscription_options): Change plan, Update payment, Cancel subscription.
 * 
 * Placeholders & Checklist:
 * [ ] Implement state for `selectedTier` (if needed for interaction before "payment").
 * [ ] (Mock) Fetch subscription tiers data (or use hardcoded `mockSubscriptionTiers`).
 * [ ] Display available subscription tiers using cards (T-04_tier_card).
 *     [ ] For each tier, show name, price, features, and a CTA button.
 * [ ] Implement mock functionality for CTA buttons (e.g., log selection, alert for payment processing) - T-04_select_tier_button.
 * [ ] (Future/Optional) Add placeholders for T-08 elements if this page also handles subscription management.
 * [ ] Basic styling for tier cards and layout.
 * [ ] Link to terms of service/privacy policy.
 */
const SubscriptionPage = ({ isModal = false }) => {
  const navigate = useNavigate();
  // const [currentUserSubscription, setCurrentUserSubscription] = useState(null); // Example: { tierId: 'premium_user', renewalDate: '2024-12-31'}

  const handleSelectTier = (tier) => {
    // Mock payment processing / subscription update
    alert(`Mock: You have selected the ${tier.name} plan. Proceeding to mock payment...`);
    // In a real app, this would navigate to a payment gateway or update subscription via API.
    // For now, let's assume success and navigate or close modal.
    if (isModal) {
      alert('Mock: Subscription successful! Modal would close now.');
      // Call a prop function to close modal: props.onClose();
    } else {
      navigate('/home'); // Or to a confirmation page / user profile
    }
  };

  // Placeholder for T-08 Content if a user is subscribed and this page handles management
  const renderSubscriptionManagement = () => {
    // if (!currentUserSubscription) return null;
    return (
      <div className="T-08_subscription_management" style={styles.managementSection}>
        <h3 style={styles.subHeader}>Your Current Plan (T-08_current_plan_details)</h3>
        <p>Status: Active - Premium User (Mock Data)</p>
        <p>Renews on: January 1, 2025 (Mock Data)</p>
        <div style={styles.buttonGroup} className="T-08_manage_subscription_options">
          <button style={styles.actionButton} onClick={() => alert('Mock: Change Plan clicked')}>Change Plan</button>
          <button style={styles.actionButton} onClick={() => alert('Mock: Update Payment clicked')}>Update Payment Info</button>
          <button style={{...styles.actionButton, ...styles.cancelButton}} onClick={() => alert('Mock: Cancel Subscription clicked')}>Cancel Subscription</button>
        </div>
      </div>
    );
  };

  return (
    <div style={isModal ? styles.modalOverlay : styles.pageContainer}>
      <div style={isModal ? styles.modalContent : {}}>
        {isModal && <button onClick={() => alert('Mock: Close modal')} style={styles.closeModalButton}>&times;</button>}
        
        <h2 style={styles.pageTitle}>Unlock More with Cultif (T-04)</h2>
        <p style={styles.subTitle}>Choose the plan that's right for you and start your culinary adventure.</p>

        {/* Placeholder: Conditionally render T-08 content if applicable */} 
        {/* {renderSubscriptionManagement()} */} 

        <div style={styles.tiersContainer} className="T-04_tier_options">
          {mockSubscriptionTiers.map(tier => (
            <div key={tier.id} style={styles.tierCard} className="T-04_tier_card">
              <h3 style={styles.tierName} className="T-04_tier_name">{tier.name}</h3>
              <p style={styles.tierPrice} className="T-04_tier_price">{tier.price}</p>
              <ul style={styles.featureList} className="T-04_feature_list">
                {tier.features.map((feature, index) => <li key={index}>{feature}</li>)}
              </ul>
              <button 
                onClick={() => handleSelectTier(tier)} 
                style={{...styles.ctaButton, ...(tier.id === 'premium_user' && styles.premiumCta) }} 
                className="T-04_select_tier_button"
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {!isModal && (
          <div style={styles.footerLinks}>
            <Link to="/terms" style={styles.footerLink}>Terms of Service</Link> | <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
            <br/>
            <Link to="/home" style={{...styles.footerLink, marginTop: '15px', display: 'inline-block'}}>&larr; Back to Home</Link>
          </div>
        )}
        <p style={{marginTop: '30px', fontSize: '0.8em', textAlign:'center', color:'#aaa'}}>Figma Refs: T-04, T-08</p>
      </div>
    </div>
  );
};

// Basic styles (can be moved to a CSS file or styled-components)
const styles = {
  pageContainer: {
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center'
  },
  modalOverlay: { // For when isModal is true
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1050, 
    padding: '20px'
  },
  modalContent: { // For when isModal is true
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    maxWidth: '900px',
    width:'100%',
    position: 'relative',
    textAlign: 'center',
    maxHeight: '90vh',
    overflowY: 'auto'
  },
  closeModalButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'transparent',
    border: 'none',
    fontSize: '1.8em',
    cursor: 'pointer',    
    color: '#777'
  },
  pageTitle: {
    marginBottom: '10px',
    color: '#333',
    fontSize: '2em'
  },
  subTitle: {
    marginBottom: '30px',
    fontSize: '1.1em',
    color: '#555'
  },
  tiersContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    flexWrap: 'wrap'
  },
  tierCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '25px',
    width: '300px',
    minWidth: '280px',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column'
  },
  tierName: {
    fontSize: '1.5em',
    color: '#007bff',
    margin: '0 0 10px 0'
  },
  tierPrice: {
    fontSize: '1.3em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px'
  },
  featureList: {
    listStyle: '✓ ',
    paddingLeft: '20px',
    marginBottom: '20px',
    flexGrow: 1,
    color: '#444',
    fontSize: '0.95em'
  },
  ctaButton: {
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#28a745',
    color: 'white',
    fontSize: '1.1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    textAlign: 'center',
    width: '100%'
  },
  premiumCta: {
    backgroundColor: '#ffc107',
    color: '#333'
  },
  managementSection: {
    border: '1px solid #007bff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '30px',
    backgroundColor: '#e7f3ff'
  },
  subHeader: {
    color: '#0056b3',
    marginBottom: '15px'
  },
  buttonGroup: {
    marginTop: '15px'
  },
  actionButton: {
    padding: '8px 15px',
    margin: '5px',
    border: '1px solid #007bff',
    borderRadius: '4px',
    background: 'transparent',
    color: '#007bff',
    cursor: 'pointer' 
  },
  cancelButton: {
    borderColor: '#dc3545',
    color: '#dc3545'
  },
  footerLinks: {
    marginTop: '40px',
    paddingTop: '20px',
    borderTop: '1px solid #eee',
    fontSize: '0.9em'
  },
  footerLink: {
    color: '#007bff',
    textDecoration: 'none',
    margin: '0 5px'
  }
};

export default SubscriptionPage; 