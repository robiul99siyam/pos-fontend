import "swiper/css";
import "swiper/css/navigation";
import { CategoryFetch } from "../../fetures/CategoryFetch";
import { useCategory } from "../../hooks/useCategory";

export default function Category({ handleFilterFunction }) {
  const { state } = useCategory();
  const { loading, error } = CategoryFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {state?.categorys.map((category) => (
        <button
          onClick={() => handleFilterFunction(category?.name)}
          key={category?.id}
          className="shadow-md border border-gray-600 m-3 px-6 py-2 rounded-md"
        >
          {category.name}
        </button>
      ))}
    </>
  );
}
