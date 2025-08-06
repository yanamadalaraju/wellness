import React, { useState, useEffect } from 'react';
import image from "../assets/3d1-1 (1).jpg";
const NimbaGallery: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="nimba-gallery">
      {/* Alert Popup - Shows when website opens */}
      {showAlert && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            maxWidth: '500px',
            width: '90%',
            textAlign: 'center',
            position: 'relative'
          }}>
            <button 
              onClick={closeAlert}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <h3>Your family’s happy place—for body, mind, and heart.</h3>
            <p>Enjoy 20% Off on Our Inauguration </p>
            <img 
              src= {image}
              alt="Summer Special" 
              style={{
                width: '100%',
                height: 'auto',
                margin: '1rem 0',
                borderRadius: '4px'
              }}
            />
            {/* <button 
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              Book Now
            </button> */}
          </div>
        </div>
      )}

      {/* Rest of your existing component content */}
    </div>
  );
};

export default NimbaGallery;