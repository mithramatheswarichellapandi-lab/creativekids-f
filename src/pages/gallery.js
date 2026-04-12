import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Gallery() {
  const images = Array.from({ length: 20 }, (_, i) => `/gallery${i + 1}.jpeg`);

  return (
    <section id="gallery" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Gradient Glow Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 
        bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 
        bg-clip-text text-transparent 
        drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
          Little Moments, <span className="uppercase tracking-widest">Big Memories</span>
        </h2>

        {/* Sub Paragraph */}
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-14">
          Every smile, every color splash, and every tiny achievement tells a beautiful story at
          <span className="font-semibold text-pink-600"> Creative Kids</span>. 
          Our gallery captures joyful learning, playful exploration, and unforgettable classroom moments. 
          These snapshots reflect the happiness, creativity, and confidence growing in our little stars each day.
        </p>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-[300px] object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Gallery;