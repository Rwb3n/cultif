import React from 'react';
import { Link } from 'react-router-dom';
import MobileScreenLayout from '../layout/MobileScreenLayout';
import './ScreenPlaceholder.css';

const NotFoundScreen = () => (
  <MobileScreenLayout screenTitle="Not Found">
    <div className="screen-placeholder" style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  </MobileScreenLayout>
);

export default NotFoundScreen; 