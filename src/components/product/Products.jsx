import { ProductFetch } from "../../fetures/ProductFetch";
import { useProduct } from "../../hooks/useProduct";
import NoFound from "../pages/NoFound";

export default function Products({ id, handleProductDispatch }) {
  const { state } = useProduct();
  const { loading, error } = ProductFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = state?.products || [];
  const filteredProducts = id
    ? products.filter((product) => product.category?.name === id)
    : products;

  const renderProductCard = (product) => (
    <div
      key={product.id}
      onClick={() => handleProductDispatch(product)}
      className="p-2  rounded-md border border-gray-700 transform duration-300 "
    >
      <img
        src={
          product.image
            ? `${import.meta.env.VITE_SERVER_BASE_URL}/${product.image}`
            : "https://via.placeholder.com/150"
        }
        className="w-full h-[100px]  object-cover rounded-md"
        alt={product.name}
      />
      <p className="text-sm font-semibold  m-1 text-start">
        {product.name.slice(0, 24)}..
      </p>
      <div className="flex flex-wrap items-center mt-[2px]">
        {product.sizes.map((size) => (
          <span
            key={size}
            className="text-xs font-medium  border border-lwsGreen px-3 py-1 mr-[2px] mb-[2px] rounded-full"
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(renderProductCard)
        ) : (
          <NoFound />
        )}
      </div>
    </>
  );
}
