import React from 'react';
import './MobileScreenLayout.css';

const MobileScreenLayout = ({ children, screenTitle }) => {
  return (
    <div className="mobile-screen-layout">
      {/* Optional: A common header area for all screens if needed within the mobile frame */}
      {/* screenTitle && (
        <header style={{ 
          padding: 'var(--spacing-sm)', 
          backgroundColor: 'var(--color-neutral-100)', 
          textAlign: 'center',
          borderBottom: '1px solid var(--color-border)',
          flexShrink: 0
        }}>
          <h3>{screenTitle}</h3>
        </header>
      ) */}
      <main className="mobile-screen-content">
        {children}
      </main>
      {/* Optional: A common footer area for all screens if needed within the mobile frame */}
    </div>
  );
};

export default MobileScreenLayout; 