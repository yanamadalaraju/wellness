// import React, { useRef, useEffect } from 'react';
// import { Pannellum } from 'pannellum-react';
// import 'pannellum/build/pannellum.css';

// const Video360Viewer = () => {
//   const pannellumRef = useRef<Pannellum>(null);

//   // Configuration for the 360° video
//   const config = {
//     default: {
//       firstScene: 'scene1',
//       author: 'Your Name',
//     },
//     scenes: {
//       scene1: {
//         type: "equirectangular",
//         panorama: "https://pannellum.org/images/video/office.mp4", // Using a known working 360° video
//         autoLoad: true,
//         autoRotate: -2,
//         autoRotateInactivityDelay: 3000,
//         hotSpotDebug: false,
//         hotSpots: [
//           {
//             pitch: -14.1,
//             yaw: 254.5,
//             type: "info",
//             text: "This is a 360° office video",
//             cssClass: "custom-hotspot"
//           }
//         ]
//       }
//     }
//   };

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       .pnlm-container {
//         width: 100% !important;
//         height: 100vh !important;
//       }
//       .custom-hotspot {
//         height: 30px;
//         width: 30px;
//         border-radius: 50%;
//         background: rgba(255, 255, 255, 0.8);
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         cursor: pointer;
//         transition: all 0.3s;
//         box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
//       }
//       .custom-hotspot:after {
//         content: '';
//         display: block;
//         width: 10px;
//         height: 10px;
//         border-radius: 50%;
//         background: #4CAF50;
//       }
//       .custom-hotspot:hover {
//         transform: scale(1.2);
//         background: white;
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
//       <Pannellum
//         ref={pannellumRef}
//         width="100%"
//         height="100vh"
//         config={config}
//       />
      
//       <div style={{
//         position: 'absolute',
//         bottom: '20px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         zIndex: 10,
//         display: 'flex',
//         gap: '10px'
//       }}>
//         <button 
//           onClick={() => pannellumRef.current?.getViewer()?.stopAutoRotate()}
//           style={{
//             padding: '8px 16px',
//             background: 'rgba(0,0,0,0.7)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           Stop Rotation
//         </button>
//         <button 
//           onClick={() => pannellumRef.current?.getViewer()?.startAutoRotate(-2, 3000)}
//           style={{
//             padding: '8px 16px',
//             background: 'rgba(0,0,0,0.7)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           Auto Rotate
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Video360Viewer;



import React, { useRef, useEffect } from 'react';
import { Pannellum } from 'pannellum-react';
import 'pannellum/build/pannellum.css';

const Video360Viewer = () => {
  const pannellumRef = useRef<Pannellum>(null);

  // Configuration for the 360° video
  const config = {
    default: {
      firstScene: 'scene1',
      author: 'Your Name',
    },
    scenes: {
      scene1: {
        type: "equirectangular",
        panorama: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg",
        autoLoad: true,
        autoRotate: -2,
        autoRotateInactivityDelay: 3000,
        hotSpotDebug: false,
        hotSpots: [
          {
            pitch: -14.1,
            yaw: 254.5,
            type: "info",
            text: "This is a 360° office video",
            cssClass: "custom-hotspot"
          },
          // Image hotspot 1 - Computer
          {
            pitch: 5,
            yaw: 180,
            type: "info",
            text: "Workstation Area",
            image: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg",
            cssClass: "image-hotspot",
            scale: true
          },
          // Image hotspot 2 - Window
          {
            pitch: 10,
            yaw: 90,
            type: "info",
            text: "Nice view outside the window",
            image: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg",
            cssClass: "image-hotspot",
            scale: true
          },
          // Image hotspot 3 - Door
          {
            pitch: 0,
            yaw: 0,
            type: "info",
            text: "Exit to the hallway",
            image: "https://cdn-icons-png.flaticon.com/512/1828/1828665.png",
            cssClass: "image-hotspot",
            scale: true
          }
        ]
      }
    }
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .pnlm-container {
        width: 100% !important;
        height: 100vh !important;
      }
      .custom-hotspot {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
      .custom-hotspot:after {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #4CAF50;
      }
      .custom-hotspot:hover {
        transform: scale(1.2);
        background: white;
      }
      .image-hotspot {
        width: 32px !important;
        height: 32px !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        filter: drop-shadow(0 0 5px rgba(0,0,0,0.7));
        transition: all 0.3s;
      }
      .image-hotspot:hover {
        transform: scale(1.3);
        filter: drop-shadow(0 0 10px rgba(255,255,255,0.7));
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Pannellum
        ref={pannellumRef}
        width="100%"
        height="100vh"
        config={config}
      />
      
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        gap: '10px'
      }}>
        <button 
          onClick={() => pannellumRef.current?.getViewer()?.stopAutoRotate()}
          style={{
            padding: '8px 16px',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Stop Rotation
        </button>
        <button 
          onClick={() => pannellumRef.current?.getViewer()?.startAutoRotate(-2, 3000)}
          style={{
            padding: '8px 16px',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Auto Rotate
        </button>
      </div>
    </div>
  );
};

export default Video360Viewer;