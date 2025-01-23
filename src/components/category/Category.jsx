import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // Import navigation module
import { Swiper, SwiperSlide } from "swiper/react";
import { CategoryFetch } from "../../fetures/CategoryFetch";
import { useCategory } from "../../hooks/useCategory";

export default function Category() {
  const { state } = useCategory();
  const { loading, error } = CategoryFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Swiper
        spaceBetween={3}
        slidesPerView={4}
        navigation={true}
        modules={[Navigation]}
        className="mb-4"
      >
        {state?.categorys.map((category) => (
          <SwiperSlide key={category.id}>
            <button className="shadow-md border border-gray-300 px-6 py-2 rounded-md">
              {category.name}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
