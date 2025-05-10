// src/components/Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  const slides = [
    {
      id: 1,
      title: "Fresh Arrivals",
      description: "New collection out now",
      image: "./a.jpg",
    },
    {
      id: 2,
      title: "Summer Sale",
      description: "Up to 50% off!",
      image: "./b.webp",
    },
    {
      id: 3,
      title: "Exclusive Deals",
      description: "Only for this week",
      image: "./c.webp",
    },
  ];

  return (
    <div className="w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[850px] object-fill"
              />
              <div className="absolute inset-0 bg-black/10 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
