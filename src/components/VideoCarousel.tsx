// // components/VideoCarousel.tsx
// import React from "react"
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"

// const videos = [
//   {
//     title: "Vivek Oberoi goes for complete Detox and Rejuvenation at Wellness Nature Cure",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "Arunraj Kashyap shares his best decision I've ever taken",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "Come by choice rather than illness - JD Majethia (Actor & Producer)",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "Reyhna Malhotra shares her Wellness experience",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "Words for Wellness from Mr Oliver – Germany",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "Our Happy Client speaks about her wonderful experience at Wellness",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "Wellness transformed my health - Priya Sharma",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "Best wellness retreat in India - Dr. Michael Chen",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "My 2-week detox journey at Wellness - Rohan Patel",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "Natural healing at its best - Maria Gonzalez",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "Why I keep coming back to Wellness - Sanjay Verma",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
//   {
//     title: "From stress to serenity - Aarti Khanna's story",
//     url: "https://youtu.be/BfWPhJuokX8",
//   },
// ]

// export default function VideoCarousel() {
//   const [sliderRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: {
//       perView: 3,
//       spacing: 16,
//     },
//     breakpoints: {
//       "(max-width: 768px)": {
//         slides: {
//           perView: 1,
//           spacing: 10,
//         },
//       },
//       "(max-width: 1024px)": {
//         slides: {
//           perView: 2,
//           spacing: 12,
//         },
//       },
//     },
//   })

//   return (
//     <section className="py-16 px-4 bg-[#f6f8ee]">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-playfair text-center text-sage-600 mb-10">
//           Guest Testimonials
//         </h2>
//         <div ref={sliderRef} className="keen-slider">
//           {videos.map((video, index) => (
//             <div
//               key={index}
//               className="keen-slider__slide bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
//             >
//               <div className="aspect-video mb-4 overflow-hidden rounded-lg">
//                 <iframe
//                   className="w-full h-full"
//                   src={video.url.replace("youtu.be", "youtube.com/embed")}
//                   title={video.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <p className="text-gray-700 text-sm font-medium">{video.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


// components/VideoCarousel.tsx
import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const videos = [
  {
    title: "Vivek Oberoi goes for complete Detox and Rejuvenation at Nowal Nature Cure",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Arunraj Kashyap shares his best decision I've ever taken",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Come by choice rather than illness - JD Majethia (Actor & Producer)",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Reyhna Malhotra shares her Nowal experience",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Words for Nowal from Mr Oliver – Germany",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Our Happy Client speaks about her wonderful experience at Nowal",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Nowal transformed my health - Priya Sharma",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Best Nowal retreat in India - Dr. Michael Chen",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "My 2-week detox journey at Nowal - Rohan Patel",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Natural healing at its best - Maria Gonzalez",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Why I keep coming back to Wellness - Sanjay Verma",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "From stress to serenity - Aarti Khanna's story",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Life-changing experience at Wellness - David Wilson",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Holistic healing for mind and body - Neha Kapoor",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Wellness's ayurvedic treatments - Rajiv Mehta",
    url: "https://youtu.be/BfWPhJuokX8",
  },
  {
    title: "Finding balance at Wellness - Sophie Martin",
    url: "https://youtu.be/BfWPhJuokX8",
  },
]

export default function VideoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 10,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
    },
  })

  return (
    <section className="py-16 px-4 bg-[#f6f8ee]">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl font-playfair text-center text-sage-600 mb-10">
          Guest Testimonials
        </h2>
        
        <div ref={sliderRef} className="keen-slider">
          {videos.map((video, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <iframe
                  className="w-full h-full"
                  src={video.url.replace("youtu.be", "youtube.com/embed")}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-700 text-sm font-medium">{video.title}</p>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-sage-100 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-sage-600"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-sage-100 transition-colors"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-sage-600"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </>
        )}

        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-6 space-x-2">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === idx ? "bg-sage-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}