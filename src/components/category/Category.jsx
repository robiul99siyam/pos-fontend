import { CategoryFetch } from "../../fetures/CategoryFetch";
import { useCategory } from "../../hooks/useCategory";
import CateogryCard from "../category/CategoryCard.jsx";
export default function Category() {
  const { state } = useCategory();

  const { loading, error } = CategoryFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-5">Category</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {state?.categorys.map((item) => (
            <CateogryCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
