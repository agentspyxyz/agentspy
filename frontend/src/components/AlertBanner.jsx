import React from 'react';

function AlertBanner({ message }) {
  if (!message) return null;

  return (
    <div style={{ backgroundColor: 'yellow', padding: '10px', marginBottom: '20px' }}>
      <strong>Alert:</strong> {message}
    </div>
  );
}

export default AlertBanner;
