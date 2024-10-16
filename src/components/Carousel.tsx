import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Import autoplay styles
import { Autoplay } from 'swiper/modules'; // Autoplay module


import 'swiper/css';
import 'swiper/css/autoplay';
//import design from './assets/design.png'; // Import principal's picture


const Carousel: React.FC = () => {
  return (
    <div className=" bg-gray-50">
          {/* Carousel Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000, // 3 seconds delay for each slide
              disableOnInteraction: false, // Allow autoplay to continue even if user interacts
            }}
            loop={true} // Enable looping to make the carousel continuous
            modules={[Autoplay]} // Include the Autoplay module
            className="w-full h-full rounded"
          >
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1693363772978-97eeb8c1cf25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="School 1" className="w-full h-96 object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1541504396618-5dafc8d0bf7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="School 2" className="w-full h-96 object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://images.unsplash.com/photo-1524070915974-97838e0bbbf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="School 3" className="w-full h-96 object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
       </div>
  );
};

export default Carousel
