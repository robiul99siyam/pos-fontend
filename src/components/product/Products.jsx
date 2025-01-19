export default function Products({ products }) {
  return (
    <div className="flex flex-wrap justify-start items-start mt-4 gap-6 bg-white p-4 shadow-md">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[200px] p-5 h-auto border border-transparent hover:shadow-lg rounded-md hover:border-gray-500 transition duration-300"
        >
          <img
            src={
              product.image
                ? `${import.meta.env.VITE_SERVER_BASE_URL}/${product.image}`
                : "https://via.placeholder.com/150"
            }
            className="w-auto h-[100px] mx-auto"
            alt={product.name}
          />
          <p className="text-sm font-semibold text-start">{product.name}</p>
          <p className="text-sm text-start">
            Selling price : {product.selling_price} ৳
          </p>
          <button className="bg-primary px-8 py-2 mt-1 text-white rounded-sm">
            Add Billing
          </button>
        </div>
      ))}
    </div>
  );
}
