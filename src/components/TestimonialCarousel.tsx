// import React from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

// const testimonials = [
//   {
//     name: "Vivek Oberoi",
//     title: "Actor, Bollywood, India",
//     image:
//       "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
//     quote:
//       "I was truly taken by surprise & my experience at nimba has been exceptional. I believe Naturopathy is the need of the hour as people are done with allopathic treatments and their side effects.",
//   },
//   {
//     name: "Raveena Taurani",
//     title: "Nutritionist",
//     image:
//       "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
//     quote:
//       "I appreciate their food plan which is not fasting focussed, instead focuses on the right mix.",
//   },
//   {
//     name: "Reyhna Malhotra",
//     title: "Model & Actress",
//     image:
//       "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
//     quote:
//       "I have had a good detox & inch loss. The nimba retreat with holistic approach and goodness of Naturopathy, Ayurveda, Yoga, Hydrotherapy, Raga therapy and many more is amazing.",
//   },
//   {
//     name: "Rajkumar Santoshi",
//     title: "Director – Bollywood",
//     image:
//       "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
//     quote:
//       "Lifestyle correction upholding therapeutic values in consonance with the prevailing times is what nimba stands for.",
//   },
//   {
//     name: "Anurag Kashyap",
//     title: "Director – Bollywood",
//     image:
//       "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
//     quote:
//       "I think it's the best decision that I ever made to visit nimba. I am feeling healthier than before.",
//   },
//   {
//     name: "Niranjan Iyer",
//     title: "Writer – Bollywood",
//     image:
//       "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
//     quote: "nimba rejuvenation package has set me in top gear to be in action.",
//   },
// ];

// export default function TestimonialCarousel() {
//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: {
//       origin: "center",
//       perView: 3,
//       spacing: 24,
//     },
//     breakpoints: {
//       "(max-width: 1024px)": {
//         slides: { perView: 2, spacing: 20 },
//       },
//       "(max-width: 768px)": {
//         slides: { perView: 1, spacing: 16, origin: "auto" },
//       },
//     },
//   });

//   return (
//     <section className="py-28 bg-[#f6f8ee] px-4 overflow-visible relative">
//       <div className="max-w-7xl mx-auto overflow-visible relative">
//         <h2 className="text-3xl font-bold text-center text-sage-600 mb-16">
//           What Celebrities Say About nimba
//         </h2>
        
//         {/* Navigation Arrows */}
//         <button 
//           onClick={() => instanceRef.current?.prev()} 
//           className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-sage-600 transition-all items-center justify-center text-sage-600 hover:text-white border border-sage-600"
//           aria-label="Previous testimonials"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {/* Carousel Container with padding for profile images */}
//         <div className="pt-16 relative">
//           <div ref={sliderRef} className="keen-slider overflow-visible">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="keen-slider__slide flex flex-col items-center text-center bg-white rounded-xl shadow-md pb-6 px-6 h-full min-h-[300px]"
//               >
//                 {/* Profile Image - positioned above the card */}
//                 <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md bg-white"
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* Card Content */}
//                 <div className="mt-12 w-full">
//                   <h3 className="text-lg font-semibold text-sage-700">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-sm font-medium text-gray-600 mb-4">
//                     {testimonial.title}
//                   </p>
//                   <p className="text-sm text-gray-700">{testimonial.quote}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button 
//           onClick={() => instanceRef.current?.next()} 
//           className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-sage-600 transition-all items-center justify-center text-sage-600 hover:text-white border border-sage-600"
//           aria-label="Next testimonials"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Dot Indicators for Mobile */}
//         <div className="flex justify-center mt-8 md:hidden space-x-2">
//           {testimonials.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => instanceRef.current?.moveToIdx(idx)}
//               className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-sage-600 transition-colors"
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

// const testimonials = [
//   {
//     name: "Vivek Oberoi",
//     title: "Actor, Bollywood, India",
//     image:
//       "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
//     quote:
//       "I was truly taken by surprise & my experience at nimba has been exceptional. I believe Naturopathy is the need of the hour as people are done with allopathic treatments and their side effects.",
//   },
//   {
//     name: "Raveena Taurani",
//     title: "Nutritionist",
//     image:
//       "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
//     quote:
//       "I appreciate their food plan which is not fasting focussed, instead focuses on the right mix.",
//   },
//   {
//     name: "Reyhna Malhotra",
//     title: "Model & Actress",
//     image:
//       "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
//     quote:
//       "The nimba retreat with Naturopathy, Ayurveda, Yoga, Hydrotherapy, and Raga therapy is amazing. I've had a good detox and inch loss.",
//   },
// ];

// export default function TestimonialCarousel() {
//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     slides: {
//       origin: "center",
//       perView: 3,
//       spacing: 24,
//     },
//     breakpoints: {
//       "(max-width: 1024px)": {
//         slides: { perView: 2, spacing: 20 },
//       },
//       "(max-width: 768px)": {
//         slides: { perView: 1, spacing: 16 },
//       },
//     },
//   });

//   return (
//     <section className="py-28 bg-gradient-to-b from-[#f6f8ee] to-[#e5f3da] px-4 overflow-visible relative">
//       <div className="max-w-7xl mx-auto relative">
//         <h2 className="text-4xl font-bold text-center text-green-900 mb-16 leading-snug">
//           What Celebrities Say <br />
//           <span className="text-green-700">About nimba</span>
//         </h2>

//         {/* Arrows */}
//         <button
//           onClick={() => instanceRef.current?.prev()}
//           className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-xl hover:bg-green-700 transition-all items-center justify-center text-green-700 hover:text-white border border-green-600"
//           aria-label="Previous testimonials"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>

//         {/* Slider */}
//         <div className="pt-20">
//           <div ref={sliderRef} className="keen-slider overflow-visible">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="keen-slider__slide flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-8 pt-20 relative transition-transform hover:scale-105 duration-300"
//               >
//                 {/* Profile Image Floating */}
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-md bg-white"
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* Content */}
//                 <p className="text-gray-700 italic mb-6">“{testimonial.quote}”</p>
//                 <div className="mt-auto">
//                   <h3 className="text-lg font-semibold text-green-800">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-sm text-gray-500">{testimonial.title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Arrows */}
//         <button
//           onClick={() => instanceRef.current?.next()}
//           className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-xl hover:bg-green-700 transition-all items-center justify-center text-green-700 hover:text-white border border-green-600"
//           aria-label="Next testimonials"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         {/* Dots for mobile */}
//         <div className="flex justify-center mt-10 md:hidden space-x-2">
//           {testimonials.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => instanceRef.current?.moveToIdx(idx)}
//               className="w-3 h-3 rounded-full bg-gray-300 hover:bg-green-700 focus:bg-green-800 transition-colors"
//               aria-label={`Go to slide ${idx + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    name: "Vivek Oberoi",
    title: "Actor, Bollywood, India",
    image:
      "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
    quote:
      "I was truly taken by surprise & my experience at nowal has been exceptional. I believe Naturopathy is the need of the hour as people are done with allopathic treatments and their side effects.",
  },
  {
    name: "Raveena Taurani",
    title: "Nutritionist",
    image:
      "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
    quote:
      "I appreciate their food plan which is not fasting focussed, instead focuses on the right mix.",
  },
  {
    name: "Reyhna Malhotra",
    title: "Model & Actress",
    image:
      "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
    quote:
      "The nowal retreat with Naturopathy, Ayurveda, Yoga, Hydrotherapy, and Raga therapy is amazing. I've had a good detox and inch loss.",
  },
  {
    name: "John Doe",
    title: "nowal Coach",
    image:
      "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
    quote:
      "nowal provides a holistic approach to health that combines ancient wisdom with modern techniques.",
  },
  {
    name: "Jane Smith",
    title: "Yoga Instructor",
    image:
      "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
    quote:
      "The environment at nowal is perfect for rejuvenation and self-discovery. Highly recommended!",
  },
  {
    name: "Raveena Taurani",
    title: "Nutritionist",
    image:
      "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
    quote:
      "I appreciate their food plan which is not fasting focussed, instead focuses on the right mix.",
  },
  {
    name: "Reyhna Malhotra",
    title: "Model & Actress",
    image:
      "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
    quote:
      "The nowal retreat with Naturopathy, Ayurveda, Yoga, Hydrotherapy, and Raga therapy is amazing. I've had a good detox and inch loss.",
  },
  {
    name: "John Doe",
    title: "nowal Coach",
    image:
      "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
    quote:
      "nowal provides a holistic approach to health that combines ancient wisdom with modern techniques.",
  },
  {
    name: "Jane Smith",
    title: "Yoga Instructor",
    image:
      "https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png",
    quote:
      "The environment at nowal is perfect for rejuvenation and self-discovery. Highly recommended!",
  },
];

export default function TestimonialCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: "center",
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
    // Add smooth animation configuration
    dragSpeed: 0.8,
    created: (instance) => {
      instance.container.addEventListener("mousedown", () => {
        instance.container.style.cursor = "grabbing";
      });
      instance.container.addEventListener("mouseup", () => {
        instance.container.style.cursor = "grab";
      });
    },
    renderMode: "performance",
    rubberband: false,
    mode: "snap",
    drag: true,
    animationEnded: (instance) => {
      instance.container.style.cursor = "grab";
    },
  });

  return (
    <section className="py-28 bg-gradient-to-b from-[#f6f8ee] to-[#e5f3da] px-4 overflow-visible relative">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-16 leading-snug">
          What Celebrities Say <br />
          <span className="text-green-700">About Nowal</span>
        </h2>

        {/* Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            instanceRef.current?.prev();
          }}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-xl hover:bg-green-700 transition-all items-center justify-center text-green-700 hover:text-white border border-green-600"
          aria-label="Previous testimonials"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slider */}
        <div className="pt-10">
          <div ref={sliderRef} className="keen-slider overflow-visible" style={{ cursor: "grab" }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                {/* Profile Image inside card */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md bg-white mb-4"
                  loading="lazy"
                />

                {/* Content */}
                <h3 className="text-lg font-semibold text-green-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{testimonial.title}</p>
                <p className="text-sm text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            instanceRef.current?.next();
          }}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-xl hover:bg-green-700 transition-all items-center justify-center text-green-700 hover:text-white border border-green-600"
          aria-label="Next testimonials"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots for mobile */}
        <div className="flex justify-center mt-10 md:hidden space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                instanceRef.current?.track.details.rel === idx
                  ? "bg-green-700"
                  : "bg-gray-300 hover:bg-green-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}