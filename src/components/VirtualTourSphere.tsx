import { Viewer } from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
import { useEffect, useRef } from 'react'

const VirtualTourSphere = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (containerRef.current) {
      new Viewer({
        container: containerRef.current,
        panorama: 'https://cst-media2.viomassl.com/8291/968877/1160x720s/das_gerstl_alpine_retreat.jpg', // Replace with actual path
      })
    }
  }, [])

  return <div ref={containerRef} className="w-full h-[80vh]" />
}

export default VirtualTourSphere

// import React, { useEffect, useRef } from 'react'
// import { Viewer } from 'photo-sphere-viewer'
// import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

// const VirtualTourSphere = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null)

//   useEffect(() => {
//     if (containerRef.current) {
//       new Viewer({
//         container: containerRef.current,
//         panorama: 'https://cst-media2.viomassl.com/8291/968877/1160x720s/das_gerstl_alpine_retreat.jpg',
//         caption: 'Sample Virtual Tour - Museum',
//         loadingImg: 'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
//         defaultLat: 0.3,
//         touchmoveTwoFingers: true,
//         mousewheelCtrlKey: true,
//       })
//     }
//   }, [])

//   return (
//     <div className="w-full h-[80vh] bg-black rounded-lg overflow-hidden">
//       <div ref={containerRef} className="w-full h-full" />
//     </div>
//   )
// }

// export default VirtualTourSphere
