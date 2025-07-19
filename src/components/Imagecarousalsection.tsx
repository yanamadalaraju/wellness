import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
 // optional external CSS

const images = [
  'https://media.istockphoto.com/id/1092466566/photo/modern-mid-century-and-minimalist-interior-of-living-room-empty-room-3d-render.jpg?s=612x612&w=0&k=20&c=QR_g0oWE5KsOBe0sreyICZcFU4BfMQ-_vfASwzWVaHY=',
  'https://media.istockphoto.com/id/1280464607/photo/hot-weather-in-india.jpg?s=612x612&w=0&k=20&c=VTxZCoKfQaZBgzpKstXnful3zRdGME_ZZwRBeuy5eqg=',
  'https://media.istockphoto.com/id/1393072849/photo/3d-rendering-of-white-empty-room-and-wooden-floor-contemporary-interior-background.jpg?s=612x612&w=0&k=20&c=I6psSpZHHXe8c1z_iOj0oqivWhC1lZWESU0cjn4LV5w=',
  'https://media.istockphoto.com/id/2212782994/photo/woman-in-bathrobe-standing-near-window.jpg?s=612x612&w=0&k=20&c=tavoiHX08MSAiGbWMS5Hiln6I4aoN_A1iokjnxjk_mM=',
  'https://media.istockphoto.com/id/2025383353/photo/modern-contemporary-cozy-white-bedroom-view-from-outside-the-room-through-the-door-3d-render.jpg?s=612x612&w=0&k=20&c=rNm6rOIJyBu87MOyJtJeVwJtRHm1-4iql1rCR4nydXs=',
  'https://media.istockphoto.com/id/1933752815/photo/modern-interior-of-living-room-with-leather-armchair-on-wood-flooring-and-dark-blue-wall.jpg?s=612x612&w=0&k=20&c=KqVE2Sh7Mjx_EBQC3bN1X3YPyCtcMCttKKB0aKnFN3E=',
  'https://media.istockphoto.com/id/2153237210/photo/man-embracing-morning-view-from-balcony.jpg?s=612x612&w=0&k=20&c=HLb_9OWayIMbWLmJsq3zoKP045EcpvmSiWIkfnzAdVA=',
];

const TherapyImageCarousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  return (
    <section className="bg-[#f3f4ee] py-16 px-4 md:px-16 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Slider */}
        <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden shadow-2xl">
          {images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <img
                src={src}
                alt={`Therapy ${idx + 1}`}
                className="w-full h-[450px] object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          ❮
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default TherapyImageCarousel;
