import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

export function Banner() {
  return (
    <section className="bg-white text-[#cceeff] py-10 text-center">
      <div>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <img src="src/assets/banner.jpg" alt="" className="w-[90%] max-h-[80vh] mx-auto rounded-2xl object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>

    </section>
  );
}