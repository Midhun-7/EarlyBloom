'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ConcernSwiper = ({ ageGroup, concerns }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Ensure refs are ready before Swiper renders
    setIsReady(true);
  }, []);

  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <h3 className="text-lg font-bold text-[#111518]">{ageGroup}</h3>

      <div className="relative w-full max-w-md flex items-center justify-center">
        {/* Left Arrow */}
        <button
          ref={prevRef}
          className="absolute left-[-48px] z-10 rounded-full bg-[#f0f3f4] p-2 shadow-md"
        >
          <svg className="h-5 w-5 text-[#111518]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12.293 15.707a1 1 0 01-1.414 0L5.586 10l5.293-5.707a1 1 0 111.414 1.414L8.414 10l3.879 4.293a1 1 0 010 1.414z" />
          </svg>
        </button>

        {/* Swiper */}
        {isReady && (
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="w-full"
          >
            {concerns.map((concern, index) => (
              <SwiperSlide key={index}>
                <div className="p-5 border rounded-xl shadow-sm bg-white text-center">
                  <p className="text-lg font-bold mb-2 text-[#111518]">{concern.question}</p>
                  <p className="text-sm text-[#d00] font-medium">{concern.flag}</p>
                  <p className="mt-2 text-sm text-[#60798a]">{concern.comfort}</p>
                  <p className="mt-2 text-sm text-[#60798a] italic">{concern.advice}</p>
                  <button className="mt-4 rounded-full bg-[#34a3f3] px-4 py-2 text-sm font-medium text-white">
                    {concern.cta}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Right Arrow */}
        <button
          ref={nextRef}
          className="absolute right-[-48px] z-10 rounded-full bg-[#f0f3f4] p-2 shadow-md"
        >
          <svg className="h-5 w-5 text-[#111518]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7.707 15.707a1 1 0 010-1.414L11.586 10 7.707 6.121a1 1 0 011.414-1.414L13.414 10l-4.293 4.293a1 1 0 01-1.414 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ConcernSwiper;
