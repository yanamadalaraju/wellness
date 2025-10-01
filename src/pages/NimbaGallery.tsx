// import React, { useState, useEffect } from 'react';
// import image from "../assets/3d1-1 (1).jpg";
// const NimbaGallery: React.FC = () => {
//   const [showAlert, setShowAlert] = useState(true);

//   const closeAlert = () => {
//     setShowAlert(false);
//   };

//   return (
//     <div className="nimba-gallery">
//       {/* Alert Popup - Shows when website opens */}
//       {showAlert && (
//         <div style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.7)',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           zIndex: 1000
//         }}>
//           <div style={{
//             backgroundColor: 'white',
//             padding: '2rem',
//             borderRadius: '8px',
//             maxWidth: '500px',
//             width: '90%',
//             textAlign: 'center',
//             position: 'relative'
//           }}>
//             <button 
//               onClick={closeAlert}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 background: 'none',
//                 border: 'none',
//                 fontSize: '1.5rem',
//                 cursor: 'pointer'
//               }}
//             >
//               &times;
//             </button>
//             <h3>Your family’s happy place—for body, mind, and heart.</h3>
//             <p>Enjoy 20% Off on Our Inauguration </p>
//             <img 
//               src= {image}
//               alt="Summer Special" 
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 margin: '1rem 0',
//                 borderRadius: '4px'
//               }}
//             />
//             {/* <button 
//               style={{
//                 backgroundColor: '#4CAF50',
//                 color: 'white',
//                 border: 'none',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '4px',
//                 cursor: 'pointer',
//                 marginTop: '1rem'
//               }}
//             >
//               Book Now
//             </button> */}
//           </div>
//         </div>
//       )}

//       {/* Rest of your existing component content */}
//     </div>
//   );
// };

// export default NimbaGallery;


import React, { useState, useEffect } from 'react';

interface AlertImage {
  id: number;
  image_url: string;
  title: string;
  description: string;
  is_active: boolean;
}

const NimbaGallery: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [alertImage, setAlertImage] = useState<AlertImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = 'http://localhost:5000/api';

  useEffect(() => {
    fetchAlertImage();
  }, []);

  const fetchAlertImage = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/alert-image`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch alert image');
      }
      
      const data = await response.json();
      setAlertImage(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching alert image:', err);
      setError('Failed to load alert image');
    } finally {
      setLoading(false);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  // If no active alert image found, don't show the popup
  if (!alertImage && !loading) {
    return (
      <div className="nimba-gallery">
        {/* Your main content here */}
      </div>
    );
  }

  return (
    <div className="nimba-gallery">
      {/* Alert Popup - Shows when website opens */}
      {showAlert && alertImage && (
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
            
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              <>
                <h3>{alertImage.title}</h3>
                <p>{alertImage.description}</p>
                <img 
                  src={`http://localhost:5000${alertImage.image_url}`}
                  alt={alertImage.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    margin: '1rem 0',
                    borderRadius: '4px'
                  }}
                  onError={(e) => {
                    console.error('Error loading image:', alertImage.image_url);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </>
            )}
          </div>
        </div>
      )}

      {/* Rest of your existing component content */}
    </div>
  );
};

export default NimbaGallery;