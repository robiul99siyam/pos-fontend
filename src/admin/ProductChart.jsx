import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useProduct } from "../hooks/useProduct";

export default function ProductChart() {
  const { state } = useProduct();
  const { loading, error } = useFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(state);
  return (
    <div className="overflow-x-auto">
      <ul className="flex gap-20 justify-start items-center font-semibold border-b-2 border-gray-200 pb-2">
        <li>Product Name</li>
        <li>Category</li>
        <li>Supplier</li>
        <li>Stock</li>
        <li>Buying Price</li>
        <li>Selling Price</li>
        <li>UOM</li>
      </ul>
    </div>
  );
}
