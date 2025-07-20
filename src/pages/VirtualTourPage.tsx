

//--------working-------243//
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Pannellum } from 'pannellum-react';

// Manual CSS import solution (guaranteed to work)
// 1. Download from: https://cdn.jsdelivr.net/npm/pannellum@2.5.6/src/css/pannellum.css
// 2. Save to public/css/pannellum.css
// 3. Add <link rel="stylesheet" href="/css/pannellum.css" /> to your index.html

interface Hotspot {
  pitch: number;
  yaw: number;
  type: 'scene' | 'info';
  text: string;
  sceneId?: string;
  info?: string;
}

interface Scene {
  title: string;
  image: string;
  hotspots: Hotspot[];
}

const VirtualTourPage: React.FC = () => {
  const [activeInfo, setActiveInfo] = useState<string | null>(null);
  const navigate = useNavigate();

  // Tour scenes configuration
  const scenes: Record<string, Scene> = {
    lobby: {
      title: "Main Lobby",
      image: "https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https://pannellum.org/images/alma.jpg",
      hotspots: [
        { pitch: -10, yaw: 180, type: "scene", text: "Yoga Hall", sceneId: "yoga-hall" },
        { pitch: 5, yaw: 90, type: "info", text: "Reception Area", info: "Our welcoming reception area..." }
      ]
    },
    "yoga-hall": {
      title: "Yoga Hall",
      image: "https://i0.wp.com/thevalemagazine.com/wp-content/uploads/2022/04/zenbo-seinei-awaji-island.jpeg?fit=1024%2C683&ssl=1",
      hotspots: [
        { pitch: 0, yaw: 0, type: "scene", text: "Back to Lobby", sceneId: "lobby" },
        { pitch: -5, yaw: -90, type: "info", text: "Meditation Space", info: "Peaceful area for meditation..." }
      ]
    }
  };

  const [currentScene, setCurrentScene] = useState<keyof typeof scenes>("lobby");

  const handleHotspotClick = (hotspot: Hotspot) => {
    if (hotspot.type === "scene" && hotspot.sceneId) {
      setCurrentScene(hotspot.sceneId);
    } else if (hotspot.type === "info" && hotspot.info) {
      setActiveInfo(hotspot.info);
    }
  };

  return (
    <TourContainer>
      <TourHeader>
        <BackButton onClick={() => navigate(-1)}>
          &larr; Back
        </BackButton>
        <TourTitle>{scenes[currentScene].title}</TourTitle>
        <TourControls>
          <ControlButton onClick={() => setCurrentScene("lobby")}>
            Reset View
          </ControlButton>
          <ControlButton onClick={() => document.documentElement.requestFullscreen()}>
            Fullscreen
          </ControlButton>
        </TourControls>
      </TourHeader>

      <PannellumViewer>
        <Pannellum
          width="100%"
          height="100%"
          image={scenes[currentScene].image}
          pitch={10}
          yaw={180}
          hfov={100}
          autoLoad
          showZoomCtrl={false}
          showFullscreenCtrl={false}
          hotspotDebug={false}
          hotspots={scenes[currentScene].hotspots.map(hotspot => ({
            pitch: hotspot.pitch,
            yaw: hotspot.yaw,
            type: hotspot.type,
            text: hotspot.text,
            sceneId: hotspot.sceneId,
            clickHandlerFunc: () => handleHotspotClick(hotspot),
            clickHandlerArgs: hotspot
          }))}
        />
      </PannellumViewer>

      {activeInfo && (
        <InfoOverlay>
          <InfoContent>
            <p>{activeInfo}</p>
            <CloseButton onClick={() => setActiveInfo(null)}>×</CloseButton>
          </InfoContent>
        </InfoOverlay>
      )}

      <NavigationDots>
        {Object.keys(scenes).map((sceneId) => (
          <Dot
            key={sceneId}
            $active={currentScene === sceneId}
            onClick={() => setCurrentScene(sceneId)}
          />
        ))}
      </NavigationDots>
    </TourContainer>
  );
};

// Styled components
const TourContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000;
`;

const TourHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  z-index: 10;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const TourTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
`;

const TourControls = styled.div`
  display: flex;
  gap: 1rem;
`;

const ControlButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const PannellumViewer = styled.div`
  flex: 1;
  width: 100%;
`;

const InfoOverlay = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 400px;
  z-index: 10;
`;

const InfoContent = styled.div`
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1rem;
  right: -1rem;
  background: white;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: black;
`;

const NavigationDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

export default VirtualTourPage;



//--------247-641----//
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { PannellumVideo } from 'pannellum-react';

// interface Hotspot {
//   pitch: number;
//   yaw: number;
//   type: 'scene' | 'info';
//   text: string;
//   sceneId?: string;
//   info?: string;
// }

// interface Scene {
//   title: string;
//   video: string;
//   hotspots: Hotspot[];
// }

// const VirtualTourPage: React.FC = () => {
//   const [activeInfo, setActiveInfo] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);
//   const navigate = useNavigate();

//   // Tour scenes configuration with videos
//   const scenes: Record<string, Scene> = {
//     lobby: {
//       title: "Main Lobby",
//       video: "https://cdn-icons-png.flaticon.com/512/744/744555.png",
//       hotspots: [
//         { pitch: -10, yaw: 180, type: "scene", text: "Yoga Hall", sceneId: "yoga-hall" },
//         { pitch: 5, yaw: 90, type: "info", text: "Reception Area", info: "Our welcoming reception area with comfortable seating and helpful staff ready to assist you." }
//       ]
//     },
//     // "yoga-hall": {
//     //   title: "Yoga Studio",
//     //   video: "https://videos.pexels.com/video-files/5402769/5402769-uhd_2560_1440_30fps.mp4",
//     //   hotspots: [
//     //     { pitch: 0, yaw: 0, type: "scene", text: "Back to Lobby", sceneId: "lobby" },
//     //     { pitch: -5, yaw: -90, type: "info", text: "Meditation Space", info: "Peaceful area for meditation with natural light and calming atmosphere." }
//     //   ]
//     // },
//     // "garden": {
//     //   title: "Outdoor Garden",
//     //   video: "https://videos.pexels.com/video-files/16296847/16296847-uhd_2560_1440_24fps.mp4",
//     //   hotspots: [
//     //     { pitch: 0, yaw: 180, type: "scene", text: "Back to Lobby", sceneId: "lobby" },
//     //     { pitch: -15, yaw: 90, type: "info", text: "Herb Garden", info: "Our organic herb garden where we grow ingredients for our wellness teas." }
//     //   ]
//     // }
//   };

//   const [currentScene, setCurrentScene] = useState<keyof typeof scenes>("lobby");

//   const handleHotspotClick = (hotspot: Hotspot) => {
//     if (hotspot.type === "scene" && hotspot.sceneId) {
//       setIsLoading(true);
//       setCurrentScene(hotspot.sceneId);
//     } else if (hotspot.type === "info" && hotspot.info) {
//       setActiveInfo(hotspot.info);
//     }
//   };

//   const handleVideoLoaded = () => {
//     setIsLoading(false);
//   };

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   return (
//     <TourContainer>
//       <TourHeader>
//         <BackButton onClick={() => navigate(-1)}>
//           &larr; Back to Website
//         </BackButton>
//         <TourTitle>{scenes[currentScene].title}</TourTitle>
//         <TourControls>
//           <ControlButton onClick={() => setCurrentScene("lobby")}>
//             Reset Tour
//           </ControlButton>
//           <ControlButton onClick={() => document.documentElement.requestFullscreen()}>
//             Fullscreen
//           </ControlButton>
//           <ControlButton onClick={toggleMute}>
//             {isMuted ? 'Unmute' : 'Mute'}
//           </ControlButton>
//         </TourControls>
//       </TourHeader>

//       <PannellumViewer>
//         {isLoading && <LoadingOverlay>Loading 360° Experience...</LoadingOverlay>}
//         <PannellumVideo
//           width="100%"
//           height="100%"
//           video={scenes[currentScene].video}
//           pitch={10}
//           yaw={180}
//           hfov={100}
//           autoLoad
//           autoPlay
//           loop
//           muted={isMuted}
//           showZoomCtrl={false}
//           showFullscreenCtrl={false}
//           hotspotDebug={false} 
//           onLoad={handleVideoLoaded}
//           hotspots={scenes[currentScene].hotspots.map(hotspot => ({
//             pitch: hotspot.pitch,
//             yaw: hotspot.yaw,
//             type: hotspot.type,
//             text: hotspot.text,
//             sceneId: hotspot.sceneId,
//             clickHandlerFunc: () => handleHotspotClick(hotspot),
//             clickHandlerArgs: hotspot
//           }))}
//         />
//       </PannellumViewer>

//       {activeInfo && (
//         <InfoOverlay>
//           <InfoContent>
//             <h3>{scenes[currentScene].hotspots.find(h => h.info === activeInfo)?.text}</h3>
//             <p>{activeInfo}</p>
//             <CloseButton onClick={() => setActiveInfo(null)}>×</CloseButton>
//           </InfoContent>
//         </InfoOverlay>
//       )}

//       <NavigationDots>
//         {Object.keys(scenes).map((sceneId) => (
//           <Dot
//             key={sceneId}
//             $active={currentScene === sceneId}
//             onClick={() => {
//               setIsLoading(true);
//               setCurrentScene(sceneId);
//             }}
//             title={scenes[sceneId].title}
//           />
//         ))}
//       </NavigationDots>

//       <SceneSelector>
//         {Object.entries(scenes).map(([sceneId, scene]) => (
//           <SceneOption 
//             key={sceneId}
//             onClick={() => {
//               setIsLoading(true);
//               setCurrentScene(sceneId);
//             }}
//             $active={currentScene === sceneId}
//           >
//             {scene.title}
//           </SceneOption>
//         ))}
//       </SceneSelector>
//     </TourContainer>
//   );
// };

// // Styled components
// const TourContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   background-color: #000;
// `;

// const TourHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
//   background-color: rgba(0, 0, 0, 0.7);
//   color: white;
//   z-index: 10;
//   flex-wrap: wrap;
//   gap: 1rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `;

// const BackButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   font-size: 1rem;
//   cursor: pointer;
//   padding: 0.5rem;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const TourTitle = styled.h1`
//   margin: 0;
//   font-size: 1.5rem;
//   font-weight: 400;
//   text-align: center;
//   flex-grow: 1;

//   @media (max-width: 768px) {
//     text-align: left;
//     font-size: 1.2rem;
//   }
// `;

// const TourControls = styled.div`
//   display: flex;
//   gap: 1rem;

//   @media (max-width: 768px) {
//     width: 100%;
//     justify-content: space-between;
//   }
// `;

// const ControlButton = styled.button`
//   background: rgba(255, 255, 255, 0.2);
//   border: 1px solid white;
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.3s;
//   font-size: 0.9rem;

//   &:hover {
//     background: rgba(255, 255, 255, 0.3);
//   }

//   @media (max-width: 768px) {
//     padding: 0.5rem;
//     font-size: 0.8rem;
//   }
// `;

// const PannellumViewer = styled.div`
//   flex: 1;
//   width: 100%;
//   position: relative;
// `;

// const LoadingOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(0, 0, 0, 0.7);
//   color: white;
//   font-size: 1.5rem;
//   z-index: 5;
// `;

// const InfoOverlay = styled.div`
//   position: absolute;
//   bottom: 2rem;
//   left: 2rem;
//   background: rgba(0, 0, 0, 0.8);
//   color: white;
//   padding: 1.5rem;
//   border-radius: 8px;
//   max-width: 400px;
//   z-index: 10;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

//   @media (max-width: 768px) {
//     max-width: 80%;
//     left: 50%;
//     transform: translateX(-50%);
//     bottom: 5rem;
//   }
// `;

// const InfoContent = styled.div`
//   position: relative;

//   h3 {
//     margin-top: 0;
//     margin-bottom: 0.5rem;
//     color: #f8f8f8;
//   }

//   p {
//     margin-bottom: 0;
//     line-height: 1.5;
//   }
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: -0.5rem;
//   right: -0.5rem;
//   background: white;
//   border: none;
//   border-radius: 50%;
//   width: 1.8rem;
//   height: 1.8rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   font-size: 1.2rem;
//   color: black;
//   font-weight: bold;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
// `;

// const NavigationDots = styled.div`
//   position: absolute;
//   bottom: 1rem;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 0.8rem;
//   z-index: 10;
//   background: rgba(0, 0, 0, 0.5);
//   padding: 0.8rem;
//   border-radius: 2rem;
// `;

// const Dot = styled.div<{ $active: boolean }>`
//   width: 14px;
//   height: 14px;
//   border-radius: 50%;
//   background-color: ${(props) => (props.$active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
//   cursor: pointer;
//   transition: all 0.3s;
//   border: ${(props) => (props.$active ? '2px solid #fff' : 'none')};

//   &:hover {
//     transform: scale(1.3);
//     background-color: white;
//   }
// `;

// const SceneSelector = styled.div`
//   position: absolute;
//   top: 5rem;
//   right: 1rem;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   z-index: 10;
//   background: rgba(0, 0, 0, 0.5);
//   padding: 0.8rem;
//   border-radius: 0.5rem;

//   @media (max-width: 768px) {
//     top: auto;
//     bottom: 8rem;
//     right: auto;
//     left: 1rem;
//     flex-direction: row;
//     flex-wrap: wrap;
//   }
// `;

// const SceneOption = styled.button<{ $active: boolean }>`
//   background: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.2)'};
//   color: ${props => props.$active ? 'black' : 'white'};
//   border: none;
//   padding: 0.5rem 1rem;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 0.9rem;
//   white-space: nowrap;
//   transition: all 0.3s;

//   &:hover {
//     background: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.3)'};
//   }
// `;

// export default VirtualTourPage;




// import React, { useState, useRef, useEffect } from 'react';
// import styled from 'styled-components';
// import { PannellumVideo, Pannellum } from 'pannellum-react';

// interface Hotspot {
//   pitch: number;
//   yaw: number;
//   type: 'scene' | 'info';
//   text: string;
//   sceneId?: string;
//   info?: string;
// }

// interface Scene {
//   title: string;
//   video: string;
//   hotspots: Hotspot[];
// }

// const VirtualTourPage: React.FC = () => {
//   const [currentScene, setCurrentScene] = useState<string>('lobby');
//   const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
//   const [videoError, setVideoError] = useState<boolean>(false);
//   const [isMuted, setIsMuted] = useState<boolean>(true);
//   const [activeInfo, setActiveInfo] = useState<string | null>(null);
//   const playerRef = useRef<Pannellum | null>(null);

//   // Tour scenes configuration
//   const scenes: Record<string, Scene> = {
//     lobby: {
//       title: "Main Lobby",
//       video: "https://cdn.jsdelivr.net/gh/pannellum/pannellum@master/examples/test-videos/stockholm.mp4",
//       hotspots: [
//         { pitch: -10, yaw: 180, type: "scene", text: "Yoga Hall", sceneId: "yoga-hall" },
//         { pitch: 5, yaw: 90, type: "info", text: "Reception", info: "Our welcoming reception area..." }
//       ]
//     },
//     "yoga-hall": {
//       title: "Yoga Studio",
//       video: "https://cdn.jsdelivr.net/gh/pannellum/pannellum@master/examples/test-videos/stockholm.mp4",
//       hotspots: [
//         { pitch: 0, yaw: 0, type: "scene", text: "Back to Lobby", sceneId: "lobby" },
//         { pitch: -5, yaw: -90, type: "info", text: "Meditation", info: "Peaceful meditation space..." }
//       ]
//     }
//   };

//   const handleSceneChange = (sceneId: string) => {
//     setVideoLoaded(false);
//     setVideoError(false);
//     setActiveInfo(null);
    
//     // Safely stop player if it exists and has the stop method
//     if (playerRef.current && typeof playerRef.current.stop === 'function') {
//       playerRef.current.stop();
//     }
//     setCurrentScene(sceneId);
//   };

//   const handleHotspotClick = (hotspot: Hotspot) => {
//     if (hotspot.type === 'scene' && hotspot.sceneId) {
//       handleSceneChange(hotspot.sceneId);
//     } else if (hotspot.type === 'info' && hotspot.info) {
//       setActiveInfo(hotspot.info);
//     }
//   };

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//   };

//   useEffect(() => {
//     return () => {
//       // Cleanup on unmount
//       if (playerRef.current && typeof playerRef.current.stop === 'function') {
//         playerRef.current.stop();
//       }
//     };
//   }, []);

//   return (
//     <TourContainer>
//       <TourHeader>
//         <TourTitle>{scenes[currentScene].title}</TourTitle>
//         <TourControls>
//           <ControlButton onClick={toggleMute}>
//             {isMuted ? 'Unmute' : 'Mute'}
//           </ControlButton>
//           <ControlButton onClick={() => document.documentElement.requestFullscreen()}>
//             Fullscreen
//           </ControlButton>
//         </TourControls>
//       </TourHeader>

//       <PannellumViewer>
//         {!videoLoaded && !videoError && (
//           <LoadingOverlay>
//             <Spinner />
//             <LoadingText>Loading 360° Experience...</LoadingText>
//           </LoadingOverlay>
//         )}

//         {videoError && (
//           <ErrorOverlay>
//             <h3>Video Loading Failed</h3>
//             <p>Please check your internet connection</p>
//             <RetryButton onClick={() => window.location.reload()}>
//               Retry
//             </RetryButton>
//           </ErrorOverlay>
//         )}

//         <PannellumVideo
//           ref={playerRef}
//           width="100%"
//           height="100%"
//           video={scenes[currentScene].video}
//           pitch={10}
//           yaw={180}
//           hfov={100}
//           autoLoad
//           autoPlay
//           loop
//           muted={isMuted}
//           showZoomCtrl={false}
//           showFullscreenCtrl={false}
//           hotspotDebug={false}
//           onLoad={() => {
//             setVideoLoaded(true);
//             setVideoError(false);
//           }}
//           onError={() => {
//             setVideoError(true);
//             setVideoLoaded(false);
//           }}
//           hotspots={scenes[currentScene].hotspots.map(hotspot => ({
//             pitch: hotspot.pitch,
//             yaw: hotspot.yaw,
//             type: hotspot.type,
//             text: hotspot.text,
//             sceneId: hotspot.sceneId,
//             clickHandlerFunc: () => handleHotspotClick(hotspot),
//             clickHandlerArgs: hotspot
//           }))}
//         />
//       </PannellumViewer>

//       {activeInfo && (
//         <InfoOverlay>
//           <InfoContent>
//             <p>{activeInfo}</p>
//             <CloseButton onClick={() => setActiveInfo(null)}>×</CloseButton>
//           </InfoContent>
//         </InfoOverlay>
//       )}

//       <NavigationDots>
//         {Object.keys(scenes).map((sceneId) => (
//           <Dot
//             key={sceneId}
//             $active={currentScene === sceneId}
//             onClick={() => handleSceneChange(sceneId)}
//             title={scenes[sceneId].title}
//           />
//         ))}
//       </NavigationDots>
//     </TourContainer>
//   );
// };

// // Styled Components
// const TourContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   background-color: #000;
// `;

// const TourHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
//   background-color: rgba(0, 0, 0, 0.7);
//   color: white;
//   z-index: 10;
// `;

// const TourTitle = styled.h1`
//   margin: 0;
//   font-size: 1.5rem;
//   font-weight: 400;
// `;

// const TourControls = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

// const ControlButton = styled.button`
//   background: rgba(255, 255, 255, 0.2);
//   border: 1px solid white;
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: all 0.3s;

//   &:hover {
//     background: rgba(255, 255, 255, 0.3);
//   }
// `;

// const PannellumViewer = styled.div`
//   flex: 1;
//   width: 100%;
//   position: relative;
// `;

// const LoadingOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(0, 0, 0, 0.7);
//   color: white;
//   z-index: 5;
// `;

// const Spinner = styled.div`
//   border: 4px solid rgba(255, 255, 255, 0.3);
//   border-radius: 50%;
//   border-top: 4px solid white;
//   width: 40px;
//   height: 40px;
//   animation: spin 1s linear infinite;

//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `;

// const LoadingText = styled.p`
//   margin-top: 1rem;
//   font-size: 1.2rem;
// `;

// const ErrorOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(0, 0, 0, 0.9);
//   color: white;
//   z-index: 10;
//   padding: 2rem;
//   text-align: center;

//   h3 {
//     margin-bottom: 0.5rem;
//   }

//   p {
//     margin-bottom: 1.5rem;
//   }
// `;

// const RetryButton = styled.button`
//   padding: 0.75rem 1.5rem;
//   background: #4CAF50;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background: #45a049;
//   }
// `;

// const NavigationDots = styled.div`
//   position: absolute;
//   bottom: 1rem;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 0.8rem;
//   z-index: 10;
//   background: rgba(0, 0, 0, 0.5);
//   padding: 0.8rem;
//   border-radius: 2rem;
// `;

// const Dot = styled.div<{ $active: boolean }>`
//   width: 14px;
//   height: 14px;
//   border-radius: 50%;
//   background-color: ${(props) => (props.$active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
//   cursor: pointer;
//   transition: all 0.3s;
//   border: ${(props) => (props.$active ? '2px solid #fff' : 'none')};

//   &:hover {
//     transform: scale(1.3);
//     background-color: white;
//   }
// `;


// const InfoOverlay = styled.div`
//   position: absolute;
//   bottom: 2rem;
//   left: 2rem;
//   background: rgba(0, 0, 0, 0.8);
//   color: white;
//   padding: 1.5rem;
//   border-radius: 8px;
//   max-width: 400px;
//   z-index: 10;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

//   @media (max-width: 768px) {
//     max-width: 80%;
//     left: 50%;
//     transform: translateX(-50%);
//     bottom: 5rem;
//   }
// `;

// const InfoContent = styled.div`
//   position: relative;
//   padding-right: 1.5rem;

//   p {
//     margin: 0;
//     line-height: 1.5;
//   }
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: -0.5rem;
//   right: -0.5rem;
//   background: white;
//   border: none;
//   border-radius: 50%;
//   width: 1.8rem;
//   height: 1.8rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   font-size: 1.2rem;
//   color: black;
//   font-weight: bold;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//   transition: all 0.2s;

//   &:hover {
//     transform: scale(1.1);
//     background: #f0f0f0;
//   }
// `;

// export default VirtualTourPage;