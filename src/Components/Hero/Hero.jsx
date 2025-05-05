import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useLoaderData } from "react-router";

const Hero = () => {
  const data = useLoaderData();

  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {data.map((event, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold"
              style={{
                backgroundImage: `url(${event.thumbnail})`,
              }}
            >
              <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xl text-center text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-md text-primary">
                  {event.name}
                </h2>
                <p className="text-md md:text-lg font-semibold  text-primary">
                  {event.date}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
