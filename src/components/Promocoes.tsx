// components/Promocoes.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Promocoes() {
  const promocoes = [
    {
      img: "src/assets/banner-promocao.png",
    },
    {
      img: "src/assets/banner-promocao2.png",
    },
  ];

  return (
    <section className="py-12 bg-red-50 my-20" id="promocoes">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#F92828]">
        Promoções da Semana
      </h2>
      <div className="max-w-4xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          className="rounded-2xl"
        >
          {promocoes.map((promo, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={promo.img}
                alt={`Promoção ${idx + 1}`}
                className="w-full rounded-2xl shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
