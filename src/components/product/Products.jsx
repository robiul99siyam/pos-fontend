import { ProductFetch } from "../../fetures/ProductFetch";
import { useProduct } from "../../hooks/useProduct";

export default function Products({ id, handleProductDispatch }) {
  const { state } = useProduct();
  const { loading, error } = ProductFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = state?.products || [];
  const filteredProducts = id
    ? products.filter((product) => product.id === id)
    : products;

  const renderProductCard = (product) => (
    <div
      key={product.id}
      onClick={() => handleProductDispatch(product)}
      className="p-2 h-auto border border-gray-300 hover:shadow-lg rounded-md hover:border-gray-500 transition duration-300"
    >
      <img
        src={
          product.image
            ? `${import.meta.env.VITE_SERVER_BASE_URL}/${product.image}`
            : "https://via.placeholder.com/150"
        }
        className="w-full h-[100px] object-cover rounded-md"
        alt={product.name}
      />
      <p className="text-sm font-semibold text-start mt-2">
        {product.name.slice(0, 30)}...
      </p>
      <div className="flex flex-wrap items-center mt-[2px]">
        {product.sizes.map((size) => (
          <span
            key={size}
            className="text-xs font-medium text-white bg-primary px-3 py-1 mr-[2px] mb-[2px] rounded-full"
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(renderProductCard)
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
