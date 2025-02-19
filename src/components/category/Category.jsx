import { useTour } from "@reactour/tour";
import "swiper/css";
import "swiper/css/navigation";
import { CategoryFetch } from "../../fetures/CategoryFetch";
import { useCategory } from "../../hooks/useCategory";

export default function Category({ handleFilterFunction, setProductFilter }) {
  const { state } = useCategory();
  const { loading, error } = CategoryFetch();
  const { setIsOpen } = useTour();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="">
        {" "}
        <button
          onClick={() => setProductFilter("")}
          className="shadow-md border  border-gray-600 hover:border-lwsGreen transform duration-1000m-3 px-6 py-2 rounded-md overflow-hidden "
        >
          Show All
        </button>
        {state?.categorys.map((category) => (
          <button
            onClick={() =>
              handleFilterFunction(category?.name) || setIsOpen(true)
            }
            key={category?.id}
            className="shadow-md border   border-gray-600 hover:border-lwsGreen transform duration-1000 m-3 px-6 py-2 rounded-md"
          >
            {category.name}
          </button>
        ))}
      </div>
    </>
  );
}
