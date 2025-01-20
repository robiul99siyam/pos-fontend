import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useProduct } from "../../hooks/useProduct";
export default function ProductChart() {
  const { state } = useProduct();
  const { loading, error } = useFetch();

  console.log(state);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        {/* Table Header */}
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left font-semibold">Product Name</th>
            <th className="px-6 py-4 text-left font-semibold">Category</th>
            <th className="px-6 py-4 text-left font-semibold">Supplier</th>
            <th className="px-6 py-4 text-left font-semibold">Stock</th>
            <th className="px-6 py-4 text-left font-semibold">Buying Price</th>
            <th className="px-6 py-4 text-left font-semibold">Selling Price</th>
            <th className="px-6 py-4 text-left font-semibold">UOM</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {state?.products.map((product, index) => (
            <tr
              key={product.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="px-6 py-4 flex items-center gap-3">
                <img
                  src={
                    product.image
                      ? `${import.meta.env.VITE_SERVER_BASE_URL}/${
                          product.image
                        }`
                      : "https://via.placeholder.com/150"
                  }
                  className="w-12 h-12 rounded-full"
                  alt=""
                />
                <span>{product.name}</span>
              </td>
              <td className="px-6 py-4">{product.category.name}</td>
              <td className="px-6 py-4">{product.supplier.name}</td>
              <td
                className={`px-6 py-4 ${
                  product.stock >= 100
                    ? "text-green-800 font-semibold"
                    : "text-red-500 font-semibold"
                }`}
              >
                {product.stock}
              </td>
              <td className="px-6 py-4">{product.cost_price}</td>
              <td className="px-6 py-4">{product.selling_price}</td>
              <td className="px-6 py-4">{product.uom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
