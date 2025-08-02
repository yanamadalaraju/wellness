// import React, { useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';


// // Define your image imports (replace with actual image paths)
// import image1 from '../../assets/nimbaimage';
// import image2 from '../../assets/';
// import image3 from './morning3.jpg';
// import image4 from './morning4.jpg';

// const images = [image1, image2, image3, image4];

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const slideInRight = keyframes`
//   from { opacity: 0; transform: translateX(50px); }
//   to { opacity: 1; transform: translateX(0); }
// `;

// const HeroContainer = styled.section`
//   position: relative;
//   height: 100vh;
//   width: 100%;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
// `;

// const BackgroundSlider = styled.div<{ activeIndex: number }>`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   transition: transform 1.5s ease-in-out;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.3);
//     z-index: 1;
//   }
// `;

// const BackgroundImage = styled.div<{ image: string; isActive: boolean }>`
//   min-width: 100%;
//   height: 100%;
//   background-image: url(${props => props.image});
//   background-size: cover;
//   background-position: center;
//   opacity: ${props => (props.isActive ? 1 : 0)};
//   transition: opacity 1.5s ease-in-out;
//   position: absolute;
//   top: 0;
//   left: 0;
// `;

// const ContentWrapper = styled.div`
//   position: relative;
//   z-index: 2;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 2rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const TimingContent = styled.div`
//   background: rgba(255, 255, 255, 0.9);
//   padding: 2rem;
//   border-radius: 12px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//   width: 40%;
//   animation: ${slideInRight} 1s ease-out forwards;
//   animation-delay: 0.5s;
//   opacity: 0;
// `;

// const TimeSlot = styled.div`
//   padding: 0.5rem 0;
//   border-bottom: 1px solid #eee;
//   font-size: 1.1rem;
//   color: #333;
//   font-weight: 500;

//   &:last-child {
//     border-bottom: none;
//   }
// `;

// const Title = styled.h1`
//   color: white;
//   font-size: 4rem;
//   margin-bottom: 1.5rem;
//   text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
//   animation: ${fadeIn} 1s ease-out forwards;
// `;

// const Subtitle = styled.p`
//   color: white;
//   font-size: 1.5rem;
//   max-width: 50%;
//   line-height: 1.6;
//   text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
//   animation: ${fadeIn} 1s ease-out forwards;
//   animation-delay: 0.3s;
//   opacity: 0;
// `;

// const HeroSection: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const timeSlots = [
//     "04:50 AM - 05:15 AM",
//     "06:00 AM - 06:15 AM",
//     "07:15 AM - 07:30 AM",
//     "08:00 AM - 12:30 PM",
//     "10:00 AM - 11:15 AM",
//     "12:00 PM - 1:30 PM"
//   ];

//   return (
//     <HeroContainer>
//       <BackgroundSlider activeIndex={activeIndex}>
//         {images.map((image, index) => (
//           <BackgroundImage 
//             key={index} 
//             image={image} 
//             isActive={index === activeIndex}
//           />
//         ))}
//       </BackgroundSlider>

//       <ContentWrapper>
//         <div>
//           <Title>Embrace the day</Title>
//           <Subtitle>Start your morning with a refreshing walk and these activities</Subtitle>
//         </div>

//         <TimingContent>
//           <h3 style={{ color: '#333', marginBottom: '1rem' }}>Today's Schedule</h3>
//           {timeSlots.map((slot, index) => (
//             <TimeSlot key={index}>{slot}</TimeSlot>
//           ))}
//         </TimingContent>
//       </ContentWrapper>
//     </HeroContainer>
//   );
// };

// export default HeroSection;

// // src/images.d.ts (create this file in your src folder)
// /*
// declare module '*.jpg';
// declare module '*.png';
// declare module '*.jpeg';
// declare module '*.gif';
// declare module '*.svg';
// */




//------------gayatrii--------//
// src/components/Dincharyacompo/Dincharyahero.tsx
// import React, { useState, useEffect } from 'react';
// import styled, { keyframes, css } from 'styled-components';

// // Sample image URLs
// const imageUrls = [
//   'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920',
//   'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920',
//   'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920',
//   'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920',
//   'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920',
//   'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920',
//   'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920',
//   'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920',
//   'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920',
//   'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920'
// ];

// // Animations
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const slideInRight = keyframes`
//   from { opacity: 0; transform: translateX(50px); }
//   to { opacity: 1; transform: translateX(0); }
// `;

// const zoomOut = keyframes`
//   from { transform: scale(1.1); }
//   to { transform: scale(1); }
// `;

// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `;

// const gradient = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// // Styled Components
// const HeroContainer = styled.section`
//   position: relative;
//   height: 100vh;
//   width: 100%;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   font-family: 'Poppins', sans-serif;
// `;

// const BackgroundSlider = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
// `;

// const BackgroundImage = styled.div<{ image: string; isActive: boolean }>`
//   min-width: 100%;
//   height: 100%;
//   background-image: url(${props => props.image});
//   background-size: cover;
//   background-position: center;
//   opacity: ${props => (props.isActive ? 1 : 0)};
//   transition: opacity 1.5s ease-in-out;
//   position: absolute;
//   top: 0;
//   left: 0;
//   animation: 
//     ${props => props.isActive ? zoomOut : 'none'} 15s linear forwards,
//     ${props => props.isActive ? pulse : 'none'} 15s ease-in-out infinite;
//   transform-origin: center;
//   z-index: 0;

//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
//     z-index: 1;
//   }
// `;

// const ContentWrapper = styled.div`
//   position: relative;
//   z-index: 2;
//   width: 100%;
//   max-width: 1400px;
//   margin: 0 auto;
//   padding: 0 4rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 4rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     padding: 0 2rem;
//     text-align: center;
//     gap: 2rem;
//   }
// `;

// const TextContent = styled.div`
//   flex: 1;
//   animation: ${fadeIn} 1s ease-out forwards;
// `;

// const TimingContent = styled.div`
//   background: rgba(255, 255, 255, 0.95);
//   padding: 2.5rem;
//   border-radius: 20px;
//   box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//   width: 42%;
//   max-height: 80vh;
//   overflow-y: auto;
//   animation: ${slideInRight} 1s ease-out forwards;
//   animation-delay: 0.5s;
//   opacity: 0;
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.3);
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     margin-top: 2rem;
//     padding: 1.5rem;
//   }

//   &::-webkit-scrollbar {
//     width: 6px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: linear-gradient(45deg, #2e86de, #a55eea);
//     border-radius: 3px;
//   }
// `;

// const TimeSlot = styled.div<{ isHighlighted: boolean }>`
//   padding: 1rem;
//   border-radius: 12px;
//   margin-bottom: 0.5rem;
//   font-size: 1.1rem;
//   color: ${props => props.isHighlighted ? '#fff' : '#444'};
//   font-weight: ${props => props.isHighlighted ? '600' : '500'};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   background: ${props => props.isHighlighted 
//     ? 'linear-gradient(45deg, #2e86de, #a55eea)' 
//     : 'transparent'};
//   box-shadow: ${props => props.isHighlighted 
//     ? '0 10px 20px -5px rgba(46, 134, 222, 0.4)' 
//     : 'none'};
//   transform: ${props => props.isHighlighted ? 'scale(1.02)' : 'scale(1)'};

//   &:hover {
//     color: ${props => props.isHighlighted ? '#fff' : '#000'};
//     transform: translateX(5px) scale(${props => props.isHighlighted ? '1.02' : '1'});
//     background: ${props => props.isHighlighted 
//       ? 'linear-gradient(45deg, #2e86de, #a55eea)' 
//       : 'rgba(0,0,0,0.03)'};
//   }

//   &:last-child {
//     margin-bottom: 0;
//   }
// `;

// const Time = styled.span<{ isHighlighted: boolean }>`
//   font-weight: ${props => props.isHighlighted ? '700' : '600'};
//   color: ${props => props.isHighlighted ? '#fff' : '#2c3e50'};
//   font-size: ${props => props.isHighlighted ? '1.1rem' : '1rem'};
//   background: ${props => props.isHighlighted 
//     ? 'rgba(255,255,255,0.2)' 
//     : 'rgba(46, 134, 222, 0.1)'};
//   padding: ${props => props.isHighlighted ? '0.3rem 0.8rem' : '0.2rem 0.6rem'};
//   border-radius: 20px;
//   transition: all 0.3s ease;
// `;

// const Title = styled.h1`
//   color: white;
//   font-size: 4.5rem;
//   margin-bottom: 1.5rem;
//   text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.6);
//   animation: ${fadeIn} 1s ease-out forwards;
//   line-height: 1.1;
//   font-weight: 700;
//   background: linear-gradient(45deg, #fff, #e0e0e0);
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent;
//   position: relative;
//   display: inline-block;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 0;
//     width: 100px;
//     height: 4px;
//     background: linear-gradient(45deg, #2e86de, #a55eea);
//     border-radius: 2px;
//   }

//   @media (max-width: 992px) {
//     font-size: 3.5rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//     &::after {
//       width: 60px;
//       height: 3px;
//       bottom: -5px;
//     }
//   }
// `;

// const Subtitle = styled.p`
//   color: rgba(255, 255, 255, 0.9);
//   font-size: 1.5rem;
//   max-width: 80%;
//   line-height: 1.6;
//   text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
//   animation: ${fadeIn} 1s ease-out forwards;
//   animation-delay: 0.3s;
//   opacity: 0;
//   margin-bottom: 2rem;
//   font-weight: 300;

//   @media (max-width: 992px) {
//     font-size: 1.3rem;
//     max-width: 90%;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.1rem;
//     max-width: 100%;
//   }
// `;

// const DotNavigation = styled.div`
//   position: absolute;
//   bottom: 40px;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 12px;
//   z-index: 3;
// `;

// const Dot = styled.div<{ isActive: boolean }>`
//   width: ${props => props.isActive ? '24px' : '12px'};
//   height: 12px;
//   background: ${props => props.isActive 
//     ? 'linear-gradient(45deg, #2e86de, #a55eea)' 
//     : 'rgba(255,255,255,0.5)'};
//   border-radius: ${props => props.isActive ? '6px' : '50%'};
//   cursor: pointer;
//   transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   box-shadow: ${props => props.isActive 
//     ? '0 0 15px rgba(46, 134, 222, 0.6)' 
//     : 'none'};

//   &:hover {
//     background: linear-gradient(45deg, #2e86de, #a55eea);
//     transform: scale(1.2);
//   }
// `;

// const ScheduleTitle = styled.h3`
//   color: #2c3e50;
//   margin-bottom: 2rem;
//   font-size: 1.8rem;
//   position: relative;
//   padding-bottom: 1rem;
//   font-weight: 600;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 60px;
//     height: 3px;
//     background: linear-gradient(45deg, #2e86de, #a55eea);
//     border-radius: 3px;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.5rem;
//   }
// `;

// const CurrentTimeIndicator = styled.div`
//   background: linear-gradient(45deg, #2e86de, #a55eea);
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 20px;
//   font-size: 0.9rem;
//   font-weight: 600;
//   margin-bottom: 1.5rem;
//   display: inline-block;
//   box-shadow: 0 5px 15px rgba(46, 134, 222, 0.3);
//   animation: ${pulse} 2s infinite;
// `;

// const DinHeroSection: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [currentTime, setCurrentTime] = useState('');

//   useEffect(() => {
//     // Update current time every minute
//     const updateTime = () => {
//       const now = new Date();
//       const timeString = now.toLocaleTimeString('en-US', {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: true
//       });
//       setCurrentTime(timeString);
//     };

//     updateTime();
//     const intervalId = setInterval(updateTime, 60000);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     if (isPaused) return;

//     const interval = setInterval(() => {
//       setActiveIndex(prev => (prev + 1) % imageUrls.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   const timeSlots = [
//     { time: "04:50 AM - 05:15 AM", activity: "Morning Walk" },
//     { time: "06:00 AM - 06:15 AM", activity: "Meditation" },
//     { time: "07:15 AM - 07:30 AM", activity: "Breakfast" },
//     { time: "08:00 AM - 12:30 PM", activity: "Work Session" },
//     { time: "10:00 AM - 11:15 AM", activity: "Meeting" },
//     { time: "12:00 PM - 1:30 PM", activity: "Lunch Break" },
//     { time: "02:00 PM - 04:00 PM", activity: "Creative Work" },
//     { time: "04:30 PM - 05:30 PM", activity: "Exercise" },
//     { time: "06:30 PM - 07:30 PM", activity: "Dinner" },
//     { time: "09:00 PM - 10:00 PM", activity: "Reading" }
//   ];

//   // Get the current highlighted time slot based on activeIndex
//   const highlightedSlotIndex = activeIndex % timeSlots.length;

//   return (
//     <HeroContainer 
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <BackgroundSlider>
//         {imageUrls.map((image, index) => (
//           <BackgroundImage 
//             key={index} 
//             image={image} 
//             isActive={index === activeIndex}
//           />
//         ))}
//       </BackgroundSlider>

//       <ContentWrapper>
//         <TextContent>
//           <Title>Embrace Your Day</Title>
//           <Subtitle>
//             Start your morning with purpose and energy. Our carefully crafted schedule 
//             helps you maximize productivity while maintaining balance.
//           </Subtitle>
//         </TextContent>

//         <TimingContent>
//           {currentTime && (
//             <CurrentTimeIndicator>
//               Current Time: {currentTime}
//             </CurrentTimeIndicator>
//           )}
//           <ScheduleTitle>Today's Schedule</ScheduleTitle>
//           {timeSlots.map((slot, index) => (
//             <TimeSlot 
//               key={index} 
//               isHighlighted={index === highlightedSlotIndex}
//             >
//               <span>{slot.activity}</span>
//               <Time isHighlighted={index === highlightedSlotIndex}>{slot.time}</Time>
//             </TimeSlot>
//           ))}
//         </TimingContent>
//       </ContentWrapper>

//       <DotNavigation>
//         {imageUrls.map((_, index) => (
//           <Dot 
//             key={index} 
//             isActive={index === activeIndex}
//             onClick={() => setActiveIndex(index)}
//           />
//         ))}
//       </DotNavigation>
//     </HeroContainer>
//   );
// };

// export default DinHeroSection;



import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Sample image URLs
const imageUrls = [
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920',
  'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1920',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920'
];

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`;

const zoomOut = keyframes`
  from { transform: scale(1.1); }
  to { transform: scale(1); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
`;

const BackgroundSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const BackgroundImage = styled.div<{ image: string; isActive: boolean }>`
  min-width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.isActive ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  animation: 
    ${props => props.isActive ? zoomOut : 'none'} 15s linear forwards,
    ${props => props.isActive ? pulse : 'none'} 15s ease-in-out infinite;
  transform-origin: center;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out forwards;
`;

const TimingContent = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 42%;
  max-height: 80vh;
  overflow-y: auto;
  animation: ${slideInRight} 1s ease-out forwards;
  animation-delay: 0.5s;
  opacity: 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
    padding: 1.5rem;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #2e86de, #a55eea);
    border-radius: 3px;
  }
`;

const TimeSlot = styled.div<{ isHighlighted: boolean }>`
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: ${props => props.isHighlighted ? '#fff' : '#444'};
  font-weight: ${props => props.isHighlighted ? '600' : '500'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: ${props => props.isHighlighted 
    ? 'linear-gradient(45deg, #2e86de, #a55eea)' 
    : 'transparent'};
  box-shadow: ${props => props.isHighlighted 
    ? '0 10px 20px -5px rgba(46, 134, 222, 0.4)' 
    : 'none'};
  transform: ${props => props.isHighlighted ? 'scale(1.02)' : 'scale(1)'};

  &:hover {
    color: ${props => props.isHighlighted ? '#fff' : '#000'};
    transform: translateX(5px) scale(${props => props.isHighlighted ? '1.02' : '1'});
    background: ${props => props.isHighlighted 
      ? 'linear-gradient(45deg, #2e86de, #a55eea)' 
      : 'rgba(0,0,0,0.03)'};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Time = styled.span<{ isHighlighted: boolean }>`
  font-weight: ${props => props.isHighlighted ? '700' : '600'};
  color: ${props => props.isHighlighted ? '#fff' : '#2c3e50'};
  font-size: ${props => props.isHighlighted ? '1.1rem' : '1rem'};
  background: ${props => props.isHighlighted 
    ? 'rgba(255,255,255,0.2)' 
    : 'rgba(46, 134, 222, 0.1)'};
  padding: ${props => props.isHighlighted ? '0.3rem 0.8rem' : '0.2rem 0.6rem'};
  border-radius: 20px;
  transition: all 0.3s ease;
`;

const Title = styled.h1`
  color: white;
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.6);
  animation: ${fadeIn} 1s ease-out forwards;
  line-height: 1.1;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #2e86de, #a55eea);
    border-radius: 2px;
  }

  @media (max-width: 992px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    &::after {
      width: 60px;
      height: 3px;
      bottom: -5px;
    }
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;
  max-width: 80%;
  line-height: 1.6;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
  margin-bottom: 2rem;
  font-weight: 300;

  @media (max-width: 992px) {
    font-size: 1.3rem;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
  }
`;

const DotNavigation = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: ${props => props.isActive ? '24px' : '12px'};
  height: 12px;
  background: ${props => props.isActive 
    ? 'linear-gradient(45deg, #2e86de, #a55eea)' 
    : 'rgba(255,255,255,0.5)'};
  border-radius: ${props => props.isActive ? '6px' : '50%'};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: ${props => props.isActive 
    ? '0 0 15px rgba(46, 134, 222, 0.6)' 
    : 'none'};

  &:hover {
    background: linear-gradient(45deg, #2e86de, #a55eea);
    transform: scale(1.2);
  }
`;

const ScheduleTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  position: relative;
  padding-bottom: 1rem;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(45deg, #2e86de, #a55eea);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CurrentTimeIndicator = styled.div`
  background: linear-gradient(45deg, #2e86de, #a55eea);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: inline-block;
  box-shadow: 0 5px 15px rgba(46, 134, 222, 0.3);
  animation: ${pulse} 2s infinite;
`;

const DinHeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Update current time every minute
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % imageUrls.length);
    }, 900); // 2-second interval

    return () => clearInterval(interval);
  }, [isPaused]);

  const timeSlots = [
    { time: "05:00 AM - 06:00 AM", activity: "Morning Walk" },
    { time: "06:00 AM - 06:15 AM", activity: "Meditation" },
    { time: "07:15 AM - 07:30 AM", activity: "Breakfast" },
    { time: "08:00 AM - 12:30 PM", activity: "Work Session" },
    { time: "10:00 AM - 11:15 AM", activity: "Meeting" },
    { time: "12:00 PM - 1:30 PM", activity: "Lunch Break" },
    { time: "02:00 PM - 04:00 PM", activity: "Creative Work" },
    { time: "04:30 PM - 05:30 PM", activity: "Exercise" },
    { time: "06:30 PM - 07:30 PM", activity: "Dinner" },
    { time: "09:00 PM - 10:00 PM", activity: "Reading" }
  ];

  // Get the current highlighted time slot based on activeIndex
  const highlightedSlotIndex = activeIndex % timeSlots.length;

  return (
    <HeroContainer 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <BackgroundSlider>
        {imageUrls.map((image, index) => (
          <BackgroundImage 
            key={index} 
            image={image} 
            isActive={index === activeIndex}
          />
        ))}
      </BackgroundSlider>

      <ContentWrapper>
        <TextContent>
          <Title>Embrace Your Day</Title>
          <Subtitle>
            Start your morning with purpose and energy. Our carefully crafted schedule 
            helps you maximize productivity while maintaining balance.
          </Subtitle>
        </TextContent>

        <TimingContent>
          {currentTime && (
            <CurrentTimeIndicator>
              Current Time: {currentTime}
            </CurrentTimeIndicator>
          )}
          <ScheduleTitle>Today's Schedule</ScheduleTitle>
          {timeSlots.map((slot, index) => (
            <TimeSlot 
              key={index} 
              isHighlighted={index === highlightedSlotIndex}
            >
              <span>{slot.activity}</span>
              <Time isHighlighted={index === highlightedSlotIndex}>{slot.time}</Time>
            </TimeSlot>
          ))}
        </TimingContent>
      </ContentWrapper>

      <DotNavigation>
        {imageUrls.map((_, index) => (
          <Dot 
            key={index} 
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </DotNavigation>
    </HeroContainer>
  );
};

export default DinHeroSection;